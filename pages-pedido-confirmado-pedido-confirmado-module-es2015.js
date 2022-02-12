(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-pedido-confirmado-pedido-confirmado-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/pedido-confirmado/confirmado/confirmado.component.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/pedido-confirmado/confirmado/confirmado.component.html ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- confirmacion de pedido solo delivery -->\n\n<div class=\"animated fadeIn h-100 d-flex justify-content-center align-items-center\" style=\"background-color: #3f51b5;\">\n    <mat-card class=\"m-2 mb-2\">\n        <div class=\"p-3\" style=\"max-width: 500px; margin: 0 auto;\">\n            <div class=\"p-3 bg-white\">\n                <div class=\"text-center\">\n                  <p class=\"fs-20\">{{ titulo }}</p>\n                  <hr>\n                  <div style=\"max-width: 220px\">\n                    <p>{{ subtitulo }}</p>\n                  </div>\n                  <hr>\n                  <img src=\"./assets/images/{{ img }}\" alt=\"delivery\" width=\"160px\">\n                  <hr>\n                  <p>Puede ver el estado en <br><strong>Mis Pedidos</strong>.</p>\n                  <!-- <span class=\"fw-100 fs-25\">{{ countFin | number: '2.' }}</span>\n                  <p>Notificando pago a control de caja ...</p> -->\n                </div>\n              </div>\n              \n              <div class=\"p-3 bg-white text-center\">          \n                <button mat-flat-button color=\"primary\" (click)=\"finDeliveryAvisoMsj()\"> Listo. </button>\n                <br>\n              </div>\n        </div>\n    </mat-card>\n</div>\n");

/***/ }),

/***/ "./src/app/pages/pedido-confirmado/confirmado/confirmado.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/pedido-confirmado/confirmado/confirmado.component.css ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3BlZGlkby1jb25maXJtYWRvL2NvbmZpcm1hZG8vY29uZmlybWFkby5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/pedido-confirmado/confirmado/confirmado.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/pages/pedido-confirmado/confirmado/confirmado.component.ts ***!
  \****************************************************************************/
/*! exports provided: ConfirmadoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmadoComponent", function() { return ConfirmadoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_shared_services_info_token_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/info-token.service */ "./src/app/shared/services/info-token.service.ts");
/* harmony import */ var src_app_shared_services_navigator_link_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/navigator-link.service */ "./src/app/shared/services/navigator-link.service.ts");
/* harmony import */ var src_app_shared_services_socket_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/socket.service */ "./src/app/shared/services/socket.service.ts");
/* harmony import */ var src_app_shared_services_mipedido_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/mipedido.service */ "./src/app/shared/services/mipedido.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var src_app_shared_services_notificacion_push_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/services/notificacion-push.service */ "./src/app/shared/services/notificacion-push.service.ts");
/* harmony import */ var src_app_componentes_dialog_desicion_dialog_desicion_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/componentes/dialog-desicion/dialog-desicion.component */ "./src/app/componentes/dialog-desicion/dialog-desicion.component.ts");
/* harmony import */ var src_app_shared_services_utilitarios_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/services/utilitarios.service */ "./src/app/shared/services/utilitarios.service.ts");











