
import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';


Meteor.methods({
    'groups.insert'(title, url) {
        check(url, String);
        check(title, String);

        return Links.insert({
            url,
            title,
            createdAt: new Date(),
        });
    },
});
