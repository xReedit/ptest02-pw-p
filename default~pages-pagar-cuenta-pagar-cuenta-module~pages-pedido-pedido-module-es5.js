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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_modelos_estado_pedido_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/modelos/estado.pedido.model */ "./src/app/modelos/estado.pedido.model.ts");
/* harmony import */ var _listen_status_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./listen-status.service */ "./src/app/shared/services/listen-status.service.ts");
/* harmony import */ var _crud_http_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./crud-http.service */ "./src/app/shared/services/crud-http.service.ts");
/* harmony import */ var _info_token_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./info-token.service */ "./src/app/shared/services/info-token.service.ts");
/* harmony import */ var rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/internal/BehaviorSubject */ "./node_modules/rxjs/internal/BehaviorSubject.js");
/* harmony import */ var rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_6__);







var EstadoPedidoClienteService = /** @class */ (function () {
    function EstadoPedidoClienteService(listenStatusService, crudService, infoTokenService) {
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
    EstadoPedidoClienteService.prototype.deserializar = function () {
        var _data = localStorage.getItem(this.keyStorage);
        _data = _data === '{}' || '' ? null : _data;
        if (_data) {
            this.estadoPedido = JSON.parse(_data);
        }
        else {
            this.estadoPedido = new src_app_modelos_estado_pedido_model__WEBPACK_IMPORTED_MODULE_2__["EstadoPedidoModel"]();
        }
    };
    EstadoPedidoClienteService.prototype.get = function () {
        // const _data = localStorage.getItem(this.keyStorage);
        this.deserializar();
        // if ( !this.estadoPedido ) {
        // verificar en la bd si tiene pedido sin pagar
        this.getCuentaTotales();
        //  }
    };
    // solo para estado pedido al momento de hacer clic en ver cuenta se mostrara la cuenta getCuenta()
    EstadoPedidoClienteService.prototype.getCuentaTotales = function () {
        var _this = this;
        var importeCuenta = 0;
        this.crudService.postFree(this.dataPost, 'pedido', 'lacuenta-cliente-totales', false).subscribe(function (res) {
            if (res.data.length === 0) {
                _this.estadoPedido.hayPedidoCliente = false;
                return;
            } // si no hay cuenta pedido del cliente
            importeCuenta = res.data[0].importe || 0;
            _this.setImporte(importeCuenta);
            _this.estadoPedido.hayPedidoCliente = true;
            _this.calcTimeAprox(); // calcula el tiempo aproximado
            // this.setisPagada(importeCuenta === 0 ? true : false);
            // if (this.hayPedidoFromStorage) {
            // notificar pedido pediente por finalizar
            // return;
            // }
            // console.log('cuenta cliente totales', res);
            // la cuenta
            // this.hayCuentaClienteSource.next(res);
            _this.notifyChange();
            // return res;
        });
        return importeCuenta;
    };
    EstadoPedidoClienteService.prototype.getCuenta = function () {
        var _this = this;
        this.crudService.postFree(this.dataPost, 'pedido', 'lacuenta-cliente', false).subscribe(function (res) {
            if (res.data.length === 0) {
                _this.estadoPedido.hayPedidoCliente = false;
                return;
            } // si no hay cuenta pedido del cliente
            _this.estadoPedido.hayPedidoCliente = true;
            _this.calcTimeAprox(); // calcula el tiempo aproximado
            // console.log('cuenta cliente', res);
            // la cuenta
            _this.hayCuentaClienteSource.next(res);
            _this.notifyChange();
            return res;
        });
    };
    EstadoPedidoClienteService.prototype.getImporteCuenta = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.crudService.postFree(_this.dataPost, 'pedido', 'lacuenta-cliente-totales', false).subscribe(function (res) {
                var _rpt = res.success ? res.data[0].importe : 0;
                resolve(_rpt);
            });
        });
    };
    EstadoPedidoClienteService.prototype.getObj = function () {
        // const _data = localStorage.getItem(this.keyStorage);
        // this.estadoPedido = _data;
        if (!this.estadoPedido) {
            this.deserializar();
        }
        return this.estadoPedido;
    };
    EstadoPedidoClienteService.prototype.setEstado = function (val) {
        this.deserializar();
        this.estadoPedido.estado = val;
        this.notifyChange();
    };
    EstadoPedidoClienteService.prototype.setImporte = function (val) {
        this.deserializar();
        this.estadoPedido.importe = val;
        this.notifyChange();
    };
    EstadoPedidoClienteService.prototype.setHoraInitPedido = function (val) {
        this.deserializar();
        this.estadoPedido.horaInt = val;
        this.notifyChange();
    };
    EstadoPedidoClienteService.prototype.setTimeAprox = function (val) {
        this.deserializar();
        this.estadoPedido.isTiempoAproxCumplido = val;
        this.notifyChange();
    };
    EstadoPedidoClienteService.prototype.setHayPedidoPendiente = function (val) {
        this.deserializar();
        this.estadoPedido.hayPedidoClientePendiente = val;
        this.notifyChange();
    };
    EstadoPedidoClienteService.prototype.setisPagada = function (val) {
        this.deserializar();
        this.estadoPedido.isPagada = val;
        this.notifyChange();
    };
    EstadoPedidoClienteService.prototype.setisRegisterPago = function (val) {
        this.deserializar();
        this.estadoPedido.isRegisterOnePago = val;
        this.notifyChange();
    };
    // obtener el tiempo aproximado del pedido
    EstadoPedidoClienteService.prototype.calcTimeAprox = function () {
        var _this = this;
        this.crudService.postFree(this.dataPost, 'pedido', 'calc-time-despacho', false).subscribe(function (res) {
            // console.log('calc time despacho', res);
            _this.estadoPedido.estado = 0; // en espera
            _this.estadoPedido.numMinAprox = res.data[0].rpt;
            // this.estadoPedido.horaInt = this.timeNow.getTime();
            _this.estadoPedido.isTiempoAproxCumplido = false;
            _this.notifyChange();
            // console.log('this.estadoPedido', this.estadoPedido);
            _this.getTimeAprox();
        });
    };
    // calcula el tiempo
    EstadoPedidoClienteService.prototype.getTimeAprox = function () {
        var _this = this;
        var rpt = 0;
        if (this.estadoPedido.estado === 0) {
            // this.timeInterval = setInterval(this.calTimeMin, 4000);
            this.timeInterval = setTimeout(function () {
                var min = _this.calTimeMin();
                if (min <= 0) {
                    _this.estadoPedido.estado = 1;
                    _this.notifyChange();
                    _this.clearTimeout();
                    clearTimeout(_this.timeInterval);
                    min = 0;
                }
                else {
                    _this.getTimeAprox();
                }
                _this.timeRestanteAproxSource.next(min);
            }, 2000);
        }
        else {
            this.clearTimeout();
        }
        return rpt;
    };
    EstadoPedidoClienteService.prototype.calTimeMin = function () {
        var timeMin = new Date().getTime() - this.estadoPedido.horaInt;
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
    };
    EstadoPedidoClienteService.prototype.clearTimeout = function () {
        // if (this.timeInterval) {
        clearTimeout(this.timeInterval);
        this.timeInterval = null;
        // }
    };
    EstadoPedidoClienteService.prototype.notifyChange = function () {
        this.listenStatusService.setEstadoPedido(this.estadoPedido);
        localStorage.setItem(this.keyStorage, JSON.stringify(this.estadoPedido));
        // calcula el tiempo de espera aproximadamente
        // this.getTimeAprox();
    };
    EstadoPedidoClienteService.ctorParameters = function () { return [
        { type: _listen_status_service__WEBPACK_IMPORTED_MODULE_3__["ListenStatusService"] },
        { type: _crud_http_service__WEBPACK_IMPORTED_MODULE_4__["CrudHttpService"] },
        { type: _info_token_service__WEBPACK_IMPORTED_MODULE_5__["InfoTockenService"] }
    ]; };
    EstadoPedidoClienteService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_listen_status_service__WEBPACK_IMPORTED_MODULE_3__["ListenStatusService"],
            _crud_http_service__WEBPACK_IMPORTED_MODULE_4__["CrudHttpService"],
            _info_token_service__WEBPACK_IMPORTED_MODULE_5__["InfoTockenService"]])
    ], EstadoPedidoClienteService);
    return EstadoPedidoClienteService;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _info_token_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./info-token.service */ "./src/app/shared/services/info-token.service.ts");
