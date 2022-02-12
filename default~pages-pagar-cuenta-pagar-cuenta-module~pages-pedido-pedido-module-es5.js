function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~pages-pagar-cuenta-pagar-cuenta-module~pages-pedido-pedido-module"], {
  /***/
  "./src/app/shared/services/estado-pedido-cliente.service.ts":
  /*!******************************************************************!*\
    !*** ./src/app/shared/services/estado-pedido-cliente.service.ts ***!
    \******************************************************************/

  /*! exports provided: EstadoPedidoClienteService */

  /***/
  function srcAppSharedServicesEstadoPedidoClienteServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EstadoPedidoClienteService", function () {
      return EstadoPedidoClienteService;
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


    var src_app_modelos_estado_pedido_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/modelos/estado.pedido.model */
    "./src/app/modelos/estado.pedido.model.ts");
    /* harmony import */


    var _listen_status_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./listen-status.service */
    "./src/app/shared/services/listen-status.service.ts");
    /* harmony import */


    var _crud_http_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./crud-http.service */
    "./src/app/shared/services/crud-http.service.ts");
    /* harmony import */


    var _info_token_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./info-token.service */
    "./src/app/shared/services/info-token.service.ts");
    /* harmony import */


    var rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! rxjs/internal/BehaviorSubject */
    "./node_modules/rxjs/internal/BehaviorSubject.js");
    /* harmony import */


    var rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_6__);

    var EstadoPedidoClienteService = /*#__PURE__*/function () {
      function EstadoPedidoClienteService(listenStatusService, crudService, infoTokenService) {
        _classCallCheck(this, EstadoPedidoClienteService);

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
        }; // this.listenStatusService.hayPedidoPendiente$.subscribe((res: boolean) => {
        //   console.log('======== listen setHayPedidoPendiente', res);
        //   this.setHayPedidoPendiente(res);
        // });
      }

      _createClass(EstadoPedidoClienteService, [{
        key: "deserializar",
        value: function deserializar() {
          var _data = localStorage.getItem(this.keyStorage);

          _data = _data === '{}' || '' ? null : _data;

          if (_data) {
            this.estadoPedido = JSON.parse(_data);
          } else {
            this.estadoPedido = new src_app_modelos_estado_pedido_model__WEBPACK_IMPORTED_MODULE_2__["EstadoPedidoModel"]();
          }
        }
      }, {
        key: "get",
        value: function get() {
          // const _data = localStorage.getItem(this.keyStorage);
          this.deserializar(); // if ( !this.estadoPedido ) {
          // verificar en la bd si tiene pedido sin pagar

          this.getCuentaTotales(); //  }
        } // solo para estado pedido al momento de hacer clic en ver cuenta se mostrara la cuenta getCuenta()

      }, {
        key: "getCuentaTotales",
        value: function getCuentaTotales() {
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


            _this.notifyChange(); // return res;

          });
          return importeCuenta;
        }
      }, {
        key: "getCuenta",
        value: function getCuenta() {
          var _this2 = this;

          // console.log('pide la cuenta');
          this.crudService.postFree(this.dataPost, 'pedido', 'lacuenta-cliente', false).subscribe(function (res) {
            if (res.data.length === 0) {
              _this2.estadoPedido.hayPedidoCliente = false;
              return;
            } // si no hay cuenta pedido del cliente


            _this2.estadoPedido.hayPedidoCliente = true;

            _this2.calcTimeAprox(); // calcula el tiempo aproximado
            // console.log('cuenta cliente', res);
            // la cuenta


            _this2.hayCuentaClienteSource.next(res);

            _this2.notifyChange();

            return res;
          });
        }
      }, {
        key: "getImporteCuenta",
        value: function getImporteCuenta() {
          var _this3 = this;

          return new Promise(function (resolve) {
            _this3.crudService.postFree(_this3.dataPost, 'pedido', 'lacuenta-cliente-totales', false).subscribe(function (res) {
              var _rpt = res.success ? res.data[0].importe : 0;

              resolve(_rpt);
            });
          });
        }
      }, {
        key: "getObj",
        value: function getObj() {
          // const _data = localStorage.getItem(this.keyStorage);
          // this.estadoPedido = _data;
          if (!this.estadoPedido) {
            this.deserializar();
          }

          return this.estadoPedido;
        }
      }, {
        key: "setEstado",
        value: function setEstado(val) {
          this.deserializar();
          this.estadoPedido.estado = val;
          this.notifyChange();
        }
      }, {
        key: "setImporte",
        value: function setImporte(val) {
          this.deserializar();
          this.estadoPedido.importe = val;
          this.notifyChange();
        }
      }, {
        key: "setHoraInitPedido",
        value: function setHoraInitPedido(val) {
          this.deserializar();
          this.estadoPedido.horaInt = val;
          this.notifyChange();
        }
      }, {
        key: "setTimeAprox",
        value: function setTimeAprox(val) {
          this.deserializar();
          this.estadoPedido.isTiempoAproxCumplido = val;
          this.notifyChange();
        }
      }, {
        key: "setHayPedidoPendiente",
        value: function setHayPedidoPendiente(val) {
          this.deserializar();
          this.estadoPedido.hayPedidoClientePendiente = val;
          this.notifyChange();
        }
      }, {
        key: "setisPagada",
        value: function setisPagada(val) {
          this.deserializar();
          this.estadoPedido.isPagada = val;
          this.notifyChange();
        }
      }, {
        key: "setisRegisterPago",
        value: function setisRegisterPago(val) {
          this.deserializar();
          this.estadoPedido.isRegisterOnePago = val;
          this.notifyChange();
        } // obtener el tiempo aproximado del pedido

      }, {
        key: "calcTimeAprox",
        value: function calcTimeAprox() {
          var _this4 = this;

          this.crudService.postFree(this.dataPost, 'pedido', 'calc-time-despacho', false).subscribe(function (res) {
            // console.log('calc time despacho', res);
            _this4.estadoPedido.estado = 0; // en espera

            _this4.estadoPedido.numMinAprox = res.data[0].rpt; // this.estadoPedido.horaInt = this.timeNow.getTime();

            _this4.estadoPedido.isTiempoAproxCumplido = false;

            _this4.notifyChange(); // console.log('this.estadoPedido', this.estadoPedido);


            _this4.getTimeAprox();
          });
        } // calcula el tiempo

      }, {
        key: "getTimeAprox",
        value: function getTimeAprox() {
          var _this5 = this;

          var rpt = 0;

          if (this.estadoPedido.estado === 0) {
            // this.timeInterval = setInterval(this.calTimeMin, 4000);
            this.timeInterval = setTimeout(function () {
              var min = _this5.calTimeMin();

              if (min <= 0) {
                _this5.estadoPedido.estado = 1;

                _this5.notifyChange();

                _this5.clearTimeout();

                clearTimeout(_this5.timeInterval);
                min = 0;
              } else {
                _this5.getTimeAprox();
              }

              _this5.timeRestanteAproxSource.next(min);
            }, 2000);
          } else {
            this.clearTimeout();
          }

          return rpt;
        }
      }, {
        key: "calTimeMin",
        value: function calTimeMin() {
          var timeMin = new Date().getTime() - this.estadoPedido.horaInt;
          timeMin = Math.round(timeMin % 86400000 % 3600000 / 60000);
          timeMin = this.estadoPedido.numMinAprox - timeMin; // let min = this.calTimeMin();
          // if ( timeMin <= 0 ) {
          //   this.estadoPedido.estado = 1;
          //   this.notifyChange();
          //   this.clearTimeout();
          //   timeMin = 0;
          // }
          // this.timeRestanteAproxSource.next(timeMin);

          return isNaN(timeMin) ? 0 : timeMin;
        }
      }, {
        key: "clearTimeout",
        value: function (_clearTimeout) {
          function clearTimeout() {
            return _clearTimeout.apply(this, arguments);
          }

          clearTimeout.toString = function () {
            return _clearTimeout.toString();
          };

          return clearTimeout;
        }(function () {
          // if (this.timeInterval) {
          clearTimeout(this.timeInterval);
          this.timeInterval = null; // }
        })
      }, {
        key: "notifyChange",
        value: function notifyChange() {
          this.listenStatusService.setEstadoPedido(this.estadoPedido);
          localStorage.setItem(this.keyStorage, JSON.stringify(this.estadoPedido)); // calcula el tiempo de espera aproximadamente
          // this.getTimeAprox();
        }
      }]);

      return EstadoPedidoClienteService;
    }();

    EstadoPedidoClienteService.ctorParameters = function () {
      return [{
        type: _listen_status_service__WEBPACK_IMPORTED_MODULE_3__["ListenStatusService"]
      }, {
        type: _crud_http_service__WEBPACK_IMPORTED_MODULE_4__["CrudHttpService"]
      }, {
        type: _info_token_service__WEBPACK_IMPORTED_MODULE_5__["InfoTockenService"]
      }];
    };

    EstadoPedidoClienteService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_listen_status_service__WEBPACK_IMPORTED_MODULE_3__["ListenStatusService"], _crud_http_service__WEBPACK_IMPORTED_MODULE_4__["CrudHttpService"], _info_token_service__WEBPACK_IMPORTED_MODULE_5__["InfoTockenService"]])], EstadoPedidoClienteService);
    /***/
  },

  /***/
  "./src/app/shared/services/registrar-pago.service.ts":
  /*!***********************************************************!*\
    !*** ./src/app/shared/services/registrar-pago.service.ts ***!
    \***********************************************************/

  /*! exports provided: RegistrarPagoService */

  /***/
  function srcAppSharedServicesRegistrarPagoServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegistrarPagoService", function () {
      return RegistrarPagoService;
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


    var _info_token_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./info-token.service */
    "./src/app/shared/services/info-token.service.ts");
    /* harmony import */


    var _crud_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./crud-http.service */
    "./src/app/shared/services/crud-http.service.ts");
    /* harmony import */


    var _socket_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./socket.service */
    "./src/app/shared/services/socket.service.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _establecimiento_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./establecimiento.service */
    "./src/app/shared/services/establecimiento.service.ts");

    var RegistrarPagoService = /*#__PURE__*/function () {
      function RegistrarPagoService(infoTokenService, crudService, socketService, establecimiento) {
        _classCallCheck(this, RegistrarPagoService);

        this.infoTokenService = infoTokenService;
        this.crudService = crudService;
        this.socketService = socketService;
        this.establecimiento = establecimiento;
        this.infoToken = this.infoTokenService.getInfoUs();
      }

      _createClass(RegistrarPagoService, [{
        key: "getSubtotales",
        value: function getSubtotales() {
          this.objTotales = JSON.parse(atob(localStorage.getItem('sys::st')));
        }
      }, {
        key: "registrarPago",
        value: function registrarPago(_importe, _dataTransactionRegister, dataClientePago) {
          var _this6 = this;

          var isDelivery = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
          this.getSubtotales(); // console.log('this.establecimiento.get() from pago', this.establecimiento.get());

          var _objOperacion = {
            idcliente: this.infoToken.idcliente,
            idorg: this.establecimiento.get().idorg,
            idsede: this.establecimiento.get().idsede,
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
          }; // console.log('registro pago service', _data);

          return new rxjs__WEBPACK_IMPORTED_MODULE_5__["Observable"](function (observer) {
            _this6.crudService.postFree(_data, 'transaction', 'registrar-pago', false).subscribe(function (res) {
              // console.log('registro-pago', res);
              // if ( res.success ) {
              _this6.socketService.emit('notificar-pago-pwa', _data); // this.setIdRegistroPagoTransaction(res.data[0].idregistro_pago);


              _this6.setIdPwaPago(res.data[0].idregistro_pago);

              observer.next(res.data[0].idregistro_pago); // }
            });
          });
        }
      }, {
        key: "setIdPwaPago",
        value: function setIdPwaPago(id) {
          localStorage.setItem('sys::irp', id.toString());
        }
      }, {
        key: "getIdPwaPago",
        value: function getIdPwaPago() {
          var idPwaPago = parseInt(localStorage.getItem('sys::irp'), 0);
          idPwaPago = idPwaPago ? 0 : idPwaPago;
          localStorage.removeItem('sys::irp');
          return idPwaPago;
        }
      }, {
        key: "getIpClient",
        value: function getIpClient() {
          var _res = '';
          this.crudService.getFree('https://api.ipify.org?format=jsonp&callback=?').subscribe(function (res) {
            _res = res.ip;
          });
          return _res;
        } // manejo de respuesta en local storage

      }, {
        key: "getDataTrasaction",
        value: function getDataTrasaction() {
          // toma la respuesta de pago
          // this.responseTransaction = JSON.parse(localStorage.getItem('sys::transaction-response'));
          this.loadDataTransaction();
          var resPagoIsSucces = this.responseTransaction ? !this.responseTransaction.error : false;
          this.responseTransaction.isSuccess = !resPagoIsSucces;
          return this.responseTransaction;
        }
      }, {
        key: "setIdRegistroPagoTransaction",
        value: function setIdRegistroPagoTransaction(id) {
          this.loadDataTransaction();
          this.responseTransaction.idregistro_pago = id;
          this.upDataTransaction();
        }
      }, {
        key: "loadDataTransaction",
        value: function loadDataTransaction() {
          // toma la respuesta de pago
          this.responseTransaction = JSON.parse(localStorage.getItem('sys::transaction-response'));
        }
      }, {
        key: "upDataTransaction",
        value: function upDataTransaction() {
          localStorage.setItem('sys::transaction-response', JSON.stringify(this.responseTransaction));
        }
      }, {
        key: "removeLocalDataTransaction",
        value: function removeLocalDataTransaction() {
          localStorage.removeItem('sys::transaction-response');
          this.responseTransaction = null;
        }
      }]);

      return RegistrarPagoService;
    }();

    RegistrarPagoService.ctorParameters = function () {
      return [{
        type: _info_token_service__WEBPACK_IMPORTED_MODULE_2__["InfoTockenService"]
      }, {
        type: _crud_http_service__WEBPACK_IMPORTED_MODULE_3__["CrudHttpService"]
      }, {
        type: _socket_service__WEBPACK_IMPORTED_MODULE_4__["SocketService"]
      }, {
        type: _establecimiento_service__WEBPACK_IMPORTED_MODULE_6__["EstablecimientoService"]
      }];
    };

    RegistrarPagoService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_info_token_service__WEBPACK_IMPORTED_MODULE_2__["InfoTockenService"], _crud_http_service__WEBPACK_IMPORTED_MODULE_3__["CrudHttpService"], _socket_service__WEBPACK_IMPORTED_MODULE_4__["SocketService"], _establecimiento_service__WEBPACK_IMPORTED_MODULE_6__["EstablecimientoService"]])], RegistrarPagoService);
    /***/
  }
}]);
//# sourceMappingURL=default~pages-pagar-cuenta-pagar-cuenta-module~pages-pedido-pedido-module-es5.js.map