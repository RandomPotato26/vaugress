import { AccountsTemplates } from 'mateor/useraccounts_semantics-ui'

AccountsTemplates.configure({
    defaultTemplate: 'App_home',
    defaultLayout: 'App_body',
    defaultLayoutRegions: {
        nav: 'myNav',
        footer: 'myFooter'
    },
    defaultContentRegion: 'main'
});