
import { Meteor } from 'meteor/meteor';


Meteor.methods({
    'groups.insert'(title, url) {
        return Links.insert({
            url,
            title,
            createdAt: new Date(),
        });
    },
    'groups.name'() {
        return CollectionName.find({}, {fields: {'name':1}});
    },
});


// 'post.get' (_id) {
// //     return Posts.findOne(_id);
// // }

//https://docs.mongodb.com/manual/reference/operator/query/