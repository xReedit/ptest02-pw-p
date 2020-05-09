(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- The content below is only a placeholder and can be replaced.\n<div style=\"text-align:center\">\n  <h1>\n    Welcome to {{ title }}!\n  </h1>\n  <img width=\"300\" alt=\"Angular Logo\" src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==\">\n</div>\n<h2>Here are some links to help you start: </h2>\n<ul>\n  <li>\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://angular.io/tutorial\">Tour of Heroes</a></h2>\n  </li>\n  <li>\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://angular.io/cli\">CLI Documentation</a></h2>\n  </li>\n  <li>\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://blog.angular.io/\">Angular blog</a></h2>\n  </li>\n</ul>\n\n<div class=\"row\">\n  <div class=\"col-2\">A</div>\n  <div class=\"col-2\">B</div>\n</div> -->\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/core/layout-main/layout-main.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/core/layout-main/layout-main.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/core/progress-time-limit/progress-time-limit.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/core/progress-time-limit/progress-time-limit.component.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-container *ngIf=\"timerLimitService.isPorgressVisible$ | async\">\n    <mat-progress-bar \n        class=\"animated fadeInDown\"\n        mode=\"determinate\" \n        color=\"accent\" \n        [value]=\"timerLimitService.countdown$ | async\"    \n    ></mat-progress-bar>\n</ng-container>\n\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/core/tool-bar/tool-bar.component.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/core/tool-bar/tool-bar.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\">   \n <mat-toolbar-row [ngClass]=\"{'toolbar-busqueda': isBusqueda}\">\n   <ng-container *ngIf=\"!isBusqueda\"> \n        \n     <i *ngIf=\"isClienteDelivery\" class=\"fa fa-arrow-left pr-2\" (click)=\"goBackOutEstablecimiento()\"></i>  \n    <span class=\"nom-comercio\">{{ nomSede | titlecase }}</span>\n    <span class=\"example-spacer\"></span>\n    <div style=\"display: contents;\">       \n       <div class=\"example-ripple-container fs-15\" matRipple \n         [matRippleColor]=\"rippleColorBusqueda\"\n         matRippleCentered=\"true\"\n         matRippleUnbounded=\"true\"\n         matRippleRadius=\"290\"\n         (click)=\"activaBusqueda()\"\n         title=\"Buscar\">\n            <i title=\"Cerrar Sesion\" class=\"fa fa-search\" aria-hidden=\"true\"></i>\n       </div>\n       <div class=\"example-ripple-container fs-15\" matRipple matRippleCentered=\"true\" [matRippleColor]=\"rippleColor\" title=\"Cerrar Sesion\" (click)=\"cerrarSession()\">\n            <i title=\"Cerrar Sesion\" class=\"fa fa-sign-out\" aria-hidden=\"true\"></i>\n       </div>\n       <!-- <button class=\"noSelect\" mat-icon-button title=\"Cerrar Sesion\"  (click)=\"cerrarSession()\">\n            <i title=\"Cerrar Sesion\" class=\"fa fa-sign-out\" aria-hidden=\"true\"></i>\n       </button>       -->\n    </div>\n   </ng-container>\n\n   <ng-container *ngIf=\"isBusqueda\">\n      <div class=\"d-flex w-100\">\n       <div class=\"example-ripple-container text-success fs-15\" style=\"margin-left: -15px;\" matRipple matRippleCentered=\"true\" [matRippleColor]=\"rippleColorPlomo\" title=\"Atras\" (click)=\"activaBusqueda()\">\n            <i title=\"Cerrar Sesion\" class=\"fa fa-arrow-left\" aria-hidden=\"true\"></i>\n       </div>\n       <input type=\"text\" class=\"text-busqueda w-100\" placeholder=\"Buscar...\" #txtBuscar (keyup)=\"buscarCharAhora(txtBuscar.value)\" autofocus>\n       <div [hidden]=\"txtBuscar.value === ''\" class=\"example-ripple-container text-dark fs-15\" matRipple matRippleCentered=\"true\" [matRippleColor]=\"rippleColorPlomo\"  (click)=\"clearTextBuqueda()\">\n            <i title=\"Cerrar Sesion\" class=\"fa fa-times\" aria-hidden=\"true\"></i>\n       </div>\n      </div>\n   </ng-container>\n   \n    <!-- <button (click)=\"cerrarSession()\">aa</button> -->\n </mat-toolbar-row>\n</mat-toolbar>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/pedido/resumen-pedido/dialog-reset/dialog-reset.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/pedido/resumen-pedido/dialog-reset/dialog-reset.component.html ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"p-3\">\n    <span class=\"fw-100 fs-15\">{{msj}}</span>\n    <hr>\n    <mat-dialog-actions>\n        <button class=\"mr-1\" mat-stroked-button mat-dialog-close>Cancelar</button>\n        <button mat-flat-button color=\"warn\" [mat-dialog-close]=\"true\">Si, confirmo.</button>\n    </mat-dialog-actions>\n    <br>\n</div>\n\n"

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _shared_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/guards/auth.guard */ "./src/app/shared/guards/auth.guard.ts");
/* harmony import */ var _shared_guards_cliente_profile_guards__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/guards/cliente-profile-guards */ "./src/app/shared/guards/cliente-profile-guards.ts");





const routes = [
    { path: '', redirectTo: '', pathMatch: 'full' },
    // {
    // path: '',
    // component: LayoutMainComponent,
    // children: [
    {
        path: '',
        loadChildren: () => Promise.all(/*! import() | pages-inicio-inicio-module */[__webpack_require__.e("default~pages-encuesta-encuesta-module~pages-inicio-inicio-module~pages-pedido-pedido-module~pages-z~ebdeb88c"), __webpack_require__.e("pages-inicio-inicio-module")]).then(__webpack_require__.bind(null, /*! ./pages/inicio/inicio.module */ "./src/app/pages/inicio/inicio.module.ts")).then(m => m.InicioModule),
        data: { 'tituloModulo': 'Inicio' }
    },
    {
        path: 'pedido',
        loadChildren: () => Promise.all(/*! import() | pages-pedido-pedido-module */[__webpack_require__.e("default~pages-encuesta-encuesta-module~pages-inicio-inicio-module~pages-pedido-pedido-module~pages-z~ebdeb88c"), __webpack_require__.e("default~pages-pagar-cuenta-pagar-cuenta-module~pages-pedido-pedido-module"), __webpack_require__.e("common"), __webpack_require__.e("pages-pedido-pedido-module")]).then(__webpack_require__.bind(null, /*! ./pages/pedido/pedido.module */ "./src/app/pages/pedido/pedido.module.ts")).then(m => m.PedidoModule),
        canActivate: [_shared_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
        data: { 'tituloModulo': 'Pedido' }
    },
    {
        path: 'lanzar-encuesta',
        loadChildren: () => Promise.all(/*! import() | pages-encuesta-encuesta-module */[__webpack_require__.e("default~pages-encuesta-encuesta-module~pages-inicio-inicio-module~pages-pedido-pedido-module~pages-z~ebdeb88c"), __webpack_require__.e("pages-encuesta-encuesta-module")]).then(__webpack_require__.bind(null, /*! ./pages/encuesta/encuesta.module */ "./src/app/pages/encuesta/encuesta.module.ts")).then(m => m.EncuestaModule),
        canActivate: [_shared_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
        data: { 'tituloModulo': 'Encuesta' }
    },
    {
        path: 'pagar-cuenta',
        loadChildren: () => Promise.all(/*! import() | pages-pagar-cuenta-pagar-cuenta-module */[__webpack_require__.e("default~pages-pagar-cuenta-pagar-cuenta-module~pages-pedido-pedido-module"), __webpack_require__.e("pages-pagar-cuenta-pagar-cuenta-module")]).then(__webpack_require__.bind(null, /*! ./pages/pagar-cuenta/pagar-cuenta.module */ "./src/app/pages/pagar-cuenta/pagar-cuenta.module.ts")).then(m => m.PagarCuentaModule),
        canActivate: [_shared_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
        data: { 'tituloModulo': 'Cuenta' }
    },
    {
        path: 'cliente-profile',
        loadChildren: () => __webpack_require__.e(/*! import() | pages-cliente-profile-cliente-profile-module */ "pages-cliente-profile-cliente-profile-module").then(__webpack_require__.bind(null, /*! ./pages/cliente-profile/cliente-profile.module */ "./src/app/pages/cliente-profile/cliente-profile.module.ts")).then(m => m.ClienteProfileModule),
        canActivate: [_shared_guards_cliente_profile_guards__WEBPACK_IMPORTED_MODULE_4__["ClienteProfileGuard"]],
        data: { 'tituloModulo': 'Cliente Profile' }
    },
    {
        path: 'zona-delivery',
        loadChildren: () => Promise.all(/*! import() | pages-zona-establecimientos-zona-establecimientos-module */[__webpack_require__.e("default~pages-encuesta-encuesta-module~pages-inicio-inicio-module~pages-pedido-pedido-module~pages-z~ebdeb88c"), __webpack_require__.e("common"), __webpack_require__.e("pages-zona-establecimientos-zona-establecimientos-module")]).then(__webpack_require__.bind(null, /*! ./pages/zona-establecimientos/zona-establecimientos.module */ "./src/app/pages/zona-establecimientos/zona-establecimientos.module.ts")).then(m => m.ZonaEstablecimientosModule),
        // canActivate: [ClienteProfileGuard],
        data: { 'tituloModulo': 'Cliente Zona Delivery' }
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
                useHash: true,
                scrollPositionRestoration: 'enabled',
                anchorScrolling: 'enabled',
                paramsInheritanceStrategy: 'always'
            })],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_services_auth0_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/services/auth0.service */ "./src/app/shared/services/auth0.service.ts");



let AppComponent = class AppComponent {
    // title = 'pwa-app-pedido';
    constructor(auth) {
        this.auth = auth;
    }
};
AppComponent.ctorParameters = () => [
    { type: _shared_services_auth0_service__WEBPACK_IMPORTED_MODULE_2__["Auth0Service"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_services_auth0_service__WEBPACK_IMPORTED_MODULE_2__["Auth0Service"]])
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/service-worker */ "./node_modules/@angular/service-worker/fesm2015/service-worker.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");










// import { DirectionsMapDirectiveDirective } from './shared/directivas/directions-map-directive.directive';
let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
            // ReactiveFormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
            _core_core_module__WEBPACK_IMPORTED_MODULE_7__["CoreModule"],
            _angular_service_worker__WEBPACK_IMPORTED_MODULE_8__["ServiceWorkerModule"].register('ngsw-worker.js', { enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].production })
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/core/core.module.ts":
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _shared_services_crud_http_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/services/crud-http.service */ "./src/app/shared/services/crud-http.service.ts");
/* harmony import */ var _layout_main_layout_main_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./layout-main/layout-main.component */ "./src/app/core/layout-main/layout-main.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./material/material.module */ "./src/app/core/material/material.module.ts");
/* harmony import */ var _tool_bar_tool_bar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./tool-bar/tool-bar.component */ "./src/app/core/tool-bar/tool-bar.component.ts");
/* harmony import */ var _progress_time_limit_progress_time_limit_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./progress-time-limit/progress-time-limit.component */ "./src/app/core/progress-time-limit/progress-time-limit.component.ts");
/* harmony import */ var _shared_services_http_config_interceptor_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../shared/services/http-config-interceptor.service */ "./src/app/shared/services/http-config-interceptor.service.ts");











let CoreModule = class CoreModule {
};
CoreModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _layout_main_layout_main_component__WEBPACK_IMPORTED_MODULE_5__["LayoutMainComponent"],
            _tool_bar_tool_bar_component__WEBPACK_IMPORTED_MODULE_8__["ToolBarComponent"],
            _progress_time_limit_progress_time_limit_component__WEBPACK_IMPORTED_MODULE_9__["ProgressTimeLimitComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _material_material_module__WEBPACK_IMPORTED_MODULE_7__["MaterialModule"]
        ],
        exports: [
            _material_material_module__WEBPACK_IMPORTED_MODULE_7__["MaterialModule"],
            _tool_bar_tool_bar_component__WEBPACK_IMPORTED_MODULE_8__["ToolBarComponent"],
            _progress_time_limit_progress_time_limit_component__WEBPACK_IMPORTED_MODULE_9__["ProgressTimeLimitComponent"]
        ],
        providers: [
            _shared_services_crud_http_service__WEBPACK_IMPORTED_MODULE_4__["CrudHttpService"],
            { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"], useClass: _shared_services_http_config_interceptor_service__WEBPACK_IMPORTED_MODULE_10__["HttpConfigInterceptorService"], multi: true }
        ]
    })
], CoreModule);



/***/ }),

/***/ "./src/app/core/layout-main/layout-main.component.css":
/*!************************************************************!*\
  !*** ./src/app/core/layout-main/layout-main.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvbGF5b3V0LW1haW4vbGF5b3V0LW1haW4uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/core/layout-main/layout-main.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/core/layout-main/layout-main.component.ts ***!
  \***********************************************************/
/*! exports provided: LayoutMainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutMainComponent", function() { return LayoutMainComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let LayoutMainComponent = class LayoutMainComponent {
    constructor() { }
    ngOnInit() {
    }
};
LayoutMainComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-layout-main',
        template: __webpack_require__(/*! raw-loader!./layout-main.component.html */ "./node_modules/raw-loader/index.js!./src/app/core/layout-main/layout-main.component.html"),
        styles: [__webpack_require__(/*! ./layout-main.component.css */ "./src/app/core/layout-main/layout-main.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], LayoutMainComponent);



/***/ }),

/***/ "./src/app/core/material/material.module.ts":
/*!**************************************************!*\
  !*** ./src/app/core/material/material.module.ts ***!
  \**************************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm2015/input.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm2015/tabs.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm2015/core.js");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/esm2015/progress-bar.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm2015/toolbar.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/esm2015/checkbox.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm2015/snack-bar.js");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/stepper */ "./node_modules/@angular/material/esm2015/stepper.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/esm2015/expansion.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm2015/card.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/esm2015/radio.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/esm2015/tooltip.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/esm2015/sidenav.js");



// material
















// import {MatSidenavModule} from '@angular/material/sidenav';
// import { MatTooltipModule } from '@angular/material/tooltip';
let MaterialModule = class MaterialModule {
};
MaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatRippleModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_5__["MatTabsModule"],
            _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_8__["MatProgressBarModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_9__["MatToolbarModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialogModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_11__["MatCheckboxModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_12__["MatSnackBarModule"],
            _angular_material_stepper__WEBPACK_IMPORTED_MODULE_13__["MatStepperModule"],
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_14__["MatExpansionModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_15__["MatCardModule"],
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_16__["MatRadioModule"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_17__["MatTooltipModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_18__["MatSidenavModule"]
            // MatTooltipModule
        ],
        exports: [
            _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatRippleModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_5__["MatTabsModule"],
            _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_8__["MatProgressBarModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_9__["MatToolbarModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialogModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_11__["MatCheckboxModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_12__["MatSnackBarModule"],
            _angular_material_stepper__WEBPACK_IMPORTED_MODULE_13__["MatStepperModule"],
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_14__["MatExpansionModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_15__["MatCardModule"],
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_16__["MatRadioModule"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_17__["MatTooltipModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_18__["MatSidenavModule"]
            // MatTooltipModule
        ]
    })
], MaterialModule);



/***/ }),

/***/ "./src/app/core/progress-time-limit/progress-time-limit.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/core/progress-time-limit/progress-time-limit.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvcHJvZ3Jlc3MtdGltZS1saW1pdC9wcm9ncmVzcy10aW1lLWxpbWl0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/core/progress-time-limit/progress-time-limit.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/core/progress-time-limit/progress-time-limit.component.ts ***!
  \***************************************************************************/
/*! exports provided: ProgressTimeLimitComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgressTimeLimitComponent", function() { return ProgressTimeLimitComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_shared_services_timer_limit_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/timer-limit.service */ "./src/app/shared/services/timer-limit.service.ts");



let ProgressTimeLimitComponent = class ProgressTimeLimitComponent {
    constructor(timerLimitService) {
        this.timerLimitService = timerLimitService;
    }
    ngOnInit() {
    }
};
ProgressTimeLimitComponent.ctorParameters = () => [
    { type: src_app_shared_services_timer_limit_service__WEBPACK_IMPORTED_MODULE_2__["TimerLimitService"] }
];
ProgressTimeLimitComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-progress-time-limit',
        template: __webpack_require__(/*! raw-loader!./progress-time-limit.component.html */ "./node_modules/raw-loader/index.js!./src/app/core/progress-time-limit/progress-time-limit.component.html"),
        styles: [__webpack_require__(/*! ./progress-time-limit.component.css */ "./src/app/core/progress-time-limit/progress-time-limit.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_services_timer_limit_service__WEBPACK_IMPORTED_MODULE_2__["TimerLimitService"]])
], ProgressTimeLimitComponent);



/***/ }),

/***/ "./src/app/core/tool-bar/tool-bar.component.css":
/*!******************************************************!*\
  !*** ./src/app/core/tool-bar/tool-bar.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-icon {\r\n    padding: 0 14px;\r\n  }\r\n  \r\n.example-spacer {\r\n    flex: 1 1 auto;\r\n  }\r\n  \r\n.example-ripple-container {\r\n    cursor: pointer;\r\n    text-align: center;\r\n  \r\n    width: 40px;\r\n    height: 40px;\r\n\r\n    line-height: 40px;\r\n    flex-shrink: 0;\r\n    line-height: 40px;\r\n    border-radius: 50%;\r\n    \r\n  \r\n    user-select: none;\r\n    -webkit-user-select: none;\r\n    -moz-user-select: none;\r\n    -ms-user-select: none;\r\n  \r\n    -webkit-user-drag: none;\r\n    -webkit-tap-highlight-color: transparent;\r\n  }\r\n  \r\n.text-busqueda {\r\n  border: none;\r\n  outline: none;\r\n}\r\n  \r\n.toolbar-busqueda {\r\n  background: white;\r\n}\r\n  \r\n.nom-comercio {\r\n  max-width: 70%;\r\n  white-space: nowrap;\r\n  text-overflow: ellipsis;\r\n  overflow: hidden;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS90b29sLWJhci90b29sLWJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtFQUNqQjs7QUFFRjtJQUNJLGNBQWM7RUFDaEI7O0FBRUE7SUFDRSxlQUFlO0lBQ2Ysa0JBQWtCOztJQUVsQixXQUFXO0lBQ1gsWUFBWTs7SUFFWixpQkFBaUI7SUFDakIsY0FBYztJQUNkLGlCQUFpQjtJQUNqQixrQkFBa0I7OztJQUdsQixpQkFBaUI7SUFDakIseUJBQXlCO0lBQ3pCLHNCQUFzQjtJQUN0QixxQkFBcUI7O0lBRXJCLHVCQUF1QjtJQUN2Qix3Q0FBd0M7RUFDMUM7O0FBRUY7RUFDRSxZQUFZO0VBQ1osYUFBYTtBQUNmOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsY0FBYztFQUNkLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsZ0JBQWdCO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvY29yZS90b29sLWJhci90b29sLWJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4YW1wbGUtaWNvbiB7XHJcbiAgICBwYWRkaW5nOiAwIDE0cHg7XHJcbiAgfVxyXG4gIFxyXG4uZXhhbXBsZS1zcGFjZXIge1xyXG4gICAgZmxleDogMSAxIGF1dG87XHJcbiAgfVxyXG5cclxuICAuZXhhbXBsZS1yaXBwbGUtY29udGFpbmVyIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBcclxuICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG5cclxuICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xyXG4gICAgZmxleC1zaHJpbms6IDA7XHJcbiAgICBsaW5lLWhlaWdodDogNDBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIFxyXG4gIFxyXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcclxuICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcclxuICBcclxuICAgIC13ZWJraXQtdXNlci1kcmFnOiBub25lO1xyXG4gICAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICB9XHJcblxyXG4udGV4dC1idXNxdWVkYSB7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuXHJcbi50b29sYmFyLWJ1c3F1ZWRhIHtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxufVxyXG5cclxuLm5vbS1jb21lcmNpbyB7XHJcbiAgbWF4LXdpZHRoOiA3MCU7XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/core/tool-bar/tool-bar.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/core/tool-bar/tool-bar.component.ts ***!
  \*****************************************************/
/*! exports provided: ToolBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolBarComponent", function() { return ToolBarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_shared_services_navigator_link_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/navigator-link.service */ "./src/app/shared/services/navigator-link.service.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var src_app_pages_pedido_resumen_pedido_dialog_reset_dialog_reset_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/pages/pedido/resumen-pedido/dialog-reset/dialog-reset.component */ "./src/app/pages/pedido/resumen-pedido/dialog-reset/dialog-reset.component.ts");
/* harmony import */ var src_app_shared_services_mipedido_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/mipedido.service */ "./src/app/shared/services/mipedido.service.ts");
/* harmony import */ var src_app_shared_services_listen_status_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/listen-status.service */ "./src/app/shared/services/listen-status.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_app_shared_services_info_token_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/services/info-token.service */ "./src/app/shared/services/info-token.service.ts");









