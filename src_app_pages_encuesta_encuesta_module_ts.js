"use strict";
(self["webpackChunkpwa_app_pedido"] = self["webpackChunkpwa_app_pedido"] || []).push([["src_app_pages_encuesta_encuesta_module_ts"],{

/***/ 86637:
/*!***************************************************!*\
  !*** ./src/app/pages/encuesta/encuesta.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EncuestaModule": () => (/* binding */ EncuestaModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _encuesta_routing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./encuesta.routing */ 9034);
/* harmony import */ var src_app_core_material_material_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/material/material.module */ 22717);
/* harmony import */ var src_app_componentes_componentes_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/componentes/componentes.module */ 83380);
/* harmony import */ var _encuesta_encuesta_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./encuesta/encuesta.component */ 98646);







let EncuestaModule = class EncuestaModule {
};
EncuestaModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        declarations: [
            _encuesta_encuesta_component__WEBPACK_IMPORTED_MODULE_3__.EncuestaComponent
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _encuesta_routing__WEBPACK_IMPORTED_MODULE_0__.EncuestaRoutingModule,
            src_app_core_material_material_module__WEBPACK_IMPORTED_MODULE_1__.MaterialModule,
            src_app_componentes_componentes_module__WEBPACK_IMPORTED_MODULE_2__.ComponentesModule
        ]
    })
], EncuestaModule);



/***/ }),

/***/ 9034:
/*!****************************************************!*\
  !*** ./src/app/pages/encuesta/encuesta.routing.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EncuestaRoutingModule": () => (/* binding */ EncuestaRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _encuesta_encuesta_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./encuesta/encuesta.component */ 98646);




const routes = [{
        path: '', component: _encuesta_encuesta_component__WEBPACK_IMPORTED_MODULE_0__.EncuestaComponent,
        data: { titulo: 'Inicio' },
        children: [
            {
                path: '', redirectTo: 'inicio'
            }
        ]
    }];
let EncuestaRoutingModule = class EncuestaRoutingModule {
};
EncuestaRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], EncuestaRoutingModule);



/***/ }),

/***/ 98646:
/*!***************************************************************!*\
  !*** ./src/app/pages/encuesta/encuesta/encuesta.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EncuestaComponent": () => (/* binding */ EncuestaComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _encuesta_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./encuesta.component.html?ngResource */ 8302);
/* harmony import */ var _encuesta_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./encuesta.component.css?ngResource */ 23290);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_app_shared_services_info_token_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/info-token.service */ 93674);
/* harmony import */ var src_app_shared_services_crud_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/crud-http.service */ 24677);
/* harmony import */ var src_app_shared_services_navigator_link_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/navigator-link.service */ 12562);
/* harmony import */ var src_app_shared_services_socket_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/socket.service */ 43460);
/* harmony import */ var src_app_shared_services_listen_status_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/listen-status.service */ 70190);
/* harmony import */ var src_app_shared_services_establecimiento_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/services/establecimiento.service */ 32218);







// import { throwMatDialogContentAlreadyAttachedError } from '@angular/material/dialog';



