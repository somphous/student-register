rabbitRoutes.route('/register', {
    name: "register",
    action: function (params, queryParams) {
        BlazeLayout.render('mainLayout', {content: "register"});
    },
    breadcrumb: {
        title: 'Register',
        parent:'home'
    }
});
rabbitRoutes.route('/registerInsert', {
    name: "registerInsert",
    action: function (params, queryParams) {
        BlazeLayout.render('mainLayout', {content: "registerInsert"});
    },
    breadcrumb: {
        title: 'Register Insert',
        parent:'register'
    }
});
rabbitRoutes.route('/registerUpdate/:id', {
    name: "registerUpdate",
    action: function (params, queryParams) {
        BlazeLayout.render('mainLayout', {content: "registerUpdate"});
    },
    breadcrumb: {
        title: 'Register Update',
        parent:'register'
    }
});