Collection.Subject = new Mongo.Collection('subject');
Schema.Subject = new SimpleSchema({
    name: {
        type: String,
        label: "Name"
    },
    duration: {
        type: String,
        label: "Duration",
    },
    price: {
        type: Number,
        label: "Price",
        autoform:{
            type: "inputmask",
            afFieldInput: {
                inputmaskOptions: inputmaskOptions.currency()
            }
        }

    },
    description: {
        type: String,
        label: "Description",
        optional: true
    }
});
Collection.Subject.attachSchema(Schema.Subject);