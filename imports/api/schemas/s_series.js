import SimpleSchema from "simpl-schema";

const Title = new SimpleSchema({
    alias: {
        type: String,
        minLength: 1
    },
    fullTitle: {
        type: String,
        minLength: 1
    },
    altTitle: {
        type: String,
        minLength: 1,
    },
    rawTitle: {
        type: String,
        minLength: 1,
    }
});
const Series = new SimpleSchema({
    authors: {
        type: Array,
        minLength: 1
    },
    'author.$': {
        type: String,
    },
    artists: {
        type: Array,
        optional: true,
        minLength: 1
    },
    'artists.$': {
        type: String,
    },
    title: Title,
});

export {Series as series}