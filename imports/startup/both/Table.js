import {Template} from "meteor/templating";
import {chapters} from "../../api/chapters/chapters";
import Tabular from 'meteor/aldeed:tabular';
import moment from 'meteor/momentjs:moment'

new Tabular.Table({
    name: "Chapters",
    collection: chapters,
    columns: [
        {data: "number", title: "Number"},
        {data: "volume", title: "Vol"},
        {data: "title", title: "Title"},

        {data: "series", title: "Series"},


    ],
    paging: false,
    limit: 300,
    buttons: [
        'copy', 'excel', 'pdf'
    ],
    autoWidth: true,
});

