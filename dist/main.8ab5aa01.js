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
})({"Tsb7":[function(require,module,exports) {
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
},{}],"epB2":[function(require,module,exports) {
"use strict";

var _on = _interopRequireDefault(require("./lib/on"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var siteList = document.querySelector(".siteList");
var addList = document.querySelector("#addList");
var addContent = document.querySelector(".addContent");
var reviseContent = document.querySelector(".reviseContent");
var myHashMap = JSON.parse(window.localStorage.getItem("site"));
var close;
var site;
var inIcon;
var hashMap = myHashMap || [{
  url: "http://gjc452.gitee.io/drib-money-website/#/",
  webName: "点滴记账",
  disName: "Vue版",
  backColor: "red"
}, {
  url: "http://gjc452.gitee.io/drib-money-react/#/",
  webName: "点滴记账",
  disName: "React版",
  backColor: "sky"
}, {
  url: "https://gjc452.gitee.io/wish3-ui-website",
  webName: "Wish3-UI",
  disName: "Vue3组件库",
  backColor: "blue"
}, {
  url: "https://github.com/Gjc452/dom-demo-1/blob/main/src/dom.js",
  webName: "DOM库",
  disName: "手写DOM库",
  backColor: "yellow"
}, {
  url: "https://gjc452.github.io/canvas-1.0/dist/",
  webName: "Canvas 画板",
  disName: "画板",
  backColor: "yellow"
}, {
  url: "https://github.com/Gjc452",
  webName: "我的GitHub",
  disName: "GitHub",
  backColor: "violet"
}, {
  url: "https://www.yuque.com/xihang-c9xlp/guegsk",
  webName: "我的博客",
  disName: "语雀",
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
    var li = "\n      <li class= siteWrap".concat(id, " data=\"").concat(id, "\">\n        <div class=\"site ").concat(node.backColor, "\">\n          <div class=\"logo\">\n            <text x=\"45\" y=\"45\" fill=\"white\" text-anchor=\"middle\" dominant-baseline=\"middle\"\n            font-size=\"20px\">\n              ").concat(node.disName, "\n            </text>\n            <svg class=\"icon  inIcon\" aria-hidden=\"true\">\n              <use xlink:href=\"#icon-revise\"></use>\n            </svg>\n          </div>\n          <div class=\"close\">\n            <svg class=\"icon\" aria-hidden=\"true\">\n              <use xlink:href=\"#icon-close\"></use>\n            </svg>\n          </div>\n         </div>\n         <div class=\"link\">").concat(node.webName, "</div>\n      </li>\n    ");
    var add = document.createElement("template");
    add.innerHTML = li.trim();
    siteList.appendChild(add.content.firstChild);
    var siteWrap = document.querySelector(".siteWrap" + id.toString());
    (0, _on.default)("click", siteWrap, ".close", function (t) {
      if (t) {
        hashMap.splice(index, 1);
        render();
      } else if (siteList.firstChild.classList.length === 2) {} else {
        window.open(node.url);
      }
    });
    id += 1;
  });
  close = document.querySelectorAll(".close");
  site = document.querySelectorAll(".site");
  inIcon = document.querySelectorAll(".inIcon");
};

render(); // 存储数据

window.onbeforeunload = function () {
  window.localStorage.setItem("site", JSON.stringify(hashMap));
}; // 鼠标右键删除样式


siteList.addEventListener("mousedown", function (e) {
  var t = e.target;

  while (!t.matches("li")) {
    if (t === siteList) {
      t = null;
      break;
    }

    t = t.parentNode;
  }

  if (t) {
    if (e.button === 2) {
      close.forEach(function (node) {
        node.classList.add("active");
      });
      site.forEach(function (node) {
        node.classList.add("active");
      });
      inIcon.forEach(function (node) {
        node.classList.add("active");
      });
      siteList.childNodes.forEach(function (node) {
        node.classList.add("deleteWeb");
      });
    }

    siteList.addEventListener("contextmenu", function (e) {
      e.preventDefault();
    });
  }
}); // 取消删除样式

(0, _on.default)("click", document.body, ".site", function (t) {
  if (!t) {
    close.forEach(function (node) {
      node.classList.remove("active");
    });
    site.forEach(function (node) {
      node.classList.remove("active");
    });
    inIcon.forEach(function (node) {
      node.classList.remove("active");
    });
    siteList.childNodes.forEach(function (node) {
      node.classList.remove("deleteWeb");
    });
  }
}); // 显示添加栏

addList.addEventListener("click", function () {
  setTimeout(function () {
    addContent.classList.add("active");
  });
});
siteList.addEventListener("click", function (e) {
  var t = e.target;

  while (!t.matches(".deleteWeb")) {
    if (t === siteList || t.matches(".close")) {
      t = null;
      break;
    }

    t = t.parentNode;
  }

  if (t) {
    setTimeout(function () {
      reviseContent.classList.add("active");
    });
  }
}); // 隐藏添加栏

var closeAddContent = document.querySelectorAll(".closeAddContent");
(0, _on.default)("click", document.body, ".addContent", function (t) {
  if (addContent.classList.length === 2) {
    if (!t) {
      addContent.classList.remove("active");
    }
  }
});
(0, _on.default)("click", document.body, ".reviseContent", function (t) {
  if (reviseContent.classList.length === 2) {
    if (!t) {
      reviseContent.classList.remove("active");
    }
  }
});
closeAddContent.forEach(function (node) {
  node.addEventListener("click", function () {
    reviseContent.classList.remove("active");
    addContent.classList.remove("active");
  });
}); // 添加网站

var addWebUrl = document.querySelector("#addWebUrl");
var addWebName = document.querySelector("#addWebName");
var addDisName = document.querySelector("#addDisName");
var refer = document.querySelector("#addRefer");
var color = document.querySelector(".color");
var colorList = document.querySelector(".colorList");
var webRecord = {
  url: "",
  webName: "",
  disName: "",
  backColor: ""
};
var newUrl;
var newWebName;
var newDisName;
var newBackColor = "red";
addWebUrl.addEventListener("input", function (e) {
  newUrl = e.target.value;
});
addWebName.addEventListener("input", function (e) {
  newWebName = e.target.value;
});
addDisName.addEventListener("input", function (e) {
  newDisName = e.target.value;
});
(0, _on.default)("click", colorList, "li", function (t) {
  var className = t.className;
  color.className = "color ".concat(className);
  newBackColor = className;
});
refer.addEventListener("click", function () {
  if (newUrl) {
    webRecord.url = "https://" + newUrl;
    newWebName ? webRecord.webName = newWebName.trim() : webRecord.webName = "";
    newDisName ? webRecord.disName = newDisName.trim() : webRecord.disName = "";
    webRecord.backColor = newBackColor;
    hashMap.push(webRecord);
    render();
    addWebUrl.value = "";
    addWebName.value = "";
    addDisName.value = "";
    color.className = "red";
    webRecord = {
      url: "",
      webName: "",
      disName: "",
      backColor: ""
    };
  } else {
    alert("请填写网址");
  }
}); // 修改网站

var nowWebName = document.querySelector("#webName");
var nowDisName = document.querySelector("#disName");
var nowUrl = document.querySelector("#webUrl");
var nowColor = document.querySelector(".nowColor");
var nowColorList = document.querySelector(".nowColorList");
var change = document.querySelector("#change");
var m;
var nowBackColor;
siteList.addEventListener("click", function (e) {
  var t = e.target;

  while (!t.matches("li")) {
    if (t === siteList || t.matches(".close")) {
      t = null;
      break;
    }

    t = t.parentNode;
  }

  if (t) {
    m = t.getAttribute("data");
    nowUrl.value = hashMap[m].url;
    nowDisName.value = hashMap[m].disName;
    nowWebName.value = hashMap[m].webName;
    var className = hashMap[m].backColor;
    nowColor.className = "color ".concat(className);
    nowBackColor = className;
  }
});
(0, _on.default)("click", nowColorList, "li", function (t) {
  var className = t.className;
  nowColor.className = "color ".concat(className);
  nowBackColor = className;
});
change.addEventListener("click", function () {
  hashMap[m].url = nowUrl.value;
  hashMap[m].disName = nowDisName.value;
  hashMap[m].webName = nowWebName.value;
  hashMap[m].backColor = nowBackColor;
  render();
});
},{"./lib/on":"Tsb7"}]},{},["epB2"], null)
//# sourceMappingURL=main.8ab5aa01.js.map