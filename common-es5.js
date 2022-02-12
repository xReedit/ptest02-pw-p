function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/dialog-desicion/dialog-desicion.component.html":
  /*!******************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/dialog-desicion/dialog-desicion.component.html ***!
    \******************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentesDialogDesicionDialogDesicionComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"p-3\">\n    <span class=\"fw-100 fs-15\">{{msj}}</span>\n    <hr>\n    <div class=\"d-flex\">\n        <button class=\"btn btn-success\" (click)=\"cerrarDlg(true)\">{{titleBtnSuccess}}</button>\n        <button class=\"ml-2 btn btn-danger\" (click)=\"cerrarDlg(false)\">{{titleBtnCancel}}</button>\n    </div>\n    <br>\n</div>\n";
    /***/
  },

  /***/
  "./src/app/componentes/dialog-desicion/dialog-desicion.component.css":
  /*!***************************************************************************!*\
    !*** ./src/app/componentes/dialog-desicion/dialog-desicion.component.css ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentesDialogDesicionDialogDesicionComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudGVzL2RpYWxvZy1kZXNpY2lvbi9kaWFsb2ctZGVzaWNpb24uY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/componentes/dialog-desicion/dialog-desicion.component.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/componentes/dialog-desicion/dialog-desicion.component.ts ***!
    \**************************************************************************/

  /*! exports provided: DialogDesicionComponent */

  /***/
  function srcAppComponentesDialogDesicionDialogDesicionComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DialogDesicionComponent", function () {
      return DialogDesicionComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");

    var DialogDesicionComponent = /*#__PURE__*/function () {
      function DialogDesicionComponent(dialogRef, data) {
        _classCallCheck(this, DialogDesicionComponent);

        this.dialogRef = dialogRef;
        this.msj = '';
        this.titleBtnCancel = 'No';
        this.titleBtnSuccess = 'Si, por favor';
        var idMsj = data ? data.idMjs : 0;

        switch (idMsj) {
          case 0:
            this.msj = 'Desea que se le notifique cuando su pedido este listo?';
            break;

          case 1:
            this.msj = 'Desea saber cuando tenga descuentos y/o ofertas?';
            break;
        }
      }

      _createClass(DialogDesicionComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "cerrarDlg",
        value: function cerrarDlg(value) {
          this.dialogRef.close(value);
        }
      }]);

      return DialogDesicionComponent;
    }();

    DialogDesicionComponent.ctorParameters = function () {
      return [{
        type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]]
        }]
      }];
    };

    DialogDesicionComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-dialog-desicion',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./dialog-desicion.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/componentes/dialog-desicion/dialog-desicion.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./dialog-desicion.component.css */
      "./src/app/componentes/dialog-desicion/dialog-desicion.component.css"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object])], DialogDesicionComponent);
    /***/
  },

  /***/
  "./src/app/shared/services/notificacion-push.service.ts":
  /*!**************************************************************!*\
    !*** ./src/app/shared/services/notificacion-push.service.ts ***!
    \**************************************************************/

  /*! exports provided: NotificacionPushService */

  /***/
  function srcAppSharedServicesNotificacionPushServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NotificacionPushService", function () {
      return NotificacionPushService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_service_worker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/service-worker */
    "./node_modules/@angular/service-worker/__ivy_ngcc__/fesm2015/service-worker.js");
    /* harmony import */


    var _crud_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./crud-http.service */
    "./src/app/shared/services/crud-http.service.ts");
    /* harmony import */


    var _info_token_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./info-token.service */
    "./src/app/shared/services/info-token.service.ts");
    /* harmony import */


    var _config_config_const__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../config/config.const */
    "./src/app/shared/config/config.const.ts"); // import { Observable } from 'rxjs/internal/Observable';
    // import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
    // import { DialogDesicionComponent } from 'src/app/componentes/dialog-desicion/dialog-desicion.component';


    var NotificacionPushService = /*#__PURE__*/function () {
      // private VAPID_PUBLIC = 'BC7ietauZE99Hx9HkPyuGVr8jaYETyEJgH-gLaYIsbORYobppt9dX49_K_wubDqphu1afi7XrM6x1zAp4kJh_wU';
      function NotificacionPushService(swPush, crudService, infoTokenService) {
        _classCallCheck(this, NotificacionPushService);

        // this.showMessages();
        this.swPush = swPush;
        this.crudService = crudService;
        this.infoTokenService = infoTokenService; // this.swPush.notificationClicks.subscribe( event => {
        //   // console.log('Received notification: ', event);
        //   const url = event.notification.data.url;
        //   window.open(url, '_blank');
        // });

        this.swPush.notificationClicks.subscribe(function (event) {
          alert('aaaaaaaaaaa');
          console.log('clic notification', event); // const url = event.notification.data.url;
          // window.location.reload();
          // window.open('reparto.papaya.com.pe');
        });
      }

      _createClass(NotificacionPushService, [{
        key: "getIsTienePermiso",
        value: function getIsTienePermiso() {
          return Notification.permission === 'granted' ? true : false;
        } // se suscribe a la notificacion

      }, {
        key: "suscribirse",
        value: function suscribirse() {
          console.log('llego a suscribirse estado this.swPush.isEnabled: ', this.swPush.isEnabled); // if ( this.swPush.isEnabled ) {
          // this.swPush.subscription.subscribe(res => {
          // if (!res) {return; }
          // this.lanzarPermisoNotificationPush(option);

          this.keySuscribtion(); // });
          // }
        } //  suscriberse

      }, {
        key: "keySuscribtion",
        value: function keySuscribtion() {
          var _this = this;

          // console.log('keySuscribtion');
          this.swPush.requestSubscription({
            serverPublicKey: _config_config_const__WEBPACK_IMPORTED_MODULE_5__["VAPID_PUBLIC"]
          }).then(function (subscription) {
            // send subscription to the server
            console.log('suscrito a notificaciones push', subscription);

            _this.saveSuscripcion(subscription);
          })["catch"](console.error);
        }
      }, {
        key: "saveSuscripcion",
        value: function saveSuscripcion(_subscription) {
          var _data = {
            suscripcion: _subscription,
            idcliente: this.infoTokenService.infoUsToken.idcliente
          }; // console.log('push', _data);

          this.crudService.postFree(_data, 'push', 'suscripcion', false).subscribe(function (res) {
            return console.log(res);
          });
        }
      }]);

      return NotificacionPushService;
    }();

    NotificacionPushService.ctorParameters = function () {
      return [{
        type: _angular_service_worker__WEBPACK_IMPORTED_MODULE_2__["SwPush"]
      }, {
        type: _crud_http_service__WEBPACK_IMPORTED_MODULE_3__["CrudHttpService"]
      }, {
        type: _info_token_service__WEBPACK_IMPORTED_MODULE_4__["InfoTockenService"]
      }];
    };

    NotificacionPushService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_service_worker__WEBPACK_IMPORTED_MODULE_2__["SwPush"], _crud_http_service__WEBPACK_IMPORTED_MODULE_3__["CrudHttpService"], _info_token_service__WEBPACK_IMPORTED_MODULE_4__["InfoTockenService"]])], NotificacionPushService);
    /***/
  }
}]);
//# sourceMappingURL=common-es5.js.map