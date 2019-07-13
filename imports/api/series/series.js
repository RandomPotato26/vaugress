import { Mongo } from 'meteor/mongo';
import {series} from "../schemas/s_series";

let Series = new Mongo.Collection('series');

// Series.attachSchema(series);


export {Series};

