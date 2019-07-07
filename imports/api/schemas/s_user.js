import SimpleSchema from "simpl-schema";


const UserProfile = new SimpleSchema({
    discord: {
        type: String,
        regEx: /.*#[0-9]{4}/,
        optional: true
    },
    bio: {
        type: String,
        optional: true
    },
});

const User = new SimpleSchema({
    username: {
        type: String,
        label: "Credit Name",
    },
    email: {
        type: Object,
        label: "Credit Name",
        optional: true
    },
    "email.address": {
        type: String,
        regEx: SimpleSchema.RegEx.Email
    },
    "email.verified": {
        type: Boolean,
        optional: true
    },
    //TODO: add mangadex integration
    MD: {
        type: Object,
        label: "NOT WORKING: Mangadex Integration",
        optional: true
    },
    "MD.name": {
        type: String,
        maxLength: 24
    },
    "MD.link": {
        type: String,
        regEx: /(https?:\/\/)?(mangadex\.(org)\/user)\/\d+.*/,
        option: true
    },
    createdAt: {
        type: Date
    },
    profile: {
        type: UserProfile,
        optional: true
    },
    // Make sure this services field is in your schema if you're using any of the accounts packages
    services: {
        type: Object,
        optional: true,
        blackbox: true
    },
    roles: {
        type: Object,
        optional: true,
        blackbox: true
    }
});

export {User as user, UserProfile as userProfile}