let ToolBarComponent = class ToolBarComponent {
    // isBuqueda=
    constructor(miPedidoService, 
    // private socketService: SocketService,
    navigatorService, dialog, listenStatusService, renderer, infoTokenService) {
        this.miPedidoService = miPedidoService;
        this.navigatorService = navigatorService;
        this.dialog = dialog;
        this.listenStatusService = listenStatusService;
        this.renderer = renderer;
        this.infoTokenService = infoTokenService;
        this.isBusqueda = false;
        this.rippleColor = 'rgba(238,238,238,0.2)';
        this.rippleColorBusqueda = 'rgba(238,238,238,0.9)';
        this.rippleColorPlomo = 'rgba(158,158,158,0.5)';
        this.isClienteDelivery = false;
        this.nomSede = '';
    }
    ngOnInit() {
        this.listenStatusService.isBusqueda$.subscribe(res => {
            this.isBusqueda = res;
            // console.log('liste isBusqueda', res);
        });
        this.listenStatusService.hayDatosSede$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["filter"])(res => res === true)).subscribe(res => {
            this.getNomSede();
        });
        this.isClienteDelivery = this.infoTokenService.isDelivery();
    }
    getNomSede() {
        this.nomSede = this.miPedidoService.objDatosSede.datossede[0].sedenombre;
    }
    activaBusqueda() {
        this.navigatorService.setPageActive('carta');
        this.navigatorService.addLink('carta-i-');
        this.listenStatusService.setIsBusqueda();
        setTimeout(() => {
            this.renderer.selectRootElement(this.txtBuscar.nativeElement).focus();
            this.txtBuscar.nativeElement.value = this.getStorageBusqueda();
            // this.renderer.selectRootElement(this.txtBuscar.nativeElement).value('aaaaaa');
        }, 300);
    }
    buscarCharAhora(charFind) {
        // console.log(charFind);
        this.listenStatusService.setCharBusqueda(charFind);
        this.setStorageBusqueda(charFind);
    }
    setStorageBusqueda(charFind) {
        window.localStorage.setItem('sys::find', charFind);
    }
    getStorageBusqueda() {
        return window.localStorage.getItem('sys::find') || '';
    }
    clearTextBuqueda() {
        this.renderer.selectRootElement(this.txtBuscar.nativeElement).focus();
        this.txtBuscar.nativeElement.value = '';
        window.localStorage.setItem('sys::find', '');
    }
    cerrarSession() {
        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogConfig"]();
        dialogConfig.data = { idMjs: 1 };
        const dialogReset = this.dialog.open(src_app_pages_pedido_resumen_pedido_dialog_reset_dialog_reset_component__WEBPACK_IMPORTED_MODULE_4__["DialogResetComponent"], dialogConfig);
        dialogReset.afterClosed().subscribe(result => {
            if (result) {
                this.miPedidoService.resetAllNewPedido();
                this.miPedidoService.cerrarSession();
                // this.socketService.closeConnection();
                // this.navigatorService.cerrarSession();
                this.infoTokenService.cerrarSession();
            }
        });
    }
    goBackOutEstablecimiento() {
        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogConfig"]();
        dialogConfig.data = { idMjs: 2 };
        const dialogReset = this.dialog.open(src_app_pages_pedido_resumen_pedido_dialog_reset_dialog_reset_component__WEBPACK_IMPORTED_MODULE_4__["DialogResetComponent"], dialogConfig);
        dialogReset.afterClosed().subscribe(result => {
            if (result) {
                this.miPedidoService.resetAllNewPedido();
                this.miPedidoService.cerrarSession();
                // this.socketService.closeConnection();
                // this.navigatorService.cerrarSession();
                this.infoTokenService.cerrarSession();
            }
        });
    }
};
ToolBarComponent.ctorParameters = () => [
    { type: src_app_shared_services_mipedido_service__WEBPACK_IMPORTED_MODULE_5__["MipedidoService"] },
    { type: src_app_shared_services_navigator_link_service__WEBPACK_IMPORTED_MODULE_2__["NavigatorLinkService"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] },
    { type: src_app_shared_services_listen_status_service__WEBPACK_IMPORTED_MODULE_6__["ListenStatusService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] },
    { type: src_app_shared_services_info_token_service__WEBPACK_IMPORTED_MODULE_8__["InfoTockenService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('txtBuscar', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], ToolBarComponent.prototype, "txtBuscar", void 0);
ToolBarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tool-bar',
        template: __webpack_require__(/*! raw-loader!./tool-bar.component.html */ "./node_modules/raw-loader/index.js!./src/app/core/tool-bar/tool-bar.component.html"),
        styles: [__webpack_require__(/*! ./tool-bar.component.css */ "./src/app/core/tool-bar/tool-bar.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_services_mipedido_service__WEBPACK_IMPORTED_MODULE_5__["MipedidoService"],
        src_app_shared_services_navigator_link_service__WEBPACK_IMPORTED_MODULE_2__["NavigatorLinkService"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"],
        src_app_shared_services_listen_status_service__WEBPACK_IMPORTED_MODULE_6__["ListenStatusService"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"],
        src_app_shared_services_info_token_service__WEBPACK_IMPORTED_MODULE_8__["InfoTockenService"]])
], ToolBarComponent);



/***/ }),

/***/ "./src/app/modelos/categoria.model.ts":
/*!********************************************!*\
  !*** ./src/app/modelos/categoria.model.ts ***!
  \********************************************/
/*! exports provided: CategoriaModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriaModel", function() { return CategoriaModel; });
class CategoriaModel {
}


/***/ }),

/***/ "./src/app/modelos/delivery.establecimiento.ts":
/*!*****************************************************!*\
  !*** ./src/app/modelos/delivery.establecimiento.ts ***!
  \*****************************************************/
/*! exports provided: DeliveryEstablecimiento */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeliveryEstablecimiento", function() { return DeliveryEstablecimiento; });
class DeliveryEstablecimiento {
}


/***/ }),

/***/ "./src/app/modelos/estado.pedido.model.ts":
/*!************************************************!*\
  !*** ./src/app/modelos/estado.pedido.model.ts ***!
  \************************************************/
/*! exports provided: EstadoPedidoModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EstadoPedidoModel", function() { return EstadoPedidoModel; });
class EstadoPedidoModel {
}


/***/ }),

/***/ "./src/app/modelos/from.valid.rpt.model.ts":
/*!*************************************************!*\
  !*** ./src/app/modelos/from.valid.rpt.model.ts ***!
  \*************************************************/
/*! exports provided: FormValidRptModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormValidRptModel", function() { return FormValidRptModel; });
class FormValidRptModel {
    constructor() {
        this.isTpcLocal = false;
        this.isTpcSoloLLevar = false;
        this.isTpcSoloDelivery = false;
        this.isTpcSoloOther = false;
        this.isRequiereMesa = false;
    }
}


/***/ }),

/***/ "./src/app/modelos/item.model.ts":
/*!***************************************!*\
  !*** ./src/app/modelos/item.model.ts ***!
  \***************************************/
/*! exports provided: ItemModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemModel", function() { return ItemModel; });
class ItemModel {
    constructor() {
        this.precio_total = 0; // preciounitario * cantidad
        this.cantidad_seleccionada_x_tpc = 0; // cantidad seleccionada por tipo cosnumo
        this.cantidad_descontado = 0; // cantidad que se decuenta por reglas de carta
        this.itemtiposconsumo = []; // para la vista -> listItemsPedido
        this.subitems_selected = []; // subitems seleccionados
        this.subitems_view = []; // subitems vista y guardar pedido detalle
    }
}


/***/ }),

/***/ "./src/app/modelos/item.tipoconsumo.model.ts":
/*!***************************************************!*\
  !*** ./src/app/modelos/item.tipoconsumo.model.ts ***!
  \***************************************************/
/*! exports provided: ItemTipoConsumoModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemTipoConsumoModel", function() { return ItemTipoConsumoModel; });
class ItemTipoConsumoModel {
}


/***/ }),

/***/ "./src/app/modelos/metodo.pago.model.ts":
/*!**********************************************!*\
  !*** ./src/app/modelos/metodo.pago.model.ts ***!
  \**********************************************/
/*! exports provided: MetodoPagoModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MetodoPagoModel", function() { return MetodoPagoModel; });
class MetodoPagoModel {
}


/***/ }),

/***/ "./src/app/modelos/pedido.model.ts":
/*!*****************************************!*\
  !*** ./src/app/modelos/pedido.model.ts ***!
  \*****************************************/
/*! exports provided: PedidoModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PedidoModel", function() { return PedidoModel; });
class PedidoModel {
    constructor() {
        this.tipoconsumo = [];
    }
}


/***/ }),

/***/ "./src/app/modelos/propina.model.ts":
/*!******************************************!*\
  !*** ./src/app/modelos/propina.model.ts ***!
  \******************************************/
/*! exports provided: PropinaModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropinaModel", function() { return PropinaModel; });
class PropinaModel {
}


/***/ }),

/***/ "./src/app/modelos/seccion.model.ts":
/*!******************************************!*\
  !*** ./src/app/modelos/seccion.model.ts ***!
  \******************************************/
/*! exports provided: SeccionModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeccionModel", function() { return SeccionModel; });
class SeccionModel {
    constructor() {
        this.items = [];
    }
}


/***/ }),

/***/ "./src/app/modelos/socket.client.model.ts":
/*!************************************************!*\
  !*** ./src/app/modelos/socket.client.model.ts ***!
  \************************************************/
/*! exports provided: SocketClientModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocketClientModel", function() { return SocketClientModel; });
class SocketClientModel {
}


/***/ }),

/***/ "./src/app/modelos/subitems.view.model.ts":
/*!************************************************!*\
  !*** ./src/app/modelos/subitems.view.model.ts ***!
  \************************************************/
/*! exports provided: SubItemsView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubItemsView", function() { return SubItemsView; });
class SubItemsView {
}


/***/ }),

/***/ "./src/app/modelos/tipo.comprobante.model.ts":
/*!***************************************************!*\
  !*** ./src/app/modelos/tipo.comprobante.model.ts ***!
  \***************************************************/
/*! exports provided: TipoComprobanteModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TipoComprobanteModel", function() { return TipoComprobanteModel; });
class TipoComprobanteModel {
}


/***/ }),

/***/ "./src/app/modelos/tipoconsumo.model.ts":
/*!**********************************************!*\
  !*** ./src/app/modelos/tipoconsumo.model.ts ***!
  \**********************************************/
/*! exports provided: TipoConsumoModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TipoConsumoModel", function() { return TipoConsumoModel; });
class TipoConsumoModel {
    constructor() {
        this.secciones = [];
    }
}


/***/ }),

/***/ "./src/app/modelos/usuario.token.model.ts":
/*!************************************************!*\
  !*** ./src/app/modelos/usuario.token.model.ts ***!
  \************************************************/
/*! exports provided: UsuarioTokenModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsuarioTokenModel", function() { return UsuarioTokenModel; });
class UsuarioTokenModel {
}


/***/ }),

/***/ "./src/app/pages/pedido/resumen-pedido/dialog-reset/dialog-reset.component.css":
/*!*************************************************************************************!*\
  !*** ./src/app/pages/pedido/resumen-pedido/dialog-reset/dialog-reset.component.css ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3BlZGlkby9yZXN1bWVuLXBlZGlkby9kaWFsb2ctcmVzZXQvZGlhbG9nLXJlc2V0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/pedido/resumen-pedido/dialog-reset/dialog-reset.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/pages/pedido/resumen-pedido/dialog-reset/dialog-reset.component.ts ***!
  \************************************************************************************/
/*! exports provided: DialogResetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogResetComponent", function() { return DialogResetComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");



let DialogResetComponent = class DialogResetComponent {
    constructor(data) {
        this.msj = '';
        // console.log('data dialog', data);
        const idMsj = data ? data.idMjs : 0;
        switch (idMsj) {
            case 0:
                this.msj = 'Confirma que desea de borrar el pedido actual?';
                break;
            case 1:
                this.msj = 'Confirma que desea salir?';
                break;
            case 2:
                this.msj = 'Solo puede hacer un pedido por establecimiento a la vez. Confirma que desea salir?';
                break;
        }
    }
    ngOnInit() {
    }
};
DialogResetComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] }
];
DialogResetComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dialog-reset',
        template: __webpack_require__(/*! raw-loader!./dialog-reset.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/pedido/resumen-pedido/dialog-reset/dialog-reset.component.html"),
        styles: [__webpack_require__(/*! ./dialog-reset.component.css */ "./src/app/pages/pedido/resumen-pedido/dialog-reset/dialog-reset.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object])
], DialogResetComponent);



/***/ }),

/***/ "./src/app/shared/config/config.const.ts":
/*!***********************************************!*\
  !*** ./src/app/shared/config/config.const.ts ***!
  \***********************************************/
/*! exports provided: URL_SERVER, URL_SERVER_SOCKET, URL_IMG_CARTA, URL_IMG_COMERCIO, URL_CONSULTA_RUC_DNI, TOKEN_CONSULTA, TOKEN_SMS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "URL_SERVER", function() { return URL_SERVER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "URL_SERVER_SOCKET", function() { return URL_SERVER_SOCKET; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "URL_IMG_CARTA", function() { return URL_IMG_CARTA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "URL_IMG_COMERCIO", function() { return URL_IMG_COMERCIO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "URL_CONSULTA_RUC_DNI", function() { return URL_CONSULTA_RUC_DNI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TOKEN_CONSULTA", function() { return TOKEN_CONSULTA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TOKEN_SMS", function() { return TOKEN_SMS; });
// // pruebas
// export const URL_SERVER = 'http://localhost:5819/v3/'; // desarrollo
// export const URL_SERVER_SOCKET = 'http://localhost:5819'; // desarrollo
// export const URL_IMG_CARTA = 'http://192.168.1.64/restobar/file/'; // imagenes de la carta
// export const URL_IMG_COMERCIO = 'http://192.168.1.64/restobar/print/logo/';
// export const URL_CONSULTA_RUC_DNI = 'http://apifacturalo_a.test:8080/api/services/'; // consulta dni o ruc
// produccion
const URL_SERVER = 'https://app.restobar.papaya.com.pe/api.pwa/v3'; // produccion
const URL_SERVER_SOCKET = 'https://app.restobar.papaya.com.pe/'; // produccion
const URL_IMG_CARTA = 'https://restobar.papaya.com.pe/file/';
const URL_IMG_COMERCIO = 'https://restobar.papaya.com.pe/print/logo/';
const URL_CONSULTA_RUC_DNI = 'https://apifac.papaya.com.pe/api/services/'; // consulta dni o ruc
const TOKEN_CONSULTA = 'tLKbDncvyKIPcgdVAGqt7rmy7W9mU9cnbawpZdc7JJv7l6h9cU'; // token de prueba
const TOKEN_SMS = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoicGFwYXlhLXNtcyIsImlhdCI6MTAwMDIwMDAzMDAwfQ.bKnTHEEGW_SustFir-40ZAYcHtfIo7Gyjq7c2onsAj0'; // token de prueba
// export const URL_SERVER_SOCKET = '/'; // produccion


/***/ }),

/***/ "./src/app/shared/guards/auth.guard.ts":
/*!*********************************************!*\
  !*** ./src/app/shared/guards/auth.guard.ts ***!
  \*********************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/shared/services/auth.service.ts");
/* harmony import */ var _services_verify_auth_client_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/verify-auth-client.service */ "./src/app/shared/services/verify-auth-client.service.ts");
/* harmony import */ var _services_info_token_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/info-token.service */ "./src/app/shared/services/info-token.service.ts");





// import { InfoTockenService } from '../services/info-token.service';
let AuthGuard = class AuthGuard {
    constructor(authService, verifyClientService, infoTokenService) {
        this.authService = authService;
        this.verifyClientService = verifyClientService;
        this.infoTokenService = infoTokenService;
    }
    // canActivate(
    //   next: ActivatedRouteSnapshot,
    //   state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    //   return true;
    // }
    canActivate() {
        const us = this.authService.getLoggedStatus();
        const infoToken = this.infoTokenService.getInfoUs();
        const res = infoToken.isCliente ? infoToken.isDelivery ? true : this.verifyClientService.getIsQrSuccess() && us : us;
        // console.log('canActivate', us);
        // if ( us )
        return res;
    }
};
AuthGuard.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _services_verify_auth_client_service__WEBPACK_IMPORTED_MODULE_3__["VerifyAuthClientService"] },
    { type: _services_info_token_service__WEBPACK_IMPORTED_MODULE_4__["InfoTockenService"] }
];
AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
        _services_verify_auth_client_service__WEBPACK_IMPORTED_MODULE_3__["VerifyAuthClientService"],
        _services_info_token_service__WEBPACK_IMPORTED_MODULE_4__["InfoTockenService"]])
], AuthGuard);



/***/ }),

/***/ "./src/app/shared/guards/cliente-profile-guards.ts":
/*!*********************************************************!*\
  !*** ./src/app/shared/guards/cliente-profile-guards.ts ***!
  \*********************************************************/
/*! exports provided: ClienteProfileGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClienteProfileGuard", function() { return ClienteProfileGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_verify_auth_client_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/verify-auth-client.service */ "./src/app/shared/services/verify-auth-client.service.ts");



let ClienteProfileGuard = class ClienteProfileGuard {
    constructor(verifyClientService) {
        this.verifyClientService = verifyClientService;
    }
    // canActivate(
    //   next: ActivatedRouteSnapshot,
    //   state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    //   return true;
    // }
    canActivate() {
        // console.log('canActivate', this.verifyClientService.getIsQrSuccess());
        return this.verifyClientService.isLogin() || this.verifyClientService.getIsLoginByDNI();
    }
};
ClienteProfileGuard.ctorParameters = () => [
    { type: _services_verify_auth_client_service__WEBPACK_IMPORTED_MODULE_2__["VerifyAuthClientService"] }
];
ClienteProfileGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_verify_auth_client_service__WEBPACK_IMPORTED_MODULE_2__["VerifyAuthClientService"]])
], ClienteProfileGuard);



/***/ }),

/***/ "./src/app/shared/services/auth.service.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/services/auth.service.ts ***!
  \*************************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _crud_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./crud-http.service */ "./src/app/shared/services/crud-http.service.ts");



let AuthService = class AuthService {
    constructor(crudService) {
        this.crudService = crudService;
        this.isLoggedStatus = false;
    }
    setLoggedStatus(value) {
        this.isLoggedStatus = value;
    }
    // verfica la existencia del token
    getLoggedStatus() {
        const token = localStorage.getItem('::token');
        const rpt = !!token ? true : false;
        this.isLoggedStatus = rpt;
        return rpt;
    }
    getUserLogged(usuario) {
        return this.crudService.loginUsuarioAutorizado(usuario);
    }
    setLocalToken(token) {
        localStorage.setItem('::token', token);
        // guardo tambien la hora que esta iniciando session
        const ms_tieme_init_session = new Date().getTime();
        localStorage.setItem('sys::numtis', ms_tieme_init_session.toString());
    }
    getLocalToken() {
        return localStorage.getItem('::token');
    }
    setLocalUsuario(usuario) {
        localStorage.setItem('::us', JSON.stringify(usuario));
    }
    verifyToken() {
        return this.crudService.verificarToken();
    }
    loggedOutUser() {
        localStorage.removeItem('::token');
        localStorage.removeItem('::us');
        // localStorage.clear();
        this.setLoggedStatus(false);
    }
};
AuthService.ctorParameters = () => [
    { type: _crud_http_service__WEBPACK_IMPORTED_MODULE_2__["CrudHttpService"] }
];
AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_crud_http_service__WEBPACK_IMPORTED_MODULE_2__["CrudHttpService"]])
], AuthService);



/***/ }),

/***/ "./src/app/shared/services/auth0.service.ts":
/*!**************************************************!*\
  !*** ./src/app/shared/services/auth0.service.ts ***!
  \**************************************************/
/*! exports provided: Auth0Service */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Auth0Service", function() { return Auth0Service; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _auth0_auth0_spa_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @auth0/auth0-spa-js */ "./node_modules/@auth0/auth0-spa-js/dist/auth0-spa-js.production.js");
/* harmony import */ var _auth0_auth0_spa_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_auth0_auth0_spa_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");






let Auth0Service = class Auth0Service {
    constructor(router) {
        this.router = router;
        // Create an observable of Auth0 instance of client
        this.auth0Client$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(_auth0_auth0_spa_js__WEBPACK_IMPORTED_MODULE_2___default()({
            domain: 'dev-m48s1pe2.auth0.com',
            client_id: 'kSs64dcx34Fo7HpDLYkE3gQH0v2MtcdR',
            redirect_uri: `${window.location.origin}/#/callback-auth`
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["shareReplay"])(1), // Every subscription receives the same shared value
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(err => Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(err)));
        // Define observables for SDK methods that return promises by default
        // For each Auth0 SDK method, first ensure the client instance is ready
        // concatMap: Using the client instance, call SDK method; SDK returns a promise
        // from: Convert that resulting promise into an observable
        this.isAuthenticated$ = this.auth0Client$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["concatMap"])((client) => Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(client.isAuthenticated())), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(res => this.loggedIn = res));
        this.handleRedirectCallback$ = this.auth0Client$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["concatMap"])((client) => Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(client.handleRedirectCallback())));
        // Create subject and public observable of user profile data
        this.userProfileSubject$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](null);
        this.userProfile$ = this.userProfileSubject$.asObservable();
        // Create a local property for login status
        this.loggedIn = null;
        // On initial load, check authentication state with authorization server
        // Set up local auth streams if user is already authenticated
        this.localAuthSetup();
        // Handle redirect from Auth0 login
        this.handleAuthCallback();
    }
    // When calling, options can be passed if desired
    // https://auth0.github.io/auth0-spa-js/classes/auth0client.html#getuser
    getUser$(options) {
        return this.auth0Client$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["concatMap"])((client) => Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(client.getUser(options))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(user => this.userProfileSubject$.next(user)));
    }
    localAuthSetup() {
        // This should only be called on app initialization
        // Set up local authentication streams
        const checkAuth$ = this.isAuthenticated$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["concatMap"])((loggedIn) => {
            if (loggedIn) {
                // If authenticated, get user and set in app
                // NOTE: you could pass options here if needed
                return this.getUser$();
            }
            // If not authenticated, return stream that emits 'false'
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(loggedIn);
        }));
        checkAuth$.subscribe();
    }
    login(redirectPath = '/', proveedor) {
        // A desired redirect path can be passed to login method
        // (e.g., from a route guard)
        // Ensure Auth0 client instance exists
        this.auth0Client$.subscribe((client) => {
            // Call method to log in
            client.loginWithRedirect({
                connection: proveedor,
                redirect_uri: `${window.location.origin}/#/callback-auth`,
                appState: { target: redirectPath }
            });
        });
    }
    handleAuthCallback() {
        // Call when app reloads after user logs in with Auth0
        const params = window.location.search;
        if (params.includes('code=') && params.includes('state=')) {
            let targetRoute; // Path to redirect to after login processsed
            const authComplete$ = this.handleRedirectCallback$.pipe(
            // Have client, now call method to handle auth callback redirect
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(cbRes => {
                // Get and set target redirect route from callback results
                targetRoute = cbRes.appState && cbRes.appState.target ? cbRes.appState.target : '/';
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["concatMap"])(() => {
                // Redirect callback complete; get user and login status
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["combineLatest"])([
                    this.getUser$(),
                    this.isAuthenticated$
                ]);
            }));
            // Subscribe to authentication completion observable
            // Response will be an array of user and login status
            authComplete$.subscribe(([user, loggedIn]) => {
                // Redirect to target route after callback processing
                this.router.navigate([targetRoute]);
            });
        }
    }
    logout() {
        // Ensure Auth0 client instance exists
        this.auth0Client$.subscribe((client) => {
            // Call method to log out
            client.logout({
                client_id: 'kSs64dcx34Fo7HpDLYkE3gQH0v2MtcdR',
                returnTo: `${window.location.origin}`
            });
        });
    }
};
Auth0Service.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
Auth0Service = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
], Auth0Service);



