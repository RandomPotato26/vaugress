
import { Meteor } from 'meteor/meteor';


Meteor.methods({
    'groups.insert'(title, url) {


        return Links.insert({
            url,
            title,
            createdAt: new Date(),
        });
    },
});
