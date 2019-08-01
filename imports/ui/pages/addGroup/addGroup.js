import {group} from "../../../api/schemas/s_group";

import './addGroup.html'
import {Meteor} from "meteor/meteor";

Template.addGroup.helpers({
    GroupSchema: group,

    isChecked() {

        return Template.instance().stateValue.get();
    }
});

Template.addGroup.onCreated(function () {
   this.stateValue = new ReactiveVar( false );
});

Template.addGroup.events({
    'change input': function(event) {
        if(event.target.name === 'displayMore'){
            var x = event.target.checked;
            Template.instance().stateValue.set(x);
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
            Template.instance().stateValue.set(false);
            this.done();
            return false;

        }
    }
});