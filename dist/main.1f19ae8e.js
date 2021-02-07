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
})({"lib/on.js":[function(require,module,exports) {
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
},{}],"main.js":[function(require,module,exports) {
"use strict";

var _on = _interopRequireDefault(require("./lib/on"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var siteList = document.querySelector('.siteList');
var addList = document.querySelector('#addList');
var addContent = document.querySelector('.addContent');
var reviseContent = document.querySelector('.reviseContent');
var myHashMap = JSON.parse(window.localStorage.getItem('site'));
var close;
var site;
var inIcon;
var hashMap = myHashMap || [{
  url: 'http://bonsaiden.github.io/JavaScript-Garden/zh/',
  webName: 'JavaScript 秘密花园',
  disName: 'JS秘密花园',
  backColor: "red"
}, {
  url: 'https://wangdoc.com/',
  webName: '网道 - 互联网开发文档',
  disName: '网道',
  backColor: "sky"
}, {
  url: 'https://developer.mozilla.org/zh-CN/docs/Web',
  webName: 'MDN',
  disName: 'Web开发技术 | MDN',
  backColor: "blue"
}, {
  url: 'https://juejin.cn/',
  webName: '掘金',
  disName: '掘金',
  backColor: "yellow"
}, {
  url: 'https://github.com/Gjc452',
  webName: '我的GitHub',
  disName: 'GitHub',
  backColor: "violet"
}, {
  url: 'https://www.yuque.com/xihang-c9xlp/guegsk',
  webName: '我的博客',
  disName: '语雀',
  backColor: "blue"
}]; // 渲染网站列表

var render = function render() {
  var x = siteList.firstChild;

  while (x) {
    siteList.removeChild(x);
    x = siteList.firstChild;
  }

  var id = 0;
  hashMap.forEach(function (node, index) {
    var li = "\n    <li class= siteWrap".concat(id, " data=\"").concat(id, "\">\n      <div class=\"site ").concat(node.backColor, "\">\n        <div class=\"logo\">\n          <text x=\"45\" y=\"45\" fill=\"white\" text-anchor=\"middle\" dominant-baseline=\"middle\"\n          font-size=\"20px\">\n            ").concat(node.disName, "\n          </text>\n          <svg class=\"icon  inIcon\" aria-hidden=\"true\">\n            <use xlink:href=\"#icon-revise\"></use>\n          </svg>\n        </div>\n        <div class=\"close\">\n          <svg class=\"icon\" aria-hidden=\"true\">\n            <use xlink:href=\"#icon-close\"></use>\n          </svg>\n        </div>\n       </div>\n       <div class=\"link\">").concat(node.webName, "</div>\n    </li>\n  ");
    var add = document.createElement('template');
    add.innerHTML = li.trim();
    siteList.appendChild(add.content.firstChild);
    var siteWrap = document.querySelector('.siteWrap' + id.toString());
    (0, _on.default)('click', siteWrap, '.close', function (t) {
      if (t) {
        hashMap.splice(index, 1);
        render();
      } else if (siteList.firstChild.classList.length === 2) {} else {
        window.open(node.url);
      }
    });
    id += 1;
  });
  close = document.querySelectorAll('.close');
  site = document.querySelectorAll('.site');
  inIcon = document.querySelectorAll('.inIcon');
};

render(); // // 存储数据

window.onbeforeunload = function () {
  window.localStorage.setItem('site', JSON.stringify(hashMap));
}; // 鼠标右键删除样式


siteList.addEventListener('mousedown', function (e) {
  var t = e.target;

  while (!t.matches('li')) {
    if (t === siteList) {
      t = null;
      break;
    }

    t = t.parentNode;
  }

  if (t) {
    if (e.button === 2) {
      close.forEach(function (node) {
        node.classList.add('active');
      });
      site.forEach(function (node) {
        node.classList.add('active');
      });
      inIcon.forEach(function (node) {
        node.classList.add('active');
      });
      siteList.childNodes.forEach(function (node) {
        node.classList.add('deleteWeb');
      });
    }

    siteList.addEventListener("contextmenu", function (e) {
      e.preventDefault();
    });
  }
}); // 取消删除样式

(0, _on.default)('click', document.body, '.site', function (t) {
  if (!t) {
    close.forEach(function (node) {
      node.classList.remove('active');
    });
    site.forEach(function (node) {
      node.classList.remove('active');
    });
    inIcon.forEach(function (node) {
      node.classList.remove('active');
    });
    siteList.childNodes.forEach(function (node) {
      node.classList.remove('deleteWeb');
    });
  }
}); // 显示添加栏

addList.addEventListener('click', function () {
  setTimeout(function () {
    addContent.classList.add('active');
  });
});
siteList.addEventListener('click', function (e) {
  var t = e.target;

  while (!t.matches('.deleteWeb')) {
    if (t === siteList || t.matches('.close')) {
      t = null;
      break;
    }

    t = t.parentNode;
  }

  if (t) {
    setTimeout(function () {
      reviseContent.classList.add('active');
    });
  }
}); // 隐藏添加栏

var closeAddContent = document.querySelectorAll('.closeAddContent');
(0, _on.default)('click', document.body, '.addContent', function (t) {
  if (addContent.classList.length === 2) {
    if (!t) {
      addContent.classList.remove('active');
    }
  }
});
(0, _on.default)('click', document.body, '.reviseContent', function (t) {
  if (reviseContent.classList.length === 2) {
    if (!t) {
      reviseContent.classList.remove('active');
    }
  }
});
closeAddContent.forEach(function (node) {
  node.addEventListener('click', function () {
    reviseContent.classList.remove('active');
    addContent.classList.remove('active');
  });
}); // 添加网站

var addWebUrl = document.querySelector('#addWebUrl');
var addWebName = document.querySelector('#addWebName');
var addDisName = document.querySelector('#addDisName');
var refer = document.querySelector('#addRefer');
var color = document.querySelector('.color');
var colorList = document.querySelector('.colorList');
var webRecord = {
  url: url,
  webName: webName,
  disName: disName,
  backColor: backColor
};
var url;
var webName;
var disName;
var backColor = 'red';
addWebUrl.addEventListener('input', function (e) {
  url = e.target.value;
});
addWebName.addEventListener('input', function (e) {
  webName = e.target.value;
});
addDisName.addEventListener('input', function (e) {
  disName = e.target.value;
});
(0, _on.default)('click', colorList, 'li', function (t) {
  var className = t.className;
  color.className = "color ".concat(className);
  backColor = className;
});
refer.addEventListener('click', function () {
  if (url) {
    webRecord.url = 'https://' + url;
    webName ? webRecord.webName = webName.trim() : webRecord.webName = '';
    disName ? webRecord.disName = disName.trim() : webRecord.disName = '';
    webRecord.backColor = backColor;
    hashMap.push(webRecord);
    render();
    addWebUrl.value = '';
    addWebName.value = '';
    addDisName.value = '';
    color.className = 'red';
    webRecord = {
      url: '',
      webName: '',
      disName: '',
      backColor: ""
    };
  } else {
    alert('请填写网址');
  }
}); // 修改网站

var nowWebName = document.querySelector('#webName');
var nowDisName = document.querySelector('#disName');
var nowUrl = document.querySelector('#webUrl');
var nowColor = document.querySelector('.nowColor');
var nowColorList = document.querySelector('.nowColorList');
var change = document.querySelector('#change');
var m;
var nowBackColor;
siteList.addEventListener('click', function (e) {
  var t = e.target;

  while (!t.matches('li')) {
    if (t === siteList || t.matches('.close')) {
      t = null;
      break;
    }

    t = t.parentNode;
  }

  if (t) {
    m = t.getAttribute('data');
    nowUrl.value = hashMap[m].url;
    nowDisName.value = hashMap[m].disName;
    nowWebName.value = hashMap[m].webName;
    var className = hashMap[m].backColor;
    nowColor.className = "color ".concat(className);
  }
});
(0, _on.default)('click', nowColorList, 'li', function (t) {
  var className = t.className;
  nowColor.className = "color ".concat(className);
  nowBackColor = className;
});
change.addEventListener('click', function () {
  hashMap[m].url = nowUrl.value;
  hashMap[m].disName = nowDisName.value;
  hashMap[m].webName = nowWebName.value;
  hashMap[m].backColor = nowBackColor;
  render();
});
},{"./lib/on":"lib/on.js"}],"../../../AppData/Local/Yarn/Data/global/node_modules/parcel/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "7172" + '/');

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
},{}]},{},["../../../AppData/Local/Yarn/Data/global/node_modules/parcel/src/builtins/hmr-runtime.js","main.js"], null)
//# sourceMappingURL=/main.1f19ae8e.js.map