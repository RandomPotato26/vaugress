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

    title: Title,

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
    fonts: {
        type: Array,
        minLength: 0,
        optional: true,
    },
    'fonts.$': {
        type: String,
        max: 30
    },

});

export {Series as series}