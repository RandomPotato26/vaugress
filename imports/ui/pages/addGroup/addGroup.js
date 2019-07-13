import {groups} from "../../../api/groups/groups";
import {group} from "../../../api/schemas/s_group";

import './addGroup.html'

Template.addGroup.helpers({
    GroupSchema: group
});