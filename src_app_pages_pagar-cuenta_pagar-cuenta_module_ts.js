"use strict";
(self["webpackChunkpwa_app_pedido"] = self["webpackChunkpwa_app_pedido"] || []).push([["src_app_pages_pagar-cuenta_pagar-cuenta_module_ts"],{

/***/ 76919:
/*!***********************************************************!*\
  !*** ./src/app/pages/pagar-cuenta/main/main.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MainComponent": () => (/* binding */ MainComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _main_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.component.html?ngResource */ 27807);
/* harmony import */ var _main_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main.component.css?ngResource */ 33793);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);




let MainComponent = class MainComponent {
    constructor() { }
    ngOnInit() {
    }
};
MainComponent.ctorParameters = () => [];
MainComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-main',
        template: _main_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_main_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], MainComponent);



/***/ }),

/***/ 73453:
/*!***********************************************************!*\
  !*** ./src/app/pages/pagar-cuenta/pagar-cuenta.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PagarCuentaModule": () => (/* binding */ PagarCuentaModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var src_app_core_material_material_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/material/material.module */ 22717);
/* harmony import */ var _pagar_cuenta_pagar_cuenta_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pagar-cuenta/pagar-cuenta.component */ 17911);
/* harmony import */ var _pagar_cuenta_routing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pagar.cuenta.routing */ 2220);
/* harmony import */ var _pago_respuesta_pago_respuesta_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pago-respuesta/pago-respuesta.component */ 47165);
/* harmony import */ var src_app_componentes_dialog_desicion_dialog_desicion_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/componentes/dialog-desicion/dialog-desicion.component */ 99258);
/* harmony import */ var _pedido_confirmado_msj_pedido_confirmado_msj_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pedido-confirmado-msj/pedido-confirmado-msj.component */ 81789);
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./main/main.component */ 76919);










let PagarCuentaModule = class PagarCuentaModule {
};
PagarCuentaModule = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.NgModule)({
        declarations: [
            _pagar_cuenta_pagar_cuenta_component__WEBPACK_IMPORTED_MODULE_1__.PagarCuentaComponent,
            _pago_respuesta_pago_respuesta_component__WEBPACK_IMPORTED_MODULE_3__.PagoRespuestaComponent,
            src_app_componentes_dialog_desicion_dialog_desicion_component__WEBPACK_IMPORTED_MODULE_4__.DialogDesicionComponent,
            _pedido_confirmado_msj_pedido_confirmado_msj_component__WEBPACK_IMPORTED_MODULE_5__.PedidoConfirmadoMsjComponent,
            _main_main_component__WEBPACK_IMPORTED_MODULE_6__.MainComponent
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule,
            _pagar_cuenta_routing__WEBPACK_IMPORTED_MODULE_2__.PagarCuentaRoutingModule,
            src_app_core_material_material_module__WEBPACK_IMPORTED_MODULE_0__.MaterialModule
        ],
        // entryComponents: [
        //   DialogDesicionComponent
        // ]
    })
], PagarCuentaModule);



/***/ }),

/***/ 17911:
/*!***************************************************************************!*\
  !*** ./src/app/pages/pagar-cuenta/pagar-cuenta/pagar-cuenta.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PagarCuentaComponent": () => (/* binding */ PagarCuentaComponent)
/* harmony export */ });
/* harmony import */ var D_Projects_capacitor_pwa_app_pedido_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _pagar_cuenta_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pagar-cuenta.component.html?ngResource */ 33340);
/* harmony import */ var _pagar_cuenta_component_css_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pagar-cuenta.component.css?ngResource */ 79331);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_app_shared_services_navigator_link_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/navigator-link.service */ 12562);
/* harmony import */ var src_app_shared_services_listen_status_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/listen-status.service */ 70190);
/* harmony import */ var src_app_shared_services_info_token_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/info-token.service */ 93674);
/* harmony import */ var src_app_shared_services_estado_pedido_cliente_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/estado-pedido-cliente.service */ 90128);
/* harmony import */ var src_app_shared_services_socket_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/services/socket.service */ 43460);
/* harmony import */ var src_app_shared_services_crud_http_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/services/crud-http.service */ 24677);
/* harmony import */ var src_app_modelos_cliente_pago_model__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/modelos/cliente.pago.model */ 95235);
/* harmony import */ var src_app_shared_services_registrar_pago_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/services/registrar-pago.service */ 30900);
/* harmony import */ var src_app_shared_services_utilitarios_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/services/utilitarios.service */ 60961);
/* harmony import */ var src_app_shared_services_mipedido_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/services/mipedido.service */ 31375);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var src_app_componentes_dialog_desicion_dialog_desicion_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/componentes/dialog-desicion/dialog-desicion.component */ 99258);
/* harmony import */ var src_app_shared_services_notificacion_push_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/shared/services/notificacion-push.service */ 33180);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs */ 32425);
/* harmony import */ var src_app_shared_services_establecimiento_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/shared/services/establecimiento.service */ 32218);
/* harmony import */ var src_app_shared_services_pago_tarjeta_visanet_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/shared/services/pago-tarjeta-visanet.service */ 53524);








 // import { EstadoPedidoModel } from 'src/app/modelos/estado.pedido.model';

 // import { Subscription } from 'rxjs/internal/Subscription';

 // import { SocketClientModel } from 'src/app/modelos/socket.client.model';











