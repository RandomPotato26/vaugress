import './group.html';
import {Series} from "../../../api/series/series";
import {chapters} from "../../../api/chapters/chapters";
import {groups} from "../../../api/groups/groups";
import {Template} from "meteor/templating";


import Editor from 'datatables.net-editor-server'
import dataTablesSemantic from 'datatables.net-se'
import 'datatables.net-se/css/dataTables.semanticui.css'


Template.group.onCreated(function () {
    dataTablesSemantic(window, $);


    this.stateValue = new ReactiveVar( false );
    this.showModal = new ReactiveVar( false );
    this.selectedID = new ReactiveVar();


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
    },
    'click tbody > tr': function (event) {
        var dataTable = $(event.target).closest('table').DataTable();
        var rowData = dataTable.row(event.currentTarget).data();
        if (!rowData) return; // Won't be data if a placeholder row is clicked

        Template.instance().selectedID.set(rowData._id);
        Template.instance().showModal.set(true);
        console.log(rowData._id);

        // Your click handler logic here
    }
});

Template.group.onRendered( function () {
    var teamsTable = $('.Chapters').DataTable();
    console.log(teamsTable);

    // var editor = new $.fn.dataTable.Editor( {} );

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
    createModal: function () {
        return Template.instance().showModal.get();
    },
    isChecked() {
        return Template.instance().stateValue.get();
    },
    selector() {
        return {author: "Agatha Christie"}; // this could be pulled from a Session var or something that is reactive
    }


    }
);