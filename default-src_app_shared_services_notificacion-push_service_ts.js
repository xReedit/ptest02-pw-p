"use strict";
(self["webpackChunkpwa_app_pedido"] = self["webpackChunkpwa_app_pedido"] || []).push([["default-src_app_shared_services_notificacion-push_service_ts"],{

/***/ 33180:
/*!**************************************************************!*\
  !*** ./src/app/shared/services/notificacion-push.service.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotificacionPushService": () => (/* binding */ NotificacionPushService)
/* harmony export */ });
/* harmony import */ var D_Projects_capacitor_pwa_app_pedido_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/service-worker */ 63769);
/* harmony import */ var _crud_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./crud-http.service */ 24677);
/* harmony import */ var _info_token_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./info-token.service */ 93674);
/* harmony import */ var _config_config_const__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config/config.const */ 61495);
/* harmony import */ var _capacitor_push_notifications__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @capacitor/push-notifications */ 71704);








let NotificacionPushService = class NotificacionPushService {
  // private VAPID_PUBLIC = 'BC7ietauZE99Hx9HkPyuGVr8jaYETyEJgH-gLaYIsbORYobppt9dX49_K_wubDqphu1afi7XrM6x1zAp4kJh_wU';
  constructor(swPush, crudService, infoTokenService) {
    // this.showMessages();
    this.swPush = swPush;
    this.crudService = crudService;
    this.infoTokenService = infoTokenService; // this.swPush.notificationClicks.subscribe( event => {
    //   // console.log('Received notification: ', event);
    //   const url = event.notification.data.url;
    //   window.open(url, '_blank');
    // });

    this.swPush.notificationClicks.subscribe(event => {
      console.log('clic notification', event); // const url = event.notification.data.url;
      // window.location.reload();
      // window.open('reparto.papaya.com.pe');
    });

    if (_config_config_const__WEBPACK_IMPORTED_MODULE_3__.IS_NATIVE) {
      _capacitor_push_notifications__WEBPACK_IMPORTED_MODULE_4__.PushNotifications.addListener('registration', token => {
        console.log('addListener token.value ', token.value);
        this.saveSuscripcion(token.value);
      });
      _capacitor_push_notifications__WEBPACK_IMPORTED_MODULE_4__.PushNotifications.addListener('registrationError', error => {
        alert('Error en registrar: ' + JSON.stringify(error));
      });
    }
  }

  getIsTienePermiso() {
    return (0,D_Projects_capacitor_pwa_app_pedido_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_config_config_const__WEBPACK_IMPORTED_MODULE_3__.IS_NATIVE) {
        let permStatus = yield _capacitor_push_notifications__WEBPACK_IMPORTED_MODULE_4__.PushNotifications.checkPermissions();
        return permStatus.receive === 'granted' ? true : false;
      } else {
        return Notification.permission === 'granted' ? true : false;
      }
    })();
  } // se suscribe a la notificacion


  suscribirse() {
    // console.log('llego a suscribirse estado this.swPush.isEnabled: ', this.swPush.isEnabled);
    // if ( this.swPush.isEnabled ) {
    // this.swPush.subscription.subscribe(res => {
    // if (!res) {return; }
    // this.lanzarPermisoNotificationPush(option);
    // });
    // }
    //0123 cambiamos
    if (_config_config_const__WEBPACK_IMPORTED_MODULE_3__.IS_NATIVE) {
      _capacitor_push_notifications__WEBPACK_IMPORTED_MODULE_4__.PushNotifications.requestPermissions().then(result => {
        console.log('result.receive', result.receive);

        if (result.receive === 'granted') {
          // Register with Apple / Google to receive push via APNS/FCM
          _capacitor_push_notifications__WEBPACK_IMPORTED_MODULE_4__.PushNotifications.register();
        } else {
          // Show some error
          console.log('error al registrar');
        }
      });
    } else {
      this.keySuscribtion();
    }
  } //  suscriberse


  keySuscribtion() {
    // console.log('keySuscribtion');
    this.swPush.requestSubscription({
      serverPublicKey: _config_config_const__WEBPACK_IMPORTED_MODULE_3__.VAPID_PUBLIC
    }).then(subscription => {
      // send subscription to the server
      console.log('suscrito a notificaciones push', subscription);
      this.saveSuscripcion(subscription);
    }).catch(console.error);
  }

  saveSuscripcion(_subscription) {
    const _data = {
      suscripcion: _subscription,
      idcliente: this.infoTokenService.infoUsToken.idcliente
    }; // console.log('push', _data);

    this.crudService.postFree(_data, 'push', 'suscripcion', false).subscribe(res => console.log(res));
  }

};

