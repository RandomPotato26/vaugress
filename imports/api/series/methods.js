import SimpleSchema from 'simpl-schema';
import {series} from "../schemas/s_series";
import {Series} from "./series";
import { Meteor } from 'meteor/meteor';

SimpleSchema.defineValidationErrorTransform(error => {
    const ddpError = new Meteor.Error(error.message);
    ddpError.error = 'validation-error';
    ddpError.details = error.details;
    return ddpError;
});

const seriesValidation = series.newContext();

Meteor.methods({
    'series.add'(obj) {
        if(seriesValidation.validate(obj)){
            Series.insert(obj);
        }
        else{ throw new Meteor.Error('invalid form')}
    },
    'series.getAlias'(ID){
        return Series.findOne({ _id:ID }, {fields:{'title.alias':1}})
    },
    'series.byFullTitle'(title){
        return Series.findOne({ 'title.fullTitle':title }, {fields:{'_id':1}})
    },
    'series.addChapter'(seriesID, chapterID) {
        console.log(seriesID, chapterID);
        Series.update({_id:seriesID}, {$push:{chapters: chapterID}},);
    },
    'series.byGroup' (groupID){
        return Series.findOne({groups: groupID});
    }

});


// 'post.get' (_id) {
// //     return Posts.findOne(_id);
// // }

//https://docs.mongodb.com/manual/reference/operator/query/