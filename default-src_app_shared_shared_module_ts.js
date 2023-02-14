"use strict";
(self["webpackChunkpwa_app_pedido"] = self["webpackChunkpwa_app_pedido"] || []).push([["default-src_app_shared_shared_module_ts"],{

/***/ 44466:
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharedModule": () => (/* binding */ SharedModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var ngx_quicklink__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-quicklink */ 45676);




let SharedModule = class SharedModule {
};
SharedModule = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule)({
        declarations: [],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule,
            ngx_quicklink__WEBPACK_IMPORTED_MODULE_3__.QuicklinkModule
        ],
        exports: [
            ngx_quicklink__WEBPACK_IMPORTED_MODULE_3__.QuicklinkModule
        ]
    })
], SharedModule);



/***/ }),

/***/ 45676:
/*!***************************************************************************!*\
  !*** ./node_modules/ngx-quicklink/__ivy_ngcc__/fesm2015/ngx-quicklink.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QuicklinkModule": () => (/* binding */ QuicklinkModule),
/* harmony export */   "QuicklinkStrategy": () => (/* binding */ QuicklinkStrategy),
/* harmony export */   "ɵa": () => (/* binding */ LinkHandler),
/* harmony export */   "ɵb": () => (/* binding */ ObservableLinkHandler),
/* harmony export */   "ɵc": () => (/* binding */ PreloadLinkHandler),
/* harmony export */   "ɵe": () => (/* binding */ PrefetchRegistry),
/* harmony export */   "ɵɵLinkDirective": () => (/* binding */ LinkDirective)
/* harmony export */ });
/* harmony import */ var D_Projects_capacitor_pwa_app_pedido_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var D_Projects_capacitor_pwa_app_pedido_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 26439);




 // Using a global registry so we can keep it populated across lazy-loaded
// modules with different parent injectors which create instance of the registry.



var globalRegistry = [];

var PrefetchRegistry = /*#__PURE__*/function () {
  function PrefetchRegistry(router) {
    (0,D_Projects_capacitor_pwa_app_pedido_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, PrefetchRegistry);

    this.router = router;
    this.trees = globalRegistry;
  }

  (0,D_Projects_capacitor_pwa_app_pedido_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(PrefetchRegistry, [{
    key: "add",
    value: function add(tree) {
      this.trees.push(tree);
    }
  }, {
    key: "shouldPrefetch",
    value: function shouldPrefetch(url) {
      var tree = this.router.parseUrl(url);
      return this.trees.some(containsTree.bind(null, tree));
    }
  }]);

  return PrefetchRegistry;
}();

PrefetchRegistry.ɵfac = function PrefetchRegistry_Factory(t) {
  return new (t || PrefetchRegistry)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router));
};

PrefetchRegistry.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: PrefetchRegistry,
  factory: PrefetchRegistry.ɵfac
});

PrefetchRegistry.ctorParameters = function () {
  return [{
    type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router
  }];
};

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](PrefetchRegistry, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable
  }], function () {
    return [{
      type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router
    }];
  }, null);
})();

function containsQueryParams(container, containee) {
  // TODO: This does not handle array params correctly.
  return Object.keys(containee).length <= Object.keys(container).length && Object.keys(containee).every(function (key) {
    return containee[key] === container[key];
  });
}

function containsTree(containee, container) {
  return containsQueryParams(container.queryParams, containee.queryParams) && containsSegmentGroup(container.root, containee.root, containee.root.segments);
}

