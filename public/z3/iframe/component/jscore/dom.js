define('component/jscore/dom.es', function(require, exports, module) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
      value: true
  });
  /**
   * dom相关操作
   */
  var dom = {
      create: function create() {
          var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'div';
  
          return document.createElement(type);
      },
      createFragment: function createFragment() {
          return document.createDocumentFragment();
      },
  
  
      /**
       * addClass
       */
      addClass: function addClass(node) {
          for (var _len = arguments.length, klass = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
              klass[_key - 1] = arguments[_key];
          }
  
          // 低版本浏览器不支持批量添加class
          klass.forEach(function (item) {
              node.classList.add(item);
          });
      },
  
  
      /**
       * removeClass
       */
      removeClass: function removeClass(node) {
          for (var _len2 = arguments.length, klass = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
              klass[_key2 - 1] = arguments[_key2];
          }
  
          klass.forEach(function (item) {
              node.classList.remove(item);
          });
      },
  
  
      /**
       * hasClass
       */
      hasClass: function hasClass(node, className) {
          return node.classList.contains(className);
      },
  
  
      /**
       * 设置属性
       */
      attr: function (_attr) {
          function attr(_x2, _x3) {
              return _attr.apply(this, arguments);
          }
  
          attr.toString = function () {
              return _attr.toString();
          };
  
          return attr;
      }(function (node, attrs) {
          Object.keys(attrs).forEach(function (key) {
              node[attr] = attrs[key];
          });
      }),
  
      /**
       * 设置样式
       */
      css: function css(node, styles) {
          Object.keys(styles).forEach(function (style) {
              node.style[style] = styles[style];
          });
      },
  
      /**
       * 添加多个子元素
       */
      append: function append(parent) {
          for (var _len3 = arguments.length, children = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
              children[_key3 - 1] = arguments[_key3];
          }
  
          var first = children[0],
              length = children.length;
  
          if (length === 1) {
              parent.appendChild(first);
              return;
          }
          var fragment = this.createFragment();
  
          var _iteratorNormalCompletion = true;
          var _didIteratorError = false;
          var _iteratorError = undefined;
  
          try {
              for (var _iterator = children[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                  var child = _step.value;
  
                  fragment.appendChild(child);
              }
          } catch (err) {
              _didIteratorError = true;
              _iteratorError = err;
          } finally {
              try {
                  if (!_iteratorNormalCompletion && _iterator.return) {
                      _iterator.return();
                  }
              } finally {
                  if (_didIteratorError) {
                      throw _iteratorError;
                  }
              }
          }
  
          parent.appendChild(fragment);
      },
  
  
      /**
       * 移除多个子元素
       */
      remove: function remove(parent) {
          for (var _len4 = arguments.length, children = Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
              children[_key4 - 1] = arguments[_key4];
          }
  
          var _iteratorNormalCompletion2 = true;
          var _didIteratorError2 = false;
          var _iteratorError2 = undefined;
  
          try {
              for (var _iterator2 = children[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                  var child = _step2.value;
  
                  parent.removeChild(child);
              }
          } catch (err) {
              _didIteratorError2 = true;
              _iteratorError2 = err;
          } finally {
              try {
                  if (!_iteratorNormalCompletion2 && _iterator2.return) {
                      _iterator2.return();
                  }
              } finally {
                  if (_didIteratorError2) {
                      throw _iteratorError2;
                  }
              }
          }
      },
      data: function data(el, name, value) {
          if (typeof value === 'undefined') {
              //获取属性
              if (el.dataset) {
                  return el.dataset[name];
              } else {
                  el.getAttribute('data-' + name);
              }
          } else {
              // 设置属性
              if (el.dataset) {
                  el.dataset[name] = value;
              } else {
                  el.setAttribute('data-' + name, value);
              }
          }
      },
      text: function text(node, str) {
          node.innerText = str;
      },
      on: function on(node, type, handle) {
          node.addEventListener(type, handle, false);
      },
      off: function off(node, type, handle) {
          node.removeEventListener(type, handle, false);
      }
  };
  
  exports.default = dom;

});
