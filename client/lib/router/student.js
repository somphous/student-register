rabbitRoutes.route('/student', {
    name: "student",
    action: function (params, queryParams) {
        BlazeLayout.render('mainLayout', {content: "student"});
    },
    breadcrumb: {
        title: 'Student',
        parent:'home'
    }
});
rabbitRoutes.route('/studentInsert', {
    name: "studentInsert",
    action: function (params, queryParams) {
        BlazeLayout.render('mainLayout', {content: "studentInsert"});
    },
    breadcrumb: {
        title: 'Student Insert',
        parent:'student'
    }
});
rabbitRoutes.route('/studentUpdate/:id', {
    name: "studentUpdate",
    action: function (params, queryParams) {
        BlazeLayout.render('mainLayout', {content: "studentUpdate"});
    },
    breadcrumb: {
        title: 'Student Update',
        parent:'student'
    }
});