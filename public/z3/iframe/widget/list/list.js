define('widget/list/list.es', function(require, exports, module) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
      value: true
  });
  
  var _dialog = require('component/dialog/dialog.es');
  
  var _dialog2 = _interopRequireDefault(_dialog);
  
  var _loading = require('component/loading/loading.es');
  
  var _loading2 = _interopRequireDefault(_loading);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var List = {
      template: "<div class=\"view view-list\"><div class=\"list form-list\"><div class=\"list-item\"><div class=\"list-item-left\"><span class=\"label\">真实姓名</span><input class=\"input\" v-model=\"trueName\" v-checker:trueName=\"{model: 'trueName', error: 'error'}\" v-delete=\"trueName\" placeholder=\"输入真实姓名\"/><span class=\"input-tip\" @click=\"showTip('trueName')\"></span></div></div><div class=\"list-item\"><div class=\"list-item-left\"><span class=\"label\">证件号码</span><span class=\"input-disable\">33 **** **** 80</span></div></div><div class=\"list-item\" v-hover=\"{class: 'list-item-hover'}\"><div class=\"list-item-left\"><span class=\"label\">有效期</span><span class=\"hint-arrow-right\">点击设置</span></div></div><div class=\"list-item\"><div class=\"list-item-left\"><span class=\"label\">支付金额</span><span class=\"hint\">1.58元</span></div></div><div class=\"list-item-error\" v-show=\"error\">{{error}}</div></div><div class=\"container\"><button class=\"button button-primary\" :class=\"{'button-primary-disable': !canSubmit}\" v-hover=\"{class: 'button-primary-hover'}\" @click=\"submit\">提交</button></div></div>",
      data: function data() {
          return {
              trueName: '',
              error: ''
          };
      },
  
      computed: {
          canSubmit: function canSubmit() {
              return this.error === false;
          }
      },
      methods: {
          showTip: function showTip(type) {
              _dialog2.default.alert(type);
          },
          submit: function submit() {
              if (!this.canSubmit) {
                  return;
              }
              _loading2.default.show();
              setTimeout(function () {
                  _loading2.default.hide();
                  _dialog2.default.toast('网络错误');
              }, 1000);
          }
      }
  };
  
  exports.default = List;

});
