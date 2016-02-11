Collection.Payment = new Mongo.Collection('payment');
Schema.Payment = new SimpleSchema({
    paidDate: {
        type: Date,
        label: "PaidDate",
        defaultValue: moment().toDate(),
        autoform: {
            type: "bootstrap-datetimepicker",
            afFieldInput: {
                dateTimePickerOptions: {
                    format: 'DD/MM/YYYY',
                    pickTime: false
                }
            }
        }
    },
    studentId: {
        type: String,
        label: "StudentID",
        autoform: {
            type: "select",
            options: function () {
                var data = Collection.Student.find();
                var list = [
                    //{label: '(Select One)', value: ''}
                ];

                data.forEach(function (obj) {
                    list.push({label: obj._id + ' : ' + obj.name, value: obj._id})
                });

                return list;
            }
        }
    },
    registerId: {
        type: String,
        label: "Register ID",
        autoform: {
            type: "select",
            options: function () {
                var studentId = AutoForm.getFieldValue('studentId');
                //console.log(studentId);

                var data = Collection.Register.find({studentId: studentId});
                var list = [{label: '(Select One)', value: ''}];

                if (data) {
                    data.forEach(function (obj) {
                        var label;
                        // Get subject
                        var subject = Collection.Subject.findOne(obj.subjectId);

                        // Check last paid
                        var lastPaid = Collection.Payment.findOne({registerId: obj._id}, {$sort: {regDate: -1}});
                        if (lastPaid) {
                            if (lastPaid.osAmount > 0) {
                                label = obj._id + ' | ' + subject.name + ' | ' + lastPaid.osAmount;
                                list.push({label: label, value: obj._id});
                            }
                        } else {
                            label = obj._id + ' | ' + subject.name + ' | ' + obj.amount;
                            list.push({label: label, value: obj._id});
                        }
                    });
                }

                return list;
            }
        }
    },
    dueAmount: {
        type: Number,
        label: "Due Amount",
        decimal: true,
        autoform: {
            type: "inputmask",
            afFieldInput: {
                inputmaskOptions: inputmaskOptions.currency()
            },
            readonly: true,
            value: function () {
                let dueAmount = 0;
                let registerId = AutoForm.getFieldValue('registerId');

                if (registerId) {
                    let data = Collection.Register.findOne(registerId);
                    dueAmount = data.amount;

                    // Check last paid
                    var lastPaid = Collection.Payment.findOne({registerId: registerId}, {$sort: {regDate: -1}});
                    if (lastPaid) {
                        dueAmount = lastPaid.osAmount;
                    }
                }

                return dueAmount;
            }
        }

    },
    paidAmount: {
        type: Number,
        label: "Paid Amount",
        decimal: true
    },
    osAmount: {
        type: Number,
        label: "OS Amount",
        decimal: true,
        autoform: {
            //readonly: true,
            value: function () {
                let osAmount=0;
                let dueAmount = AutoForm.getFieldValue('dueAmount');
                let paidAmount = AutoForm.getFieldValue('paidAmount');
                return dueAmount-paidAmount;

            },
            type: "inputmask",
            afFieldInput: {
                inputmaskOptions: inputmaskOptions.currency()
            }

        }

    },
    voucherId: {
        type: String,
        label: "VoucherId",
        decimal: true,
        optional: true
    }

});
Collection.Payment.attachSchema(Schema.Payment);