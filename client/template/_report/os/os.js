// Generate
Template.osRptGen.helpers({
    data(){
        let data = {};
        let total = 0;

        let asAt = FlowRouter.getQueryParam('asAt');
        asAt = moment(asAt).toDate();

        data.header = {
            date: moment(asAt).format('DD/MM/YYYY')
        };

        let selector = {
            paidDate: {$lte: asAt}
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
        osRpt: {
            onSubmit(insertDoc, updateDoc, currentDoc){
                this.done(null, insertDoc);
            },
            onSuccess(formType, result){
                let query = result;
                let path = FlowRouter.path('osRptGen', {}, query);

                window.open(path, '_blank');
            },
            onError(formType, error){
                alertify.error(error.message);
            }
        }
    }
);
