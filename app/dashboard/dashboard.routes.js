"use strict";
var home_component_1 = require("./home/home.component");
var user_component_1 = require("./user/user.component");
var login_component_1 = require("./login/login.component");
var table_component_1 = require("./table/table.component");
var notifications_component_1 = require("./notifications/notifications.component");
var typography_component_1 = require("./typography/typography.component");
var maps_component_1 = require("./maps/maps.component");
var timeago_filter_1 = require("../filters/timeago.filter");
var size_filter_1 = require("../filters/size.filter");
var toleechGuard_service_1 = require("../services/toleechGuard.service");
var register_component_1 = require("./register/register.component");
var forget_component_1 = require("./forget/forget.component");
exports.MODULE_ROUTES = [
    { path: 'user', component: user_component_1.UserComponent, canActivate: [toleechGuard_service_1.AuthGuard] },
    { path: 'table', component: table_component_1.TableComponent, canActivate: [toleechGuard_service_1.AuthGuard] },
    { path: 'login', component: login_component_1.LoginComponent },
    { path: 'register', component: register_component_1.RegisterComponent },
    { path: 'forget', component: forget_component_1.ForgetComponent },
    { path: 'forget', component: forget_component_1.ForgetComponent },
    { path: 'notifications', component: notifications_component_1.NotificationsComponent },
    { path: '', redirectTo: 'table', pathMatch: 'full' }
];
exports.MODULE_COMPONENTS = [
    home_component_1.HomeComponent,
    user_component_1.UserComponent,
    table_component_1.TableComponent,
    login_component_1.LoginComponent,
    register_component_1.RegisterComponent,
    forget_component_1.ForgetComponent,
    notifications_component_1.NotificationsComponent,
    typography_component_1.TypographyComponent,
    maps_component_1.MapsComponent,
    timeago_filter_1.TimeAgoPipe,
    size_filter_1.SizePipe
];
//# sourceMappingURL=dashboard.routes.js.map