import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

// FlowRouter.triggers.enter([AccountsTemplates.ensureSignedIn]);
//Templates
import './register-templates.js'


AccountsTemplates.configureRoute('signIn', {
  layoutType: 'blaze',
  name: 'signin',
  path: '/login',
  template: 'signup',
  layoutTemplate: 'App_body',
  layoutRegions: {
    nav: 'nav',
    footer: 'footer'
  },
  contentRegion: 'main',
  // redirect: '/user-profile'
});


AccountsTemplates.configureRoute('signUp', {
  layoutType: 'blaze',
  name: 'signup',
  path: '/sign-up',
  template: 'signup',
  layoutTemplate: 'App_body',
  layoutRegions: {
    nav: 'nav',
    footer: 'footer'
  },
  contentRegion: 'main',
  // redirect: '/user-profile'
});


// if (Meteor.isClient) {
//   FlowRouter.wait();
//   Tracker.autorun(function() {
//     if (AccountsTemplates._initialized && !FlowRouter._initialized) {
//       FlowRouter.initialize()
//     }
//   });
// }

//        DASHBOARD
FlowRouter.route('/', {
  name: 'App.home',
  action() {
    BlazeLayout.render('App_body', { nav: 'nav', main: 'App_home', footer:'footer' });
  },
});



FlowRouter.route('/overview', {
  name: 'App.addGroup',
  action() {
    BlazeLayout.render('App_body', { nav: 'nav', main: 'overview', footer:'footer' });
  },
});

FlowRouter.route('/add-group', {
  name: 'App.addGroup',
  action() {
    BlazeLayout.render('App_body', { nav: 'nav', main: 'addGroup', footer:'footer' });
  },
});

FlowRouter.route('/add-series', {
  name: 'App.addSeries',
  action() {
    BlazeLayout.render('App_body', { nav: 'nav', main: 'addSeries', footer:'footer' });
  },
});

FlowRouter.route('/add-chapter', {
  name: 'App.addSeries',
  action() {
    BlazeLayout.render('App_body', { nav: 'nav', main: 'addChapter', footer:'footer' });
  },
});

FlowRouter.route('/group/:groupID/private', {
  name: 'group.private',
  action() {
    BlazeLayout.render('App_body', { nav: 'nav', main: 'group', footer:'footer' });
  },
});
FlowRouter.route('/group/:groupID/public', {
  name: 'group.public',
  action() {
    BlazeLayout.render('App_body', { nav: 'nav', main: 'group', footer:'footer' });
  },
});
FlowRouter.route('/group/:groupID', {
  action() {
    FlowRouter.go('/group/:groupID/public', {groupID: FlowRouter.getParam('groupID')});

  },
});



FlowRouter.notFound = {
  action() {
    BlazeLayout.render('App_body', { main: 'App_notFound' });
  },
};


