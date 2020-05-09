(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~pages-pagar-cuenta-pagar-cuenta-module~pages-pedido-pedido-module"],{

/***/ "./src/app/shared/services/estado-pedido-cliente.service.ts":
/*!******************************************************************!*\
  !*** ./src/app/shared/services/estado-pedido-cliente.service.ts ***!
  \******************************************************************/
/*! exports provided: EstadoPedidoClienteService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EstadoPedidoClienteService", function() { return EstadoPedidoClienteService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_modelos_estado_pedido_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/modelos/estado.pedido.model */ "./src/app/modelos/estado.pedido.model.ts");
/* harmony import */ var _listen_status_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./listen-status.service */ "./src/app/shared/services/listen-status.service.ts");
/* harmony import */ var _crud_http_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./crud-http.service */ "./src/app/shared/services/crud-http.service.ts");
/* harmony import */ var _info_token_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./info-token.service */ "./src/app/shared/services/info-token.service.ts");
/* harmony import */ var rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/internal/BehaviorSubject */ "./node_modules/rxjs/internal/BehaviorSubject.js");
/* harmony import */ var rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_6__);







let EstadoPedidoClienteService = class EstadoPedidoClienteService {
    constructor(listenStatusService, crudService, infoTokenService) {
        this.listenStatusService = listenStatusService;
        this.crudService = crudService;
        this.infoTokenService = infoTokenService;
        this.estadoPedido = new src_app_modelos_estado_pedido_model__WEBPACK_IMPORTED_MODULE_2__["EstadoPedidoModel"]();
        this.keyStorage = 'sys::status';
        this.timeInterval = null;
        this.timeNow = new Date();
        this.hayPedidoPendiente = false;
        this.timeRestanteAproxSource = new rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_6__["BehaviorSubject"](0);
        this.timeRestanteAprox$ = this.timeRestanteAproxSource.asObservable();
        this.hayCuentaClienteSource = new rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_6__["BehaviorSubject"](null);
        this.hayCuentaCliente$ = this.hayCuentaClienteSource.asObservable();
        this.deserializar();
        this.dataPost = {
            idsede: this.infoTokenService.getInfoUs().idsede,
            idcliente: this.infoTokenService.getInfoUs().idcliente
        };
        // this.listenStatusService.hayPedidoPendiente$.subscribe((res: boolean) => {
        //   console.log('======== listen setHayPedidoPendiente', res);
        //   this.setHayPedidoPendiente(res);
        // });
    }
    deserializar() {
        let _data = localStorage.getItem(this.keyStorage);
        _data = _data === '{}' || '' ? null : _data;
        if (_data) {
            this.estadoPedido = JSON.parse(_data);
        }
        else {
            this.estadoPedido = new src_app_modelos_estado_pedido_model__WEBPACK_IMPORTED_MODULE_2__["EstadoPedidoModel"]();
        }
    }
    get() {
        // const _data = localStorage.getItem(this.keyStorage);
        this.deserializar();
        // if ( !this.estadoPedido ) {
        // verificar en la bd si tiene pedido sin pagar
        this.getCuentaTotales();
        //  }
    }
    // solo para estado pedido al momento de hacer clic en ver cuenta se mostrara la cuenta getCuenta()
    getCuentaTotales() {
        let importeCuenta = 0;
        this.crudService.postFree(this.dataPost, 'pedido', 'lacuenta-cliente-totales', false).subscribe((res) => {
            if (res.data.length === 0) {
                this.estadoPedido.hayPedidoCliente = false;
                return;
            } // si no hay cuenta pedido del cliente
            importeCuenta = res.data[0].importe || 0;
            this.setImporte(importeCuenta);
            this.estadoPedido.hayPedidoCliente = true;
            this.calcTimeAprox(); // calcula el tiempo aproximado
            // this.setisPagada(importeCuenta === 0 ? true : false);
            // if (this.hayPedidoFromStorage) {
            // notificar pedido pediente por finalizar
            // return;
            // }
            // console.log('cuenta cliente totales', res);
            // la cuenta
            // this.hayCuentaClienteSource.next(res);
            this.notifyChange();
            // return res;
        });
        return importeCuenta;
    }
    getCuenta() {
        this.crudService.postFree(this.dataPost, 'pedido', 'lacuenta-cliente', false).subscribe((res) => {
            if (res.data.length === 0) {
                this.estadoPedido.hayPedidoCliente = false;
                return;
            } // si no hay cuenta pedido del cliente
            this.estadoPedido.hayPedidoCliente = true;
            this.calcTimeAprox(); // calcula el tiempo aproximado
            // console.log('cuenta cliente', res);
            // la cuenta
            this.hayCuentaClienteSource.next(res);
            this.notifyChange();
            return res;
        });
    }
    getImporteCuenta() {
        return new Promise(resolve => {
            this.crudService.postFree(this.dataPost, 'pedido', 'lacuenta-cliente-totales', false).subscribe((res) => {
                const _rpt = res.success ? res.data[0].importe : 0;
                resolve(_rpt);
            });
        });
    }
    getObj() {
        // const _data = localStorage.getItem(this.keyStorage);
        // this.estadoPedido = _data;
        if (!this.estadoPedido) {
            this.deserializar();
        }
        return this.estadoPedido;
    }
    setEstado(val) {
        this.deserializar();
        this.estadoPedido.estado = val;
        this.notifyChange();
    }
    setImporte(val) {
        this.deserializar();
        this.estadoPedido.importe = val;
        this.notifyChange();
    }
    setHoraInitPedido(val) {
        this.deserializar();
        this.estadoPedido.horaInt = val;
        this.notifyChange();
    }
    setTimeAprox(val) {
        this.deserializar();
        this.estadoPedido.isTiempoAproxCumplido = val;
        this.notifyChange();
    }
    setHayPedidoPendiente(val) {
        this.deserializar();
        this.estadoPedido.hayPedidoClientePendiente = val;
        this.notifyChange();
    }
    setisPagada(val) {
        this.deserializar();
        this.estadoPedido.isPagada = val;
        this.notifyChange();
    }
    setisRegisterPago(val) {
        this.deserializar();
        this.estadoPedido.isRegisterOnePago = val;
        this.notifyChange();
    }
    // obtener el tiempo aproximado del pedido
    calcTimeAprox() {
        this.crudService.postFree(this.dataPost, 'pedido', 'calc-time-despacho', false).subscribe((res) => {
            // console.log('calc time despacho', res);
            this.estadoPedido.estado = 0; // en espera
            this.estadoPedido.numMinAprox = res.data[0].rpt;
            // this.estadoPedido.horaInt = this.timeNow.getTime();
            this.estadoPedido.isTiempoAproxCumplido = false;
            this.notifyChange();
            // console.log('this.estadoPedido', this.estadoPedido);
            this.getTimeAprox();
        });
    }
    // calcula el tiempo
    getTimeAprox() {
        const rpt = 0;
        if (this.estadoPedido.estado === 0) {
            // this.timeInterval = setInterval(this.calTimeMin, 4000);
            this.timeInterval = setTimeout(() => {
                let min = this.calTimeMin();
                if (min <= 0) {
                    this.estadoPedido.estado = 1;
                    this.notifyChange();
                    this.clearTimeout();
                    clearTimeout(this.timeInterval);
                    min = 0;
                }
                else {
                    this.getTimeAprox();
                }
                this.timeRestanteAproxSource.next(min);
            }, 2000);
        }
        else {
            this.clearTimeout();
        }
        return rpt;
    }
    calTimeMin() {
        let timeMin = new Date().getTime() - this.estadoPedido.horaInt;
        timeMin = Math.round(((timeMin % 86400000) % 3600000) / 60000);
        timeMin = this.estadoPedido.numMinAprox - timeMin;
        // let min = this.calTimeMin();
        // if ( timeMin <= 0 ) {
        //   this.estadoPedido.estado = 1;
        //   this.notifyChange();
        //   this.clearTimeout();
        //   timeMin = 0;
        // }
        // this.timeRestanteAproxSource.next(timeMin);
        return isNaN(timeMin) ? 0 : timeMin;
    }
    clearTimeout() {
        // if (this.timeInterval) {
        clearTimeout(this.timeInterval);
        this.timeInterval = null;
        // }
    }
    notifyChange() {
        this.listenStatusService.setEstadoPedido(this.estadoPedido);
        localStorage.setItem(this.keyStorage, JSON.stringify(this.estadoPedido));
        // calcula el tiempo de espera aproximadamente
        // this.getTimeAprox();
    }
};
EstadoPedidoClienteService.ctorParameters = () => [
    { type: _listen_status_service__WEBPACK_IMPORTED_MODULE_3__["ListenStatusService"] },
    { type: _crud_http_service__WEBPACK_IMPORTED_MODULE_4__["CrudHttpService"] },
    { type: _info_token_service__WEBPACK_IMPORTED_MODULE_5__["InfoTockenService"] }
];
EstadoPedidoClienteService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_listen_status_service__WEBPACK_IMPORTED_MODULE_3__["ListenStatusService"],
        _crud_http_service__WEBPACK_IMPORTED_MODULE_4__["CrudHttpService"],
        _info_token_service__WEBPACK_IMPORTED_MODULE_5__["InfoTockenService"]])
], EstadoPedidoClienteService);