NotificacionPushService.ctorParameters = () => [{
  type: _angular_service_worker__WEBPACK_IMPORTED_MODULE_5__.SwPush
}, {
  type: _crud_http_service__WEBPACK_IMPORTED_MODULE_1__.CrudHttpService
}, {
  type: _info_token_service__WEBPACK_IMPORTED_MODULE_2__.InfoTockenService
}];

NotificacionPushService = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Injectable)({
  providedIn: 'root'
})], NotificacionPushService);


/***/ }),

/***/ 73470:
/*!****************************************************************************!*\
  !*** ./node_modules/@capacitor/push-notifications/dist/esm/definitions.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/// <reference types="@capacitor/cli" />


/***/ }),

/***/ 71704:
/*!**********************************************************************!*\
  !*** ./node_modules/@capacitor/push-notifications/dist/esm/index.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PushNotifications": () => (/* binding */ PushNotifications)
/* harmony export */ });
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/core */ 26549);
/* harmony import */ var _definitions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./definitions */ 73470);

var PushNotifications = (0,_capacitor_core__WEBPACK_IMPORTED_MODULE_0__.registerPlugin)('PushNotifications', {});



/***/ }),

/***/ 48130:
/*!*****************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/observable/never.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NEVER": () => (/* binding */ NEVER),
/* harmony export */   "never": () => (/* binding */ never)
/* harmony export */ });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Observable */ 12378);
/* harmony import */ var _util_noop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/noop */ 76882);


var NEVER = new _Observable__WEBPACK_IMPORTED_MODULE_0__.Observable(_util_noop__WEBPACK_IMPORTED_MODULE_1__.noop);
function never() {
  return NEVER;
}

/***/ }),

/***/ 29708:
/*!******************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/operators/publish.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "publish": () => (/* binding */ publish)
/* harmony export */ });
/* harmony import */ var _Subject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Subject */ 92218);
/* harmony import */ var _multicast__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./multicast */ 72787);


function publish(selector) {
  return selector ? (0,_multicast__WEBPACK_IMPORTED_MODULE_0__.multicast)(function () {
    return new _Subject__WEBPACK_IMPORTED_MODULE_1__.Subject();
  }, selector) : (0,_multicast__WEBPACK_IMPORTED_MODULE_0__.multicast)(new _Subject__WEBPACK_IMPORTED_MODULE_1__.Subject());
}

/***/ }),

/***/ 63769:
/*!**************************************************************************!*\
  !*** ./node_modules/@angular/service-worker/fesm2020/service-worker.mjs ***!
  \**************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ServiceWorkerModule": () => (/* binding */ ServiceWorkerModule),
/* harmony export */   "SwPush": () => (/* binding */ SwPush),
/* harmony export */   "SwRegistrationOptions": () => (/* binding */ SwRegistrationOptions),
/* harmony export */   "SwUpdate": () => (/* binding */ SwUpdate)
/* harmony export */ });
/* harmony import */ var D_Projects_capacitor_pwa_app_pedido_node_modules_babel_runtime_helpers_esm_toArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toArray.js */ 60609);
/* harmony import */ var D_Projects_capacitor_pwa_app_pedido_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js */ 10507);
/* harmony import */ var D_Projects_capacitor_pwa_app_pedido_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js */ 35603);
/* harmony import */ var D_Projects_capacitor_pwa_app_pedido_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ 78069);
/* harmony import */ var D_Projects_capacitor_pwa_app_pedido_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ 48047);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 52160);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 66587);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 36312);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 64139);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 55828);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs */ 92218);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs */ 48130);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! rxjs */ 88623);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 86942);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 59151);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ 59095);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ 29708);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs/operators */ 83910);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs/operators */ 88759);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! rxjs/operators */ 25843);






/**
 * @license Angular v14.2.12
 * (c) 2010-2022 Google LLC. https://angular.io/
 * License: MIT
 */





/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

var ERR_SW_NOT_SUPPORTED = 'Service workers are disabled or not supported by this browser';