let PagarCuentaComponent = class PagarCuentaComponent {
  constructor(infoTokenService, navigatorService, listenStatusService, estadoPedidoClienteService, socketService, crudService, registrarPagoService, utilService, miPedidoService, dialog, pushNotificationSerice, establecimientoServices, pagoTarjetaServices // private verifyClientService: VerifyAuthClientService,
  ) {
    this.infoTokenService = infoTokenService;
    this.navigatorService = navigatorService;
    this.listenStatusService = listenStatusService;
    this.estadoPedidoClienteService = estadoPedidoClienteService;
    this.socketService = socketService;
    this.crudService = crudService;
    this.registrarPagoService = registrarPagoService;
    this.utilService = utilService;
    this.miPedidoService = miPedidoService;
    this.dialog = dialog;
    this.pushNotificationSerice = pushNotificationSerice;
    this.establecimientoServices = establecimientoServices;
    this.pagoTarjetaServices = pagoTarjetaServices;
    this.estadoPedido = [];
    this.isLoaderTransaction = false;
    this.isLoadBtnPago = false;
    this.isCheckTerminos = false;
    this.isTrasctionSuccess = false;
    this.isViewAlertTerminos = false;
    this.isViewAlertEmail = false;
    this.isEmailValid = true;
    this.isDisabledCheck = false; // desabilita el check de terminos

    this.isRequiredEmail = false;
    this.dataResTransaction = null;
    this.pagaConEefectivo = false;
    this.countFin = 6;
    this.intervalConteo = null;
    this.fechaTransaction = new Date();
    this.listenKeyLoader = 'sys::transaction-load';
    this.listenKeyData = 'sys::transaction-response';
    this.unsubscribeEstado = new rxjs__WEBPACK_IMPORTED_MODULE_17__.Subscription();
    this.dataClientePago = new src_app_modelos_cliente_pago_model__WEBPACK_IMPORTED_MODULE_9__.ClientePagoModel();
  }

  ngOnInit() {
    // console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa pago');
    this.navigatorService.disableGoBack();
    this.infoToken = this.infoTokenService.getInfoUs(); // get metodo pago seleccionado por el cliente
    // let mps: any = atob(localStorage.getItem('sys:mps'));
    // try {
    //   mps = mps ? JSON.parse(mps) : this.infoToken.metodoPago;
    // } catch (error) {
    //   mps = null;
    // }

    this.simbolo_moneda = this.establecimientoServices.getSimboloMoneda();
    this.infoToken.metodoPagoSelected = !this.infoToken.metodoPagoSelected ? this.infoToken.metodoPago : this.infoToken.metodoPagoSelected;
    this.pagaConEefectivo = this.infoToken.metodoPagoSelected.idtipo_pago !== 2 ? true : false; // si es en efectivo o yape //diferente de tarjeta 2

    this.isTrasctionSuccess = this.pagaConEefectivo; // marcador que ya pago, si actualiza cierra session

    if (this.infoTokenService.infoUsToken.isPagoSuccess) {
      if (this.infoTokenService.isDelivery()) {
        // console.log('fin pago delivery');
        this.finDelivery();
        return;
      } else {
        this.actionAfterTransaction();
      }
    } // this.estadoPedidoClienteService.get();
    // this.socketClient = this.verifyClientService.getDataClient();
    // envia de frente a la respuesta


    if (this.pagaConEefectivo) {
      this.dataResTransaction = {
        error: false
      };
      this.infoTokenService.setIsPagoSuccess(true);
    }

    this.listener();
    this.getEmailCliente();
  }

  ngOnDestroy() {
    this.unsubscribeEstado.unsubscribe();
  }

  listener() {
    var _this = this;

    return (0,D_Projects_capacitor_pwa_app_pedido_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let arrTotales;

      if (_this.infoToken.isDelivery) {
        // el importe lo toma del localstorage
        arrTotales = JSON.parse(atob(localStorage.getItem('sys::st')));
        _this.estadoPedido.importe = parseFloat(arrTotales[arrTotales.length - 1].importe);

        if (_this.estadoPedido.importe === 0) {
          arrTotales = JSON.parse(atob(_this.infoToken.importeDelivery));
          _this.estadoPedido.importe = parseFloat(arrTotales[arrTotales.length - 1].importe);
        }
      } else {
        _this.estadoPedido.importe = yield _this.estadoPedidoClienteService.getImporteCuenta();
      } // para proteger de los que actualizan luego de pagar


      if (_this.estadoPedido.importe === 0 || _this.estadoPedido.importe === null) {
        _this.cerrarSession();
      } // this.unsubscribeEstado = this.listenStatusService.estadoPedido$.subscribe(res => {
      //   this.estadoPedido = res;
      // });
      // aveces la conexion se pierde, verificar para volver a conectar


      _this.socketService.connect(); // marcar como si se dio btn pago para reload page


      localStorage.setItem('sys::btnP', '0');

      _this.pagoTarjetaServices.listenPaymetResponse$.subscribe(res => {
        if (res) {
          _this.listenResponsePayment(res);
        }
      });

      _this.pagoTarjetaServices.listenPaymetLoader$.subscribe(res => {
        _this.isLoaderTransaction = res;
      });
    })();
  }

  cerrarSession() {
    this.navigatorService.cerrarSession(this.isCheckTerminos); // this.miPedidoService.cerrarSession();

    this.infoTokenService.cerrarSession(); // para cargar nuevamente al ingresar

    this.socketService.isSocketOpenReconect = true;
    this.socketService.closeConnection();
  } // obtener datos del clienteP


  getEmailCliente() {
    const dataClient = {
      id: this.infoToken.idcliente
    };
    this.crudService.postFree(dataClient, 'transaction', 'get-email-client', false).subscribe(res => {
      this.dataClientePago.email = res.data[0].correo ? res.data[0].correo : ''; // desarrollo

      this.dataClientePago.email = 'review@cybersource.com'; //'integraciones.visanet@necomplus.com';
      // this.dataClientePago.email = 'review@cybersource.com';

      this.dataClientePago.isSaveEmail = false; // desarrollo
      // email // comentar si es review@cybersource.com
      // this.isRequiredEmail = this.dataClientePago.email === '' ?  true : false;
      // this.isEmailValid = !this.isRequiredEmail;
      // this.dataClientePago.isSaveEmail = this.isRequiredEmail;

      this.dataClientePago.idcliente = res.data[0].idcliente_card;
      this.dataClientePago.diasRegistrado = res.data[0].dias_registrado;
      this.dataClientePago.nombres = this.infoToken.nombres; // ip del client

      this.dataClientePago.ip = this.infoToken.ipCliente;

      if (!this.dataClientePago.ip) {
        this.crudService.getFree('https://api.ipify.org?format=json').subscribe(_res => {
          this.dataClientePago.ip = _res.ip;
          this.infoTokenService.setLocalIpCliente(this.dataClientePago.ip);
          this.isDisabledCheck = true;
        });
      } else {
        this.isDisabledCheck = true;
      }

      this.getNomApClientePago(this.dataClientePago.nombres);
    });
  } // dividi nombre y apellidos


  getNomApClientePago(nombres) {
    const _names = nombres.split(' ');

    let nameCliente = '';
    let apPaternoCliente = '';

    switch (_names.length) {
      case 1:
        nameCliente = _names[0];
        break;

      case 2:
        nameCliente = _names[0];
        apPaternoCliente = _names[1];
        break;

      case 3:
        nameCliente = _names[0];
        apPaternoCliente = _names[2];
        break;

      case 4:
        nameCliente = _names[0];
        apPaternoCliente = _names[2];
        break;
    }

    this.dataClientePago.nombre = this.utilService.primeraConMayusculas(nameCliente);
    this.dataClientePago.apellido = this.utilService.primeraConMayusculas(apPaternoCliente);
  }

  goPagar() {
    this.isViewAlertEmail = false;
    this.isViewAlertTerminos = false;
    this.isCheckTerminos = !this.isCheckTerminos;

    const _pase = this.isCheckTerminos && this.isEmailValid;

    if (!_pase) {
      this.isViewAlertEmail = true;
      this.isViewAlertTerminos = true; // comentar si review@cybersoruce.com

      return;
    }

    this.isLoadBtnPago = true;
    this.generarPurchasenumber();
  }

  goBack() {
    this.navigatorService.disabledBack = false;
    this.socketService.isSocketOpenReconect = true;
    this.socketService.closeConnection();

    this.navigatorService._router('../pedido'); // this.listenStatusService.setIsPagePagarCuentaShow(false);

  }

  generarPurchasenumber() {
    this.crudService.getAll('transaction', 'get-purchasenumber', false, false, false).subscribe(res => {
      const _purchasenumber = res.data[0].purchasenumber;
      this.el_purchasenumber = _purchasenumber; // ('_purchasenumber', _purchasenumber);
      // pagar(this.estadoPedido.importe, _purchasenumber, this.dataClientePago);

      this.pagoTarjetaServices.processPayment(this.estadoPedido.importe, _purchasenumber, this.dataClientePago); // this.listenResponse();

      this.verificarCheckTerminos();
      this.listenStatusService.setIsBtnPagoShow(true); // marcar como si se dio btn pago para reload page

      localStorage.setItem('sys::btnP', '1');
    });
  }

  listenResponse() {
    // this.timeListenerKeys = setTimeout(() => {
    this.timeListenerKeys = setInterval(() => {
      // }, 500);
      const dataResponse = localStorage.getItem(this.listenKeyData); // console.log('dataResponse', dataResponse);

      this.isLoaderTransaction = localStorage.getItem(this.listenKeyLoader) === '0' ? false : true;

      let _dataTransactionRegister;

      if (dataResponse !== 'null') {
        clearInterval(this.timeListenerKeys);
        this.isLoadBtnPago = false;
        this.dataResTransaction = JSON.parse(dataResponse);
        this.isTrasctionSuccess = !this.dataResTransaction.error;

        if (this.isTrasctionSuccess) {
          // registrar pago
          // const _dataTransactionRegister = {
          //   purchaseNumber: this.dataResTransaction.order.purchaseNumber,
          //   card: this.dataResTransaction.dataMap.CARD,
          //   brand: this.dataResTransaction.dataMap.BRAND,
          //   descripcion: this.dataResTransaction.dataMap.ACTION_DESCRIPTION
          // };
          _dataTransactionRegister = {
            purchaseNumber: this.dataResTransaction.order.purchaseNumber,
            card: this.dataResTransaction.dataMap.CARD,
            brand: this.dataResTransaction.dataMap.BRAND,
            descripcion: this.dataResTransaction.dataMap.ACTION_DESCRIPTION,
            status: this.dataResTransaction.dataMap.STATUS,
            error: this.dataResTransaction.error
          }; // notifica a resumen para enviar el pedido
          // if ( this.infoToken.isSoloLLevar ) {
          //   this.listenStatusService.setPagoSuccess(true);
          // }
          // cuando es Cliente Delivery
          // guarda primero el pedido

          if (this.infoToken.isDelivery) {
            this.isLoaderTransaction = true;

            const _dataSendPedido = JSON.parse(atob(this.infoToken.orderDelivery)); // _dataSendPedido.sokcetId = this.infoToken.socketId; // para que me notificque el idpedido


            this.registrarPagoService.registrarPago(this.estadoPedido.importe.toString(), _dataTransactionRegister, this.dataClientePago, true).subscribe(idPwaPago => {
              _dataSendPedido.dataPedido.p_header.idregistro_pago = idPwaPago; // this.socketService.emit('nuevoPedido', _dataSendPedido);
              // 050721 // priorizamos socket
              // 280321
              // hay algunos pagos que no se registran, si el socket no responde por algun motivio
              // guarda por post

              this.socketService.emitRes('nuevoPedido', _dataSendPedido).subscribe(resSocket => {
                if (resSocket === false) {
                  this.crudService.postFree(JSON.stringify(_dataSendPedido), 'pedido', 'registrar-nuevo-pedido', false).subscribe(res => {
                    console.log('pedido registrado');
                  });
                }
              }); // priorizamos el post
              // this.crudService.postFree(JSON.stringify(_dataSendPedido), 'pedido', 'registrar-nuevo-pedido', false)
              // .subscribe((res: any) => {
              //   if ( !res.success ) {
              //     this.socketService.emitRes('nuevoPedido', _dataSendPedido).subscribe(resSocket => {
              //       if ( resSocket === false ) {
              //         alert('!Ups a ocurrido un error, al registrar el pedido por favor, cominiquese con soporte.');
              //         return;
              //       }
              //       });
              //   } else {
              //     // enviar socket impresion
              //     _dataSendPedido.dataPedido.idpedido = res.data[0].idpedido;
              //     _dataSendPedido.dataPrint = res.data[0].data;
              //     this.socketService.emit('nuevoPedido2', _dataSendPedido);
              //   }
              // });

              setTimeout(() => {
                this.isLoaderTransaction = false; // marcador si actualiza la pagina cuando ya pago

                this.infoTokenService.setIsPagoSuccess(true);
                return;
              }, 1900);
            });
          } else {
            this.infoTokenService.setIsPagoSuccess(true);
            this.registrarPagoService.registrarPago(this.estadoPedido.importe.toString(), _dataTransactionRegister, this.dataClientePago).subscribe(idPwaPago => {
              const _idPago = idPwaPago;
            });
          }
        } else {
          _dataTransactionRegister = {
            purchaseNumber: this.el_purchasenumber,
            card: this.dataResTransaction.data.CARD,
            brand: this.dataResTransaction.data.BRAND,
            descripcion: this.dataResTransaction.data.ACTION_DESCRIPTION,
            status: this.dataResTransaction.data.STATUS,
            error: this.dataResTransaction.error
          };
          this.registrarPagoService.registrarPago(this.estadoPedido.importe.toString(), _dataTransactionRegister, this.dataClientePago).subscribe(idPwaPago => {
            const _idPagoA = idPwaPago;
          });
        } // cuenta para cerrar
        // this.cuentaRegresiva();
        // }


        localStorage.removeItem(this.listenKeyData);
      } // else {
      //   this.listenResponse();
      // }

    }, 900);
  }

  listenResponsePayment(_dataResTransaction) {
    this.dataResTransaction = _dataResTransaction;
    this.isLoaderTransaction = true;

    let _dataTransactionRegister;

    this.isTrasctionSuccess = !this.dataResTransaction.error;

    if (this.isTrasctionSuccess) {
      _dataTransactionRegister = {
        purchaseNumber: this.dataResTransaction.order.purchaseNumber,
        card: this.dataResTransaction.dataMap.CARD,
        brand: this.dataResTransaction.dataMap.BRAND,
        descripcion: this.dataResTransaction.dataMap.ACTION_DESCRIPTION,
        status: this.dataResTransaction.dataMap.STATUS,
        error: this.dataResTransaction.error
      }; // cuando es Cliente Delivery
      // guarda primero el pedido

      if (this.infoToken.isDelivery) {
        this.isLoaderTransaction = true;

        const _dataSendPedido = JSON.parse(atob(this.infoToken.orderDelivery)); // _dataSendPedido.sokcetId = this.infoToken.socketId; // para que me notificque el idpedido


        this.registrarPagoService.registrarPago(this.estadoPedido.importe.toString(), _dataTransactionRegister, this.dataClientePago, true).subscribe(idPwaPago => {
          _dataSendPedido.dataPedido.p_header.idregistro_pago = idPwaPago; // this.socketService.emit('nuevoPedido', _dataSendPedido);
          // 050721 // priorizamos socket
          // 280321
          // hay algunos pagos que no se registran, si el socket no responde por algun motivio
          // guarda por post

          this.socketService.emitRes('nuevoPedido', _dataSendPedido).subscribe(resSocket => {
            if (resSocket === false) {
              this.crudService.postFree(JSON.stringify(_dataSendPedido), 'pedido', 'registrar-nuevo-pedido', false).subscribe(res => {
                console.log('pedido registrado');
              });
            }
          });
          setTimeout(() => {
            this.isLoaderTransaction = false; // marcador si actualiza la pagina cuando ya pago

            this.infoTokenService.setIsPagoSuccess(true); // 5 segundos lanza a zona delivery

            setTimeout(() => {
              this.finDelivery();
            }, 6000);
            return;
          }, 1900);
        });
      } else {
        this.infoTokenService.setIsPagoSuccess(true);
        this.registrarPagoService.registrarPago(this.estadoPedido.importe.toString(), _dataTransactionRegister, this.dataClientePago).subscribe(idPwaPago => {
          this.isLoaderTransaction = false;
          const _idPago = idPwaPago;
        });
      }
    } else {
      _dataTransactionRegister = {
        purchaseNumber: this.el_purchasenumber,
        card: this.dataResTransaction.data.CARD,
        brand: this.dataResTransaction.data.BRAND,
        descripcion: this.dataResTransaction.data.ACTION_DESCRIPTION,
        status: this.dataResTransaction.data.STATUS,
        error: this.dataResTransaction.error
      };
      this.registrarPagoService.registrarPago(this.estadoPedido.importe.toString(), _dataTransactionRegister, this.dataClientePago).subscribe(idPwaPago => {
        this.isLoaderTransaction = false;
        const _idPagoA = idPwaPago;
      });
    }
  }

  verificarCheckTerminos() {
    this.isViewAlertTerminos = this.isCheckTerminos ? false : true;
    this.isViewAlertEmail = !this.isEmailValid; // comentar si review@cybersoruce.com
  }

  verificarCorreo(el) {
    this.isEmailValid = el.checkValidity();
    this.isViewAlertEmail = !this.isEmailValid;
    this.dataClientePago.email = el.value;
  }

  cuentaRegresiva() {
    if (this.countFin <= 0) {
      this.intervalConteo = null;
      this.actionAfterTransaction();
    } else {
      this.conteoFinEncuesta();
    }
  }

  conteoFinEncuesta() {
    this.intervalConteo = setTimeout(() => {
      this.countFin--;
      this.cuentaRegresiva();
    }, 1000);
  }

  actionAfterTransaction() {
    // this.lanzarPermisoNotificationPush(1);
    if (this.dataResTransaction) {
      if (this.dataResTransaction.error) {
        // this.navigatorService._router('../pedido');
        this.goBack();
      } else {
        if (this.infoToken.isSoloLLevar) {
          this.goBack(); // this.navigatorService._router('../pedido');
        } else {
          // verificar si el establecimiento tiene activada la opcion de encuesta
          this.navigatorService._router('../lanzar-encuesta');
        }

        this.miPedidoService.prepareNewPedido();
      }
    } // this.miPedidoService.prepareNewPedido();

  }

  finDelivery() {
    this.lanzarPermisoNotificationPush(0); // limpiar storage transaccion

    this.miPedidoService.prepareNewPedido();
    this.infoTokenService.cerrarSession();
    this.socketService.isSocketOpenReconect = true;
    this.socketService.closeConnection();
    this.dataResTransaction = null;

    this.navigatorService.__router('../zona-delivery');
  }

  lanzarPermisoNotificationPush(option = 0) {
    var _this2 = this;

    return (0,D_Projects_capacitor_pwa_app_pedido_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // this.pushNotificationSerice.suscribirse(option);
      if (yield _this2.pushNotificationSerice.getIsTienePermiso()) {
        _this2.pushNotificationSerice.suscribirse();

        return;
      } // si no tiene permiso le pregunta


      const _dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_18__.MatDialogConfig();

      _dialogConfig.disableClose = true;
      _dialogConfig.hasBackdrop = true;
      _dialogConfig.data = {
        idMjs: option
      };

      const dialogReset = _this2.dialog.open(src_app_componentes_dialog_desicion_dialog_desicion_component__WEBPACK_IMPORTED_MODULE_13__.DialogDesicionComponent, _dialogConfig);

      dialogReset.afterClosed().subscribe(result => {
        if (result) {
          _this2.pushNotificationSerice.suscribirse();
        }
      });
    })();
  }

};