function containsSegmentGroup(container, containee, containeePaths) {
  if (container.segments.length > containeePaths.length) {
    var current = container.segments.slice(0, containeePaths.length);
    if (!equalPath(current, containeePaths)) return false;
    if (containee.hasChildren()) return false;
    return true;
  } else if (container.segments.length === containeePaths.length) {
    if (!equalPath(container.segments, containeePaths)) return false;
    if (!containee.hasChildren()) return true;

    for (var c in containee.children) {
      if (!container.children[c]) break;
      if (containsSegmentGroup(container.children[c], containee.children[c], containee.children[c].segments)) return true;
    }

    return false;
  } else {
    var _current = containeePaths.slice(0, container.segments.length);

    var next = containeePaths.slice(container.segments.length);
    if (!equalPath(container.segments, _current)) return false;
    if (!container.children[_angular_router__WEBPACK_IMPORTED_MODULE_3__.PRIMARY_OUTLET]) return false;
    return containsSegmentGroup(container.children[_angular_router__WEBPACK_IMPORTED_MODULE_3__.PRIMARY_OUTLET], containee, next);
  }
}

function equalPath(as, bs) {
  if (as.length !== bs.length) return false;
  return as.every(function (a, i) {
    return a.path === bs[i].path || a.path.startsWith(':') || bs[i].path.startsWith(':');
  });
}

var ɵ0 = function ɵ0(cb) {
  var start = Date.now();
  return setTimeout(function () {
    cb({
      didTimeout: false,
      timeRemaining: function timeRemaining() {
        return Math.max(0, 50 - (Date.now() - start));
      }
    });
  }, 1);
},
    ɵ1 = function ɵ1() {};

var requestIdleCallback = typeof window !== 'undefined' ? window.requestIdleCallback || ɵ0 : ɵ1;

var observerSupported = function observerSupported() {
  return typeof window !== 'undefined' ? !!window.IntersectionObserver : false;
};

var ɵ2 = observerSupported;
var LinkHandler = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.InjectionToken('LinkHandler');

var ObservableLinkHandler = /*#__PURE__*/function () {
  function ObservableLinkHandler(loader, registry, ngZone) {
    var _this = this;

    (0,D_Projects_capacitor_pwa_app_pedido_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ObservableLinkHandler);

    this.loader = loader;
    this.registry = registry;
    this.ngZone = ngZone;
    this.elementLink = new Map();
    this.observer = observerSupported() ? new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var link = entry.target;

          var routerLink = _this.elementLink.get(link);

          if (!routerLink || !routerLink.urlTree) return;

          _this.registry.add(routerLink.urlTree);

          _this.observer.unobserve(link);

          requestIdleCallback(function () {
            _this.loader.preload().subscribe(function () {
              return void 0;
            });
          });
        }
      });
    }) : null;
  }

  (0,D_Projects_capacitor_pwa_app_pedido_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(ObservableLinkHandler, [{
    key: "register",
    value: function register(el) {
      var _this2 = this;

      this.elementLink.set(el.element, el);
      this.ngZone.runOutsideAngular(function () {
        _this2.observer.observe(el.element);
      });
    } // First call to unregister will not hit this.

  }, {
    key: "unregister",
    value: function unregister(el) {
      if (this.elementLink.has(el.element)) {
        this.observer.unobserve(el.element);
        this.elementLink.delete(el.element);
      }
    }
  }, {
    key: "supported",
    value: function supported() {
      return observerSupported();
    }
  }]);

  return ObservableLinkHandler;
}();

ObservableLinkHandler.ɵfac = function ObservableLinkHandler_Factory(t) {
  return new (t || ObservableLinkHandler)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterPreloader), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](PrefetchRegistry), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone));
};

ObservableLinkHandler.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: ObservableLinkHandler,
  factory: ObservableLinkHandler.ɵfac
});

ObservableLinkHandler.ctorParameters = function () {
  return [{
    type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterPreloader
  }, {
    type: PrefetchRegistry
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone
  }];
};

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](ObservableLinkHandler, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable
  }], function () {
    return [{
      type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterPreloader
    }, {
      type: PrefetchRegistry
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone
    }];
  }, null);
})();