/***/ }),

/***/ "./src/app/shared/services/crud-http.service.ts":
/*!******************************************************!*\
  !*** ./src/app/shared/services/crud-http.service.ts ***!
  \******************************************************/
/*! exports provided: CrudHttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrudHttpService", function() { return CrudHttpService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _info_token_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./info-token.service */ "./src/app/shared/services/info-token.service.ts");
/* harmony import */ var _config_config_const__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../config/config.const */ "./src/app/shared/config/config.const.ts");





let CrudHttpService = class CrudHttpService {
    constructor(httpClient, infoTockenService) {
        this.httpClient = httpClient;
        this.infoTockenService = infoTockenService;
    }
    // conOrg, conSede FILTRAN SI NO SE ESPECIFICA POR ORG Y SEDE
    getAll(controller, evento, conOrg = true, conSede = true, token = true) {
        const url = this.setUrlFiltros(controller, evento, conOrg, conSede);
        const header = token ? this.getHeaderHttpClientForm() : null;
        return this.httpClient.get(url, { headers: header });
    }
    getTimeNow() {
        const url = this.setUrlFiltros('estadistica', 'getFechaNow', false, false);
        const header = null;
        return this.httpClient.get(url, { headers: header });
    }
    // numeropagina: numero pagina a mostrar
    // rows: cantidad de filas o registros a mostrar
    // filter: filtros de busqueda para la paginacion // se adjunta a org y sede
    // orden: nombre del campo por el cual se ordenara
    // ordendireccion: default ASC
    paginacion(controller, evento, pagenumber, rows, filter, orden, ordendireccion = null, conOrg = true, conSede = true) {
        const url = this.setUrlFiltros(controller, evento, conOrg, conSede, filter);
        // console.log('url', url);
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]({
            fromObject: {
                pagenumber: pagenumber.toString(),
                rows: rows.toString(),
                orden: orden,
                ordendireccion: ordendireccion || ''
            }
        });
        return this.httpClient.get(url, { params: params });
    }
    // enviar idorg o idsede o idusuario vacios, el back end los llenara
    create(datos, controller, evento = 'create') {
        const url = this.setUrl(controller, evento);
        const header = this.getHeaderHttpClientForm();
        return this.httpClient.post(url, datos, { headers: header });
    }
    // enviar idorg o idsede o idusuario vacios, el back end los llenara
    update(datos, id, controller, evento = 'update') {
        const url = this.setUrl(controller, evento) + '/' + id.toString();
        const header = this.getHeaderHttpClientForm();
        return this.httpClient.put(url, datos, { headers: header });
    }
    // enviar idorg o idsede o idusuario vacios, el back end los llenara
    postFree(datos, controller, evento = 'update', conToken = true) {
        const url = this.setUrl(controller, evento);
        const header = conToken ? this.getHeaderHttpClientForm() : this.getHeaderHttpClientFormNoToken();
        return this.httpClient.post(url, datos, { headers: header });
    }
    // enviar mensaje SMS de seguridad
    postSMS(datos, controller, evento, conTokenSMS = true) {
        const url = this.setUrl(controller, evento);
        const header = conTokenSMS ? this.getHeaderHttpClientFormSMS() : this.getHeaderHttpClientFormNoToken();
        return this.httpClient.post(url, datos, { headers: header });
    }
    getFree(url) {
        return this.httpClient.get(url);
    }
    // consulta ruc o dni
    getConsultaRucDni(controller, number) {
        const url = `${_config_config_const__WEBPACK_IMPORTED_MODULE_4__["URL_CONSULTA_RUC_DNI"]}${controller}/${number}`;
        const header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
            .set('Content-Type', 'application/json')
            .set('Authorization', `Bearer ${_config_config_const__WEBPACK_IMPORTED_MODULE_4__["TOKEN_CONSULTA"]}`);
        return this.httpClient.get(url, { headers: header });
    }
    getFilterBy(controller, evento, filter, conOrg = true, conSede = true) {
        const url = this.setUrlFiltros(controller, evento, conOrg, conSede, filter);
        return this.httpClient.get(url);
    }
    getById(id, controller, evento) {
        const url = this.setUrlFiltros(controller, evento, false, false, id);
        return this.httpClient.get(url);
    }
    // login manda los datos en json
    loginUsuarioAutorizado(datos) {
        const url = this.setUrl('login-usuario-autorizado', '');
        const header = this.getHeaderHttpClientFormNoToken();
        return this.httpClient.post(url, datos, { headers: header });
    }
    verificarToken() {
        const url = this.setUrl('verificarToken', '');
        const header = this.getHeaderHttpClientForm();
        return this.httpClient.post(url, { headers: header });
    }
    refreshToken() {
        const _jwt = this.infoTockenService.getInfoUs();
        const _data = {
            nomusuario: _jwt.usuario,
            pass: atob(_jwt.pass)
        };
        const url = this.setUrl('login-usuario-autorizado', '');
        const header = this.getHeaderHttpClientFormNoToken();
        return this.httpClient.post(url, _data, { headers: header });
    }
    setUrl(controller, evento) {
        const url = `${_config_config_const__WEBPACK_IMPORTED_MODULE_4__["URL_SERVER"]}/${controller}/${evento}`;
        return url;
    }
    setUrlFiltros(controller, evento, conOrg, conSede, filter = '') {
        const getSede = conSede ? this.setInfoSedeToken() : '';
        const getOrg = conOrg ? this.setInfoOrgToken() : '';
        const getOperador = (conOrg && conSede) ? '~y~' : '';
        const filterOrgSede = `${getSede + getOperador + getOrg}`;
        let getFilter = filterOrgSede === '' ? filter : filter === '' ? '' : `~y~${filter}`;
        getFilter = '/' + filterOrgSede + getFilter;
        const url = `${_config_config_const__WEBPACK_IMPORTED_MODULE_4__["URL_SERVER"]}/${controller}/${evento}${getFilter}`;
        return url;
    }
    setInfoSedeToken() {
        return 'idsede:eq:' + this.infoTockenService.getInfoSedeToken();
    }
    setInfoOrgToken() {
        return 'idorg:eq:' + this.infoTockenService.getInfoSedeToken();
    }
    getHeaderHttpClientForm() {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
            .set('Content-Type', 'application/json')
            .set('Authorization', this.infoTockenService.getToken());
        return headers;
    }
    getHeaderHttpClientFormSMS() {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
            .set('Content-Type', 'application/json')
            .set('Authorization', _config_config_const__WEBPACK_IMPORTED_MODULE_4__["TOKEN_SMS"]);
        return headers;
    }
    getHeaderHttpClientFormNoToken() {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
            .set('Content-Type', 'application/json');
        return headers;
    }
};
CrudHttpService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _info_token_service__WEBPACK_IMPORTED_MODULE_3__["InfoTockenService"] }
];
CrudHttpService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
        _info_token_service__WEBPACK_IMPORTED_MODULE_3__["InfoTockenService"]])
], CrudHttpService);



/***/ }),

/***/ "./src/app/shared/services/establecimiento.service.ts":
/*!************************************************************!*\
  !*** ./src/app/shared/services/establecimiento.service.ts ***!
  \************************************************************/
/*! exports provided: EstablecimientoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EstablecimientoService", function() { return EstablecimientoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_modelos_delivery_establecimiento__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/modelos/delivery.establecimiento */ "./src/app/modelos/delivery.establecimiento.ts");
/* harmony import */ var _crud_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./crud-http.service */ "./src/app/shared/services/crud-http.service.ts");




let EstablecimientoService = class EstablecimientoService {
    constructor(crudService) {
        this.crudService = crudService;
        this.keyStorage = 'sys::ed';
    }
    set(_establecimiento) {
        localStorage.setItem(this.keyStorage, btoa(JSON.stringify(_establecimiento)));
    }
    get() {
        let _establecimiento = new src_app_modelos_delivery_establecimiento__WEBPACK_IMPORTED_MODULE_2__["DeliveryEstablecimiento"];
        const _isExist = localStorage.getItem(this.keyStorage);
        _establecimiento = _isExist ? JSON.parse(atob(_isExist)) : _establecimiento;
        return _establecimiento;
    }
    setRulesSubtotales(val) {
        this.establecimiento = this.get();
        this.establecimiento.rulesSubTotales = val;
        this.set(this.establecimiento);
    }
    // al iniciar el usuario
    loadEstablecimientoById(id) {
        const _dataSend = {
            idsede: id
        };
        this.crudService.postFree(_dataSend, 'delivery', 'get-establecimientos')
            .subscribe(res => {
            this.establecimiento = res.data[0];
            this.set(this.establecimiento);
            // console.log(res);
        });
    }
};
EstablecimientoService.ctorParameters = () => [
    { type: _crud_http_service__WEBPACK_IMPORTED_MODULE_3__["CrudHttpService"] }
];
EstablecimientoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_crud_http_service__WEBPACK_IMPORTED_MODULE_3__["CrudHttpService"]])
], EstablecimientoService);



/***/ }),

/***/ "./src/app/shared/services/http-config-interceptor.service.ts":
/*!********************************************************************!*\
  !*** ./src/app/shared/services/http-config-interceptor.service.ts ***!
  \********************************************************************/
/*! exports provided: HttpConfigInterceptorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpConfigInterceptorService", function() { return HttpConfigInterceptorService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _crud_http_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./crud-http.service */ "./src/app/shared/services/crud-http.service.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth.service */ "./src/app/shared/services/auth.service.ts");






let HttpConfigInterceptorService = class HttpConfigInterceptorService {
    constructor(authService, crudService) {
        this.authService = authService;
        this.crudService = crudService;
    }
    intercept(request, next) {
        return next.handle(request)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])((err, caught) => {
            if (err instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpErrorResponse"] && err.status === 401) {
                // si es error 401 de autentificacion es decir token caducadado
                // lo refresquea
                this.crudService.refreshToken().subscribe(res => {
                    this.authService.setLocalToken(res.token);
                    this.authService.setLoggedStatus(true);
                });
            }
            throw err;
        }));
    }
};
HttpConfigInterceptorService.ctorParameters = () => [
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
    { type: _crud_http_service__WEBPACK_IMPORTED_MODULE_4__["CrudHttpService"] }
];
HttpConfigInterceptorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"],
        _crud_http_service__WEBPACK_IMPORTED_MODULE_4__["CrudHttpService"]])
], HttpConfigInterceptorService);



/***/ }),

/***/ "./src/app/shared/services/info-token.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/shared/services/info-token.service.ts ***!
  \*******************************************************/
/*! exports provided: InfoTockenService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoTockenService", function() { return InfoTockenService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_modelos_usuario_token_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/modelos/usuario.token.model */ "./src/app/modelos/usuario.token.model.ts");
/* harmony import */ var src_app_modelos_metodo_pago_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/modelos/metodo.pago.model */ "./src/app/modelos/metodo.pago.model.ts");
/* harmony import */ var src_app_modelos_tipo_comprobante_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/modelos/tipo.comprobante.model */ "./src/app/modelos/tipo.comprobante.model.ts");
/* harmony import */ var src_app_modelos_propina_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/modelos/propina.model */ "./src/app/modelos/propina.model.ts");






let InfoTockenService = class InfoTockenService {
    constructor(
    // private miPedidoService: MipedidoService,
    ) {
        this.converToJSON();
    }
    getInfoUs() {
        this.getLocalIpCliente();
        return this.infoUsToken;
    }
    saveToken(token) {
        localStorage.setItem('::token', token);
        // guardo tambien la hora que esta iniciando session
        const ms_tieme_init_session = new Date().getTime();
        localStorage.setItem('sys::numtis', ms_tieme_init_session.toString());
    }
    getInfoSedeToken() {
        // const token = jwt.decode(this.getToken());
        return this.infoUsToken.idsede.toString();
        // return '1';
    }
    getInfoOrgToken() {
        return this.infoUsToken.idorg.toString();
    }
    getInfoNomSede() {
        return localStorage.getItem('sys::s');
    }
    isCliente() {
        return this.infoUsToken.isCliente;
    }
    isSoloLlevar() {
        return this.infoUsToken.isSoloLLevar;
    }
    isDelivery() {
        return this.infoUsToken.isDelivery;
    }
    getLocalIpCliente() {
        this.infoUsToken.ipCliente = localStorage.getItem('sys::it') || '';
        return this.infoUsToken.ipCliente;
    }
    setLocalIpCliente(val) {
        localStorage.setItem('sys::it', val);
    }
    setIsPagoSuccess(val) {
        this.infoUsToken.isPagoSuccess = val;
        this.set();
    }
    setSocketId(val) {
        // this.infoUsToken.socketId = this.infoUsToken.socketId ? this.infoUsToken.socketId : val;
        this.infoUsToken.socketId = val;
        this.set();
    }
    // para el confirmar pago si es clienteDelivery
    setOrderDelivery(_order, _importes) {
        this.infoUsToken.orderDelivery = btoa(_order);
        this.infoUsToken.importeDelivery = btoa(_importes);
        // const _token = `eyCJ9.${btoa(JSON.stringify(this.infoUsToken))}`;
        // localStorage.setItem('::token', _token);
        this.set();
    }
    setTelefono(val) {
        this.infoUsToken.telefono = val;
        this.set();
    }
    setMetodoPago(metodo) {
        this.infoUsToken.metodoPago = metodo;
        this.set();
    }
    setTipoComprobante(comprobante) {
        this.infoUsToken.tipoComprobante = comprobante;
        this.set();
    }
    setPropina(propina) {
        this.infoUsToken.propina = propina;
        this.set();
    }
    setPasoRecoger(val) {
        this.infoUsToken.pasoRecoger = val;
        this.set();
    }
    setIniMetodoPago(descripcion = 'Tarjeta') {
        const metodoPagoInit = new src_app_modelos_metodo_pago_model__WEBPACK_IMPORTED_MODULE_3__["MetodoPagoModel"];
        metodoPagoInit.idtipo_pago = descripcion === 'Tarjeta' ? 2 : 1;
        metodoPagoInit.descripcion = descripcion;
        metodoPagoInit.importe = '0';
        metodoPagoInit.checked = true;
        this.setMetodoPago(metodoPagoInit);
    }
    setIniMetodoPagoSegunFiltro(isAceptaTarjeta) {
        const metodoPagoInit = new src_app_modelos_metodo_pago_model__WEBPACK_IMPORTED_MODULE_3__["MetodoPagoModel"];
        if (isAceptaTarjeta) {
            metodoPagoInit.idtipo_pago = 2;
            metodoPagoInit.descripcion = 'Tarjeta';
            metodoPagoInit.importe = '0';
            metodoPagoInit.checked = true;
        }
        this.setMetodoPago(metodoPagoInit);
        return metodoPagoInit;
        // if ( isAceptaYape ) {
        //   metodoPagoInit.idtipo_pago = 3;
        //   metodoPagoInit.descripcion = 'Yape';
        //   metodoPagoInit.importe = '0';
        //   metodoPagoInit.checked = true;
        //   this.setMetodoPago( metodoPagoInit );
        //   return metodoPagoInit;
        // }
        // metodoPagoInit.idtipo_pago = 1;
        // metodoPagoInit.descripcion = 'Efectivo';
        // metodoPagoInit.importe = '0';
        // metodoPagoInit.checked = true;
        // this.setMetodoPago( metodoPagoInit );
        // return metodoPagoInit;
        // this.setMetodoPago( metodoPagoInit );
        // return metodoPagoInit;
    }
    setIniTipoComprobante() {
        const tipoComprobanteInit = new src_app_modelos_tipo_comprobante_model__WEBPACK_IMPORTED_MODULE_4__["TipoComprobanteModel"];
        tipoComprobanteInit.idtipo_comprobante = 1;
        tipoComprobanteInit.descripcion = 'Boleta';
        tipoComprobanteInit.checked = true;
        this.setTipoComprobante(tipoComprobanteInit);
    }
    setIniPropina() {
        const prpinaInt = new src_app_modelos_propina_model__WEBPACK_IMPORTED_MODULE_5__["PropinaModel"];
        prpinaInt.idpropina = 1;
        prpinaInt.value = 0;
        prpinaInt.descripcion = 'S/. 0';
        prpinaInt.checked = true;
        this.setPropina(prpinaInt);
    }
    setOtro(val) {
        this.infoUsToken.otro = val;
        this.set();
    }
    // guarda en el local storage
    set() {
        const _token = `eyCJ9.${btoa(JSON.stringify(this.infoUsToken))}`;
        localStorage.setItem('::token', _token);
    }
    //
    getToken() { return localStorage.getItem('::token'); }
    converToJSON() {
        if (localStorage.getItem('::token')) {
            const _token = JSON.parse(atob(localStorage.getItem('::token').split('.')[1]));
            // si existe idcliente, setea al usuario
            if (_token.idcliente) {
                const _newUs = new src_app_modelos_usuario_token_model__WEBPACK_IMPORTED_MODULE_2__["UsuarioTokenModel"]();
                _newUs.isCliente = true;
                _newUs.idcliente = _token.idcliente;
                _newUs.idorg = _token.idorg;
                _newUs.idsede = _token.idsede;
                _newUs.nombres = _token.datalogin ? _token.datalogin.name : _token.nombres;
                _newUs.idusuario = 0;
                _newUs.usuario = 'cliente';
                _newUs.numMesaLector = _token.numMesaLector;
                _newUs.ipCliente = _token.ipCliente;
                _newUs.isSoloLLevar = _token.isSoloLLevar;
                _newUs.isDelivery = _token.isDelivery;
                _newUs.direccionEnvioSelected = _token.direccionEnvioSelected;
                _newUs.telefono = _token.telefono;
                _newUs.orderDelivery = _token.orderDelivery;
                _newUs.importeDelivery = _token.importeDelivery;
                _newUs.isPagoSuccess = _token.isPagoSuccess;
                _newUs.metodoPago = _token.metodoPago;
                _newUs.tipoComprobante = _token.tipoComprobante;
                _newUs.propina = _token.propina;
                _newUs.socketId = _token.socketId;
                _newUs.otro = _token.otro;
                _newUs.pasoRecoger = _token.pasoRecoger;
                this.infoUsToken = _newUs;
                // agregar el metodo pago prederteminado tarjeta // valores iniciales
                if (!this.infoUsToken.metodoPago) {
                    this.setIniMetodoPago();
                    this.setIniTipoComprobante();
                    this.setIniPropina();
                    this.setPasoRecoger(false);
                }
            }
            else {
                this.infoUsToken = typeof _token.usuario === 'object' ? _token.usuario : _token;
                // this.infoUsToken = <UsuarioTokenModel>_token;
                // inicializa valores
                this.setIniMetodoPago();
                this.setIniTipoComprobante();
                this.setIniPropina();
                this.setPasoRecoger(false);
                this.infoUsToken.isCliente = false;
            }
        }
        else {
            this.infoUsToken = null;
        }
    }
    cerrarSession() {
        if (!this.infoUsToken.isDelivery) {
            localStorage.removeItem('::token');
            localStorage.removeItem('token');
            localStorage.removeItem('sys::numtis');
        }
        localStorage.removeItem('sys::rules');
        localStorage.removeItem('sys::status');
        localStorage.removeItem('sys::st');
        localStorage.removeItem('sys::ed');
        localStorage.removeItem('sys::transaction-response');
        localStorage.removeItem('sys::transaction-load');
        localStorage.removeItem('data');
        // localStorage.removeItem('sys::tpm');
    }
    // verifica el tiempo de inactividad para cerrar session
    // cerrar session despues de 3:20 => ( 12000 sec )horas inciadas
    verificarContunuarSession() {
        if (!this.infoUsToken || !this.infoUsToken.isCliente || !this.infoUsToken.isDelivery) { // si es usuario autorizado no cuenta tiempo
            return true;
        }
        if (this.infoUsToken.isDelivery) {
            // si es delivery no cierra session
            return true;
        }
        let numTis = parseInt(localStorage.getItem('sys::numtis'), 0);
        let continueSession = this.infoUsToken.isDelivery ? this.infoUsToken.isDelivery : !isNaN(numTis);
        if (!continueSession) {
            this.cerrarSession();
            // this.miPedidoService.cerrarSession();
            return continueSession;
        }
        if (isNaN(numTis)) {
            localStorage.setItem('sys::numtis', new Date().getTime().toString());
        }
        numTis = isNaN(numTis) ? new Date().getTime() : numTis;
        const ms_now = new Date().getTime();
        const ms = ms_now - numTis;
        const sec = Math.floor((ms / 1000));
        if (sec > 10000) {
            continueSession = false;
        }
        if (!continueSession) {
            this.cerrarSession();
            // this.miPedidoService.cerrarSession();
            return continueSession;
        }
        return true;
        // const timeAfter = localStorage.getItem('sys::tnum') ? parseInt(localStorage.getItem('sys::tnum'), 0) : ms_new;
    }
};
InfoTockenService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], InfoTockenService);



