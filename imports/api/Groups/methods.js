import {groups} from "./groups";
import { Meteor } from 'meteor/meteor';


Meteor.methods({
    'groups.test'(tname) {
        return groups.insert({
            name: tname,
        });
    },
    'groups.names'() {
        return groups.find({}, {fields: {'name':1}});
    },
});


// 'post.get' (_id) {
// //     return Posts.findOne(_id);
// // }

//https://docs.mongodb.com/manual/reference/operator/query/