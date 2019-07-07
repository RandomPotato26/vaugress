// Methods related to links

import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';

Meteor.methods({
  'links.insert'(name, link, mods, members, applied, seperatecl_rd, QC, need ) {



    return Groups.insert({
      url,
      title,
      createdAt: new Date(),
    });
  },
});
