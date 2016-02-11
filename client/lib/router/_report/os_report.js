FlowRouter.route('/osRpt', {
    name: "osRpt",
    action: function (params, queryParams) {
        BlazeLayout.render('mainLayout', {content: "osRpt"});
    },
    breadcrumb: {
        title: 'Out Standing Report',
        parent:'home'
    }
});
FlowRouter.route('/osRptGen', {
    name: "osRptGen",
    action: function (params, queryParams) {
        BlazeLayout.render('reportLayout', {content: "osRptGen"});
    }
});