PagarCuentaComponent.ctorParameters = () => [{
  type: src_app_shared_services_info_token_service__WEBPACK_IMPORTED_MODULE_5__.InfoTockenService
}, {
  type: src_app_shared_services_navigator_link_service__WEBPACK_IMPORTED_MODULE_3__.NavigatorLinkService
}, {
  type: src_app_shared_services_listen_status_service__WEBPACK_IMPORTED_MODULE_4__.ListenStatusService
}, {
  type: src_app_shared_services_estado_pedido_cliente_service__WEBPACK_IMPORTED_MODULE_6__.EstadoPedidoClienteService
}, {
  type: src_app_shared_services_socket_service__WEBPACK_IMPORTED_MODULE_7__.SocketService
}, {
  type: src_app_shared_services_crud_http_service__WEBPACK_IMPORTED_MODULE_8__.CrudHttpService
}, {
  type: src_app_shared_services_registrar_pago_service__WEBPACK_IMPORTED_MODULE_10__.RegistrarPagoService
}, {
  type: src_app_shared_services_utilitarios_service__WEBPACK_IMPORTED_MODULE_11__.UtilitariosService
}, {
  type: src_app_shared_services_mipedido_service__WEBPACK_IMPORTED_MODULE_12__.MipedidoService
}, {
  type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_18__.MatDialog
}, {
  type: src_app_shared_services_notificacion_push_service__WEBPACK_IMPORTED_MODULE_14__.NotificacionPushService
}, {
  type: src_app_shared_services_establecimiento_service__WEBPACK_IMPORTED_MODULE_15__.EstablecimientoService
}, {
  type: src_app_shared_services_pago_tarjeta_visanet_service__WEBPACK_IMPORTED_MODULE_16__.PagoTarjetaVisanetService
}];

PagarCuentaComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_19__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_20__.Component)({
  selector: 'app-pagar-cuenta',
  template: _pagar_cuenta_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_pagar_cuenta_component_css_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], PagarCuentaComponent);


/***/ }),

/***/ 2220:
/*!************************************************************!*\
  !*** ./src/app/pages/pagar-cuenta/pagar.cuenta.routing.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PagarCuentaRoutingModule": () => (/* binding */ PagarCuentaRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _pagar_cuenta_pagar_cuenta_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pagar-cuenta/pagar-cuenta.component */ 17911);
/* harmony import */ var _pago_respuesta_pago_respuesta_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pago-respuesta/pago-respuesta.component */ 47165);
/* harmony import */ var _pedido_confirmado_msj_pedido_confirmado_msj_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pedido-confirmado-msj/pedido-confirmado-msj.component */ 81789);






const routes = [{
        path: '', component: _pagar_cuenta_pagar_cuenta_component__WEBPACK_IMPORTED_MODULE_0__.PagarCuentaComponent,
        data: { titulo: 'Cuenta' },
        children: [
            {
                path: '', redirectTo: 'pagar-cuenta'
            }, {
                path: 'pago-res',
                component: _pago_respuesta_pago_respuesta_component__WEBPACK_IMPORTED_MODULE_1__.PagoRespuestaComponent
            }, {
                path: 'pedido-confirmado',
                component: _pedido_confirmado_msj_pedido_confirmado_msj_component__WEBPACK_IMPORTED_MODULE_2__.PedidoConfirmadoMsjComponent
            }
        ]
    }];