function errorObservable(message) {
  return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.defer)(function () {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.throwError)(new Error(message));
  });
}
/**
 * @publicApi
 */


var NgswCommChannel = /*#__PURE__*/function () {
  function NgswCommChannel(serviceWorker) {
    (0,D_Projects_capacitor_pwa_app_pedido_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_3__["default"])(this, NgswCommChannel);

    this.serviceWorker = serviceWorker;

    if (!serviceWorker) {
      this.worker = this.events = this.registration = errorObservable(ERR_SW_NOT_SUPPORTED);
    } else {
      var controllerChangeEvents = (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.fromEvent)(serviceWorker, 'controllerchange');
      var controllerChanges = controllerChangeEvents.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)(function () {
        return serviceWorker.controller;
      }));
      var currentController = (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.defer)(function () {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.of)(serviceWorker.controller);
      });
      var controllerWithChanges = (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.concat)(currentController, controllerChanges);
      this.worker = controllerWithChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.filter)(function (c) {
        return !!c;
      }));
      this.registration = this.worker.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.switchMap)(function () {
        return serviceWorker.getRegistration();
      }));
      var rawEvents = (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.fromEvent)(serviceWorker, 'message');
      var rawEventPayload = rawEvents.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)(function (event) {
        return event.data;
      }));
      var eventsUnconnected = rawEventPayload.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.filter)(function (event) {
        return event && event.type;
      }));
      var events = eventsUnconnected.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.publish)());
      events.connect();
      this.events = events;
    }
  }

  (0,D_Projects_capacitor_pwa_app_pedido_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_4__["default"])(NgswCommChannel, [{
    key: "postMessage",
    value: function postMessage(action, payload) {
      return this.worker.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.tap)(function (sw) {
        sw.postMessage((0,D_Projects_capacitor_pwa_app_pedido_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__["default"])({
          action: action
        }, payload));
      })).toPromise().then(function () {
        return undefined;
      });
    }
  }, {
    key: "postMessageWithOperation",
    value: function postMessageWithOperation(type, payload, operationNonce) {
      var waitForOperationCompleted = this.waitForOperationCompleted(operationNonce);
      var postMessage = this.postMessage(type, payload);
      return Promise.all([postMessage, waitForOperationCompleted]).then(function (_ref) {
        var _ref2 = (0,D_Projects_capacitor_pwa_app_pedido_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, 2),
            result = _ref2[1];

        return result;
      });
    }
  }, {
    key: "generateNonce",
    value: function generateNonce() {
      return Math.round(Math.random() * 10000000);
    }
  }, {
    key: "eventsOfType",
    value: function eventsOfType(type) {
      var filterFn;

      if (typeof type === 'string') {
        filterFn = function filterFn(event) {
          return event.type === type;
        };
      } else {
        filterFn = function filterFn(event) {
          return type.includes(event.type);
        };
      }

      return this.events.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.filter)(filterFn));
    }
  }, {
    key: "nextEventOfType",
    value: function nextEventOfType(type) {
      return this.eventsOfType(type).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.take)(1));
    }
  }, {
    key: "waitForOperationCompleted",
    value: function waitForOperationCompleted(nonce) {
      return this.eventsOfType('OPERATION_COMPLETED').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.filter)(function (event) {
        return event.nonce === nonce;
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)(function (event) {
        if (event.result !== undefined) {
          return event.result;
        }

        throw new Error(event.error);
      })).toPromise();
    }
  }, {
    key: "isEnabled",
    get: function get() {
      return !!this.serviceWorker;
    }
  }]);

  return NgswCommChannel;
}();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Subscribe and listen to
 * [Web Push
 * Notifications](https://developer.mozilla.org/en-US/docs/Web/API/Push_API/Best_Practices) through
 * Angular Service Worker.
 *
 * @usageNotes
 *
 * You can inject a `SwPush` instance into any component or service
 * as a dependency.
 *
 * <code-example path="service-worker/push/module.ts" region="inject-sw-push"
 * header="app.component.ts"></code-example>
 *
 * To subscribe, call `SwPush.requestSubscription()`, which asks the user for permission.
 * The call returns a `Promise` with a new
 * [`PushSubscription`](https://developer.mozilla.org/en-US/docs/Web/API/PushSubscription)
 * instance.
 *
 * <code-example path="service-worker/push/module.ts" region="subscribe-to-push"
 * header="app.component.ts"></code-example>
 *
 * A request is rejected if the user denies permission, or if the browser
 * blocks or does not support the Push API or ServiceWorkers.
 * Check `SwPush.isEnabled` to confirm status.
 *
 * Invoke Push Notifications by pushing a message with the following payload.
 *
 * ```ts
 * {
 *   "notification": {
 *     "actions": NotificationAction[],
 *     "badge": USVString,
 *     "body": DOMString,
 *     "data": any,
 *     "dir": "auto"|"ltr"|"rtl",
 *     "icon": USVString,
 *     "image": USVString,
 *     "lang": DOMString,
 *     "renotify": boolean,
 *     "requireInteraction": boolean,
 *     "silent": boolean,
 *     "tag": DOMString,
 *     "timestamp": DOMTimeStamp,
 *     "title": DOMString,
 *     "vibrate": number[]
 *   }
 * }
 * ```
 *
 * Only `title` is required. See `Notification`
 * [instance
 * properties](https://developer.mozilla.org/en-US/docs/Web/API/Notification#Instance_properties).
 *
 * While the subscription is active, Service Worker listens for
 * [PushEvent](https://developer.mozilla.org/en-US/docs/Web/API/PushEvent)
 * occurrences and creates
 * [Notification](https://developer.mozilla.org/en-US/docs/Web/API/Notification)
 * instances in response.
 *
 * Unsubscribe using `SwPush.unsubscribe()`.
 *
 * An application can subscribe to `SwPush.notificationClicks` observable to be notified when a user
 * clicks on a notification. For example:
 *
 * <code-example path="service-worker/push/module.ts" region="subscribe-to-notification-clicks"
 * header="app.component.ts"></code-example>
 *
 * You can read more on handling notification clicks in the [Service worker notifications
 * guide](guide/service-worker-notifications).
 *
 * @see [Push Notifications](https://developers.google.com/web/fundamentals/codelabs/push-notifications/)
 * @see [Angular Push Notifications](https://blog.angular-university.io/angular-push-notifications/)
 * @see [MDN: Push API](https://developer.mozilla.org/en-US/docs/Web/API/Push_API)
 * @see [MDN: Notifications API](https://developer.mozilla.org/en-US/docs/Web/API/Notifications_API)
 * @see [MDN: Web Push API Notifications best practices](https://developer.mozilla.org/en-US/docs/Web/API/Push_API/Best_Practices)
 *
 * @publicApi
 */


var SwPush = /*#__PURE__*/function () {
  function SwPush(sw) {
    (0,D_Projects_capacitor_pwa_app_pedido_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_3__["default"])(this, SwPush);

    this.sw = sw;
    this.subscriptionChanges = new rxjs__WEBPACK_IMPORTED_MODULE_16__.Subject();

    if (!sw.isEnabled) {
      this.messages = rxjs__WEBPACK_IMPORTED_MODULE_17__.NEVER;
      this.notificationClicks = rxjs__WEBPACK_IMPORTED_MODULE_17__.NEVER;
      this.subscription = rxjs__WEBPACK_IMPORTED_MODULE_17__.NEVER;
      return;
    }

    this.messages = this.sw.eventsOfType('PUSH').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)(function (message) {
      return message.data;
    }));
    this.notificationClicks = this.sw.eventsOfType('NOTIFICATION_CLICK').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)(function (message) {
      return message.data;
    }));
    this.pushManager = this.sw.registration.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)(function (registration) {
      return registration.pushManager;
    }));
    var workerDrivenSubscriptions = this.pushManager.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.switchMap)(function (pm) {
      return pm.getSubscription();
    }));
    this.subscription = (0,rxjs__WEBPACK_IMPORTED_MODULE_18__.merge)(workerDrivenSubscriptions, this.subscriptionChanges);
  }
  /**
   * True if the Service Worker is enabled (supported by the browser and enabled via
   * `ServiceWorkerModule`).
   */


  (0,D_Projects_capacitor_pwa_app_pedido_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_4__["default"])(SwPush, [{
    key: "isEnabled",
    get: function get() {
      return this.sw.isEnabled;
    }
    /**
     * Subscribes to Web Push Notifications,
     * after requesting and receiving user permission.
     *
     * @param options An object containing the `serverPublicKey` string.
     * @returns A Promise that resolves to the new subscription object.
     */

  }, {
    key: "requestSubscription",
    value: function requestSubscription(options) {
      var _this = this;

      if (!this.sw.isEnabled) {
        return Promise.reject(new Error(ERR_SW_NOT_SUPPORTED));
      }

      var pushOptions = {
        userVisibleOnly: true
      };
      var key = this.decodeBase64(options.serverPublicKey.replace(/_/g, '/').replace(/-/g, '+'));
      var applicationServerKey = new Uint8Array(new ArrayBuffer(key.length));

      for (var i = 0; i < key.length; i++) {
        applicationServerKey[i] = key.charCodeAt(i);
      }

      pushOptions.applicationServerKey = applicationServerKey;
      return this.pushManager.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.switchMap)(function (pm) {
        return pm.subscribe(pushOptions);
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.take)(1)).toPromise().then(function (sub) {
        _this.subscriptionChanges.next(sub);

        return sub;
      });
    }
    /**
     * Unsubscribes from Service Worker push notifications.
     *
     * @returns A Promise that is resolved when the operation succeeds, or is rejected if there is no
     *          active subscription or the unsubscribe operation fails.
     */

  }, {
    key: "unsubscribe",
    value: function unsubscribe() {
      var _this2 = this;

      if (!this.sw.isEnabled) {
        return Promise.reject(new Error(ERR_SW_NOT_SUPPORTED));
      }

      var doUnsubscribe = function doUnsubscribe(sub) {
        if (sub === null) {
          throw new Error('Not subscribed to push notifications.');
        }

        return sub.unsubscribe().then(function (success) {
          if (!success) {
            throw new Error('Unsubscribe failed!');
          }

          _this2.subscriptionChanges.next(null);
        });
      };

      return this.subscription.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.switchMap)(doUnsubscribe)).toPromise();
    }
  }, {
    key: "decodeBase64",
    value: function decodeBase64(input) {
      return atob(input);
    }
  }]);

  return SwPush;
}();