let ConfirmadoComponent = class ConfirmadoComponent {
    constructor(infoTokenService, navigatorService, router, socketService, miPedidoService, dialog, pushNotificationSerice, utilitariosSerivce) {
        this.infoTokenService = infoTokenService;
        this.navigatorService = navigatorService;
        this.router = router;
        this.socketService = socketService;
        this.miPedidoService = miPedidoService;
        this.dialog = dialog;
        this.pushNotificationSerice = pushNotificationSerice;
        this.utilitariosSerivce = utilitariosSerivce;
        this.titulo = 'Pedido Confirmado';
        this.subtitulo = 'Su orden llegara pronto.';
        this.img = 'food_delivery.gif';
        this.isReservaCliente = false;
    }
    ngOnInit() {
        this.navigatorService.disableGoBack();
        this.navigatorService.setOffListenNavigator(true);
        this.isReservaCliente = this.infoTokenService.infoUsToken.isReserva;
        if (this.isReservaCliente) {
            this.titulo = 'Reserva Confirmada';
            this.subtitulo = 'Su reserva esta hecha. Lo esperamos a la hora que indico.';
            this.img = 'icon-app/reserva.JPG';
        }
    }
    finDeliveryAvisoMsj() {
        if (this.utilitariosSerivce.getOS() !== 'iOS') {
            this.lanzarPermisoNotificationPush(0);
        }
        // limpiar storage transaccion
        this.miPedidoService.prepareNewPedido();
        this.infoTokenService.removeStoragePedido();
        this.infoTokenService.setIdCliente();
        // this.infoTokenService.cerrarSession();
        this.socketService.isSocketOpenReconect = true;
        this.socketService.closeConnection();
        this.navigatorService.cerrarSession();
        // this.navigatorService._router('../zona-delivery');
        // this.router.navigate(['./home']);
    }
    lanzarPermisoNotificationPush(option = 0) {
        // this.pushNotificationSerice.suscribirse(option);
        // console.log('aaaaaaaaaaaaaaaaaaaaaaa');
        if (this.pushNotificationSerice.getIsTienePermiso()) {
            this.pushNotificationSerice.suscribirse();
            return;
        }
        // else {
        //   this.pushNotificationSerice.suscribirse();
        //   return;
        // }
        // si no tiene permiso le pregunta
        const _dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialogConfig"]();
        _dialogConfig.disableClose = true;
        _dialogConfig.hasBackdrop = true;
        _dialogConfig.data = { idMjs: option };
        const _dialogReset = this.dialog.open(src_app_componentes_dialog_desicion_dialog_desicion_component__WEBPACK_IMPORTED_MODULE_9__["DialogDesicionComponent"], _dialogConfig);
        _dialogReset.afterClosed().subscribe(result => {
            if (result) {
                // console.log('result', result);
                this.pushNotificationSerice.suscribirse();
            }
        });
    }
};
ConfirmadoComponent.ctorParameters = () => [
    { type: src_app_shared_services_info_token_service__WEBPACK_IMPORTED_MODULE_2__["InfoTockenService"] },
    { type: src_app_shared_services_navigator_link_service__WEBPACK_IMPORTED_MODULE_3__["NavigatorLinkService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: src_app_shared_services_socket_service__WEBPACK_IMPORTED_MODULE_4__["SocketService"] },
    { type: src_app_shared_services_mipedido_service__WEBPACK_IMPORTED_MODULE_5__["MipedidoService"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"] },
    { type: src_app_shared_services_notificacion_push_service__WEBPACK_IMPORTED_MODULE_8__["NotificacionPushService"] },
    { type: src_app_shared_services_utilitarios_service__WEBPACK_IMPORTED_MODULE_10__["UtilitariosService"] }
];
ConfirmadoComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-confirmado',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./confirmado.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/pedido-confirmado/confirmado/confirmado.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./confirmado.component.css */ "./src/app/pages/pedido-confirmado/confirmado/confirmado.component.css")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_shared_services_info_token_service__WEBPACK_IMPORTED_MODULE_2__["InfoTockenService"],
        src_app_shared_services_navigator_link_service__WEBPACK_IMPORTED_MODULE_3__["NavigatorLinkService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
        src_app_shared_services_socket_service__WEBPACK_IMPORTED_MODULE_4__["SocketService"],
        src_app_shared_services_mipedido_service__WEBPACK_IMPORTED_MODULE_5__["MipedidoService"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"],
        src_app_shared_services_notificacion_push_service__WEBPACK_IMPORTED_MODULE_8__["NotificacionPushService"],
        src_app_shared_services_utilitarios_service__WEBPACK_IMPORTED_MODULE_10__["UtilitariosService"]])
], ConfirmadoComponent);



/***/ }),

/***/ "./src/app/pages/pedido-confirmado/pedido-confirmado.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/pedido-confirmado/pedido-confirmado.module.ts ***!
  \*********************************************************************/
/*! exports provided: PedidoConfirmadoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PedidoConfirmadoModule", function() { return PedidoConfirmadoModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _confirmado_confirmado_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./confirmado/confirmado.component */ "./src/app/pages/pedido-confirmado/confirmado/confirmado.component.ts");
/* harmony import */ var _pedido_confirmado_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pedido-confirmado.routing */ "./src/app/pages/pedido-confirmado/pedido-confirmado.routing.ts");
/* harmony import */ var src_app_core_material_material_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/material/material.module */ "./src/app/core/material/material.module.ts");






let PedidoConfirmadoModule = class PedidoConfirmadoModule {
};
PedidoConfirmadoModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _confirmado_confirmado_component__WEBPACK_IMPORTED_MODULE_3__["ConfirmadoComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _pedido_confirmado_routing__WEBPACK_IMPORTED_MODULE_4__["PedidoConfirmadoRoutingModule"],
            src_app_core_material_material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"]
        ]
    })
], PedidoConfirmadoModule);



/***/ }),

/***/ "./src/app/pages/pedido-confirmado/pedido-confirmado.routing.ts":
/*!**********************************************************************!*\
  !*** ./src/app/pages/pedido-confirmado/pedido-confirmado.routing.ts ***!
  \**********************************************************************/
/*! exports provided: PedidoConfirmadoRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PedidoConfirmadoRoutingModule", function() { return PedidoConfirmadoRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _confirmado_confirmado_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./confirmado/confirmado.component */ "./src/app/pages/pedido-confirmado/confirmado/confirmado.component.ts");




const routes = [{
        path: '', component: _confirmado_confirmado_component__WEBPACK_IMPORTED_MODULE_3__["ConfirmadoComponent"],
        data: { titulo: 'Cuenta' },
        children: [
            {
                path: '',
                redirectTo: 'confirmado'
            }
        ]
    }];
let PedidoConfirmadoRoutingModule = class PedidoConfirmadoRoutingModule {
};
PedidoConfirmadoRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], PedidoConfirmadoRoutingModule);



/***/ })

}]);
//# sourceMappingURL=pages-pedido-confirmado-pedido-confirmado-module-es2015.js.map