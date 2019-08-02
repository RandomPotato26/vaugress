import './accountButton.html';

Template.accountButton.helpers({
    isLoggedIn: function () {
        return !!Meteor.user();
    }
});

Template.accountButton.events({
    "click #logout": function (event) {
        event.preventDefault();
        Meteor.logout();
    }
});