rabbitRoutes.route('/subject', {
    name: "subject",
    action: function (params, queryParams) {
        BlazeLayout.render('mainLayout', {content: "subject"});
    },
    breadcrumb: {
        title: 'Subject',
        parent:'home'
    },
    //triggersEnter: [function(context, redirect) {
    //    if(!Meteor.userId()){
    //        console.log('no login');
    //        FlowRouter.go('home');
    //    }
    //}]
});
rabbitRoutes.route('/subjectInsert', {
    name: "subjectInsert",
    action: function (params, queryParams) {
        BlazeLayout.render('mainLayout', {content: "subjectInsert"});
    },
    breadcrumb: {
        title: 'Subject Insert',
        parent:'subject'
    },
    //triggersEnter: [function(context, redirect) {
    //    if(!Meteor.userId()){
    //        console.log('no login');
    //        FlowRouter.go('home');
    //    }
    //}]
});
rabbitRoutes.route('/subjectUpdate/:id', {
    name: "subjectUpdate",
    action: function (params, queryParams) {
        BlazeLayout.render('mainLayout', {content: "subjectUpdate"});
    },
    breadcrumb: {
        title: 'Subject Update',
        parent:'subject'
    },
    //triggersEnter: [function(context, redirect) {
    //    if(!Meteor.userId()){
    //        console.log('no login');
    //        FlowRouter.go('home');
    //    }
    //}]
});