/***/ }),

/***/ "./src/app/shared/services/listen-status.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/shared/services/listen-status.service.ts ***!
  \**********************************************************/
/*! exports provided: ListenStatusService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListenStatusService", function() { return ListenStatusService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/internal/BehaviorSubject */ "./node_modules/rxjs/internal/BehaviorSubject.js");
/* harmony import */ var rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_app_modelos_estado_pedido_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/modelos/estado.pedido.model */ "./src/app/modelos/estado.pedido.model.ts");




let ListenStatusService = class ListenStatusService {
    constructor() {
        // para activar la busqueda
        this.isBusquedaSource = new rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
        this.isBusqueda$ = this.isBusquedaSource.asObservable();
        // string a buscar
        this.charBuquedaSource = new rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]('');
        this.charBuqueda$ = this.charBuquedaSource.asObservable();
        // hay items en la busqueda - se encontro cuenta
        this.hayCuentaBusquedaSource = new rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
        this.hayCuentaBusqueda$ = this.hayCuentaBusquedaSource.asObservable();
        // datos de la sede estan disponible
        this.hayDatosSedeSource = new rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
        this.hayDatosSede$ = this.hayDatosSedeSource.asObservable();
        // si es cliente usuario
        this.isUsuarioClienteSource = new rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
        this.isUsuarioCliente$ = this.isUsuarioClienteSource.asObservable();
        // estado del pedido enviado por el cliente
        this.estadoPedidoSource = new rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](new src_app_modelos_estado_pedido_model__WEBPACK_IMPORTED_MODULE_3__["EstadoPedidoModel"]());
        this.estadoPedido$ = this.estadoPedidoSource.asObservable();
        // hay pedido en el storage, si es cliente usuario no cargar al cuenta.
        this.hayPedidoPendienteSource = new rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
        this.hayPedidoPendiente$ = this.hayPedidoPendienteSource.asObservable();
        // form pagar la cuenta
        this.isPagePagarCuentaShowSource = new rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
        this.isPagePagarCuentaShow$ = this.isPagePagarCuentaShowSource.asObservable();
        // si el boton de pago ha sido visible // recargamos la pagina al volver a ingresar
        this.isBtnPagoShowSource = new rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
        this.isBtnPagoShow$ = this.isBtnPagoShowSource.asObservable();
        // notifica el pago correcto para enviar el pedido cuando es solo para llevar
        this.isPagoSuccesSource = new rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
        this.isPagoSucces$ = this.isPagoSuccesSource.asObservable();
        this.isChangeDireccionDeliverySource = new rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        this.isChangeDireccionDelivery$ = this.isChangeDireccionDeliverySource.asObservable();
        // notifica salir del establecimeinto cuando es cliente delivery goback
        this.isOutEstablecimientoDeliverySource = new rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
        this.isOutEstablecimientoDelivery$ = this.isOutEstablecimientoDeliverySource.asObservable();
    }
    setIsBusqueda() {
        if (!this.isBusquedaSource.value) {
            setTimeout(() => {
                this.isBusquedaSource.next(true);
            }, 250);
        }
        else {
            this.isBusquedaSource.next(false);
        }
    }
    setCharBusqueda(charFind) {
        this.charBuquedaSource.next(charFind);
    }
    setHayCuentaBuesqueda(value) {
        this.hayCuentaBusquedaSource.next(value);
    }
    setHayDatosSede(value) {
        this.hayDatosSedeSource.next(value);
    }
    setIsUsuarioCliente(value) {
        this.isUsuarioClienteSource.next(value);
    }
    setEstadoPedido(value) {
        this.estadoPedidoSource.next(value);
    }
    setHayPedidoPendiente(value) {
        this.hayPedidoPendienteSource.next(value);
    }
    setIsPagePagarCuentaShow(value) {
        this.isPagePagarCuentaShowSource.next(value);
    }
    setIsBtnPagoShow(value) {
        this.isBtnPagoShowSource.next(value);
    }
    setPagoSuccess(value) {
        this.isPagoSuccesSource.next(value);
    }
    setChangeDireccionDelivery(value) {
        this.isChangeDireccionDeliverySource.next(value);
    }
    setIsOutEstablecimientoDelivery(value) {
        this.isOutEstablecimientoDeliverySource.next(value);
    }
};
ListenStatusService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], ListenStatusService);



/***/ }),

/***/ "./src/app/shared/services/mipedido.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/services/mipedido.service.ts ***!
  \*****************************************************/
/*! exports provided: MipedidoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MipedidoService", function() { return MipedidoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/internal/BehaviorSubject */ "./node_modules/rxjs/internal/BehaviorSubject.js");
/* harmony import */ var rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_app_modelos_item_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/modelos/item.model */ "./src/app/modelos/item.model.ts");
/* harmony import */ var src_app_modelos_pedido_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/modelos/pedido.model */ "./src/app/modelos/pedido.model.ts");
/* harmony import */ var src_app_modelos_categoria_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/modelos/categoria.model */ "./src/app/modelos/categoria.model.ts");
/* harmony import */ var src_app_modelos_seccion_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/modelos/seccion.model */ "./src/app/modelos/seccion.model.ts");
/* harmony import */ var src_app_modelos_tipoconsumo_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/modelos/tipoconsumo.model */ "./src/app/modelos/tipoconsumo.model.ts");
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./storage.service */ "./src/app/shared/services/storage.service.ts");
/* harmony import */ var _socket_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./socket.service */ "./src/app/shared/services/socket.service.ts");
/* harmony import */ var _timer_limit_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./timer-limit.service */ "./src/app/shared/services/timer-limit.service.ts");
/* harmony import */ var _navigator_link_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./navigator-link.service */ "./src/app/shared/services/navigator-link.service.ts");
/* harmony import */ var _utilitarios_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./utilitarios.service */ "./src/app/shared/services/utilitarios.service.ts");
/* harmony import */ var _listen_status_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./listen-status.service */ "./src/app/shared/services/listen-status.service.ts");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm2015/snack-bar.js");
/* harmony import */ var src_app_modelos_from_valid_rpt_model__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/modelos/from.valid.rpt.model */ "./src/app/modelos/from.valid.rpt.model.ts");
/* harmony import */ var src_app_modelos_subitems_view_model__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/modelos/subitems.view.model */ "./src/app/modelos/subitems.view.model.ts");
/* harmony import */ var _establecimiento_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./establecimiento.service */ "./src/app/shared/services/establecimiento.service.ts");
/* harmony import */ var _crud_http_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./crud-http.service */ "./src/app/shared/services/crud-http.service.ts");








// import { MAX_MINUTE_ORDER } from '../config/config.const';
// servicios











