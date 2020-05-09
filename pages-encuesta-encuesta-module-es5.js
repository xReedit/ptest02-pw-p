(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-encuesta-encuesta-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/encuesta/encuesta/encuesta.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/encuesta/encuesta/encuesta.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeIn\">\n    <div class=\"text-center p-3 encabezado-encuesta\">\n        <p class=\"fs-17 fw-600 m-0\">{{nomSede[0]}}</p>\n        <span class=\"fs-14 fw-100 p-0\">{{nomSede[1]}}</span>        \n    </div>\n    <!-- <hr> -->\n    <div class=\"text-center xcontainer-centrado p-3 hv-50\">\n        <!-- <div> \n            <div>\n                <div>\n                    <div class=\"opitem\" id=\"item-i\" *ngIf=\"ini_visible\" #opitem>\n                        <p class=\"fs-17 fw-600\">{{titulo_inicio}}</p>\n                        <img src=\"assets/images/reactions_1.gif\" width=\"100%\" alt=\".\">\n                    </div>\n\n                    <div *ngFor=\"let item of listPreguntas\">\n                        <div class=\"opitem\" id=\"item-i\" #opitem>\n                            <p class=\"fs-17 fw-600\">{{item.pregunta}}</p>\n                            <app-encuesta-opcion class=\"d-flex\" [ListOption] = \"listOption\"></app-encuesta-opcion>\n                        </div>\n                    </div>\n\n                    <div class=\"opitem\" id=\"item-i\" #opitem>\n                        <p class=\"fs-17 fw-600\">{{titulo_fin}}</p>                        \n                    </div>\n\n                </div>                \n            </div>                   \n\n            <hr>\n\n            <button mat-flat-button color=\"primary\">Listo, Comenzar</button>            \n\n        </div>     -->\n\n        <mat-tab-group [disableRipple]=\"true\" [dynamicHeight]=\"false\" [selectedIndex]=\"selectedTabEncuesta\" class=\"contain-size\">\n            <mat-tab disabled class=\"overflow-hidden\">\n                <br><br>\n                <div class=\"overflow-hidden\">\n                    <p class=\"fs-17 fw-600\">{{titulo_inicio}}</p>\n                    <img src=\"assets/images/reactions_1.gif\" width=\"100%\" alt=\".\">\n                    <br><br><br>\n                    <button mat-flat-button color=\"primary\" (click)=\"pasarTab()\">Ok, Empezar</button>   \n                </div>\n            </mat-tab>\n\n            <mat-tab disabled *ngFor=\"let item of listPreguntas\">\n                <br><br>\n                <div class=\"overflow-hidden\">\n                    <div #opitem>\n                        <p class=\"fs-17 fw-600\">{{item.pregunta}}</p>\n                        <ng-container *ngIf=\"item.obligatorio === '1'; else elseTemplate\">\n                            <div>\n                                <textarea id=\"txt_comentario\" style=\"width: 70%;\" id=\"txt_comentario\" cols=\"100\" rows=\"3\" #txt_comentario></textarea>\n                                <br><br>\n                                <button mat-flat-button color=\"primary\" (click)=\"pasarTab(listOption, item, txt_comentario.value)\">Listo, Enviar</button>   \n                            </div>\n                        </ng-container>\n                        <ng-template #elseTemplate>\n                            <app-encuesta-opcion class=\"d-flex\" [ListOption] = \"listOption\" (NextPregunta)=\"pasarTab($event, item)\"></app-encuesta-opcion>\n                        </ng-template>\n                        \n                    </div>\n                </div>\n            </mat-tab>\n\n            <mat-tab disabled>\n                <br><br>\n                <div class=\"overflow-hidden\">\n                    <p class=\"fs-17 fw-600\">{{titulo_fin}}</p>        \n                    <br>\n                    <p class=\"text-secondary fs-50 fw-100\">{{countFin | number: '2.'}}</p>  \n                </div>\n            </mat-tab>\n          </mat-tab-group>\n    </div>\n\n    <footer class=\"xfooter text-center bg-white p-3\" *ngIf=\"selectedTabEncuesta === 0\">\n        <button mat-flat-button color=\"accent\" (click)=\"cerrarSession()\">En otro momento, gracias.</button>\n    </footer>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/encuesta/encuesta.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/encuesta/encuesta.module.ts ***!
  \***************************************************/
/*! exports provided: EncuestaModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EncuestaModule", function() { return EncuestaModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _encuesta_routing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./encuesta.routing */ "./src/app/pages/encuesta/encuesta.routing.ts");
/* harmony import */ var src_app_core_material_material_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/material/material.module */ "./src/app/core/material/material.module.ts");
/* harmony import */ var src_app_componentes_componentes_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/componentes/componentes.module */ "./src/app/componentes/componentes.module.ts");
/* harmony import */ var _encuesta_encuesta_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./encuesta/encuesta.component */ "./src/app/pages/encuesta/encuesta/encuesta.component.ts");