/***/ }),

/***/ "./src/app/shared/services/registrar-pago.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/shared/services/registrar-pago.service.ts ***!
  \***********************************************************/
/*! exports provided: RegistrarPagoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrarPagoService", function() { return RegistrarPagoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _info_token_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./info-token.service */ "./src/app/shared/services/info-token.service.ts");
/* harmony import */ var _crud_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./crud-http.service */ "./src/app/shared/services/crud-http.service.ts");
/* harmony import */ var _socket_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./socket.service */ "./src/app/shared/services/socket.service.ts");





let RegistrarPagoService = class RegistrarPagoService {
    constructor(infoTokenService, crudService, socketService) {
        this.infoTokenService = infoTokenService;
        this.crudService = crudService;
        this.socketService = socketService;
        this.infoToken = this.infoTokenService.getInfoUs();
    }
    getSubtotales() {
        this.objTotales = JSON.parse(atob(localStorage.getItem('sys::st')));
    }
    registrarPago(_importe, _dataTransactionRegister, dataClientePago, isDelivery = false) {
        this.getSubtotales();
        const _objOperacion = {
            idcliente: this.infoToken.idcliente,
            idorg: this.infoToken.idorg,
            idsede: this.infoToken.idsede,
            mesa: this.infoToken.numMesaLector,
            importe: _importe
        };
        const _data = {
            idcliente: _objOperacion.idcliente,
            idorg: _objOperacion.idorg,
            idsede: _objOperacion.idsede,
            mesa: _objOperacion.mesa,
            importe: _objOperacion.importe,
            isdelivery: isDelivery,
            objSubTotal: this.objTotales,
            objTransaction: _dataTransactionRegister,
            objCliente: dataClientePago,
            objOperacion: _objOperacion
        };
        this.crudService.postFree(_data, 'transaction', 'registrar-pago', false).subscribe((res) => {
            // console.log('registro-pago', res);
            // if ( res.success ) {
            this.setIdRegistroPagoTransaction(res.data[0].idregistro_pago);
            this.socketService.emit('notificar-pago-pwa', _data);
            // }
        });
    }
    getIpClient() {
        let _res = '';
        this.crudService.getFree('https://api.ipify.org?format=jsonp&callback=?').subscribe((res) => {
            _res = res.ip;
        });
        return _res;
    }
    // manejo de respuesta en local storage
    getDataTrasaction() {
        // toma la respuesta de pago
        // this.responseTransaction = JSON.parse(localStorage.getItem('sys::transaction-response'));
        this.loadDataTransaction();
        const resPagoIsSucces = this.responseTransaction ? !this.responseTransaction.error : false;
        this.responseTransaction.isSuccess = !resPagoIsSucces;
        return this.responseTransaction;
    }
    setIdRegistroPagoTransaction(id) {
        this.loadDataTransaction();
        this.responseTransaction.idregistro_pago = id;
        this.upDataTransaction();
    }
    loadDataTransaction() {
        // toma la respuesta de pago
        this.responseTransaction = JSON.parse(localStorage.getItem('sys::transaction-response'));
    }
    upDataTransaction() {
        localStorage.setItem('sys::transaction-response', JSON.stringify(this.responseTransaction));
    }
    removeLocalDataTransaction() {
        localStorage.removeItem('sys::transaction-response');
        this.responseTransaction = null;
    }
};
RegistrarPagoService.ctorParameters = () => [
    { type: _info_token_service__WEBPACK_IMPORTED_MODULE_2__["InfoTockenService"] },
    { type: _crud_http_service__WEBPACK_IMPORTED_MODULE_3__["CrudHttpService"] },
    { type: _socket_service__WEBPACK_IMPORTED_MODULE_4__["SocketService"] }
];
RegistrarPagoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_info_token_service__WEBPACK_IMPORTED_MODULE_2__["InfoTockenService"],
        _crud_http_service__WEBPACK_IMPORTED_MODULE_3__["CrudHttpService"],
        _socket_service__WEBPACK_IMPORTED_MODULE_4__["SocketService"]])
], RegistrarPagoService);



/***/ })

}]);
//# sourceMappingURL=default~pages-pagar-cuenta-pagar-cuenta-module~pages-pedido-pedido-module-es2015.js.map