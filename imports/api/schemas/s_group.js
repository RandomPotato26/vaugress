import SimpleSchema from "simpl-schema";

const Member = new SimpleSchema({
    ID: {
        type: String,
        regEx: /.{24}/
    },
    username: {
        type: String,
        min: 3
    },
});

const Series = new SimpleSchema({
    ID: {
        type: String,
        regEx: /.{24}/
    },
    alias: {
        type: String,
    },
});

const Wants = new SimpleSchema({
    role: {
        type: String,
        allowedValues: ['TL', 'PR', 'CL', 'RD', 'QC']
    },
    amount: {
        type: String,
        min: 0,
    },
});


const Group = new SimpleSchema({

    name: {
        type: String,
        min: 3
    },
    members: {
        type: Array,
    },
    "members.$": {
        type: Member
    },
    series: {
        type: Array,
    },
    "series.$": {
        type: Series
    },
    discord: {
        type: String,
        regEx: /(https?:\/\/)?(www\.)?(discord\.(gg|io|me|li)|discordapp\.com\/invite)\/.+[a-z]/,
        optional: true
    },
    mangadex:{
        type: String,
        regEx: /(https?:\/\/)?(mangadex\.(org)\/group)\/\d+.*/,
        optional: true
    },
    website:{
        type: String,
        regEx: SimpleSchema.RegEx.Url,
        optional: true
    },
    status: {
        type: String,
        label: "Current Status",
        optional: true,
        allowedValues: ['Assigned', 'Taken','Working', 'Complete']
    },
    relabelAssign: {
        type: Boolean,
        label: "Re-labels \"Assign\" to \"Taken\""
    },
    allowSelfAssign: {
        type: Boolean,
        label: "Allows members to assign themselves tasks",
        defaultValue: false
    },
    allowAutoAssign: {
        type: Boolean,
        label: "BETA, DOES NOTHING: members assigned tasks automatically",
        optional: true,
        defaultValue: false
    },
    combineClWithRd: {
        type: Boolean,
        label: "Combine cleaning and redrawing as one role",
        defaultValue: false
    },
    QC: {
        type: Boolean,
        label: "Use a Quality Control roll",
        defaultValue: true
    },

    wantedRoles: {
        type: Array,
        optional: true,
        maxCount: 5
    },
    "wantedRoles.$": {
        type: Wants
    },

});

export {Group as group, Member as member, Series as series, Wants as wants};