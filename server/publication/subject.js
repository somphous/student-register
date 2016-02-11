//static
//Meteor.publish('subjectById', function (id) {
//    console.log('subject sub: ' + id);
//    //waiting
//    Meteor._sleepForMs(1000);
//
//    let data = Collection.Subject.find({_id: id});
//    return data;
//});

//dynamic
Meteor.publish('subject', function (selector) {
    //console.log(selector);

    //waiting
    Meteor._sleepForMs(1000);

    let data = Collection.Subject.find(selector);
    return data;
});

//Meteor.publish('registers', ()=> {
//    let data = Collection.Register.find();
//    return data;
//});
Meteor.publish('subjects', ()=>{
   let data=Collection.Subject.find();
    return data;
});