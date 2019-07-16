import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

// FlowRouter.triggers.enter([AccountsTemplates.ensureSignedIn]);
//Templates
import '../../ui/components/groupSelect/groupSelect.js';
import '../../ui/components/afArraySem/afArrayField_sem.js';


//Components
import '../../ui/layouts/body/body.js';
import '../../ui/components/nav/nav.js';
import '../../ui/components/footer/footer.js';
import '../../ui/components/chapterTable/chapterTable.js';

//Pages
import '../../ui/pages/home/home.js';
import '../../ui/pages/signup/signup.js';
import '../../ui/pages/not-found/not-found.js';

import '../../ui/pages/overview/overview.js';
import '../../ui/pages/addGroup/addGroup.js';
import '../../ui/pages/addSeries/addSeries.js';
import '../../ui/pages/addChapter/addChapter.js';


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

FlowRouter.notFound = {
  action() {
    BlazeLayout.render('App_body', { main: 'App_notFound' });
  },
};


