define('widget/dialog/dialog.es', function(require, exports, module) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
      value: true
  });
  
  var _dialog = require('component/dialog/dialog.es');
  
  var _dialog2 = _interopRequireDefault(_dialog);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var Dialog = {
      template: "<div class=\"view view-dialog\"><div class=\"container\"><div class=\"button-list\"><button class=\"button button-primary\" v-hover=\"{class: 'button-primary-hover'}\" @click=\"alert\">alert</button><button class=\"button button-primary\" v-hover=\"{class: 'button-primary-hover'}\" @click=\"confirm\">confirm</button><button class=\"button button-default\" v-hover=\"{class: 'button-default-hover'}\" @click=\"toast\">toast</button></div></div></div>",
      methods: {
          alert: function alert() {
              _dialog2.default.alert('我是alert');
          },
          confirm: function confirm() {
              _dialog2.default.confirm({
                  content: '我是confirm',
                  buttons: [{
                      text: '确定'
                  }, {
                      text: '取消'
                  }]
              });
          },
          toast: function toast() {
              _dialog2.default.toast('我是toast');
          }
      }
  };
  
  exports.default = Dialog;

});
