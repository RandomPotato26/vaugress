import { Mongo } from 'meteor/mongo';
import {group} from "../schemas/s_group";

let groups = new Mongo.Collection('groups');

groups.attachSchema(group);

let groupQuery = function (ID) {
    return {
        find: { _id: ID}
    };
};

export {groups, groupQuery};

