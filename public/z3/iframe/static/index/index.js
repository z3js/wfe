'use strict';

require('component/vhover/vhover.es');

require('component/vchecker/vchecker.es');

require('component/vdelete/vdelete.es');

var _demo = require('widget/demo/demo.es');

var _demo2 = _interopRequireDefault(_demo);

var _button = require('widget/button/button.es');

var _button2 = _interopRequireDefault(_button);

var _loading = require('widget/loading/loading.es');

var _loading2 = _interopRequireDefault(_loading);

var _dialog = require('widget/dialog/dialog.es');

var _dialog2 = _interopRequireDefault(_dialog);

var _list = require('widget/list/list.es');

var _list2 = _interopRequireDefault(_list);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// 删除
/**
 * index
 */

// 按下态
(function () {
    /**
     * router map
     */
    var routes = [{ path: '/', component: _demo2.default }, { path: '/button', component: _button2.default }, { path: '/loading', component: _loading2.default }, { path: '/dialog', component: _dialog2.default }, { path: '/list', component: _list2.default }];

    var router = new VueRouter({
        routes: routes
    });

    var app = new Vue({
        router: router
    }).$mount('#app');
})();
// 校验器