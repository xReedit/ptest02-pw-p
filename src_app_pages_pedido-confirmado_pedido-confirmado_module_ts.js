"use strict";
(self["webpackChunkpwa_app_pedido"] = self["webpackChunkpwa_app_pedido"] || []).push([["src_app_pages_pedido-confirmado_pedido-confirmado_module_ts"],{

/***/ 50571:
/*!****************************************************************************!*\
  !*** ./src/app/pages/pedido-confirmado/confirmado/confirmado.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfirmadoComponent": () => (/* binding */ ConfirmadoComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _confirmado_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./confirmado.component.html?ngResource */ 32976);
/* harmony import */ var _confirmado_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./confirmado.component.css?ngResource */ 87321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_app_shared_services_info_token_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/info-token.service */ 93674);
/* harmony import */ var src_app_shared_services_navigator_link_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/navigator-link.service */ 12562);
/* harmony import */ var src_app_shared_services_socket_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/socket.service */ 43460);
/* harmony import */ var src_app_shared_services_mipedido_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/mipedido.service */ 31375);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var src_app_shared_services_notificacion_push_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/notificacion-push.service */ 33180);
/* harmony import */ var src_app_componentes_dialog_desicion_dialog_desicion_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/componentes/dialog-desicion/dialog-desicion.component */ 99258);
/* harmony import */ var src_app_shared_services_utilitarios_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/services/utilitarios.service */ 60961);













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
        console.log('aaaaaaaaaaaaaaaaaaaaaaa');
        if (this.pushNotificationSerice.getIsTienePermiso()) {
            this.pushNotificationSerice.suscribirse();
            return;
        }
        // else {
        //   this.pushNotificationSerice.suscribirse();
        //   return;
        // }
        // si no tiene permiso le pregunta
        const _dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MatDialogConfig();
        _dialogConfig.disableClose = true;
        _dialogConfig.hasBackdrop = true;
        _dialogConfig.data = { idMjs: option };
        const _dialogReset = this.dialog.open(src_app_componentes_dialog_desicion_dialog_desicion_component__WEBPACK_IMPORTED_MODULE_7__.DialogDesicionComponent, _dialogConfig);
        _dialogReset.afterClosed().subscribe(result => {
            if (result) {
                // console.log('result', result);
                this.pushNotificationSerice.suscribirse();
            }
        });
    }
};
ConfirmadoComponent.ctorParameters = () => [
    { type: src_app_shared_services_info_token_service__WEBPACK_IMPORTED_MODULE_2__.InfoTockenService },
    { type: src_app_shared_services_navigator_link_service__WEBPACK_IMPORTED_MODULE_3__.NavigatorLinkService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.Router },
    { type: src_app_shared_services_socket_service__WEBPACK_IMPORTED_MODULE_4__.SocketService },
    { type: src_app_shared_services_mipedido_service__WEBPACK_IMPORTED_MODULE_5__.MipedidoService },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MatDialog },
    { type: src_app_shared_services_notificacion_push_service__WEBPACK_IMPORTED_MODULE_6__.NotificacionPushService },
    { type: src_app_shared_services_utilitarios_service__WEBPACK_IMPORTED_MODULE_8__.UtilitariosService }
];
ConfirmadoComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.Component)({
        selector: 'app-confirmado',
        template: _confirmado_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_confirmado_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ConfirmadoComponent);



/***/ }),

/***/ 15037:
/*!*********************************************************************!*\
  !*** ./src/app/pages/pedido-confirmado/pedido-confirmado.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PedidoConfirmadoModule": () => (/* binding */ PedidoConfirmadoModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _confirmado_confirmado_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./confirmado/confirmado.component */ 50571);
/* harmony import */ var _pedido_confirmado_routing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pedido-confirmado.routing */ 68981);
/* harmony import */ var src_app_core_material_material_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/material/material.module */ 22717);






let PedidoConfirmadoModule = class PedidoConfirmadoModule {
};
PedidoConfirmadoModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        declarations: [
            _confirmado_confirmado_component__WEBPACK_IMPORTED_MODULE_0__.ConfirmadoComponent
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _pedido_confirmado_routing__WEBPACK_IMPORTED_MODULE_1__.PedidoConfirmadoRoutingModule,
            src_app_core_material_material_module__WEBPACK_IMPORTED_MODULE_2__.MaterialModule
        ]
    })
], PedidoConfirmadoModule);



/***/ }),

/***/ 68981:
/*!**********************************************************************!*\
  !*** ./src/app/pages/pedido-confirmado/pedido-confirmado.routing.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PedidoConfirmadoRoutingModule": () => (/* binding */ PedidoConfirmadoRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _confirmado_confirmado_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./confirmado/confirmado.component */ 50571);




const routes = [{
        path: '', component: _confirmado_confirmado_component__WEBPACK_IMPORTED_MODULE_0__.ConfirmadoComponent,
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
PedidoConfirmadoRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], PedidoConfirmadoRoutingModule);



/***/ }),

/***/ 87321:
/*!****************************************************************************************!*\
  !*** ./src/app/pages/pedido-confirmado/confirmado/confirmado.component.css?ngResource ***!
  \****************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb25maXJtYWRvLmNvbXBvbmVudC5jc3MifQ== */";

/***/ }),

/***/ 32976:
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/pedido-confirmado/confirmado/confirmado.component.html?ngResource ***!
  \*****************************************************************************************/
/***/ ((module) => {

module.exports = "<!-- confirmacion de pedido solo delivery -->\n\n<div class=\"animated fadeIn h-100 d-flex justify-content-center align-items-center\" style=\"background-color: #3f51b5;\">\n    <mat-card class=\"m-2 mb-2\">\n        <div class=\"p-3\" style=\"max-width: 500px; margin: 0 auto;\">\n            <div class=\"p-3 bg-white\">\n                <div class=\"text-center\">\n                  <p class=\"fs-20\">{{ titulo }}</p>\n                  <hr>\n                  <div style=\"max-width: 220px\">\n                    <p>{{ subtitulo }}</p>\n                  </div>\n                  <hr>\n                  <img src=\"./assets/images/{{ img }}\" alt=\"delivery\" width=\"160px\">\n                  <hr>\n                  <p>Puede ver el estado en <br><strong>Mis Pedidos</strong>.</p>\n                  <!-- <span class=\"fw-100 fs-25\">{{ countFin | number: '2.' }}</span>\n                  <p>Notificando pago a control de caja ...</p> -->\n                </div>\n              </div>\n              \n              <div class=\"p-3 bg-white text-center\">          \n                <button mat-flat-button color=\"primary\" (click)=\"finDeliveryAvisoMsj()\"> Listo. </button>\n                <br>\n              </div>\n        </div>\n    </mat-card>\n</div>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_pedido-confirmado_pedido-confirmado_module_ts.js.map