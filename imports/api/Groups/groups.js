import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';
import { group } from "../schemas/s_group.js";
import { user } from "../schemas/s_user.js";


let Groups = new Mongo.Collection('groups');

Groups.schema = group;
Groups.attachSchema(Groups.schema);
//TODO: find a better place to attach this schema to users
Meteor.users.attachSchema(user);

export {Groups as groups};

