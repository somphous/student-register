TabularTables.Payment = new Tabular.Table({
    name: "Payment",
    collection: Collection.Payment,
    columns: [
        {data: "_id", title: "ID"},
        {
            data: "paidDate",
            title: "PaidDate",
            render: function (val, type, doc) {
                if (val instanceof Date) {
                    return moment(val).format('YYYY/MM/DD');
                } else {
                    return "Never";
                }
            }
        },
        {data: "studentId", title: "StudentID"},
        {
            data: "registerId",
            title: "RegisterID",
        },
        {
            data: "dueAmount",
            title: "DueAmount",
            render: function (val, type, doc) {
                return numeral(val).format('$ 0,0.00');
            }
        },
        {
            data: "paidAmount",
            title: "Paidamount",
            render: function (val, type, doc) {
                return numeral(val).format('$ 0,0.00');
            }
        },
        {
            data: "osAmount",
            title: "OsAmount",
            render: function (val, type, doc) {
                return numeral(val).format('$ 0,0.00');
            }
        },
        {data: "voucherId", title: "VoucherID"},
        {
            title: "Action",
            tmpl: Meteor.isClient && Template.paymentAction
        }
    ]
});