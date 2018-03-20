define('component/vdelete/vdelete.es', function(require, exports, module) {

  'use strict';
  
  var _dom = require('component/jscore/dom.es');
  
  var _dom2 = _interopRequireDefault(_dom);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  Vue.directive('delete', {
      update: function update(el, binding, vnode) {
          var expression = binding.expression;
  
          var del = null;
          if (binding.value !== binding.oldValue && binding.oldValue === '') {
              del = _dom2.default.create('span');
              _dom2.default.addClass(del, 'input-delete');
  
              _dom2.default.on(del, 'touchend', function (e) {
                  e.preventDefault();
                  vnode.context[expression] = '';
              });
              _dom2.default.append(el.parentNode, del);
          } else if (binding.value === '') {
              var parent = el.parentNode;
              del = parent.querySelector('.input-delete');
              if (del) {
                  _dom2.default.remove(parent, del);
              }
          }
      }
  }); /**
       * vue directive
       * 用于input的删除按钮
       */

});
