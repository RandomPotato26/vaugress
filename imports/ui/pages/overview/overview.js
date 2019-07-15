import {groups} from "../../../api/groups/groups";
import {Series} from "../../../api/series/series";

import './overview.html'
import {Template} from "meteor/templating";
import {Meteor} from "meteor/meteor";


Template.overview.helpers({
    TotalGroups: groups.find().count(),
    getSeries: function(seriesArray) {
        // console.log(Series.find( {_id: {$in:seriesArray} } ).fetch(), "array in ", seriesArray);
        return Series.find({_id: {$in:seriesArray} }).fetch();
    },
    getGroups: function () {
        // console.log(groups.find().fetch());
        return groups.find().fetch();
    },
    totalSeries: function (seriesArray) {
        return seriesArray.length;
    },
    print: function (toPrint) {
        console.log(toPrint);
    }

});

Template.overview.onCreated(function bodyOnCreated() {
    Meteor.subscribe('groups.names');
    Meteor.subscribe('series.names');
});
Template.overview.onRendered(function () {

});