import {Template} from "meteor/templating";

import './chapterRow.html';

Template.chapterRow.onCreated(function bodyOnCreated() {
    this.id = new ReactiveVar();
    this.edit = new ReactiveVar( false );
    this.seriesID = new ReactiveVar();

});

Template.chapterRow.events({
    'change input': function(event) {
        if(event.target.name === Template.instance().id.get()){
            var x = event.target.checked;
            Template.instance().edit.set(x);
        }

    }

});

Template.chapterRow.helpers({
    setID: function (id, series) {
        Template.instance().seriesID.set(series);
        Template.instance().id.set(id);
    },
    getID: function () {
        return Template.instance().id.get();
    },
    getEdit: function () {
        return Template.instance().edit.get();
    },
    checkHandler: function () {
        return Template.instance().edit.get() ? 'checked' : false;
    },
    updateEdit: function (editAll) {
        Template.instance().edit.set(editAll);
    },
    print(t, m) {
        console.log(t, Template.instance());
    },


});