var EncuestaModule = /** @class */ (function () {
    function EncuestaModule() {
    }
    EncuestaModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _encuesta_encuesta_component__WEBPACK_IMPORTED_MODULE_6__["EncuestaComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _encuesta_routing__WEBPACK_IMPORTED_MODULE_3__["EncuestaRoutingModule"],
                src_app_core_material_material_module__WEBPACK_IMPORTED_MODULE_4__["MaterialModule"],
                src_app_componentes_componentes_module__WEBPACK_IMPORTED_MODULE_5__["ComponentesModule"]
            ]
        })
    ], EncuestaModule);
    return EncuestaModule;
}());



/***/ }),

/***/ "./src/app/pages/encuesta/encuesta.routing.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/encuesta/encuesta.routing.ts ***!
  \****************************************************/
/*! exports provided: EncuestaRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EncuestaRoutingModule", function() { return EncuestaRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _encuesta_encuesta_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./encuesta/encuesta.component */ "./src/app/pages/encuesta/encuesta/encuesta.component.ts");




var routes = [{
        path: '', component: _encuesta_encuesta_component__WEBPACK_IMPORTED_MODULE_3__["EncuestaComponent"],
        data: { titulo: 'Inicio' },
        children: [
            {
                path: '', redirectTo: 'inicio'
            }
        ]
    }];
var EncuestaRoutingModule = /** @class */ (function () {
    function EncuestaRoutingModule() {
    }
    EncuestaRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], EncuestaRoutingModule);
    return EncuestaRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/encuesta/encuesta/encuesta.component.css":
/*!****************************************************************!*\
  !*** ./src/app/pages/encuesta/encuesta/encuesta.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".encabezado-encuesta {\r\n    position: fixed;\r\n    top: 0;\r\n    width: 100%;\r\n    background: #3F51B5;\r\n    color: #f5f5f5;\r\n}\r\n\r\n.contain-size {\r\n    contain: size;\r\n}\r\n\r\n.mat-tab-header-pagination.mat-tab-header-pagination-disabled {\r\n    display: none !important;\r\n}\r\n\r\n.mat-tab-header-pagination-controls-enabled .mat-tab-header-pagination {\r\n    display: none !important;\r\n}\r\n\r\n::ng-deep .mat-tab-header-pagination {\r\n    display: none !important;\r\n}\r\n\r\n.hv-50 {\r\n    height: 45vh;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZW5jdWVzdGEvZW5jdWVzdGEvZW5jdWVzdGEuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGVBQWU7SUFDZixNQUFNO0lBQ04sV0FBVztJQUNYLG1CQUFtQjtJQUNuQixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLFlBQVk7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9lbmN1ZXN0YS9lbmN1ZXN0YS9lbmN1ZXN0YS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmVuY2FiZXphZG8tZW5jdWVzdGEge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kOiAjM0Y1MUI1O1xyXG4gICAgY29sb3I6ICNmNWY1ZjU7XHJcbn1cclxuXHJcbi5jb250YWluLXNpemUge1xyXG4gICAgY29udGFpbjogc2l6ZTtcclxufVxyXG5cclxuLm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb24ubWF0LXRhYi1oZWFkZXItcGFnaW5hdGlvbi1kaXNhYmxlZCB7XHJcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5tYXQtdGFiLWhlYWRlci1wYWdpbmF0aW9uLWNvbnRyb2xzLWVuYWJsZWQgLm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb24ge1xyXG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG46Om5nLWRlZXAgLm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb24ge1xyXG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uaHYtNTAge1xyXG4gICAgaGVpZ2h0OiA0NXZoO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/pages/encuesta/encuesta/encuesta.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/encuesta/encuesta/encuesta.component.ts ***!
  \***************************************************************/
