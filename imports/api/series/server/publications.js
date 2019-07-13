import { Meteor } from 'meteor/meteor';
import {Series} from "../series";
// Meteor.publish('groups.all', function () {
//     return groups.find();
// });
Meteor.publish('series.names', function () {
    return Series.find({}, {fields: {'title.alias':1, '_id':1, 'authors':1 }});
});