let EncuestaComponent = class EncuestaComponent {
    constructor(infoTokenService, crudService, navigatorService, socketService, listenStatusService, establecimientoService) {
        this.infoTokenService = infoTokenService;
        this.crudService = crudService;
        this.navigatorService = navigatorService;
        this.socketService = socketService;
        this.listenStatusService = listenStatusService;
        this.establecimientoService = establecimientoService;
        this.nomSede = '';
        this.ciudadSede = '';
        this.countFin = 4;
        this.selectedTabEncuesta = 0;
        this.intervalConteo = null;
        this.isBtnPagoShow = false; // si el boton de pago ha sido visible entonces recarga la pagina de pago
        this.ListRespuestas = [];
        this.xIdEncuesta = 0;
        this.countOption = 1; // inicio y fin
    }
    ngOnInit() {
        this.infoToken = this.infoTokenService.getInfoUs();
        // console.log(this.infoToken);
        // this.nomSede = localStorage.getItem('sys::s').split('|');
        this.infoSede = this.establecimientoService.get();
        this.nomSede = this.infoSede.nombre;
        this.ciudadSede = this.infoSede.ciudad;
        this.dataPost = {
            idsede: this.infoSede.idsede,
            // idsede: this.infoToken.idsede,
            // idcliente: this.infoTokenService.getInfoUs().idcliente
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
        this.listenStatusService.isBtnPagoShow$.subscribe((res) => { this.isBtnPagoShow = res; });
    }
    loadEncuesta() {
        this.crudService.postFree(this.dataPost, 'encuesta', 'la-encuesta', false).subscribe((res) => {
            // console.log(res);
            if (res.success) {
                if (res.data.length === 0) {
                    this.cerrarSession();
                    return;
                }
                const _data = res.data[0].preguntas;
                this.xIdEncuesta = _data.idencuesta;
                this.titulo_inicio = _data.inicio;
                this.titulo_fin = _data.fin;
                this.listPreguntas = _data.preguntas;
                this.countOption += this.listPreguntas.length;
            }
            else {
                this.cerrarSession();
            }
        });
    }
    loadOpciones() {
        this.crudService.postFree(this.dataPost, 'encuesta', 'las-opciones', false).subscribe((res) => {
            if (res.success) {
                this.listOption = res.data;
            }
        });
    }
    pasarTab(event = null, pregunta = null, txt_comentario = null) {
        if (!event) {
            this.selectedTabEncuesta++;
            return;
        } // inicio
        const isComentario = pregunta.obligatorio === '1' ? true : false;
        const rpt = {
            idencuesta_pregunta: pregunta.idencuesta_pregunta,
            idencuesta_respuesta: event.idencuesta_respuesta || 0,
            iscomentario: isComentario,
            comentario: txt_comentario || ''
        };
        this.ListRespuestas.push(rpt);
        this.selectedTabEncuesta++;
        if (isComentario) {
            this.guardarEncuesta();
        }
        if (this.countOption === this.selectedTabEncuesta) {
            this.cuentaRegresiva();
        }
    }
    guardarEncuesta() {
        const _dataSend = { item: this.ListRespuestas, i: this.xIdEncuesta };
        this.crudService.postFree(_dataSend, 'encuesta', 'guardar', false).subscribe((res) => {
        });
    }
    cuentaRegresiva() {
        if (this.countFin <= 0) {
            this.intervalConteo = null;
            this.cerrarSession();
        }
        else {
            this.conteoFinEncuesta();
        }
    }
    conteoFinEncuesta() {
        this.intervalConteo = setTimeout(() => {
            this.countFin--;
            this.cuentaRegresiva();
        }, 1000);
    }
    cerrarSession() {
        this.navigatorService.cerrarSession(this.isBtnPagoShow);
        // this.miPedidoService.cerrarSession();
        this.infoTokenService.cerrarSession();
        // para cargar nuevamente al ingresar
        this.socketService.isSocketOpenReconect = true;
        this.socketService.closeConnection();
    }
};
EncuestaComponent.ctorParameters = () => [
    { type: src_app_shared_services_info_token_service__WEBPACK_IMPORTED_MODULE_2__.InfoTockenService },
    { type: src_app_shared_services_crud_http_service__WEBPACK_IMPORTED_MODULE_3__.CrudHttpService },
    { type: src_app_shared_services_navigator_link_service__WEBPACK_IMPORTED_MODULE_4__.NavigatorLinkService },
    { type: src_app_shared_services_socket_service__WEBPACK_IMPORTED_MODULE_5__.SocketService },
    { type: src_app_shared_services_listen_status_service__WEBPACK_IMPORTED_MODULE_6__.ListenStatusService },
    { type: src_app_shared_services_establecimiento_service__WEBPACK_IMPORTED_MODULE_7__.EstablecimientoService }
];
EncuestaComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-encuesta',
        template: _encuesta_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_encuesta_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], EncuestaComponent);



/***/ }),

/***/ 23290:
/*!***************************************************************************!*\
  !*** ./src/app/pages/encuesta/encuesta/encuesta.component.css?ngResource ***!
  \***************************************************************************/
/***/ ((module) => {

module.exports = ".encabezado-encuesta {\r\n    position: fixed;\r\n    top: 0;\r\n    width: 100%;\r\n    background: #3F51B5;\r\n    color: #f5f5f5;\r\n}\r\n\r\n.contain-size {\r\n    contain: size;\r\n}\r\n\r\n.mat-tab-header-pagination.mat-tab-header-pagination-disabled {\r\n    display: none !important;\r\n}\r\n\r\n.mat-tab-header-pagination-controls-enabled .mat-tab-header-pagination {\r\n    display: none !important;\r\n}\r\n\r\n::ng-deep .mat-tab-header-pagination {\r\n    display: none !important;\r\n}\r\n\r\n.hv-50 {\r\n    height: 45vh;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVuY3Vlc3RhLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0lBQ2YsTUFBTTtJQUNOLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSx3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSx3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSx3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCIiwiZmlsZSI6ImVuY3Vlc3RhLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZW5jYWJlemFkby1lbmN1ZXN0YSB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJhY2tncm91bmQ6ICMzRjUxQjU7XHJcbiAgICBjb2xvcjogI2Y1ZjVmNTtcclxufVxyXG5cclxuLmNvbnRhaW4tc2l6ZSB7XHJcbiAgICBjb250YWluOiBzaXplO1xyXG59XHJcblxyXG4ubWF0LXRhYi1oZWFkZXItcGFnaW5hdGlvbi5tYXQtdGFiLWhlYWRlci1wYWdpbmF0aW9uLWRpc2FibGVkIHtcclxuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb24tY29udHJvbHMtZW5hYmxlZCAubWF0LXRhYi1oZWFkZXItcGFnaW5hdGlvbiB7XHJcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAubWF0LXRhYi1oZWFkZXItcGFnaW5hdGlvbiB7XHJcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5odi01MCB7XHJcbiAgICBoZWlnaHQ6IDQ1dmg7XHJcbn0iXX0= */";

/***/ }),

