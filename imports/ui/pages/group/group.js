import './group.html';
import {Series} from "../../../api/series/series";
import {chapters} from "../../../api/chapters/chapters";
import {groups} from "../../../api/groups/groups";

Template.group.onCreated(function () {
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


Template.group.helpers({
        print(m) {
            console.log(m);
        },
        target: function() {
            return groups.findOne();
        },
        getSeries: function () {
            return Series.find().fetch();
        },
        getChapters: function () {
            return chapters.find().fetch();
        }

    }
);