var PreloadLinkHandler = /*#__PURE__*/function () {
  function PreloadLinkHandler(loader, registry) {
    (0,D_Projects_capacitor_pwa_app_pedido_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, PreloadLinkHandler);

    this.loader = loader;
    this.registry = registry;
  }

  (0,D_Projects_capacitor_pwa_app_pedido_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(PreloadLinkHandler, [{
    key: "register",
    value: function register(el) {
      var _this3 = this;

      this.registry.add(el.urlTree);
      requestIdleCallback(function () {
        return _this3.loader.preload().subscribe(function () {
          return void 0;
        });
      });
    }
  }, {
    key: "unregister",
    value: function unregister(_) {}
  }, {
    key: "supported",
    value: function supported() {
      return true;
    }
  }]);

  return PreloadLinkHandler;
}();

PreloadLinkHandler.ɵfac = function PreloadLinkHandler_Factory(t) {
  return new (t || PreloadLinkHandler)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterPreloader), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](PrefetchRegistry));
};

PreloadLinkHandler.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: PreloadLinkHandler,
  factory: PreloadLinkHandler.ɵfac
});

PreloadLinkHandler.ctorParameters = function () {
  return [{
    type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterPreloader
  }, {
    type: PrefetchRegistry
  }];
};

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](PreloadLinkHandler, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable
  }], function () {
    return [{
      type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterPreloader
    }, {
      type: PrefetchRegistry
    }];
  }, null);
})();

var LinkDirective = /*#__PURE__*/function () {
  function LinkDirective(linkHandlers, el, link, linkWithHref) {
    (0,D_Projects_capacitor_pwa_app_pedido_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, LinkDirective);

    this.linkHandlers = linkHandlers;
    this.el = el;
    this.linkHandler = this.linkHandlers.filter(function (h) {
      return h.supported();
    }).shift();
    this.rl = link || linkWithHref;

    if (this.element && this.element.setAttribute) {
      this.element.setAttribute('ngx-ql', '');
    }
  }

  (0,D_Projects_capacitor_pwa_app_pedido_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(LinkDirective, [{
    key: "ngOnChanges",
    value: function ngOnChanges(c) {
      if (c.routerLink) {
        this.linkHandler.unregister(this);
        this.linkHandler.register(this);
      }
    }
  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      this.linkHandler.unregister(this);
    }
  }, {
    key: "element",
    get: function get() {
      return this.el.nativeElement;
    }
  }, {
    key: "urlTree",
    get: function get() {
      return this.rl.urlTree;
    }
  }]);

  return LinkDirective;
}();

LinkDirective.ɵfac = function LinkDirective_Factory(t) {
  return new (t || LinkDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](LinkHandler), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink, 8), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkWithHref, 8));
};

LinkDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({
  type: LinkDirective,
  selectors: [["", "routerLink", ""]],
  inputs: {
    routerLink: "routerLink"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"]]
});

LinkDirective.ctorParameters = function () {
  return [{
    type: Array,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Inject,
      args: [LinkHandler]
    }]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Optional
    }]
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkWithHref,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Optional
    }]
  }];
};

LinkDirective.propDecorators = {
  routerLink: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
  }]
};

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](LinkDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Directive,
    args: [{
      selector: '[routerLink]'
    }]
  }], function () {
    return [{
      type: Array,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Inject,
        args: [LinkHandler]
      }]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Optional
      }]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkWithHref,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Optional
      }]
    }];
  }, {
    routerLink: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
    }]
  });
})();

