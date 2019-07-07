import SimpleSchema from "simpl-schema";


const UserProfile = new SimpleSchema({
    discord: {
        type: String,
        regEx: /.*#[0-9]{4}/,
        max:30,
        optional: true
    },
    bio: {
        type: String,
        max: 300,
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
        optional: true
    },
    "email.address": {
        type: String,
        label: "Email Adress",
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
        max: 24
    },
    "MD.link": {
        type: String,
        regEx: /(https?:\/\/)?(mangadex\.(org)\/user)\/\d+.*/,
        optional: true
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
},{tracker: Tracker});

export {User as user, UserProfile as userProfile}