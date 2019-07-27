import { Meteor } from 'meteor/meteor';
import {seriesQuery, Series} from "../series";
// Meteor.publish('groups.all', function () {
//     return groups.find();
// });
Meteor.publish('series.names', function () {
    return Series.find({}, {fields: {'title':1, '_id':1, 'authors':1, 'groups':1, 'chapters':1 }});
});
Meteor.publish('series.byGroup', function (ID) {
    return Series.find( seriesQuery(ID).find );
});
// $or: [
//     { private: { $ne: true } },
//     { owner: this.userId },
// ],