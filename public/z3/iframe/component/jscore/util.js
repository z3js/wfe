define('component/jscore/util.es', function(require, exports, module) {

  'use strict';
  
  /**
   * 一些公共函数
   */
  
  module.exports = {
      trim: function trim(str) {
          if (!str) {
              return str;
          }
          return str.replace(/^\s+/, '').replace(/\s$+/, '');
      },
      extend: function extend(first) {
          for (var _len = arguments.length, objects = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
              objects[_key - 1] = arguments[_key];
          }
  
          if (typeof Object.assign === 'function') {
              return Object.assign.apply(Object, [first].concat(objects));
          }
          var _iteratorNormalCompletion = true;
          var _didIteratorError = false;
          var _iteratorError = undefined;
  
          try {
              var _loop = function _loop() {
                  var object = _step.value;
  
                  Object.keys(object).forEach(function (key) {
                      first[key] = object[key];
                  });
              };
  
              for (var _iterator = objects[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                  _loop();
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
  
          return first;
      },
  
  
      /**
       * 将对象序列化为查询字符串
       */
      serialize: function serialize(object) {
          var res = [];
          Object.keys(object).forEach(function (key) {
              res.push(key + '=' + encodeURIComponent(object[key]));
          });
          return res.join('&');
      },
  
  
      /**
       * 是否是一个空对象
       */
      isEmptyObject: function isEmptyObject(object) {
          if (!object) {
              return false;
          }
          for (var i in object) {
              return false;
          }
          return true;
      },
  
  
      /**
       * 获取一个随机数
       * [a, b)
       */
      randint64: function randint64(a, b) {
          if (!b) {
              // 如果只有一个参数，就取[0, a)
              b = a;
              a = 0;
          }
          // 0|(Math.random() * (b - a)) + a;
          return Math.floor(Math.random() * (b - a) + a);
      },
      getHash: function getHash(url) {
          if (!~url.indexOf('#')) {
              return '';
          }
          return url.slice(url.lastIndexOf('#') + 1);
      },
  
  
      /**
       * 获取url参数
       */
      getQueryString: function getQueryString(name) {
          var search = location.search;
          if (search === '') {
              return '';
          }
          // 过滤掉第一个问号
          search = search.slice(1).split('&');
  
          for (var i = 0, l = search.length; i < l; i++) {
              var item = search[i].split('=');
              if (name === item[0]) {
                  try {
                      return decodeURIComponent(item[1]);
                  } catch (e) {
                      return item[1];
                  }
              }
          }
          return '';
      }
  };

});
