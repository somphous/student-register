// Generate
Template.paymentRptGen.helpers({
    data(){
        let data = {};
        let total = 0;

        let fromDate = FlowRouter.getQueryParam('fromDate');
        fromDate = moment(fromDate).toDate();
        let toDate = FlowRouter.getQueryParam('toDate');
        toDate = moment(toDate).toDate();

        data.header = {
            date: moment(fromDate).format('DD/MM/YYYY') + ' - ' + moment(toDate).format('DD/MM/YYYY')
        };

        let selector = {
            paidDate: {$gte: fromDate, $lte: toDate}
        };
        let option = {$sort: {paidDate: 1}};

        let tempContent = Collection.Payment.find(selector, option);
        let content = [];
        tempContent.forEach(function (obj) {

            total += obj.paidAmount;
            // find student
            let studentDoc = Collection.Student.findOne(obj.studentId);
            obj._student = studentDoc;

            // find subject
            let subjectDoc = Collection.Subject.findOne(obj.subjectId);
            obj._subject = subjectDoc;

            content.push(obj);
        });

        data.content = content;
        data.paidAmount = total;

        return data;
    },
    no(index){
        console.log(index);
        return index + 1;
    }
});

//hook
AutoForm.hooks({
        paymentRpt: {
            onSubmit(insertDoc, updateDoc, currentDoc){
                this.done(null, insertDoc);
            },
            onSuccess(formType, result){
                let query = result;
                let path = FlowRouter.path('paymentRptGen', {}, query);

                window.open(path, '_blank');
            },
            onError(formType, error){
                alertify.error(error.message);
            }
        }
    }
);