// import { distinctUntilChanged } from 'rxjs/internal/operators/distinctUntilChanged';
// import { takeUntil } from 'rxjs/internal/operators/takeUntil';
let MipedidoService = class MipedidoService {
    constructor(storageService, socketService, timerLimitService, navigatorService, _snackBar, utilesService, listenStatusService, establecimientoService, // datos del estableciento // clienteSelivery
    crudService) {
        this.storageService = storageService;
        this.socketService = socketService;
        this.timerLimitService = timerLimitService;
        this.navigatorService = navigatorService;
        this._snackBar = _snackBar;
        this.utilesService = utilesService;
        this.listenStatusService = listenStatusService;
        this.establecimientoService = establecimientoService;
        this.crudService = crudService;
        this.miPedidoSource = new rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](new src_app_modelos_pedido_model__WEBPACK_IMPORTED_MODULE_4__["PedidoModel"]());
        this.miPedidoObserver$ = this.miPedidoSource.asObservable();
        // la carta observable
        // private laCartaObjSource = new BehaviorSubject<any>({});
        // public laCartaObj$ = this.laCartaObjSource.asObservable();
        // number tab Mi Pedido
        this.countItemsSource = new rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](0);
        this.countItemsObserve$ = this.countItemsSource.asObservable();
        // observable que se modifco cantidad - stock de algun producto
        // si es que esta en resumen de pedido dialog -- actualize stock
        this.itemStockChangeSource = new rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](new src_app_modelos_item_model__WEBPACK_IMPORTED_MODULE_3__["ItemModel"]());
        this.itemStockChangeObserve$ = this.itemStockChangeSource.asObservable();
        this.isPreAvisoVisible = false;
        this.listItemsPedido = [];
        this.miPedido = new src_app_modelos_pedido_model__WEBPACK_IMPORTED_MODULE_4__["PedidoModel"]();
        this.mpObjSeccionSelected = new src_app_modelos_seccion_model__WEBPACK_IMPORTED_MODULE_6__["SeccionModel"]();
        this.time = new Date();
        // pwa_delivery_importe_min = 10; // delivery / el importe minimo por pedido
        this.pwa_delivery_servicio_propio = false; // delivery / si el comercio tiene propio repartidores
        this.deliveryCanItemsInOrder = 0; // cantidad de productos en el pedido // solo para delivery
        this.deliveryArrConstantes = {
            cantItemsScala: 0,
            costoScala: 0
        };
    }
    getObjCarta() {
        return this.objCarta;
    }
    getObjCartaLibery() {
        return JSON.parse(JSON.stringify(this.objCarta));
    }
    // cuando obtenemos la cuenta
    setObjMiPedido(obj) {
        this.miPedido = obj;
        this.miPedidoSource.next(this.miPedido);
    }
    resetObjMiPedido() {
        this.miPedido = new src_app_modelos_pedido_model__WEBPACK_IMPORTED_MODULE_4__["PedidoModel"]();
        this.miPedidoSource.next(this.miPedido);
    }
    setObjCarta(res) {
        // esto lo manda desde carta component
        this.objCarta = {};
        // setTimeout(() => {
        this.objCarta = {
            'carta': null,
            'bodega': null
        };
        this.objCarta.carta = res[0].carta;
        this.objCarta.bodega = res[0].bodega;
        // colocamos la bodega en todas las cartas
        let _carta = this.objCarta.carta;
        const _bodega = this.objCarta.bodega;
        if (_bodega) {
            // si no hay carta solo productos
            if (!this.objCarta.carta) {
                // const newCarta = new CartaModel;
                const newCategoria = new src_app_modelos_categoria_model__WEBPACK_IMPORTED_MODULE_5__["CategoriaModel"];
                newCategoria.des = 'Productos';
                newCategoria.detalle = '';
                newCategoria.hora_fin = '';
                newCategoria.hora_ini = '';
                newCategoria.idcarta = 0;
                newCategoria.idcategoria = 0;
                newCategoria.secciones = [];
                _carta = [];
                _carta.push(newCategoria);
                _carta.map((c) => {
                    _bodega.map((bs) => {
                        c.secciones.push(bs);
                    });
                });
                this.objCarta.carta = _carta;
                return;
            }
            _carta.map((c) => {
                _bodega.map((bs) => {
                    c.secciones.push(bs);
                });
            });
        }
        // this.laCartaObjSource.next(this.objCarta);
        // console.log('objCartaCarta', this.objCarta);
        // }, 1000);
    }
    getMiPedido() {
        if (this.miPedido.tipoconsumo.length === 0) {
            if (this.storageService.isExistKey('sys::order::all')) {
                this.miPedido = JSON.parse(atob(this.storageService.get('sys::order::all')));
            }
        }
        // this.miPedidoSource.next(this.miPedido);
        return this.miPedido;
    }
    // setea los tipos de consumo del item seleccionado para sumar las cantidaddes seleccionadas
    setobjItemTipoConsumoSelected(_objItemTipoConsumoSelected) {
        // this.mpObjItemTipoConsumoSelected = JSON.parse(JSON.stringify(_objItemTipoConsumoSelected));
        this.mpObjItemTipoConsumoSelected = _objItemTipoConsumoSelected;
    }
    // seteamos seccion seleccionada menos items[]; para que no se forme el bucle
    setObjSeccionSeleced(seccion) {
        this.mpObjSeccionSelected = new src_app_modelos_seccion_model__WEBPACK_IMPORTED_MODULE_6__["SeccionModel"]();
        this.mpObjSeccionSelected.des = seccion.des;
        this.mpObjSeccionSelected.idimpresora = seccion.idimpresora;
        this.mpObjSeccionSelected.idseccion = seccion.idseccion;
        this.mpObjSeccionSelected.sec_orden = seccion.sec_orden;
        this.mpObjSeccionSelected.ver_stock_cero = seccion.ver_stock_cero;
    }
    // obtener el DELIVERY_CANTIDAD_ITEMS_ESCALA // solo si es cliente delivery
    getDeliveryConstCantEscala() {
        // recuperar del storage
        const _arrItemScala = localStorage.getItem('sys::ICS');
        if (_arrItemScala) {
            this.deliveryArrConstantes = JSON.parse(atob(_arrItemScala));
        }
        else {
            this.crudService.getAll('pedido', 'get-const-delivery-items-escala', false, false, false)
                .subscribe((res) => {
                this.deliveryArrConstantes = {
                    cantItemsScala: res.data[0].value,
                    costoScala: res.data[1].value
                };
                // = parseInt(res.data[0][0].value, 0);
                // console.log('deliveryItemsScala', res);
                localStorage.setItem('sys::ICS', btoa(JSON.stringify(this.deliveryArrConstantes)));
            });
        }
    }
    // suma cantidad seleccionada
    // idTpcItemResumenSelect tipo consumo del item al modificar desde resumen, si el tpc es diferente al seleccionado en el dialog entonces no suma al item
    addItem2(tipoconsumo, item, signo = 0, idTpcItemResumenSelect = null) {
        // let sumTotalTpcSelected = this.totalItemTpcSelected();
        // el item que viene es de carta o del resumen
        // buscamos el item en la carta para el stock
        // de esta manera manejamos una sola cantidad
        // idTpcItemResumenSelect si viene del resumen dialog
        // let cantItem = idTpcItemResumenSelect ? parseInt(this.findItemCarta(item).cantidad.toString(), 0) : parseInt(item.cantidad.toString(), 0);
        let cantItem = parseInt(item.cantidad.toString(), 0);
        const sumar = signo === 0 ? true : false;
        if (cantItem <= 0 && sumar) {
            return;
        }
        let cantSeleccionada = tipoconsumo.cantidad_seleccionada || 0;
        cantSeleccionada += sumar ? 1 : -1;
        if (cantSeleccionada < 0) {
            return;
        }
        if (item.isporcion !== 'ND') {
            cantItem += sumar ? -1 : 1;
            cantSeleccionada = cantSeleccionada < 0 ? 0 : cantSeleccionada;
            cantItem = cantItem < 0 || cantSeleccionada < 0 ? 0 : cantItem;
        }
        cantSeleccionada = cantSeleccionada < 0 ? 0 : cantSeleccionada;
        tipoconsumo.cantidad_seleccionada = cantSeleccionada;
        // listItemsPedido -> para el local storage recuperar y resetear
        // const itemInList = this.findItemListPedido(item); // <ItemModel>this.listItemsPedido.filter( x => x.iditem === item.iditem )[0];
        // let sumTotalTpcSelected = 1;
        // if (itemInList) {
        //   sumTotalTpcSelected = this.totalItemTpcSelected(itemInList.itemtiposconsumo) || 0;
        //   itemInList.cantidad_seleccionada = sumTotalTpcSelected;
        // } else {
        //   this.listItemsPedido.push(item);
        // }
        // item
        // sumTotalTpcSelected = this.totalItemTpcSelected(itemInList.itemtiposconsumo) || 0;
        // actualizar cantidades en item carta
        // item.cantidad_seleccionada = sumTotalTpcSelected;
        // item.cantidad = cantItem;
        // json pedido
        const _tipoconsumo = JSON.parse(JSON.stringify(tipoconsumo));
        const itemInPedido = this.findItemMiPedido(_tipoconsumo, this.mpObjSeccionSelected, item, sumar);
        itemInPedido.cantidad = cantItem;
        // actualizar cantidades en item carta
        item = idTpcItemResumenSelect ? this.findItemCarta(item) : item;
        item = this.findItemCarta(item);
        // emitir item modificado
        item.sumar = sumar;
        item.subitems_selected = itemInPedido.subitems_selected;
        item.subitems_view = itemInPedido.subitems_view;
        // listItemsPedido -> para el local storage recuperar y resetear
        const itemInList = this.findItemListPedido(item); // <ItemModel>this.listItemsPedido.filter( x => x.iditem === item.iditem )[0];
        let sumTotalTpcSelected = 1;
        if (itemInList) {
            // por momentos pierde referencia al tipo de consumo, para evitar eso
            if (!itemInList.itemtiposconsumo) {
                itemInList.itemtiposconsumo = this.mpObjItemTipoConsumoSelected;
            }
            sumTotalTpcSelected = this.totalItemTpcSelected(itemInList.itemtiposconsumo) || 0;
            itemInList.cantidad_seleccionada = sumTotalTpcSelected;
            itemInList.subitems_selected = itemInPedido.subitems_selected;
            itemInList.subitems_view = itemInPedido.subitems_view;
        }
        else {
            this.listItemsPedido.push(item);
        }
        item.cantidad_seleccionada = sumTotalTpcSelected;
        // if (item.isporcion !== 'ND') { item.cantidad = cantItem; } // la cantidad lo envia el socket
        // comunica el cambio de stock en el item carta
        this.itemStockChangeSource.next(item);
        // hora que comienza a realizar el pedido
        this.setLocalStorageHora();
        // guardamos el pedido en local // por si se actualiza
        this.setLocalStoragePedido();
        // emitir item modificado
        // item.sumar = sumar;
        // item.subitems_selected = itemInPedido.subitems_selected;
        // item.subitems_view = itemInPedido.subitems_view;
        this.socketService.emit('itemModificado', item);
        // console.log('listItemsPedido', this.listItemsPedido);
        // console.log('itemModificado en add', item);
        // console.log('itemModificado en add', JSON.stringify(item));
        this.listenStatusService.setHayPedidoPendiente(true);
        // item.subitems_selected = null;
        // itemInPedido.subitems_selected = null;
        // item.subitems_view = null;
        this.playTimerLimit();
    }
    totalItemTpcSelected(_arrTpc) {
        return _arrTpc.map((x) => x.cantidad_seleccionada || 0).reduce((a, b) => a + b, 0);
    }
    // cantidad seleccionada y precio
    addCantItemMiPedido(elItem, cantidad_seleccionada) {
        const cantSeleccionadaTPC = cantidad_seleccionada;
        const precioTotal = cantSeleccionadaTPC * parseFloat(elItem.precio_unitario);
        // total subitems
        // sumar el total
        const totalSubItems = elItem.subitems_selected ? elItem.subitems_selected.map((subIt) => subIt.precio * subIt.cantidad_seleccionada).reduce((a, b) => a + b, 0) : 0;
        // const totalSubItems = elItem.subitems_view ? elItem.subitems_view.map((subIt: SubItemsView) => subIt.precio).reduce((a, b) => a + b , 0) : 0;
        // precioTotal += totalSubItems;
        elItem.cantidad_seleccionada = cantSeleccionadaTPC;
        // elItem.precio_total = precioTotal + totalSubItems;
        // elItem.precio_print = precioTotal + totalSubItems;
        elItem.precio_total = precioTotal;
        elItem.precio_print = precioTotal;
        // elItem.precio_total_calc = precioTotal;
    }
    // agrega el precio sumado con los subitems si los hay del item mipedido
    addPrecioItemMiPedido(elItem) {
        const totalSubItems = elItem.subitems_view ? elItem.subitems_view.map((subIt) => subIt.precio).reduce((a, b) => a + b, 0) : 0;
        let precioTotal = elItem.cantidad_seleccionada * parseFloat(elItem.precio_unitario);
        precioTotal += totalSubItems;
        elItem.precio_total = precioTotal;
        elItem.precio_print = precioTotal;
    }
    // agrega a subitem_selected -> lista de subitems seleccionados
    addItemSubItemMiPedido(elItem, itemCarta, sumar) {
        if (elItem.subitems) {
            // elItem.subitems_view = elItem.subitems_view ? elItem.subitems_view : [];
            // subitemsviews
            if (elItem.subitems.length === 0) {
                return;
            }
            const newSubItemView = new src_app_modelos_subitems_view_model__WEBPACK_IMPORTED_MODULE_16__["SubItemsView"]();
            newSubItemView.id = '';
            newSubItemView.des = '';
            newSubItemView.listDes = [];
            newSubItemView.cantidad_seleccionada = 0;
            newSubItemView.precio = 0;
            newSubItemView.indicaciones = '';
            newSubItemView.subitems = [];
            if (elItem.subitems_selected && elItem.subitems_selected.length > 0) {
                elItem.subitems_selected.map((x) => {
                    newSubItemView.id += x.iditem_subitem.toString();
                    newSubItemView.listDes.push(this.utilesService.primeraConMayusculas(x.des.toLowerCase()));
                    newSubItemView.cantidad_seleccionada = 1;
                    newSubItemView.precio += parseFloat(x.precio.toString());
                    // newSubItemView.indicaciones += x.indicaciones === undefined ? '' :  ' (' + x.indicaciones + ')';
                    newSubItemView.subitems.push(x);
                });
                newSubItemView.des = newSubItemView.listDes.join(', ');
                newSubItemView.des += elItem.indicaciones === undefined || elItem.indicaciones === '' ? '' : ', (' + elItem.indicaciones + ')';
                elItem.indicaciones = '';
                elItem.subitems_view = elItem.subitems_view ? elItem.subitems_view : [];
                const isExistSubItemView = elItem.subitems_view.filter((subView) => subView.id === newSubItemView.id)[0];
                if (isExistSubItemView) {
                    if (sumar) {
                        isExistSubItemView.indicaciones += newSubItemView.indicaciones;
                        isExistSubItemView.cantidad_seleccionada += 1;
                        isExistSubItemView.precio += newSubItemView.precio;
                    }
                    else {
                        // resta
                        this.restarCantSubItemView(elItem, isExistSubItemView);
                    }
                }
                else {
                    // si no existe
                    // isExistSubItemView.indicaciones = newSubItemView.indicaciones;
                    if (sumar) {
                        elItem.subitems_view.push(newSubItemView);
                    }
                    else {
                        // si es restar y no existe en la lista quita el ultimo
                        this.restarCantSubItemView(elItem, null);
                    }
                }
                this.addPrecioItemMiPedido(elItem);
            }
            // let _subItemExist: SubItem;
            // elItem.subitems.filter((x: SubItem) => x.selected).map((subItem: SubItem) => {
            //   elItem.subitems_selected = elItem.subitems_selected ? elItem.subitems_selected : [];
            //   _subItemExist = elItem.subitems_selected.filter((subIt: SubItem) => subIt === subItem)[0];
            //   if ( _subItemExist ) {
            //     _subItemExist.cantidad_seleccionada++;
            //     _subItemExist.indicaciones = elItem.indicaciones || '';
            //     // _subItemExist.precio += subItem.precio;
            //   } else {
            //     subItem.indicaciones = elItem.indicaciones || '';
            //     subItem.cantidad_seleccionada = 1;
            //     elItem.subitems_selected.push(subItem);
            //   }
            // });
            // // subitemsviews
            // if (elItem.subitems.length === 0 ) { return; }
            // const newSubItemView: SubItemsView = new SubItemsView();
            // newSubItemView.id = 0;
            // newSubItemView.des = '';
            // newSubItemView.cantidad_seleccionada = 0;
            // newSubItemView.precio = 0;
            // newSubItemView.indicaciones = '';
            // newSubItemView.subitems = [];
            // if ( elItem.subitems_selected ) {
            //   elItem.subitems_selected.map((x: SubItem) => {
            //     newSubItemView.id += x.iditem_subitem;
            //     newSubItemView.des += x.des + ' ';
            //     newSubItemView.cantidad_seleccionada = 1;
            //     newSubItemView.precio += x.precio;
            //     newSubItemView.indicaciones += x.indicaciones === '' ? '' :  x.indicaciones  + '. ';
            //     newSubItemView.subitems.push(x);
            //   });
            //   // itemCarta para sacar los indicadores
            //   itemCarta.indicaciones = '';
            //   elItem.indicaciones = '';
            //   elItem.subitems_view = elItem.subitems_view ? elItem.subitems_view : [];
            //   const isExistSubItemView = elItem.subitems_view.filter((subView: SubItemsView) => subView.id === newSubItemView.id)[0];
            //   if ( isExistSubItemView ) {
            //     if ( sumar ) {
            //       isExistSubItemView.indicaciones += newSubItemView.indicaciones;
            //       isExistSubItemView.cantidad_seleccionada += 1;
            //       isExistSubItemView.precio += newSubItemView.precio;
            //     } else {
            //       // resta
            //       this.restarCantSubItemView(elItem, isExistSubItemView);
            //     }
            //   } else {
            //     // isExistSubItemView.indicaciones = newSubItemView.indicaciones;
            //     if ( sumar ) {
            //       elItem.subitems_view.push(newSubItemView);
            //     } else {
            //       // si es restar y no existe en la lista quita el ultimo
            //       this.restarCantSubItemView(elItem, null);
            //     }
            //   }
            // } else {
            //   this.restarCantSubItemView(elItem, null);
            // }
            // sumar importe total con los subitems
            // this.addPrecioItemMiPedido(elItem);
        }
    }
    restarCantSubItemView(_elItem, isExistSubItemView = null) {
        if (isExistSubItemView) {
            // si existe subitemview
            const precioDescontar = isExistSubItemView.precio / isExistSubItemView.cantidad_seleccionada;
            isExistSubItemView.cantidad_seleccionada -= 1;
            isExistSubItemView.precio -= precioDescontar;
            isExistSubItemView.precio = isExistSubItemView.precio < 0 ? 0 : isExistSubItemView.precio;
            if (isExistSubItemView.cantidad_seleccionada <= 0) {
                // borrar el item
                _elItem.subitems_view = _elItem.subitems_view.filter((subView) => subView.cantidad_seleccionada > 0);
            }
        }
        else {
            // si no envia o no existe el subitemview a restar toma el ultimo
            const lentSubItemView = _elItem.subitems_view.length;
            const _SubItemView = _elItem.subitems_view[lentSubItemView - 1];
            const precioDescontar = _SubItemView.precio / _SubItemView.cantidad_seleccionada;
            _SubItemView.cantidad_seleccionada--;
            _SubItemView.precio -= precioDescontar;
            if (_SubItemView.cantidad_seleccionada <= 0) {
                // borrar el item
                _elItem.subitems_view = _elItem.subitems_view.filter((subView) => subView.cantidad_seleccionada > 0);
            }
            // para restar en el back end
            _elItem.subitems_selected = _SubItemView.subitems;
        }
    }
    // del socket nuevo item from monitoreo stock
    addItemInCarta(newItem) {
        const newItemFind = this.findItemCarta(newItem);
        if (newItemFind) { // update
            // console.log('update');
            newItemFind.cantidad = newItemFind.cantidad;
        }
        else { // agrega a la carta
            // console.log('add in carta');
            this.objCarta.carta.map((cat) => {
                cat.secciones
                    .filter((sec) => sec.idseccion === newItem.idseccion)
                    .map((sec) => {
                    sec.items.push(newItem);
                });
            });
        }
        // this.laCartaObjSource.next(this.objCarta.carta);
        // console.log('item new add in carta', this.objCarta.carta);
    }
    // actualizar las cantidades despues de connectar
    // setUpdateCantAfterReconnect( arrObj: any ) {
    //   arrObj.carta.map((cat: CategoriaModel) => {
    //     cat.secciones.map((sec: SeccionModel) => {
    //       sec.items.filter((x: ItemModel) => x.indicaciones )
    //             .map((i: ItemModel) => {
    //               const itemCartaUpdate = this.findItemCarta(i);
    //               itemCartaUpdate.cantidad = i.cantidad;
    //             });
    //     });
    //   });
    // }
    // <---------- Busquedas ------> //
    // buscar item en listItemsPedido
    findItemFromArr(arrFind, item) {
        return arrFind.filter((x) => x.iditem === item.iditem)[0];
    }
    // buscar item en listItemsPedido
    findItemListPedido(item) {
        return this.listItemsPedido.filter((x) => x.iditem === item.iditem)[0];
    }
    // buscar item en carta y limpiar las indicaciones y subitems_seleceted
    // en nuevo pedido
    findItemCartaAndClearIndicaciones() {
        this.objCarta.carta.map((cat) => {
            cat.secciones.map((sec) => {
                sec.items.filter((x) => x.indicaciones)
                    .map((x) => x.indicaciones = '');
                sec.items.filter((x) => x.subitems_selected)
                    .map((x) => x.subitems_selected = null);
                sec.items.filter((x) => x.subitems_view)
                    .map((x) => x.subitems_view = null);
            });
        });
        // this.laCartaObjSource.next(this.objCarta);
    }
    // buscar item en la carta
    findItemCarta(item) {
        let rpt;
        this.objCarta.carta.map((cat) => {
            cat.secciones.map((sec) => {
                const _rpt = sec.items.filter((x) => x.idcarta_lista === item.idcarta_lista)[0];
                if (_rpt) {
                    rpt = _rpt;
                    return rpt;
                }
            });
        });
        return rpt;
    }
    // buscar item en la carta x idItem
    findItemCartaByIdCartaLista(id) {
        let rpt;
        this.objCarta.carta.map((cat) => {
            cat.secciones.map((sec) => {
                const _rpt = sec.items.filter((x) => x.idcarta_lista.toString() === id.toString())[0];
                if (_rpt) {
                    rpt = _rpt;
                    return rpt;
                }
            });
        });
        return rpt;
    }
    // buscar subitem del item segun idproducto + idporcion
    // iditemFilter = iditem que se va a filtrar, porque ya fue actualizado
    findSubItemCartaById(idFind, iditemFilter) {
        const rptSubItem = [];
        this.objCarta.carta.map((cat) => {
            cat.secciones.map((sec) => {
                sec.items
                    .filter((item) => item.iditem.toString() !== iditemFilter)
                    .filter((item) => item.subitems)
                    .map((item) => {
                    item.subitems.map((subItemContent) => {
                        const _subItem = subItemContent.opciones.filter((x) => x.idproducto.toString() + x.idporcion.toString() === idFind)[0];
                        if (_subItem) {
                            rptSubItem.push(_subItem);
                            // console.log(item);
                            // return rptSubItem;
                        }
                    });
                });
            });
        });
        return rptSubItem;
    }
    // resetear las cantidades seleccionadas en el item carta, luego de hacer un pedido para que no se quede marcado
    resetCantidadesTpcItemCarta() {
        if (!this.objCarta) {
            return;
        }
        this.objCarta.carta.map((cat) => {
            cat.secciones.map((sec) => {
                sec.items.map(x => {
                    x.indicaciones = '';
                    x.cantidad_seleccionada = 0;
                    x.itemtiposconsumo = null;
                    // return x;
                });
            });
        });
    }
    findItemSeccionCarta(idFind) {
        let rpt;
        this.objCarta.carta.map((cat) => {
            const _rpt = cat.secciones.filter((sec) => sec.idseccion === idFind)[0];
            if (_rpt) {
                rpt = _rpt;
                return;
            }
        });
        return rpt;
    }
    // bucar item en Mi pedido, update indicaciones
    findOnlyItemMiPedido(itemSearch) {
        let rpt;
        this.miPedido.tipoconsumo
            .map((tpc) => {
            tpc.secciones.map((sec) => {
                rpt = sec.items.filter((i) => i.idcarta_lista === itemSearch.idcarta_lista)[0];
            });
        });
        return rpt;
    }
    // buscar o agregar item en miPedido
    findItemMiPedido(_tpc, _seccion, item, sumar) {
        let rpt;
        // let elItem = item;
        // this.addItemSubItemMiPedido(item);
        let elItem = JSON.parse(JSON.stringify(item));
        const cantSeleccionadaTPC = _tpc.cantidad_seleccionada;
        elItem.itemtiposconsumo = [];
        // elItem.indicaciones = item.indicaciones;
        this.addCantItemMiPedido(elItem, cantSeleccionadaTPC);
        const findTpc = this.miPedido.tipoconsumo.filter((x) => x.idtipo_consumo === _tpc.idtipo_consumo)[0];
        if (findTpc) {
            // if (!sumar) { this.quitarTpcMiPedido(findTpc); return; }
            const findSecc = findTpc.secciones.filter((sec) => sec.idseccion === _seccion.idseccion)[0];
            if (findSecc) {
                // if (!sumar) { this.quitarTpcMiPedido(findTpc); }
                const _rpt = findSecc.items.filter((x) => x.idcarta_lista === item.idcarta_lista)[0];
                if (_rpt) {
                    // indicaciones
                    _rpt.indicaciones = elItem.indicaciones;
                    // actualiza subitems_selected
                    // _rpt.subitems_selected = [];
                    // _rpt.subitems_selected = elItem.subitems_selected;
                    // _rpt.subitems_view = elItem.subitems_view;
                    // this.addItemSubItemMiPedido(_rpt);
                    this.addCantItemMiPedido(_rpt, cantSeleccionadaTPC);
                    elItem = _rpt;
                    // this.addItemSubItemMiPedido(elItem);
                    // elItem.cantidad_seleccionada = this.addCantItemMiPedido(elItem.cantidad_seleccionada, sumar);
                    rpt = elItem;
                }
                else {
                    // si no existe item lo agrega
                    // elItem.cantidad_seleccionada = 0;
                    findSecc.items.push(elItem);
                    rpt = elItem;
                }
                elItem.subitems = item.subitems;
                elItem.subitems_selected = item.subitems_selected;
                this.addItemSubItemMiPedido(elItem, item, sumar);
                this.setCountCantItemTpcAndSeccion(findTpc, findSecc);
            }
            else {
                // si no existe seccion add
                rpt = elItem;
                // _seccion.items.push(rpt);
                const _newSeccion = JSON.parse(JSON.stringify(_seccion));
                _newSeccion.items = [];
                _newSeccion.items.push(elItem);
                findTpc.secciones = findTpc.secciones ? findTpc.secciones : [];
                findTpc.secciones.push(_newSeccion);
                // findTpc.secciones.push(_seccion);
                this.addItemSubItemMiPedido(elItem, item, sumar);
                this.setCountCantItemTpcAndSeccion(findTpc, _newSeccion);
            }
        }
        else {
            // si no existe tpc add
            // elItem.cantidad_seleccionada = 0;
            elItem.subitems = item.subitems;
            elItem.subitems_selected = item.subitems_selected;
            this.addItemSubItemMiPedido(elItem, item, sumar);
            const _newSeccion = JSON.parse(JSON.stringify(_seccion));
            _newSeccion.items = [];
            _newSeccion.items.push(elItem);
            _tpc.secciones = _tpc.secciones ? _tpc.secciones : [];
            _tpc.secciones.push(_newSeccion);
            this.miPedido.tipoconsumo.push(_tpc);
            this.setCountCantItemTpcAndSeccion(_tpc, _newSeccion);
            rpt = elItem;
        }
        this.clearObjMiPedido();
        // this.miPedidoSource.next(this.miPedido);
        return rpt;
    }
    quitarTpcMiPedido(tpcFind) {
        if (tpcFind.count_items_seccion === 1) {
            this.miPedido.tipoconsumo = this.miPedido.tipoconsumo.filter((tpc) => !tpcFind);
        }
    }
    quitarSeccionMiPedido(secFind) {
        if (secFind.count_items === 1) {
            this.miPedido.tipoconsumo.map((tpc) => {
                tpc.secciones.filter((sec) => !secFind);
            });
        }
    }
    // busca si en el pedido hay para consumir en el local y si es asi, exigir numero de mesa
    findMiPedidoIsTPCLocal() {
        let rpt = false;
        this.miPedido.tipoconsumo
            .filter(x => x.titulo === 'LOCAL')
            .map((t) => {
            rpt = t.secciones.filter((s) => s.count_items > 0)[0] ? true : false;
        });
        return rpt;
    }
    // busca si en el pedido hay para consumir en el local y si es asi, exigir numero de mesa
    findMiPedidoIsTPCDelivery() {
        let rpt = false;
        this.miPedido.tipoconsumo
            .filter(x => x.descripcion.toUpperCase() === 'DELIVERY')
            .map((t) => {
            rpt = t.secciones.filter((s) => s.count_items > 0)[0] ? true : false;
        });
        return rpt;
    }
    // busca si en el pedido hay para consumir en el local y si es asi, exigir numero de mesa
    findMiPedidoIsTPCLLevar() {
        let rpt = false;
        this.miPedido.tipoconsumo
            .filter(x => x.descripcion.toUpperCase().indexOf('LLEVAR'))
            .map((t) => {
            rpt = t.secciones.filter((s) => s.count_items > 0)[0] ? true : false;
        });
        return rpt;
    }
    // recorre los tipos de consumo y devuelve un arr de requerimientos
    findEvaluateTPCMiPedido() {
        const rptArr = new src_app_modelos_from_valid_rpt_model__WEBPACK_IMPORTED_MODULE_15__["FormValidRptModel"]();
        let sumTpcReqMesa = 0;
        this.miPedido.tipoconsumo
            .filter((t) => t.count_items_seccion > 0)
            .map((t) => {
            if (t.titulo === 'LOCAL') {
                rptArr.isTpcLocal = true;
                sumTpcReqMesa++;
            }
            if (t.descripcion.toUpperCase().indexOf('LLEVAR') > -1) {
                rptArr.isTpcSoloLLevar = true;
                sumTpcReqMesa++;
            }
            if (t.descripcion.toUpperCase().indexOf('DELIVERY') > -1) {
                rptArr.isTpcSoloDelivery = true;
            }
            rptArr.isRequiereMesa = rptArr.isTpcLocal ? true : false;
            rptArr.isTpcSoloLLevar = sumTpcReqMesa === 1 && rptArr.isTpcSoloLLevar ? true : false;
        });
        return rptArr;
    }
    // busca la seccion por idimpresora -- para mandar imprimir
    findSeccionInMipedidoByPrint(idPrintSearch) {
        let secRpt;
        this.miPedido.tipoconsumo
            .map((tpc) => {
            secRpt = tpc.secciones.filter((s) => s.idimpresora === idPrintSearch);
        });
        return secRpt;
    }
    findIsHayItems() {
        return this.setCountTotalImtesPedido() > 0 ? true : false;
    }
    // quita los items, secciones, tpc con cantidad 0
    clearObjMiPedido() {
        // limpia los tipos de consumo con items = 0
        this.miPedido.tipoconsumo = this.miPedido.tipoconsumo.filter((tpc) => tpc.count_items_seccion > 0);
        if (this.miPedido.tipoconsumo.length === 0) {
            this.miPedido = new src_app_modelos_pedido_model__WEBPACK_IMPORTED_MODULE_4__["PedidoModel"]();
            // console.log('mi pedido clear', this.miPedido);
            this.miPedidoSource.next(this.miPedido);
            return;
        }
        // limpia las secciones con items = 0
        this.miPedido.tipoconsumo = this.miPedido.tipoconsumo.map((tpc) => {
            tpc.secciones = tpc.secciones.filter((sec) => sec.count_items > 0);
            return tpc;
        });
        // limpia las item con cantidad_seleccionada = 0
        this.miPedido.tipoconsumo = this.miPedido.tipoconsumo.map((tpc) => {
            tpc.secciones = tpc.secciones.map((sec) => {
                sec.items = sec.items.filter((item) => item.cantidad_seleccionada > 0);
                return sec;
            });
            return tpc;
        });
        // console.log('mi pedido clear', this.miPedido);
        this.miPedidoSource.next(this.miPedido);
    }
    // <---------- Busquedas ------> //
    // cuenta la cantidad de items en seccion
    setCountCantItemTpcAndSeccion(_tpc, _seccion) {
        const countItemsSeccion = _seccion.items.map((i) => i.cantidad_seleccionada).reduce((a, b) => a + b, 0);
        _seccion.count_items = countItemsSeccion;
        const countSeccionTpc = _tpc.secciones.map((s) => s.count_items).reduce((a, b) => a + b, 0);
        _tpc.count_items_seccion = countSeccionTpc;
        this.setCountTotalImtesPedido();
    }
    // <------ storage ---- > ///
    setCountTotalImtesPedido() {
        const countTotal = this.miPedido.tipoconsumo.map((t) => t.count_items_seccion).reduce((a, b) => a + b, 0);
        this.countItemsSource.next(countTotal);
        return countTotal;
    }
    setLocalStorageHora() {
        if (this.storageService.isExistKey('sys::h')) {
            return;
        }
        const hora = `${this.time.getHours()}:${this.time.getMinutes()}:${this.time.getSeconds()}`;
        this.storageService.set('sys::h', hora.toString());
    }
    setLocalStoragePedido() {
        this.storageService.set('sys::order', btoa(JSON.stringify(this.listItemsPedido)));
        this.storageService.set('sys::order::all', btoa(JSON.stringify(this.miPedido)));
    }
    clearPedidoIsLimitTime() {
        if (!this.storageService.isExistKey('sys::order')) {
            return;
        }
        // if ( !this.storageService.isExistKey('sys::h') ) { return; }
        this.listItemsPedido = JSON.parse(atob(this.storageService.get('sys::order')));
        this.miPedido = JSON.parse(atob(this.storageService.get('sys::order::all')));
        // if (this.isTimeLimit()) {
        //   // si el tiempo limite fue superado mandamos a restablecer carta
        //   // nuevo pdido
        //   this.socketService.emit('resetPedido', this.listItemsPedido);
        //   this.updatePedidoFromClear();
        //   // this.resetAllNewPedido();
        // }
    }
    // resetear stock
    resetAllNewPedido() {
        // _mipedidoVista = _mipedidoVista ? _mipedidoVista : this.listItemsPedido;
        this.socketService.emit('resetPedido', this.listItemsPedido);
        // this.updatePedidoFromClear();
        this.prepareNewPedido();
    }
    // nuevo pedido // sin recuperar stock // cuando el envio fue exitoso
    prepareNewPedido() {
        // this.updatePedidoFromClear();
        this.resetTpcCarta();
        // this.findItemCartaAndClearIndicaciones();
        // valor en blanco para nuevo pedido
        this.storageService.clear('sys::h');
        this.storageService.clear('sys::order');
        this.storageService.clear('sys::order::all');
        this.storageService.clear('sys::tcount'); // timer count
        this.storageService.clear('sys::tnum'); // timer count
        // this.listItemsPedido = [];
        this.miPedido = null;
        this.miPedido = new src_app_modelos_pedido_model__WEBPACK_IMPORTED_MODULE_4__["PedidoModel"]();
        this.miPedidoSource.next(this.miPedido);
        this.countItemsSource.next(0);
        this.listenStatusService.setHayPedidoPendiente(false);
        this.stopTimerLimit();
        // this.getOnlyCarta();
        // this.
        // console.log('antes new', this.listItemsPedido);
    }
    // pide la carta nuevamente / despues de mandar el pedido o despues de reconectar
    getOnlyCarta() {
        this.socketService.emit('getOnlyCarta', null);
    }
    // reset cantidades en vista tipos de consumo
    resetTpcCarta() {
        try {
            this.listItemsPedido.map((item) => {
                item.indicaciones = '';
                if (!item.itemtiposconsumo) {
                    return;
                }
                item.itemtiposconsumo = null;
                // item.itemtiposconsumo.map((tpc: ItemTipoConsumoModel) => {
                //   tpc.cantidad_seleccionada = 0;
                // });
                const _item = this.findItemCarta(item);
                _item.indicaciones = '';
                _item.cantidad_seleccionada = 0;
                _item.itemtiposconsumo = null;
                // _item.itemtiposconsumo.map((tpc: ItemTipoConsumoModel) => {
                //   tpc.cantidad_seleccionada = 0;
                // });
            });
        }
        catch (error) {
            // console.log(error);
        }
        this.resetCantidadesTpcItemCarta();
        // this.laCartaObjSource.next(this.objCarta);
        this.listItemsPedido = [];
    }
    updatePedidoFromStrorage() {
        this.listenStatusService.setHayPedidoPendiente(false);
        if (!this.storageService.isExistKey('sys::order')) {
            return;
        }
        this.listenStatusService.setHayPedidoPendiente(true);
        // if ( !this.storageService.isExistKey('sys::h') ) { return; }
        this.listItemsPedido = JSON.parse(atob(this.storageService.get('sys::order')));
        this.miPedido = JSON.parse(atob(this.storageService.get('sys::order::all')));
        this.setCountTotalImtesPedido();
        this.miPedidoSource.next(this.miPedido);
        // actualizar // buscar cada item en el obj carta
        this.listItemsPedido.map((item) => {
            // if (item.isalmacen === 0) { //
            this.objCarta.carta.map((cat) => {
                cat.secciones.map((sec) => {
                    const itemUpdate = sec.items.filter((x) => x.idcarta_lista === item.idcarta_lista)[0];
                    if (itemUpdate) {
                        // itemUpdate.cantidad = item.cantidad;
                        itemUpdate.cantidad_seleccionada = item.cantidad_seleccionada;
                        itemUpdate.itemtiposconsumo = item.itemtiposconsumo;
                    }
                });
            });
            // }
        });
        // this.laCartaObjSource.next(this.objCarta);
    }
    // actualiza la carta del pedido reseteado por tiempo limite
    // solo local porque a los demas se le emite el socket
    // el socket notifica a todos incluyendo al remitente lo que hace esta funcion obsoleta
    updatePedidoFromClear() {
        // actualizar // buscar cada item en el obj carta
        if (!this.listItemsPedido) {
            return;
        }
        this.listItemsPedido.map((item) => {
            if (item.isalmacen === 0) {
                this.objCarta.carta.map((cat) => {
                    cat.secciones.map((sec) => {
                        const itemUpdate = sec.items.filter((x) => x.isporcion !== 'ND' && x.idcarta_lista === item.idcarta_lista)[0];
                        if (itemUpdate) {
                            itemUpdate.cantidad = parseInt(itemUpdate.cantidad.toString(), 0) + item.cantidad_seleccionada;
                        }
                    });
                });
                // this.laCartaObjSource.next(this.objCarta);
            }
        });
        // valor en blanco para nuevo pedido
        this.prepareNewPedido();
        // this.storageService.clear('sys::h');
        // this.storageService.clear('sys::order');
        // this.storageService.clear('sys::order::all');
        // this.listItemsPedido = [];
        // this.miPedido = new PedidoModel();
        // this.miPedidoSource.next(this.miPedido);
        // this.countItemsSource.next(0);
    }
    getEstadoStockItem(stock) {
        return stock > 10 ? 'verde' : stock > 5 ? 'amarillo' : 'rojo';
    }
    // isTimeLimit(): boolean {
    //   const h2 = this.storageService.get('sys::h');
    //   const hora1 = this.time.getTime().toString().split(':');
    //   const hora2 = h2.split(':');
    //   const t1 = new Date();
    //   const t2 = new Date();
    //   // tslint:disable-next-line: radix
    //   t1.setHours(parseInt(hora2[0], 0), parseInt(hora2[1], 0), parseInt(hora2[2], 0));
    //   t2.setHours(this.time.getHours(), this.time.getMinutes(), this.time.getSeconds());
    //   const dif = t2.getTime() - t1.getTime(); // diferencia en milisegundos
    //   const difSeg = Math.floor(dif / 1000);
    //   const difMin = Math.floor(difSeg / 60);
    //   let minutos = difMin % 60; // minutos
    //   minutos = minutos < 0 ? minutos * -1 : minutos;
    //   return minutos > this.max_minute_order ? true : false;
    // }
    // <------ storage ---- > ///
    // <------ reglas de la carta ----> //
    validarReglasCarta(rules) {
        // let diferencia = 0;
        let xSecc_bus = 0;
        let xSecc_detalle = 0;
        let xCantidadBuscar = 0;
        let xCantidadBuscarSecc_detalle = 0;
        let diferencia = 0;
        let xPrecio_item_bus = 0;
        let xPrecio_mostrado = 0; // preciounitario * cantidad precio_total_cal
        // reset precio_total_calc -> precio_total;
        this.miPedido.tipoconsumo
            .map((tpc) => {
            tpc.secciones.map((z) => {
                z.items.map((n) => n.precio_total_calc = null);
            });
        });
        rules.map((regla) => {
            xSecc_bus = regla.idseccion;
            xSecc_detalle = regla.idseccion_detalle;
            xCantidadBuscar = this.countCantItemsFromSeccion(xSecc_bus);
            xCantidadBuscarSecc_detalle = this.countCantItemsFromSeccion(xSecc_detalle);
            diferencia = xCantidadBuscar - xCantidadBuscarSecc_detalle;
            diferencia = diferencia < 0 ? xCantidadBuscar : diferencia; // no valores negativos
            // console.log('diferencia reglas', diferencia);
            this.miPedido.tipoconsumo
                .map((tpc) => {
                tpc.secciones
                    .filter((z) => z.idseccion.toString() === xSecc_detalle.toString())
                    .map((z) => {
                    z.items
                        .map((n, i) => {
                        const precioUnitario_item = parseFloat(n.precio);
                        const cant_item = n.cantidad_seleccionada;
                        xPrecio_mostrado = n.precio_total_calc !== null ? n.precio_total_calc : n.precio_total;
                        xPrecio_item_bus = xPrecio_mostrado;
                        if (xCantidadBuscar >= xCantidadBuscarSecc_detalle) {
                            xPrecio_item_bus = 0;
                        }
                        else if (diferencia > 0) {
                            xPrecio_item_bus = diferencia * precioUnitario_item;
                            xPrecio_item_bus = xPrecio_mostrado - xPrecio_item_bus; // descuenta del precio que se muestra en pantalla( precio que ya fue procesado)
                            xPrecio_item_bus = xPrecio_item_bus < 0 ? 0 : xPrecio_item_bus;
                            diferencia = diferencia - cant_item < 0 ? 0 : diferencia - cant_item;
                        }
                        n.precio_total_calc = parseFloat(xPrecio_item_bus.toString()); //
                        n.precio_print = parseFloat(xPrecio_item_bus.toString()); //
                        n.cantidad_descontado = cant_item;
                    });
                });
            });
        });
    }
    countCantItemsFromSeccion(seccionSearch) {
        let sum = 0;
        this.miPedido.tipoconsumo
            .map((tpc) => {
            tpc.secciones.map((z) => {
                sum += z.items
                    .filter((x) => x.idseccion.toString() === seccionSearch.toString())
                    .map((x) => x.cantidad_seleccionada)
                    .reduce((a, b) => a + b, 0);
            });
        });
        return sum;
    }
    // devuelve cantidad item filtrando tipoconsumo y seccion
    countCantItemsFromTpcSeccion(tipoconsumo, seccionSearch) {
        let sum = 0;
        this.miPedido.tipoconsumo
            .filter((tpc) => tpc.idtipo_consumo.toString() === tipoconsumo.toString())
            .map((tpc) => {
            tpc.secciones
                .map((z) => {
                sum += z.items
                    .filter((x) => x.idseccion.toString() === seccionSearch.toString())
                    .map((x) => x.cantidad_seleccionada)
                    .reduce((a, b) => a + b, 0);
            });
        });
        return sum;
    }
    // devuelve cantidad tipoconsumo en el pedido, es decir cuanto delivery o cuantos para llevar hay // se usa calculo total delivery app cliente
    countCantItemsFromTpc(tipoconsumo) {
        let sum = 0;
        this.miPedido.tipoconsumo
            .filter((tpc) => tpc.idtipo_consumo.toString() === tipoconsumo.toString())
            .map((tpc) => {
            tpc.secciones
                .map((z) => {
                sum += z.items
                    .map((x) => x.cantidad_seleccionada)
                    .reduce((a, b) => a + b, 0);
            });
        });
        return sum;
    }
    // <------ reglas de la carta ---->//
    // <------ sub totales ---->//
    // isClienteDelivery = si es delivery el costo del servicio es segun calculo
    getArrSubTotales(rulesSubTotales) {
        const subTotal = this.getSubTotalMiPedido();
        const isCalcCostoServicioDelivery = this.establecimientoService.establecimiento.pwa_delivery_hablitar_calc_costo_servicio === 1;
        const comisionFijaComercioNoAfiliado = this.establecimientoService.establecimiento.pwa_delivery_comision_fija_no_afiliado; // comision fija comercio no afiliado (plaza vea cualquier pedido la comision es 2 para la platafoma)
        this.pwa_delivery_servicio_propio = this.establecimientoService.establecimiento.pwa_delivery_servicio_propio === 1;
        let sumaTotal = subTotal;
        const arrSubtotales = [];
        let _arrSubtotales = {};
        _arrSubtotales.id = 0;
        _arrSubtotales.descripcion = 'SUB TOTAL';
        _arrSubtotales.esImpuesto = 0;
        _arrSubtotales.visible = true;
        _arrSubtotales.quitar = false;
        _arrSubtotales.tachado = false;
        _arrSubtotales.visible_cpe = true;
        _arrSubtotales.importe = parseFloat(subTotal.toString()).toFixed(2);
        arrSubtotales.push(_arrSubtotales);
        // porcentajes / impuestos / otros servicios
        const rptPorcentajes = [];
        const arrPorcentajes = rulesSubTotales.filter(x => x.tipo === 'p');
        arrPorcentajes.map(p => {
            const porcentaje = p.monto / 100;
            const isImpuesto = p.es_impuesto === 1 ? true : false;
            const isActivo = p.activo === 0 ? true : false;
            const importe = (subTotal * porcentaje).toFixed(2);
            const rpt = {};
            rpt.id = p.tipo + p.id;
            rpt.descripcion = p.descripcion;
            rpt.esImpuesto = p.es_impuesto;
            rpt.visible = true;
            rpt.quitar = false;
            rpt.tachado = false;
            rpt.visible_cpe = isImpuesto;
            // rpt.importe = isImpuesto ? isActivo ? importe : 0 : importe;
            // rpt.importe = parseFloat(rpt.importe.toString()).toFixed(2);
            // sumaTotal += parseFloat(rpt.importe);
            // implement igv 030220
            if (rpt.descripcion === 'I.G.V') {
                rpt.importe = isActivo ? porcentaje : 0;
            }
            else {
                rpt.importe = isImpuesto ? isActivo ? importe : 0 : importe;
                rpt.importe = parseFloat(rpt.importe.toString()).toFixed(2);
                sumaTotal += parseFloat(rpt.importe);
            }
            // no muestra si tienen valor 0
            if (rpt.importe !== 0) {
                rptPorcentajes.push(rpt);
            }
        });
        // otros no porcentajes // taper // delivery
        let importeOtros = 0;
        const rptOtros = [];
        const arrOtros = rulesSubTotales.filter(x => x.tipo === 'a');
        // si existe estableciiento en localstorage entonces es un clienteDelivery
        let isClienteDelivery = this.establecimientoService.get().idsede ? true : false;
        let isTieneDelivery = false; // si tiene la opcion de delivery configurado
        let isAddDelivery = isClienteDelivery; // si agrega delivery
        arrOtros.map(p => {
            const rpt = {};
            // si es servicio delivery y si es clienteDelivery
            if ((p.descripcion.toUpperCase().indexOf('DELIVERY') > -1
                || p.descripcion.toUpperCase().indexOf('ENTREGA') > -1)
                && isClienteDelivery) {
                isAddDelivery = true;
                isTieneDelivery = true;
                // si tiene propio servicio
                p.descripcion = 'Entrega';
                if (this.pwa_delivery_servicio_propio && !isCalcCostoServicioDelivery) { // si tiene servicio propio y no esta habilitado el calculo automatico
                    importeOtros = parseFloat(p.monto);
                }
                else {
                    isTieneDelivery = false; // para que calculo abajo
                    importeOtros = this.establecimientoService.get().c_servicio || this.establecimientoService.get().c_minimo;
                    // verifica si en elpedido hay delivery
                    const cantidad = this.countCantItemsFromTpc(p.idtipo_consumo);
                    isClienteDelivery = cantidad > 0;
                    isAddDelivery = cantidad > 0;
                    return;
                }
            }
            else {
                importeOtros = parseFloat(p.monto); // aplica a todo el pedido
            }
            // const cantidad = this.countCantItemsFromTpcSeccion(p.idtipo_consumo, p.idseccion);
            // if ( cantidad === 0 ) { return; } // si no encontro items con esos criterios
            if (p.nivel === 0) { // aplica por item
                const cantidad = this.countCantItemsFromTpcSeccion(p.idtipo_consumo, p.idseccion);
                if (cantidad === 0) {
                    return;
                } // si no encontro items con esos criterios
                const _costoXCantItems = this.calcCostoCantItemsDelivery();
                importeOtros = (cantidad * parseFloat(p.monto)) + _costoXCantItems;
            }
            rpt.id = p.tipo + p.id;
            rpt.descripcion = p.descripcion;
            rpt.esImpuesto = p.es_impuesto;
            rpt.visible = true;
            rpt.quitar = true;
            rpt.tachado = false;
            rpt.visible_cpe = false;
            rpt.importe = parseFloat(importeOtros.toString()).toFixed(2);
            sumaTotal += parseFloat(rpt.importe);
            // juntar si son del mismo tipo ej: taper - llevar, taper - delivery
            const findItem = rptOtros.filter((x) => x.descripcion === rpt.descripcion)[0];
            if (findItem) {
                findItem.importe += parseFloat(rpt.importe);
            }
            else {
                rptOtros.push(rpt);
            }
        });
        // si no tiene la opcion delivery y es un clienteDelivery lo agrega // o requiere el servicio de calcular distancia
        if (isAddDelivery && !isTieneDelivery && isClienteDelivery && (!this.pwa_delivery_servicio_propio || isCalcCostoServicioDelivery)) {
            // const cantidad = this.countCantItemsFromTpcSeccion(p.idtipo_consumo, p.idseccion);
            // if ( cantidad > 0 ) {
            const _costoXCantItems = this.calcCostoCantItemsDelivery();
            const costoServicio = _costoXCantItems + (this.establecimientoService.get().c_servicio || this.establecimientoService.get().c_minimo);
            const rpt = {};
            // costo del servicio mas comision fija comercio no afiliado
            const _costoServicio = costoServicio + comisionFijaComercioNoAfiliado;
            rpt.id = -2;
            rpt.descripcion = 'Entrega';
            rpt.esImpuesto = 0;
            rpt.visible = true;
            rpt.quitar = false;
            rpt.tachado = false;
            rpt.visible_cpe = false;
            rpt.importe = parseFloat(_costoServicio.toString()).toFixed(2);
            // rpt.importe = parseFloat(importeOtros.toString()).toFixed(2);
            sumaTotal += parseFloat(rpt.importe);
            rptOtros.push(rpt);
            // }
        }
        // juntamos
        rptPorcentajes.map(y => arrSubtotales.push(y));
        rptOtros.map(y => arrSubtotales.push(y));
        // IGV filtramos los que no es impuesto IGV | 030220
        const rowSubTotal = arrSubtotales.filter(x => x.descripcion === 'SUB TOTAL')[0];
        const rowImporteIGV = arrSubtotales.filter(x => x.descripcion === 'I.G.V')[0];
        let _importeIGV = rowImporteIGV ? rowImporteIGV.importe : 0;
        let _importeSubTotal = rowSubTotal ? rowSubTotal.importe : 0;
        if (_importeIGV > 0) {
            _importeIGV = parseFloat((_importeSubTotal * _importeIGV).toString()).toFixed(2);
            _importeSubTotal = _importeSubTotal - _importeIGV;
            rowImporteIGV.importe = _importeIGV;
            rowSubTotal.importe = _importeSubTotal.toFixed(2);
        }
        /// IGV --->
        _arrSubtotales = {};
        _arrSubtotales.id = 0;
        _arrSubtotales.esImpuesto = 0;
        _arrSubtotales.descripcion = 'TOTAL';
        _arrSubtotales.visible = true;
        _arrSubtotales.quitar = false;
        _arrSubtotales.tachado = false;
        _arrSubtotales.visible_cpe = true;
        _arrSubtotales.importe = parseFloat(sumaTotal.toString()).toFixed(2);
        arrSubtotales.push(_arrSubtotales);
        // console.log('totales', arrSubtotales);
        return arrSubtotales;
    }
    calcCostoCantItemsDelivery() {
        let rpt = 0;
        const _cantItemScala = parseInt(this.deliveryArrConstantes.cantItemsScala.toString(), 0);
        if (this.deliveryCanItemsInOrder > _cantItemScala) {
            const _div = this.deliveryCanItemsInOrder / this.deliveryArrConstantes.cantItemsScala;
            // _div = Math.floor(_div);
            if (_div > 1) {
                rpt = Math.floor(_div) * this.deliveryArrConstantes.costoScala;
            }
        }
        else {
            rpt = 0;
        }
        return rpt;
    }
    getSubTotalMiPedido() {
        let sumSubTotal = 0;
        let cantItemOrder = 0;
        this.miPedido.tipoconsumo
            .map((tpc) => {
            tpc.secciones.map((z) => {
                sumSubTotal += z.items
                    .map((x) => {
                    cantItemOrder += x.cantidad_seleccionada;
                    return x.precio_print;
                })
                    .reduce((a, b) => a + b, 0);
            });
        });
        // cantidad total de items para calcular costo servicio delivery
        this.deliveryCanItemsInOrder = cantItemOrder;
        return sumSubTotal;
    }
    // devuelve el importe total del item de la lista mi pedido
    getImporteTotalItemFromMiPedido(item) {
        // const _itemFind = this.findOnlyItemMiPedido(item);
        // return _itemFind ? _itemFind.precio_total : 0;
        let sumSubTotal = 0;
        this.miPedido.tipoconsumo
            .map((tpc) => {
            tpc.secciones.map((z) => {
                sumSubTotal += z.items
                    .filter((x) => x.iditem === item.iditem)
                    .map((x) => x.precio_print)
                    .reduce((a, b) => a + b, 0);
            });
        });
        return sumSubTotal;
    }
    // <------ sub totales ---->//
    // <------- timer limit ----> //
    playTimerLimit() {
        this.timerLimitService.playCountTimerLimit();
    }
    stopTimerLimit() {
        this.timerLimitService.resetCountTimerLimit();
    }
    restoreTimerLimit() {
        this.timerLimitService.resetCountTimerLimit();
    }
    // <------- timer limit ----> //
    // <--------- listen change -------> //
    // escuha todos los cambios echos en las cantidades, from carta y listItemPedido ----resumen pedido
    listenChangeCantItem() {
        this.socketService.onItemModificado().subscribe((res) => {
            let _itemInCarta;
            // tiene lista de items en porciones compartidaas (Ej 1/8 pollo 1/4 pollo)
            if (res.listItemPorcion != null) {
                res.listItemPorcion.map((x) => {
                    _itemInCarta = this.findItemCartaByIdCartaLista(x.idcarta_lista);
                    const cantidadSet = parseInt(x.cantidad, 0);
                    _itemInCarta.cantidad = cantidadSet ? cantidadSet : parseInt(res.item.cantidad.toString(), 0);
                    this.setCantidadItemModificadoPwa(res.item, _itemInCarta, parseInt(x.cantidad, 0), true);
                });
            }
            else {
                res = res.item;
                _itemInCarta = this.findItemCarta(res);
                this.setCantidadItemModificadoPwa(res, _itemInCarta);
            }
            // actualiza subitems si son porciones o productos
            // const _itemInList = this.findItemListPedido(res);
            // _itemInCarta.subitems = res.subitems;
            // actualizar cantidades subitems si existe
            // if ( res.subitems ) {
            //   // res.subitems.map((asub: SubItem) => {
            //   //   // _itemInCarta.subitems.filter((bsub: SubItem) => asub.iditem_subitem === bsub.iditem_subitem)[0].cantidad = asub.cantidad;
            //   // });
            //   res.subitems.map((subitemOp: SubItemContent) => {
            //     subitemOp.opciones.map((subitem: SubItem) => {
            //       _itemInCarta.subitems.map((s: SubItemContent) => {
            //         const itemFind = s.opciones.filter((_subItem: SubItem) => _subItem.iditem_subitem === parseInt(subitem.iditem_subitem.toString(), 0))[0];
            //         if ( itemFind ) {
            //           itemFind.cantidad = subitem.cantidad;
            //         }
            //       });
            //     });
            //   });
            //   // _itemInCarta.subitems = res.subitems;
            // }
            // _itemInCarta.cantidad = parseInt(res.cantidad.toString(), 0);
            // this.itemStockChangeSource.next(_itemInCarta);
            // console.log('socket list', this.listItemsPedido);
        });
        this.socketService.onItemResetCant().subscribe((res) => {
            let _itemInCarta;
            // tiene lista de items en porciones compartidaas (Ej 1/8 pollo 1/4 pollo)
            if (res.listItemPorcion != null) {
                res.listItemPorcion.map((x) => {
                    _itemInCarta = this.findItemCartaByIdCartaLista(x.idcarta_lista);
                    _itemInCarta.cantidad = parseInt(x.cantidad, 0);
                    this.setCantidadItemModificadoPwa(res.item, _itemInCarta, parseInt(x.cantidad, 0), true);
                    // _itemInCarta.subitems = res.subitems;
                    this.itemStockChangeSource.next(_itemInCarta);
                });
            }
            else {
                res = res.item;
                _itemInCarta = this.findItemCarta(res);
                _itemInCarta.cantidad = parseInt(res.cantidad.toString(), 0);
                _itemInCarta.subitems = res.subitems;
                this.itemStockChangeSource.next(_itemInCarta);
                // this.setCantidadItemModificadoPwa(res.item, _itemInCarta);
            }
            // const _itemInCarta = this.findItemCarta(res);
            // const _itemInList = this.findItemListPedido(res);
            // _itemInCarta.cantidad = Number.parseFloat(_itemInCarta.cantidad.toString()) +  Number.parseFloat(res.cantidad_reset.toString());
            // _itemInCarta.cantidad = parseInt(res.cantidad.toString(), 0);
            // _itemInCarta.subitems = res.subitems;
            // console.log('cant reset ', _itemInCarta);
            // this.itemStockChangeSource.next(_itemInCarta);
            // _itemInList.cantidad += res.cantidad_reset;
        });
        // from monitoreo stock - add item in carta
        this.socketService.onNuevoItemAddInCarta().subscribe((res) => {
            // console.log('onNuevoItemAddInCarta', res);
            this.addItemInCarta(res);
        });
        // tiempo limite
        this.socketService.onGetDatosSede().subscribe((res) => {
            this.objDatosSede = res[0];
            this.objDatosSede.datossede[0].longitude = parseFloat(this.objDatosSede.datossede[0].longitude);
            this.objDatosSede.datossede[0].latitude = parseFloat(this.objDatosSede.datossede[0].latitude);
            this.listenStatusService.setHayDatosSede(true);
            // nombre sede
            localStorage.setItem('sys::s', this.objDatosSede.datossede[0].nombre + '|' + this.objDatosSede.datossede[0].ciudad);
            // console.log('datos de la sede ps', this.objDatosSede);
            this.max_minute_order = res[0].datossede[0].pwa_time_limit;
            // this.pwa_delivery_importe_min = res[0].datossede[0].pwa_delivery_importe_min;
            this.pwa_delivery_servicio_propio = res[0].datossede[0].pwa_delivery_servicio_propio === 0 ? false : true;
            this.timerLimitService.maxTime = this.max_minute_order * 100;
        });
        this.timerLimitService.countdown$.subscribe((countTime) => {
            switch (countTime) {
                case 1:
                    // if ( this._snackBar._openedSnackBarRef ) {return; }
                    // this._snackBar.open(`Recuerde, ${this.max_minute_order} minutos para enviar su pedido.`, '', {
                    //   duration: 3000,
                    // });
                    this.isPreAvisoVisible = false;
                    break;
                case 80:
                    if (!this.isPreAvisoVisible) {
                        this.isPreAvisoVisible = true;
                        this._snackBar.open('Proximo a cumplir el tiempo de envio.', '', {
                            duration: 2000,
                        });
                    }
                    break;
                case 100:
                    this._snackBar.open('Tiempo agotado, debe realizar un nuevo pedido.', '', {
                        duration: 3000,
                    });
                    break;
            }
        });
        this.timerLimitService.isTimeLimitComplet$.subscribe((res) => {
            // tiempo completado // reseteamos
            if (res === true) {
                this.resetAllNewPedido();
                this.navigatorService.setPageActive('carta');
            }
        });
    }
    setCantidadItemModificadoPwa(res, _itemInCarta, cantidadSet = null, isSubItemPorcion = false) {
        // actualizar cantidades subitems si existe
        if (res.subitems && res.idcarta_lista === _itemInCarta.idcarta_lista) {
            // if ( !isReset ) {
            //   _itemInCarta.cantidad = cantidadSet ? cantidadSet : parseInt(res.cantidad.toString(), 0);
            // }
            // res.subitems.map((asub: SubItem) => {
            //   // _itemInCarta.subitems.filter((bsub: SubItem) => asub.iditem_subitem === bsub.iditem_subitem)[0].cantidad = asub.cantidad;
            // });
            res.subitems.map((subitemOp) => {
                subitemOp.opciones.map((subitem) => {
                    _itemInCarta.subitems.map((s) => {
                        const itemFind = s.opciones.filter((_subItem) => _subItem.iditem_subitem === parseInt(subitem.iditem_subitem.toString(), 0))[0];
                        if (itemFind) {
                            if (itemFind.cantidad !== 'ND') {
                                itemFind.cantidad = subitem.cantidad;
                                // buscar los demas items que tengan este subitem porcion o producto
                                const idFind = itemFind.idproducto.toString() + itemFind.idporcion.toString();
                                const _otherListSubItem = this.findSubItemCartaById(idFind, res.iditem.toString());
                                _otherListSubItem.map((x) => {
                                    x.cantidad = subitem.cantidad;
                                });
                            }
                        }
                    });
                });
            });
            // _itemInCarta.subitems = res.subitems;
        }
        // _itemInCarta.cantidad = parseInt(res.cantidad.toString(), 0);
        // _itemInCarta.cantidad = cantidadSet ? cantidadSet : parseInt(res.cantidad.toString(), 0);
        if (!isSubItemPorcion) {
            _itemInCarta.cantidad = cantidadSet ? cantidadSet : parseInt(res.cantidad.toString(), 0);
        }
        this.itemStockChangeSource.next(_itemInCarta);
    }
    // dar formato al pedido
    darFormatoPedido(res) {
        const _miPedidoCuenta = new src_app_modelos_pedido_model__WEBPACK_IMPORTED_MODULE_4__["PedidoModel"]();
        const c_tiposConsumo = [];
        res.data.map((tp) => {
            let hayTpc = c_tiposConsumo.filter(x => x.idtipo_consumo === tp.idtipo_consumo)[0];
            if (!hayTpc) {
                hayTpc = new src_app_modelos_tipoconsumo_model__WEBPACK_IMPORTED_MODULE_7__["TipoConsumoModel"];
                hayTpc.descripcion = tp.des_tp;
                hayTpc.idtipo_consumo = parseInt(tp.idtipo_consumo, 0);
                c_tiposConsumo.push(hayTpc);
            }
        });
        c_tiposConsumo.map((tp) => {
            res.data
                .filter((_tp) => _tp.idtipo_consumo === tp.idtipo_consumo)
                .map((_s, i) => {
                // let haySeccion = !tp.secciones ? null : tp.secciones.filter((s: SeccionModel) => s.idseccion.toString() === _s.idseccion.toString())[0];
                let haySeccion = tp.secciones.filter((s) => s.idseccion.toString() === _s.idseccion.toString())[0];
                if (!haySeccion) {
                    haySeccion = new src_app_modelos_seccion_model__WEBPACK_IMPORTED_MODULE_6__["SeccionModel"];
                    haySeccion.idseccion = _s.idseccion.toString();
                    haySeccion.des = _s.des_seccion;
                    haySeccion.sec_orden = _s.sec_orden;
                    haySeccion.ver_stock_cero = 0;
                    tp.count_items_seccion = i + 1;
                    tp.secciones.push(haySeccion);
                }
            });
        });
        // items
        c_tiposConsumo.map((tp) => {
            tp.secciones.map((s) => {
                res.data
                    .filter((_tp) => _tp.idtipo_consumo.toString() === tp.idtipo_consumo.toString() && _tp.idseccion.toString() === s.idseccion.toString())
                    .map((_i, i) => {
                    const hayItem = new src_app_modelos_item_model__WEBPACK_IMPORTED_MODULE_3__["ItemModel"];
                    hayItem.des = _i.descripcion;
                    hayItem.detalles = '';
                    hayItem.iditem = _i.iditem;
                    hayItem.idcarta_lista = _i.idcarta_lista;
                    hayItem.idseccion = _i.idseccion;
                    hayItem.isalmacen = _i.isalmacen;
                    hayItem.cantidad_seleccionada = parseInt(_i.cantidad, 0);
                    hayItem.precio = _i.punitario;
                    hayItem.precio_print = parseFloat(_i.ptotal);
                    hayItem.precio_total = parseFloat(_i.ptotal);
                    hayItem.procede = _i.procede === '0' ? 1 : 0;
                    hayItem.seccion = _i.des_seccion;
                    hayItem.img = _i.img;
                    hayItem.subitems_view = _i.subitems === 'null' || _i.subitems === '' || !_i.subitems ? [] : JSON.parse(_i.subitems);
                    s.count_items = i + 1;
                    s.items = s.items ? s.items : [];
                    s.items.push(hayItem);
                });
            });
        });
        _miPedidoCuenta.tipoconsumo = c_tiposConsumo;
        return _miPedidoCuenta;
    }
    // cerrar session
    cerrarSession() {
        this.socketService.closeConnection();
        this.navigatorService.cerrarSession();
    }
};
MipedidoService.ctorParameters = () => [
    { type: _storage_service__WEBPACK_IMPORTED_MODULE_8__["StorageService"] },
    { type: _socket_service__WEBPACK_IMPORTED_MODULE_9__["SocketService"] },
    { type: _timer_limit_service__WEBPACK_IMPORTED_MODULE_10__["TimerLimitService"] },
    { type: _navigator_link_service__WEBPACK_IMPORTED_MODULE_11__["NavigatorLinkService"] },
    { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_14__["MatSnackBar"] },
    { type: _utilitarios_service__WEBPACK_IMPORTED_MODULE_12__["UtilitariosService"] },
    { type: _listen_status_service__WEBPACK_IMPORTED_MODULE_13__["ListenStatusService"] },
    { type: _establecimiento_service__WEBPACK_IMPORTED_MODULE_17__["EstablecimientoService"] },
    { type: _crud_http_service__WEBPACK_IMPORTED_MODULE_18__["CrudHttpService"] }
];
MipedidoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_storage_service__WEBPACK_IMPORTED_MODULE_8__["StorageService"],
        _socket_service__WEBPACK_IMPORTED_MODULE_9__["SocketService"],
        _timer_limit_service__WEBPACK_IMPORTED_MODULE_10__["TimerLimitService"],
        _navigator_link_service__WEBPACK_IMPORTED_MODULE_11__["NavigatorLinkService"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_14__["MatSnackBar"],
        _utilitarios_service__WEBPACK_IMPORTED_MODULE_12__["UtilitariosService"],
        _listen_status_service__WEBPACK_IMPORTED_MODULE_13__["ListenStatusService"],
        _establecimiento_service__WEBPACK_IMPORTED_MODULE_17__["EstablecimientoService"],
        _crud_http_service__WEBPACK_IMPORTED_MODULE_18__["CrudHttpService"]])
], MipedidoService);