SwPush.ɵfac = function SwPush_Factory(t) {
  return new (t || SwPush)(_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵinject"](NgswCommChannel));
};

SwPush.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdefineInjectable"]({
  token: SwPush,
  factory: SwPush.ɵfac
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵsetClassMetadata"](SwPush, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_19__.Injectable
  }], function () {
    return [{
      type: NgswCommChannel
    }];
  }, null);
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Subscribe to update notifications from the Service Worker, trigger update
 * checks, and forcibly activate updates.
 *
 * @see {@link guide/service-worker-communications Service worker communication guide}
 *
 * @publicApi
 */


var SwUpdate = /*#__PURE__*/function () {
  function SwUpdate(sw) {
    (0,D_Projects_capacitor_pwa_app_pedido_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_3__["default"])(this, SwUpdate);

    this.sw = sw;

    if (!sw.isEnabled) {
      this.versionUpdates = rxjs__WEBPACK_IMPORTED_MODULE_17__.NEVER;
      this.available = rxjs__WEBPACK_IMPORTED_MODULE_17__.NEVER;
      this.activated = rxjs__WEBPACK_IMPORTED_MODULE_17__.NEVER;
      this.unrecoverable = rxjs__WEBPACK_IMPORTED_MODULE_17__.NEVER;
      return;
    }

    this.versionUpdates = this.sw.eventsOfType(['VERSION_DETECTED', 'VERSION_INSTALLATION_FAILED', 'VERSION_READY', 'NO_NEW_VERSION_DETECTED']);
    this.available = this.versionUpdates.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.filter)(function (evt) {
      return evt.type === 'VERSION_READY';
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)(function (evt) {
      return {
        type: 'UPDATE_AVAILABLE',
        current: evt.currentVersion,
        available: evt.latestVersion
      };
    }));
    this.activated = this.sw.eventsOfType('UPDATE_ACTIVATED');
    this.unrecoverable = this.sw.eventsOfType('UNRECOVERABLE_STATE');
  }
  /**
   * True if the Service Worker is enabled (supported by the browser and enabled via
   * `ServiceWorkerModule`).
   */


  (0,D_Projects_capacitor_pwa_app_pedido_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_4__["default"])(SwUpdate, [{
    key: "isEnabled",
    get: function get() {
      return this.sw.isEnabled;
    }
    /**
     * Checks for an update and waits until the new version is downloaded from the server and ready
     * for activation.
     *
     * @returns a promise that
     * - resolves to `true` if a new version was found and is ready to be activated.
     * - resolves to `false` if no new version was found
     * - rejects if any error occurs
     */

  }, {
    key: "checkForUpdate",
    value: function checkForUpdate() {
      if (!this.sw.isEnabled) {
        return Promise.reject(new Error(ERR_SW_NOT_SUPPORTED));
      }

      var nonce = this.sw.generateNonce();
      return this.sw.postMessageWithOperation('CHECK_FOR_UPDATES', {
        nonce: nonce
      }, nonce);
    }
    /**
     * Updates the current client (i.e. browser tab) to the latest version that is ready for
     * activation.
     *
     * In most cases, you should not use this method and instead should update a client by reloading
     * the page.
     *
     * <div class="alert is-important">
     *
     * Updating a client without reloading can easily result in a broken application due to a version
     * mismatch between the [application shell](guide/glossary#app-shell) and other page resources,
     * such as [lazy-loaded chunks](guide/glossary#lazy-loading), whose filenames may change between
     * versions.
     *
     * Only use this method, if you are certain it is safe for your specific use case.
     *
     * </div>
     *
     * @returns a promise that
     *  - resolves to `true` if an update was activated successfully
     *  - resolves to `false` if no update was available (for example, the client was already on the
     *    latest version).
     *  - rejects if any error occurs
     */

  }, {
    key: "activateUpdate",
    value: function activateUpdate() {
      if (!this.sw.isEnabled) {
        return Promise.reject(new Error(ERR_SW_NOT_SUPPORTED));
      }

      var nonce = this.sw.generateNonce();
      return this.sw.postMessageWithOperation('ACTIVATE_UPDATE', {
        nonce: nonce
      }, nonce);
    }
  }]);

  return SwUpdate;
}();

