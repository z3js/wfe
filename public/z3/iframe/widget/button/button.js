define('widget/button/button.es', function(require, exports, module) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
      value: true
  });
  
  var Button = {
      template: "<div class=\"view view-button\"><div class=\"container\"><div class=\"button-list\"><button class=\"button button-primary\" v-hover=\"{class: 'button-primary-hover'}\">提交</button><button class=\"button button-primary\" :class=\"{'button-primary-disable': !canSubmit}\" v-hover=\"{class: 'button-primary-hover'}\">提交</button><button class=\"button button-default\" v-hover=\"{class: 'button-default-hover'}\">提交</button><button class=\"button button-default\" :class=\"{'button-default-disable': !canSubmit}\" v-hover=\"{class: 'button-default-hover'}\">提交</button></div></div></div>",
      data: function data() {
          return {
              canSubmit: false
          };
      }
  };
  
  exports.default = Button;

});
