import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';
import { group } from "../schemas/s_group.js";
import { user } from "../schemas/s_user.js";


let Groups = new Mongo.Collection('groups');

Groups.schema = group;
Groups.attachSchema(Groups.schema);


export {Groups as groups};

