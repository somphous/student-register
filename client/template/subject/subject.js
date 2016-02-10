Template.subjectAction.events({
    'click .jsUpdate': function () {
        FlowRouter.go('subjectUpdate', {id: this._id});
    },
    'click .jsRemove': function () {
        var self = this;
        alertify.confirm("Are you sure want to delete?",
            function () {
                Collection.Subject.remove({_id: self._id}); /// remove by _id?
                alertify.success('Deleted');
            },
            function () {
                alertify.error('Cancel');
            });
    }
});
//Update
Template.subjectUpdate.onCreated(function () {
    let subjectId = FlowRouter.getParam("id");
    let selector = {_id: subjectId};//dynamic
    //let selector={};// find all
    this.subscribe("subject", selector);
});

Template.subjectUpdate.helpers({
    data: function () {
        var id = FlowRouter.getParam('id');
        var subject = Collection.Subject.findOne({_id: id});
        return subject;
    }
});
//hook
AutoForm.hooks({
        subjectInsert: {//id autoform
            before: {
                insert: function (doc) {
                    doc._id = idGenerator.gen(Collection.Subject, 3);
                    return doc;
                }
            },
            onSuccess(formType, id){
                //Bert.Alert('Successfully Added', 'success', 'growl-top-right');
                alertify.alert('Successfully Added');
                FlowRouter.go('subject');
            },
            onError(formType, error){
                alertify.error(error.message);
                //Bert.alert(error.message, 'danger', 'growl-top-right');
            }
        },
        subjectUpdate: {//id autoform
            onSuccess(formType, id){
                //Bert.Alert('Successfully Added', 'success', 'growl-top-right');
                alertify.alert('Successfully Added');
                FlowRouter.go('subject');
            },
            onError(formType, error){
                alertify.error(error.message);
                //Bert.alert(error.message, 'danger', 'growl-top-right');
            }
        }
    }
)

