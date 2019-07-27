import { Mongo } from 'meteor/mongo';
import {chapter} from "../schemas/s_chapter";

let chapters = new Mongo.Collection('chapters');

chapters.attachSchema(chapter);

let chapterQuery = function (seriesID) {
    return {
        find: { series: { $in: seriesID}}
    };
};

export {chapters, chapterQuery};

