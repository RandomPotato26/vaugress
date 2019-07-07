import SimpleSchema from "simpl-schema";

const Group = new SimpleSchema({

    name: {
        type: String,
        min: 3
    },
    //TODO: add member and mods with users
    //TODO: add series
    discord: {
        type: String,
        regEx: /(https?:\/\/)?(www\.)?(discord\.(gg|io|me|li)|discordapp\.com\/invite)\/.+[a-z]/
    },
    status: {
        type: String,
        label: "Current Status",
        optional: true,
        allowedValues: ['Assigned', 'Taken','Working', 'Complete']
    },
    relabel_assign: {
        type: Boolean,
        label: "Re-labels \"Assign\" to \"Taken\""
    },
    allow_selfassign: {
        type: Boolean,
        label: "Allows members to assign themselves tasks",
        defaultValue: false
    },
    allow_autoassign: {
        type: Boolean,
        label: "BETA, DOES NOTHING: members assigned tasks automatically",
        optional: true,
        defaultValue: false
    },
    combine_cl_rd: {
        type: Boolean,
        label: "Combine cleaning and redrawing as one role",
        defaultValue: false
    },
    QC: {
        type: Boolean,
        label: "Use a Quality Control roll",
        defaultValue: true
    },
    wanted_roles:{

    }
});

export {Group as group};