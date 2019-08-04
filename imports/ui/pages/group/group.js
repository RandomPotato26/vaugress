import './group.html';
import {Series} from "../../../api/series/series";
import {chapterQuery, chapters} from "../../../api/chapters/chapters";
import {groups} from "../../../api/groups/groups";
import {Template} from "meteor/templating";

Template.group.onCreated(function () {
    this.stateValue = new ReactiveVar( false );

    //must assign this to a var to use the .ready() callback
    var s = Meteor.subscribe('series.byGroup', FlowRouter.getParam('groupID'));
    Meteor.subscribe('groups.byID', FlowRouter.getParam('groupID'));

    this.autorun(() => {
        if(s.ready()){
            var seriesIDs = [];
            Series.find({}, {fields:{ _id:1 }}).forEach(function(myDoc) {
                seriesIDs.push(myDoc._id);
            });
            Meteor.subscribe('chapters.bySeries', seriesIDs );
        }
    });
});
Template.group.events({
    'click .button': function(event){
        $.tab('change tab', event.target.id);
        // $.tab('set state', event.target.id);

    }
});

Template.group.onRendered( function () {

});

Template.group.events({
    'change input': function(event) {
        if(event.target.name === 'viewDates'){
            var x = event.target.checked;
            Template.instance().stateValue.set(x);
        }
    }
});


Template.group.helpers({
    print(t, m) {
        console.log(t, m);
    },
    target: function() {
        return groups.findOne();
    },
    getSeries: function () {
        return Series.find().fetch();
    },
    isChecked() {
        return Template.instance().stateValue.get();
    }


    }
);