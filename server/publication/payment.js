Meteor.publish('payment', function (selector) {
    //console.log(selector);

    //waiting
    Meteor._sleepForMs(1000);

    let data = Collection.Payment.find(selector);
    return data;
});