/* harmony import */ var _crud_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./crud-http.service */ "./src/app/shared/services/crud-http.service.ts");
/* harmony import */ var _socket_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./socket.service */ "./src/app/shared/services/socket.service.ts");





var RegistrarPagoService = /** @class */ (function () {
    function RegistrarPagoService(infoTokenService, crudService, socketService) {
        this.infoTokenService = infoTokenService;
        this.crudService = crudService;
        this.socketService = socketService;
        this.infoToken = this.infoTokenService.getInfoUs();
    }
    RegistrarPagoService.prototype.getSubtotales = function () {
        this.objTotales = JSON.parse(atob(localStorage.getItem('sys::st')));
    };
    RegistrarPagoService.prototype.registrarPago = function (_importe, _dataTransactionRegister, dataClientePago, isDelivery) {
        var _this = this;
        if (isDelivery === void 0) { isDelivery = false; }
        this.getSubtotales();
        var _objOperacion = {
            idcliente: this.infoToken.idcliente,
            idorg: this.infoToken.idorg,
            idsede: this.infoToken.idsede,
            mesa: this.infoToken.numMesaLector,
            importe: _importe
        };
        var _data = {
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
        this.crudService.postFree(_data, 'transaction', 'registrar-pago', false).subscribe(function (res) {
            // console.log('registro-pago', res);
            // if ( res.success ) {
            _this.setIdRegistroPagoTransaction(res.data[0].idregistro_pago);
            _this.socketService.emit('notificar-pago-pwa', _data);
            // }
        });
    };
    RegistrarPagoService.prototype.getIpClient = function () {
        var _res = '';
        this.crudService.getFree('https://api.ipify.org?format=jsonp&callback=?').subscribe(function (res) {
            _res = res.ip;
        });
        return _res;
    };
    // manejo de respuesta en local storage
    RegistrarPagoService.prototype.getDataTrasaction = function () {
        // toma la respuesta de pago
        // this.responseTransaction = JSON.parse(localStorage.getItem('sys::transaction-response'));
        this.loadDataTransaction();
        var resPagoIsSucces = this.responseTransaction ? !this.responseTransaction.error : false;
        this.responseTransaction.isSuccess = !resPagoIsSucces;
        return this.responseTransaction;
    };
    RegistrarPagoService.prototype.setIdRegistroPagoTransaction = function (id) {
        this.loadDataTransaction();
        this.responseTransaction.idregistro_pago = id;
        this.upDataTransaction();
    };
    RegistrarPagoService.prototype.loadDataTransaction = function () {
        // toma la respuesta de pago
        this.responseTransaction = JSON.parse(localStorage.getItem('sys::transaction-response'));
    };
    RegistrarPagoService.prototype.upDataTransaction = function () {
        localStorage.setItem('sys::transaction-response', JSON.stringify(this.responseTransaction));
    };
    RegistrarPagoService.prototype.removeLocalDataTransaction = function () {
        localStorage.removeItem('sys::transaction-response');
        this.responseTransaction = null;
    };
    RegistrarPagoService.ctorParameters = function () { return [
        { type: _info_token_service__WEBPACK_IMPORTED_MODULE_2__["InfoTockenService"] },
        { type: _crud_http_service__WEBPACK_IMPORTED_MODULE_3__["CrudHttpService"] },
        { type: _socket_service__WEBPACK_IMPORTED_MODULE_4__["SocketService"] }
    ]; };
    RegistrarPagoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_info_token_service__WEBPACK_IMPORTED_MODULE_2__["InfoTockenService"],
            _crud_http_service__WEBPACK_IMPORTED_MODULE_3__["CrudHttpService"],
            _socket_service__WEBPACK_IMPORTED_MODULE_4__["SocketService"]])
    ], RegistrarPagoService);
    return RegistrarPagoService;
}());



/***/ })

}]);
//# sourceMappingURL=default~pages-pagar-cuenta-pagar-cuenta-module~pages-pedido-pedido-module-es5.js.map