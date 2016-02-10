Template.teacherAction.events({
    'click .jsUpdate': function () {
        FlowRouter.go('teacherUpdate', {id: this._id});
    },
    'click .jsRemove': function () {
        var self = this;
        alertify.confirm("Are you sure want to delete?",
            function () {
                Collection.Teacher.remove({_id: self._id}); /// remove by _id?
                alertify.success('Deleted');
            },
            function () {
                alertify.error('Cancel');
            });
    }
});
//Update
Template.teacherUpdate.onCreated(function () {
    let teacherId = FlowRouter.getParam("id");
    let selector = {_id: teacherId};//dynamic
    //let selector={};// find all
    this.subscribe("teacher", selector);
});
Template.teacherUpdate.helpers({
    data: function () {
        var id = FlowRouter.getParam('id');
        var teacher = Collection.Teacher.findOne({_id: id});
        return teacher;
    }
});
//hook
AutoForm.hooks({
        teacherInsert:{//id autoform
            before:{
                insert:function(doc){
                    doc._id=idGenerator.gen(Collection.Teacher, 3);
                    return doc;
                }
            },
            onSuccess(formType, id){
                //Bert.Alert('Successfully Added', 'success', 'growl-top-right');
                alertify.alert('Successfully Added');
                FlowRouter.go('teacher');
            },
            onError(formType, error){
                alertify.error(error.message);
                //Bert.alert(error.message, 'danger', 'growl-top-right');
            }
        },
        teacherUpdate:{//id autoform
            onSuccess(formType, id){
                //Bert.Alert('Successfully Added', 'success', 'growl-top-right');
                alertify.alert('Successfully Added');
                FlowRouter.go('teacher');
            },
            onError(formType, error){
                alertify.error(error.message);
                //Bert.alert(error.message, 'danger', 'growl-top-right');
            }
        }
    }
)


