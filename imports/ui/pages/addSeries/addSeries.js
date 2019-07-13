import {series} from "../../../api/schemas/s_series";
import {Series} from "../../../api/series/series";
import {Template} from "meteor/templating";
import {Meteor} from "meteor/meteor";

import './addSeries.html'

Template.addSeries.helpers({
    SeriesSchema: series
});
//TODO: remove is useless beside testing
Template.addSeries.onCreated(function bodyOnCreated() {
    Meteor.subscribe('series.names');
});