/***/ }),

/***/ "./src/app/shared/services/navigator-link.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/shared/services/navigator-link.service.ts ***!
  \***********************************************************/
/*! exports provided: NavigatorLinkService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigatorLinkService", function() { return NavigatorLinkService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/internal/BehaviorSubject */ "./node_modules/rxjs/internal/BehaviorSubject.js");
/* harmony import */ var rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _info_token_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./info-token.service */ "./src/app/shared/services/info-token.service.ts");
/* harmony import */ var _listen_status_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./listen-status.service */ "./src/app/shared/services/listen-status.service.ts");

// servicio adminsitra el navigator link -- carta y resumen






let NavigatorLinkService = class NavigatorLinkService {
    constructor(router, infoTokenService, listenService) {
        // router.events.pipe(
        //   filter((event: NavigationEvent) => {
        //     return (event instanceof NavigationStart);
        //   })
        // ).subscribe(
        //   (event: NavigationStart) => {
        //     console.log('navigation', event);
        //     if (event.navigationTrigger !== 'popstate') {
        //       let _urlParams: any;
        //       try {
        //         _urlParams = event.url.split(';')[1].split('=')[1];
        //       } catch (error) {
        //         // this.managerGoBack();
        //         _urlParams = [];
        //         return;
        //       }
        this.router = router;
        this.infoTokenService = infoTokenService;
        this.listenService = listenService;
        this.disabledBack = false;
        this.resNavigatorSource = new rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"]([]);
        this.resNavigatorSourceObserve$ = this.resNavigatorSource.asObservable();
        this.pageActive = 'carta';
        this.resNavigator = [];
        this.historyNavigator = [];
        this.lastUrlHistory = '';
        this.nowUrl = '';
        //       if (_urlParams.length > 0) {
        //         this.resNavigator.pageActive = this.pageActive;
        //         this.resNavigator.url = _urlParams;
        //         // this.saveHistoryPageActive(this.pageActive, _urlParams);
        //         this.resNavigatorSource.next(this.resNavigator);
        //       }
        //     }
        //   });
        this.listenEventNavigator();
    }
    listenEventNavigator() {
        this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(e => e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationStart"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["bufferCount"])(2, 1)).subscribe((e) => {
            if (e !== null && e !== undefined) {
                this.nowUrl = e[0]['url'];
                // if ( this.disabledBack ) {return false; }
                if (e[1].navigationTrigger === 'popstate') {
                    // this.managerGoZonaEstablecimiento(e[0]['url'], e); // a la pagina que va
                    // desahabilitar boton back
                    if (this.disabledBack) {
                        return false;
                    }
                    const elUrl = e[0]['url'];
                    const _url = elUrl.indexOf(';') ? e[0]['url'].substr(1).split(';')[1].split('=')[1] : e[0]['url'];
                    // const _nextUrl = e[1]['url'].substr(1).split(';')[1].split('=')[1];
                    if (_url.length > 0) {
                        this.lastUrlHistory = _url; // last url -- de donde viene
                        this.managerGoBack(_url, '');
                    }
                }
                // console.log(e[0]);
            }
        });
    }
    setPageActive(_pageActive) {
        this.pageActive = _pageActive;
        this.lastUrlHistory = _pageActive !== 'carta' ? _pageActive : this.lastUrlHistory;
        const itemHistory = this.findPageActiveInHistory(_pageActive);
        if (itemHistory) { // si existe
            this.addLink(itemHistory.url);
        }
        else {
            // this.saveHistoryPageActive(_pageActive, _pageActive);
            this.addLink(_pageActive);
        }
        this.resNavigator.pageActive = _pageActive;
        this.resNavigator.url = itemHistory ? itemHistory.url : _pageActive;
        this.resNavigatorSource.next(this.resNavigator);
    }
    saveHistoryPageActive(key, url) {
        this.historyNavigator[key] = [];
        this.historyNavigator[key].key = key;
        this.historyNavigator[key].url = url;
    }
    findPageActiveInHistory(_key) {
        return Object.values(this.historyNavigator).filter(x => x.key === _key)[0];
    }
    addLink(params) {
        this.router.navigate(['.', { state: params }]);
        this.saveHistoryPageActive(this.pageActive, params);
    }
    cerrarSession(reload = false) {
        if (this.infoTokenService.isDelivery()) {
            this.router.navigate(['../zona-delivery']);
        }
        else {
            this.router.navigate(['../'])
                .then(() => {
                if (reload) {
                    window.location.reload();
                }
            });
        }
    }
    // maneja los back
    // si es [mipedido-confirma] -> ['mipedido']
    // si es [mipedido, estado] -> 'carta' - > historial
    // si es [carta-i-secciones-items] -> [carta-i-secciones]
    // si es [carta-i-secciones] -> [carta-i-]
    // si es [carta-i-] -> 'carta'
    // si es [carta] -> inicio
    managerGoBack(previusUrl, nexturl) {
        // const _url = this.lastUrlHistory;
        let _pageActive = '';
        // console.log('managerGoBack', previusUrl);
        switch (previusUrl) {
            case 'carta-i-secciones-items':
                _pageActive = 'carta';
                this.addLink('carta-i-secciones');
                break;
            case 'carta-i-secciones':
                _pageActive = 'carta';
                this.addLink('carta-i-');
                break;
            case 'carta-i-':
                _pageActive = 'carta-o-';
                this.addLink('carta-o-');
                // console.log('=========================== listo para salir');
                this.listoParaSalir();
                break;
            // case 'carta-o':
            //   _pageActive = 'carta';
            //   this.addLink('carta');
            //   console.log('listo para salir');
            //   break;
            case 'mipedido-confirma':
                _pageActive = 'mipedido';
                this.addLink('mipedido');
                break;
            case 'mipedido':
                _pageActive = 'carta';
                this.addLink('carta');
                this.listoParaSalir();
                // console.log('=========================== listo para salir');
                break;
            case 'estado':
                _pageActive = 'carta';
                // this.findAndApplyHistory(_pageActive);
                break;
            case 'carta':
                // _pageActive = '';
                // this.router.navigate(['../']);
                _pageActive = 'carta';
                break;
            case 'lanzar-encuesta':
                _pageActive = 'lanzar-encuesta';
                break;
        }
        if (_pageActive !== '') {
            this.pageActive = _pageActive;
            this.setPageActive(_pageActive);
        }
    }
    // // control alos backs de zona establecimiento
    // private managerGoZonaEstablecimiento(arrUrl: any, e): void {
    //   // console.log('arrUrl', arrUrl);
    //   // previusUrl = previusUrl.split('?')[0];
    //   const urlFrom = arrUrl.split('?')[0];
    //   // const urlTo = arrUrl[1].split('?')[0];
    //   let _pageActive = '';
    //   switch (urlFrom) {
    //     case '/zona-delivery/establecimientos':
    //       _pageActive = '../inicio';
    //       // console.log('desde navigatot service establecimientos');
    //       // this.disabledBack = true;
    //       // this.disableGoBack();
    //       break;
    //     case '/zona-delivery/pedidos':
    //       console.log('desde navigatot service establecimientos');
    //       _pageActive = '/zona-delivery/establecimientos';
    //       // this.disabledBack = false;
    //       break;
    //     case '/zona-delivery/categorias':
    //       console.log('desde navigatot service establecimientos');
    //       _pageActive = '/zona-delivery/establecimientos';
    //       break;
    //     case '/zona-delivery':
    //       console.log('desde zona-delivery');
    //       _pageActive = '../';
    //       e = null;
    //       this.disableGoBack();
    //       break;
    //   }
    //   if (_pageActive !== '' ) {
    //     this._router(_pageActive);
    //   }
    // }
    // usar router de servicio
    _router(link) {
        this.router.navigate([link]);
        return false;
    }
    disableGoBack() {
        this.disabledBack = true;
        history.pushState(null, null, location.href);
        window.onpopstate = function () {
            history.go(1);
        };
    }
    listoParaSalir() {
        if (this.infoTokenService.isDelivery()) {
            // abrir cerrarr
            // if ( this.estadoPedidoClienteService.estadoPedido.hayPedidoCliente ) {
            this.listenService.setIsOutEstablecimientoDelivery(true);
            // }
        }
    }
};
NavigatorLinkService.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _info_token_service__WEBPACK_IMPORTED_MODULE_5__["InfoTockenService"] },
    { type: _listen_status_service__WEBPACK_IMPORTED_MODULE_6__["ListenStatusService"] }
];
NavigatorLinkService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _info_token_service__WEBPACK_IMPORTED_MODULE_5__["InfoTockenService"],
        _listen_status_service__WEBPACK_IMPORTED_MODULE_6__["ListenStatusService"]])
], NavigatorLinkService);



