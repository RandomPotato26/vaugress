import './afArrayField_sem.html'

AutoForm.setDefaultTemplateForType('afArrayField', 'sem');

Template.afArrayField_sem.helpers({
    equals: function(a, b) {
        return a.equals(b);
    }
});