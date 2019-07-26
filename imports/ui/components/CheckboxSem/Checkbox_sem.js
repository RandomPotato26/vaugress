import './Checkbox_sem.html'

AutoForm.addInputType('sem-checkbox', {
    template: 'Checkbox_sem',
    valueOut: function () {
        return !!this.is(":checked");
    },
    valueConverters: {
        "string": AutoForm.valueConverters.booleanToString,
        "stringArray": AutoForm.valueConverters.booleanToStringArray,
        "number": AutoForm.valueConverters.booleanToNumber,
        "numberArray": AutoForm.valueConverters.booleanToNumberArray
    },
    contextAdjust: function (context) {
        if (context.value === true) {
            context.atts.checked = "";
        }
        //don't add required attribute to checkboxes because some browsers assume that to mean that it must be checked, which is not what we mean by "required"
        delete context.atts.required;
        return context;
    }

});

Template.Checkbox_sem.onRendered(function() {
    this.$('ui.checkbox').checkbox();
});


AutoForm.debug();
Template.Checkbox_sem.helpers({
    forceBoolean: function(input){
        console.log(input !== 'on');
        return input !== 'on';
    },
    isChecked: function () {
        console.log($('.ui.checkbox').checkbox('is checked'));
        return false;
    },
   print: function (a) {

       console.log(a);
   }
});