/***/ }),

/***/ "./src/app/shared/services/socket.service.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/services/socket.service.ts ***!
  \***************************************************/
/*! exports provided: SocketService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocketService", function() { return SocketService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs_internal_Observable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/internal/Observable */ "./node_modules/rxjs/internal/Observable.js");
/* harmony import */ var rxjs_internal_Observable__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_Observable__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _config_config_const__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../config/config.const */ "./src/app/shared/config/config.const.ts");
/* harmony import */ var src_app_modelos_item_tipoconsumo_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/modelos/item.tipoconsumo.model */ "./src/app/modelos/item.tipoconsumo.model.ts");
/* harmony import */ var _info_token_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./info-token.service */ "./src/app/shared/services/info-token.service.ts");
/* harmony import */ var rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/internal/BehaviorSubject */ "./node_modules/rxjs/internal/BehaviorSubject.js");
/* harmony import */ var rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");









let SocketService = class SocketService {
    constructor(infoTockenService, router) {
        this.infoTockenService = infoTockenService;
        this.router = router;
        // private item: ItemModel;
        this.urlSocket = _config_config_const__WEBPACK_IMPORTED_MODULE_4__["URL_SERVER_SOCKET"];
        this.isSocketOpen = false;
        this.isSocketOpenReconect = false;
        // listen is socket open
        this.isSocketOpenSource = new rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_7__["BehaviorSubject"](false);
        this.isSocketOpen$ = this.isSocketOpenSource.asObservable();
        this.msjConexSource = new rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_7__["BehaviorSubject"]('Cargando datos ...');
        this.msjConex$ = this.msjConexSource.asObservable();
        this.resTipoConsumo = [];
        this.verificandoConexion = false;
    }
    // _isOutCarta si esta fuera de la carta // si esta en la plataforma de deliverys estableciemientos
    connect(infoUser = null, opFrom = 1, _isOutCarta = false) {
        if (this.isSocketOpen) {
            this.infoTockenService.setSocketId(this.socket.id);
            return;
        } // para cuando se desconecta y conecta desde el celular
        // produccion
        // this.socket = io('/', {
        //   secure: true,
        //   rejectUnauthorized: false,
        //   forceNew: false
        // });
        const infToken = this.infoTockenService.infoUsToken || infoUser;
        const dataSocket = {
            idorg: infToken.idorg,
            idsede: infToken.idsede,
            idusuario: infToken.idusuario,
            idcliente: infToken.idcliente,
            iscliente: infToken.isCliente || false,
            isOutCarta: _isOutCarta,
            isFromApp: opFrom,
            firts_socketid: infToken.socketId
        };
        // console.log('dataSocket', dataSocket);
        // desarrollo
        this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_2__(this.urlSocket, {
            secure: true,
            rejectUnauthorized: false,
            // forceNew: true,
            query: dataSocket
            // forceNew: true
        });
        this.listenStatusSocket(); // escucha los estado del socket
        // this.socket.on('finishLoadDataInitial', () => {
        //   // setTimeout(() => {
        //     // this.isSocketOpen = true;
        //     // this.isSocketOpenSource.next(true);
        //     this.statusConexSocket(true, '');
        //     this.isSocketOpenReconect = true; // evita que cargen nuevamente las configuraciones basicas, solo carga carta
        //   // }, 1000);
        //   console.log('conected socket finishLoadDataInitial');
        // });
        // // this.socket.on('connect', (res: any) => {
        // //   this.statusConexSocket(true, 'socket event connect');
        // // });
        // this.socket.on('connect_failed', (res: any) => {
        //   console.log('itento fallido de conexion', res);
        //   this.statusConexSocket(false, 'connect_failed');
        // });
        // this.socket.on('connect_error', (res: any) => {
        //   console.log('error de conexion', res);
        //   this.statusConexSocket(false, 'connect_error');
        // });
        // this.socket.on('disconnect', (res: any) => {
        //   console.log('disconnect');
        //   this.statusConexSocket(false, 'disconnect');
        // });
        // this.onListenSocketDisconnet();
    }
    onGetCarta() {
        // if ( this.isSocketOpen ) { return new Observable(observer => {observer.next(null); }); }
        return new rxjs_internal_Observable__WEBPACK_IMPORTED_MODULE_3__["Observable"](observer => {
            this.socket.on('getLaCarta', (res) => {
                // this.objLaCartaSocket = {
                //   'carta': <CartaModel[]>res[0].carta,
                //   'bodega': <SeccionModel[]>res[0].bodega
                // };
                observer.next(res);
            });
        });
    }
    // onGetCarta() {
    //   return this.listen('getLaCarta');
    // }
    onGetTipoConsumo() {
        // if ( this.isSocketOpen ) { return new Observable(observer => {observer.next(null); }); }
        return new rxjs_internal_Observable__WEBPACK_IMPORTED_MODULE_3__["Observable"](observer => {
            this.socket.on('getTipoConsumo', (res) => {
                // this.resTipoConsumo = res;
                observer.next(res);
            });
        });
    }
    // onGetTipoConsumo() {
    //   return this.listen('getTipoConsumo');
    // }
    // verificar para eliminar
    getDataTipoConsumo() {
        const resTPC = [];
        this.resTipoConsumo.map((t) => {
            const _objTpcAdd = new src_app_modelos_item_tipoconsumo_model__WEBPACK_IMPORTED_MODULE_5__["ItemTipoConsumoModel"]();
            _objTpcAdd.descripcion = t.descripcion;
            _objTpcAdd.idtipo_consumo = t.idtipo_consumo;
            _objTpcAdd.titulo = t.titulo;
            resTPC.push(_objTpcAdd);
        });
        return resTPC;
    }
    onItemModificado() {
        return new rxjs_internal_Observable__WEBPACK_IMPORTED_MODULE_3__["Observable"](observer => {
            this.socket.on('itemModificado-pwa', (res) => {
                observer.next(res);
            });
        });
    }
    // onItemModificado() {
    //   return this.listen('observer');
    // }
    onNuevoItemAddInCarta() {
        return new rxjs_internal_Observable__WEBPACK_IMPORTED_MODULE_3__["Observable"](observer => {
            this.socket.on('nuevoItemAddInCarta', (res) => {
                observer.next(res);
            });
        });
    }
    // onNuevoItemAddInCarta() {
    //   return this.listen('nuevoItemAddInCarta');
    // }
    // cuando se recupera el stock de pedido que caduco el tiempo
    onItemResetCant() {
        return new rxjs_internal_Observable__WEBPACK_IMPORTED_MODULE_3__["Observable"](observer => {
            this.socket.on('itemResetCant-pwa', (res) => {
                observer.next(res);
            });
        });
    }
    // onItemResetCant() {
    //   return this.listen('itemResetCant');
    // }
    // load reglas de la carta y subtotales
    onReglasCarta() {
        return new rxjs_internal_Observable__WEBPACK_IMPORTED_MODULE_3__["Observable"](observer => {
            this.socket.on('getReglasCarta', (res) => {
                observer.next(res);
            });
        });
    }
    // onReglasCarta() {
    //   return this.listen('getReglasCarta');
    // }
    // datos de la sede, impresoras
    // load reglas de la carta y subtotales
    onGetDatosSede() {
        return new rxjs_internal_Observable__WEBPACK_IMPORTED_MODULE_3__["Observable"](observer => {
            this.socket.on('getDataSede', (res) => {
                observer.next(res);
            });
        });
    }
    // respuesta de hacer un nuevo pedido
    onGetNuevoPedido() {
        return new rxjs_internal_Observable__WEBPACK_IMPORTED_MODULE_3__["Observable"](observer => {
            this.socket.on('nuevoPedido', (res) => {
                observer.next(res);
            });
        });
    }
    // cuando el cliente paga el pedido
    onPedidoPagado() {
        return new rxjs_internal_Observable__WEBPACK_IMPORTED_MODULE_3__["Observable"](observer => {
            this.socket.on('pedido-pagado-cliente', (res) => {
                observer.next(res);
            });
        });
    }
    onDeliveryPedidoChangeStatus() {
        return new rxjs_internal_Observable__WEBPACK_IMPORTED_MODULE_3__["Observable"](observer => {
            this.socket.on('repartidor-notifica-estado-pedido', (estado) => {
                observer.next(estado);
            });
        });
    }
    onDeliveryUbicacionRepartidor() {
        return new rxjs_internal_Observable__WEBPACK_IMPORTED_MODULE_3__["Observable"](observer => {
            this.socket.on('repartidor-notifica-ubicacion', (coordenadas) => {
                observer.next(coordenadas);
            });
        });
    }
    // onDeliveryGetLastIdPedido() {
    //   return new Observable(observer => {
    //     this.socket.on('get-lastid-pedido', (res: any) => {
    //       observer.next(res);
    //     });
    //   });
    // }
    // zona delivery establecimiento
    // onGetDatosSede() {
    //   return this.listen('getDataSede');
    // }
    // onListenSocketDisconnet() {
    //   return new Observable(observer => {
    //     this.socket.on('disconnect', (res: any) => {
    //       this.isSocketOpen = false;
    //       this.isSocketOpenSource.next(false);
    //     });
    //   });
    // }
    emit(evento, data) {
        // verificar estado del socket
        this.socket.emit(evento, data);
    }
    listen(evento) {
        return new rxjs_internal_Observable__WEBPACK_IMPORTED_MODULE_3__["Observable"](observer => {
            this.socket.on(evento, (res) => {
                observer.next(res);
            });
        });
    }
    closeConnection() {
        try {
            this.socket.disconnect();
        }
        catch (error) { }
        // this.isSocketOpen = false;
        // this.isSocketOpenSource.next(false);
        this.statusConexSocket(false, 'disconnect');
    }
    listenStatusSocket() {
        this.socket.on('finishLoadDataInitial', () => {
            this.statusConexSocket(true, '');
            this.isSocketOpenReconect = true; // evita que cargen nuevamente las configuraciones basicas, solo carga carta
            // console.log('conected socket finishLoadDataInitial');
        });
        // estados del navigator
        window.addEventListener('focus', (event) => {
            this.verifyConexionSocket();
        });
        window.addEventListener('online', () => {
            this.showStatusConexNavigator(true, 'navigator_online');
        });
        window.addEventListener('offline', () => {
            this.showStatusConexNavigator(false, 'navigator_offline');
        });
        // estado del socket
        this.socket.on('connect', () => {
            // console.log('socket connect');
            this.infoTockenService.setSocketId(this.socket.id);
            this.statusConexSocket(true, 'connect');
            // verifica el tiempo de session
            if (!this.infoTockenService.verificarContunuarSession()) {
                this.closeConnection();
                this.cerrarSessionBeforeTimeSession();
                return;
            }
        });
        this.socket.on('connect_failed', (res) => {
            // console.log('itento fallido de conexion', res);
            this.statusConexSocket(false, 'connect_failed');
        });
        this.socket.on('connect_error', (res) => {
            // console.log('error de conexion', res);
            this.statusConexSocket(false, 'connect_error');
        });
        this.socket.on('disconnect', (res) => {
            // console.log('disconnect');
            this.statusConexSocket(false, 'disconnect');
        });
        // escucha la verificacion de conexion
        this.socket.on('verificar-conexion', (res) => {
            // verifica el tiempo de session
            if (!this.infoTockenService.verificarContunuarSession()) {
                this.closeConnection();
                this.cerrarSessionBeforeTimeSession();
                return;
            }
            if (res === true) {
                console.log('VERIFY CONECTION => OK');
                this.verificandoConexion = false;
                return;
            }
            // no hay conexion -- en pruebas ver comportamiento
            // console.log('VERIFY CONECTION => FALSE');
            this.closeConnection();
            this.statusConexSocket(false, 'disconnect');
            this.connect();
            this.verificandoConexion = false;
        });
    }
    statusConexSocket(isConncet, evento) {
        this.isSocketOpen = isConncet;
        this.isSocketOpenSource.next(isConncet);
        let msj = 'Conectando datos ...';
        switch (evento) {
            case 'conected': // conectando
                msj = 'Conectando datos ...';
                break;
            case 'connect_failed': // conectando
                msj = 'Conectando datos ..';
                break;
            case 'connect_error': // conectando
                msj = 'Conectando datos .';
                break;
            case 'disconnect': // conectando
                msj = 'Restableciendo conexion ...';
                break;
            case 'navigator_offline': // conectando
                msj = 'Conexion cerrada -b ...';
                break;
            case 'navigator_online': // conectando
                msj = 'Conectando datos -b ...';
                break;
        }
        this.msjConexSource.next(msj);
    }
    showStatusConexNavigator(online, evento) {
        this.statusConexSocket(online, evento);
        // this.isSocketOpen = online;
        // this.isSocketOpenSource.next(online);
        if (online) {
            console.log('navegador conectado');
        }
        else {
            console.log('!!! navegador desconectado !!');
        }
    }
    // verifica el estado del socket, si esta cerrado intenta abrirlo
    verifyConexionSocket() {
        if (this.verificandoConexion) {
            return;
        }
        this.verificandoConexion = true;
        this.emit('verificar-conexion', this.socket.id);
    }
    // cierra session despues de que se comprueba que el tiempo de incio se de session supero lo establecido
    cerrarSessionBeforeTimeSession(reload = false) {
        this.router.navigate(['../']);
    }
};
SocketService.ctorParameters = () => [
    { type: _info_token_service__WEBPACK_IMPORTED_MODULE_6__["InfoTockenService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] }
];
SocketService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_info_token_service__WEBPACK_IMPORTED_MODULE_6__["InfoTockenService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]])
], SocketService);



/***/ }),