/*! exports provided: EncuestaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EncuestaComponent", function() { return EncuestaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_services_info_token_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/info-token.service */ "./src/app/shared/services/info-token.service.ts");
/* harmony import */ var src_app_shared_services_crud_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/crud-http.service */ "./src/app/shared/services/crud-http.service.ts");
/* harmony import */ var src_app_shared_services_navigator_link_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/navigator-link.service */ "./src/app/shared/services/navigator-link.service.ts");
/* harmony import */ var src_app_shared_services_socket_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/socket.service */ "./src/app/shared/services/socket.service.ts");
/* harmony import */ var src_app_shared_services_listen_status_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/listen-status.service */ "./src/app/shared/services/listen-status.service.ts");







var EncuestaComponent = /** @class */ (function () {
    function EncuestaComponent(infoTokenService, crudService, navigatorService, socketService, listenStatusService) {
        this.infoTokenService = infoTokenService;
        this.crudService = crudService;
        this.navigatorService = navigatorService;
        this.socketService = socketService;
        this.listenStatusService = listenStatusService;
        this.nomSede = [];
        this.countFin = 4;
        this.selectedTabEncuesta = 0;
        this.intervalConteo = null;
        this.isBtnPagoShow = false; // si el boton de pago ha sido visible entonces recarga la pagina de pago
        this.ListRespuestas = [];
        this.xIdEncuesta = 0;
        this.countOption = 1; // inicio y fin
    }
    EncuestaComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.infoToken = this.infoTokenService.getInfoUs();
        // console.log(this.infoToken);
        this.nomSede = localStorage.getItem('sys::s').split('|');
        this.dataPost = {
            idsede: this.infoToken.idsede,
        };
        this.loadOpciones();
        this.loadEncuesta();
        // deshabilitar boton back navegator
        this.navigatorService.disabledBack = true;
        history.pushState(null, null, location.href);
        window.onpopstate = function () {
            history.go(1);
        };
        // escucha si bnPago show para reload
        this.listenStatusService.isBtnPagoShow$.subscribe(function (res) { _this.isBtnPagoShow = res; });
    };
    EncuestaComponent.prototype.loadEncuesta = function () {
        var _this = this;
        this.crudService.postFree(this.dataPost, 'encuesta', 'la-encuesta', false).subscribe(function (res) {
            // console.log(res);
            if (res.success) {
                var _data = res.data[0].preguntas;
                _this.xIdEncuesta = _data.idencuesta;
                _this.titulo_inicio = _data.inicio;
                _this.titulo_fin = _data.fin;
                _this.listPreguntas = _data.preguntas;
                _this.countOption += _this.listPreguntas.length;
            }
        });
    };
    EncuestaComponent.prototype.loadOpciones = function () {
        var _this = this;
        this.crudService.postFree(this.dataPost, 'encuesta', 'las-opciones', false).subscribe(function (res) {
            // console.log('las opciones', res);
            if (res.success) {
                _this.listOption = res.data;
            }
            // console.log(this.listOptionItem.toArray());
        });
    };
    EncuestaComponent.prototype.pasarTab = function (event, pregunta, txt_comentario) {
        // console.log('res op', event);
        // console.log('pregunta', pregunta);
        if (event === void 0) { event = null; }
        if (pregunta === void 0) { pregunta = null; }
        if (txt_comentario === void 0) { txt_comentario = null; }
        if (!event) {
            this.selectedTabEncuesta++;
            return;
        } // inicio
        var isComentario = pregunta.obligatorio === '1' ? true : false;
        var rpt = {
            idencuesta_pregunta: pregunta.idencuesta_pregunta,
            idencuesta_respuesta: event.idencuesta_respuesta || 0,
            iscomentario: isComentario,
            comentario: txt_comentario || ''
        };
        this.ListRespuestas.push(rpt);
        // console.log(this.ListRespuestas);
        this.selectedTabEncuesta++;
        if (isComentario) {
            this.guardarEncuesta();
        }
        // console.log('countOption', this.countOption);
        // console.log('selectedTabEncuesta', this.selectedTabEncuesta);
        if (this.countOption === this.selectedTabEncuesta) {
            // console.log('terminar encuesta');
            this.cuentaRegresiva();
        }
    };
    EncuestaComponent.prototype.guardarEncuesta = function () {
        var _dataSend = { item: this.ListRespuestas, i: this.xIdEncuesta };
        this.crudService.postFree(_dataSend, 'encuesta', 'guardar', false).subscribe(function (res) {
            // console.log('guardado', res);
        });
    };
    EncuestaComponent.prototype.cuentaRegresiva = function () {
        if (this.countFin <= 0) {
            this.intervalConteo = null;
            this.cerrarSession();
        }
        else {
            this.conteoFinEncuesta();
        }
    };
    EncuestaComponent.prototype.conteoFinEncuesta = function () {
        var _this = this;
        this.intervalConteo = setTimeout(function () {
            _this.countFin--;
            _this.cuentaRegresiva();
        }, 1000);
    };
    EncuestaComponent.prototype.cerrarSession = function () {
        this.navigatorService.cerrarSession(this.isBtnPagoShow);
        // this.miPedidoService.cerrarSession();
        this.infoTokenService.cerrarSession();
        // para cargar nuevamente al ingresar
        this.socketService.isSocketOpenReconect = true;
        this.socketService.closeConnection();
    };
    EncuestaComponent.ctorParameters = function () { return [
        { type: src_app_shared_services_info_token_service__WEBPACK_IMPORTED_MODULE_2__["InfoTockenService"] },
        { type: src_app_shared_services_crud_http_service__WEBPACK_IMPORTED_MODULE_3__["CrudHttpService"] },
        { type: src_app_shared_services_navigator_link_service__WEBPACK_IMPORTED_MODULE_4__["NavigatorLinkService"] },
        { type: src_app_shared_services_socket_service__WEBPACK_IMPORTED_MODULE_5__["SocketService"] },
        { type: src_app_shared_services_listen_status_service__WEBPACK_IMPORTED_MODULE_6__["ListenStatusService"] }
    ]; };
    EncuestaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-encuesta',
            template: __webpack_require__(/*! raw-loader!./encuesta.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/encuesta/encuesta/encuesta.component.html"),
            styles: [__webpack_require__(/*! ./encuesta.component.css */ "./src/app/pages/encuesta/encuesta/encuesta.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_services_info_token_service__WEBPACK_IMPORTED_MODULE_2__["InfoTockenService"],
            src_app_shared_services_crud_http_service__WEBPACK_IMPORTED_MODULE_3__["CrudHttpService"],
            src_app_shared_services_navigator_link_service__WEBPACK_IMPORTED_MODULE_4__["NavigatorLinkService"],
            src_app_shared_services_socket_service__WEBPACK_IMPORTED_MODULE_5__["SocketService"],
            src_app_shared_services_listen_status_service__WEBPACK_IMPORTED_MODULE_6__["ListenStatusService"]])
    ], EncuestaComponent);
    return EncuestaComponent;
}());



/***/ })

}]);
//# sourceMappingURL=pages-encuesta-encuesta-module-es5.js.map