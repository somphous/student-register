Meteor.publish('student', function (selector) {
    //console.log(selector);

    //waiting
    Meteor._sleepForMs(1000);

    let data = Collection.Student.find(selector);
    return data;
});


Meteor.publish('students', ()=> {
    let data =Collection.Student.find();
    return data;
});