/***/ 8302:
/*!****************************************************************************!*\
  !*** ./src/app/pages/encuesta/encuesta/encuesta.component.html?ngResource ***!
  \****************************************************************************/
/***/ ((module) => {

module.exports = "<div class=\"animated fadeIn\">\n    <div class=\"text-center p-3 encabezado-encuesta\">\n        <p class=\"fs-17 fw-600 m-0\">{{nomSede}}</p>\n        <span class=\"fs-14 fw-100 p-0\">{{ciudadSede}}</span>        \n    </div>\n    <!-- <hr> -->\n    <div class=\"text-center xcontainer-centrado p-3 hv-50\">\n        <!-- <div> \n            <div>\n                <div>\n                    <div class=\"opitem\" id=\"item-i\" *ngIf=\"ini_visible\" #opitem>\n                        <p class=\"fs-17 fw-600\">{{titulo_inicio}}</p>\n                        <img src=\"assets/images/reactions_1.gif\" width=\"100%\" alt=\".\">\n                    </div>\n\n                    <div *ngFor=\"let item of listPreguntas\">\n                        <div class=\"opitem\" id=\"item-i\" #opitem>\n                            <p class=\"fs-17 fw-600\">{{item.pregunta}}</p>\n                            <app-encuesta-opcion class=\"d-flex\" [ListOption] = \"listOption\"></app-encuesta-opcion>\n                        </div>\n                    </div>\n\n                    <div class=\"opitem\" id=\"item-i\" #opitem>\n                        <p class=\"fs-17 fw-600\">{{titulo_fin}}</p>                        \n                    </div>\n\n                </div>                \n            </div>                   \n\n            <hr>\n\n            <button mat-flat-button color=\"primary\">Listo, Comenzar</button>            \n\n        </div>     -->\n\n        <mat-tab-group [disableRipple]=\"true\" [dynamicHeight]=\"false\" [selectedIndex]=\"selectedTabEncuesta\" class=\"contain-size\">\n            <mat-tab disabled class=\"overflow-hidden\">\n                <br><br>\n                <div class=\"overflow-hidden\">\n                    <p class=\"fs-17 fw-600\">{{titulo_inicio}}</p>\n                    <img src=\"assets/images/reactions_1.gif\" width=\"100%\" alt=\".\">\n                    <br><br><br>\n                    <button mat-flat-button color=\"primary\" (click)=\"pasarTab()\">Ok, Empezar</button>   \n                </div>\n            </mat-tab>\n\n            <mat-tab disabled *ngFor=\"let item of listPreguntas\">\n                <br><br>\n                <div class=\"overflow-hidden\">\n                    <div #opitem>\n                        <p class=\"fs-17 fw-600\">{{item.pregunta}}</p>\n                        <ng-container *ngIf=\"item.obligatorio === '1'; else elseTemplate\">\n                            <div>\n                                <textarea id=\"txt_comentario\" style=\"width: 70%;\" id=\"txt_comentario\" cols=\"100\" rows=\"3\" #txt_comentario></textarea>\n                                <br><br>\n                                <button mat-flat-button color=\"primary\" (click)=\"pasarTab(listOption, item, txt_comentario.value)\">Listo, Enviar</button>   \n                            </div>\n                        </ng-container>\n                        <ng-template #elseTemplate>\n                            <app-encuesta-opcion class=\"d-flex\" [ListOption] = \"listOption\" (NextPregunta)=\"pasarTab($event, item)\"></app-encuesta-opcion>\n                        </ng-template>\n                        \n                    </div>\n                </div>\n            </mat-tab>\n\n            <mat-tab disabled>\n                <br><br>\n                <div class=\"overflow-hidden\">\n                    <p class=\"fs-17 fw-600\">{{titulo_fin}}</p>        \n                    <br>\n                    <p class=\"text-secondary fs-50 fw-100\">{{countFin | number: '2.'}}</p>  \n                </div>\n            </mat-tab>\n          </mat-tab-group>\n    </div>\n\n    <footer class=\"xfooter text-center bg-white p-3\" *ngIf=\"selectedTabEncuesta === 0\">\n        <button mat-flat-button color=\"accent\" (click)=\"cerrarSession()\">En otro momento, gracias.</button>\n    </footer>\n</div>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_encuesta_encuesta_module_ts.js.map