let PagarCuentaRoutingModule = class PagarCuentaRoutingModule {
};
PagarCuentaRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
    })
], PagarCuentaRoutingModule);



/***/ }),

/***/ 47165:
/*!*******************************************************************************!*\
  !*** ./src/app/pages/pagar-cuenta/pago-respuesta/pago-respuesta.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PagoRespuestaComponent": () => (/* binding */ PagoRespuestaComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _pago_respuesta_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pago-respuesta.component.html?ngResource */ 87526);
/* harmony import */ var _pago_respuesta_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pago-respuesta.component.css?ngResource */ 90987);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);




let PagoRespuestaComponent = class PagoRespuestaComponent {
    constructor() { }
    ngOnInit() {
    }
};
PagoRespuestaComponent.ctorParameters = () => [];
PagoRespuestaComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-pago-respuesta',
        template: _pago_respuesta_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_pago_respuesta_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], PagoRespuestaComponent);



/***/ }),

/***/ 81789:
/*!*********************************************************************************************!*\
  !*** ./src/app/pages/pagar-cuenta/pedido-confirmado-msj/pedido-confirmado-msj.component.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PedidoConfirmadoMsjComponent": () => (/* binding */ PedidoConfirmadoMsjComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _pedido_confirmado_msj_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pedido-confirmado-msj.component.html?ngResource */ 71164);
/* harmony import */ var _pedido_confirmado_msj_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pedido-confirmado-msj.component.css?ngResource */ 27411);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);




let PedidoConfirmadoMsjComponent = class PedidoConfirmadoMsjComponent {
    constructor() { }
    ngOnInit() {
    }
};
PedidoConfirmadoMsjComponent.ctorParameters = () => [];
PedidoConfirmadoMsjComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-pedido-confirmado-msj',
        template: _pedido_confirmado_msj_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_pedido_confirmado_msj_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], PedidoConfirmadoMsjComponent);



/***/ }),

/***/ 53524:
/*!*****************************************************************!*\
  !*** ./src/app/shared/services/pago-tarjeta-visanet.service.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PagoTarjetaVisanetService": () => (/* binding */ PagoTarjetaVisanetService)
/* harmony export */ });
/* harmony import */ var D_Projects_capacitor_pwa_app_pedido_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/internal/BehaviorSubject */ 88898);
/* harmony import */ var rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_1__);




