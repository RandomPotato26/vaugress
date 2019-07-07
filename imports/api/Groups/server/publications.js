// All links-related publications

import { Meteor } from 'meteor/meteor';

Meteor.publish('groups.all', function () {
    return Groups.find();
});
