"use strict";
(self["webpackChunkpwa_app_pedido"] = self["webpackChunkpwa_app_pedido"] || []).push([["default-src_app_shared_services_estado-pedido-cliente_service_ts-src_app_shared_services_regi-9006c9"],{

/***/ 90128:
/*!******************************************************************!*\
  !*** ./src/app/shared/services/estado-pedido-cliente.service.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EstadoPedidoClienteService": () => (/* binding */ EstadoPedidoClienteService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_app_modelos_estado_pedido_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/modelos/estado.pedido.model */ 86923);
/* harmony import */ var _listen_status_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./listen-status.service */ 70190);
/* harmony import */ var _crud_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./crud-http.service */ 24677);
/* harmony import */ var _info_token_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./info-token.service */ 93674);
/* harmony import */ var rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/internal/BehaviorSubject */ 88898);
/* harmony import */ var rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_4__);







let EstadoPedidoClienteService = class EstadoPedidoClienteService {
    constructor(listenStatusService, crudService, infoTokenService) {
        this.listenStatusService = listenStatusService;
        this.crudService = crudService;
        this.infoTokenService = infoTokenService;
        this.estadoPedido = new src_app_modelos_estado_pedido_model__WEBPACK_IMPORTED_MODULE_0__.EstadoPedidoModel();
        this.keyStorage = 'sys::status';
        this.timeInterval = null;
        this.timeNow = new Date();
        this.hayPedidoPendiente = false;
        this.timeRestanteAproxSource = new rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_4__.BehaviorSubject(0);
        this.timeRestanteAprox$ = this.timeRestanteAproxSource.asObservable();
        this.hayCuentaClienteSource = new rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_4__.BehaviorSubject(null);
        this.hayCuentaCliente$ = this.hayCuentaClienteSource.asObservable();
        this.deserializar();
        this.dataPost = {
            idsede: this.infoTokenService.getInfoUs().idsede,
            idcliente: this.infoTokenService.getInfoUs().idcliente,
            num_mesa: this.infoTokenService.getInfoUs().numMesaLector
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
            this.estadoPedido = new src_app_modelos_estado_pedido_model__WEBPACK_IMPORTED_MODULE_0__.EstadoPedidoModel();
        }
    }
    setDataInfoClient() {
        this.dataPost = {
            idsede: this.infoTokenService.getInfoUs().idsede,
            idcliente: this.infoTokenService.getInfoUs().idcliente,
            num_mesa: this.infoTokenService.getInfoUs().numMesaLector
        };
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
        this.setDataInfoClient();
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
        // console.log('pide la cuenta');
        this.setDataInfoClient();
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
        this.setDataInfoClient();
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
        this.setDataInfoClient();
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
    { type: _listen_status_service__WEBPACK_IMPORTED_MODULE_1__.ListenStatusService },
    { type: _crud_http_service__WEBPACK_IMPORTED_MODULE_2__.CrudHttpService },
    { type: _info_token_service__WEBPACK_IMPORTED_MODULE_3__.InfoTockenService }
];
EstadoPedidoClienteService = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Injectable)({
        providedIn: 'root'
    })
], EstadoPedidoClienteService);



/***/ }),

/***/ 30900:
/*!***********************************************************!*\
  !*** ./src/app/shared/services/registrar-pago.service.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegistrarPagoService": () => (/* binding */ RegistrarPagoService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _info_token_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./info-token.service */ 93674);
/* harmony import */ var _crud_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./crud-http.service */ 24677);
/* harmony import */ var _socket_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./socket.service */ 43460);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 12378);
/* harmony import */ var _establecimiento_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./establecimiento.service */ 32218);







let RegistrarPagoService = class RegistrarPagoService {
    constructor(infoTokenService, crudService, socketService, establecimiento) {
        this.infoTokenService = infoTokenService;
        this.crudService = crudService;
        this.socketService = socketService;
        this.establecimiento = establecimiento;
        this.infoToken = this.infoTokenService.getInfoUs();
    }
    getSubtotales() {
        this.objTotales = JSON.parse(atob(localStorage.getItem('sys::st')));
    }
    registrarPago(_importe, _dataTransactionRegister, dataClientePago, isDelivery = false) {
        this.getSubtotales();
        // console.log('this.establecimiento.get() from pago', this.establecimiento.get());
        const _objOperacion = {
            idcliente: this.infoToken.idcliente,
            idorg: this.establecimiento.get().idorg,
            idsede: this.establecimiento.get().idsede,
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
        // console.log('registro pago service', _data);
        return new rxjs__WEBPACK_IMPORTED_MODULE_4__.Observable(observer => {
            this.crudService.postFree(_data, 'transaction', 'registrar-pago', false).subscribe((res) => {
                // console.log('registro-pago', res);
                // if ( res.success ) {
                this.socketService.emit('notificar-pago-pwa', _data);
                // this.setIdRegistroPagoTransaction(res.data[0].idregistro_pago);
                this.setIdPwaPago(res.data[0].idregistro_pago);
                observer.next(res.data[0].idregistro_pago);
                // }
            });
        });
    }
    setIdPwaPago(id) {
        localStorage.setItem('sys::irp', id.toString());
    }
    getIdPwaPago() {
        let idPwaPago = parseInt(localStorage.getItem('sys::irp'), 0);
        idPwaPago = idPwaPago ? 0 : idPwaPago;
        localStorage.removeItem('sys::irp');
        return idPwaPago;
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
    { type: _info_token_service__WEBPACK_IMPORTED_MODULE_0__.InfoTockenService },
    { type: _crud_http_service__WEBPACK_IMPORTED_MODULE_1__.CrudHttpService },
    { type: _socket_service__WEBPACK_IMPORTED_MODULE_2__.SocketService },
    { type: _establecimiento_service__WEBPACK_IMPORTED_MODULE_3__.EstablecimientoService }
];
RegistrarPagoService = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Injectable)({
        providedIn: 'root'
    })
], RegistrarPagoService);



/***/ })

}]);
//# sourceMappingURL=default-src_app_shared_services_estado-pedido-cliente_service_ts-src_app_shared_services_regi-9006c9.js.map