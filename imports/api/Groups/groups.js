import { Mongo } from 'meteor/mongo';
import {TL} from "../schemas/s_roles";

let Groups = new Mongo.Collection('groups');

Groups.schema = TL;
Groups.attachSchema(Groups.schema);


export {Groups as groups};

