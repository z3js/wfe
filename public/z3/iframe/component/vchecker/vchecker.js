define('component/vchecker/vchecker.es', function(require, exports, module) {

  'use strict';
  
  var _dom = require('component/jscore/dom.es');
  
  var _dom2 = _interopRequireDefault(_dom);
  
  var _util = require('component/jscore/util.es');
  
  var _util2 = _interopRequireDefault(_util);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  /**
   * 基于vue的校验器
   */
  
  var checker = {
      trueName: function trueName(str) {
          if (!str) {
              return '真实姓名不能为空';
          }
          var length = str.length;
  
          if (length > 30 || length < 2 || ~str.indexOf('*')) {
              return '真实姓名格式错误';
          }
          return false;
      }
  };
  
  Vue.directive('checker', {
      bind: function bind(el, binding, vnode) {
          var arg = binding.arg,
              value = binding.value;
          // 获取初始化数据
  
          var model = value.model;
          var error = value.error;
  
          var handle = checker[arg];
          if (typeof handle !== 'function') {
              return;
          }
          var check = function check() {
              var val = vnode.context[model];
              var res = handle(val);
              return res;
          };
          binding.blur = function () {
              vnode.context[error] = check();
          };
          binding.input = function () {
              // input 只控制显示
              var res = check();
              if (res) {
                  res = '';
              }
              vnode.context[error] = res;
          };
  
          _dom2.default.on(el, 'blur', binding.blur);
          _dom2.default.on(el, 'input', binding.input);
      },
      update: function update(el, binding, vnode) {
          var arg = binding.arg,
              value = binding.value;
          // 获取初始化数据
  
          var model = value.model;
          var error = value.error;
          if (vnode.context[model] === '') {
              vnode.context[error] = '';
          }
      },
      unbind: function unbind(el, binding) {
          _dom2.default.off(el, 'blur', binding.blur);
          _dom2.default.off(el, 'input', binding.input);
      }
  });

});
