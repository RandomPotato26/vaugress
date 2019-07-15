import {Template} from "meteor/templating";
import {chapters} from "../../../api/chapters/chapters";
import {Series} from "../../../api/series/series";
import {Meteor} from "meteor/meteor";

import './chapterTable.html';

Template.chapterTable.onCreated(function bodyOnCreated() {
    Meteor.subscribe('chapters.names');
    Meteor.subscribe('series.names');
});

Template.chapterTable.helpers({
    getChapter: function(chapterArray) {
        // console.log(Series.find( {_id: {$in:seriesArray} } ).fetch(), "array in ", seriesArray);
        console.log(chapterArray);
        console.log(chapters.find({_id: {$in:chapterArray} }).fetch());
        return chapters.find({_id: {$in:chapterArray} }).fetch();
    },


});