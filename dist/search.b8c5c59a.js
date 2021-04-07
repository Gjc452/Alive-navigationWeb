// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"qf8F":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var baidu = {
  '.kindWeb': 'https://www.baidu.com/s?tn=02003390_42_hao_pg&ie=utf-8&wd=',
  '.kindImg': 'https://image.baidu.com/search/index?tn=baiduimage&ie=utf-8&word=',
  '.kindNews': 'https://www.baidu.com/s?rtt=1&bsst=1&cl=2&tn=news&rsv_dl=ns_pc&word=',
  '.kindAvi': 'http://video.baidu.com/v?ie=utf-8&word=',
  '.kindMap': 'https://map.baidu.com/?newmap=1&ie=utf-8&s=s%26wd%3D'
};
var _default = baidu;
exports.default = _default;
},{}],"Dtgw":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var google = {
  '.kindWeb': 'https://www.google.com/search?q=',
  '.kindImg': 'https://www.google.com/search?tbm=isch&q=',
  '.kindNews': 'https://www.google.com/search?tbm=nws&q=',
  '.kindAvi': 'https://www.google.com/search?tbm=vid&q=',
  '.kindMap': 'https://www.google.com/maps/preview?q='
};
var _default = google;
exports.default = _default;
},{}],"DxLw":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var bing = {
  '.kindWeb': 'https://www.bing.com/search?isource=infinity&iname=bing&itype=web&q=',
  '.kindImg': 'https://cn.bing.com/images/search?isource=infinity&iname=bing&q=',
  '.kindNews': 'https://www.bing.com/news/search?isource=infinity&iname=bing&q=',
  '.kindAvi': 'https://cn.bing.com/videos/search?isource=infinity&iname=bing&q=',
  '.kindMap': 'https://www.bing.com/maps/?isource=infinity&iname=bing&q='
};
var _default = bing;
exports.default = _default;
},{}],"EC6N":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var sogou = {
  '.kindWeb': 'https://www.sogou.com/sogou?pid=sogou-site-7985672db979303a&query=',
  '.kindImg': 'https://pic.sogou.com/pics?ie=utf8&query=',
  '.kindNews': 'https://www.sogou.com/sogou?ie=utf8&interation=1728053249&interV=&pid=sogou-wsse-9fc36fa768a74fa9&ie=utf8&query=',
  '.kindAvi': 'https://v.sogou.com/v?ie=utf8&query='
};
var _default = sogou;
exports.default = _default;
},{}],"Tsb7":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function on(eventType, element, obj, fn) {
  if (!(element instanceof Element)) {
    element = document.querySelector(element);
  }

  element.addEventListener('click', function (e) {
    if (obj instanceof Object) {
      for (var key in obj) {
        var t = e.target;

        if (obj.hasOwnProperty(key)) {
          while (!t.matches(key)) {
            if (t === element) {
              t = null;
              break;
            }

            t = t.parentNode;
          }

          fn(t, key);
        }
      }
    } else if (typeof obj === "string") {
      var _t = e.target;

      try {
        while (!_t.matches(obj)) {
          if (_t === element) {
            _t = null;
            break;
          }

          _t = _t.parentNode;
        }

        fn(_t);
      } catch (err) {}
    }
  });
}

var _default = on;
exports.default = _default;
},{}],"zfSF":[function(require,module,exports) {
"use strict";

var _baidu = _interopRequireDefault(require("./lib/baidu"));

var _google = _interopRequireDefault(require("./lib/google"));

var _bing = _interopRequireDefault(require("./lib/bing"));

var _sougou = _interopRequireDefault(require("./lib/sougou"));

var _on = _interopRequireDefault(require("./lib/on"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var changeImg = document.querySelector('.changeImg');
var searchClass = document.querySelector('.searchClass');
var searchUl = document.querySelector('.searchUl');
var others = document.querySelector('.others');
var search = document.querySelector('#search');
var changeSearch = document.querySelector('.changeSearch');
var string;
var objWeb = {
  baidu: _baidu.default,
  google: _google.default,
  bing: _bing.default,
  sogou: _sougou.default
};
var names = objWeb.baidu;
var url = 'https://www.baidu.com/s?tn=02003390_42_hao_pg&ie=utf-8&wd=';
var angle = 20; //更换壁纸

var imgN = JSON.parse(window.localStorage.getItem("imgN"));
var n = imgN || 0;
changeImg.addEventListener('click', function () {
  n += 1;
  angle += 20;
  changeImg.style.transform = "rotate(".concat(angle, "deg)"); // document.body.style.background = `no-repeat url(https://bing.mcloc.cn/api?day=${n})`;

  window.localStorage.setItem("imgN", n);
}); //  阻止默认事件

changeSearch.addEventListener('click', function (e) {
  e.preventDefault();
}); // 开关搜索选择框

(0, _on.default)('click', document.body, '.changeSearch', function (t) {
  if (t) {
    if (others.classList.length === 1) {
      others.classList.add('active');
    } else {
      others.classList.remove('active');
    }
  } else {
    others.classList.remove('active');
  }
}); // 切换搜索引擎

(0, _on.default)('click', others, 'li', function (t) {
  for (var key in objWeb) {
    if (key === t.className) {
      var svgName = t.className;
      var svgNode = "\n      <svg class=\"icon\" aria-hidden=\"true\">\n        <use xlink:href=\"#icon-".concat(svgName, "\"></use>\n      </svg>\n      <svg class=\"icon\" aria-hidden=\"true\">\n        <use xlink:href=\"#icon-f111\"></use>\n      </svg>");
      var li = "\n      <li class=\"kindMap\">\u5730\u56FE</li>";
      var template = document.createElement('template');
      template.innerHTML = svgNode.trim();
      changeSearch.innerHTML = '';
      changeSearch.appendChild(template.content);
      names = objWeb[key];
      var list = searchUl.childNodes;
      var kindMap = document.querySelector('.kindMap');

      if (key === 'sogou') {
        var _kindMap = document.querySelector('.kindMap');

        searchUl.removeChild(_kindMap);
      } else if (kindMap) {} else {
        var _template = document.createElement('template');

        _template.innerHTML = li.trim();
        searchUl.appendChild(_template.content.firstChild);
      }

      for (var i = 0; i < list.length; i++) {
        if (list[i].nodeType === 1) {
          if (list[i].classList[0] === 'kindWeb') {
            list[i].classList.add('active');
          } else {
            list[i].classList.remove('active');
          }
        }
      }

      for (var _key in names) {
        _key === '.kindWeb' ? url = names[_key] : '';
      }

      return;
    }
  }
}); // 切换搜索类

(0, _on.default)('click', searchClass, names, function (t, key) {
  if (t) {
    url = names[key];
    t.classList.add('active');
  } else {
    var node = document.querySelector("".concat(key));
    node.classList.remove('active');
  }
}); // 获取输入内容

search.addEventListener('input', function (e) {
  string = e.target.value;
}); // 按下搜索

search.addEventListener('keydown', function (e) {
  if (e.code === 'Enter') {
    if (string) {
      window.open("".concat(url).concat(string));
    } else {
      window.open("".concat(url));
    }
  }
});
},{"./lib/baidu":"qf8F","./lib/google":"Dtgw","./lib/bing":"DxLw","./lib/sougou":"EC6N","./lib/on":"Tsb7"}]},{},["zfSF"], null)
//# sourceMappingURL=search.b8c5c59a.js.map