import {Template} from "meteor/templating";

import './chapterTable.html';
import {chapterQuery, chapters} from "../../../api/chapters/chapters";

Template.chapterTable.onCreated(function bodyOnCreated() {
    this.editAll = new ReactiveVar();


});

Template.chapterTable.events({
    'change input': function(event) {

        if(event.target.name === "editAll"){
            var y = event.target.checked;
            Template.instance().editAll.set(y);
        }
    }

});

Template.chapterTable.helpers({
    getEditAll: function () {
        return Template.instance().editAll.get();
    },

    print(t, m) {
        console.log(t, Template.instance());
    },
    getChapters: function (seriesID) {
        return chapters.find(chapterQuery([seriesID]).find, {sort: {number: 1}}).fetch();
    },

});