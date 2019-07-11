import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';
import { group } from "../schemas/s_group.js";
import { user } from "../schemas/s_user.js";


let groups = new Mongo.Collection('groups');

// groups.schema = group;
// groups.attachSchema(groups.schema);

export {groups};