/***/ "./src/app/shared/services/storage.service.ts":
/*!****************************************************!*\
  !*** ./src/app/shared/services/storage.service.ts ***!
  \****************************************************/
/*! exports provided: StorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StorageService", function() { return StorageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let StorageService = class StorageService {
    constructor() { }
    set(key, data) {
        localStorage.setItem(key, data);
    }
    get(key) {
        return localStorage.getItem(key);
    }
    isExistKey(key) {
        return localStorage.getItem(key) ? true : false;
    }
    clear(key) {
        localStorage.removeItem(key);
    }
};
StorageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], StorageService);



/***/ }),

/***/ "./src/app/shared/services/timer-limit.service.ts":
/*!********************************************************!*\
  !*** ./src/app/shared/services/timer-limit.service.ts ***!
  \********************************************************/
/*! exports provided: TimerLimitService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimerLimitService", function() { return TimerLimitService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/internal/BehaviorSubject */ "./node_modules/rxjs/internal/BehaviorSubject.js");
/* harmony import */ var rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _info_token_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./info-token.service */ "./src/app/shared/services/info-token.service.ts");




let TimerLimitService = class TimerLimitService {
    constructor(infoToken) {
        this.infoToken = infoToken;
        this.countdownTimerRef = null;
        this.init = 0;
        this.valPorcentaje = 0;
        this.isPlayTimer = false;
        this.dateNow = new Date();
        this.countdownSource = new rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](0);
        this.countdown$ = this.countdownSource.asObservable();
        this.isTimeLimitSource = new rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
        this.isTimeLimitComplet$ = this.isTimeLimitSource.asObservable();
        this.isPorgressVisibleSource = new rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
        this.isPorgressVisible$ = this.isPorgressVisibleSource.asObservable();
    }
    destroy() {
        this.clearTimeout();
    }
    playCountTimerLimit() {
        if (this.infoToken.isDelivery()) {
            return;
        } // cuando es delivery no cuenta tiempo
        if (this.isPlayTimer) {
            return;
        }
        this.isPlayTimer = true;
        this.initCount();
    }
    resetCountTimerLimit() {
        if (this.infoToken.isDelivery()) {
            return;
        } // cuando es delivery no cuenta tiempo
        if (localStorage.getItem('sys::tcount')) {
            this.isPlayTimer = true;
            this.initCount();
        }
        else {
            this.stopCountTimerLimit();
        }
    }
    initCount() {
        if (this.infoToken.isDelivery()) {
            return;
        } // cuando es delivery no cuenta tiempo
        this.valPorcentaje = 0;
        this.init = localStorage.getItem('sys::tcount') ? parseInt(localStorage.getItem('sys::tcount'), 0) : 0;
        this.isTimeLimitSource.next(false);
        this.isPorgressVisibleSource.next(true);
        this.progressCount();
    }
    progressCount() {
        let lastValPorcentaje = 0;
        if (!this.isPlayTimer) {
            return;
        }
        this.countdownTimerRef = setTimeout(() => {
            this.init = this.setTimeDate();
            this.valPorcentaje = Math.round((this.init / this.maxTime) * 100);
            // guardamos en el
            localStorage.setItem('sys::tcount', this.init.toString());
            if (this.init > this.maxTime) {
                this.init = this.maxTime;
                this.valPorcentaje = 100;
                this.countdownSource.next(this.valPorcentaje);
                this.isTimeLimitSource.next(true);
                this.stopCountTimerLimit();
            }
            else {
                // console.log('timer limit', this.valPorcentaje);
                // para que no salga la alerta de incio solo una vez
                if (lastValPorcentaje !== this.valPorcentaje) {
                    this.countdownSource.next(this.valPorcentaje);
                }
                this.progressCount();
            }
            lastValPorcentaje = this.valPorcentaje;
        }, 1000);
    }
    setTimeDate() {
        const ms_new = new Date().getTime();
        const timeAfter = localStorage.getItem('sys::tnum') ? parseInt(localStorage.getItem('sys::tnum'), 0) : ms_new;
        const ms = ms_new - timeAfter;
        const sec = Math.floor((ms / 1000));
        localStorage.setItem('sys::tnum', timeAfter.toString());
        return sec;
    }
    stopCountTimerLimit() {
        this.isPlayTimer = false;
        this.init = 0;
        this.valPorcentaje = 0;
        localStorage.removeItem('sys::tcount');
        localStorage.removeItem('sys::tnum');
        this.clearTimeout();
        this.isPorgressVisibleSource.next(false);
        this.isTimeLimitSource.next(false);
    }
    clearTimeout() {
        if (this.countdownTimerRef) {
            clearTimeout(this.countdownTimerRef);
            this.countdownTimerRef = null;
        }
    }
};
TimerLimitService.ctorParameters = () => [
    { type: _info_token_service__WEBPACK_IMPORTED_MODULE_3__["InfoTockenService"] }
];
TimerLimitService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_info_token_service__WEBPACK_IMPORTED_MODULE_3__["InfoTockenService"]])
], TimerLimitService);



/***/ }),

/***/ "./src/app/shared/services/utilitarios.service.ts":
/*!********************************************************!*\
  !*** ./src/app/shared/services/utilitarios.service.ts ***!
  \********************************************************/
/*! exports provided: UtilitariosService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UtilitariosService", function() { return UtilitariosService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let UtilitariosService = class UtilitariosService {
    constructor() { }
    primeraConMayusculas(field) {
        field = field.toLowerCase();
        return field.charAt(0).toUpperCase() + field.slice(1);
    }
    reformatDate(dateStr) {
        const dArr = dateStr.split('-'); // ex input "2010-01-18"
        return dArr[2] + '/' + dArr[1] + '/' + dArr[0]; // ex out: "18/01/10"
    }
};
UtilitariosService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], UtilitariosService);



/***/ }),

/***/ "./src/app/shared/services/verify-auth-client.service.ts":
/*!***************************************************************!*\
  !*** ./src/app/shared/services/verify-auth-client.service.ts ***!
  \***************************************************************/
/*! exports provided: VerifyAuthClientService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerifyAuthClientService", function() { return VerifyAuthClientService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _auth0_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth0.service */ "./src/app/shared/services/auth0.service.ts");
/* harmony import */ var _crud_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./crud-http.service */ "./src/app/shared/services/crud-http.service.ts");
/* harmony import */ var rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/internal/Subject */ "./node_modules/rxjs/internal/Subject.js");
/* harmony import */ var rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var src_app_modelos_socket_client_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/modelos/socket.client.model */ "./src/app/modelos/socket.client.model.ts");






let VerifyAuthClientService = class VerifyAuthClientService {
    // private subjectClientSource = new BehaviorSubject<any>(null);
    // public subjectClient$ = this.subjectClientSource.asObservable();
    constructor(auth, crudService) {
        this.auth = auth;
        this.crudService = crudService;
        this.subjectClient = new rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.isClientValid = false;
    }
    isLogin() {
        return this.auth.loggedIn;
    }
    setIdOrg(val) {
        this.clientSocket.idorg = val;
        this.setDataClient();
    }
    setIdSede(val) {
        this.clientSocket.idsede = val;
        this.setDataClient();
    }
    setMesa(val) {
        this.clientSocket.numMesaLector = val;
        this.setDataClient();
    }
    setIsSoloLLevar(val) {
        this.clientSocket.isSoloLLevar = val;
        this.setDataClient();
    }
    setQrSuccess(val) {
        this.clientSocket.isQrSuccess = val;
        this.setDataClient();
    }
    setIsDelivery(val) {
        this.clientSocket.isDelivery = val;
        this.setDataClient();
    }
    setDireccionDeliverySelected(val) {
        this.clientSocket.direccionEnvioSelected = val;
        this.setDataClient();
    }
    setIsLoginByDNI(val) {
        this.clientSocket.isLoginByDNI = val;
        this.setDataClient();
    }
    setTelefono(val) {
        this.clientSocket.telefono = val;
        this.setDataClient();
    }
    getIsLoginByDNI() {
        // this.getDataClient();
        if (!this.clientSocket) {
            this.getDataClient();
        }
        return this.clientSocket.isLoginByDNI || false;
    }
    getIsQrSuccess() {
        // this.getDataClient();
        if (!this.clientSocket) {
            this.getDataClient();
        }
        return this.clientSocket.isQrSuccess || false;
    }
    getIsDelivery() {
        // this.getDataClient();
        if (!this.clientSocket) {
            this.getDataClient();
        }
        return this.clientSocket.isDelivery || false;
    }
    verifyClient() {
        this.getDataClient();
        // verrifica si esta logueado
        if (this.clientSocket.isLoginByDNI) {
            // verifica y registra el cliente en la bd
            this.registerCliente();
            return this.subjectClient.asObservable();
        }
        this.auth.userProfile$.subscribe(res => {
            if (!res) {
                // this.clientSocket = new SocketClientModel();
                // this.setDataClient();
                // // console.log(this.clientSocket);
                this.subjectClient.next(null);
            }
            else {
                this.clientSocket.datalogin = res;
                // console.log(this.clientSocket);
                this.setDataClient();
                // verifica y registra el cliente en la bd
                this.registerCliente();
            }
            // guarda vista demostracion para no cargar nuevamente
            //
        }, (error) => {
            console.log(error);
        }, () => { console.log('complete'); });
        return this.subjectClient.asObservable();
    }
    registerCliente() {
        let idClient = 0;
        this.crudService.postFree(this.clientSocket, 'ini', 'register-cliente-login', false).subscribe((rpt) => {
            // console.log('idcliente', rpt);
            // login en backend
            idClient = rpt.data[0].idcliente;
            this.clientSocket.idcliente = idClient;
            this.clientSocket.nombres = this.clientSocket.datalogin.name;
            this.clientSocket.usuario = this.clientSocket.datalogin.given_name;
            this.clientSocket.isCliente = true;
            this.clientSocket.telefono = rpt.data[0].telefono;
            // guarda en el usuario temporal
            // console.log(this.clientSocket);
            this.setDataClient();
            // window.localStorage.setItem('sys::tpm', JSON.stringify(this.clientSocket));
            this.subjectClient.next(this.clientSocket);
        });
    }
    setDataClient() {
        const dataClie = JSON.stringify(this.clientSocket);
        localStorage.setItem('sys::tpm', btoa(dataClie));
    }
    getDataClient() {
        const dataClie = localStorage.getItem('sys::tpm');
        if (!dataClie) {
            this.clientSocket = new src_app_modelos_socket_client_model__WEBPACK_IMPORTED_MODULE_5__["SocketClientModel"]();
        }
        else {
            this.clientSocket = JSON.parse(atob(dataClie));
        }
        return this.clientSocket;
    }
    loginOut() {
        this.auth.logout();
        localStorage.removeItem('sys::tpm');
    }
    unsubscribeClient() {
        this.subjectClient.unsubscribe();
    }
};
VerifyAuthClientService.ctorParameters = () => [
    { type: _auth0_service__WEBPACK_IMPORTED_MODULE_2__["Auth0Service"] },
    { type: _crud_http_service__WEBPACK_IMPORTED_MODULE_3__["CrudHttpService"] }
];
VerifyAuthClientService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth0_service__WEBPACK_IMPORTED_MODULE_2__["Auth0Service"],
        _crud_http_service__WEBPACK_IMPORTED_MODULE_3__["CrudHttpService"]])
], VerifyAuthClientService);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: true
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! F:\projects\pwa-app-pedido\src\main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** ws (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map