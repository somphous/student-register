FlowRouter.route('/', {
    name: "home",
    action: function (params, queryParams) {
        BlazeLayout.render('mainLayout', {content: "home"}); //
    },
    breadcrumb: {
        title: 'Home'
    }
});
