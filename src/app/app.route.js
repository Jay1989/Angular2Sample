"use strict";
var router_1 = require("@angular/router");
var user_component_1 = require("./component/user.component");
var about_component_1 = require("./component/about.component");
var appRoutes = [
    {
        path: '',
        component: user_component_1.UserComponent
    },
    {
        path: 'about',
        component: about_component_1.AboutComponent
    }
];
exports.Routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.route.js.map