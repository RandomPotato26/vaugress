import './popupEdit.html'
import {chapter} from "../../../api/schemas/s_chapter";
import {Template} from "meteor/templating";

Template.popupEdit.onCreated(function () {
    console.log(Template.instance().get("selectedID").get());
});
Template.popupEdit.helpers({
    chapterSchema: chapter,

});
Template.popupEdit.events({
    'click .button': function(event){
        if($(event.target).hasClass('cancel')){
            Template.instance().get("showModal").set(false);

        }
        // $.tab('set state', event.target.id);
    },
});

Template.popupEdit.onRendered(function () {
    $('.ui.modal').modal({
        closable  : true,
        onDeny    : function(){
            Template.instance().get("showModal").set(false);

            return false;
        },
        onApprove : function() {
            console.log();


        }
    })
        .modal('show')
    ;

});
