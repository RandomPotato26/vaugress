import { Mongo } from 'meteor/mongo';
import {Links} from "../links/links";


let groups = new Mongo.Collection('groups');

// groups.schema = group;
// groups.attachSchema(groups.schema);
if(Meteor.isServer) {
    if(groups.find().count() == 0){
    const test = [
    {
        name: "TestBitch1",
        bloat: "fuck"
    },
    {
        name: "TestBitch2",
        bloat: "bitch"

    }];
    test.forEach(group => groups.insert(group))
    }
}


export {groups};

