import SimpleSchema from "simpl-schema";


const Title = new SimpleSchema({
    alias: {
        type: String,
        min: 1,
        max: 15,
        optional: true
    },
    fullTitle: {
        type: String,
        max: 30,
        min: 1
    },
    altTitle: {
        type: String,
        min: 1,
        max: 30,
        optional: true

    },
    rawTitle: {
        type: String,
        min: 1,
        max: 30,
        optional: true
    }
});
const Series = new SimpleSchema({

    title: Title,

    authors: {
        type: Array,
        minCount: 1
    },
    'authors.$': {
        type: String,
    },
    artists: {
        type: Array,
        optional: true,
        minCount: 1
    },
    'artists.$': {
        type: String,
    },
    fonts: {
        type: Array,
        minCount: 0,
        optional: true,
    },
    'fonts.$': {
        type: String,
        max: 30
    },
    chapters: {
        type: Array,
        optional: true,
        minCount: 0,
    },
    'chapters.$': {
        type: String,
        regEx: SimpleSchema.RegEx.Id,
    },

},{tracker: Tracker});

export {Series as series}