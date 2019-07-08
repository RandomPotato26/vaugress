
import './signup.html';
import {user} from "../../../api/schemas/s_user";

Template.signup.helpers({
    userTemplate(){
        return user;
    }  ,
});

