import { Mongo } from 'meteor/mongo';
import {chapter} from "../schemas/s_chapter";

let chapters = new Mongo.Collection('chapters');

chapters.attachSchema(chapter);

export {chapters};

