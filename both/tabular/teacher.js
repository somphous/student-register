TabularTables.Teacher = new Tabular.Table({
    name: "Teacher",
    collection: Collection.Teacher,
    columns: [
        {data: "_id", title: "ID"},
        {data: "name", title: "Name"},
        {data: "gender", title: "Gender"},
        {data: "telephone", title: "Telephone"},
        {
            title: "Action",
            tmpl: Meteor.isClient && Template.teacherAction
        }
    ]
});