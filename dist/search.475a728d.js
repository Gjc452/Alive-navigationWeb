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
})({"lib/baidu.js":[function(require,module,exports) {
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
},{}],"lib/google.js":[function(require,module,exports) {
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
},{}],"lib/bing.js":[function(require,module,exports) {
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
},{}],"lib/sougou.js":[function(require,module,exports) {
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
},{}],"lib/on.js":[function(require,module,exports) {
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
},{}],"search.js":[function(require,module,exports) {
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
},{"./lib/baidu":"lib/baidu.js","./lib/google":"lib/google.js","./lib/bing":"lib/bing.js","./lib/sougou":"lib/sougou.js","./lib/on":"lib/on.js"}],"../../../AppData/Local/Yarn/Data/global/node_modules/parcel/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "5817" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../AppData/Local/Yarn/Data/global/node_modules/parcel/src/builtins/hmr-runtime.js","search.js"], null)
//# sourceMappingURL=/search.475a728d.js.map