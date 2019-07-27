import {series} from "../../../api/schemas/s_series";
import {Series} from "../../../api/series/series";
import {Template} from "meteor/templating";
import {Meteor} from "meteor/meteor";

import './addSeries.html'
import {groups} from "../../../api/groups/groups";
import {callWithPromise} from "../../../api/promise";

Template.addSeries.onCreated(function bodyOnCreated() {
    Meteor.subscribe('series.names');//TODO: remove is useless beside testing
    Meteor.subscribe('groups.names');
});

Template.addSeries.onRendered(function () {
    $('.ui.dropdown')
        .dropdown()
    ;
});

Template.addSeries.helpers({
    SeriesSchema: series,
    groupOptions: function () {
        return groups.find().map(function (c) {
            return {label: c.name, value: c._id};
        });
    },
});

AutoForm.debug();
AutoForm.hooks({
    addSeries: {
        onSubmit: function (insertDoc, updateDoc, currentDoc) {



            callWithPromise("series.add", insertDoc)
                .then((res) => callWithPromise("series.byFullTitle", insertDoc.title.fullTitle))
                .then(function(seriesID)  {
                    callWithPromise("groups.addSeries",  insertDoc.groups[0], seriesID._id );

                });


            // console.log("People doc with auto values", insertDoc);
            // AutoForm.resetForm('addSeries');

            this.done();
            return false;

        }
    }
});