import { Meteor } from 'meteor/meteor';
import {Series} from "../series";
// Meteor.publish('groups.all', function () {
//     return groups.find();
// });
Meteor.publish('series.names', function () {
    return Series.find({}, {fields: {'title':1, '_id':1, 'authors':1, 'groups':1, 'chapters':1 }});
});
// $or: [
//     { private: { $ne: true } },
//     { owner: this.userId },
// ],