SwUpdate.ɵfac = function SwUpdate_Factory(t) {
  return new (t || SwUpdate)(_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵinject"](NgswCommChannel));
};

SwUpdate.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdefineInjectable"]({
  token: SwUpdate,
  factory: SwUpdate.ɵfac
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵsetClassMetadata"](SwUpdate, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_19__.Injectable
  }], function () {
    return [{
      type: NgswCommChannel
    }];
  }, null);
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Token that can be used to provide options for `ServiceWorkerModule` outside of
 * `ServiceWorkerModule.register()`.
 *
 * You can use this token to define a provider that generates the registration options at runtime,
 * for example via a function call:
 *
 * {@example service-worker/registration-options/module.ts region="registration-options"
 *     header="app.module.ts"}
 *
 * @publicApi
 */


var SwRegistrationOptions = /*#__PURE__*/(0,D_Projects_capacitor_pwa_app_pedido_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_4__["default"])(function SwRegistrationOptions() {
  (0,D_Projects_capacitor_pwa_app_pedido_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_3__["default"])(this, SwRegistrationOptions);
});

var SCRIPT = new _angular_core__WEBPACK_IMPORTED_MODULE_19__.InjectionToken('NGSW_REGISTER_SCRIPT');

function ngswAppInitializer(injector, script, options, platformId) {
  return function () {
    if (!((0,_angular_common__WEBPACK_IMPORTED_MODULE_20__.isPlatformBrowser)(platformId) && 'serviceWorker' in navigator && options.enabled !== false)) {
      return;
    } // Wait for service worker controller changes, and fire an INITIALIZE action when a new SW
    // becomes active. This allows the SW to initialize itself even if there is no application
    // traffic.


    navigator.serviceWorker.addEventListener('controllerchange', function () {
      if (navigator.serviceWorker.controller !== null) {
        navigator.serviceWorker.controller.postMessage({
          action: 'INITIALIZE'
        });
      }
    });
    var readyToRegister$;

    if (typeof options.registrationStrategy === 'function') {
      readyToRegister$ = options.registrationStrategy();
    } else {
      var _split = (options.registrationStrategy || 'registerWhenStable:30000').split(':'),
          _split2 = (0,D_Projects_capacitor_pwa_app_pedido_node_modules_babel_runtime_helpers_esm_toArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_split),
          strategy = _split2[0],
          args = _split2.slice(1);

      switch (strategy) {
        case 'registerImmediately':
          readyToRegister$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.of)(null);
          break;

        case 'registerWithDelay':
          readyToRegister$ = delayWithTimeout(+args[0] || 0);
          break;

        case 'registerWhenStable':
          readyToRegister$ = !args[0] ? whenStable(injector) : (0,rxjs__WEBPACK_IMPORTED_MODULE_18__.merge)(whenStable(injector), delayWithTimeout(+args[0]));
          break;

        default:
          // Unknown strategy.
          throw new Error("Unknown ServiceWorker registration strategy: ".concat(options.registrationStrategy));
      }
    } // Don't return anything to avoid blocking the application until the SW is registered.
    // Also, run outside the Angular zone to avoid preventing the app from stabilizing (especially
    // given that some registration strategies wait for the app to stabilize).
    // Catch and log the error if SW registration fails to avoid uncaught rejection warning.


    var ngZone = injector.get(_angular_core__WEBPACK_IMPORTED_MODULE_19__.NgZone);
    ngZone.runOutsideAngular(function () {
      return readyToRegister$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.take)(1)).subscribe(function () {
        return navigator.serviceWorker.register(script, {
          scope: options.scope
        }).catch(function (err) {
          return console.error('Service worker registration failed with:', err);
        });
      });
    });
  };
}

