import { Meteor } from 'meteor/meteor';
import {chapterQuery, chapters} from "../chapters";

// Meteor.publish('groups.all', function () {
//     return groups.find();
// });
Meteor.publish('chapters.names', function () {
    return chapters.find({}, {fields: {'title':1, '_id':1, 'series':1, 'number':1, 'volume':1 }});
});

Meteor.publish('chapters.bySeries', function (seriesID) {
    return chapters.find( chapterQuery(seriesID).find );
});
