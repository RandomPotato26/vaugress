import {groups} from "./groups";
import { Meteor } from 'meteor/meteor';

Meteor.methods({
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