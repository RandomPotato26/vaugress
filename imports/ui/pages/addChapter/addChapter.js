import {Template} from "meteor/templating";
import {chapter} from "../../../api/schemas/s_chapter";
import {Series} from "../../../api/series/series";

import './addChapter.html'
import {groups} from "../../../api/groups/groups";

Template.addChapter.onCreated(function bodyOnCreated() {
    Meteor.subscribe('series.names')
});

Template.addChapter.helpers({
    ChapterSchema: chapter,
    seriesOptions: function () {
        return Series.find().map(function (c) {
            return {label: c.title.fullTitle, value: c._id};
        });
    }
});



AutoForm.hooks({
    addChapter: {
        onSubmit: function (insertDoc, updateDoc, currentDoc) {

            let newID = Random.id();
            insertDoc._id = newID;

            function callWithPromise(method, param1, param2) {
                return new Promise((resolve, reject) => {
                    Meteor.call(method, param1, param2, (err, res) => {
                        if (err) reject('Something went wrong');
                        resolve(res);
                    });
                });
            }

            callWithPromise("chapters.add", insertDoc)
                .then((res) => callWithPromise("series.addChapter", insertDoc.series, newID));
            // AutoForm.resetForm('addSeries');

            this.done();
            return false;

        }
    }
});