let PagoTarjetaVisanetService = class PagoTarjetaVisanetService {
  constructor() {
    this.cargando_transaction = false;
    this.parametros = [{
      user: 'integraciones.visanet@necomplus.com',
      password: 'd5e7nk$M',
      merchantId: '522591303',
      urlApiSeguridad: 'https://apitestenv.vnforapps.com/api.security/v1/security',
      urlApiSesion: 'https://apitestenv.vnforapps.com/api.ecommerce/v2/ecommerce/token/session/',
      urlApiAutorization: 'https://apitestenv.vnforapps.com/api.authorization/v3/authorization/ecommerce/',
      urlJs: 'https://static-content-qas.vnforapps.com/v2/js/checkout.js?qa=true',
      logo: 'http://web-p.test:8080/images/l-pay-2.png',
      Authorization: 'Basic aW50ZWdyYWNpb25lcy52aXNhbmV0QG5lY29tcGx1cy5jb206ZDVlN25rJE0='
    }, {
      user: 'macraze.info@gmail.com',
      password: 'j34Oz!nB',
      merchantId: '650149801',
      urlApiSeguridad: 'https://apiprod.vnforapps.com/api.security/v1/security',
      urlApiSesion: 'https://apiprod.vnforapps.com/api.ecommerce/v2/ecommerce/token/session/',
      urlApiAutorization: 'https://apiprod.vnforapps.com/api.authorization/v3/authorization/ecommerce/',
      urlJs: 'https://static-content.vnforapps.com/v2/js/checkout.js',
      logo: 'https://papaya.com.pe/images/l-pay-2.png',
      Authorization: 'Basic bWFjcmF6ZS5pbmZvQGdtYWlsLmNvbTpqMzRPeiFuQg=='
    }];
    this.listenPaymetResponseSource = new rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(null);
    this.listenPaymetResponse$ = this.listenPaymetResponseSource.asObservable();
    this.listenPaymetLoaderSource = new rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(false);
    this.listenPaymetLoader$ = this.listenPaymetLoaderSource.asObservable();
    this.parametrosSelected = this.parametros[1];
    window.addEventListener('payment.success', event => {
      this.generateAutorizacion(event.detail);
    });
  }

  processPayment(_importe, _purchasenumber, _dataClie) {
    this.importe = parseFloat(_importe).toFixed(2).toString();
    this.purchasenumber = _purchasenumber;
    this.dataCliente = _dataClie; // dataCliente.email_token = dataCliente.idcliente +'@apitoken.com'; // para guardar las tarjetas - userToken

    this.dataCliente.email_token = this.dataCliente.email;
    this.getIpCliente();
  }

  getIpCliente() {
    // antifraude
    this.dataCliente.antifraud = {
      'clientIp': this.dataCliente.ip,
      'merchantDefineData': {
        'MDD4': this.dataCliente.email,
        'MDD32': this.dataCliente.idcliente,
        'MDD75': 'Invitado',
        'MDD77': this.dataCliente.diasRegistrado,
        'MDD89': '1' // "MDD70": "1", // correo electronico confirmado

      }
    };
    this.generarToken();
  }

  generarToken() {
    const _url = this.parametrosSelected.urlApiSeguridad;
    const settings = {
      'async': true,
      'crossDomain': true,
      // 'url': this.parametrosSelected.urlApiSeguridad,
      'method': 'POST',
      'headers': {
        'Authorization': this.parametrosSelected.Authorization,
        // 'content-type' : 'text/plain',
        'Accept': '*/*'
      }
    };
    fetch(_url, settings).then(response => response.text()).then(response => {
      this.tokenGenerate = response;
      this.generarSesion(response);
    });
  }

  generarSesion(token) {
    const data = {
      'amount': this.importe,
      'antifraud': null,
      'channel': 'web',
      'recurrenceMaxAmount': null
    };
    const settings = {
      'async': true,
      'crossDomain': true,
      'url': this.parametrosSelected.urlApiSesion + this.parametrosSelected.merchantId,
      'method': 'POST',
      'headers': {
        'Authorization': token,
        'Content-Type': 'application/json'
      },
      'dataMap': {
        'userToken': this.dataCliente.email
      },
      'processData': false,
      'body': JSON.stringify(data)
    };

    const _url = this.parametrosSelected.urlApiSesion + this.parametrosSelected.merchantId;

    fetch(_url, settings).then(response => response.json()).then(response => {
      this.generarBoton(response['sessionKey']);
    });
  }

  generarBoton(sessionKey) {
    const moneda = 'PEN'; /// DEV
    // var nombre = 'Integraciones';
    // var apellido = 'VisaNet';
    // var email = 'integraciones.visanet@necomplus.com';
    // PROD

    const nombre = this.dataCliente.nombre;
    const apellido = this.dataCliente.apellido;
    const email = this.dataCliente.email;
    const json = {
      'merchantId': this.parametrosSelected.merchantId,
      'moneda': moneda,
      'nombre': nombre,
      'apellido': apellido,
      'importe': this.importe,
      'email': email
    }; // localStorage.setItem('data', JSON.stringify(json));

    const form = document.createElement('form');
    form.setAttribute('method', 'post');
    form.setAttribute('action', 'javascript:responseFormProd(self)');
    form.setAttribute('id', 'boton_pago');
    document.getElementById('btn_pago').appendChild(form);
    const scriptEl = document.createElement('script');
    scriptEl.setAttribute('src', this.parametrosSelected.urlJs);
    scriptEl.setAttribute('data-sessiontoken', sessionKey);
    scriptEl.setAttribute('data-channel', 'web');
    scriptEl.setAttribute('data-merchantid', this.parametrosSelected.merchantId);
    scriptEl.setAttribute('data-purchasenumber', this.purchasenumber);
    scriptEl.setAttribute('data-amount', this.importe);
    scriptEl.setAttribute('data-merchantlogo', this.parametrosSelected.logo);
    scriptEl.setAttribute('data-expirationminutes', '8');
    scriptEl.setAttribute('data-timeouturl', 'javascript:responseFormProd(self)');
    scriptEl.setAttribute('data-cardholdername', nombre);
    scriptEl.setAttribute('data-cardholderlastname', apellido);
    scriptEl.setAttribute('data-cardholderemail', email);
    scriptEl.setAttribute('data-usertoken', email);
    document.getElementById('boton_pago').appendChild(scriptEl);
    document.getElementById('btn-disabled').classList.add('btn-hidden');
  }

  generateAutorizacion(transactionToken) {
    var _this = this;

    return (0,D_Projects_capacitor_pwa_app_pedido_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.listenPaymetLoaderSource.next(true);

      _this.cargando_transaction = true;
      const token = _this.tokenGenerate; // localStorage.getItem("token");

      const data = {
        'antifraud': _this.dataCliente.antifraud,
        'captureType': 'manual',
        'channel': 'web',
        'countable': false,
        'order': {
          'amount': _this.importe,
          'currency': 'PEN',
          'purchaseNumber': _this.purchasenumber,
          'tokenId': transactionToken
        }
      };

      const _url = _this.parametrosSelected.urlApiAutorization + _this.parametrosSelected.merchantId;

      const settings = {
        'method': 'POST',
        'headers': {
          'Authorization': token,
          'Content-Type': 'application/json'
        },
        'body': JSON.stringify(data)
      };
      fetch(_url, settings).then(response => response.json()).then(res => {
        const hayError = res.errorCode ? true : false;
        res.error = hayError;

        _this.loaderTransactionResponse(res, hayError);

        _this.listenPaymetResponseSource.next(res);
      }).catch(error => {
        error.error = true;

        _this.loaderTransactionResponse(error, true);

        _this.listenPaymetResponseSource.next(error); // loaderTransaction(0);
        // console.log(error);

      });
    })();
  }

  loaderTransactionResponse(res, isError) {
    if (res) {
      res.error = isError;
      const elem = document.querySelector('#visaNetWrapper');
      elem.parentNode.removeChild(elem);
    } // localStorage.setItem('sys::transaction-response', JSON.stringify(res));

  }

};

PagoTarjetaVisanetService.ctorParameters = () => [];

PagoTarjetaVisanetService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
  providedIn: 'root'
})], PagoTarjetaVisanetService);


/***/ }),

/***/ 33793:
/*!***********************************************************************!*\
  !*** ./src/app/pages/pagar-cuenta/main/main.component.css?ngResource ***!
  \***********************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtYWluLmNvbXBvbmVudC5jc3MifQ== */";

/***/ }),

/***/ 79331:
/*!***************************************************************************************!*\
  !*** ./src/app/pages/pagar-cuenta/pagar-cuenta/pagar-cuenta.component.css?ngResource ***!
  \***************************************************************************************/
/***/ ((module) => {

module.exports = ".content-pago {\r\n    height: 100vh;\r\n    background: #E5EFF7;\r\n}\r\n\r\n.header-pago {\r\n    background: #3F51B5;\r\n    color: white;\r\n    width: 100%;\r\n}\r\n\r\n.loader-pago {\r\n    position: absolute;\r\n    z-index: 1;\r\n    height: 100vh;\r\n    text-align: center;\r\n    vertical-align: middle;\r\n    background: #212121;\r\n    width: 100%;\r\n    opacity: 0.9;\r\n    color: white;\r\n}\r\n\r\n.loader-pago div {\r\n    top: 50%;\r\n    position: relative;\r\n    width: 50%;    \r\n    margin: 0 auto;\r\n}\r\n\r\n.btn-pago-disabled {\r\n    -webkit-transition: all ease-in-out 1s;\r\n    transition: all ease-in-out 1s;\r\n    background: grey;\r\n    border-radius: 5px;\r\n    padding: 8px;\r\n    width: 50%;\r\n    color: white;\r\n    position: relative;\r\n    text-align: center;\r\n    margin: 0 auto;\r\n}\r\n\r\n.btn-hidden {\r\n    display: none;\r\n}\r\n\r\n.div-btn {\r\n    height: 48px;\r\n}\r\n\r\n.banner-res-ok {\r\n    color: white;\r\n    background: #436BE1;\r\n}\r\n\r\n.banner-res-error {\r\n    color: white;\r\n    background: #ef5350;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2FyLWN1ZW50YS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osV0FBVztBQUNmOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsV0FBVztJQUNYLFlBQVk7SUFDWixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksUUFBUTtJQUNSLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsY0FBYztBQUNsQjs7QUFHQTtJQUNJLHNDQUE4QjtJQUE5Qiw4QkFBOEI7SUFDOUIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osVUFBVTtJQUNWLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osbUJBQW1CO0FBQ3ZCIiwiZmlsZSI6InBhZ2FyLWN1ZW50YS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRlbnQtcGFnbyB7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgYmFja2dyb3VuZDogI0U1RUZGNztcclxufVxyXG5cclxuLmhlYWRlci1wYWdvIHtcclxuICAgIGJhY2tncm91bmQ6ICMzRjUxQjU7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmxvYWRlci1wYWdvIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgIGJhY2tncm91bmQ6ICMyMTIxMjE7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG9wYWNpdHk6IDAuOTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmxvYWRlci1wYWdvIGRpdiB7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiA1MCU7ICAgIFxyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbn1cclxuXHJcblxyXG4uYnRuLXBhZ28tZGlzYWJsZWQge1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIGVhc2UtaW4tb3V0IDFzO1xyXG4gICAgYmFja2dyb3VuZDogZ3JleTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIHBhZGRpbmc6IDhweDtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxufVxyXG5cclxuLmJ0bi1oaWRkZW4ge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLmRpdi1idG4ge1xyXG4gICAgaGVpZ2h0OiA0OHB4O1xyXG59XHJcblxyXG4uYmFubmVyLXJlcy1vayB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBiYWNrZ3JvdW5kOiAjNDM2QkUxO1xyXG59XHJcblxyXG4uYmFubmVyLXJlcy1lcnJvciB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZWY1MzUwO1xyXG59Il19 */";

/***/ }),

