define('widget/loading/loading.es', function(require, exports, module) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
      value: true
  });
  
  var _loading = require('component/loading/loading.es');
  
  var _loading2 = _interopRequireDefault(_loading);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var Loading = {
      template: "<div class=\"view view-loading\"><div class=\"container\"><div class=\"button-list\"><button class=\"button button-primary\" v-hover=\"{class: 'button-primary-hover'}\" @click=\"showNormalLoading\">默认loading</button><button class=\"button button-primary\" v-hover=\"{class: 'button-primary-hover'}\" @click=\"showCustomLoading\">自定义文案</button></div></div></div>",
      methods: {
          showNormalLoading: function showNormalLoading() {
              _loading2.default.show();
              setTimeout(function () {
                  return _loading2.default.hide();
              }, 1500);
          },
          showCustomLoading: function showCustomLoading() {
              _loading2.default.show('自定义文案');
              setTimeout(function () {
                  return _loading2.default.hide();
              }, 1500);
          }
      }
  };
  
  exports.default = Loading;

});
