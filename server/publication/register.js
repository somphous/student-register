Meteor.publish('register', function (selector) {
    //console.log(selector);

    //waiting
    Meteor._sleepForMs(1000);

    let data = Collection.Register.find(selector);
    return data;
});


Meteor.publish('registers', ()=> {
    let data = Collection.Register.find();
    return data;
});