define('component/vhover/vhover.es', function(require, exports, module) {

  'use strict';
  
  var _dom = require('component/jscore/dom.es');
  
  var _dom2 = _interopRequireDefault(_dom);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  function bubble(root, node, klass, cb) {
      while (node && node !== root) {
          if (node.classList && node.classList.contains(klass)) {
              cb(node);
              break;
          }
          node = node.parentNode;
      }
  } /**
     * vue hover 指令
     * 用于标记元素按下态
     */
  
  
  Vue.directive('hover', {
      bind: function bind(el, binding) {
          var isDisabled = function isDisabled(node) {
              var classList = node.classList;
              for (var i = classList.length - 1; i >= 0; i--) {
                  var _klass = classList[i];
                  if (_klass === 'disable' || ~_klass.indexOf('disable')) {
                      return true;
                  }
              }
              return false;
          };
  
          var isHover = false;
          // hover后的class
          var klass = binding.value.class;
          var agent = binding.value.agent;
  
          if (agent) {
              // 需要使用代理
              binding.hoverin = function (e) {
                  bubble(this, e.target, agent, function (node) {
                      if (!isDisabled(node)) {
                          isHover = true;
                          _dom2.default.addClass(node, klass);
                      }
                  });
              };
  
              binding.hoverout = function (e) {
                  if (!e) {
                      return;
                  }
                  bubble(this, e.target, agent, function (node) {
                      isHover = false;
                      _dom2.default.removeClass(node, klass);
                  });
              };
          } else {
              binding.hoverin = function () {
                  if (!isDisabled(el)) {
                      isHover = true;
                      _dom2.default.addClass(el, klass);
                  }
              };
              binding.hoverout = function () {
                  isHover = false;
                  _dom2.default.removeClass(el, klass);
              };
          }
  
          binding.hovermove = function () {
              if (isHover) {
                  binding.hoverout();
              }
          };
          _dom2.default.on(el, 'touchstart', binding.hoverin);
          _dom2.default.on(el, 'touchmove', binding.hovermove);
          _dom2.default.on(el, 'touchend', binding.hoverout);
      },
      unbind: function unbind(el, binding) {
          // 解除事件绑定
          _dom2.default.off(el, 'touchstart', binding.hoverin);
          _dom2.default.off(el, 'touchmove', binding.hovermove);
          _dom2.default.off(el, 'touchend', binding.hoverout);
      }
  });

});
