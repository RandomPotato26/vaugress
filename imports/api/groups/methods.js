import SimpleSchema from 'simpl-schema';
import {groups} from "./groups";
import {group} from "../schemas/s_group";
import { Meteor } from 'meteor/meteor';

SimpleSchema.defineValidationErrorTransform(error => {
    const ddpError = new Meteor.Error(error.message);
    ddpError.error = 'validation-error';
    ddpError.details = error.details;
    return ddpError;
});

const groupValidation = group.newContext();
Meteor.methods({
    'groups.add'(obj) {
        if(groupValidation.validate(obj)){
            groups.insert(obj);
        }
        else{ throw new Meteor.Error('invalid form')}
    },
    'groups.addSeries'(groupID, seriesID) {
        groups.update({_id:groupID}, {$push:{series: seriesID}},);
    },
    'groups.size'() {
        return groups.rawDatabase().stats();
    },
    'groups.test'(tname) {
        return groups.insert({
            name: tname,
        });
    },
    'groups.byID'(ID) {
        return groups.findOne({_id: ID});
    },
    'groups.nameByID'(ID) {
        return groups.findOne({_id: ID}, {fields: {'name':1}});
    },

});


// 'post.get' (_id) {
// //     return Posts.findOne(_id);
// // }

//https://docs.mongodb.com/manual/reference/operator/query/