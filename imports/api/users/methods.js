import SimpleSchema from 'simpl-schema';
import { check } from 'meteor/check';
import { Meteor } from 'meteor/meteor';
import  { user} from "../schemas/s_user";

SimpleSchema.defineValidationErrorTransform(error => {
    const ddpError = new Meteor.Error(error.message);
    ddpError.error = 'validation-error';
    ddpError.details = error.details;
    return ddpError;
});

const argSchema = new SimpleSchema( user, { check });

Meteor.methods({
    addUser(obj) {
        argSchema.validate(obj);
        Meteor.user().insert(obj);

    },
});