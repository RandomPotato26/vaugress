import './nav.html';


Template.nav.helpers({
   CurrentTab: function () {
        return Session.get('currentTab');
   },
   equals: function (a, b) {
       return a == b;
   }
});

Template.nav.onCreated(function(){
    this.autorun(() => {
        FlowRouter.watchPathChange();
        Session.set('currentTab', FlowRouter.current().path);
    });
});
