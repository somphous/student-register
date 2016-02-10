TabularTables.Register = new Tabular.Table({
    name: "Register",
    collection: Collection.Register,
    columns: [
        {data: "_id", title: "ID"},
        {data: "studentId", title: "StudentID"},
        {data: "subjectId", title: "SubjectID"},
        {data: "teacherId", title: "TeacherID"},
        {
            data: "regDate",
            title: "RegisterDate",
            render: function (val, type, doc) {
                if (val instanceof Date) {
                    return moment(val).format('YYYY/MM/DD');
                } else {
                    return "Never";
                }
            }
        },
        {data: "day", title: "Study Day"},
        {data: "time", title: "Study Time"},
        {
            data: "price",
            title: "Price",
            render: function (val, type, doc) {
                return numeral(val).format('$ 0,0.00');
            }
        },
        {
            data: "discount",
            title: "Discount",
            render: function (val, type, doc) {
                return numeral(val).format('$ 0,0.00');
            }
        },
        {
            data: "amount",
            title: "Amount",
            render: function (val, type, doc) {
                return numeral(val).format('$ 0,0.00');
            }
        },
        {
            title: "Action",
            tmpl: Meteor.isClient && Template.registerAction
        }
    ]
});