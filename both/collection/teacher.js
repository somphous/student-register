Collection.Teacher = new Mongo.Collection('teacher');
Schema.Teacher = new SimpleSchema({
    name: {
        type: String,
        label: "Name"
    },
    gender: {
        type: String,
        label: "Gender",
        autoform: {
            type: "select",
            options: function () {
                return [
                    {label: "Male", value: 'M'},
                    {label: "Female", value: 'F'}
                ];
            }
        }
    },
    telephone: {
        type: Number,
        label: "Telephone",
        optional: true

    }
});
Collection.Teacher.attachSchema(Schema.Teacher);