/***/ 90987:
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/pagar-cuenta/pago-respuesta/pago-respuesta.component.css?ngResource ***!
  \*******************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYWdvLXJlc3B1ZXN0YS5jb21wb25lbnQuY3NzIn0= */";

/***/ }),

/***/ 27411:
/*!*********************************************************************************************************!*\
  !*** ./src/app/pages/pagar-cuenta/pedido-confirmado-msj/pedido-confirmado-msj.component.css?ngResource ***!
  \*********************************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwZWRpZG8tY29uZmlybWFkby1tc2ouY29tcG9uZW50LmNzcyJ9 */";

/***/ }),

/***/ 27807:
/*!************************************************************************!*\
  !*** ./src/app/pages/pagar-cuenta/main/main.component.html?ngResource ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = "<router-outlet></router-outlet>";

/***/ }),

/***/ 33340:
/*!****************************************************************************************!*\
  !*** ./src/app/pages/pagar-cuenta/pagar-cuenta/pagar-cuenta.component.html?ngResource ***!
  \****************************************************************************************/
/***/ ((module) => {

module.exports = "<div class=\"loader-pago\" *ngIf=\"isLoaderTransaction\">\r\n  <div>\r\n    <span>Verificando, un momento por favor...</span>\r\n    <mat-progress-bar mode=\"indeterminate\"></mat-progress-bar>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"animated fadeIn content-pago\">    \r\n\r\n  <!-- header -->\r\n  <div class=\"header-pago p-3\">    \r\n    <i *ngIf=\"!isTrasctionSuccess\" class=\"fa fa-arrow-left\" (click)=\"goBack()\" [routerLink]=\"['../']\"></i>    \r\n    <span class=\"pl-2\">Pagar con {{ infoToken.metodoPago.descripcion }}</span>\r\n  </div>\r\n\r\n\r\n  <!-- pago -->\r\n\r\n  <div *ngIf=\"!dataResTransaction\" class=\"animated fadeInUp\">    \r\n    <!-- body -->\r\n    <div class=\"p-3\" style=\"max-width: 500px; margin: 0 auto;\">\r\n\r\n      <mat-card class=\"mt-2 mb-2\">\r\n        <div class=\"text-center\">\r\n            <p>Importe a pagar:</p>\r\n            <div>              \r\n              <p class=\"fs-30 fw-600\"><span class=\"fs-15\">{{simbolo_moneda}}</span>  <span id=\"importe\">{{estadoPedido.importe | number: '0.2'}}</span> </p>\r\n            </div>            \r\n            <hr>\r\n\r\n            <!-- correo -->\r\n            <div *ngIf=\"isRequiredEmail\" class=\"w-100\">              \r\n              <p class=\"fs-13 fw-100\" ng [ngClass]=\"{'text-danger animated flash': isViewAlertEmail}\">Se requiere un coreo para notificarle.</p>\r\n              <mat-form-field class=\"w-100 text-center\">\r\n                <input matInput         \r\n                  type=\"email\" \r\n                  name=\"email\"\r\n                  class=\"text-center\"\r\n                  pattern=\"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$\"\r\n                  placeholder=\"Correo electronico\" \r\n                  (keyup) = \"verificarCorreo(txtCorreo)\"\r\n                  #txtCorreo>\r\n                </mat-form-field>\r\n                <span class=\"fs-13 fw-100 text-danger m-0 p-0\" [hidden]=\"isEmailValid\">Correo no valido</span>\r\n                <hr>\r\n            </div>\r\n\r\n            <!-- check terminos -->\r\n            <div class=\"text-center\" *ngIf=\"isDisabledCheck && isEmailValid\">\r\n              <mat-checkbox  (click)=\"goPagar()\">Acepto los <a href=\"http://papaya.com.pe/terminos-condiciones.html\" target=\"_blank\">Terminos y condiciones</a></mat-checkbox>\r\n              <p *ngIf=\"isViewAlertTerminos\" class=\"fw-100 fs-14 text-danger animated flash\">Acepte los terminos.</p>\r\n              <hr>\r\n            </div>\r\n\r\n            <!-- <div class=\"w-70\">\r\n              <mat-checkbox  (click)=\"goPagar()\">Acepto los <a href=\"http://papaya.com.pe/terminos-condiciones.html\" target=\"_blank\">Terminos y condiciones</a></mat-checkbox>\r\n              <p *ngIf=\"isViewAlertTerminos\" class=\"fw-100 fs-14 text-danger animated flash\">Acepte los terminos.</p>\r\n              <hr>\r\n            </div> -->\r\n            \r\n            <div class=\"div-btn\">\r\n              <div id=\"btn_pago\">\r\n                <!-- <form method=\"post\" id=\"boton_pago\" action=\"javascript:responseFormA();\">\r\n                </form> -->\r\n              </div>\r\n  \r\n              <div id=\"btn-disabled\" class=\"btn-pago-disabled\" (click)=\"verificarCheckTerminos()\">\r\n                <span [hidden]=\"!isLoadBtnPago\" class=\"fa fa-spinner fa-spin\"></span> \r\n                <span [hidden]=\"isLoadBtnPago\">Pagar Aqui</span>\r\n              </div>\r\n            </div>\r\n        </div>\r\n      </mat-card>      \r\n\r\n        <mat-accordion>\r\n            <mat-expansion-panel>\r\n              <mat-expansion-panel-header>\r\n                <mat-panel-title>\r\n                  Datos de Facturación\r\n                </mat-panel-title>                \r\n              </mat-expansion-panel-header>\r\n          \r\n              <!-- <mat-form-field>\r\n                <input matInput placeholder=\"First name\">\r\n              </mat-form-field>\r\n          \r\n              <mat-form-field>\r\n                <input matInput placeholder=\"Age\">\r\n              </mat-form-field> -->\r\n\r\n              <span class=\"fw-100 text-secondary\">Muy pronto podrás obtener tu comprobante de consumo por este medio. Por el momento lo puede solicitar en caja.</span>\r\n            </mat-expansion-panel>            \r\n        </mat-accordion>              \r\n    \r\n    </div>\r\n  </div>\r\n\r\n\r\n  <!-- respuesta -->\r\n  <div *ngIf=\"dataResTransaction\" class=\"animated fadeIn\">\r\n\r\n    <ng-container *ngIf=\"dataResTransaction.error; else elseTemplate\">\r\n      <div class=\"text-center fs-20 fw-100 banner-res-error p-3\">\r\n        <i class=\"fa fa-times-circle-o fa-2x\" aria-hidden=\"true\"></i>\r\n        <p>Ups! hubo un problema.</p>\r\n      </div>      \r\n\r\n      <div class=\"p-3 bg-white\">\r\n        <div class=\"text-center\">\r\n          <span class=\"fw-100\">\r\n            {{dataResTransaction.errorMessage}} <br>\r\n            {{dataResTransaction.data.ACTION_DESCRIPTION}} <br>\r\n            {{dataResTransaction.data.CARD}} <br>\r\n          </span>\r\n        </div>\r\n      </div>\r\n\r\n\r\n      <div class=\"p-3 bg-white\">\r\n        <div class=\"text-center\">\r\n          <button mat-flat-button color=\"accent\" (click)=\"goBack()\">Regresar</button>\r\n        </div>\r\n      </div>\r\n\r\n    </ng-container>\r\n\r\n    <ng-template #elseTemplate>\r\n     \r\n      <!-- transaccion exitosa -->\r\n      <ng-container *ngIf=\"!this.infoToken.isDelivery; else esClienteDelivery\">\r\n        \r\n        <!-- no delivery -->\r\n          <div class=\"text-center fs-20 fw-100 banner-res-ok p-3\">\r\n            <i class=\"fa fa-check-circle-o fa-2x\" aria-hidden=\"true\"></i>            \r\n            <p class=\"t-e-n\">Transacción Existosa.</p>\r\n            \r\n          </div>\r\n    \r\n          <div class=\"p-3 bg-white\">\r\n            <div class=\"text-center\">\r\n              <span class=\"fw-100\">\r\n                {{dataResTransaction.dataMap.ACTION_DESCRIPTION}}\r\n              </span>\r\n            </div>\r\n          </div>\r\n    \r\n          <div class=\"p-3\">\r\n            <div class=\"text-left fw-100\">\r\n              <table>\r\n                <tr>\r\n                  <td>Fecha</td>\r\n                  <td>: {{fechaTransaction | date: 'dd/mm/yy h:mm:ss a'}}</td>\r\n                </tr>\r\n                <tr>\r\n                  <td>N° Pedido</td>\r\n                  <td>: {{dataResTransaction.order.purchaseNumber}}</td>\r\n                </tr>\r\n                <tr>\r\n                  <td>N° Tarjeta</td>\r\n                  <td>: {{dataResTransaction.dataMap.CARD}}</td>\r\n                </tr>\r\n                <tr>\r\n                  <td>Descripcion</td>\r\n                  <td>: Pago de cuenta</td>\r\n                </tr>            \r\n                <tr>\r\n                  <td>Mesa</td>\r\n                  <td>: {{infoToken.numMesaLector}}</td>\r\n                </tr>\r\n                <tr>\r\n                  <td>Importe</td>\r\n                  <td>: {{estadoPedido.importe | number: '0.2'}} {{dataResTransaction.order.currency}}</td>\r\n                </tr>            \r\n              </table>\r\n            </div>\r\n          </div>     \r\n\r\n\r\n          <div class=\"p-3 bg-white text-center\">          \r\n            <button mat-flat-button color=\"primary\" (click)=\"actionAfterTransaction()\"> Listo </button>\r\n            <br>\r\n          </div>\r\n\r\n\r\n      </ng-container>\r\n      <ng-template #esClienteDelivery>\r\n        \r\n        <!-- cliente delivery -->\r\n        <div class=\"text-center fs-20 fw-100 banner-res-ok p-3\">\r\n          <i class=\"fa fa-check-circle-o fa-2x\" aria-hidden=\"true\"></i>\r\n          <ng-container *ngIf=\"!pagaConEefectivo; else divPagoEfectivo\">              \r\n            <p class=\"t-e\">Transacción Existosa.</p>\r\n          </ng-container>\r\n          <ng-template #divPagoEfectivo>\r\n            <p>Listo.</p>\r\n          </ng-template>\r\n        </div>\r\n\r\n        <!-- <div class=\"p-3 bg-white text-center\">          \r\n          <button mat-flat-button color=\"primary\" (click)=\"finDelivery()\"> Listo. </button>\r\n          <br>\r\n        </div> -->\r\n\r\n      </ng-template>\r\n      \r\n      \r\n\r\n\r\n      <div *ngIf=\"this.infoToken.isDelivery\">\r\n        <div class=\"p-3 bg-white\">\r\n          <div class=\"text-center\">\r\n            <p class=\"fs-20\">Pedido Confirmado</p>\r\n            <hr>\r\n            <p>Su orden llegara pronto.</p>\r\n            <hr>\r\n            <img src=\"./assets/images/food_delivery.gif\" alt=\"delivery\" width=\"160px\">\r\n            <hr>\r\n            <p>Puede ver el estado de este en <br><strong>Mis Pedidos</strong>.</p>\r\n            <!-- <span class=\"fw-100 fs-25\">{{ countFin | number: '2.' }}</span>\r\n            <p>Notificando pago a control de caja ...</p> -->\r\n          </div>\r\n        </div>\r\n        \r\n        <div class=\"p-3 bg-white text-center\">          \r\n          <button mat-flat-button color=\"primary\" (click)=\"finDelivery()\"> Listo. </button>\r\n          <br>\r\n        </div>\r\n      </div>\r\n\r\n    </ng-template>        \r\n    <!-- <mat-card class=\"mt-2 mb-2\">\r\n      <div class=\"text-center\">\r\n         \r\n      </div>\r\n    </mat-card> -->\r\n  </div>\r\n</div>\r\n\r\n";

/***/ }),

/***/ 87526:
/*!********************************************************************************************!*\
  !*** ./src/app/pages/pagar-cuenta/pago-respuesta/pago-respuesta.component.html?ngResource ***!
  \********************************************************************************************/
/***/ ((module) => {

module.exports = "<p>pago-respuesta works!</p>\n";

/***/ }),

/***/ 71164:
/*!**********************************************************************************************************!*\
  !*** ./src/app/pages/pagar-cuenta/pedido-confirmado-msj/pedido-confirmado-msj.component.html?ngResource ***!
  \**********************************************************************************************************/
/***/ ((module) => {

module.exports = "\n<div class=\"h-100\" style=\"background-color: #3f51b5;\">\n    <mat-card class=\"mt-2 mb-2\">\n        <div class=\"p-3\" style=\"max-width: 500px; margin: 0 auto;\">\n            <p>Pedido confirmado</p>    \n        </div>\n    </mat-card>\n</div>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_pagar-cuenta_pagar-cuenta_module_ts.js.map