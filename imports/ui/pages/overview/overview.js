import {groups} from "../../../api/groups/groups";

import './overview.html'
import {Template} from "meteor/templating";
import {Meteor} from "meteor/meteor";


Template.overview.helpers({

});

Template.overview.onCreated(function bodyOnCreated() {
    Meteor.subscribe('groups.names');
});