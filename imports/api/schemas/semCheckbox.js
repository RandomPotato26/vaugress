import AutoForm from 'meteor/aldeed:autoform';

AutoForm.addInputType("sem-checkbox", {
    template: "afSemCheckbox",
    valueOut: function () {
        return !!this.is(":checked");
    },
});
