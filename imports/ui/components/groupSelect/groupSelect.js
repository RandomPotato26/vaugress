import './groupSelect.html'

import {groups} from "../../../api/groups/groups";
import {Template} from "meteor/templating";
import {Meteor} from "meteor/meteor";

Template.groupSelect.events({
    'change select': (event) => {
        $('#at-field-group').val(event.currentTarget.value);
    }
});

// Declare a collection to hold the count object.

// Subscribe to the count for the current room.
Template.groupSelect.onCreated(function bodyOnCreated() {
    Meteor.subscribe('groups.names');
});

Template.groupSelect.onRendered(function () {

    $('.ui.selection.dropdown')
        .dropdown({
            clearable: true
        })
    ;
    $('.ui.inline.dropdown')
        .dropdown({
            clearable: true,
            placeholder: 'any'
        })
    ;
    $('.button')
        .on('click', function() {
            $('.ui.dropdown')
                .dropdown('clear')
            ;
        })
    ;
});



// Use the new collection.


Template.groupSelect.helpers({
    groupNameandID: groups.find(),
});