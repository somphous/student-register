FlowRouter.route('/paymentRpt', {
    name: "paymentRpt",
    action: function (params, queryParams) {
        BlazeLayout.render('mainLayout', {content: "paymentRpt"});
    },
    breadcrumb: {
        title: 'Payment Report',
        parent:'home'
    }
});
FlowRouter.route('/paymentRptGen', {
    name: "paymentRptGen",
    action: function (params, queryParams) {
        BlazeLayout.render('reportLayout', {content: "paymentRptGen"});
    }
});