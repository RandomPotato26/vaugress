import {Meteor} from "meteor/meteor";
import {user} from "../../api/schemas/s_user";


import SimpleSchema from 'simpl-schema';


// import './userTemplate.html'
// import './useraccountTest.html'

Meteor.users.deny({
    update: function() {
        return true;
    }
});

AccountsTemplates.removeField('password');
AccountsTemplates.removeField('email');
AccountsTemplates.addFields([
    {
        _id: "username",
        type: "text",
        displayName: "username",
        required: true,
        minLength: 5,
    },
    {
        _id: 'email',
        type: 'email',
        required: true,
        displayName: "email",
        re: /.+@(.+){2,}\.(.+){2,}/,
        errStr: 'Invalid email',
    },
    {
        _id: 'username_and_email',
        placeholder: 'username or email',
        type: 'text',
        required: true,
        displayName: "Login",
    },
    {
        _id: 'password',
        type: 'password',
        required: true,
        minLength: 6,
        re: /(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/,
        errStr: 'At least 1 digit, 1 lower-case and 1 upper-case',
    },
    {
        _id: 'useMD',
        type: 'checkbox',
        displayName: "use Mangadex Integration",
        required: false
    },
    {
        _id: 'MDname',
        type: 'text',
        displayName: "Mangadex Name",
        required: false,
    },
    {
        _id: 'MDlink',
        type: 'text',
        re: /(https?:\/\/)?(mangadex\.(org)\/user)\/\d+.*/,
        errStr: 'Must be a link to a user',
        displayName: "Mangadex Link",
        required: false,
    },
    {
        _id: 'group',
        type: 'text',
        displayName: "Group",
        template: 'groupSelect',
        required: false,
    },
    {
        _id: 'discord',
        type: 'text',
        re: /.*#[0-9]{4}/,
        errStr: 'Must be a discord name e.g. Example#1234',
        displayName: "Discord",
        required: false,
    },




]);

Meteor.users.attachSchema(user);



AccountsTemplates.configure({
        // Behavior
    confirmPassword: true,
    enablePasswordChange: true,
    // forbidClientAccountCreation: false, //TODO:set true on release
    overrideLoginErrors: false,
    sendVerificationEmail: false,
    focusFirstInput: true,

    // Appearance
    hideSignUpLink: true,
    showAddRemoveServices: false,
    showForgotPasswordLink: true,
    showLabels: true,
    showPlaceholders: true,

    // Client-side Validation
    continuousValidation: true,
    negativeFeedback: true,
    negativeValidation: true,
    positiveValidation: true,
    positiveFeedback: true,
    showValidating: true,

    // Privacy Policy and Terms of Use
    privacyUrl: 'privacy',
    termsUrl: 'terms-of-use',

    // Redirects
    homeRoutePath: '/',
    redirectTimeout: 4000,

    // Hooks
    // onLogoutHook: myLogoutFunc,
    // onSubmitHook: mySubmitFunc,
    // preSignUpHook: myPreSubmitFunc,
    // postSignUpHook: myPostSubmitFunc,

    // Texts
    texts: {
        button: {
            signUp: "Sign Up"
        },
        title: {
            forgotPwd: "Forget your password? LOL"
        },
        navSignIn: "signIn",
        navSignOut: "signOut",
        optionalField: "optional",
        pwdLink_pre: "",
        pwdLink_link: "forgotPassword",
        pwdLink_suff: "",
        resendVerificationEmailLink_pre: "Verification email lost?",
        resendVerificationEmailLink_link: "Send again",
        resendVerificationEmailLink_suff: "",
        sep: "OR",
        signInLink_pre: "ifYouAlreadyHaveAnAccount",
        signInLink_link: "signin",
        signInLink_suff: "",
        signUpLink_pre: "dontHaveAnAccount",
        signUpLink_link: "signUp",
        signUpLink_suff: "",
        socialAdd: "add",
        socialConfigure: "configure",
        socialRemove: "remove",
        socialSignIn: "signIn",
        socialSignUp: "signUp",
        socialWith: "with",
        termsPreamble: "clickAgree",
        termsPrivacy: "privacyPolicy",
        termsAnd: "and",
        termsTerms: "terms",
    },

});
