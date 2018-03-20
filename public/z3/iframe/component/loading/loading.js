define('component/loading/loading.es', function(require, exports, module) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
      value: true
  });
  
  var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        * @file loading
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        */
  
  var _dom = require('component/jscore/dom.es');
  
  var _dom2 = _interopRequireDefault(_dom);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
  
  var Loading = function () {
      function Loading() {
          _classCallCheck(this, Loading);
  
          this.container = _dom2.default.create();
          _dom2.default.addClass(this.container, 'loading-container');
      }
      /**
       * 显示loading
       */
  
  
      _createClass(Loading, [{
          key: 'show',
          value: function show() {
              var text = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '加载中...';
  
              if (document.querySelector('.loading')) {
                  return;
              }
              var loading = _dom2.default.create();
              var container = this.container.cloneNode();
  
              _dom2.default.addClass(loading, 'loading', 'spin');
  
              _dom2.default.text(loading, text);
  
              _dom2.default.append(container, loading);
              _dom2.default.append(document.body, container);
          }
          /**
           * 隐藏loading
           */
  
      }, {
          key: 'hide',
          value: function hide() {
              var container = document.querySelector('.loading-container');
              if (container) {
                  _dom2.default.remove(document.body, container);
              }
          }
      }]);
  
      return Loading;
  }();
  
  exports.default = new Loading();

});
