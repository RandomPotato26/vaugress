import {Meteor} from "meteor/meteor";
import {user} from "../../api/schemas/s_user";


import SimpleSchema from 'simpl-schema';







Meteor.users.attachSchema(user);