import {Meteor} from "meteor/meteor";
import {user} from "../../api/schemas/s_user";

Meteor.users.attachSchema(user);