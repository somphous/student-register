TabularTables.Subject = new Tabular.Table({
    name: "Subject",
    collection: Collection.Subject,
    columns: [
        {data: "_id", title: "ID"},
        {data: "name", title: "Name"},
        {data: "duration", title: "Duration"},
        {
            data: "price",
            title: "Price",
            render: function (val, type, doc) {
                return numeral(val).format('$ 0,0.00');
            }
        },
        {data: "description", title: "Description"},
        {
            title: "Action",
            tmpl: Meteor.isClient && Template.subjectAction
        }
    ]
});