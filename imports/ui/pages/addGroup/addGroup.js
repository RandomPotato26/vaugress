import {group} from "../../../api/schemas/s_group";

import './addGroup.html'
import {Meteor} from "meteor/meteor";

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

AutoForm.hooks({
    addGroup: {
        onSubmit: function (insertDoc, updateDoc, currentDoc) {

            // function callWithPromise(method, param1, param2) {
            //     return new Promise((resolve, reject) => {
            //         Meteor.call(method, param1, param2, (err, res) => {
            //             if (err) reject('Something went wrong');
            //             resolve(res);
            //         });
            //     });
            // }
            //
            // callWithPromise("series.add", insertDoc)
            //     .then((res) => callWithPromise("series.byFullTitle", insertDoc.title.fullTitle))
            //     .then(function(seriesID)  {
            //         callWithPromise("groups.addSeries",  insertDoc.groups[0], seriesID._id );
            //
            //     });

            console.log(insertDoc);
            // console.log("People doc with auto values", insertDoc);
            // AutoForm.resetForm('addSeries');

            this.done();
            return false;

        }
    }
});