Template.studentAction.events({
    'click .jsUpdate': function () {
        FlowRouter.go('studentUpdate', {id: this._id});
    },
    'click .jsRemove': function () {
        var self = this;
        alertify.confirm("Are you sure want to delete?",
            function () {
                Collection.Student.remove({_id: self._id}); /// remove by _id?
                alertify.success('Deleted');
            },
            function () {
                alertify.error('Cancel');
            });
    }
});
//Update
Template.studentUpdate.onCreated(function () {
    let studentId = FlowRouter.getParam("id");
    let selector = {_id: studentId};//dynamic
    //let selector={};// find all
    this.subscribe("student", selector);
});

Template.studentUpdate.helpers({
    data: function () {
        var id = FlowRouter.getParam('id');
        var student = Collection.Student.findOne({_id: id});
        return student;
    }
});
//hook
AutoForm.hooks({
        studentInsert:{//id autoform
            before:{
                insert:function(doc){
                    doc._id=idGenerator.gen(Collection.Student, 3);
                    return doc;
                }
            },
            onSuccess(formType, id){
                //Bert.Alert('Successfully Added', 'success', 'growl-top-right');
                alertify.alert('Successfully Added');
                FlowRouter.go('student');
            },
            onError(formType, error){
                alertify.error(error.message);
                //Bert.alert(error.message, 'danger', 'growl-top-right');
            }
        },
        studentUpdate:{//id autoform
            onSuccess(formType, id){
                //Bert.Alert('Successfully Added', 'success', 'growl-top-right');
                alertify.alert('Successfully Added');
                FlowRouter.go('student');
            },
            onError(formType, error){
                alertify.error(error.message);
                //Bert.alert(error.message, 'danger', 'growl-top-right');
            }
        }
    }
)


