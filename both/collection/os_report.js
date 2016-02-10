Schema.OsRpt = new SimpleSchema({
    fromDate: {
        type: Date,
        label: "Date",
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
});
