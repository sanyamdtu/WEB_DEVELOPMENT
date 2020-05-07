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
})({"app.js":[function(require,module,exports) {
function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var form_ = $("#formy");
var search_term = $(".search");
var select_term = $("#exampleFormControlSelect1");
var search_query = "";
var results = $("#results");
var limit = 25;
form_.on("submit", function (e) {
  e.preventDefault();
  search_query = search_term.val(); //search_term.val() = "";

  search(search_query, limit);
});

function search(search_query, limit) {
  fetch("http://www.reddit.com/search.json?q=".concat(search_query)).then(function (res) {
    return res.json();
  }).then(function (data) {
    var array_of_data = data.data.children.map(function (data) {
      return data.data;
    });
    console.log(array_of_data);

    var _iterator = _createForOfIteratorHelper(array_of_data),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var data_card = _step.value;
        console.log(data_card);
        results.append("\n                <div class=\"card\">\n                  <img src=\"".concat(data_card.preview ? data_card.preview.images[0].source.url : "data:image/jpeg;base64,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", "\" class=\"card-img-top\" alt=\"...\">\n                  <div class=\"card-body\">\n                   <h5 class=\"card-title\">").concat(data_card.title, "</h5>\n                   <p class=\"card-text\">").concat(data_card.selftext.substring(0, 50), "....</p>\n                   <a href=\"").concat(data_card.permalink, "\" class=\"btn btn-primary\">Go somewhere</a>\n                   <br>\n                   <h6>Subreddit: <span class=\"badge badge-secondary\">").concat(data_card.subreddit, "</span></h6>\n                   </div>\n                </div>"));
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  }).catch(function (err) {
    console.log(err);
  });
}
},{}],"../../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "61396" + '/');

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
},{}]},{},["../../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","app.js"], null)
//# sourceMappingURL=/app.c328ef1a.js.map