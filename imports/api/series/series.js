import { Mongo } from 'meteor/mongo';
import {series} from "../schemas/s_series";

let Series = new Mongo.Collection('series');

Series.attachSchema(series);



// client & server
let seriesQuery = function (groupID) {
    return {
        find: { groups: groupID}
    };
};



export {Series, seriesQuery};

