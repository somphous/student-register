Meteor.publish('teacher', function (selector) {
    //console.log(selector);

    //waiting
    Meteor._sleepForMs(1000);

    let data = Collection.Teacher.find(selector);
    return data;
});