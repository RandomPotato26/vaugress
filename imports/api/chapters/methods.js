import SimpleSchema from 'simpl-schema';
import {chapter} from "../schemas/s_chapter";
import {chapters} from "./chapters";
import { Meteor } from 'meteor/meteor';

SimpleSchema.defineValidationErrorTransform(error => {
    const ddpError = new Meteor.Error(error.message);
    ddpError.error = 'validation-error';
    ddpError.details = error.details;
    return ddpError;
});

const chapterValidation = chapter.newContext();
Meteor.methods({
    'chapters.add'(obj) {
        if(chapterValidation.validate(obj)){
            chapters.insert(obj);
        }
        else{ throw new Meteor.Error('invalid form')}
    },
    'chapters.byID'(ID) {
        return chapters.findOne({_id: ID}, {fields: {'name':1}});
    },
    'chapters.bySeries' (ID){
        return chapters.find({series: ID })
    }

});


// 'post.get' (_id) {
// //     return Posts.findOne(_id);
// // }

//https://docs.mongodb.com/manual/reference/operator/query/