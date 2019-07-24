import {group} from "../../../api/schemas/s_group";

import './addGroup.html'

Template.addGroup.helpers({
    GroupSchema: group,

    isChecked() {

        return Session.get("statevalue");
    }
});

Template.addGroup.onCreated(function () {
   Session.set("statevalue", false);
});

Template.addGroup.events({
    'change input': function(event) {
        if(event.target.name === 'displayMore'){
            var x = event.target.checked;
            Session.set("statevalue", x);
        }

    }
});