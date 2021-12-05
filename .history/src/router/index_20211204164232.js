"use strict";
exports.__esModule = true;
var vue_router_1 = require("vue-router");
var routes = [
    { path: "/", component: function () { return Promise.resolve().then(function () { return require('@/views/Home.vue'); }); } },
    { path: "/readme", component: function () { return Promise.resolve().then(function () { return require('@/views/Readme.vue'); }); } }
];
var router = (0, vue_router_1.createRouter)({
    history: (0, vue_router_1.createWebHashHistory)(),
    routes: routes
});
exports["default"] = router;
