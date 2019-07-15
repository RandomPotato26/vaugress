import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';


// FlowRouter.triggers.enter([AccountsTemplates.ensureSignedIn]);

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

// AccountsTemplates.configure({
//   defaultLayoutType: 'blaze-to-react',
//   defaultTemplate: 'fullPageAtForm',  // default
//   defaultLayout: MainLayout,
//   defaultLayoutRegions: {
//     nav: nav,
//     footer: footer
// },
// defaultContentRegion: 'main'
// });
// AccountsTemplates.configureRoute('changePwd');
// AccountsTemplates.configureRoute('forgotPwd');
// AccountsTemplates.configureRoute('resetPwd');

// AccountsTemplates.configureRoute('enrollAccount');
// AccountsTemplates.configureRoute('verifyEmail');

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


