"use strict";
(self["webpackChunkpwa_app_pedido"] = self["webpackChunkpwa_app_pedido"] || []).push([["common"],{

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
      alert('aaaaaaaaaaa');
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



/***/ })

}]);
//# sourceMappingURL=common.js.map