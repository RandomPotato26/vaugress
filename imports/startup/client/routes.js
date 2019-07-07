import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

// Import needed templates
import '../../ui/layouts/body/body.js';
import '../../ui/components/nav/nav.js';
import '../../ui/components/footer/footer.js';

import '../../ui/pages/home/home.js';
import '../../ui/pages/login/login.js';
import '../../ui/pages/not-found/not-found.js';

FlowRouter.triggers.enter([AccountsTemplates.ensureSignedIn]);


// Set up all routes in the app
FlowRouter.route('/', {
  name: 'App.home',
  action() {
    BlazeLayout.render('App_body', { nav: 'nav', main: 'App_home', footer:'footer' });
  },
});

FlowRouter.notFound = {
  action() {
    BlazeLayout.render('App_body', { main: 'App_notFound' });
  },
};

AccountsTemplates.configureRoute('signIn', {
  layoutType: 'blaze',
  name: 'App.login',
  path: '/login',
  template: 'App_login',
  layoutTemplate: 'App_body',
  layoutRegions: {
    nav: 'nav',
    footer: 'footer'
  },
  contentRegion: 'main',
  redirect: '/'
});