var QuicklinkStrategy = /*#__PURE__*/function () {
  function QuicklinkStrategy(registry, router) {
    (0,D_Projects_capacitor_pwa_app_pedido_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, QuicklinkStrategy);

    this.registry = registry;
    this.router = router;
    this.loading = new Set();
  }

  (0,D_Projects_capacitor_pwa_app_pedido_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(QuicklinkStrategy, [{
    key: "preload",
    value: function preload(route, load) {
      if (this.loading.has(route)) {
        // Don't preload the same route twice
        return rxjs__WEBPACK_IMPORTED_MODULE_4__.EMPTY;
      }

      var conn = typeof navigator !== 'undefined' ? navigator.connection : undefined;

      if (conn) {
        // Don't preload if the user is on 2G. or if Save-Data is enabled..
        if ((conn.effectiveType || '').includes('2g') || conn.saveData) return rxjs__WEBPACK_IMPORTED_MODULE_4__.EMPTY;
      } // Prevent from preloading


      if (route.data && route.data.preload === false) {
        return rxjs__WEBPACK_IMPORTED_MODULE_4__.EMPTY;
      }

      var fullPath = findPath(this.router.config, route);

      if (this.registry.shouldPrefetch(fullPath)) {
        this.loading.add(route);
        return load();
      }

      return rxjs__WEBPACK_IMPORTED_MODULE_4__.EMPTY;
    }
  }]);

  return QuicklinkStrategy;
}();

QuicklinkStrategy.ɵfac = function QuicklinkStrategy_Factory(t) {
  return new (t || QuicklinkStrategy)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](PrefetchRegistry), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router));
};

QuicklinkStrategy.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: QuicklinkStrategy,
  factory: QuicklinkStrategy.ɵfac
});

QuicklinkStrategy.ctorParameters = function () {
  return [{
    type: PrefetchRegistry
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router
  }];
};

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](QuicklinkStrategy, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable
  }], function () {
    return [{
      type: PrefetchRegistry
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router
    }];
  }, null);
})();

var findPath = function findPath(config, route) {
  config = config.slice();
  var parent = new Map();
  var visited = new Set();

  var _loop = function _loop() {
    var el = config.shift();
    visited.add(el);
    if (el === route) return "break";
    var children = el.children || [];
    var current = el._loadedConfig;

    if (current && current.routes) {
      children = children.concat(current.routes);
    }

    children.forEach(function (r) {
      if (visited.has(r)) return;
      parent.set(r, el);
      config.push(r);
    });
  };

  while (config.length) {
    var _ret = _loop();

    if (_ret === "break") break;
  }

  var path = '';
  var current = route;

  while (current) {
    if (isPrimaryRoute(current)) {
      path = "/".concat(current.path).concat(path);
    } else {
      path = "/(".concat(current.outlet, ":").concat(current.path).concat(path, ")");
    }

    current = parent.get(current);
  }

  return path.replace(/\/\//, '/');
};

var ɵ0$1 = findPath;

function isPrimaryRoute(route) {
  return route.outlet === _angular_router__WEBPACK_IMPORTED_MODULE_3__.PRIMARY_OUTLET || !route.outlet;
}

var QuicklinkModule = /*#__PURE__*/(0,D_Projects_capacitor_pwa_app_pedido_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(function QuicklinkModule() {
  (0,D_Projects_capacitor_pwa_app_pedido_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, QuicklinkModule);
});

QuicklinkModule.ɵfac = function QuicklinkModule_Factory(t) {
  return new (t || QuicklinkModule)();
};

QuicklinkModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: QuicklinkModule
});
QuicklinkModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  providers: [{
    provide: LinkHandler,
    useClass: ObservableLinkHandler,
    multi: true
  }, {
    provide: LinkHandler,
    useClass: PreloadLinkHandler,
    multi: true
  }, PrefetchRegistry, QuicklinkStrategy]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](QuicklinkModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule,
    args: [{
      declarations: [LinkDirective],
      providers: [{
        provide: LinkHandler,
        useClass: ObservableLinkHandler,
        multi: true
      }, {
        provide: LinkHandler,
        useClass: PreloadLinkHandler,
        multi: true
      }, PrefetchRegistry, QuicklinkStrategy],
      exports: [LinkDirective]
    }]
  }], null, null);
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](QuicklinkModule, {
    declarations: [LinkDirective],
    exports: [LinkDirective]
  });
})();
/**
 * Generated bundle index. Do not edit.
 */




/***/ })

}]);
//# sourceMappingURL=default-src_app_shared_shared_module_ts.js.map