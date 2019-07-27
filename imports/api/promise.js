import {Meteor} from "meteor/meteor";

function callWithPromise(method, ...args ) {
    return new Promise((resolve, reject) => {
        Meteor.call(method, ...args, (err, res) => {
            if (err) reject('Something went wrong');
            resolve(res);
        });
    });
}

export {callWithPromise}