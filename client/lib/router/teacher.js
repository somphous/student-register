rabbitRoutes.route('/teacher', {
    name: "teacher",
    action: function (params, queryParams) {
        BlazeLayout.render('mainLayout', {content: "teacher"});
    },
    breadcrumb: {
        title: 'Teacher',
        parent:'home'
    }
});
rabbitRoutes.route('/teacherInsert', {
    name: "teacherInsert",
    action: function (params, queryParams) {
        BlazeLayout.render('mainLayout', {content: "teacherInsert"});
    },
    breadcrumb: {
        title: 'Teacher Insert',
        parent:'teacher'
    }
});
rabbitRoutes.route('/teacherUpdate/:id', {
    name: "teacherUpdate",
    action: function (params, queryParams) {
        BlazeLayout.render('mainLayout', {content: "teacherUpdate"});
    },
    breadcrumb: {
        title: 'Teacher Update',
        parent:'teacher'
    }
});