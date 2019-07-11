
import './signup.html';
import {user} from "../../../api/schemas/s_user";


Template.signup.helpers({
    userTemplate(){
        return user;
    }  ,


});



Template.signup.onRendered = function() {
    $('.ui.checkbox').checkbox('toggle', AutoForm.getFieldValue('MD.use'), function() {});
};

// Template.registerHelper('currentFieldValue', function (fieldName) {
//     return AutoForm.getFieldValue(fieldName) || 'empty';
// });