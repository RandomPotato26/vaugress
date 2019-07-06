import { AccountsTemplates } from 'meteor/useraccounts:semantic-ui'

AccountsTemplates.configure({
    defaultTemplate: 'App_home',
    defaultLayout: 'App_body',
    defaultLayoutRegions: {},
    defaultContentRegion: 'main',
    showForgotPasswordLink: true,
    forbidClientAccountCreation: false
});