function delayWithTimeout(timeout) {
  return (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.of)(null).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_21__.delay)(timeout));
}

function whenStable(injector) {
  var appRef = injector.get(_angular_core__WEBPACK_IMPORTED_MODULE_19__.ApplicationRef);
  return appRef.isStable.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.filter)(function (stable) {
    return stable;
  }));
}

function ngswCommChannelFactory(opts, platformId) {
  return new NgswCommChannel((0,_angular_common__WEBPACK_IMPORTED_MODULE_20__.isPlatformBrowser)(platformId) && opts.enabled !== false ? navigator.serviceWorker : undefined);
}
/**
 * @publicApi
 */


var ServiceWorkerModule = /*#__PURE__*/function () {
  function ServiceWorkerModule() {
    (0,D_Projects_capacitor_pwa_app_pedido_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_3__["default"])(this, ServiceWorkerModule);
  }

  (0,D_Projects_capacitor_pwa_app_pedido_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_4__["default"])(ServiceWorkerModule, null, [{
    key: "register",
    value:
    /**
     * Register the given Angular Service Worker script.
     *
     * If `enabled` is set to `false` in the given options, the module will behave as if service
     * workers are not supported by the browser, and the service worker will not be registered.
     */
    function register(script) {
      var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return {
        ngModule: ServiceWorkerModule,
        providers: [{
          provide: SCRIPT,
          useValue: script
        }, {
          provide: SwRegistrationOptions,
          useValue: opts
        }, {
          provide: NgswCommChannel,
          useFactory: ngswCommChannelFactory,
          deps: [SwRegistrationOptions, _angular_core__WEBPACK_IMPORTED_MODULE_19__.PLATFORM_ID]
        }, {
          provide: _angular_core__WEBPACK_IMPORTED_MODULE_19__.APP_INITIALIZER,
          useFactory: ngswAppInitializer,
          deps: [_angular_core__WEBPACK_IMPORTED_MODULE_19__.Injector, SCRIPT, SwRegistrationOptions, _angular_core__WEBPACK_IMPORTED_MODULE_19__.PLATFORM_ID],
          multi: true
        }]
      };
    }
  }]);

  return ServiceWorkerModule;
}();

ServiceWorkerModule.ɵfac = function ServiceWorkerModule_Factory(t) {
  return new (t || ServiceWorkerModule)();
};

ServiceWorkerModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdefineNgModule"]({
  type: ServiceWorkerModule
});
ServiceWorkerModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdefineInjector"]({
  providers: [SwPush, SwUpdate]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵsetClassMetadata"](ServiceWorkerModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_19__.NgModule,
    args: [{
      providers: [SwPush, SwUpdate]
    }]
  }], null, null);
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// This file only reexports content of the `src` folder. Keep it that way.

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Generated bundle index. Do not edit.
 */




/***/ })

}]);
//# sourceMappingURL=default-src_app_shared_services_notificacion-push_service_ts.js.map