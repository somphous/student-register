Template.paymentAction.events({
    'click .jsUpdate': function () {
        FlowRouter.go('paymentUpdate', {id: this._id});
    },
    'click .jsRemove': function () {
        var self = this;
        alertify.confirm("Are you sure want to delete?",
            function () {
                Collection.Payment.remove({_id: self._id}); /// remove by _id?
                alertify.success('Deleted');
            },
            function () {
                alertify.error('Cancel');
            });
    }
});
//Update
Template.paymentUpdate.onCreated(function () {
    let paymentId = FlowRouter.getParam("id");
    let selector = {_id: paymentId};//dynamic
    //let selector={};// find all
    this.subscribe("payment", selector);
});
Template.paymentUpdate.helpers({
    data: function () {
        var id = FlowRouter.getParam('id');
        var payment = Collection.Payment.findOne({_id: id});
        return payment;
    }
});
//hook
AutoForm.hooks({
        paymentInsert:{//id autoform
            before:{
                insert:function(doc){
                    doc._id=idGenerator.gen(Collection.Payment, 3);
                    return doc;
                }
            },
            onSuccess(formType, id){
                //Bert.Alert('Successfully Added', 'success', 'growl-top-right');
                alertify.alert('Successfully Added');
                FlowRouter.go('payment');
            },
            onError(formType, error){
                alertify.error(error.message);
                //Bert.alert(error.message, 'danger', 'growl-top-right');
            }
        }
    }
)


