import SimpleSchema from "simpl-schema";

const role_base = new SimpleSchema({

    assigned: {
        type: Array,
        label: "Credit Name",
        optional: true
    },
    'assigned.$.name': String,
    'assigned.$.ID': {
        type: String,
        regEx: SimpleSchema.RegEx.Id,
    },
    assignDate: {
        type: Date,
        label: "Date Assigned",
        optional: true
    },
    complete: {
        type: Array,
        label: "Credit Name",
        optional: true
    },
    'complete.$.name': String,
    'complete.$.ID': {
        type: String,
        regEx: SimpleSchema.RegEx.Id,
    },
    completeDate: {
        type: Date,
        label: "Date Assigned",
        optional: true
    },
    status: {
        type: String,
        label: "Current Status",
        optional: true,
        allowedValues: ['Assigned', 'Taken','Working', 'Complete']
    }
});

const RL = new SimpleSchema({
    name: {
        type: String,
        label: "Credit Name",
        required: true
    },
    release_date: {
        type: Date,
        label: "Date Released",
        required: true
    },
});


//schema.label(fieldName)
const Chapter = new SimpleSchema({
    number: { type: SimpleSchema.Integer, min: 0, required: true},
    title: String,
    volume: String,
    TL: role_base,
    PR: role_base,
    CL: role_base,
    RD: role_base,
    QC: role_base,
    RL: RL

},{
    requiredByDefault: false,
    tracker: Tracker
});

export {Chapter as chapter, role_base as role, RL as releaser};