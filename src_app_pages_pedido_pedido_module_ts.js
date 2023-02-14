"use strict";
(self["webpackChunkpwa_app_pedido"] = self["webpackChunkpwa_app_pedido"] || []).push([["src_app_pages_pedido_pedido_module_ts"],{

/***/ 83866:
/*!*******************************************************************!*\
  !*** ./src/app/pages/pedido/buscar-item/buscar-item.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BuscarItemComponent": () => (/* binding */ BuscarItemComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _buscar_item_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./buscar-item.component.html?ngResource */ 34830);
/* harmony import */ var _buscar_item_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./buscar-item.component.css?ngResource */ 11461);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);




let BuscarItemComponent = class BuscarItemComponent {
    constructor() { }
    ngOnInit() {
    }
};
BuscarItemComponent.ctorParameters = () => [];
BuscarItemComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-buscar-item',
        template: _buscar_item_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_buscar_item_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], BuscarItemComponent);



/***/ }),

/***/ 65274:
/*!*************************************************************!*\
  !*** ./src/app/pages/pedido/busqueda/busqueda.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BusquedaComponent": () => (/* binding */ BusquedaComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _busqueda_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./busqueda.component.html?ngResource */ 58176);
/* harmony import */ var _busqueda_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./busqueda.component.css?ngResource */ 25437);
/* harmony import */ var _pedido_style_css_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pedido.style.css?ngResource */ 15410);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_app_shared_services_mipedido_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/mipedido.service */ 31375);
/* harmony import */ var src_app_shared_services_socket_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/socket.service */ 43460);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var src_app_componentes_dialog_item_edit_dialog_item_edit_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/componentes/dialog-item-edit/dialog-item-edit.component */ 89488);









let BusquedaComponent = class BusquedaComponent {
    constructor(socketService, miPedidoService, dialog) {
        this.socketService = socketService;
        this.miPedidoService = miPedidoService;
        this.dialog = dialog;
        this.objCartaBus = [];
        this.objNewItemTiposConsumo = [];
    }
    ngOnInit() {
    }
    loadItemsBusqueda() {
        let _objFind;
        _objFind = this.miPedidoService.getObjCartaLibery();
        // extraemos
        let _itemFind;
        _objFind.carta.map((c) => {
            c.secciones.map((s) => {
                s.items.map((i) => {
                    _itemFind = i;
                    _itemFind.seccion = s.des;
                    _itemFind.selected = false;
                    this.objCartaBus.push(_itemFind);
                });
            });
        });
        // tipo consumo
        this.objNewItemTiposConsumo = this.socketService.getDataTipoConsumo();
        // console.log('_objFind', this.objCartaBus);
    }
    selectedItemBusq(selectedItem) {
        this.objCartaBus.map(x => x.selected = false);
        selectedItem.selected = true;
        this.itemSelected = selectedItem;
        const _objNewItemTiposConsumo = JSON.parse(JSON.stringify(this.objNewItemTiposConsumo));
        this.objItemTipoConsumoSelected = selectedItem.itemtiposconsumo ? selectedItem.itemtiposconsumo : _objNewItemTiposConsumo;
        if (!selectedItem.itemtiposconsumo) {
            selectedItem.itemtiposconsumo = this.objItemTipoConsumoSelected;
        }
        this.miPedidoService.setobjItemTipoConsumoSelected(this.objItemTipoConsumoSelected);
        this.openDlgItemBusq(selectedItem);
    }
    openDlgItemBusq(_item) {
        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogConfig();
        const _itemFromCarta = this.miPedidoService.findItemCarta(_item);
        dialogConfig.autoFocus = false;
        dialogConfig.data = {
            idTpcItemResumenSelect: null,
            // seccion: this.seccionSelected,
            item: _itemFromCarta,
            objItemTipoConsumoSelected: this.itemSelected.itemtiposconsumo
        };
        const dialogRef = this.dialog.open(src_app_componentes_dialog_item_edit_dialog_item_edit_component__WEBPACK_IMPORTED_MODULE_5__.DialogItemEditComponent, dialogConfig);
        // subscribe al cierre y obtiene los datos
        dialogRef.afterClosed().subscribe(data => {
            if (!data) {
                return;
            }
            // console.log('data dialog', data);
        });
    }
    getEstadoStockItem(stock) {
        if (stock === 'ND') {
            return 'verde';
        }
        else {
            const _stock = parseInt(stock, 0);
            return _stock > 10 ? 'verde' : _stock > 5 ? 'amarillo' : 'rojo';
        }
    }
};
BusquedaComponent.ctorParameters = () => [
    { type: src_app_shared_services_socket_service__WEBPACK_IMPORTED_MODULE_4__.SocketService },
    { type: src_app_shared_services_mipedido_service__WEBPACK_IMPORTED_MODULE_3__.MipedidoService },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialog }
];
BusquedaComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-busqueda',
        template: _busqueda_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_busqueda_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__, _pedido_style_css_ngResource__WEBPACK_IMPORTED_MODULE_2__]
    })
], BusquedaComponent);



/***/ }),

/***/ 13152:
/*!*******************************************************!*\
  !*** ./src/app/pages/pedido/carta/carta.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CartaComponent": () => (/* binding */ CartaComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _carta_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./carta.component.html?ngResource */ 12635);
/* harmony import */ var _carta_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./carta.component.css?ngResource */ 37636);
/* harmony import */ var _pedido_style_css_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pedido.style.css?ngResource */ 15410);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_app_shared_services_socket_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/socket.service */ 43460);
/* harmony import */ var src_app_shared_services_mipedido_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/mipedido.service */ 31375);
/* harmony import */ var src_app_shared_services_navigator_link_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/navigator-link.service */ 12562);
/* harmony import */ var src_app_modelos_item_tipoconsumo_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/modelos/item.tipoconsumo.model */ 42991);
/* harmony import */ var src_app_shared_services_reglascarta_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/services/reglascarta.service */ 51723);
/* harmony import */ var src_app_shared_services_listen_status_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/services/listen-status.service */ 70190);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var src_app_componentes_dialog_item_edit_dialog_item_edit_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/componentes/dialog-item-edit/dialog-item-edit.component */ 89488);
/* harmony import */ var src_app_shared_services_info_token_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/services/info-token.service */ 93674);
/* harmony import */ var rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! rxjs/internal/Subject */ 68094);
/* harmony import */ var rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var rxjs_internal_operators_takeUntil__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! rxjs/internal/operators/takeUntil */ 9798);
/* harmony import */ var rxjs_internal_operators_takeUntil__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_takeUntil__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var src_app_shared_config_config_const__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/config/config.const */ 61495);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! rxjs */ 32425);
/* harmony import */ var src_app_shared_services_establecimiento_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/shared/services/establecimiento.service */ 32218);
/* harmony import */ var src_app_shared_services_calc_distancia_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/shared/services/calc-distancia.service */ 65552);
/* harmony import */ var src_app_shared_services_crud_http_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/shared/services/crud-http.service */ 24677);
/* harmony import */ var src_app_componentes_dialog_calificacion_sede_dialog_calificacion_sede_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/componentes/dialog-calificacion-sede/dialog-calificacion-sede.component */ 17415);
/* harmony import */ var src_app_shared_services_speech_speech_data_provider_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/shared/services/speech/speech-data-provider.service */ 10250);
/* harmony import */ var src_app_shared_services_promo_cocinar_promo_show_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! src/app/shared/services/promo/cocinar-promo-show.service */ 39216);













// import { Subscription } from 'rxjs/internal/Subscription';











let CartaComponent = class CartaComponent {
    constructor(socketService, miPedidoService, reglasCartaService, 
    // private jsonPrintService: JsonPrintService,
    navigatorService, listenStatusService, infoToken, dialog, establecimientoService, calcDistanciaService, crudService, speechDataProviderService, cocinarPromoShowService) {
        this.socketService = socketService;
        this.miPedidoService = miPedidoService;
        this.reglasCartaService = reglasCartaService;
        this.navigatorService = navigatorService;
        this.listenStatusService = listenStatusService;
        this.infoToken = infoToken;
        this.dialog = dialog;
        this.establecimientoService = establecimientoService;
        this.calcDistanciaService = calcDistanciaService;
        this.crudService = crudService;
        this.speechDataProviderService = speechDataProviderService;
        this.cocinarPromoShowService = cocinarPromoShowService;
        this.unsubscribeCarta = new rxjs__WEBPACK_IMPORTED_MODULE_18__.Subscription();
        // private destroyCarta$: Subject<boolean> = new Subject<boolean>();
        // objCartaCarta: any;
        this.objCartaBus = [];
        this.isBusqueda = false;
        this.rutaImgItem = src_app_shared_config_config_const__WEBPACK_IMPORTED_MODULE_11__.URL_IMG_CARTA;
        this.imgNull = './assets/images/icon-app/img-null.png';
        this.isCargado = true;
        this.showCategoria = false;
        this.showSecciones = false;
        this.showItems = false;
        this.showToolBar = false;
        // max_minute_order = MAX_MINUTE_ORDER;
        // time = new Date();
        this.tituloToolBar = '';
        this.rippleColor = 'rgb(255,238,88, 0.5)';
        this.objSecciones = [];
        this.objItems = [];
        this.objPromociones = null;
        // objSelectedItem: ItemModel;
        // objSeccionSelected: SeccionModel = new SeccionModel();
        // listItemsPedido: ItemModel[] = [];
        // miPedido: PedidoModel = new PedidoModel();
        this.tiposConsumo = [];
        this.objNewItemTiposConsumo = [];
        this.countSeeBack = 2; // primera vista al dar goback
        this.nomCategoriaSeleted = '';
        this.destroy$ = new rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_19__.Subject();
        this.isFirstLoadListen = false; // si es la primera vez que se carga, para no volver a cargar los observables
        // tamaño de la pamtalla
        this.isScreenIsMobile = true;
        this.isViewMercado = false;
        this.isShowCalificacion = false;
        this.isCliente = false;
        this.isPuntoAutoPedido = false;
        this.isTomaPedidoRapido = false;
        this.isCantidadCero = true;
        this.animateBloqueoCategoria = false;
    }
    onResize(event) {
        this.detectScreenSize();
    }
    detectScreenSize() {
        this.isScreenIsMobile = window.innerWidth > 599 ? false : true;
        // console.log(' window.innerWidth',  window.innerWidth);
        // console.log(' this.isScreenIsMobile',  this.isScreenIsMobile);
    }
    ngOnInit() {
        this.detectScreenSize();
        // this.initCarta();
        const _configPunto = JSON.parse(localStorage.getItem('sys::punto')) || {};
        // console.log('this.establecimientoService.get()', this.establecimientoService.get());
        this.isViewMercado = this.establecimientoService.get().pwa_show_item_view_mercado === 1;
        this.isCliente = !!this.infoToken.infoUsToken.isCliente; // this.infoToken.infoUsToken.isCliente;
        this.isPuntoAutoPedido = _configPunto.ispunto_autopedido || false;
        this.isTomaPedidoRapido = _configPunto.istoma_pedido_rapido || false;
        if (this.isTomaPedidoRapido) {
            this.canalConsumoTomaPedidoRapido = _configPunto?.canal_consumo;
        }
        this.initCarta();
        // console.log('this.establecimientoService.get()', this.establecimientoService.get());
        // calificacion y comentarios
        this.isShowCalificacion = this.establecimientoService.get().calificacion >= 3.7;
        if (this.isShowCalificacion) {
            this.dataCalificacion = {
                calificacion: this.establecimientoService.get().calificacion,
                cantidad: 0,
                listCalificacion: []
            };
            const _dataSendCalificacion = {
                idsede: this.establecimientoService.get().idsede
            };
            this.crudService.postFree(_dataSendCalificacion, 'delivery', 'get-calificacion-sede', false)
                .subscribe((res) => {
                this.dataCalificacion.listCalificacion = res.data;
                this.dataCalificacion.cantidad = this.dataCalificacion.listCalificacion.map(c => c.numpedidos).reduce((a, b) => a + b, 0);
            });
        }
        if (this.infoToken.getInfoUs().isCliente && this.infoToken.getInfoUs().isDelivery && !this.infoToken.getInfoUs().isReserva) {
            // console.log('calcula distancia desde carta');
            this.calcDistanciaService.calcCostoEntregaApiGoogleRain(this.infoToken.getInfoUs().direccionEnvioSelected, this.establecimientoService.get());
        }
        // listen go back carta
        this.listenStatusService.listenGoBackCarta$
            .pipe((0,rxjs_internal_operators_takeUntil__WEBPACK_IMPORTED_MODULE_20__.takeUntil)(this.destroy$))
            .subscribe(res => {
            if (res === true) {
                this.goBack();
            }
        });
    }
    ngAfterViewInit() {
        // this.initCarta();
    }
    initCarta() {
        this.isCargado = true;
        this.socketService.connect();
        // console.log('loader carta');
        this.listenStatusService.setLoaderCarta(true);
        this.listeStatusBusqueda();
        // descarga la constate del items scala delivery // tanto para cliente como para usuario
        // if ( this.infoToken.isDelivery() ) {
        if (!this.infoToken.isReserva()) {
            this.miPedidoService.getDeliveryConstCantEscala();
        }
        // }
        this.unsubscribeCarta = this.navigatorService.resNavigatorSourceObserve$.subscribe((res) => {
            if (res.pageActive === 'carta') {
                if (this.countSeeBack < 2) {
                    this.countSeeBack++;
                    return;
                }
                this.goBack();
            }
            else {
                this.countSeeBack = 0;
            }
        });
        // console.log('aaa');
        this.establecimientoService.getComsionEntrega();
        // if (!this.socketService.isSocketOpen) {
        this.unsubscribeCarta = this.socketService.onGetCarta().subscribe((res) => {
            // console.log('onGetCarta', res);
            // this.objCartaCarta = {
            //   'carta': <CartaModel[]>res[0].carta,
            //   'bodega': <SeccionModel[]>res[0].bodega
            // };
            this.listenStatusService.setLoaderCarta(false);
            // console.log('cerrar loader carta');
            if (this.socketService.isSocketOpenReconect) {
                // actualizar cantidad actual (stock actual) de ObjCarta del item
                // if ( !this.miPedidoService.findIsHayItems() ) {
                //   this.miPedidoService.updatePedidoFromStrorage();
                // }
                // this.objCartaCarta = res;
                //
                this.miPedidoService.setObjCarta(res);
                this.resetParamsCarta();
                if (this.miPedidoService.findIsHayItems()) {
                    this.miPedidoService.updatePedidoFromStrorage();
                }
                // console.log('objCartaCarta desde socket reconect');
                this.navigatorService.setPageActive('carta');
                // }
                // para cargar la lista de mesas si se desconecta
                localStorage.removeItem('sys::time-list-table');
                return;
            }
            // this.objCartaCarta = res;
            //
            this.miPedidoService.setObjCarta(res);
            // console.log('this.miPedidoService.objCarta', this.miPedidoService.objCarta);
            if (this.miPedidoService.objCarta.promociones) {
                if (this.miPedidoService.objCarta.promociones.lista_promociones) {
                    // if (this.miPedidoService.objCarta.promociones[0].idpromocion) {
                    this.objPromociones = this.miPedidoService.objCarta.promociones.lista_promociones;
                    // filtramos si hay solo app
                    if (!this.isCliente) {
                        this.objPromociones = this.objPromociones.filter(p => p.parametros.body.solo_app === 0);
                    }
                    this.cocinarPromoShowService.iniReloadOpenPromo(this.objPromociones);
                }
                // }
            }
            // console.log('this.objPromociones', this.objPromociones);
            this.resetParamsCarta();
            // this.isCargado = false;
            // // this.showCategoria = true;
            // this.objSecciones = [];
            // this.objItems = [];
            // this.showCategoria = false;
            // this.showSecciones = false;
            // this.showItems = false;
            // this.showCategoria = true;
            this.miPedidoService.clearPedidoIsLimitTime();
            this.miPedidoService.updatePedidoFromStrorage();
            // restaurar cuenta de timepo limite
            // console.log('restore timer limt');
            this.miPedidoService.restoreTimerLimit();
            this.loadItemsBusqueda();
            if (this.isFirstLoadListen) {
                return;
            }
            this.isFirstLoadListen = true; // para que no vuelva a cargar los observables cuando actualizan desde sockets
            this.miPedidoService.listenChangeCantItem(); // cuando se reconecta para que actualize
        });
        // tipo de consumo
        this.unsubscribeCarta = this.socketService.onGetTipoConsumo().subscribe((res) => {
            // console.log('tipo consumo ', res);
            if (this.socketService.isSocketOpenReconect) {
                return;
            }
            this.tiposConsumo = res;
            // set tipos de consumo a new item tipo cosnumo para los item vista
            this.tiposConsumo.map((t) => {
                const _objTpcAdd = new src_app_modelos_item_tipoconsumo_model__WEBPACK_IMPORTED_MODULE_6__.ItemTipoConsumoModel();
                _objTpcAdd.descripcion = t.descripcion;
                _objTpcAdd.idtipo_consumo = t.idtipo_consumo;
                _objTpcAdd.titulo = t.titulo;
                _objTpcAdd.idimpresora = t.idimpresora;
                // filtramos los tipos de consumo segun qr escaneado o personal autorizado
                if (this.infoToken.isCliente()) {
                    if (!this.infoToken.isDelivery()) {
                        if (t.descripcion === 'DELIVERY') {
                            return;
                        }
                        if (this.infoToken.isSoloLlevar() && t.descripcion.indexOf('LLEVAR') === -1) {
                            return;
                        }
                    }
                    else {
                        if (t.descripcion !== 'DELIVERY') {
                            return;
                        }
                        else {
                            _objTpcAdd.descripcion = 'CANTIDAD';
                        }
                    }
                }
                if (this.infoToken.isPuntoAutoPedido()) {
                    // solo para llevar
                    if (t.descripcion.indexOf('LLEVAR') === -1) {
                        return;
                    }
                }
                // if ( this.infoToken.isCliente() && t.descripcion === 'DELIVERY' ) {
                // } else {
                this.objNewItemTiposConsumo.push(_objTpcAdd);
                // }
            });
            // console.log('this.objNewItemTiposConsumo', this.objNewItemTiposConsumo);
            this.miPedidoService.setObjNewItemTiposConsumo(this.objNewItemTiposConsumo);
            this.navigatorService.addLink('carta-i-');
            // console.log('this.objNewItemTiposConsumo', this.objNewItemTiposConsumo);
            // this.tiposConsumo.secciones = [];
            // this.loadItemsBusqueda();
            this.initFirtsCategoria();
        });
        // descuentos
        this.unsubscribeCarta = this.socketService.onGetDataSedeDescuentos().subscribe((res) => {
            // console.log('onGetDataSedeDescuentos', res);
            // console.log('infoToken', this.infoToken.infoUsToken);
            this.miPedidoService.setObjCartaDescuentos(res);
        });
        // this.socketService.onGetClienteLlama().subscribe((res: any) => {
        //   console.log('cliente llama', res);
        //   // this.listenStatusService.setCallListClienteAtencion(res);
        // });
        // }
        // reglas de la carta y subtotales
        this.reglasCartaService.loadReglasCarta();
        // this.miPedidoService.listenChangeCantItem();
        // datos de la sede, impresoras
        // this.jsonPrintService.getDataSede();
    }
    // si la carta solo tiene un categoria ( cena almuerzo entra de frente)
    initFirtsCategoria() {
        // if ( this.isScreenIsMobile ) {return; }
        if (this.miPedidoService.objCarta.carta.length === 1) {
            this.objSecciones = this.miPedidoService.objCarta.carta[0].secciones;
            this.tituloToolBar = this.miPedidoService.objCarta.carta[0].des;
            this.showSecciones = true;
            this.showCategoria = false;
            this.showToolBar = true;
            // if ( this.isScreenIsMobile ) {
            this.getSecciones(this.miPedidoService.objCarta.carta[0]);
            // return; }
            if (!this.isScreenIsMobile) {
                this.getItems(this.objSecciones[0]);
            }
            // seleciona la primera seccion
            this.objItems = this.objSecciones[0].items;
        }
        // if ( this.miPedidoService.objCarta.promociones.length !== 0 ) {
        //   this.objPromociones = this.miPedidoService.objCarta.promociones;
        // }
        // console.log('this.miPedidoService.objCarta.carta;', this.miPedidoService.objCarta.carta);
    }
    // al obtener la carta
    resetParamsCarta() {
        this.isCargado = false;
        this.objSecciones = [];
        this.objItems = [];
        // this.showCategoria = false;
        this.showSecciones = false;
        this.showItems = false;
        this.showToolBar = false;
        this.showCategoria = true;
    }
    ngOnDestroy() {
        // console.log('======= unsubscribe ======= ');
        this.unsubscribeCarta.unsubscribe();
        this.destroy$.next(true);
        this.destroy$.unsubscribe();
        // this.unsubscribe$.next();
        // this.unsubscribe$.complete();
    }
    showAnimateBloqueoCategoria(categoria) {
        categoria.animateBloqueoCategoria = true;
        setTimeout(() => {
            categoria.animateBloqueoCategoria = false;
        }, 300);
    }
    getSecciones(categoria) {
        // chequea si esta disponible
        if (!this.isCliente && !categoria.abierto) { // si es personal autorizado
            if (categoria.accesible_mozo === '1') {
                this.showAnimateBloqueoCategoria(categoria);
                return;
            }
        }
        if (this.isCliente && !categoria.abierto) {
            this.showAnimateBloqueoCategoria(categoria);
            return;
        }
        this.categoriaSeleted = categoria;
        setTimeout(() => {
            this.objSecciones = categoria.secciones;
            this.showSecciones = true;
            this.showCategoria = false;
            this.showToolBar = true;
            // local storage categoria
            localStorage.setItem('sys::cat', categoria.idcategoria.toString());
            this.tituloToolBar = categoria.des;
            this.nomCategoriaSeleted = categoria.des;
            this.navigatorService.addLink('carta-i-secciones');
        }, 250);
    }
    getItems(seccion) {
        this.miPedidoService.setObjSeccionSeleced(seccion);
        setTimeout(() => {
            this.seccionSelected = seccion;
            this.objItems = seccion.items;
            this.showItems = true;
            setTimeout(() => {
                this.showSecciones = false;
            }, 200);
            if (this.isScreenIsMobile) {
                // if ( this.tituloToolBar.indexOf(seccion.des) === -1) {
                this.tituloToolBar = this.nomCategoriaSeleted + ' / ' + seccion.des;
                // }
            }
            // console.log('this.objItems', this.objItems);
            this.navigatorService.addLink('carta-i-secciones-items');
        }, 150);
    }
    getItemsPromo(items) {
        setTimeout(() => {
            this.objItems = items;
            this.showSecciones = false;
            this.showItems = true;
            this.navigatorService.addLink('carta-i-secciones-items');
        }, 150);
    }
    getItems_seccion_from_busqueda(_itemBus) {
        const _seccionBus = {
            des: _itemBus.seccion,
            idseccion: _itemBus.idseccion,
            idimpresora: _itemBus.idimpresora,
            sec_orden: _itemBus.sec_orden,
            ver_stock_cero: _itemBus.ver_stock_cero,
        };
        this.miPedidoService.setObjSeccionSeleced(_seccionBus);
    }
    /// busqueda
    loadItemsBusqueda() {
        let _objFind;
        // _objFind = this.miPedidoService.getObjCartaLibery();
        _objFind = this.miPedidoService.getObjCarta();
        // extraemos
        let _itemFind;
        if (!_objFind.carta) {
            return;
        }
        _objFind.carta.map((c) => {
            c.secciones.map((s) => {
                s.items.map((i) => {
                    _itemFind = i;
                    _itemFind.seccion = s.des;
                    _itemFind.idimpresora = s.idimpresora;
                    _itemFind.sec_orden = s.sec_orden;
                    _itemFind.ver_stock_cero = s.ver_stock_cero;
                    _itemFind.selected = false;
                    _itemFind.visible = true;
                    this.objCartaBus.push(_itemFind);
                });
            });
        });
        // reset busqueda
        window.localStorage.setItem('sys::find', '');
        // tipo consumo
        // console.log('_objFind', this.objCartaBus);
    }
    goBack() {
        try {
            if (this.miPedidoService.objCarta.carta.length === 1 && !this.isScreenIsMobile) {
                return;
            } // si no es celular no regresa
        }
        catch (error) { }
        this.objItems.map(x => x.selected = false);
        if (this.showItems) {
            this.showItems = false;
            // setTimeout(() => {
            //   this.showItems = false;
            // }, 50);
            this.showSecciones = true;
            this.tituloToolBar = this.tituloToolBar.split(' / ')[0];
            // this.navigatorService.addLink('carta-i-secciones');
            return;
        }
        if (this.showSecciones) {
            this.showSecciones = false;
            this.showToolBar = false;
            this.showCategoria = true;
            // this.navigatorService.addLink('carta-i-');
        }
    }
    selectedItem(_selectedItem, openDetalle = false) {
        // if (!this.isBusqueda) {
        //   this.objItems.map(x => x.selected = false);
        // } else {
        //   this.objCartaBus.map(x => x.selected = false);
        // }
        // console.log('_selectedItem', _selectedItem);
        if ((this.isPuntoAutoPedido || this.isTomaPedidoRapido || this.isCliente) && !openDetalle && _selectedItem?.count_subitems === 0) {
            if (!this.isViewMercado) {
                this.resultCantItemMercado(_selectedItem, true);
                return;
            }
        }
        if (_selectedItem.cantidad.toString() === '0' && !_selectedItem.cantidad_seleccionada) {
            return;
        }
        _selectedItem.selected = true;
        this.itemSelected = _selectedItem;
        const _objNewItemTiposConsumo = JSON.parse(JSON.stringify(this.objNewItemTiposConsumo));
        this.objItemTipoConsumoSelected = _selectedItem.itemtiposconsumo ? _selectedItem.itemtiposconsumo : _objNewItemTiposConsumo;
        if (!_selectedItem.itemtiposconsumo) {
            _selectedItem.itemtiposconsumo = this.objItemTipoConsumoSelected;
        }
        // confirma que la seccion del item sea igual a la seccion del // si viene x ej de promo
        const idSeccionSelected = this.seccionSelected?.idseccion || 0;
        const _lastSeccionObjSeleted = this.miPedidoService.getObjSeccionSeleced();
        const _reasignarSeccion = _lastSeccionObjSeleted.idseccion !== idSeccionSelected;
        if (this.itemSelected.idseccion !== idSeccionSelected || _reasignarSeccion) {
            this.seccionSelected = this.miPedidoService.findItemSeccionCarta(this.itemSelected.idseccion);
            this.miPedidoService.setObjSeccionSeleced(this.seccionSelected);
        }
        this.miPedidoService.setobjItemTipoConsumoSelected(this.objItemTipoConsumoSelected);
        this.openDlgItem(_selectedItem);
    }
    // abrir el dialog item
    openDlgItem(_item) {
        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_21__.MatDialogConfig();
        const _itemFromCarta = _item.ispromo ? _item : this.miPedidoService.findItemCarta(_item);
        if (!_itemFromCarta.itemtiposconsumo) {
            _itemFromCarta.itemtiposconsumo = _item.itemtiposconsumo;
        }
        // const _seccionItemSelect = this.miPedidoService.findItemSeccionCarta(_itemFromCarta.idseccion);
        dialogConfig.autoFocus = false;
        dialogConfig.data = {
            idTpcItemResumenSelect: null,
            seccion: !this.isBusqueda ? this.seccionSelected : this.miPedidoService.findItemSeccionCarta(_itemFromCarta.idseccion),
            item: _itemFromCarta,
            objItemTipoConsumoSelected: this.itemSelected.itemtiposconsumo
        };
        dialogConfig.panelClass = ['my-dialog-orden-detalle', 'margen-0', 'my-dialog-item-producto'];
        const dialogRef = this.dialog.open(src_app_componentes_dialog_item_edit_dialog_item_edit_component__WEBPACK_IMPORTED_MODULE_9__.DialogItemEditComponent, dialogConfig);
        // subscribe al cierre y obtiene los datos
        dialogRef.afterClosed().subscribe(data => {
            if (!data) {
                return;
            }
            // console.log('data dialog', data);
        });
    }
    addItemToPedido(tpcSelect, suma) {
        this.miPedidoService.addItem2(tpcSelect, this.itemSelected, suma);
    }
    addItemToPedidoFromBusqueda(tpcSelect, suma) {
        // setea la seccion del item
        this.getItems_seccion_from_busqueda(this.itemSelected);
        // agrega el item
        this.miPedidoService.addItem2(tpcSelect, this.itemSelected, suma);
    }
    addItemIndicaciones(itemCarta, _indicaciones) {
        // console.log('indicaciones', _indicaciones);
        this.itemSelected.indicaciones = _indicaciones;
        itemCarta.indicaciones = _indicaciones;
        // const _itemInMipedido = this.miPedidoService.findOnlyItemMiPedido(itemCarta);
        // if ( _itemInMipedido ) {
        //   _itemInMipedido.indicaciones = _indicaciones;
        // }
    }
    getEstadoStockItem(stock) {
        if (stock === 'ND' || isNaN(stock)) {
            // stock = 'ND';
            return 'verde';
        }
        else {
            const _stock = parseInt(stock, 0);
            return _stock > 10 ? 'verde' : _stock > 5 ? 'amarillo' : 'rojo';
        }
    }
    listeStatusBusqueda() {
        this.listenStatusService.isBusqueda$.subscribe(res => {
            this.isBusqueda = res;
        });
        this.listenStatusService.charBuqueda$
            .pipe((0,rxjs_internal_operators_takeUntil__WEBPACK_IMPORTED_MODULE_20__.takeUntil)(this.destroy$))
            .subscribe((res) => {
            this.isBusquedaFindNow(res);
        });
        this.socketService.isSocketOpen$
            .pipe((0,rxjs_internal_operators_takeUntil__WEBPACK_IMPORTED_MODULE_20__.takeUntil)(this.destroy$))
            .subscribe(res => {
            if (!res) {
                // console.log('===== unsubscribe unsubscribe Carta =====');
                this.unsubscribeCarta.unsubscribe();
            }
        });
        // ===== COMANDOS DE VOZ =========== //
        // listen comando voz navegacion;
        this.speechDataProviderService.commandNavegacionSeccion$
            .pipe((0,rxjs_internal_operators_takeUntil__WEBPACK_IMPORTED_MODULE_20__.takeUntil)(this.destroy$))
            .subscribe((rpt_seccion) => {
            if (rpt_seccion) {
                // if (this.showCategoria ) {
                const _categoria = this.miPedidoService.objCarta.carta[0];
                this.getSecciones(_categoria);
                setTimeout(() => {
                    this.getItems(rpt_seccion);
                }, 100);
                // } else {
                //   this.getItems(rpt_seccion);
                // }
            }
        });
        // listen comando voz navegacion;
        this.speechDataProviderService.commandNavegacionRecomendado$
            .pipe((0,rxjs_internal_operators_takeUntil__WEBPACK_IMPORTED_MODULE_20__.takeUntil)(this.destroy$))
            .subscribe((itemsRecomendados) => {
            if (itemsRecomendados.length > 0) {
                this.getItemsPromo(itemsRecomendados);
            }
        });
        // escuhar si se aumenta pedido
        this.speechDataProviderService.commandAddItem$
            .pipe((0,rxjs_internal_operators_takeUntil__WEBPACK_IMPORTED_MODULE_20__.takeUntil)(this.destroy$))
            .subscribe((itemVoz) => {
            if (itemVoz) {
                this.resultCantItemMercado(itemVoz.item, itemVoz.isSuma);
            }
        });
        // ===== COMANDOS DE VOZ =========== //
    }
    isBusquedaFindNow(charFind) {
        charFind = charFind.toLowerCase();
        // console.log(charFind);
        let _charConcat = '';
        this.objCartaBus.map((i) => {
            _charConcat = `${i.des} ${i.seccion} ${i.detalles}`;
            _charConcat = _charConcat.toLowerCase();
            i.visible = _charConcat.indexOf(charFind) > -1 ? true : false;
        });
    }
    getObjDetalleSeccion(seccion) {
        let resp = '';
        if (seccion.items === null) {
            return;
        }
        seccion.items.map((i, index) => {
            if (index > 5) {
                return;
            }
            resp += i.des.toLowerCase() + ', ';
        });
        return resp.slice(0, -2);
    }
    resultCantItemMercado(_selectedItem, isSuma_selected = false) {
        // solo para delivery
        // isSuma_selected viene de agregar al clic
        this.itemSelected = _selectedItem;
        // busca el canal consumo predeteminado
        // if ( this.isTomaPedidoRapido ) {
        //   this.objItemTipoConsumoSelected = this.canalConsumoTomaPedidoRapido;
        // } else {
        const _objNewItemTiposConsumo = JSON.parse(JSON.stringify(this.objNewItemTiposConsumo));
        this.objItemTipoConsumoSelected = _selectedItem.itemtiposconsumo ? _selectedItem.itemtiposconsumo : _objNewItemTiposConsumo;
        // }
        if (!_selectedItem.itemtiposconsumo) {
            _selectedItem.itemtiposconsumo = this.objItemTipoConsumoSelected;
        }
        this.miPedidoService.setobjItemTipoConsumoSelected(this.objItemTipoConsumoSelected);
        let tpcSelect = this.objItemTipoConsumoSelected[0];
        if (this.isTomaPedidoRapido) {
            tpcSelect = this.objItemTipoConsumoSelected.filter(x => x.descripcion.toLocaleLowerCase() === this.canalConsumoTomaPedidoRapido.descripcion.toLocaleLowerCase())[0];
        }
        const _isSuma = isSuma_selected ? 0 : _selectedItem.isSuma_selected ? 0 : 1;
        // confirma que la seccion del item sea igual a la seccion del
        const idSeccionSelected = this.seccionSelected?.idseccion || 0;
        const _lastSeccionObjSeleted = this.miPedidoService.getObjSeccionSeleced();
        const _reasignarSeccion = _lastSeccionObjSeleted.idseccion !== idSeccionSelected;
        if (this.itemSelected.idseccion !== idSeccionSelected || _reasignarSeccion) {
            this.seccionSelected = this.miPedidoService.findItemSeccionCarta(this.itemSelected.idseccion);
            this.miPedidoService.setObjSeccionSeleced(this.seccionSelected);
        }
        // console.log('_selectedItem carta', _selectedItem);
        this.miPedidoService.addItem2(tpcSelect, this.itemSelected, _isSuma);
        _selectedItem.is_visible_control_last_add = _selectedItem.cantidad_seleccionada !== 0;
    }
    // addSubItem(subitem: SubItem): void {
    //   // subitem.selected = !subitem.selected;
    //   // if ( subitem.selected ) {
    //     // const listSubItemChecked = this.itemSelected.subitems.filter((x: SubItem) => x.selected);
    //     // let countSelectReq = listSubItemChecked.length;
    //     // // adicional el importe al precio del item
    //     // this.itemSelected.precio = this.itemSelected.precio_unitario + subitem.precio;
    //     // // this.itemSelected.precio_total = parseFloat(this.itemSelected.precio);
    //     // listSubItemChecked.map( (_subItem: SubItem, i: number) =>  {
    //     //   if (countSelectReq > this.itemSelected.subitem_cant_select && _subItem !== subitem) {
    //     //     _subItem.selected = false;
    //     //     countSelectReq--;
    //     //   }
    //     // });
    //   // }
    // }
    openDialogComentarios() {
        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_21__.MatDialogConfig();
        // dialogConfig.panelClass = 'dialog-item-edit';
        dialogConfig.autoFocus = false;
        dialogConfig.data = this.dataCalificacion;
        dialogConfig.panelClass = ['my-dialog-orden-detalle', 'my-dialog-scrool'];
        const dialogRef = this.dialog.open(src_app_componentes_dialog_calificacion_sede_dialog_calificacion_sede_component__WEBPACK_IMPORTED_MODULE_15__.DialogCalificacionSedeComponent, dialogConfig);
        // subscribe al cierre y obtiene los datos
        dialogRef.afterClosed().subscribe(data => {
            if (!data) {
                return;
            }
        });
    }
    showItemsPromo(promo) {
        // if ( this.cocinarPromoShowService.consultarPromoAbierto(promo) ) {
        const itemsPromo = this.cocinarPromoShowService.promoFilterShow(promo, this.categoriaSeleted);
        this.getItemsPromo(itemsPromo);
        // } else {
        //   promo.abierto = 0;
        //   console.log('aaaaaaaaaaaaaa');
        // }
    }
};
CartaComponent.ctorParameters = () => [
    { type: src_app_shared_services_socket_service__WEBPACK_IMPORTED_MODULE_3__.SocketService },
    { type: src_app_shared_services_mipedido_service__WEBPACK_IMPORTED_MODULE_4__.MipedidoService },
    { type: src_app_shared_services_reglascarta_service__WEBPACK_IMPORTED_MODULE_7__.ReglascartaService },
    { type: src_app_shared_services_navigator_link_service__WEBPACK_IMPORTED_MODULE_5__.NavigatorLinkService },
    { type: src_app_shared_services_listen_status_service__WEBPACK_IMPORTED_MODULE_8__.ListenStatusService },
    { type: src_app_shared_services_info_token_service__WEBPACK_IMPORTED_MODULE_10__.InfoTockenService },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_21__.MatDialog },
    { type: src_app_shared_services_establecimiento_service__WEBPACK_IMPORTED_MODULE_12__.EstablecimientoService },
    { type: src_app_shared_services_calc_distancia_service__WEBPACK_IMPORTED_MODULE_13__.CalcDistanciaService },
    { type: src_app_shared_services_crud_http_service__WEBPACK_IMPORTED_MODULE_14__.CrudHttpService },
    { type: src_app_shared_services_speech_speech_data_provider_service__WEBPACK_IMPORTED_MODULE_16__.SpeechDataProviderService },
    { type: src_app_shared_services_promo_cocinar_promo_show_service__WEBPACK_IMPORTED_MODULE_17__.CocinarPromoShowService }
];
CartaComponent.propDecorators = {
    onResize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_22__.HostListener, args: ['window:resize', ['$event'],] }]
};
CartaComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_23__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_22__.Component)({
        selector: 'app-carta',
        template: _carta_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_carta_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__, _pedido_style_css_ngResource__WEBPACK_IMPORTED_MODULE_2__]
    })
], CartaComponent);



/***/ }),

/***/ 84412:
/*!***********************************************************************!*\
  !*** ./src/app/pages/pedido/estado-pedido/estado-pedido.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EstadoPedidoComponent": () => (/* binding */ EstadoPedidoComponent)
/* harmony export */ });
/* harmony import */ var D_Projects_capacitor_pwa_app_pedido_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _estado_pedido_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./estado-pedido.component.html?ngResource */ 97903);
/* harmony import */ var _estado_pedido_component_css_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./estado-pedido.component.css?ngResource */ 34920);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var src_app_shared_services_listen_status_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/listen-status.service */ 70190);
/* harmony import */ var src_app_shared_services_estado_pedido_cliente_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/estado-pedido-cliente.service */ 90128);
/* harmony import */ var src_app_shared_services_info_token_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/info-token.service */ 93674);
/* harmony import */ var src_app_shared_services_navigator_link_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/navigator-link.service */ 12562);
/* harmony import */ var src_app_shared_services_socket_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/services/socket.service */ 43460);
/* harmony import */ var rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/internal/Subject */ 68094);
/* harmony import */ var rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 85921);
/* harmony import */ var src_app_shared_services_establecimiento_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/services/establecimiento.service */ 32218);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var src_app_componentes_datos_facturacion_cliente_datos_facturacion_cliente_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/componentes/datos-facturacion-cliente/datos-facturacion-cliente.component */ 89106);
















let EstadoPedidoComponent = class EstadoPedidoComponent {
  constructor(listenStatusService, estadoPedidoClienteService, infoTokenService, navigatorService, socketService, router, establecimientoService, dialogDatosFacturacion) {
    this.listenStatusService = listenStatusService;
    this.estadoPedidoClienteService = estadoPedidoClienteService;
    this.infoTokenService = infoTokenService;
    this.navigatorService = navigatorService;
    this.socketService = socketService;
    this.router = router;
    this.establecimientoService = establecimientoService;
    this.dialogDatosFacturacion = dialogDatosFacturacion;
    this.rippleColor = 'rgb(255,238,88, 0.5)';
    this.tituloMesa = 'Mesa';
    this.isViewMsjSolicitudPersoanl = false;
    this.isComercioAceptaTarjeta = false;
    this.isBtnPagoShow = false; // si el boton de pago ha sido visible entonces recarga la pagina de pago
    // private unsubscribeEstado = new Subscription();

    this.destroyEstado$ = new rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_10__.Subject();
  }

  ngOnInit() {
    // verificar en el localstorage
    this.infoToken = this.infoTokenService.getInfoUs();
    this.isDeliveryCliente = this.infoToken.isDelivery; // this.estadoPedidoClienteService.get();

    this.simbolo_moneda = this.establecimientoService.getSimboloMoneda(); // console.log('this.establecimientoService', this.establecimientoService.get() );

    this.isComercioAceptaTarjeta = this.establecimientoService.get().pwa_delivery_acepta_tarjeta === 1; // escuchar cambios

    this.listenStatus();
  }

  ngOnDestroy() {
    // this.unsubscribeEstado.unsubscribe();
    // this.unsubscribe$.next();
    // this.unsubscribe$.complete();
    this.destroyEstado$.next(true);
    this.destroyEstado$.unsubscribe();
  }

  listenStatus() {
    var _this = this;

    this.navigatorService.resNavigatorSourceObserve$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.takeUntil)(this.destroyEstado$)).subscribe(res => {
      if (res.pageActive === 'estado') {
        this.tituloMesa = this.infoToken.isSoloLLevar ? 'Para Llevar' : 'Mesa'; // if ( this.estadoPedido.importe > 0 ) {

        setTimeout(() => {
          this.estadoPedidoClienteService.getCuentaTotales();
        }, 2500); // }
      }
    });
    this.navigatorService.resNavigatorSourceObserve$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.takeUntil)(this.destroyEstado$)).subscribe( /*#__PURE__*/function () {
      var _ref = (0,D_Projects_capacitor_pwa_app_pedido_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (res) {
        if (res.pageActive === 'estado') {
          const _importe = yield _this.estadoPedidoClienteService.getImporteCuenta();

          _this.estadoPedido.importe = _importe || 0; // this.estadoPedidoClienteService.getCuentaTotales();
        }
      });

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());
    this.listenStatusService.hayPedidoPendiente$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.takeUntil)(this.destroyEstado$)).subscribe(res => {
      this.estadoPedidoClienteService.setHayPedidoPendiente(res);
    });
    this.listenStatusService.estadoPedido$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.takeUntil)(this.destroyEstado$)).subscribe(res => {
      this.estadoPedido = res; // if ( _importe === 0 ) {

      if (this.estadoPedido.importe === 0 && this.estadoPedido.isRegisterOnePago) {
        // this.unsubscribeEstado.unsubscribe();
        this.estadoPedidoClienteService.setisRegisterPago(false);

        this.navigatorService._router('../lanzar-encuesta');
      } // recalcular cuenta si es 0 agradecimiento y lanzar encuesta si aun no la lleno
      // if (this.estadoPedido.isPagada) {
      //   this.navigatorService._router('../lanzar-encuesta');
      // }

    }); // tiempo de espera

    this.estadoPedidoClienteService.timeRestanteAprox$.subscribe(res => {
      this.tiempoEspera = res;
    });
    this.socketService.onPedidoPagado().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.takeUntil)(this.destroyEstado$)).subscribe(res => {
      // recalcular cuenta si es 0 agradecimiento y lanzar encuesta si aun no la lleno
      this.estadoPedidoClienteService.getCuentaTotales();
      this.estadoPedidoClienteService.setisRegisterPago(true);
    });
    this.listenStatusService.isBtnPagoShow$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.takeUntil)(this.destroyEstado$)).subscribe(res => {
      this.isBtnPagoShow = res;
    });
  }

  verCuenta() {
    this.estadoPedidoClienteService.getCuenta();
    this.navigatorService.setPageActive('mipedido');
  }

  pagarCuenta() {
    // this.navigatorService._router('./pagar-cuenta');
    if (!localStorage.getItem('sys::st')) {
      this.verCuenta();
      return;
    }

    this.estadoPedidoClienteService.getCuenta(); // get subtotales - esta listen resumen-pedido;

    this.router.navigate(['./pagar-cuenta']).then(() => {
      if (this.isBtnPagoShow) {
        window.location.reload();
      }
    });
    this.listenStatusService.setIsPagePagarCuentaShow(true);
  } // el cleinte solicita atencion del personal. -- notifica en caja


  solicitarAtencion() {
    if (this.isViewMsjSolicitudPersoanl) {
      return;
    }

    console.log('notificar-cliente-llamado');
    this.socketService.emit('notificar-cliente-llamado', this.infoToken.numMesaLector);
    this.isViewMsjSolicitudPersoanl = true;
    setTimeout(() => {
      this.isViewMsjSolicitudPersoanl = false;
    }, 30000);
  }

  showDatosFacturacion() {
    const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__.MatDialogConfig();
    dialogConfig.panelClass = ['my-dialog-orden-detalle', 'margen-0'];
    this.dialogDatosFacturacion.open(src_app_componentes_datos_facturacion_cliente_datos_facturacion_cliente_component__WEBPACK_IMPORTED_MODULE_9__.DatosFacturacionClienteComponent, dialogConfig);
  }

};

EstadoPedidoComponent.ctorParameters = () => [{
  type: src_app_shared_services_listen_status_service__WEBPACK_IMPORTED_MODULE_3__.ListenStatusService
}, {
  type: src_app_shared_services_estado_pedido_cliente_service__WEBPACK_IMPORTED_MODULE_4__.EstadoPedidoClienteService
}, {
  type: src_app_shared_services_info_token_service__WEBPACK_IMPORTED_MODULE_5__.InfoTockenService
}, {
  type: src_app_shared_services_navigator_link_service__WEBPACK_IMPORTED_MODULE_6__.NavigatorLinkService
}, {
  type: src_app_shared_services_socket_service__WEBPACK_IMPORTED_MODULE_7__.SocketService
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_13__.Router
}, {
  type: src_app_shared_services_establecimiento_service__WEBPACK_IMPORTED_MODULE_8__.EstablecimientoService
}, {
  type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__.MatDialog
}];

EstadoPedidoComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_15__.Component)({
  selector: 'app-estado-pedido',
  template: _estado_pedido_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_estado_pedido_component_css_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], EstadoPedidoComponent);


/***/ }),

/***/ 57515:
/*!*********************************************************!*\
  !*** ./src/app/pages/pedido/inicio/inicio.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InicioComponent": () => (/* binding */ InicioComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _inicio_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inicio.component.html?ngResource */ 86542);
/* harmony import */ var _inicio_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./inicio.component.css?ngResource */ 45460);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_app_shared_services_mipedido_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/mipedido.service */ 31375);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 59151);







let InicioComponent = class InicioComponent {
    constructor(miPedidoService, router) {
        this.miPedidoService = miPedidoService;
        this.router = router;
        this.isVisibleToolBar = true;
        this.countTotalItems = 0;
        this.lastValScrollTop = 0;
        router.events.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)((event) => {
            return (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__.NavigationStart);
        })).subscribe((event) => {
            console.log('navigation', event);
        });
    }
    ngOnInit() {
        this.miPedidoService.countItemsObserve$.subscribe((res) => {
            this.countTotalItems = res;
        });
    }
    onScroll($event) {
        const val = $event.srcElement.scrollTop;
        this.isVisibleToolBar = val >= this.lastValScrollTop && val > 54 ? false : true;
        setTimeout(() => {
            this.lastValScrollTop = val;
        }, 100);
    }
    addLink(propiedad) {
        // this.router.navigate(['/', { id: propiedad}]);
        this.router.navigate(['../../', { id: propiedad }]);
    }
};
InicioComponent.ctorParameters = () => [
    { type: src_app_shared_services_mipedido_service__WEBPACK_IMPORTED_MODULE_2__.MipedidoService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router }
];
InicioComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-inicio',
        template: _inicio_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_inicio_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], InicioComponent);



/***/ }),

/***/ 2398:
/*!*****************************************************!*\
  !*** ./src/app/pages/pedido/main/main.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MainComponent": () => (/* binding */ MainComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _main_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.component.html?ngResource */ 54345);
/* harmony import */ var _main_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main.component.css?ngResource */ 67182);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_app_shared_services_mipedido_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/mipedido.service */ 31375);
/* harmony import */ var src_app_shared_services_navigator_link_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/navigator-link.service */ 12562);
/* harmony import */ var src_app_shared_services_listen_status_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/listen-status.service */ 70190);
/* harmony import */ var src_app_shared_services_socket_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/socket.service */ 43460);
/* harmony import */ var src_app_shared_services_verify_auth_client_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/verify-auth-client.service */ 34337);
/* harmony import */ var src_app_shared_services_establecimiento_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/services/establecimiento.service */ 32218);
/* harmony import */ var src_app_shared_services_info_token_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/services/info-token.service */ 93674);











let MainComponent = class MainComponent {
    constructor(miPedidoService, navigatorService, listenStatusService, socketService, verifyClientService, infoTokenService, 
    // private comandAnalizerService: ComandAnalizerService,
    establecimientoService) {
        this.miPedidoService = miPedidoService;
        this.navigatorService = navigatorService;
        this.listenStatusService = listenStatusService;
        this.socketService = socketService;
        this.verifyClientService = verifyClientService;
        this.infoTokenService = infoTokenService;
        this.establecimientoService = establecimientoService;
        this.isVisibleToolBar = true;
        this.isBusqueda = false;
        this.isHayCuentaBusqueda = false;
        this.countTotalItems = 0;
        this.selectedTab = 0;
        this.isUsuarioCliente = false; // si es usuario cliente
        this.isClienteDelivery = false;
        this.isClienteReserva = false;
        this.isPagePagarShow = false;
        this.isPuntoAutoPedido = false;
        this.loaderPage = false;
        this.timeLoader = null;
        this.isSpeechVoiceAcivado = false;
        this.lastValScrollTop = 0;
        this.importeTotalProductos = 0;
        // tamaño de la pamtalla
        this.isScreenIsMobile = true;
        // console.log('verifyClientService', this.verifyClientService.get);
        // this.comandAnalizerService.getIsActive();
        // this.comandAnalizerService.getComands();
    }
    onResize(event) {
        this.detectScreenSize();
    }
    detectScreenSize() {
        this.isScreenIsMobile = window.innerWidth > 1049 ? false : true;
        // console.log('window.innerWidth', window.innerWidth);
        // console.log('this.isScreenIsMobile', this.isScreenIsMobile);
    }
    ngOnInit() {
        // console.log('this.infoTokenService.getInfoUs()', this.infoTokenService.getInfoUs());
        this.detectScreenSize();
        this.socketService.isSocketOpenReconect = false;
        this.navigatorService.setPageActive('carta');
        this.infoTokenService.getInfoUs();
        this.isPuntoAutoPedido = this.infoTokenService.isPuntoAutoPedido();
        this.isSpeechVoiceAcivado = this.establecimientoService.get().speech_disabled === 1;
        // this.navigatorService.addLink('carta');
        // console.log('this.infoTokenService.infoUsToken', this.infoTokenService.infoUsToken);
        // console.log('pedido main verifyClient');
        // console.log('verifyClient from main pedido');
        this.verifyClientService.verifyClient().subscribe((res) => {
            // console.log('desde main pedido', res);
            // console.log('this.infoTokenService', this.infoTokenService);
            if (!res) {
                this.isUsuarioCliente = this.infoTokenService.infoUsToken.isCliente;
            }
            else {
                this.isUsuarioCliente = res.isCliente || false;
            }
            this.listenStatusService.setIsUsuarioCliente(this.isUsuarioCliente);
            this.isClienteDelivery = res?.isDelivery;
            this.isClienteReserva = res?.isReserva;
            // -----------------> ACTIVAR MOZO VIRTUAL
            // 250122 quitamos speech x mejorar
            // const _isActiveMozoVoz =  this.isSpeechVoiceAcivado && this.isUsuarioCliente && !this.isClienteDelivery;
            // console.log('_isActiveMozoVoz', _isActiveMozoVoz);
            // this.infoTokenService.setIsAvtiveMozoVoz(_isActiveMozoVoz);
            // if ( _isActiveMozoVoz ) {
            //   this.comandAnalizerService.getComands();
            //   setTimeout(() => {
            //     this.comandAnalizerService.cocinarComand('bienvenido');
            //   }, 700);
            // }
            // -----------------> ACTIVAR MOZO VIRTUAL
            // para que reconecte, porque al iniciar no conecta si viene delivery codigo qr
            if (this.verifyClientService.getIsDelivery() && this.verifyClientService.getIsQrSuccess()) {
                this.socketService.isSocketOpen = false;
            }
        });
        this.listenStatusService.isBusqueda$.subscribe(res => {
            this.isBusqueda = res;
        });
        this.listenStatusService.hayCuentaBusqueda$.subscribe(res => {
            this.isHayCuentaBusqueda = res;
        });
        this.listenStatusService.isPagePagarCuentaShow$.subscribe(res => {
            this.isPagePagarShow = res;
        });
        this.listenStatusService.isFinishLoaderSendPedido$.subscribe((isOpen) => {
            if (isOpen === true && !this.isUsuarioCliente) {
                setTimeout(() => {
                    this.closeMsjLoaderPedido();
                }, 1600);
            }
        });
        // this.listenStatusService.callClienteSolicitaAtencion$.subscribe(res => {
        // });
        this.navigatorService.resNavigatorSourceObserve$.subscribe((res) => {
            switch (res.pageActive) {
                case 'carta':
                    this.selectedTab = 0;
                    this.resetObjCuenta();
                    // console.log(this.selectedTab);
                    break;
                case 'estado':
                    this.selectedTab = 2;
                    break;
                case 'mipedido':
                    this.selectedTab = 1;
                    break;
                case 'mesas':
                    // console.log('llegamos a mesas');
                    this.listenStatusService.setshowLoadListMesas();
                    // appListMesas.loadListMesas();
                    break;
            }
            // if (res.pageActive === 'carta') {
            //   this.selectedTab = 0;
            //   this.resetObjCuenta();
            //   console.log(this.selectedTab);
            // }
        });
        this.miPedidoService.countItemsObserve$.subscribe((res) => {
            this.countTotalItems = res;
            this.importeTotalProductos = this.miPedidoService.getSubTotalMiPedido();
        });
        this.listenStatusService.isLoaderCarta$.subscribe(res => {
            this.loaderPage = res;
            if (this.loaderPage) {
                this.verificarLoaderReload();
            }
            else {
                clearTimeout(this.timeLoader);
            }
        });
        // if ( this.socketService.isSocketOpen ) {
        //   this.socketService.connect();
        //   this.socketService.onGetClienteLlama().subscribe(res => {
        //     console.log('cliente llama', res);
        //   });
        // }
        // this.tooltip.show();
        // setTimeout(() => {
        //   // this._matTooltip.position = 'below';
        //   // this._matTooltip.tooltipClass = 'example-tooltip-red-1';
        //   this._matTooltip.show();
        // }, 1000);
        // setTimeout(() => {
        //   this.comandAnalizerService.cocinarComand('bienvenido');
        // }, 500);
    }
    // 12 segundos de cargar, reload page
    verificarLoaderReload() {
        this.timeLoader = setTimeout(() => {
            if (this.loaderPage) {
                window.location.reload();
            }
        }, 12000);
    }
    onScroll($event) {
        const val = $event.srcElement.scrollTop;
        this.isVisibleToolBar = val >= this.lastValScrollTop && val > 0 ? false : true;
        setTimeout(() => {
            this.lastValScrollTop = val;
        }, 100);
    }
    clickTab($event) {
        // console.log('event tab', $event);
        this.selectedTab = $event.index;
        // if ( this.selectedTab === 1 && !this.isScreenIsMobile ) {return false; }
        const _pageActive = $event.tab.textLabel.toLowerCase();
        this.navigatorService.setPageActive(_pageActive);
        // $event.srcElement.scrollTop = 0;
        this.isVisibleToolBar = true;
        // this.navigatorService.restorePage(_pageActive);
    }
    resetObjCuenta() {
        if (!this.isHayCuentaBusqueda) {
            return;
        }
        this.miPedidoService.resetObjMiPedido();
        this.listenStatusService.setHayCuentaBuesqueda(false);
    }
    goListaProductos() {
        const _tabList = {
            index: 1,
            tab: {
                isActive: true,
                origin: 1,
                position: 0,
                textLabel: 'MiPedido'
            }
        };
        this.clickTab(_tabList);
    }
    pruebaMsjs() {
        this.listenStatusService.setIsFinishLoaderSendPedidoSource(true);
    }
    closeMsjLoaderPedido() {
        // this.listenStatusService.setIsFinishLoaderSendPedidoSource(false);
        // this.listenStatusService.setLoaderSendPedido(false);
        this.listenStatusService.closeFinishLoaderSendPedidoSource();
    }
    goBackCarta() {
        this.listenStatusService.setListenGoCarta();
    }
};
MainComponent.ctorParameters = () => [
    { type: src_app_shared_services_mipedido_service__WEBPACK_IMPORTED_MODULE_2__.MipedidoService },
    { type: src_app_shared_services_navigator_link_service__WEBPACK_IMPORTED_MODULE_3__.NavigatorLinkService },
    { type: src_app_shared_services_listen_status_service__WEBPACK_IMPORTED_MODULE_4__.ListenStatusService },
    { type: src_app_shared_services_socket_service__WEBPACK_IMPORTED_MODULE_5__.SocketService },
    { type: src_app_shared_services_verify_auth_client_service__WEBPACK_IMPORTED_MODULE_6__.VerifyAuthClientService },
    { type: src_app_shared_services_info_token_service__WEBPACK_IMPORTED_MODULE_8__.InfoTockenService },
    { type: src_app_shared_services_establecimiento_service__WEBPACK_IMPORTED_MODULE_7__.EstablecimientoService }
];
MainComponent.propDecorators = {
    onResize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.HostListener, args: ['window:resize', ['$event'],] }]
};
MainComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-main',
        template: _main_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_main_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], MainComponent);



/***/ }),

/***/ 80718:
/*!***********************************************!*\
  !*** ./src/app/pages/pedido/pedido.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PedidoModule": () => (/* binding */ PedidoModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var src_app_componentes_componentes_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/componentes/componentes.module */ 83380);
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main/main.component */ 2398);
/* harmony import */ var _inicio_inicio_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./inicio/inicio.component */ 57515);
/* harmony import */ var _carta_carta_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./carta/carta.component */ 13152);
/* harmony import */ var _resumen_pedido_resumen_pedido_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./resumen-pedido/resumen-pedido.component */ 80297);
/* harmony import */ var _estado_pedido_estado_pedido_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./estado-pedido/estado-pedido.component */ 84412);
/* harmony import */ var _buscar_item_buscar_item_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./buscar-item/buscar-item.component */ 83866);
/* harmony import */ var _pedido_routing__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pedido.routing */ 66265);
/* harmony import */ var src_app_core_core_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/core.module */ 40294);
/* harmony import */ var _busqueda_busqueda_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./busqueda/busqueda.component */ 65274);
/* harmony import */ var _resumen_pedido_dialog_reset_dialog_reset_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./resumen-pedido/dialog-reset/dialog-reset.component */ 26544);
/* harmony import */ var _resumen_pedido_dialog_loading_dialog_loading_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./resumen-pedido/dialog-loading/dialog-loading.component */ 9897);
/* harmony import */ var src_app_componentes_dialog_item_edit_dialog_item_edit_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/componentes/dialog-item-edit/dialog-item-edit.component */ 89488);













// import { DialogItemComponent } from './resumen-pedido/dialog-item/dialog-item.component';

// import { DialogSubitemRemoveComponent } from './resumen-pedido/dialog-subitem-remove/dialog-subitem-remove.component';



let PedidoModule = class PedidoModule {
};
PedidoModule = (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_14__.NgModule)({
        declarations: [
            _main_main_component__WEBPACK_IMPORTED_MODULE_1__.MainComponent,
            _inicio_inicio_component__WEBPACK_IMPORTED_MODULE_2__.InicioComponent,
            _carta_carta_component__WEBPACK_IMPORTED_MODULE_3__.CartaComponent,
            _resumen_pedido_resumen_pedido_component__WEBPACK_IMPORTED_MODULE_4__.ResumenPedidoComponent,
            _estado_pedido_estado_pedido_component__WEBPACK_IMPORTED_MODULE_5__.EstadoPedidoComponent,
            _buscar_item_buscar_item_component__WEBPACK_IMPORTED_MODULE_6__.BuscarItemComponent,
            // DialogItemComponent,
            _resumen_pedido_dialog_reset_dialog_reset_component__WEBPACK_IMPORTED_MODULE_10__.DialogResetComponent,
            _resumen_pedido_dialog_loading_dialog_loading_component__WEBPACK_IMPORTED_MODULE_11__.DialogLoadingComponent,
            // DialogSubitemRemoveComponent,
            src_app_componentes_dialog_item_edit_dialog_item_edit_component__WEBPACK_IMPORTED_MODULE_12__.DialogItemEditComponent,
            _busqueda_busqueda_component__WEBPACK_IMPORTED_MODULE_9__.BusquedaComponent,
            // DialogSelectDireccionComponent
            // PagarCuentaComponent
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_15__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormsModule,
            _pedido_routing__WEBPACK_IMPORTED_MODULE_7__.PedidoRoutingModule,
            src_app_core_core_module__WEBPACK_IMPORTED_MODULE_8__.CoreModule,
            src_app_componentes_componentes_module__WEBPACK_IMPORTED_MODULE_0__.ComponentesModule
        ],
        exports: [
            // DialogItemComponent,
            _resumen_pedido_dialog_reset_dialog_reset_component__WEBPACK_IMPORTED_MODULE_10__.DialogResetComponent,
            _resumen_pedido_dialog_loading_dialog_loading_component__WEBPACK_IMPORTED_MODULE_11__.DialogLoadingComponent,
            src_app_componentes_dialog_item_edit_dialog_item_edit_component__WEBPACK_IMPORTED_MODULE_12__.DialogItemEditComponent
        ],
        // entryComponents: [
        //   DialogResetComponent,
        //   DialogLoadingComponent,
        //   DialogItemEditComponent,
        //   DialogVerificarTelefonoComponent,
        //   // DialogSelectDireccionComponent
        //   // DialogMetodoPagoComponent
        // ]
    })
], PedidoModule);



/***/ }),

/***/ 66265:
/*!************************************************!*\
  !*** ./src/app/pages/pedido/pedido.routing.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PedidoRoutingModule": () => (/* binding */ PedidoRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main/main.component */ 2398);
/* harmony import */ var _carta_carta_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./carta/carta.component */ 13152);





// import { PagarCuentaComponent } from './pagar-cuenta/pagar-cuenta.component';
const routes = [{
        path: '', component: _main_main_component__WEBPACK_IMPORTED_MODULE_0__.MainComponent,
        data: { titulo: 'Pedido' },
        children: [
            // {
            //     path: '', redirectTo: 'inicio/1', pathMatch: 'full'
            // },
            // {
            //     path: 'inicio/:id',
            //     component: InicioComponent,
            //     data: { titulo: 'Inicio' }
            // },
            {
                path: 'lacarta/:id',
                component: _carta_carta_component__WEBPACK_IMPORTED_MODULE_1__.CartaComponent,
                data: { titulo: 'Carta' }
            },
            // {
            //     path: 'pagar-cuenta',
            //     component: PagarCuentaComponent,
            //     data: { titulo: 'Pagar' }
            // },
            // {
            //     path: 'busqueda',
            //     component: BusquedaComponent,
            //     data: { titulo: 'Buscar' }
            // },
            // // {
            //     path: 'resumen',
            //     component: ResumenPedidoComponent,
            //     data: { titulo: 'Resumen' }
            // }
        ]
    }];
let PedidoRoutingModule = class PedidoRoutingModule {
};
PedidoRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
    })
], PedidoRoutingModule);



/***/ }),

/***/ 9897:
/*!****************************************************************************************!*\
  !*** ./src/app/pages/pedido/resumen-pedido/dialog-loading/dialog-loading.component.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DialogLoadingComponent": () => (/* binding */ DialogLoadingComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _dialog_loading_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dialog-loading.component.html?ngResource */ 18619);
/* harmony import */ var _dialog_loading_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dialog-loading.component.css?ngResource */ 50633);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ 31484);





let DialogLoadingComponent = class DialogLoadingComponent {
    constructor(dialogRef) {
        this.dialogRef = dialogRef;
        this.isSusccess = false;
    }
    ngOnInit() {
        setTimeout(() => {
            // this.dialogRef.close();
            this.isSusccess = true;
            setTimeout(() => {
                // this.isSusccess = false;
                this.dialogRef.close();
            }, 1500);
        }, 1500);
    }
};
DialogLoadingComponent.ctorParameters = () => [
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogRef }
];
DialogLoadingComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-dialog-loading',
        template: _dialog_loading_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_dialog_loading_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], DialogLoadingComponent);



/***/ }),

/***/ 80297:
/*!*************************************************************************!*\
  !*** ./src/app/pages/pedido/resumen-pedido/resumen-pedido.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResumenPedidoComponent": () => (/* binding */ ResumenPedidoComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _resumen_pedido_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./resumen-pedido.component.html?ngResource */ 15079);
/* harmony import */ var _resumen_pedido_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./resumen-pedido.component.css?ngResource */ 3721);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var src_app_shared_services_mipedido_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/mipedido.service */ 31375);
/* harmony import */ var src_app_shared_services_reglascarta_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/reglascarta.service */ 51723);
/* harmony import */ var src_app_modelos_pedido_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/modelos/pedido.model */ 31422);
/* harmony import */ var src_app_shared_services_socket_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/socket.service */ 43460);
/* harmony import */ var src_app_shared_services_json_print_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/json-print.service */ 99251);
/* harmony import */ var src_app_shared_services_navigator_link_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/services/navigator-link.service */ 12562);
/* harmony import */ var src_app_shared_services_crud_http_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/services/crud-http.service */ 24677);
/* harmony import */ var src_app_shared_services_info_token_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/services/info-token.service */ 93674);
/* harmony import */ var src_app_shared_services_listen_status_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/services/listen-status.service */ 70190);
/* harmony import */ var src_app_shared_services_registrar_pago_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/services/registrar-pago.service */ 30900);
/* harmony import */ var src_app_modelos_seccion_model__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/modelos/seccion.model */ 50945);
/* harmony import */ var src_app_modelos_item_model__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/modelos/item.model */ 89969);
/* harmony import */ var src_app_modelos_tipoconsumo_model__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/modelos/tipoconsumo.model */ 81270);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var _dialog_reset_dialog_reset_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./dialog-reset/dialog-reset.component */ 26544);
/* harmony import */ var src_app_componentes_dialog_item_edit_dialog_item_edit_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/componentes/dialog-item-edit/dialog-item-edit.component */ 89488);
/* harmony import */ var rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! rxjs/internal/Subject */ 68094);
/* harmony import */ var rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! rxjs/operators */ 85921);
/* harmony import */ var src_app_shared_services_estado_pedido_cliente_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! src/app/shared/services/estado-pedido-cliente.service */ 90128);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var src_app_shared_services_establecimiento_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! src/app/shared/services/establecimiento.service */ 32218);
/* harmony import */ var src_app_shared_services_utilitarios_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! src/app/shared/services/utilitarios.service */ 60961);
/* harmony import */ var src_app_shared_services_verify_auth_client_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! src/app/shared/services/verify-auth-client.service */ 34337);
/* harmony import */ var src_app_shared_services_speech_speech_data_provider_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! src/app/shared/services/speech/speech-data-provider.service */ 10250);























// import { throwToolbarMixedModesError } from '@angular/material/toolbar';





let ResumenPedidoComponent = class ResumenPedidoComponent {
    constructor(miPedidoService, reglasCartaService, navigatorService, socketService, jsonPrintService, infoToken, crudService, listenStatusService, estadoPedidoClientService, dialog, router, registrarPagoService, establecimientoService, utilService, verifyClientService, speechDataProviderService) {
        this.miPedidoService = miPedidoService;
        this.reglasCartaService = reglasCartaService;
        this.navigatorService = navigatorService;
        this.socketService = socketService;
        this.jsonPrintService = jsonPrintService;
        this.infoToken = infoToken;
        this.crudService = crudService;
        this.listenStatusService = listenStatusService;
        this.estadoPedidoClientService = estadoPedidoClientService;
        this.dialog = dialog;
        this.router = router;
        this.registrarPagoService = registrarPagoService;
        this.establecimientoService = establecimientoService;
        this.utilService = utilService;
        this.verifyClientService = verifyClientService;
        this.speechDataProviderService = speechDataProviderService;
        // private unsubscribeRe = new Subscription();
        this.destroy$ = new rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_22__.Subject();
        this._miPedido = new src_app_modelos_pedido_model__WEBPACK_IMPORTED_MODULE_4__.PedidoModel();
        this._arrSubtotales = [];
        this.hayItems = false;
        this.isVisibleConfirmar = false;
        this.isVisibleConfirmarAnimated = false;
        this.numMesaCuenta = '';
        this.msjErr = false;
        this.isReserva = false;
        this.isRequiereMesa = false;
        this.isDelivery = false;
        this.isDeliveryValid = false;
        this.frmConfirma = {};
        this.frmDelivery = {};
        this.frmReservaCliente = {};
        this.rippleColor = 'rgb(255,238,88, 0.5)';
        this.rippleColorSubItem = 'rgba(117,117,117,0.1)';
        this.loadPrinterPrecuenta = false; // si se mando a imprimir precuenta
        this.objCuenta = [];
        this.isReadyClienteDelivery = false; // si el formulario(confirmacion) clienteDelivery esta listo
        this.isReadyClienteReserva = false; // si el formulario(confirmacion) reserva esta listo
        this.isReloadListPedidos = false;
        this.isFirstLoadListen = false; // si es la primera vez que se carga, para no volver a cargar los observables
        this.isBtnPagoShow = false; // si el boton de pago ha sido visible entonces recarga la pagina de pago
        this.systemOS = ''; // sistema operativo cliente
        this.nombreClienteValido = false; // cuando es cliente e ingresa como invitado pide nombre
        this.isShowNombreClienteLoginInvitado = false;
        this.showCuentaCliente = false;
        this.isSavingPedido = false;
    }
    ngOnInit() {
        // this.establecimientoService.get();
        this.systemOS = this.utilService.getOS();
        this._miPedido = this.miPedidoService.getMiPedido();
        this.isPuntoAuntoPedido = this.infoToken.isPuntoAutoPedido();
        // console.log('this.infoToken', this.infoToken);
        this.validarNomhbreCliente();
        // this.verificarConexionSocket();
        // console.log('si es invitado');
        // this.isShowNombreClienteLoginInvitado = this.verifyClientService.getDataClient().isLoginByInvitado;
        // if ( this.isShowNombreClienteLoginInvitado || this.isPuntoAuntoPedido ) {
        //   let nomClienteInvitato = this.infoToken.infoUsToken.nombres;
        //   if ( this.isPuntoAuntoPedido ) {
        //     nomClienteInvitato = '';
        //   }
        //   nomClienteInvitato = nomClienteInvitato.toLocaleLowerCase().indexOf('invitado') > -1 ? '' : nomClienteInvitato;
        //   this.isShowNombreClienteLoginInvitado = nomClienteInvitato === '';
        //   this.nombreClienteValido = !this.isShowNombreClienteLoginInvitado;
        // } else {
        //   let nomClienteInvitato = this.infoToken.infoUsToken.nombres;
        //   nomClienteInvitato = nomClienteInvitato.toLocaleLowerCase().indexOf('invitado') > -1 ? '' : nomClienteInvitato;
        //   this.nombreClienteValido = nomClienteInvitato !== '';
        // }
        this.reglasCartaService.loadReglasCarta()
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_23__.takeUntil)(this.destroy$))
            .subscribe((res) => {
            this.rulesCarta = res[0] ? res[0].reglas ? res[0].reglas : [] : res.reglas ? res.reglas : [];
            this.rulesSubtoTales = res.subtotales || res[0].subtotales;
            this.establecimientoService.setRulesSubtotales(this.rulesSubtoTales);
            this.listenMiPedido();
            this.newFomrConfirma();
            // this.frmDelivery = new DatosDeliveryModel();
        });
        // this.navigatorService.resNavigatorSourceObserve$
        // .pipe(takeUntil(this.destroy$))
        // .subscribe((res: any) => {
        //       if (res.pageActive === 'mipedido') {
        //         if (res.url.indexOf('confirma') > 0) {
        //           // this.confirmarPeiddo();
        //         } else {
        //           // this.backConfirmacion();
        //         }
        //       }
        //     });
        this.listenStatusService.isBtnPagoShow$
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_23__.takeUntil)(this.destroy$))
            .subscribe((res) => {
            this.isBtnPagoShow = res;
            if (!res) {
                const localBtnP = localStorage.getItem('sys::btnP');
                if (localBtnP && localBtnP.toString() === '1') {
                    this.isBtnPagoShow = true;
                }
            }
        });
        // speech data finaliza pedido
        this.speechDataProviderService.commandFinalizarPedido$
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_23__.takeUntil)(this.destroy$))
            .subscribe((res) => {
            if (res) {
                // this.confirmarPeiddo();        
                this.isVisibleConfirmarAnimated = true;
                setTimeout(() => {
                    this.isVisibleConfirmar = true;
                }, 300);
                this.checkTiposDeConsumo();
                this.checkIsRequierMesa();
                this.checkIsDelivery();
                this.navigatorService.addLink('mipedido-confirma');
                this.isClienteSetValues();
            }
        });
        // speech show pedido
        this.speechDataProviderService.commandIsShowPedido$
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_23__.takeUntil)(this.destroy$))
            .subscribe((res) => {
            if (res) {
                // this.backConfirmacion();
                this.isVisibleConfirmarAnimated = false;
                this.isRequiereMesa = false;
                setTimeout(() => {
                    this.isVisibleConfirmar = false;
                }, 300);
            }
        });
        // si es cliente
        this.isCliente = this.infoToken.isCliente();
        this.isSoloLLevar = this.infoToken.isSoloLlevar();
        this.isDeliveryCliente = this.infoToken.isDelivery();
        this.isReservaCliente = this.infoToken.isReserva();
        this.isClienteSetValues();
    }
    // si es cliente asigna mesa
    isClienteSetValues() {
        if (this.isCliente) {
            this.isRequiereMesa = false;
        }
    }
    validarNomhbreCliente() {
        this.isShowNombreClienteLoginInvitado = this.verifyClientService.getDataClient().isLoginByInvitado;
        if (this.isShowNombreClienteLoginInvitado || this.isPuntoAuntoPedido) {
            let nomClienteInvitato = this.infoToken.infoUsToken.nombres;
            if (this.isPuntoAuntoPedido) {
                nomClienteInvitato = '';
                this.infoToken.infoUsToken.nombres = '';
                this.infoToken.set();
            }
            nomClienteInvitato = nomClienteInvitato.toLocaleLowerCase().indexOf('invitado') > -1 ? '' : nomClienteInvitato;
            this.isShowNombreClienteLoginInvitado = nomClienteInvitato === '';
            this.nombreClienteValido = !this.isShowNombreClienteLoginInvitado;
        }
        else {
            let nomClienteInvitato = this.infoToken.infoUsToken.nombres;
            nomClienteInvitato = nomClienteInvitato ? nomClienteInvitato.toLocaleLowerCase().indexOf('invitado') > -1 ? '' : nomClienteInvitato : '';
            this.nombreClienteValido = nomClienteInvitato !== '';
        }
        // console.log('this.nombreClienteValido', this.nombreClienteValido);
    }
    ngOnDestroy() {
        // this.unsubscribe$.next();
        // this.unsubscribe$.complete();
        // this.unsubscribeRe.unsubscribe();
        // Now let's also unsubscribe from the subject itself:
        this.destroy$.next(true);
        this.destroy$.unsubscribe();
    }
    newFomrConfirma() {
        this.frmConfirma = {
            nummesa: '',
            nummesa_resplado: '',
            referencia: '',
            reserva: false,
            solo_llevar: false,
            delivery: false
        };
        // traer los ultimos datos de comisiones
        this.establecimientoService.getComsionEntrega();
        if (this.isPuntoAuntoPedido) {
            // se coloca vacio para asignar nuevo nombre
            this.validarNomhbreCliente();
        }
    }
    pintarMiPedido() {
        this.isReloadListPedidos = true;
        if (!this.isHayCuentaBusqueda) {
            this.miPedidoService.validarReglasCarta(this.rulesCarta);
        }
        this._arrSubtotales = this.miPedidoService.getArrSubTotales(this.rulesSubtoTales);
        localStorage.setItem('sys::st', btoa(JSON.stringify(this._arrSubtotales)));
        this.hayItems = parseFloat(this._arrSubtotales[0].importe) > 0 ? true : false;
        setTimeout(() => {
            this.isReloadListPedidos = false;
        }, 1000);
        // console.log('_arrSubtotales', this._arrSubtotales);
    }
    pintarMiPedidoNuevamente() {
        this.isReloadListPedidos = true;
        if (!this.rulesCarta) {
            window.location.reload();
            return;
        }
        this.pintarMiPedido();
    }
    listenMiPedido() {
        // 090121 // comentamos estas lineas para corregir error de "Aun no tiene ningun producto en lista"
        // if ( this.isFirstLoadListen ) {return; }
        // this.isFirstLoadListen = true; // para que no vuelva a cargar los observables cuando actualizan desde sockets
        this.miPedidoService.countItemsObserve$
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_23__.takeUntil)(this.destroy$))
            .subscribe((res) => {
            this.hayItems = res > 0 ? true : false;
        });
        // .pipe(last())
        this.miPedidoService.miPedidoObserver$
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_23__.takeUntil)(this.destroy$))
            .subscribe((res) => {
            // this.miPedidoService.clearObjMiPedido(); // quita las cantidades 0
            // this._miPedido = this.miPedidoService.getMiPedido();
            this._miPedido = res;
            this.pintarMiPedido();
        });
        this.listenStatusService.hayCuentaBusqueda$
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_23__.takeUntil)(this.destroy$))
            .subscribe(res => {
            this.isHayCuentaBusqueda = res;
        });
        // cuando es solo llevar // estar pendiente de pago suscces para enviar el pedido
        this.listenStatusService.isPagoSucces$
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_23__.takeUntil)(this.destroy$))
            .subscribe(res => {
            if (!res) {
                return;
            }
            // toma la respuesta de pago
            // const resPago = JSON.parse(localStorage.getItem('sys::transaction-response'));
            // const resPagoIsSucces = resPago ? !resPago.error : false;
            const resPago = this.registrarPagoService.getDataTrasaction();
            if (resPago.isSuccess && this.isSoloLLevar) {
                // localStorage.removeItem('sys::transaction-response');
                this.registrarPagoService.removeLocalDataTransaction();
                this.enviarPedido();
            }
        });
        this.socketService.isSocketOpen$
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_23__.takeUntil)(this.destroy$))
            .subscribe(res => {
            if (!res) {
                // this.unsubscribeRe.unsubscribe();
            }
        });
        // si es cliente escucha cunado termina de hacer el pedido
        if (this.isCliente) {
            this.socketService.onGetNuevoPedido()
                .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_23__.takeUntil)(this.destroy$))
                .subscribe(res => {
                // this.estadoPedidoClientService.getCuentaTotales();
                // this.xLoadCuentaMesa('', this.estadoPedidoClientService.getCuenta());
                // this.estadoPedidoClientService.setImporte(this._arrSubtotales[this._arrSubtotales.length - 1].importe);
            });
        }
        // escucha que haya cuenta del cliente
        this.estadoPedidoClientService.hayCuentaCliente$
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_23__.takeUntil)(this.destroy$))
            .subscribe((res) => {
            if (res) {
                this.showCuentaCliente = true;
                this.xLoadCuentaMesa('', res);
            }
        });
        // escucha isOutEstablecimientoDelivery
        this.listenStatusService.isOutEstablecimientoDelivery$
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_23__.takeUntil)(this.destroy$))
            .subscribe((res) => {
            if (res) {
                this.goBackOutEstablecimiento();
                this.listenStatusService.setIsOutEstablecimientoDelivery(false);
            }
        });
        // ver la cuenta de mesa desde afuera
        this.listenStatusService.showCuentaMesaNumero$
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_23__.takeUntil)(this.destroy$))
            .subscribe((numMesa) => {
            if (numMesa !== 0) {
                this.xLoadCuentaMesa(numMesa.toString());
            }
        });
    }
    addItemToResumen(_tpc, _seccion, _item, _subItems, suma) {
        this.miPedidoService.setObjSeccionSeleced(_seccion);
        const _itemFromCarta = this.miPedidoService.findItemCarta(_item);
        // obtenemos el tipo consumo de carta
        const _tpc_item_carta = _itemFromCarta.itemtiposconsumo.filter((x) => x.idtipo_consumo === _tpc.idtipo_consumo)[0];
        // this.miPedidoService.setobjItemTipoConsumoSelected( _itemInList.itemtiposconsumo);
        _itemFromCarta.subitems_selected = _subItems.subitems;
        _itemFromCarta.cantidad_seleccionada = _item.cantidad_seleccionada;
        this.miPedidoService.addItem2(_tpc_item_carta, _itemFromCarta, suma);
    }
    openDlgItemToResumen(_seccion, _item) {
        if (this.isHayCuentaBusqueda) {
            return;
        }
        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_24__.MatDialogConfig();
        const _itemFromCarta = this.miPedidoService.findItemCarta(_item);
        _itemFromCarta.indicaciones = _itemFromCarta.indicaciones ? _itemFromCarta.indicaciones : _item.indicaciones || '';
        // dialogConfig.panelClass = 'dialog-item-edit';
        dialogConfig.autoFocus = false;
        dialogConfig.data = {
            idTpcItemResumenSelect: null,
            seccion: _seccion,
            item: _itemFromCarta,
            objItemTipoConsumoSelected: _itemFromCarta.itemtiposconsumo
        };
        dialogConfig.panelClass = ['my-dialog-orden-detalle', 'margen-0', 'margen-0'];
        const dialogRef = this.dialog.open(src_app_componentes_dialog_item_edit_dialog_item_edit_component__WEBPACK_IMPORTED_MODULE_16__.DialogItemEditComponent, dialogConfig);
        // subscribe al cierre y obtiene los datos
        dialogRef.afterClosed().subscribe(data => {
            if (!data) {
                return;
            }
        });
    }
    nuevoPedido() {
        this.backConfirmacion();
        if (this.isVisibleConfirmar) {
            this.backConfirmacion();
            // this.isVisibleConfirmarAnimated = false;
            // setTimeout(() => {
            //   this.isVisibleConfirmar = false;
            // }, 300);
            return;
        }
        const _dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_24__.MatDialogConfig();
        _dialogConfig.disableClose = true;
        _dialogConfig.hasBackdrop = true;
        const dialogReset = this.dialog.open(_dialog_reset_dialog_reset_component__WEBPACK_IMPORTED_MODULE_15__.DialogResetComponent, _dialogConfig);
        dialogReset.afterClosed().subscribe(result => {
            if (result) {
                // enviamos this._miPedido esta visa no se modifica
                this.miPedidoService.resetAllNewPedido();
                this.navigatorService.setPageActive('carta');
                this.isDeliveryValid = false; // formulario no valido para delivery
            }
        });
        this.newFomrConfirma();
    }
    nuevoPedidoFromCuenta() {
        this.navigatorService.setPageActive('carta');
    }
    backConfirmacion() {
        this.navigatorService.addLink('mipedido');
        this.isVisibleConfirmarAnimated = false;
        this.isRequiereMesa = false;
        setTimeout(() => {
            this.isVisibleConfirmar = false;
        }, 300);
    }
    getDatosFormConfirmaDelivery($event) {
        this.frmDelivery = $event;
    }
    getDatosFormConfirmaReserva($event) {
        this.frmReservaCliente = $event.formData;
        const _frmConfirma = {
            nummesa: '',
            nummesa_resplado: '',
            referencia: this.frmReservaCliente.nombre_reserva + ' ' + this.frmReservaCliente.empresa + ' ' + this.frmReservaCliente.hora_reserva,
            reserva: true,
            solo_llevar: false,
            delivery: false
        };
        this.frmConfirma = _frmConfirma;
    }
    confirmarPeiddo() {
        if (this.isVisibleConfirmarAnimated) { // enviar pedido
            if (this.isRequiereMesa || !this.isDeliveryValid) {
                // si el pago del delivery es en efectivo procesa pago
                if (this.infoToken.infoUsToken.metodoPago.idtipo_pago === 1 && this.isDeliveryValid) {
                    this.prepararEnvio();
                }
                return;
            }
            this.prepararEnvio();
        }
        else {
            this.isVisibleConfirmar = true;
            this.isVisibleConfirmarAnimated = true;
            this.checkTiposDeConsumo();
            this.checkIsRequierMesa();
            this.checkIsDelivery();
            this.navigatorService.addLink('mipedido-confirma');
            this.isClienteSetValues();
        }
    }
    prepararEnvio() {
        if (!this.isDeliveryCliente) {
            this.showLoaderPedido();
            // const _dialogConfig = new MatDialogConfig();
            // _dialogConfig.disableClose = true;
            // _dialogConfig.hasBackdrop = true;
            // const dialogLoading = this.dialog.open(DialogLoadingComponent, _dialogConfig);
            // dialogLoading.afterClosed().subscribe(result => {
            //   this.enviarPedido();
            // });
        }
        else {
            // si es delivery y paga en efectivo o yape envia de
            // 1 efectivo 2 tarjeta 3 yape
            if (this.infoToken.infoUsToken.metodoPago.idtipo_pago !== 2) {
                this.showLoaderPedido();
            }
            else {
                this.enviarPedido();
            }
        }
    }
    showLoaderPedido() {
        this.listenStatusService.setLoaderSendPedido(true);
        if (this.isSavingPedido) {
            return;
        }
        this.isSavingPedido = true;
        // seteamos el metodo pago que el cliente selecciona
        this.infoToken.setMetodoPagoSelected(this.infoToken.infoUsToken.metodoPago);
        setTimeout(() => {
            this.enviarPedido();
        }, 1400);
        // const _dialogConfig = new MatDialogConfig();
        // _dialogConfig.hasBackdrop = true;
        // _dialogConfig.disableClose = true;
        // const dialogLoading = this.dialog.open(DialogLoadingComponent, _dialogConfig);
        // dialogLoading.afterClosed().subscribe(result => {
        //   this.enviarPedido();
        // });
    }
    enviarPedido() {
        // this.verificarConexionSocket();
        // para asegurar que marque delivery si es
        const isPagoConTarjeta = this.infoToken.getInfoUs().metodoPago.idtipo_pago === 2;
        this.checkTiposDeConsumo();
        // get subtotales // si es delivery porque puede que modifique la distancia y modifica el precio // que se va ver en comanda
        // this._arrSubtotales = this.miPedidoService.getArrSubTotales(this.rulesSubtoTales);
        // seteamos el metodo pago que el cliente selecciona
        this.infoToken.setMetodoPagoSelected(this.infoToken.getInfoUs().metodoPago);
        // this.infoToken.setMetodoPagoSelected(this.infoToken.infoUsToken.metodoPago);
        // saca del local por que puede que se haya puestro propina
        this._arrSubtotales = JSON.parse(atob(localStorage.getItem('sys::st')));
        localStorage.setItem('sys::st', btoa(JSON.stringify(this._arrSubtotales)));
        // console.log('this._arrSubtotales', this._arrSubtotales);
        // usuario o cliente
        const dataUsuario = this.infoToken.getInfoUs();
        // const dataUsuario = this.infoToken.infoUsToken;
        // console.log('aaaaaaaaaaaa');
        const dataFrmConfirma = {};
        if (this.isCliente || this.isPuntoAuntoPedido && !this.isReservaCliente) {
            this.frmConfirma.solo_llevar = this.isSoloLLevar ? true : this.frmConfirma.solo_llevar;
            dataFrmConfirma.m = this.isSoloLLevar ? '' : dataUsuario.numMesaLector;
            dataFrmConfirma.m = this.isDeliveryCliente ? '' : dataUsuario.numMesaLector;
            dataFrmConfirma.r = dataUsuario.nombres.toUpperCase();
            dataFrmConfirma.nom_us = dataUsuario.nombres.toUpperCase();
            dataFrmConfirma.m_respaldo = dataFrmConfirma.m;
        }
        else {
            // dataFrmConfirma.m = this.frmConfirma.mesa ? this.frmConfirma.mesa.toString().padStart(2, '0') || '00' : '00';
            dataFrmConfirma.m_respaldo = this.frmConfirma.nummesa_resplado;
            dataFrmConfirma.m = this.frmConfirma.nummesa ? this.frmConfirma.nummesa : this.arrReqFrm.isRequiereMesa ? this.frmConfirma.nummesa_resplado : '00';
            dataFrmConfirma.r = this.frmConfirma.delivery ? this.frmDelivery.nombre : this.utilService.addslashes(this.frmConfirma.referencia) || '';
            dataFrmConfirma.nom_us = dataUsuario.nombres.split(' ')[0].toUpperCase();
        }
        // console.log('bbbbbbbbbbbbbb');
        // header //
        // const _subTotalesSave = _p_header.delivery === 1 ? this.frmDelivery.subTotales : this._arrSubtotales;
        // debugger
        // const idPwaPago = this.registrarPagoService.getIdPwaPago();
        const _p_header = {
            m: dataFrmConfirma.m,
            m_respaldo: dataFrmConfirma.m_respaldo,
            r: dataFrmConfirma.r,
            nom_us: dataFrmConfirma.nom_us,
            delivery: this.frmConfirma.delivery || this.isDeliveryCliente ? 1 : 0,
            reservar: this.frmConfirma.reserva ? 1 : 0,
            solo_llevar: this.frmConfirma.solo_llevar ? 1 : 0,
            idcategoria: localStorage.getItem('sys::cat'),
            correlativo_dia: '',
            num_pedido: '',
            isCliente: this.isCliente ? 1 : 0,
            isSoloLLevar: this.isSoloLLevar,
            idregistro_pago: 0,
            // idregistro_pago: this.isSoloLLevar ? this.registrarPagoService.getDataTrasaction().idregistro_pago : 0,
            arrDatosDelivery: this.frmDelivery,
            arrDatosReserva: this.frmReservaCliente,
            systemOS: this.systemOS,
            idregistra_scan_qr: this.establecimientoService.getLocalIdScanQr(),
            is_print_subtotales: this.miPedidoService.objDatosSede.datossede[0].is_print_subtotales,
            isprint_copy_short: this.miPedidoService.objDatosSede.datossede[0].isprint_copy_short,
            isprint_all_short: this.miPedidoService.objDatosSede.datossede[0].isprint_all_short,
            appv: 'v.2z'
        };
        // console.log('cccccccccccccc');
        // frmDelivery.buscarRepartidor este dato viene de datos-delivery pedido tomado por el mismo comercio // si es cliente de todas maneras busca repartidores
        const isClienteBuscaRepartidores = this.frmDelivery.buscarRepartidor ? this.frmDelivery.buscarRepartidor : this.isDeliveryCliente || false;
        // const _subTotalesSave = _p_header.delivery === 1 ? this.frmDelivery.subTotales : this._arrSubtotales;
        let _subTotalesSave = this._arrSubtotales;
        // si el importe total es igual a cero hay un error, entonces toma los subtotales de frmDelivery
        if (parseFloat(_subTotalesSave[_subTotalesSave.length - 1].importe) === 0) {
            _subTotalesSave = this.frmDelivery.subTotales;
            this._arrSubtotales = _subTotalesSave;
            localStorage.setItem('sys::st', btoa(JSON.stringify(this._arrSubtotales)));
        }
        const dataPedido = {
            p_header: _p_header,
            p_body: this._miPedido,
            p_subtotales: _subTotalesSave,
            idpedido: 0 // setea despues de guardar el pedido para enviarlo al socket
        };
        // console.log('ddddddddddd');
        // console.log('_p_header', _p_header);
        // enviar a print_server_detalle // para imprimir
        const arrPrint = this.jsonPrintService.enviarMiPedido(this.isCliente);
        const dataPrint = [];
        arrPrint.map((x) => {
            dataPrint.push({
                Array_enca: _p_header,
                ArraySubTotales: _subTotalesSave,
                ArrayItem: x.arrBodyPrint,
                Array_print: x.arrPrinters
            });
        });
        const _dataUsuarioSend = {
            'idusuario': dataUsuario.idusuario,
            'idcliente': dataUsuario.idcliente,
            'idorg': dataUsuario.idorg,
            'idsede': dataUsuario.idsede,
            'nombres': dataUsuario.nombres,
            'cargo': dataUsuario.cargo,
            'usuario': dataUsuario.usuario
        };
        const dataSend = {
            dataPedido: dataPedido,
            dataPrint: dataPrint,
            dataUsuario: _dataUsuarioSend,
            isDeliveryAPP: _p_header.delivery === 1 ? true : false,
            isClienteRecogeLocal: this.infoToken.infoUsToken.pasoRecoger,
            dataDescuento: [],
            listPrinters: arrPrint.listPrinters
        };
        // console.log('eeeeeeeeeeeeeeeeeeeee');
        // ya no lo envio
        // quitamos el order delivery de los datos del usuario para que no sea mucho el json
        // dataSend.dataUsuario.orderDelivery = '';
        // dataSend.dataUsuario.importeDelivery = '';
        // this.socketService.emit('printerComanda', dataPrint);
        // si es clienteDelivery no se emite nada
        // primero confirma el pago y luego guarda pedido y posteriormente el pago
        // guardamos el pedido
        if (this.isDeliveryCliente && dataUsuario.metodoPago.idtipo_pago === 2) {
            this.infoToken.setOrderDelivery(JSON.stringify(dataSend), JSON.stringify(_subTotalesSave));
            this.pagarCuentaDeliveryCliente();
            // enviamos a pagar
            return;
        }
        // descuentos
        if (this.infoToken.infoUsToken.isHayDescuento) {
            const _listDsc = this.miPedidoService.getIdsDescuentos();
            dataSend.dataDescuento = _listDsc;
        }
        // registrar el id cliente para consultar luego en mis pedidos
        if (this.infoToken.infoUsToken.isCliente) {
            this.infoToken.setIdCliente();
        }
        // console.log('ffffffffffffffffffff');
        // enviar a guardar // guarda pedido e imprime comanda
        // console.log('coonsole.log', dataSend);
        // prioridad socket, por crud demora mucho aveces se queda enviando datos...
        this.savePedidoSocket(dataSend, isPagoConTarjeta, _subTotalesSave);
        // prioridad guardar por post
        // this.crudService.postFree(JSON.stringify(dataSend), 'pedido', 'registrar-nuevo-pedido', false)
        //     .subscribe((res: any) => {
        // // // this.socketService.emit('nuevoPedido', dataSend); // !> 150920
        // // this.socketService.emitRes('nuevoPedido', JSON.stringify(dataSend)).subscribe(resSocket => { // prioridad guardar por post
        //   // seteamos el metodo pago que el cliente selecciona
        //   // this.infoToken.setMetodoPagoSelected(_p_header.arrDatosDelivery.metodoPago);
        //   // error
        //   // console.log('recibido la respuesta del servidor', resSocket);
        //   // if ( resSocket === false ) {
        //   if ( !res.success ) {
        //     // si tiene error lo intenta enviar por http
        //     // this.crudService.postFree(JSON.stringify(dataSend), 'pedido', 'registrar-nuevo-pedido', false) // prioridad guardar por post
        //     // .subscribe((res: any) => { // prioridad guardar por post
        //     this.socketService.emitRes('nuevoPedido', JSON.stringify(dataSend)).subscribe(resSocket => {
        //       // if ( !res.success ) {
        //       if ( resSocket === false ) {
        //         alert('!Ups a ocurrido un error, por favor verifique los datos y vuelve a intentarlo.');
        //         // guardamos el error
        //         const dataError = {
        //           elerror: res.error,
        //           elorigen: 'resumen-pedido'
        //         };
        //         this.crudService.postFree(dataError, 'error', 'set-error', false)
        //         .subscribe(resp => console.log(resp));
        //         this.listenStatusService.setLoaderSendPedido(false);
        //         return;
        //       }
        //       setTimeout(() => {
        //         this.listenStatusService.setLoaderSendPedido(false);
        //         this.miPedidoService.stopTimerLimit();
        //         this.miPedidoService.prepareNewPedido();
        //       }, 600);
        //       // post
        //       // dataSend.dataPedido.idpedido = res.data[0].idpedido;
        //       // dataSend.dataPrint = res.data[0].data;
        //       // this.socketService.emit('nuevoPedido2', dataSend);
        //       // socket
        //       const _res = resSocket[0];
        //       dataSend.dataPedido.idpedido = _res.idpedido;
        //       dataSend.dataPrint = _res.data[1] ? _res.data[1]?.print : null;
        //       this.newFomrConfirma();
        //       // this.backConfirmacion();
        //       // hora del pedido
        //       this.estadoPedidoClientService.setHoraInitPedido(new Date().getTime());
        //       // this.miPedidoService.prepareNewPedido();
        //       // this.miPedidoService.prepareNewPedido();
        //       // si es delivery y el pago es en efectivo o en yape, notificamos transaccion conforme
        //       // if ( this.isDeliveryCliente && dataUsuario.metodoPago.idtipo_pago !== 2) {
        //       // if ( this.isDeliveryCliente && _p_header.arrDatosDelivery.metodoPago.idtipo_pago !== 2) {
        //         // if ( this.isDeliveryCliente && this.infoToken.infoUsToken.metodoPago.idtipo_pago !== 2) {
        //       if ( this.isDeliveryCliente && !isPagoConTarjeta) {
        //         this.infoToken.setOrderDelivery(JSON.stringify(dataSend), JSON.stringify(_subTotalesSave));
        //         this.confirmarPedidoDeliveryEnviado();
        //         // this.pagarCuentaDeliveryCliente();
        //         // enviamos a pagar
        //         return;
        //       }
        //       if ( this.isReservaCliente ) {
        //         this.confirmarPedidoDeliveryEnviado();
        //         return;
        //       }
        //       this.backConfirmarPedido();
        //     });
        //   } else { // si no tiene error
        //     // socket
        //     // const res = resSocket[0];
        //     // dataSend.dataPedido.idpedido = res.idpedido;
        //     // dataSend.dataPrint = res.data[1] ? res.data[1]?.print : null;
        //     // this.socketService.emit('nuevoPedido2', dataSend);
        //     dataSend.dataPedido.idpedido = res.data[0].idpedido;
        //     dataSend.dataPrint = res.data[0].data;
        //     this.socketService.emit('nuevoPedido2', dataSend);
        //     this.newFomrConfirma();
        //     // this.backConfirmacion();
        //     // hora del pedido
        //     this.estadoPedidoClientService.setHoraInitPedido(new Date().getTime());
        //     // this.miPedidoService.prepareNewPedido();
        //     setTimeout(() => {
        //       this.listenStatusService.setLoaderSendPedido(false);
        //       this.miPedidoService.stopTimerLimit();
        //       this.miPedidoService.prepareNewPedido();
        //     }, 600);
        //     //
        //     // si es delivery y el pago es en efectivo o en yape, notificamos transaccion conforme
        //     // if ( this.isDeliveryCliente && dataUsuario.metodoPago.idtipo_pago !== 2) {
        //     // if ( this.isDeliveryCliente && _p_header.arrDatosDelivery.metodoPago.idtipo_pago !== 2) {
        //     // if ( this.isDeliveryCliente && this.infoToken.infoUsToken.metodoPago.idtipo_pago !== 2) {
        //     if ( this.isDeliveryCliente && !isPagoConTarjeta) {
        //       this.infoToken.setOrderDelivery(JSON.stringify(dataSend), JSON.stringify(_subTotalesSave));
        //       this.confirmarPedidoDeliveryEnviado();
        //       // this.pagarCuentaDeliveryCliente();
        //       // enviamos a pagar
        //       return;
        //     }
        //     if ( this.isReservaCliente ) {
        //       this.confirmarPedidoDeliveryEnviado();
        //       return;
        //     }
        //     this.backConfirmarPedido();
        //   }
        //   // this.backConfirmarPedido()
        // });
        // hora del pedido
        // this.estadoPedidoClientService.setHoraInitPedido(new Date().getTime());
        //
        // this.navigatorService.addLink('mipedido');
        // this.isVisibleConfirmarAnimated = false;
        // this.isRequiereMesa = false;
        // this.isVisibleConfirmar = false;
        //
        // this.backConfirmacion();
        // this.newFomrConfirma();
        // this.miPedidoService.prepareNewPedido();
        // // si es delivery y el pago es en efectivo o en yape, notificamos transaccion conforme
        // if ( this.isDeliveryCliente && dataUsuario.metodoPago.idtipo_pago !== 2) {
        //   this.pagarCuentaDeliveryCliente();
        //   // enviamos a pagar
        //   return;
        // }
        // this.miPedidoService.prepareNewPedido();
        // this.backConfirmacion();
        // // si es usuario cliente lo envia a estado
        // if ( this.isCliente ) {
        //   this.navigatorService.setPageActive('estado');
        //   // this.estadoPedidoClientService.get(); // inicia calc tiempo aprox y cuenta total
        // } else {
        //   this.navigatorService.setPageActive('carta');
        // }
        this.isDeliveryValid = false; // formulario no valido para delivery
    }
    backConfirmarPedido() {
        this.backConfirmacion();
        // si es usuario cliente lo envia a estado
        if (this.isCliente) {
            this.navigatorService.setPageActive('estado');
            // this.estadoPedidoClientService.get(); // inicia calc tiempo aprox y cuenta total
        }
        else {
            this.navigatorService.setPageActive('carta');
        }
        this.isDeliveryValid = false; // formulario no valido para delivery
    }
    checkTiposDeConsumo() {
        // console.log('check tipo consumo');
        this.arrReqFrm = this.miPedidoService.findEvaluateTPCMiPedido();
        this.isRequiereMesa = this.arrReqFrm.isRequiereMesa;
        this.frmConfirma.solo_llevar = this.arrReqFrm.isTpcSoloDelivery ? false : this.arrReqFrm.isTpcSoloLLevar;
        this.frmConfirma.delivery = this.arrReqFrm.isTpcSoloDelivery;
    }
    checkIsRequierMesa(num = '') {
        // console.log('check mesa', num);
        if (num !== '') {
            num = num.replace(/\D/gm, '');
            this.frmConfirma.nummesa = num;
            // revisar si el cliente ya hizo pedido en esta mesa
            // this.getLatPedidoClienteThisITable(num);
        }
        this.frmConfirma.nummesa_resplado = num;
        // const arrReqFrm = <FormValidRptModel>this.miPedidoService.findEvaluateTPCMiPedido();
        // const isTPCLocal = arrReqFrm.isTpcLocal;
        // this.isRequiereMesa = arrReqFrm.isRequiereMesa;
        let numMesasSede = parseInt(this.miPedidoService.objDatosSede.datossede[0].mesas, 0);
        numMesasSede = isNaN(numMesasSede) ? 0 : numMesasSede; // para asegurar si no viene este dato
        let isMesaValid = this.frmConfirma.nummesa ? this.frmConfirma.nummesa !== '' ? true : false : false;
        // valida la mesa que no sea mayor a las que hay
        const numMesaIngresado = isMesaValid ? parseInt(this.frmConfirma.nummesa, 0) : 0;
        isMesaValid = numMesaIngresado <= 0 || numMesaIngresado > numMesasSede ? false : true;
        this.isRequiereMesa = this.arrReqFrm.isRequiereMesa;
        // this.isRequiereMesa = isTPCLocal;
        this.isRequiereMesa = this.isRequiereMesa && (!isMesaValid && !this.frmConfirma.reserva);
    }
    checkIsDelivery() {
        this.isDelivery = this.miPedidoService.findMiPedidoIsTPCDelivery();
        // this.isDeliveryCliente = this.isDelivery;
        // this.frmConfirma.delivery = this.isDelivery;
    }
    checkDataDelivery($event) {
        this.isDeliveryValid = $event.formIsValid;
        this.frmDelivery = $event.formData;
    }
    getLatPedidoClienteThisITable(num) {
        const _data = {
            idsede: this.infoToken.getInfoUs().idsede,
            nummesa: num
        };
        this.crudService.postFree(_data, 'pedido', 'get-last-pedido-cliente-this-table', false)
            .subscribe(res => {
            console.log(res);
        });
    }
    imprimirPrecuenta() {
        this.loadPrinterPrecuenta = true;
        const _getPrinterCaja = this.jsonPrintService.getPrinterPrecuenta();
        if (!_getPrinterCaja) {
            return;
        }
        const xArrayEncabezado = {
            'm': this.numMesaCuenta,
            'r': '',
            'num_pedido': '',
            'reservar': 0,
            'solo_llevar': 0,
            'correlativo_dia': '',
            'precuenta': true,
            'delivery': false,
            'arrDatosDelivery': [],
            'idregistro_pago': 0,
            'nom_us': this.infoToken.infoUsToken.usuario
        };
        const _data = {
            Array_enca: xArrayEncabezado,
            Array_print: _getPrinterCaja.arrPrinters,
            ArrayItem: _getPrinterCaja.arrBodyPrint,
            ArraySubTotales: this._arrSubtotales
        };
        const dataSend = {
            dataPrint: _data,
            isprecuenta: 1
        };
        this.miPedidoService.printerPrecuenta(dataSend);
        setTimeout(() => {
            this.loadPrinterPrecuenta = false;
        }, 2000);
    }
    // _resCuentaFromCliente desde la cuenta del cliente
    xLoadCuentaMesa(mesa, _resCuentaFromCliente = null) {
        this.isHayCuentaBusqueda = false;
        this.msjErr = false;
        this.numMesaCuenta = mesa;
        const datos = { mesa: mesa };
        if (_resCuentaFromCliente) {
            // cuando el usuario cliente realiza un nuevo pedido y se tiene que mostrar la cuenta
            this.desglozarCuenta(_resCuentaFromCliente);
            setTimeout(() => {
                this.estadoPedidoClientService.setImporte(this._arrSubtotales[this._arrSubtotales.length - 1].importe);
            }, 1000);
            return;
        }
        this.crudService.postFree(datos, 'pedido', 'lacuenta').subscribe((res) => {
            this.desglozarCuenta(res);
        });
    }
    desglozarCuenta(res) {
        const _miPedidoCuenta = new src_app_modelos_pedido_model__WEBPACK_IMPORTED_MODULE_4__.PedidoModel();
        const c_tiposConsumo = [];
        // si se encontro cuenta
        if (res.data.length === 0) {
            this.isHayCuentaBusqueda = false;
            this.msjErr = true;
            this.listenStatusService.setHayCuentaBuesqueda(false);
            return;
        }
        this.isHayCuentaBusqueda = true;
        this.listenStatusService.setHayCuentaBuesqueda(true);
        // tipo consumo
        res.data.map((tp) => {
            let hayTpc = c_tiposConsumo.filter(x => x.idtipo_consumo === tp.idtipo_consumo)[0];
            if (!hayTpc) {
                hayTpc = new src_app_modelos_tipoconsumo_model__WEBPACK_IMPORTED_MODULE_14__.TipoConsumoModel;
                hayTpc.descripcion = tp.des_tp;
                hayTpc.idtipo_consumo = parseInt(tp.idtipo_consumo, 0);
                c_tiposConsumo.push(hayTpc);
            }
        });
        // secciones
        // const _listSec = res.data.reduce(function(rv, x) {
        //     (rv[x['idseccion']] = rv[x['idseccion']] || []).push(x);
        //     return rv;
        //   }, {});
        c_tiposConsumo.map((tp) => {
            res.data
                .filter((_tp) => _tp.idtipo_consumo === tp.idtipo_consumo)
                .map((_s, i) => {
                let haySeccion = tp.secciones.filter((s) => s.idseccion.toString() === _s.idseccion.toString())[0];
                if (!haySeccion) {
                    haySeccion = new src_app_modelos_seccion_model__WEBPACK_IMPORTED_MODULE_12__.SeccionModel;
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
                    const hayItem = new src_app_modelos_item_model__WEBPACK_IMPORTED_MODULE_13__.ItemModel;
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
                    hayItem.subitems_view = _i.subitems === 'null' || _i.subitems === '' || !_i.subitems ? [] : JSON.parse(_i.subitems);
                    s.count_items = i + 1;
                    s.items.push(hayItem);
                });
            });
        });
        _miPedidoCuenta.tipoconsumo = c_tiposConsumo;
        this.miPedidoService.setObjMiPedido(_miPedidoCuenta);
        this._miPedido = this.miPedidoService.getMiPedido();
        // para notificar antes del pago
        // console.log(_miPedidoCuenta);
        // console.log(this._miPedido);
        this._arrSubtotales = this.miPedidoService.getArrSubTotales(this.rulesSubtoTales);
        localStorage.setItem('sys::st', btoa(JSON.stringify(this._arrSubtotales)));
    }
    pagarCuentaDeliveryCliente() {
        // this.navigatorService._router('./pagar-cuenta');
        // if ( !localStorage.getItem('sys::st') ) {
        //   this.verCuenta();
        //   return;
        // }
        // this.estadoPedidoClientService.getCuenta(); // get subtotales - esta listen resumen-pedido;
        this.router.navigate(['./pagar-cuenta'])
            .then(() => {
            if (this.isBtnPagoShow) {
                window.location.reload();
            }
        });
        // .then(() => {
        //   if ( this.isBtnPagoShow ) {
        //     window.location.reload();
        //   }
        // });
        // this.listenStatusService.setIsPagePagarCuentaShow(true);
    }
    // pedido delivery pagado con efectivo o yape
    confirmarPedidoDeliveryEnviado() {
        this.router.navigate(['./pedido-confirmado']);
    }
    goBackOutEstablecimiento() {
        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_24__.MatDialogConfig();
        dialogConfig.data = { idMjs: 2 };
        const dialogReset = this.dialog.open(_dialog_reset_dialog_reset_component__WEBPACK_IMPORTED_MODULE_15__.DialogResetComponent, dialogConfig);
        dialogReset.afterClosed().subscribe(result => {
            if (result) {
                this.miPedidoService.resetAllNewPedido();
                this.miPedidoService.cerrarSession();
                this.isDeliveryValid = false; // formulario no valido para delivery
                // this.socketService.closeConnection();
                // this.navigatorService.cerrarSession();
                this.infoToken.cerrarSession();
            }
        });
    }
    goBackCarta() {
        this.navigatorService.setPageActive('carta');
    }
    verificarConexionSocket() {
        // console.log('this.socketService.isSocketOpen',  this.socketService.isSocketOpen);
        if (!this.socketService.isSocketOpen) {
            this.socketService.connect();
        }
    }
    savePedidoSocket(dataSend, isPagoConTarjeta, _subTotalesSave) {
        // this.speechDataProviderService.setIsPedidoConfirmado();
        // console.log('111111111111');
        this.socketService.emitRes('nuevoPedido', JSON.stringify(dataSend)).subscribe(resSocket => {
            // console.log('222222', resSocket);
            if (resSocket === false) {
                alert('!Ups a ocurrido un error, por favor verifique los datos y vuelve a intentarlo.');
                // guardamos el error
                const dataError = {
                    elerror: resSocket,
                    elorigen: 'resumen-pedido'
                };
                this.crudService.postFree(dataError, 'error', 'set-error', false)
                    .subscribe(resp => console.log(resp));
                this.listenStatusService.setLoaderSendPedido(false, this.verifyClientService.getIsQrSuccess());
                this.isSavingPedido = false;
                return;
            }
            setTimeout(() => {
                this.listenStatusService.setLoaderSendPedido(false, this.verifyClientService.getIsQrSuccess());
                this.isSavingPedido = false;
                this.miPedidoService.stopTimerLimit();
                this.miPedidoService.prepareNewPedido();
            }, 800);
            const _res = resSocket[0];
            dataSend.dataPedido.idpedido = _res.idpedido;
            dataSend.dataPrint = _res.data[1] ? _res.data[1]?.print : null;
            this.newFomrConfirma();
            // hora del pedido
            this.estadoPedidoClientService.setHoraInitPedido(new Date().getTime());
            // si es delivery y el pago es en efectivo o en yape, notificamos transaccion conforme
            if (this.isDeliveryCliente && !isPagoConTarjeta) {
                this.infoToken.setOrderDelivery(JSON.stringify(dataSend), JSON.stringify(_subTotalesSave));
                this.confirmarPedidoDeliveryEnviado();
                // this.pagarCuentaDeliveryCliente();
                // enviamos a pagar
                return;
            }
            if (this.isReservaCliente) {
                this.confirmarPedidoDeliveryEnviado();
                return;
            }
            this.backConfirmarPedido();
        });
    }
};
ResumenPedidoComponent.ctorParameters = () => [
    { type: src_app_shared_services_mipedido_service__WEBPACK_IMPORTED_MODULE_2__.MipedidoService },
    { type: src_app_shared_services_reglascarta_service__WEBPACK_IMPORTED_MODULE_3__.ReglascartaService },
    { type: src_app_shared_services_navigator_link_service__WEBPACK_IMPORTED_MODULE_7__.NavigatorLinkService },
    { type: src_app_shared_services_socket_service__WEBPACK_IMPORTED_MODULE_5__.SocketService },
    { type: src_app_shared_services_json_print_service__WEBPACK_IMPORTED_MODULE_6__.JsonPrintService },
    { type: src_app_shared_services_info_token_service__WEBPACK_IMPORTED_MODULE_9__.InfoTockenService },
    { type: src_app_shared_services_crud_http_service__WEBPACK_IMPORTED_MODULE_8__.CrudHttpService },
    { type: src_app_shared_services_listen_status_service__WEBPACK_IMPORTED_MODULE_10__.ListenStatusService },
    { type: src_app_shared_services_estado_pedido_cliente_service__WEBPACK_IMPORTED_MODULE_17__.EstadoPedidoClienteService },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_24__.MatDialog },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_25__.Router },
    { type: src_app_shared_services_registrar_pago_service__WEBPACK_IMPORTED_MODULE_11__.RegistrarPagoService },
    { type: src_app_shared_services_establecimiento_service__WEBPACK_IMPORTED_MODULE_18__.EstablecimientoService },
    { type: src_app_shared_services_utilitarios_service__WEBPACK_IMPORTED_MODULE_19__.UtilitariosService },
    { type: src_app_shared_services_verify_auth_client_service__WEBPACK_IMPORTED_MODULE_20__.VerifyAuthClientService },
    { type: src_app_shared_services_speech_speech_data_provider_service__WEBPACK_IMPORTED_MODULE_21__.SpeechDataProviderService }
];
ResumenPedidoComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_26__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_27__.Component)({
        selector: 'app-resumen-pedido',
        template: _resumen_pedido_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_resumen_pedido_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ResumenPedidoComponent);



/***/ }),

/***/ 99251:
/*!*******************************************************!*\
  !*** ./src/app/shared/services/json-print.service.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JsonPrintService": () => (/* binding */ JsonPrintService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _socket_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./socket.service */ 43460);
/* harmony import */ var _mipedido_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mipedido.service */ 31375);
// este servicio arma el json, que se envia para imprmir // print_setver_detalle




let JsonPrintService = class JsonPrintService {
    constructor(socketService, pedidoService) {
        this.socketService = socketService;
        this.pedidoService = pedidoService;
        this.datosSede = [];
        this.impresoras = [];
    }
    // obtener los datos de la sede
    getDataSede() {
        // this.socketService.onGetDatosSede().subscribe((res: any) => {
        // this.datosSede = res[0];
        this.datosSede = this.pedidoService.objDatosSede;
        // console.log('datos de la sede', this.datosSede);
        // });
    }
    // relacionar secciones con impresoras
    relationRowToPrint(iscliente = false) {
        // datos de la sede
        this.getDataSede();
        const _objMiPedido = this.pedidoService.getMiPedido();
        const _tpcPrinter = this.pedidoService.getObjNewItemTiposConsumo();
        const xRptPrint = []; // respuesta para enviar al backend
        const listOnlyPrinters = []; // lista de solo impresoras
        let xImpresoraPrint = []; // array de impresoras
        let xArrayBodyPrint = []; // el array de secciones e items a imprimir
        let printerAsigando = null;
        this.impresoras = this.datosSede.impresoras;
        // valores de la primera impresora // impresora donde se pone el logo
        const num_copias_all = this.datosSede.datossede[0].num_copias; // numero de copias para las demas impresoras -local
        const var_size_font_tall_comanda = this.datosSede.datossede[0].var_size_font_tall_comanda; // tamañao de letras
        const pie_pagina = this.datosSede.datossede[0].pie_pagina;
        const pie_pagina_comprobante = this.datosSede.datossede[0].pie_pagina_comprobante;
        const isPrintPedidoDeliveryCompleto = this.datosSede.datossede[0].isprint_all_delivery.toString() === '1';
        let isHayDatosPrintObj = true; // si hay datos en el obj xArrayBodyPrint para imprimir
        let isPedidoDelivery = false;
        // let indexP = 0;
        // si es cliente asigna impresora a seccion sin impresora // ej delivery por aplicacion
        if (iscliente) {
            this.setFirstPrinterSeccionCliente(_objMiPedido, this.impresoras);
        }
        // 041052022
        // si el tipo de consumo tiene un impresora especifica
        // ej: todo delivery se imprime en una impresora x
        let isTpcPrinter = false;
        let listTPCPrinter = _tpcPrinter;
        listTPCPrinter = listTPCPrinter.filter(p => p.idimpresora !== 0);
        isTpcPrinter = listTPCPrinter.length > 0;
        console.log('isTpcPrinter', isTpcPrinter);
        if (isTpcPrinter) {
            listTPCPrinter.map(p => {
                const _tpcPrint = p.idtipo_consumo;
                const xIdPrint = p.idimpresora;
                xArrayBodyPrint = [];
                _objMiPedido.tipoconsumo
                    .filter((tpc) => tpc.idtipo_consumo === _tpcPrint)
                    .map((tpc, indexP) => {
                    xArrayBodyPrint[indexP] = { 'des': tpc.descripcion, 'id': tpc.idtipo_consumo, 'titlo': tpc.titulo, 'conDatos': false };
                    tpc.secciones
                        // .filter((s: SeccionModel) => s.id === _tpcPrint)
                        .map((s) => {
                        s.items.map((i) => {
                            isHayDatosPrintObj = true;
                            xArrayBodyPrint[indexP].conDatos = true; // si la seccion tiene items
                            xArrayBodyPrint[indexP][i.iditem] = i;
                            xArrayBodyPrint[indexP][i.iditem].des_seccion = s.des;
                            xArrayBodyPrint[indexP][i.iditem].sec_orden = s.sec_orden;
                            xArrayBodyPrint[indexP][i.iditem].cantidad = i.cantidad_seleccionada.toString().padStart(2, '0');
                            xArrayBodyPrint[indexP][i.iditem].precio_print = parseFloat(i.precio_print.toString()).toFixed(2);
                            if (!i.subitems_view) {
                                xArrayBodyPrint[indexP][i.iditem].subitems_view = null;
                            }
                            i.flag_add_tpc = true;
                        });
                    });
                });
                if (xArrayBodyPrint.length === 0 || !isHayDatosPrintObj) {
                    return;
                }
                // buscamos la impresora en xArrayImpresoras;
                printerAsigando = this.impresoras.filter(pp => pp.idimpresora === xIdPrint)[0];
                xImpresoraPrint = [];
                const childPrinter = {};
                childPrinter.ip_print = printerAsigando.ip;
                childPrinter.var_margen_iz = printerAsigando.var_margen_iz;
                childPrinter.var_size_font = printerAsigando.var_size_font;
                childPrinter.local = 0;
                childPrinter.num_copias = printerAsigando.num_copias; // num_copias_all;
                childPrinter.var_size_font_tall_comanda = var_size_font_tall_comanda;
                childPrinter.copia_local = 0; // no imprime // solo para impresora local
                childPrinter.img64 = '';
                childPrinter.papel_size = printerAsigando.papel_size;
                childPrinter.pie_pagina = pie_pagina;
                childPrinter.pie_pagina_comprobante = pie_pagina_comprobante;
                xImpresoraPrint.push(childPrinter);
                xRptPrint.push({
                    arrBodyPrint: xArrayBodyPrint,
                    arrPrinters: xImpresoraPrint
                });
                listOnlyPrinters.push(childPrinter);
            });
        }
        // si es punto auto pedido agregamos la impresora asignada
        const _puntoConfig = JSON.parse(localStorage.getItem('sys::punto')) || {};
        _puntoConfig.ispunto_autopedido = _puntoConfig ? _puntoConfig.ispunto_autopedido : false;
        this.impresoras.map((p) => {
            isHayDatosPrintObj = false;
            xArrayBodyPrint = [];
            _objMiPedido.tipoconsumo
                .map((tpc, indexP) => {
                xArrayBodyPrint[indexP] = { 'des': tpc.descripcion, 'id': tpc.idtipo_consumo, 'titlo': tpc.titulo, 'conDatos': false };
                isPedidoDelivery = tpc.descripcion.toLowerCase() === 'delivery';
                tpc.secciones
                    .filter((s) => s.idimpresora === p.idimpresora)
                    .map((s) => {
                    printerAsigando = p;
                    // imprime todo el pedido en todas las areas si es delivery
                    if (isPedidoDelivery && isPrintPedidoDeliveryCompleto) {
                        tpc.secciones.map((seccion) => {
                            seccion.items.map((i) => {
                                if (i.flag_add_tpc) {
                                    return;
                                }
                                isHayDatosPrintObj = true;
                                xArrayBodyPrint[indexP].conDatos = true; // si la seccion tiene items
                                xArrayBodyPrint[indexP][i.iditem] = i;
                                xArrayBodyPrint[indexP][i.iditem].des_seccion = seccion.des;
                                xArrayBodyPrint[indexP][i.iditem].sec_orden = seccion.sec_orden;
                                xArrayBodyPrint[indexP][i.iditem].cantidad = i.cantidad_seleccionada.toString().padStart(2, '0');
                                xArrayBodyPrint[indexP][i.iditem].precio_print = parseFloat(i.precio_print.toString()).toFixed(2);
                                if (!i.subitems_view) {
                                    xArrayBodyPrint[indexP][i.iditem].subitems_view = null;
                                }
                            });
                        });
                    }
                    s.items.map((i) => {
                        if (i.flag_add_tpc) {
                            return;
                        }
                        if (i.imprimir_comanda === 0 && !iscliente) {
                            return;
                        } // no imprimir // productos bodega u otros
                        // xArrayBodyPrint[indexP][i.iditem] = [];
                        isHayDatosPrintObj = true;
                        xArrayBodyPrint[indexP].conDatos = true; // si la seccion tiene items
                        xArrayBodyPrint[indexP][i.iditem] = i;
                        xArrayBodyPrint[indexP][i.iditem].des_seccion = s.des;
                        xArrayBodyPrint[indexP][i.iditem].sec_orden = s.sec_orden;
                        xArrayBodyPrint[indexP][i.iditem].cantidad = i.cantidad_seleccionada.toString().padStart(2, '0');
                        xArrayBodyPrint[indexP][i.iditem].precio_print = parseFloat(i.precio_print.toString()).toFixed(2);
                        if (!i.subitems_view) {
                            xArrayBodyPrint[indexP][i.iditem].subitems_view = null;
                        }
                    });
                });
                // otra impresora en seccion
                tpc.secciones
                    .filter((s) => s.idimpresora_otro === p.idimpresora)
                    .map((s) => {
                    printerAsigando = p;
                    // imprime todo el pedido en todas las areas si es delivery
                    if (isPedidoDelivery && isPrintPedidoDeliveryCompleto) {
                        tpc.secciones.map((seccion) => {
                            seccion.items.map((i) => {
                                if (i.flag_add_tpc) {
                                    return;
                                }
                                isHayDatosPrintObj = true;
                                xArrayBodyPrint[indexP].conDatos = true; // si la seccion tiene items
                                xArrayBodyPrint[indexP][i.iditem] = i;
                                xArrayBodyPrint[indexP][i.iditem].des_seccion = seccion.des;
                                xArrayBodyPrint[indexP][i.iditem].sec_orden = seccion.sec_orden;
                                xArrayBodyPrint[indexP][i.iditem].cantidad = i.cantidad_seleccionada.toString().padStart(2, '0');
                                xArrayBodyPrint[indexP][i.iditem].precio_print = parseFloat(i.precio_print.toString()).toFixed(2);
                                if (!i.subitems_view) {
                                    xArrayBodyPrint[indexP][i.iditem].subitems_view = null;
                                }
                            });
                        });
                    }
                    s.items.map((i) => {
                        if (i.flag_add_tpc) {
                            return;
                        }
                        if (i.imprimir_comanda === 0 && !iscliente) {
                            return;
                        } // no imprimir // productos bodega u otros
                        // xArrayBodyPrint[indexP][i.iditem] = [];
                        isHayDatosPrintObj = true;
                        xArrayBodyPrint[indexP].conDatos = true; // si la seccion tiene items
                        xArrayBodyPrint[indexP][i.iditem] = i;
                        xArrayBodyPrint[indexP][i.iditem].des_seccion = s.des;
                        xArrayBodyPrint[indexP][i.iditem].sec_orden = s.sec_orden;
                        xArrayBodyPrint[indexP][i.iditem].cantidad = i.cantidad_seleccionada.toString().padStart(2, '0');
                        xArrayBodyPrint[indexP][i.iditem].precio_print = parseFloat(i.precio_print.toString()).toFixed(2);
                        if (!i.subitems_view) {
                            xArrayBodyPrint[indexP][i.iditem].subitems_view = null;
                        }
                    });
                });
                // indexP++;
                // si es punto autopedido
                if (_puntoConfig.ispunto_autopedido) {
                    _puntoConfig.impresora.ip_print = _puntoConfig.impresora.ip;
                    if (p.idimpresora !== _puntoConfig.impresora.idimpresora) {
                        return;
                    }
                    tpc.secciones
                        // .filter((s: SeccionModel) => s.idimpresora === p.idimpresora)
                        .map((s) => {
                        printerAsigando = _puntoConfig.impresora;
                        s.items.map((i) => {
                            if (i.imprimir_comanda === 0 && !iscliente) {
                                return;
                            } // no imprimir // productos bodega u otros
                            // xArrayBodyPrint[indexP][i.iditem] = [];
                            isHayDatosPrintObj = true;
                            xArrayBodyPrint[indexP].conDatos = true; // si la seccion tiene items
                            xArrayBodyPrint[indexP][i.iditem] = i;
                            xArrayBodyPrint[indexP][i.iditem].des_seccion = s.des;
                            xArrayBodyPrint[indexP][i.iditem].sec_orden = s.sec_orden;
                            xArrayBodyPrint[indexP][i.iditem].cantidad = i.cantidad_seleccionada.toString().padStart(2, '0');
                            xArrayBodyPrint[indexP][i.iditem].precio_print = parseFloat(i.precio_print.toString()).toFixed(2);
                            if (!i.subitems_view) {
                                xArrayBodyPrint[indexP][i.iditem].subitems_view = null;
                            }
                        });
                    });
                }
            });
            if (xArrayBodyPrint.length === 0 || !isHayDatosPrintObj) {
                return;
            }
            xImpresoraPrint = [];
            const childPrinter = {};
            childPrinter.ip_print = printerAsigando.ip;
            childPrinter.var_margen_iz = printerAsigando.var_margen_iz;
            childPrinter.var_size_font = printerAsigando.var_size_font;
            childPrinter.local = 0;
            childPrinter.num_copias = printerAsigando.num_copias; // num_copias_all;
            childPrinter.var_size_font_tall_comanda = var_size_font_tall_comanda;
            childPrinter.copia_local = 0; // no imprime // solo para impresora local
            childPrinter.img64 = '';
            childPrinter.papel_size = printerAsigando.papel_size;
            childPrinter.pie_pagina = pie_pagina;
            childPrinter.pie_pagina_comprobante = pie_pagina_comprobante;
            xImpresoraPrint.push(childPrinter);
            // console.log('xArrayBodyPrint', xArrayBodyPrint);
            // console.log('xImpresoraPrint', xImpresoraPrint);
            xRptPrint.push({
                arrBodyPrint: xArrayBodyPrint,
                arrPrinters: xImpresoraPrint
            });
            listOnlyPrinters.push(childPrinter);
        });
        xRptPrint.listPrinters = listOnlyPrinters;
        return xRptPrint;
    }
    // recuepra la primera impresora para imprimir cuando manda el cliente y si la seccion no tiene impresora
    GetFirstPrinter(listPrinter) {
        let firtsPrinter = null;
        const countPrinters = listPrinter.length;
        if (countPrinters > 0) {
            firtsPrinter = listPrinter[0];
        }
        if (countPrinters > 1 && firtsPrinter.descripcion.toLowerCase() === 'caja') {
            firtsPrinter = listPrinter[1];
        }
        return firtsPrinter;
    }
    // asigna impresora a las seccion que no tienen // para cuando el cliente realize el pedido imprima
    setFirstPrinterSeccionCliente(_objMiPedido, listPrinter) {
        let firtsIdPrinter = {};
        _objMiPedido.tipoconsumo
            .map((tpc) => {
            firtsIdPrinter = tpc.secciones.filter((s) => s.idimpresora !== 0)[0];
            if (firtsIdPrinter) {
                return;
            }
        });
        // sino encontro ningun impresora asigna impresora de la lista de impresoras
        if (!firtsIdPrinter) {
            firtsIdPrinter = this.GetFirstPrinter(listPrinter);
        }
        if (!firtsIdPrinter) {
            return;
        }
        // asignamos a las secciones que no tienen impresora
        _objMiPedido.tipoconsumo
            .map((tpc, indexP) => {
            firtsIdPrinter = tpc.secciones.filter((s) => s.idimpresora === 0)
                .map((s) => { s.idimpresora = firtsIdPrinter.idimpresora; });
        });
    }
    getPrinterPrecuenta() {
        let xRptPrint; // respuesta para enviar al backend
        let xImpresoraPrint = []; // array de impresoras
        let xArrayBodyPrint = []; // el array de secciones e items a imprimir
        // datos de la sede
        this.getDataSede();
        // console.log('print precuenta');
        xImpresoraPrint = [];
        const var_size_font_tall_comanda = this.datosSede.datossede[0].var_size_font_tall_comanda; // tamañao de letras
        const pie_pagina = this.datosSede.datossede[0].pie_pagina;
        const pie_pagina_comprobante = this.datosSede.datossede[0].pie_pagina_comprobante;
        // formato imprimir
        const _objMiPedido = this.pedidoService.getMiPedido();
        console.log('_objMiPedido', _objMiPedido);
        xArrayBodyPrint = [];
        _objMiPedido.tipoconsumo
            .map((tpc, indexP) => {
            xArrayBodyPrint[indexP] = { 'des': tpc.descripcion, 'id': tpc.idtipo_consumo, 'titlo': tpc.titulo, 'conDatos': false };
            tpc.secciones
                .map((s) => {
                s.items.map((i) => {
                    // if (i.imprimir_comanda === 0) { return; } // no imprimir // productos bodega u otros
                    // xArrayBodyPrint[indexP][i.iditem] = [];
                    xArrayBodyPrint[indexP].conDatos = true; // si la seccion tiene items
                    // xArrayBodyPrint[indexP][i.iditem] = xArrayBodyPrint[indexP][i.iditem] ? xArrayBodyPrint[indexP][i.iditem] : i;
                    // xArrayBodyPrint[indexP][i.iditem].des_seccion = s.des;
                    // xArrayBodyPrint[indexP][i.iditem].cantidad = xArrayBodyPrint[indexP][i.iditem].cantidad ? xArrayBodyPrint[indexP][i.iditem].cantidad : 0;
                    // xArrayBodyPrint[indexP][i.iditem].precio_print_app = xArrayBodyPrint[indexP][i.iditem].precio_print_app ? xArrayBodyPrint[indexP][i.iditem].precio_print_app : 0;
                    // xArrayBodyPrint[indexP][i.iditem].cantidad += parseFloat(i.cantidad_seleccionada.toString()); // .toString().padStart(2, '0');
                    // xArrayBodyPrint[indexP][i.iditem].precio_print_app += parseFloat(i.precio_print.toString());
                    // xArrayBodyPrint[indexP][i.iditem].precio_print = parseFloat(xArrayBodyPrint[indexP][i.iditem].precio_print_app.toString()).toFixed(2);
                    xArrayBodyPrint[indexP][i.iditem] = i;
                    xArrayBodyPrint[indexP][i.iditem].des_seccion = s.des;
                    xArrayBodyPrint[indexP][i.iditem].sec_orden = s.sec_orden;
                    xArrayBodyPrint[indexP][i.iditem].cantidad = i.cantidad_seleccionada.toString().padStart(2, '0');
                    xArrayBodyPrint[indexP][i.iditem].precio_print_app = parseFloat(i.precio_print.toString()).toFixed(2);
                    xArrayBodyPrint[indexP][i.iditem].precio_print = parseFloat(i.precio_print.toString()).toFixed(2);
                    if (!i.subitems_view) {
                        xArrayBodyPrint[indexP][i.iditem].subitems_view = null;
                    }
                });
            });
            // indexP++;
        });
        this.impresoras = this.datosSede.impresoras;
        // -1 impresora precuenta
        const p = this.impresoras.filter(x => x.idtipo_otro).filter(x => x.idtipo_otro.indexOf('-1') > -1)[0];
        if (!p) {
            return false;
        }
        const childPrinter = {};
        childPrinter.ip_print = p.ip;
        childPrinter.var_margen_iz = p.var_margen_iz;
        childPrinter.var_size_font = p.var_size_font;
        childPrinter.local = 0;
        childPrinter.num_copias = 0;
        childPrinter.var_size_font_tall_comanda = var_size_font_tall_comanda;
        childPrinter.copia_local = 0; // no imprime // solo para impresora local
        childPrinter.img64 = '';
        childPrinter.papel_size = p.papel_size;
        childPrinter.pie_pagina = pie_pagina;
        childPrinter.pie_pagina_comprobante = pie_pagina_comprobante;
        xImpresoraPrint.push(childPrinter);
        // buscar impresora de precuenta
        xRptPrint = {
            arrBodyPrint: xArrayBodyPrint,
            arrPrinters: xImpresoraPrint
        };
        return xRptPrint;
    }
    enviarMiPedido(iscliente = false) {
        return this.relationRowToPrint(iscliente);
    }
};
JsonPrintService.ctorParameters = () => [
    { type: _socket_service__WEBPACK_IMPORTED_MODULE_0__.SocketService },
    { type: _mipedido_service__WEBPACK_IMPORTED_MODULE_1__.MipedidoService }
];
JsonPrintService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], JsonPrintService);



/***/ }),

/***/ 51723:
/*!********************************************************!*\
  !*** ./src/app/shared/services/reglascarta.service.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReglascartaService": () => (/* binding */ ReglascartaService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _socket_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./socket.service */ 43460);
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storage.service */ 1303);
/* harmony import */ var rxjs_internal_Observable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/internal/Observable */ 84758);





let ReglascartaService = class ReglascartaService {
    constructor(storageService, socketService) {
        this.storageService = storageService;
        this.socketService = socketService;
        this.keyStorage = 'sys::rules';
    }
    loadReglasCarta() {
        // if ( this.storageService.isExistKey(this.keyStorage) ) {
        //   return this.decodeObjInSotrage();
        // } else {
        //   return this.dataReglasCarta();
        // }
        return this.dataReglasCarta();
    }
    getObjReglasCarta() {
        return this.objReglasCarta;
    }
    dataReglasCarta() {
        return new rxjs_internal_Observable__WEBPACK_IMPORTED_MODULE_2__.Observable(observer => {
            this.socketService.onReglasCarta().subscribe((res) => {
                this.objReglasCarta = res[0];
                this.codeObjInSotrage();
                // console.log(this.objReglasCarta);
                observer.next(this.objReglasCarta);
            });
        });
    }
    codeObjInSotrage() {
        this.storageService.set(this.keyStorage, btoa(JSON.stringify(this.objReglasCarta)));
    }
    decodeObjInSotrage() {
        return new rxjs_internal_Observable__WEBPACK_IMPORTED_MODULE_2__.Observable(observer => {
            const objFromStorage = this.storageService.get(this.keyStorage);
            try {
                this.objReglasCarta = JSON.parse(atob(objFromStorage));
                // console.log(this.objReglasCarta);
                observer.next(this.objReglasCarta);
            }
            catch (error) {
                this.dataReglasCarta();
            }
        });
    }
};
ReglascartaService.ctorParameters = () => [
    { type: _storage_service__WEBPACK_IMPORTED_MODULE_1__.StorageService },
    { type: _socket_service__WEBPACK_IMPORTED_MODULE_0__.SocketService }
];
ReglascartaService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
        providedIn: 'root'
    })
], ReglascartaService);



/***/ }),

/***/ 11461:
/*!*******************************************************************************!*\
  !*** ./src/app/pages/pedido/buscar-item/buscar-item.component.css?ngResource ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJidXNjYXItaXRlbS5jb21wb25lbnQuY3NzIn0= */";

/***/ }),

/***/ 25437:
/*!*************************************************************************!*\
  !*** ./src/app/pages/pedido/busqueda/busqueda.component.css?ngResource ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJidXNxdWVkYS5jb21wb25lbnQuY3NzIn0= */";

/***/ }),

/***/ 37636:
/*!*******************************************************************!*\
  !*** ./src/app/pages/pedido/carta/carta.component.css?ngResource ***!
  \*******************************************************************/
/***/ ((module) => {

module.exports = "/* @import '../pedido.style.css'; */\r\n.text-puntos-suspensivos {\r\n\twidth: 100%;\r\n    white-space: nowrap;\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n}\r\n.content-view-item-mercado {\r\n    display: grid;\r\n    grid-gap: 10px;\r\n    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));\r\n}\r\n.li-content-mercado {\r\n    list-style-type: none;\r\n}\r\n.li-item-mercado {\r\n    background: white;\r\n    padding: 8px;\r\n    padding-left: 15px;\r\n    padding-right: 15px;\r\n}\r\n.div-control-add-fast {\r\n    position: absolute;\r\n    right: 20px;\r\n    top: 5px;\r\n}\r\n.control-more-clic {\r\n    padding-left: 15px;\r\n    margin-bottom: 10px;\r\n  }\r\n.btn-indicacion-last-control {    \r\n    width: -webkit-fit-content;    \r\n    width: -moz-fit-content;    \r\n    width: fit-content;\r\n    background: mediumseagreen;\r\n    color: white;    \r\n    text-align: center;\r\n    padding: 2px 10px;\r\n    border-radius: 5px;\r\n    display: -webkit-box;\r\n    display: -webkit-flex;\r\n    display: flex;\r\n    -webkit-box-align: center;\r\n    -webkit-align-items: center;\r\n            align-items: center;\r\n    height: 32px;\r\n}\r\n.item-categoria-carta{\r\n    display: -webkit-box;\r\n    display: -webkit-flex;\r\n    display: flex;\r\n    -webkit-box-align: center;\r\n    -webkit-align-items: center;\r\n            align-items: center;\r\n}\r\n.ul-items {\r\n    list-style-type: none;    \r\n}\r\n@media only screen and (min-width: 600px) {\r\n    .content-master {\r\n        display: -webkit-box;\r\n        display: -webkit-flex;\r\n        display: flex;\r\n    }\r\n\r\n    .content-secciones {\r\n        width: 100%;\r\n        max-width: 350px;\r\n        min-width: 310px;\r\n        border-right: 2px solid #bdbdbd;\r\n        height: -webkit-calc(100vh - 110px);\r\n        height: calc(100vh - 110px);\r\n        overflow: auto;\r\n    }\r\n\r\n    .content-items {\r\n        width: 100%;\r\n        /* max-width: 500px; */\r\n        min-width: 320px;\r\n        border-right: 1px solid #dee2e6!important;\r\n        height: -webkit-calc(100vh - 110px);\r\n        height: calc(100vh - 110px);\r\n        overflow: auto;\r\n    }\r\n\r\n    .content-resumen {\r\n        min-width: 360px;\r\n        max-width: 420px;\r\n        width: 100%;\r\n        padding: 50px 20px 0px 20px;\r\n        border: 2px solid #bdbdbd;\r\n        height: -webkit-calc(100vh - 110px);\r\n        height: calc(100vh - 110px);\r\n        overflow: auto;\r\n        background: #eeeeee;\r\n    }\r\n\r\n  }\r\n@media only screen and (max-width: 1050px) {\r\n    .content-resumen{\r\n        display: none;\r\n    }\r\n}\r\n/* cuando es mayot o igual a 1500 */\r\n@media only screen and (min-width: 1250px) {\r\n    .ul-items {\r\n        list-style-type: none;\r\n        display: -webkit-box;\r\n        display: -webkit-flex;\r\n        display: flex;\r\n        -webkit-flex-wrap: wrap;\r\n                flex-wrap: wrap;\r\n        -webkit-box-orient: horizontal;\r\n        -webkit-box-direction: normal;\r\n        -webkit-flex-flow: row wrap;\r\n                flex-flow: row wrap;\r\n    }\r\n    .li-item {\r\n        -webkit-flex-basis: 50%;\r\n                flex-basis: 50%;\r\n        border-right: 2px solid #eeee;\r\n    }\r\n\r\n    .child-item {\r\n        height: 100%;\r\n    }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcnRhLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsbUNBQW1DO0FBQ25DO0NBQ0MsV0FBVztJQUNSLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsdUJBQXVCO0FBQzNCO0FBRUE7SUFDSSxhQUFhO0lBQ2IsY0FBYztJQUNkLDJEQUEyRDtBQUMvRDtBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCO0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixtQkFBbUI7QUFDdkI7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsUUFBUTtBQUNaO0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsbUJBQW1CO0VBQ3JCO0FBRUY7SUFDSSwwQkFBa0I7SUFBbEIsdUJBQWtCO0lBQWxCLGtCQUFrQjtJQUNsQiwwQkFBMEI7SUFDMUIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLG9CQUFhO0lBQWIscUJBQWE7SUFBYixhQUFhO0lBQ2IseUJBQW1CO0lBQW5CLDJCQUFtQjtZQUFuQixtQkFBbUI7SUFDbkIsWUFBWTtBQUNoQjtBQUVBO0lBQ0ksb0JBQWE7SUFBYixxQkFBYTtJQUFiLGFBQWE7SUFDYix5QkFBbUI7SUFBbkIsMkJBQW1CO1lBQW5CLG1CQUFtQjtBQUN2QjtBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCO0FBRUE7SUFDSTtRQUNJLG9CQUFhO1FBQWIscUJBQWE7UUFBYixhQUFhO0lBQ2pCOztJQUVBO1FBQ0ksV0FBVztRQUNYLGdCQUFnQjtRQUNoQixnQkFBZ0I7UUFDaEIsK0JBQStCO1FBQy9CLG1DQUEyQjtRQUEzQiwyQkFBMkI7UUFDM0IsY0FBYztJQUNsQjs7SUFFQTtRQUNJLFdBQVc7UUFDWCxzQkFBc0I7UUFDdEIsZ0JBQWdCO1FBQ2hCLHlDQUF5QztRQUN6QyxtQ0FBMkI7UUFBM0IsMkJBQTJCO1FBQzNCLGNBQWM7SUFDbEI7O0lBRUE7UUFDSSxnQkFBZ0I7UUFDaEIsZ0JBQWdCO1FBQ2hCLFdBQVc7UUFDWCwyQkFBMkI7UUFDM0IseUJBQXlCO1FBQ3pCLG1DQUEyQjtRQUEzQiwyQkFBMkI7UUFDM0IsY0FBYztRQUNkLG1CQUFtQjtJQUN2Qjs7RUFFRjtBQUdGO0lBQ0k7UUFDSSxhQUFhO0lBQ2pCO0FBQ0o7QUFFQSxtQ0FBbUM7QUFDbkM7SUFDSTtRQUNJLHFCQUFxQjtRQUNyQixvQkFBYTtRQUFiLHFCQUFhO1FBQWIsYUFBYTtRQUNiLHVCQUFlO2dCQUFmLGVBQWU7UUFDZiw4QkFBbUI7UUFBbkIsNkJBQW1CO1FBQW5CLDJCQUFtQjtnQkFBbkIsbUJBQW1CO0lBQ3ZCO0lBQ0E7UUFDSSx1QkFBZTtnQkFBZixlQUFlO1FBQ2YsNkJBQTZCO0lBQ2pDOztJQUVBO1FBQ0ksWUFBWTtJQUNoQjtBQUNKIiwiZmlsZSI6ImNhcnRhLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBAaW1wb3J0ICcuLi9wZWRpZG8uc3R5bGUuY3NzJzsgKi9cclxuLnRleHQtcHVudG9zLXN1c3BlbnNpdm9zIHtcclxuXHR3aWR0aDogMTAwJTtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbn1cclxuXHJcbi5jb250ZW50LXZpZXctaXRlbS1tZXJjYWRvIHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLWdhcDogMTBweDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMTUwcHgsIDFmcikpO1xyXG59XHJcblxyXG4ubGktY29udGVudC1tZXJjYWRvIHtcclxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxufVxyXG5cclxuLmxpLWl0ZW0tbWVyY2FkbyB7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIHBhZGRpbmc6IDhweDtcclxuICAgIHBhZGRpbmctbGVmdDogMTVweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDE1cHg7XHJcbn1cclxuXHJcbi5kaXYtY29udHJvbC1hZGQtZmFzdCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMjBweDtcclxuICAgIHRvcDogNXB4O1xyXG59XHJcblxyXG4uY29udHJvbC1tb3JlLWNsaWMge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICB9XHJcblxyXG4uYnRuLWluZGljYWNpb24tbGFzdC1jb250cm9sIHsgICAgXHJcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbiAgICBiYWNrZ3JvdW5kOiBtZWRpdW1zZWFncmVlbjtcclxuICAgIGNvbG9yOiB3aGl0ZTsgICAgXHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAycHggMTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgaGVpZ2h0OiAzMnB4O1xyXG59XHJcblxyXG4uaXRlbS1jYXRlZ29yaWEtY2FydGF7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLnVsLWl0ZW1zIHtcclxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTsgICAgXHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAwcHgpIHtcclxuICAgIC5jb250ZW50LW1hc3RlciB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgIH1cclxuXHJcbiAgICAuY29udGVudC1zZWNjaW9uZXMge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIG1heC13aWR0aDogMzUwcHg7XHJcbiAgICAgICAgbWluLXdpZHRoOiAzMTBweDtcclxuICAgICAgICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCAjYmRiZGJkO1xyXG4gICAgICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDExMHB4KTtcclxuICAgICAgICBvdmVyZmxvdzogYXV0bztcclxuICAgIH1cclxuXHJcbiAgICAuY29udGVudC1pdGVtcyB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgLyogbWF4LXdpZHRoOiA1MDBweDsgKi9cclxuICAgICAgICBtaW4td2lkdGg6IDMyMHB4O1xyXG4gICAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNkZWUyZTYhaW1wb3J0YW50O1xyXG4gICAgICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDExMHB4KTtcclxuICAgICAgICBvdmVyZmxvdzogYXV0bztcclxuICAgIH1cclxuXHJcbiAgICAuY29udGVudC1yZXN1bWVuIHtcclxuICAgICAgICBtaW4td2lkdGg6IDM2MHB4O1xyXG4gICAgICAgIG1heC13aWR0aDogNDIwcHg7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgcGFkZGluZzogNTBweCAyMHB4IDBweCAyMHB4O1xyXG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICNiZGJkYmQ7XHJcbiAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTEwcHgpO1xyXG4gICAgICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNlZWVlZWU7XHJcbiAgICB9XHJcblxyXG4gIH1cclxuXHJcbiAgXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTA1MHB4KSB7XHJcbiAgICAuY29udGVudC1yZXN1bWVue1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qIGN1YW5kbyBlcyBtYXlvdCBvIGlndWFsIGEgMTUwMCAqL1xyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyNTBweCkge1xyXG4gICAgLnVsLWl0ZW1zIHtcclxuICAgICAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAgICAgZmxleC1mbG93OiByb3cgd3JhcDtcclxuICAgIH1cclxuICAgIC5saS1pdGVtIHtcclxuICAgICAgICBmbGV4LWJhc2lzOiA1MCU7XHJcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgI2VlZWU7XHJcbiAgICB9XHJcblxyXG4gICAgLmNoaWxkLWl0ZW0ge1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgIH1cclxufSJdfQ== */";

/***/ }),

/***/ 34920:
/*!***********************************************************************************!*\
  !*** ./src/app/pages/pedido/estado-pedido/estado-pedido.component.css?ngResource ***!
  \***********************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlc3RhZG8tcGVkaWRvLmNvbXBvbmVudC5jc3MifQ== */";

/***/ }),

/***/ 45460:
/*!*********************************************************************!*\
  !*** ./src/app/pages/pedido/inicio/inicio.component.css?ngResource ***!
  \*********************************************************************/
/***/ ((module) => {

module.exports = "/* .mat-tab-header {\r\n  z-index: 9999;\r\n  position: sticky !important;\r\n  top: 0px;\r\n  background-color: white !important;\r\n} */\r\n\r\n/* ::ng-deep .mat-tab-body-wrapper {\r\n  height: calc(100vh - 105px);\r\n} */\r\n\r\n/* .color-fondo {\r\n  background: #eeeeee;\r\n} */\r\n\r\n.main-contemt {\r\n  overflow: hidden !important;\r\n}\r\n\r\n.x100 {\r\n  height: 100vh;\r\n  overflow: auto;\r\n}\r\n\r\n/* .transicion {\r\n    transition: all 0.3s ease-out;\r\n} */\r\n\r\n.toolbar-main {\r\n  -webkit-animation-duration: 0.3s;\r\n          animation-duration: 0.3s;\r\n  -webkit-animation-timing-function: ease-out;\r\n          animation-timing-function: ease-out;\r\n  -webkit-animation-fill-mode: both;\r\n          animation-fill-mode: both;\r\n}\r\n\r\n@-webkit-keyframes fadeOutTool {\r\n  from {\r\n    margin-top: 0px;\r\n  }\r\n\r\n  to {\r\n    margin-top: -60px;\r\n    display: none;\r\n    visibility: hidden;\r\n  }\r\n}\r\n\r\n@keyframes fadeOutTool {\r\n  from {\r\n    margin-top: 0px;\r\n  }\r\n\r\n  to {\r\n    margin-top: -60px;\r\n    display: none;\r\n    visibility: hidden;\r\n  }\r\n}\r\n\r\n.toolbar-main.fadeOutTool {\r\n  -webkit-animation-name: fadeOutTool;\r\n          animation-name: fadeOutTool;\r\n}\r\n\r\n@-webkit-keyframes fadeInTool {\r\n  from {\r\n    margin-top: -60px;\r\n    display: inline-block;\r\n  }\r\n\r\n  to {\r\n    margin-top: 0px;\r\n  }\r\n}\r\n\r\n@keyframes fadeInTool {\r\n  from {\r\n    margin-top: -60px;\r\n    display: inline-block;\r\n  }\r\n\r\n  to {\r\n    margin-top: 0px;\r\n  }\r\n}\r\n\r\n.toolbar-main.fadeInTool {\r\n  -webkit-animation-name: fadeInTool;\r\n          animation-name: fadeInTool;\r\n}\r\n\r\n.x100-toolbar-visible {\r\n  height: -webkit-calc(100vh - 105px);\r\n  height: calc(100vh - 105px);\r\n  overflow: auto;\r\n}\r\n\r\n.x100-toolbar-hidden {\r\n  height: -webkit-calc(100vh - 49px);\r\n  height: calc(100vh - 49px);\r\n  overflow: auto;\r\n}\r\n\r\n.countItem {\r\n  padding: 2px 6px 2px 3px;\r\n  border-radius: 50%;\r\n  line-height: 18px;\r\n  font-size: 12px;\r\n  margin-bottom: 15px;\r\n  text-align: center;\r\n}\r\n\r\n.countTotal {\r\n  float: right;\r\n  background: #f44336;\r\n  color: #eeeeee;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluaWNpby5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7OztHQUtHOztBQUVIOztHQUVHOztBQUVIOztHQUVHOztBQUNIO0VBQ0UsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGNBQWM7QUFDaEI7O0FBRUE7O0dBRUc7O0FBRUg7RUFDRSxnQ0FBd0I7VUFBeEIsd0JBQXdCO0VBQ3hCLDJDQUFtQztVQUFuQyxtQ0FBbUM7RUFDbkMsaUNBQXlCO1VBQXpCLHlCQUF5QjtBQUMzQjs7QUFHQTtFQUNFO0lBQ0UsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2Isa0JBQWtCO0VBQ3BCO0FBQ0Y7O0FBVkE7RUFDRTtJQUNFLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxpQkFBaUI7SUFDakIsYUFBYTtJQUNiLGtCQUFrQjtFQUNwQjtBQUNGOztBQUVBO0VBQ0UsbUNBQTJCO1VBQTNCLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFO0lBQ0UsaUJBQWlCO0lBQ2pCLHFCQUFxQjtFQUN2Qjs7RUFFQTtJQUNFLGVBQWU7RUFDakI7QUFDRjs7QUFUQTtFQUNFO0lBQ0UsaUJBQWlCO0lBQ2pCLHFCQUFxQjtFQUN2Qjs7RUFFQTtJQUNFLGVBQWU7RUFDakI7QUFDRjs7QUFFQTtFQUNFLGtDQUEwQjtVQUExQiwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSxtQ0FBMkI7RUFBM0IsMkJBQTJCO0VBQzNCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxrQ0FBMEI7RUFBMUIsMEJBQTBCO0VBQzFCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSx3QkFBd0I7RUFDeEIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsY0FBYztBQUNoQiIsImZpbGUiOiJpbmljaW8uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIC5tYXQtdGFiLWhlYWRlciB7XHJcbiAgei1pbmRleDogOTk5OTtcclxuICBwb3NpdGlvbjogc3RpY2t5ICFpbXBvcnRhbnQ7XHJcbiAgdG9wOiAwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxufSAqL1xyXG5cclxuLyogOjpuZy1kZWVwIC5tYXQtdGFiLWJvZHktd3JhcHBlciB7XHJcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTA1cHgpO1xyXG59ICovXHJcblxyXG4vKiAuY29sb3ItZm9uZG8ge1xyXG4gIGJhY2tncm91bmQ6ICNlZWVlZWU7XHJcbn0gKi9cclxuLm1haW4tY29udGVtdCB7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ueDEwMCB7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICBvdmVyZmxvdzogYXV0bztcclxufVxyXG5cclxuLyogLnRyYW5zaWNpb24ge1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1vdXQ7XHJcbn0gKi9cclxuXHJcbi50b29sYmFyLW1haW4ge1xyXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMC4zcztcclxuICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcclxuICBhbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xyXG59XHJcblxyXG5cclxuQGtleWZyYW1lcyBmYWRlT3V0VG9vbCB7XHJcbiAgZnJvbSB7XHJcbiAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgfVxyXG5cclxuICB0byB7XHJcbiAgICBtYXJnaW4tdG9wOiAtNjBweDtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgfVxyXG59XHJcblxyXG4udG9vbGJhci1tYWluLmZhZGVPdXRUb29sIHtcclxuICBhbmltYXRpb24tbmFtZTogZmFkZU91dFRvb2w7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgZmFkZUluVG9vbCB7XHJcbiAgZnJvbSB7XHJcbiAgICBtYXJnaW4tdG9wOiAtNjBweDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB9XHJcblxyXG4gIHRvIHtcclxuICAgIG1hcmdpbi10b3A6IDBweDtcclxuICB9XHJcbn1cclxuXHJcbi50b29sYmFyLW1haW4uZmFkZUluVG9vbCB7XHJcbiAgYW5pbWF0aW9uLW5hbWU6IGZhZGVJblRvb2w7XHJcbn1cclxuXHJcbi54MTAwLXRvb2xiYXItdmlzaWJsZSB7XHJcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTA1cHgpO1xyXG4gIG92ZXJmbG93OiBhdXRvO1xyXG59XHJcblxyXG4ueDEwMC10b29sYmFyLWhpZGRlbiB7XHJcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNDlweCk7XHJcbiAgb3ZlcmZsb3c6IGF1dG87XHJcbn1cclxuXHJcbi5jb3VudEl0ZW0ge1xyXG4gIHBhZGRpbmc6IDJweCA2cHggMnB4IDNweDtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uY291bnRUb3RhbCB7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG4gIGJhY2tncm91bmQ6ICNmNDQzMzY7XHJcbiAgY29sb3I6ICNlZWVlZWU7XHJcbn0iXX0= */";

/***/ }),

/***/ 67182:
/*!*****************************************************************!*\
  !*** ./src/app/pages/pedido/main/main.component.css?ngResource ***!
  \*****************************************************************/
/***/ ((module) => {

module.exports = "/* .mat-tab-header {\r\n  z-index: 9999;\r\n  position: sticky !important;\r\n  top: 0px;\r\n  background-color: white !important;\r\n} */\r\n\r\n/* ::ng-deep .mat-tab-body-wrapper {\r\n  height: calc(100vh - 105px);\r\n} */\r\n\r\n/* .color-fondo {\r\n  background: #eeeeee;\r\n} */\r\n\r\n.main-contemt {\r\n    overflow:  hidden !important;\r\n}\r\n\r\n.x100 {\r\n    height: 100vh;\r\n    overflow: auto;    \r\n}\r\n\r\n.toolbar-main {\r\n    -webkit-animation-duration: 0.3s;\r\n            animation-duration: 0.3s;\r\n    -webkit-animation-timing-function: ease-out;\r\n            animation-timing-function: ease-out;\r\n    -webkit-animation-fill-mode: both;\r\n            animation-fill-mode: both;\r\n}\r\n\r\n@-webkit-keyframes fadeOutTool {\r\n  from {    \r\n    margin-top: 0px;\r\n  }\r\n\r\n  to {     \r\n    margin-top: -60px;\r\n    display: none; \r\n    visibility: hidden;\r\n  }\r\n}\r\n\r\n@keyframes fadeOutTool {\r\n  from {    \r\n    margin-top: 0px;\r\n  }\r\n\r\n  to {     \r\n    margin-top: -60px;\r\n    display: none; \r\n    visibility: hidden;\r\n  }\r\n}\r\n\r\n.toolbar-main.fadeOutTool {\r\n  -webkit-animation-name: fadeOutTool;\r\n          animation-name: fadeOutTool;\r\n}\r\n\r\n@-webkit-keyframes fadeInTool {\r\n  from {    \r\n    margin-top: -60px;\r\n    display: inline-block;\r\n  }\r\n\r\n  to {    \r\n    margin-top: 0px;\r\n  }\r\n}\r\n\r\n@keyframes fadeInTool {\r\n  from {    \r\n    margin-top: -60px;\r\n    display: inline-block;\r\n  }\r\n\r\n  to {    \r\n    margin-top: 0px;\r\n  }\r\n}\r\n\r\n.toolbar-main.fadeInTool {\r\n  -webkit-animation-name: fadeInTool;\r\n          animation-name: fadeInTool;\r\n}\r\n\r\n.x100-toolbar-visible {    \r\n  height: -webkit-calc(100vh - 105px);    \r\n  height: calc(100vh - 105px);\r\n  overflow: auto;\r\n}\r\n\r\n.x100-toolbar-hidden {\r\n  position: relative;\r\n  height: -webkit-calc(100vh - 49px);\r\n  height: calc(100vh - 49px);\r\n  overflow: auto;\r\n}\r\n\r\n.countItem {\r\n  padding: 2px 6px 2px 3px;\r\n  border-radius: 50%;\r\n  line-height: 18px;\r\n  font-size: 12px;\r\n  margin-bottom: 15px;\r\n  text-align: center;\r\n}\r\n\r\n.countTotal {\r\n  float: right;\r\n  background: #f44336;  \r\n  color: #eeeeee;\r\n}\r\n\r\n.footer-btn-go-lista {\r\n  position: fixed;\r\n  bottom: -10px;\r\n  width: 100%;  \r\n  text-align: center;  \r\n  background: #e0e0e0;\r\n  display: -webkit-box;\r\n  display: -webkit-flex;\r\n  display: flex;\r\n  -webkit-box-pack: justify;\r\n  -webkit-justify-content: space-between;\r\n          justify-content: space-between;\r\n  -webkit-box-align: center;\r\n  -webkit-align-items: center;\r\n          align-items: center;\r\n  padding: 5px 15px;\r\n}\r\n\r\n.footer-btn-go-lista .content-btn {\r\n  margin-top: -10px;\r\n}\r\n\r\n.footer-btn-go-lista .content {\r\n  background: #3f51b5;\r\n  color: white;\r\n  width: 60%;\r\n  font-size: 14px;\r\n  border-radius: 5px 5px 0px 0px;\r\n  padding: 10px;\r\n  font-weight: 100;\r\n  margin-top: 10px;\r\n\r\n  display: -webkit-box;\r\n\r\n  display: -webkit-flex;\r\n\r\n  display: flex;\r\n  -webkit-box-pack: justify;\r\n  -webkit-justify-content: space-between;\r\n          justify-content: space-between;\r\n  -webkit-box-align: center;\r\n  -webkit-align-items: center;\r\n          align-items: center;\r\n}\r\n\r\n.fondo-gris {\r\n  background: #eeeeee;\r\n}\r\n\r\n::ng-deep.header-less-tabs.mat-tab-group .mat-tab-header { display: none; }\r\n\r\n/* #loader-wrapper .loader-msj {\r\n  color: #e0e0e0;\r\n  width: 100%;\r\n  z-index: 2000;\r\n  position: absolute;\r\n  text-align: center;\r\n  font-size: 12px;\r\n  bottom: 25%;\r\n} */\r\n\r\n/* .loaded #loader-wrapper .loader-msj {\r\n  opacity: 0;\r\n  -webkit-transition: all 0.3s ease-out;\r\n          transition: all 0.3s ease-out;\r\n} */\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7R0FLRzs7QUFFSDs7R0FFRzs7QUFFSDs7R0FFRzs7QUFFSDtJQUNJLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLGFBQWE7SUFDYixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksZ0NBQXdCO1lBQXhCLHdCQUF3QjtJQUN4QiwyQ0FBbUM7WUFBbkMsbUNBQW1DO0lBQ25DLGlDQUF5QjtZQUF6Qix5QkFBeUI7QUFDN0I7O0FBR0E7RUFDRTtJQUNFLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxpQkFBaUI7SUFDakIsYUFBYTtJQUNiLGtCQUFrQjtFQUNwQjtBQUNGOztBQVZBO0VBQ0U7SUFDRSxlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYixrQkFBa0I7RUFDcEI7QUFDRjs7QUFFQTtFQUNFLG1DQUEyQjtVQUEzQiwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRTtJQUNFLGlCQUFpQjtJQUNqQixxQkFBcUI7RUFDdkI7O0VBRUE7SUFDRSxlQUFlO0VBQ2pCO0FBQ0Y7O0FBVEE7RUFDRTtJQUNFLGlCQUFpQjtJQUNqQixxQkFBcUI7RUFDdkI7O0VBRUE7SUFDRSxlQUFlO0VBQ2pCO0FBQ0Y7O0FBRUE7RUFDRSxrQ0FBMEI7VUFBMUIsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UsbUNBQTJCO0VBQTNCLDJCQUEyQjtFQUMzQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGtDQUEwQjtFQUExQiwwQkFBMEI7RUFDMUIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLHdCQUF3QjtFQUN4QixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGFBQWE7RUFDYixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixvQkFBYTtFQUFiLHFCQUFhO0VBQWIsYUFBYTtFQUNiLHlCQUE4QjtFQUE5QixzQ0FBOEI7VUFBOUIsOEJBQThCO0VBQzlCLHlCQUFtQjtFQUFuQiwyQkFBbUI7VUFBbkIsbUJBQW1CO0VBQ25CLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFHQTtFQUNFLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osVUFBVTtFQUNWLGVBQWU7RUFDZiw4QkFBOEI7RUFDOUIsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixnQkFBZ0I7O0VBRWhCLG9CQUFhOztFQUFiLHFCQUFhOztFQUFiLGFBQWE7RUFDYix5QkFBOEI7RUFBOUIsc0NBQThCO1VBQTlCLDhCQUE4QjtFQUM5Qix5QkFBbUI7RUFBbkIsMkJBQW1CO1VBQW5CLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFJQSwyREFBMkQsYUFBYSxFQUFFOztBQUkxRTs7Ozs7Ozs7R0FRRzs7QUFFSDs7OztHQUlHIiwiZmlsZSI6Im1haW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIC5tYXQtdGFiLWhlYWRlciB7XHJcbiAgei1pbmRleDogOTk5OTtcclxuICBwb3NpdGlvbjogc3RpY2t5ICFpbXBvcnRhbnQ7XHJcbiAgdG9wOiAwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxufSAqL1xyXG5cclxuLyogOjpuZy1kZWVwIC5tYXQtdGFiLWJvZHktd3JhcHBlciB7XHJcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTA1cHgpO1xyXG59ICovXHJcblxyXG4vKiAuY29sb3ItZm9uZG8ge1xyXG4gIGJhY2tncm91bmQ6ICNlZWVlZWU7XHJcbn0gKi9cclxuXHJcbi5tYWluLWNvbnRlbXQge1xyXG4gICAgb3ZlcmZsb3c6ICBoaWRkZW4gIWltcG9ydGFudDtcclxufVxyXG5cclxuLngxMDAge1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIG92ZXJmbG93OiBhdXRvOyAgICBcclxufVxyXG5cclxuLnRvb2xiYXItbWFpbiB7XHJcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDAuM3M7XHJcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcclxuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XHJcbn1cclxuXHJcblxyXG5Aa2V5ZnJhbWVzIGZhZGVPdXRUb29sIHtcclxuICBmcm9tIHsgICAgXHJcbiAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgfVxyXG5cclxuICB0byB7ICAgICBcclxuICAgIG1hcmdpbi10b3A6IC02MHB4O1xyXG4gICAgZGlzcGxheTogbm9uZTsgXHJcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgfVxyXG59XHJcblxyXG4udG9vbGJhci1tYWluLmZhZGVPdXRUb29sIHtcclxuICBhbmltYXRpb24tbmFtZTogZmFkZU91dFRvb2w7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgZmFkZUluVG9vbCB7XHJcbiAgZnJvbSB7ICAgIFxyXG4gICAgbWFyZ2luLXRvcDogLTYwcHg7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgfVxyXG5cclxuICB0byB7ICAgIFxyXG4gICAgbWFyZ2luLXRvcDogMHB4O1xyXG4gIH1cclxufVxyXG5cclxuLnRvb2xiYXItbWFpbi5mYWRlSW5Ub29sIHtcclxuICBhbmltYXRpb24tbmFtZTogZmFkZUluVG9vbDtcclxufVxyXG5cclxuLngxMDAtdG9vbGJhci12aXNpYmxlIHsgICAgXHJcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTA1cHgpO1xyXG4gIG92ZXJmbG93OiBhdXRvO1xyXG59XHJcblxyXG4ueDEwMC10b29sYmFyLWhpZGRlbiB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDQ5cHgpO1xyXG4gIG92ZXJmbG93OiBhdXRvO1xyXG59XHJcblxyXG4uY291bnRJdGVtIHtcclxuICBwYWRkaW5nOiAycHggNnB4IDJweCAzcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmNvdW50VG90YWwge1xyXG4gIGZsb2F0OiByaWdodDtcclxuICBiYWNrZ3JvdW5kOiAjZjQ0MzM2OyAgXHJcbiAgY29sb3I6ICNlZWVlZWU7XHJcbn1cclxuXHJcbi5mb290ZXItYnRuLWdvLWxpc3RhIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgYm90dG9tOiAtMTBweDtcclxuICB3aWR0aDogMTAwJTsgIFxyXG4gIHRleHQtYWxpZ246IGNlbnRlcjsgIFxyXG4gIGJhY2tncm91bmQ6ICNlMGUwZTA7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBwYWRkaW5nOiA1cHggMTVweDtcclxufVxyXG5cclxuLmZvb3Rlci1idG4tZ28tbGlzdGEgLmNvbnRlbnQtYnRuIHtcclxuICBtYXJnaW4tdG9wOiAtMTBweDtcclxufVxyXG5cclxuXHJcbi5mb290ZXItYnRuLWdvLWxpc3RhIC5jb250ZW50IHtcclxuICBiYWNrZ3JvdW5kOiAjM2Y1MWI1O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICB3aWR0aDogNjAlO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBib3JkZXItcmFkaXVzOiA1cHggNXB4IDBweCAwcHg7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBmb250LXdlaWdodDogMTAwO1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcblxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5mb25kby1ncmlzIHtcclxuICBiYWNrZ3JvdW5kOiAjZWVlZWVlO1xyXG59XHJcblxyXG5cclxuXHJcbjo6bmctZGVlcC5oZWFkZXItbGVzcy10YWJzLm1hdC10YWItZ3JvdXAgLm1hdC10YWItaGVhZGVyIHsgZGlzcGxheTogbm9uZTsgfVxyXG5cclxuXHJcblxyXG4vKiAjbG9hZGVyLXdyYXBwZXIgLmxvYWRlci1tc2oge1xyXG4gIGNvbG9yOiAjZTBlMGUwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHotaW5kZXg6IDIwMDA7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgYm90dG9tOiAyNSU7XHJcbn0gKi9cclxuXHJcbi8qIC5sb2FkZWQgI2xvYWRlci13cmFwcGVyIC5sb2FkZXItbXNqIHtcclxuICBvcGFjaXR5OiAwO1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1vdXQ7XHJcbiAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLW91dDtcclxufSAqL1xyXG4iXX0= */";

/***/ }),

/***/ 15410:
/*!**********************************************************!*\
  !*** ./src/app/pages/pedido/pedido.style.css?ngResource ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = ".m1 {\r\n\r\n  /* border:0px; */\r\n  /* border-bottom: 1px solid #e0e0e0; */\r\n  background: white;\r\n  padding: 8px;\r\n  padding-left: 15px;\r\n  padding-right: 15px;\r\n}\r\n\r\n.m1.seccion{\r\n\r\n  /* border:0px; */\r\n  border-bottom: 1px solid #e0e0e0;\r\n  background: white;\r\n  padding: 8px;\r\n  padding-left: 15px;\r\n  padding-right: 15px;\r\n\r\n  display: -webkit-box;\r\n\r\n  display: -webkit-flex;\r\n\r\n  display: flex;\r\n}\r\n\r\n.border-bottom-li {\r\n  border-bottom: 1px solid #e0e0e0;\r\n}\r\n\r\n.img {\r\n  border: 1px solid #bdbdbd;\r\n  text-align: center;\r\n  border-radius: 50px;\r\n  width: 50px;\r\n  line-height: 10px;\r\n  padding: 8px;\r\n  float: left;\r\n  margin-right: 10px;\r\n  max-height: 52px;\r\n}\r\n\r\n.estado-color-verde {\r\n  background: #43a047;\r\n  color: #e0e0e0;\r\n}\r\n\r\n.estado-color-amarillo {\r\n  background: #ffb300;\r\n  color: #424242;\r\n}\r\n\r\n.estado-color-rojo {\r\n  background: #d81b60;\r\n  color: #e0e0e0;\r\n}\r\n\r\n.trasicion-border {\r\n  -webkit-transition: border-left 0.3s ease-out;\r\n  transition: border-left 0.3s ease-out;\r\n}\r\n\r\n.border-left-item-verde {\r\n  border-left: 5px solid #43a047;\r\n}\r\n\r\n.border-left-item-rojo {\r\n  border-left: 5px solid #d81b60;\r\n}\r\n\r\n.border-left-item-amarillo {\r\n  border-left: 5px solid #ffb300;\r\n}\r\n\r\n.m1-selected {\r\n  /* margin: 10px; */\r\n  border: 1px solid #e0e0e0;\r\n  background: #eeeeee;\r\n  border-radius: 5px;\r\n}\r\n\r\n.margin-input {\r\n  margin-bottom: -20px;\r\n  margin-top: -20px;\r\n}\r\n\r\n.color-fondo-ul {\r\n  background: #616161;\r\n}\r\n\r\n.li-padding-selected {\r\n  padding: 12px;\r\n}\r\n\r\n.li-padding-selected .xcontent {\r\n  border: 1px solid #e0e0e0;\r\n  background: #eeeeee;\r\n  border-radius: 5px;\r\n  /* position: inherit; */\r\n\r\n}\r\n\r\n.p-titulo-item-sin-detalle {\r\n  padding-top: 15px;\r\n  padding-bottom: 15px;\r\n}\r\n\r\n.p-titulo-item-select {\r\n  padding: 8px;\r\n  padding-left: 15px;\r\n  padding-right: 15px;  \r\n}\r\n\r\n.content-titulo-item {\r\n  font-size: 14px;\r\n}\r\n\r\n.content-titulo-item .titlo-detalle {\r\n  font-size: 13px;\r\n  font-family: Ubuntu-Light;\r\n  color: #616161;\r\n\r\n  display: -webkit-box;\r\n  max-width: 100%;\r\n  max-height: 40px;\r\n  margin: 0 auto;  \r\n  -webkit-line-clamp: 2;\r\n  -webkit-box-orient: vertical;\r\n  overflow: hidden;\r\n  text-overflow: ellipsis;\r\n  text-transform: lowercase;\r\n}\r\n\r\n.titulo-detalle-seccion {\r\n  width: 80%;\r\n  white-space: nowrap;\r\n  overflow: hidden;\r\n  text-overflow: ellipsis;\r\n}\r\n\r\n.li-padding-selected .xtitulo {\r\n  background: #e0e0e0;\r\n  /* position: static; */\r\n}\r\n\r\n.li-padding-selected .flag-stock {\r\n  display: inline-block;\r\n}\r\n\r\n.tb-tpc tr>td {\r\n  font-size: 12px;\r\n  border-bottom: 1px dashed #e0e0e0;\r\n}\r\n\r\n.btn-tbl {\r\n  text-align: center;\r\n  color: white;\r\n  padding: 5px 15px 5px 15px;\r\n  font-size: 15px;\r\n}\r\n\r\n.flag-stock {\r\n  position: absolute;\r\n  float: right;\r\n  margin-top: -9px;\r\n  margin-right: 50px;\r\n  /* padding: 0px 10px 0px 10px; */\r\n  padding: 5px;\r\n  border-radius: 0px 0px 5px 5px;\r\n  right: 10px;\r\n  line-height: 1;\r\n  display: none;\r\n}\r\n\r\n.li-padding-selected .flag-stock-dialog {\r\n  display: inline-block;\r\n}\r\n\r\n.li-tachado {\r\n  text-decoration: line-through;\r\n  color: red;\r\n}\r\n\r\n.flag-stock-dialog{\r\n    float: right;\r\n    margin-top: -9px;    \r\n    padding: 5px;\r\n    border-radius: 0px 0px 5px 5px;\r\n    right: 10px;\r\n    line-height: 1;    \r\n}\r\n\r\n.mat-dialog-container {\r\n  padding: 0px !important;\r\n}\r\n\r\n.m-toolbar-seccion {\r\n  position: fixed;\r\n  width: 100%;\r\n  z-index: 1;\r\n}\r\n\r\n.m-main-pt-40 {\r\n  padding-top: 40px;\r\n}\r\n\r\n.titulo-num-mesa {\r\n  background: #757575;\r\n  color: black;\r\n}\r\n\r\n/* subitems */\r\n\r\n.subitem-content {\r\n  display: -webkit-inline-box;\r\n  display: -webkit-inline-flex;\r\n  display: inline-flex;\r\n  width: 100%;\r\n  padding-bottom: 20px;\r\n  background: lightgoldenrodyellow;\r\n  padding: 5px;\r\n  -webkit-flex-wrap: wrap;\r\n          flex-wrap: wrap;\r\n  margin-top: 20px;\r\n  margin-bottom: 20px;\r\n  border-top: 1px solid #bdbdbd;\r\n  border-bottom: 1px solid #bdbdbd;\r\n}\r\n\r\n.subitem-content .xoption {\r\n  display: -webkit-inline-box;\r\n  display: -webkit-inline-flex;\r\n  display: inline-flex;  \r\n  padding-right: 8px;\r\n  min-width: 150px;\r\n}\r\n\r\n.subitem-content .xoption .agotado {\r\n  text-decoration: line-through;\r\n  color: palevioletred;\r\n}\r\n\r\n/* \r\n.subitem-content .xoption .precio {\r\n  position: relative;\r\n  right: -50%;\r\n} */\r\n\r\n.item-titulo {\r\n  color: #424242;\r\n}\r\n\r\n.icon-div-carta {\r\n  border: solid 1px #bdbdbd;\r\n}\r\n\r\n.icon-item-carta {\r\n  height: 60px;\r\n  -o-object-fit: cover;\r\n     object-fit: cover;\r\n  -webkit-transition: all 0.1s;\r\n  transition: all 0.1s;\r\n  width: 60px;\r\n  border-radius: 5px;\r\n  /* margin-right: 5px; */\r\n}\r\n\r\n.li-seccion {\r\n  cursor: pointer;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBlZGlkby5zdHlsZS5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0VBRUUsZ0JBQWdCO0VBQ2hCLHNDQUFzQztFQUN0QyxpQkFBaUI7RUFDakIsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixtQkFBbUI7QUFDckI7O0FBRUE7O0VBRUUsZ0JBQWdCO0VBQ2hCLGdDQUFnQztFQUNoQyxpQkFBaUI7RUFDakIsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixtQkFBbUI7O0VBRW5CLG9CQUFhOztFQUFiLHFCQUFhOztFQUFiLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGdDQUFnQztBQUNsQzs7QUFLQTtFQUNFLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsWUFBWTtFQUNaLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsNkNBQXFDO0VBQXJDLHFDQUFxQztBQUN2Qzs7QUFFQTtFQUNFLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsbUJBQW1CO0VBQ25CLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQix1QkFBdUI7O0FBRXpCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGVBQWU7RUFDZix5QkFBeUI7RUFDekIsY0FBYzs7RUFFZCxvQkFBb0I7RUFDcEIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QscUJBQXFCO0VBQ3JCLDRCQUE0QjtFQUM1QixnQkFBZ0I7RUFDaEIsdUJBQXVCO0VBQ3ZCLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsaUNBQWlDO0FBQ25DOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWiwwQkFBMEI7RUFDMUIsZUFBZTtBQUNqQjs7QUFHQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixnQ0FBZ0M7RUFDaEMsWUFBWTtFQUNaLDhCQUE4QjtFQUM5QixXQUFXO0VBQ1gsY0FBYztFQUNkLGFBQWE7QUFDZjs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLDZCQUE2QjtFQUM3QixVQUFVO0FBQ1o7O0FBRUE7SUFDSSxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWiw4QkFBOEI7SUFDOUIsV0FBVztJQUNYLGNBQWM7QUFDbEI7O0FBRUE7RUFDRSx1QkFBdUI7QUFDekI7O0FBR0E7RUFDRSxlQUFlO0VBQ2YsV0FBVztFQUNYLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixZQUFZO0FBQ2Q7O0FBRUEsYUFBYTs7QUFDYjtFQUNFLDJCQUFvQjtFQUFwQiw0QkFBb0I7RUFBcEIsb0JBQW9CO0VBQ3BCLFdBQVc7RUFDWCxvQkFBb0I7RUFDcEIsZ0NBQWdDO0VBQ2hDLFlBQVk7RUFDWix1QkFBZTtVQUFmLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLDZCQUE2QjtFQUM3QixnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSwyQkFBb0I7RUFBcEIsNEJBQW9CO0VBQXBCLG9CQUFvQjtFQUNwQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsNkJBQTZCO0VBQzdCLG9CQUFvQjtBQUN0Qjs7QUFDQTs7OztHQUlHOztBQUVIO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixvQkFBaUI7S0FBakIsaUJBQWlCO0VBQ2pCLDRCQUFvQjtFQUFwQixvQkFBb0I7RUFDcEIsV0FBVztFQUNYLGtCQUFrQjtFQUNsQix1QkFBdUI7QUFDekI7O0FBR0E7RUFDRSxlQUFlO0FBQ2pCIiwiZmlsZSI6InBlZGlkby5zdHlsZS5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubTEge1xyXG5cclxuICAvKiBib3JkZXI6MHB4OyAqL1xyXG4gIC8qIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTBlMGUwOyAqL1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIHBhZGRpbmc6IDhweDtcclxuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XHJcbiAgcGFkZGluZy1yaWdodDogMTVweDtcclxufVxyXG5cclxuLm0xLnNlY2Npb257XHJcblxyXG4gIC8qIGJvcmRlcjowcHg7ICovXHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlMGUwZTA7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgcGFkZGluZzogOHB4O1xyXG4gIHBhZGRpbmctbGVmdDogMTVweDtcclxuICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xyXG5cclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4uYm9yZGVyLWJvdHRvbS1saSB7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlMGUwZTA7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbi5pbWcge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNiZGJkYmQ7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgd2lkdGg6IDUwcHg7XHJcbiAgbGluZS1oZWlnaHQ6IDEwcHg7XHJcbiAgcGFkZGluZzogOHB4O1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIG1hcmdpbi1yaWdodDogMTBweDtcclxuICBtYXgtaGVpZ2h0OiA1MnB4O1xyXG59XHJcblxyXG4uZXN0YWRvLWNvbG9yLXZlcmRlIHtcclxuICBiYWNrZ3JvdW5kOiAjNDNhMDQ3O1xyXG4gIGNvbG9yOiAjZTBlMGUwO1xyXG59XHJcblxyXG4uZXN0YWRvLWNvbG9yLWFtYXJpbGxvIHtcclxuICBiYWNrZ3JvdW5kOiAjZmZiMzAwO1xyXG4gIGNvbG9yOiAjNDI0MjQyO1xyXG59XHJcblxyXG4uZXN0YWRvLWNvbG9yLXJvam8ge1xyXG4gIGJhY2tncm91bmQ6ICNkODFiNjA7XHJcbiAgY29sb3I6ICNlMGUwZTA7XHJcbn1cclxuXHJcbi50cmFzaWNpb24tYm9yZGVyIHtcclxuICB0cmFuc2l0aW9uOiBib3JkZXItbGVmdCAwLjNzIGVhc2Utb3V0O1xyXG59XHJcblxyXG4uYm9yZGVyLWxlZnQtaXRlbS12ZXJkZSB7XHJcbiAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjNDNhMDQ3O1xyXG59XHJcblxyXG4uYm9yZGVyLWxlZnQtaXRlbS1yb2pvIHtcclxuICBib3JkZXItbGVmdDogNXB4IHNvbGlkICNkODFiNjA7XHJcbn1cclxuXHJcbi5ib3JkZXItbGVmdC1pdGVtLWFtYXJpbGxvIHtcclxuICBib3JkZXItbGVmdDogNXB4IHNvbGlkICNmZmIzMDA7XHJcbn1cclxuXHJcbi5tMS1zZWxlY3RlZCB7XHJcbiAgLyogbWFyZ2luOiAxMHB4OyAqL1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNlMGUwZTA7XHJcbiAgYmFja2dyb3VuZDogI2VlZWVlZTtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuXHJcbi5tYXJnaW4taW5wdXQge1xyXG4gIG1hcmdpbi1ib3R0b206IC0yMHB4O1xyXG4gIG1hcmdpbi10b3A6IC0yMHB4O1xyXG59XHJcblxyXG4uY29sb3ItZm9uZG8tdWwge1xyXG4gIGJhY2tncm91bmQ6ICM2MTYxNjE7XHJcbn1cclxuXHJcbi5saS1wYWRkaW5nLXNlbGVjdGVkIHtcclxuICBwYWRkaW5nOiAxMnB4O1xyXG59XHJcblxyXG4ubGktcGFkZGluZy1zZWxlY3RlZCAueGNvbnRlbnQge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNlMGUwZTA7XHJcbiAgYmFja2dyb3VuZDogI2VlZWVlZTtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgLyogcG9zaXRpb246IGluaGVyaXQ7ICovXHJcblxyXG59XHJcblxyXG4ucC10aXR1bG8taXRlbS1zaW4tZGV0YWxsZSB7XHJcbiAgcGFkZGluZy10b3A6IDE1cHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDE1cHg7XHJcbn1cclxuXHJcbi5wLXRpdHVsby1pdGVtLXNlbGVjdCB7XHJcbiAgcGFkZGluZzogOHB4O1xyXG4gIHBhZGRpbmctbGVmdDogMTVweDtcclxuICBwYWRkaW5nLXJpZ2h0OiAxNXB4OyAgXHJcbn1cclxuXHJcbi5jb250ZW50LXRpdHVsby1pdGVtIHtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuXHJcbi5jb250ZW50LXRpdHVsby1pdGVtIC50aXRsby1kZXRhbGxlIHtcclxuICBmb250LXNpemU6IDEzcHg7XHJcbiAgZm9udC1mYW1pbHk6IFVidW50dS1MaWdodDtcclxuICBjb2xvcjogIzYxNjE2MTtcclxuXHJcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gIG1heC1oZWlnaHQ6IDQwcHg7XHJcbiAgbWFyZ2luOiAwIGF1dG87ICBcclxuICAtd2Via2l0LWxpbmUtY2xhbXA6IDI7XHJcbiAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gIHRleHQtdHJhbnNmb3JtOiBsb3dlcmNhc2U7XHJcbn1cclxuXHJcbi50aXR1bG8tZGV0YWxsZS1zZWNjaW9uIHtcclxuICB3aWR0aDogODAlO1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxufVxyXG5cclxuLmxpLXBhZGRpbmctc2VsZWN0ZWQgLnh0aXR1bG8ge1xyXG4gIGJhY2tncm91bmQ6ICNlMGUwZTA7XHJcbiAgLyogcG9zaXRpb246IHN0YXRpYzsgKi9cclxufVxyXG5cclxuLmxpLXBhZGRpbmctc2VsZWN0ZWQgLmZsYWctc3RvY2sge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG5cclxuLnRiLXRwYyB0cj50ZCB7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBkYXNoZWQgI2UwZTBlMDtcclxufVxyXG5cclxuLmJ0bi10Ymwge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgcGFkZGluZzogNXB4IDE1cHggNXB4IDE1cHg7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG59XHJcblxyXG5cclxuLmZsYWctc3RvY2sge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBmbG9hdDogcmlnaHQ7XHJcbiAgbWFyZ2luLXRvcDogLTlweDtcclxuICBtYXJnaW4tcmlnaHQ6IDUwcHg7XHJcbiAgLyogcGFkZGluZzogMHB4IDEwcHggMHB4IDEwcHg7ICovXHJcbiAgcGFkZGluZzogNXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDBweCAwcHggNXB4IDVweDtcclxuICByaWdodDogMTBweDtcclxuICBsaW5lLWhlaWdodDogMTtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4ubGktcGFkZGluZy1zZWxlY3RlZCAuZmxhZy1zdG9jay1kaWFsb2cge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG5cclxuLmxpLXRhY2hhZG8ge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xyXG4gIGNvbG9yOiByZWQ7XHJcbn1cclxuXHJcbi5mbGFnLXN0b2NrLWRpYWxvZ3tcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIG1hcmdpbi10b3A6IC05cHg7ICAgIFxyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMHB4IDBweCA1cHggNXB4O1xyXG4gICAgcmlnaHQ6IDEwcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMTsgICAgXHJcbn1cclxuXHJcbi5tYXQtZGlhbG9nLWNvbnRhaW5lciB7XHJcbiAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcblxyXG4ubS10b29sYmFyLXNlY2Npb24ge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB3aWR0aDogMTAwJTtcclxuICB6LWluZGV4OiAxO1xyXG59XHJcblxyXG4ubS1tYWluLXB0LTQwIHtcclxuICBwYWRkaW5nLXRvcDogNDBweDtcclxufVxyXG5cclxuLnRpdHVsby1udW0tbWVzYSB7XHJcbiAgYmFja2dyb3VuZDogIzc1NzU3NTtcclxuICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbi8qIHN1Yml0ZW1zICovXHJcbi5zdWJpdGVtLWNvbnRlbnQge1xyXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG4gIGJhY2tncm91bmQ6IGxpZ2h0Z29sZGVucm9keWVsbG93O1xyXG4gIHBhZGRpbmc6IDVweDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjYmRiZGJkO1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjYmRiZGJkO1xyXG59XHJcblxyXG4uc3ViaXRlbS1jb250ZW50IC54b3B0aW9uIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDsgIFxyXG4gIHBhZGRpbmctcmlnaHQ6IDhweDtcclxuICBtaW4td2lkdGg6IDE1MHB4O1xyXG59XHJcblxyXG4uc3ViaXRlbS1jb250ZW50IC54b3B0aW9uIC5hZ290YWRvIHtcclxuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcclxuICBjb2xvcjogcGFsZXZpb2xldHJlZDtcclxufVxyXG4vKiBcclxuLnN1Yml0ZW0tY29udGVudCAueG9wdGlvbiAucHJlY2lvIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgcmlnaHQ6IC01MCU7XHJcbn0gKi9cclxuXHJcbi5pdGVtLXRpdHVsbyB7XHJcbiAgY29sb3I6ICM0MjQyNDI7XHJcbn1cclxuXHJcbi5pY29uLWRpdi1jYXJ0YSB7XHJcbiAgYm9yZGVyOiBzb2xpZCAxcHggI2JkYmRiZDtcclxufVxyXG5cclxuLmljb24taXRlbS1jYXJ0YSB7XHJcbiAgaGVpZ2h0OiA2MHB4O1xyXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjFzO1xyXG4gIHdpZHRoOiA2MHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAvKiBtYXJnaW4tcmlnaHQ6IDVweDsgKi9cclxufVxyXG5cclxuXHJcbi5saS1zZWNjaW9uIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuIl19 */";

/***/ }),

/***/ 50633:
/*!****************************************************************************************************!*\
  !*** ./src/app/pages/pedido/resumen-pedido/dialog-loading/dialog-loading.component.css?ngResource ***!
  \****************************************************************************************************/
/***/ ((module) => {

module.exports = ".img-success {\r\n    width: 150px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpYWxvZy1sb2FkaW5nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0FBQ2hCIiwiZmlsZSI6ImRpYWxvZy1sb2FkaW5nLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW1nLXN1Y2Nlc3Mge1xyXG4gICAgd2lkdGg6IDE1MHB4O1xyXG59XHJcbiJdfQ== */";

/***/ }),

/***/ 3721:
/*!*************************************************************************************!*\
  !*** ./src/app/pages/pedido/resumen-pedido/resumen-pedido.component.css?ngResource ***!
  \*************************************************************************************/
/***/ ((module) => {

module.exports = ".xcontent {\r\n        position: absolute;\r\n        top: 0;\r\n        bottom: 0;\r\n}\r\n.div-plr {\r\n    padding-left: 7px;\r\n    padding-right: 7px;\r\n}\r\n.div-content-all {\r\n    top: 0px;\r\n    position: relative;\r\n    background: white;\r\n}\r\n.titulo-tpc {\r\n    background: #424242;\r\n    color: #e0e0e0;\r\n    padding-top: 8px;\r\n    padding-bottom: 8px;\r\n}\r\n.titulo-seccion {\r\n    padding-top: 8px;\r\n    padding-bottom: 8px;\r\n    background: blanchedalmond;\r\n}\r\n.li-item {\r\n    padding-top: 6px;\r\n    padding-bottom: 6px;\r\n    border-top: 1px solid #e0e0e0;\r\n}\r\n.div-total {\r\n    border-top: 2px dashed #9e9e9e;\r\n}\r\n.ul-total li:last-child{\r\n    font-size: 20px;\r\n    font-weight: 800;\r\n}\r\n.countItem {\r\n    /* padding: 4px 7px 4px 7px;\r\n    border-radius: 90%;\r\n    line-height: 1;\r\n    font-size: 12px;\r\n    margin-top: 2px;\r\n     */\r\n    \r\n    border-radius: 50%;\r\n    line-height: 1.2;\r\n    font-size: 12px;\r\n    min-width: 20px;\r\n    min-height: 20px;    \r\n    padding: 4px;\r\n    text-align: center;\r\n}\r\n.countTpc{\r\n    float: right;\r\n    background: #212121;\r\n    color: #bdbdbd;\r\n}\r\n.countSeccion {\r\n  float: right;\r\n  color: #616161;\r\n  background: #ffcc80;\r\n}\r\n.btn-footer-cancel {\r\n    padding: 12px;\r\n    background: #f44336;\r\n    color: white;\r\n    text-align: center;\r\n    width: 40%;\r\n}\r\n.btn-footer-next {\r\n    padding: 12px;\r\n    background: #00c853;\r\n    color: white;\r\n    text-align: center;\r\n    white-space: nowrap;\r\n    width: 40%;\r\n}\r\n.btn-footer-next.xdisabled {\r\n    pointer-events: none;\r\n    opacity: 0.5;\r\n    white-space: nowrap;\r\n    background: #CCC;\r\n}\r\n/* RESUMEN pedido */\r\n.div-resumen-pedido {\r\n  position: absolute;  \r\n  height: -webkit-calc(100vh - 49px);  \r\n  height: calc(100vh - 49px);\r\n  overflow: auto;\r\n}\r\n.div-resumen-pedido.hide {\r\n  margin-left: -100%;\r\n  /* visibility: hidden; */\r\n}\r\n.div-resumen-pedido.show {\r\n  margin-left: 0;\r\n  /* visibility: visible; */\r\n}\r\n/* RESUMEN pedido */\r\n/* confirmar pedido */\r\n.div-confirma-pedido-mesa {\r\n    height: 100vh;\r\n    position: relative;\r\n}\r\n.div-confirma-pedido {        \r\n    /* position: absolute; */\r\n    background: white;\r\n    /* position: relative; */\r\n    /* height: calc(100vh - 50px); */\r\n    /* overflow: auto; */\r\n\r\n    overflow: hidden;\r\n    /* height: 100%; */\r\n    top: 0;\r\n    margin: 0;\r\n    position: relative;\r\n\r\n    text-align: center;\r\n    display: -webkit-box;\r\n    display: -webkit-flex;\r\n    display: flex;\r\n    -webkit-box-pack: center;\r\n    -webkit-justify-content: center;\r\n            justify-content: center;\r\n\r\n}\r\n.bg-1 {\r\n    /* background: antiquewhite; */\r\n    background: white;\r\n}\r\n.bg-2 {\r\n    background: white;\r\n}\r\n.div-confirma-pedido.hide {\r\n    margin-left: 100%;\r\n}\r\n.div-confirma-pedido.show {\r\n    margin-left: 0;\r\n}\r\n.xh-100 {\r\n    height: 100vh;\r\n}\r\n/* confirmar pedido */\r\n/* .subitem-content-resumen {\r\n    background: #eceff1;\r\n    display: flex;\r\n    border-bottom: 1px solid #e0e0e0;\r\n  } */\r\n.subitem-content-resumen {\r\n    background: #d3eafd;\r\n    /* border-bottom: 1px solid #e0e0e0; */\r\n    font-size: 12px;\r\n    color: #616161;\r\n    display: -webkit-box;\r\n    display: -webkit-flex;\r\n    display: flex;\r\n  }\r\n.subitem-content-resumen .btnCount {\r\n    -webkit-transition: all ease-in 0.1s;\r\n    transition: all ease-in 0.1s;\r\n    height: 18px;    \r\n    cursor: pointer;\r\n    opacity: 0;\r\n}\r\n.subitem-content-resumen:hover .btnCount {\r\n    opacity: 1;\r\n}\r\n.subitem-content-resumen .btnMenos {\r\n    /* font-size: 15px; */\r\n    font-weight: bold;\r\n    background: #D32F2F;\r\n    padding: 0px 8px 0px 8px;\r\n    margin-right: 3px;\r\n    border-radius: 3px;\r\n    color: white;\r\n}\r\n.subitem-content-resumen .btnMas {\r\n    /* font-size: 15px; */\r\n    font-weight: bold;\r\n    background: #1565C0;\r\n    padding: 0px 8px 0px 8px;\r\n    margin-left: 3px;\r\n    border-radius: 3px;\r\n    color: white;\r\n}\r\n@media only screen and (min-width: 600px) {\r\n    \r\n\r\n    .div-resumen-pedido {\r\n        position: relative;\r\n        height: auto;\r\n        overflow: hidden;\r\n    }\r\n\r\n    .div-resumen-pre-pago {\r\n        position: absolute;\r\n        /* height: calc(100vh - 212px); */\r\n    }\r\n\r\n    .xfooter {\r\n        bottom: 0px;\r\n        position: fixed;\r\n        background: #e0e0e0;\r\n        /* height: 48px; */\r\n        box-sizing: border-box;\r\n        /* position: sticky; */\r\n        min-width: 230px;\r\n        max-width: 360px;\r\n        width: -webkit-calc(100% / 9.8 * 3);\r\n        width: calc(100% / 9.8 * 3);\r\n    }\r\n\r\n    /* .btn-footer-cancel {\r\n        width: auto;\r\n    }\r\n\r\n    .btn-footer-next {\r\n        width: auto;\r\n    } */\r\n\r\n    .div-content-all {\r\n        font-size: 14px !important;\r\n    }\r\n    \r\n}\r\n.content-resumen{\r\n    background: #eeeeee;\r\n}\r\n@media only screen and (max-width: 1050px) {\r\n    .content-resumen{\r\n        display: none;\r\n    }\r\n\r\n    .xfooter{\r\n        width: 100%;\r\n        max-width: 100%;\r\n    }\r\n    \r\n}\r\n.img-cuenta {\r\n    border-radius: 10px;\r\n    margin-bottom: 15px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc3VtZW4tcGVkaWRvLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7UUFDUSxrQkFBa0I7UUFDbEIsTUFBTTtRQUNOLFNBQVM7QUFDakI7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7QUFFQTtJQUNJLFFBQVE7SUFDUixrQkFBa0I7SUFDbEIsaUJBQWlCO0FBQ3JCO0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsY0FBYztJQUNkLGdCQUFnQjtJQUNoQixtQkFBbUI7QUFDdkI7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsMEJBQTBCO0FBQzlCO0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLDZCQUE2QjtBQUNqQztBQUVBO0lBQ0ksOEJBQThCO0FBQ2xDO0FBRUE7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCO0FBRUE7SUFDSTs7Ozs7TUFLRTs7SUFFRixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixrQkFBa0I7QUFDdEI7QUFFQTtJQUNJLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsY0FBYztBQUNsQjtBQUVBO0VBQ0UsWUFBWTtFQUNaLGNBQWM7RUFDZCxtQkFBbUI7QUFDckI7QUFHQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixVQUFVO0FBQ2Q7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsVUFBVTtBQUNkO0FBRUE7SUFDSSxvQkFBb0I7SUFDcEIsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixnQkFBZ0I7QUFDcEI7QUFFQSxtQkFBbUI7QUFDbkI7RUFDRSxrQkFBa0I7RUFDbEIsa0NBQTBCO0VBQTFCLDBCQUEwQjtFQUMxQixjQUFjO0FBQ2hCO0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsd0JBQXdCO0FBQzFCO0FBRUE7RUFDRSxjQUFjO0VBQ2QseUJBQXlCO0FBQzNCO0FBRUEsbUJBQW1CO0FBRW5CLHFCQUFxQjtBQUNyQjtJQUNJLGFBQWE7SUFDYixrQkFBa0I7QUFDdEI7QUFFQTtJQUNJLHdCQUF3QjtJQUN4QixpQkFBaUI7SUFDakIsd0JBQXdCO0lBQ3hCLGdDQUFnQztJQUNoQyxvQkFBb0I7O0lBRXBCLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLFNBQVM7SUFDVCxrQkFBa0I7O0lBRWxCLGtCQUFrQjtJQUNsQixvQkFBYTtJQUFiLHFCQUFhO0lBQWIsYUFBYTtJQUNiLHdCQUF1QjtJQUF2QiwrQkFBdUI7WUFBdkIsdUJBQXVCOztBQUUzQjtBQUVBO0lBQ0ksOEJBQThCO0lBQzlCLGlCQUFpQjtBQUNyQjtBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCO0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7QUFFQTtJQUNJLGNBQWM7QUFDbEI7QUFFQTtJQUNJLGFBQWE7QUFDakI7QUFFQSxxQkFBcUI7QUFFckI7Ozs7S0FJSztBQUVMO0lBQ0ksbUJBQW1CO0lBQ25CLHNDQUFzQztJQUN0QyxlQUFlO0lBQ2YsY0FBYztJQUNkLG9CQUFhO0lBQWIscUJBQWE7SUFBYixhQUFhO0VBQ2Y7QUFFRjtJQUNJLG9DQUE0QjtJQUE1Qiw0QkFBNEI7SUFDNUIsWUFBWTtJQUNaLGVBQWU7SUFDZixVQUFVO0FBQ2Q7QUFFQTtJQUNJLFVBQVU7QUFDZDtBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsd0JBQXdCO0lBQ3hCLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsWUFBWTtBQUNoQjtBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsd0JBQXdCO0lBQ3hCLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsWUFBWTtBQUNoQjtBQUdBOzs7SUFHSTtRQUNJLGtCQUFrQjtRQUNsQixZQUFZO1FBQ1osZ0JBQWdCO0lBQ3BCOztJQUVBO1FBQ0ksa0JBQWtCO1FBQ2xCLGlDQUFpQztJQUNyQzs7SUFFQTtRQUNJLFdBQVc7UUFDWCxlQUFlO1FBQ2YsbUJBQW1CO1FBQ25CLGtCQUFrQjtRQUNsQixzQkFBc0I7UUFDdEIsc0JBQXNCO1FBQ3RCLGdCQUFnQjtRQUNoQixnQkFBZ0I7UUFDaEIsbUNBQTJCO1FBQTNCLDJCQUEyQjtJQUMvQjs7SUFFQTs7Ozs7O09BTUc7O0lBRUg7UUFDSSwwQkFBMEI7SUFDOUI7O0FBRUo7QUFFQTtJQUNJLG1CQUFtQjtBQUN2QjtBQUVBO0lBQ0k7UUFDSSxhQUFhO0lBQ2pCOztJQUVBO1FBQ0ksV0FBVztRQUNYLGVBQWU7SUFDbkI7O0FBRUo7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixtQkFBbUI7QUFDdkIiLCJmaWxlIjoicmVzdW1lbi1wZWRpZG8uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi54Y29udGVudCB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogMDtcclxuICAgICAgICBib3R0b206IDA7XHJcbn1cclxuLmRpdi1wbHIge1xyXG4gICAgcGFkZGluZy1sZWZ0OiA3cHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA3cHg7XHJcbn1cclxuXHJcbi5kaXYtY29udGVudC1hbGwge1xyXG4gICAgdG9wOiAwcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxufVxyXG5cclxuLnRpdHVsby10cGMge1xyXG4gICAgYmFja2dyb3VuZDogIzQyNDI0MjtcclxuICAgIGNvbG9yOiAjZTBlMGUwO1xyXG4gICAgcGFkZGluZy10b3A6IDhweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiA4cHg7XHJcbn1cclxuXHJcbi50aXR1bG8tc2VjY2lvbiB7XHJcbiAgICBwYWRkaW5nLXRvcDogOHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDhweDtcclxuICAgIGJhY2tncm91bmQ6IGJsYW5jaGVkYWxtb25kO1xyXG59XHJcblxyXG4ubGktaXRlbSB7XHJcbiAgICBwYWRkaW5nLXRvcDogNnB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDZweDtcclxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZTBlMGUwO1xyXG59XHJcblxyXG4uZGl2LXRvdGFsIHtcclxuICAgIGJvcmRlci10b3A6IDJweCBkYXNoZWQgIzllOWU5ZTtcclxufVxyXG5cclxuLnVsLXRvdGFsIGxpOmxhc3QtY2hpbGR7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBmb250LXdlaWdodDogODAwO1xyXG59XHJcblxyXG4uY291bnRJdGVtIHtcclxuICAgIC8qIHBhZGRpbmc6IDRweCA3cHggNHB4IDdweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDkwJTtcclxuICAgIGxpbmUtaGVpZ2h0OiAxO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgbWFyZ2luLXRvcDogMnB4O1xyXG4gICAgICovXHJcbiAgICBcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjI7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBtaW4td2lkdGg6IDIwcHg7XHJcbiAgICBtaW4taGVpZ2h0OiAyMHB4OyAgICBcclxuICAgIHBhZGRpbmc6IDRweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmNvdW50VHBje1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgYmFja2dyb3VuZDogIzIxMjEyMTtcclxuICAgIGNvbG9yOiAjYmRiZGJkO1xyXG59XHJcblxyXG4uY291bnRTZWNjaW9uIHtcclxuICBmbG9hdDogcmlnaHQ7XHJcbiAgY29sb3I6ICM2MTYxNjE7XHJcbiAgYmFja2dyb3VuZDogI2ZmY2M4MDtcclxufVxyXG5cclxuXHJcbi5idG4tZm9vdGVyLWNhbmNlbCB7XHJcbiAgICBwYWRkaW5nOiAxMnB4O1xyXG4gICAgYmFja2dyb3VuZDogI2Y0NDMzNjtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHdpZHRoOiA0MCU7XHJcbn1cclxuXHJcbi5idG4tZm9vdGVyLW5leHQge1xyXG4gICAgcGFkZGluZzogMTJweDtcclxuICAgIGJhY2tncm91bmQ6ICMwMGM4NTM7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgd2lkdGg6IDQwJTtcclxufVxyXG5cclxuLmJ0bi1mb290ZXItbmV4dC54ZGlzYWJsZWQge1xyXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgICBvcGFjaXR5OiAwLjU7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgYmFja2dyb3VuZDogI0NDQztcclxufVxyXG5cclxuLyogUkVTVU1FTiBwZWRpZG8gKi9cclxuLmRpdi1yZXN1bWVuLXBlZGlkbyB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlOyAgXHJcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNDlweCk7XHJcbiAgb3ZlcmZsb3c6IGF1dG87XHJcbn1cclxuXHJcbi5kaXYtcmVzdW1lbi1wZWRpZG8uaGlkZSB7XHJcbiAgbWFyZ2luLWxlZnQ6IC0xMDAlO1xyXG4gIC8qIHZpc2liaWxpdHk6IGhpZGRlbjsgKi9cclxufVxyXG5cclxuLmRpdi1yZXN1bWVuLXBlZGlkby5zaG93IHtcclxuICBtYXJnaW4tbGVmdDogMDtcclxuICAvKiB2aXNpYmlsaXR5OiB2aXNpYmxlOyAqL1xyXG59XHJcblxyXG4vKiBSRVNVTUVOIHBlZGlkbyAqL1xyXG5cclxuLyogY29uZmlybWFyIHBlZGlkbyAqL1xyXG4uZGl2LWNvbmZpcm1hLXBlZGlkby1tZXNhIHtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5kaXYtY29uZmlybWEtcGVkaWRvIHsgICAgICAgIFxyXG4gICAgLyogcG9zaXRpb246IGFic29sdXRlOyAqL1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICAvKiBwb3NpdGlvbjogcmVsYXRpdmU7ICovXHJcbiAgICAvKiBoZWlnaHQ6IGNhbGMoMTAwdmggLSA1MHB4KTsgKi9cclxuICAgIC8qIG92ZXJmbG93OiBhdXRvOyAqL1xyXG5cclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAvKiBoZWlnaHQ6IDEwMCU7ICovXHJcbiAgICB0b3A6IDA7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cclxufVxyXG5cclxuLmJnLTEge1xyXG4gICAgLyogYmFja2dyb3VuZDogYW50aXF1ZXdoaXRlOyAqL1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbn1cclxuXHJcbi5iZy0yIHtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG59XHJcblxyXG4uZGl2LWNvbmZpcm1hLXBlZGlkby5oaWRlIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMDAlO1xyXG59XHJcblxyXG4uZGl2LWNvbmZpcm1hLXBlZGlkby5zaG93IHtcclxuICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG59XHJcblxyXG4ueGgtMTAwIHtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbn1cclxuXHJcbi8qIGNvbmZpcm1hciBwZWRpZG8gKi9cclxuXHJcbi8qIC5zdWJpdGVtLWNvbnRlbnQtcmVzdW1lbiB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZWNlZmYxO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTBlMGUwO1xyXG4gIH0gKi9cclxuXHJcbi5zdWJpdGVtLWNvbnRlbnQtcmVzdW1lbiB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZDNlYWZkO1xyXG4gICAgLyogYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlMGUwZTA7ICovXHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBjb2xvcjogIzYxNjE2MTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgfVxyXG5cclxuLnN1Yml0ZW0tY29udGVudC1yZXN1bWVuIC5idG5Db3VudCB7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgZWFzZS1pbiAwLjFzO1xyXG4gICAgaGVpZ2h0OiAxOHB4OyAgICBcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIG9wYWNpdHk6IDA7XHJcbn1cclxuXHJcbi5zdWJpdGVtLWNvbnRlbnQtcmVzdW1lbjpob3ZlciAuYnRuQ291bnQge1xyXG4gICAgb3BhY2l0eTogMTtcclxufVxyXG5cclxuLnN1Yml0ZW0tY29udGVudC1yZXN1bWVuIC5idG5NZW5vcyB7XHJcbiAgICAvKiBmb250LXNpemU6IDE1cHg7ICovXHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGJhY2tncm91bmQ6ICNEMzJGMkY7XHJcbiAgICBwYWRkaW5nOiAwcHggOHB4IDBweCA4cHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDNweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLnN1Yml0ZW0tY29udGVudC1yZXN1bWVuIC5idG5NYXMge1xyXG4gICAgLyogZm9udC1zaXplOiAxNXB4OyAqL1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMTU2NUMwO1xyXG4gICAgcGFkZGluZzogMHB4IDhweCAwcHggOHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDNweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAwcHgpIHtcclxuICAgIFxyXG5cclxuICAgIC5kaXYtcmVzdW1lbi1wZWRpZG8ge1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIH1cclxuXHJcbiAgICAuZGl2LXJlc3VtZW4tcHJlLXBhZ28ge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAvKiBoZWlnaHQ6IGNhbGMoMTAwdmggLSAyMTJweCk7ICovXHJcbiAgICB9XHJcblxyXG4gICAgLnhmb290ZXIge1xyXG4gICAgICAgIGJvdHRvbTogMHB4O1xyXG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZTBlMGUwO1xyXG4gICAgICAgIC8qIGhlaWdodDogNDhweDsgKi9cclxuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgIC8qIHBvc2l0aW9uOiBzdGlja3k7ICovXHJcbiAgICAgICAgbWluLXdpZHRoOiAyMzBweDtcclxuICAgICAgICBtYXgtd2lkdGg6IDM2MHB4O1xyXG4gICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLyA5LjggKiAzKTtcclxuICAgIH1cclxuXHJcbiAgICAvKiAuYnRuLWZvb3Rlci1jYW5jZWwge1xyXG4gICAgICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgfVxyXG5cclxuICAgIC5idG4tZm9vdGVyLW5leHQge1xyXG4gICAgICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgfSAqL1xyXG5cclxuICAgIC5kaXYtY29udGVudC1hbGwge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgXHJcbn1cclxuXHJcbi5jb250ZW50LXJlc3VtZW57XHJcbiAgICBiYWNrZ3JvdW5kOiAjZWVlZWVlO1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwNTBweCkge1xyXG4gICAgLmNvbnRlbnQtcmVzdW1lbntcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG5cclxuICAgIC54Zm9vdGVye1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIH1cclxuICAgIFxyXG59XHJcblxyXG4uaW1nLWN1ZW50YSB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxufVxyXG4iXX0= */";

/***/ }),

/***/ 34830:
/*!********************************************************************************!*\
  !*** ./src/app/pages/pedido/buscar-item/buscar-item.component.html?ngResource ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = "<p>buscar-item works!</p>\n";

/***/ }),

/***/ 58176:
/*!**************************************************************************!*\
  !*** ./src/app/pages/pedido/busqueda/busqueda.component.html?ngResource ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = "<p>busqueda works!</p>\n<!-- <button (click)=\"buscar()\">aaa</button> -->\n<!-- items -->\n<div class=\"xtransicion m-main-pt-40 color-fondo-ul\">\n        <ng-container>\n          <ul>\n              <!-- [ngClass]=\"{'li-padding-selected': item.selected}\" -->\n            <li *ngFor=\"let item of objCartaBus\">\n              <div class=\"xcontent border-left-item-{{getEstadoStockItem(item.cantidad)}}\"> \n                <div class=\"m1 d-flex xtitulo\" matRipple [matRippleColor]=\"rippleColor\" [ngClass]=\"{'li-tachado': item.cantidad==='0'}\" (click)=\"selectedItemBusq(item)\">\n                  <div class=\"w-100\"><span>{{item.des}}</span></div>\n                  <div class=\"text-right d-flex\">\n                    <div class=\"flag-stock text-center estado-color-{{getEstadoStockItem(item.cantidad)}}\">\n                      <div [ngClass]=\"{'xanimated xwobble': item.cantidad===0}\">\n                        <span class=\"fs-9\">Stock</span><br>\n                        <span class=\"fs-15\">{{item.cantidad}}</span>\n                      </div>\n                    </div>\n                    <span>{{item.precio | number:'0.2' }}</span>\n                  </div>\n                </div>              \n                \n                <!-- <ng-container *ngIf=\"item.selected\">\n                  <div>\n                    -- detalle --\n                    <ng-container *ngIf=\"item.detalles === ''; else elseTemplate\">\n                      <br>\n                    </ng-container>\n                    <ng-template #elseTemplate>\n                      <div class=\"pl-3 pr-3\">\n                        <span class=\"fs-14 text-secondary\">{{ item.detalles | lowercase }}</span>\n                      </div>\n                      <hr>                    \n                    </ng-template>\n                    \n                    -- especificaciones --\n                    <div class=\"pl-3 pr-3\">\n                      <mat-form-field class=\"w-100 margin-input\">\n                        <input matInput placeholder=\"Escribe aqui las especificaciones\" [(ngModel)]=\"itemSelected.indicaciones\" name=\"indicaciones\" #txtIdicaciones (keyup)=\"addItemIndicaciones(item, txtIdicaciones.value)\">\n                      </mat-form-field>\n                    </div>\n                    <hr>\n                    -- tipos de consumo --\n                    <div class=\"pl-3 pr-3\">\n                      <table width=\"100%\" class=\"tb-tpc\">\n                        <tr *ngFor=\"let tp of objItemTipoConsumoSelected\">\n                          <td>{{tp.descripcion}}</td>\n                          <td>\n                            <div class=\"d-flex float-right\">\n                              <span [hidden]=\"tp.cantidad_seleccionada === 0\" class=\"fs-19 pr-2\">{{tp.cantidad_seleccionada}}</span>\n                              <div class=\"btn-tbl bg-danger xCursor\" matRipple (click)=\"addItemToPedido(tp, 1)\">-</div>\n                              <div class=\"btn-tbl bg-success xCursor\" matRipple (click)=\"addItemToPedido(tp, 0)\">+</div>\n                            </div>\n                          </td>\n                        </tr>\n                      </table>\n                      <br>\n                    </div>                  \n                  </div>                \n                </ng-container> -->\n                \n              </div>            \n            </li>          \n          </ul>        \n        </ng-container>\n      </div>\n      <br>";

/***/ }),

/***/ 12635:
/*!********************************************************************!*\
  !*** ./src/app/pages/pedido/carta/carta.component.html?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = "<div class=\"fondo\">\r\n\r\n  <div [hidden]=\"isBusqueda\" class=\"content-master\">\r\n    <!-- toolbar -->\r\n    <ng-container *ngIf=\"showToolBar isBusqueda\">\r\n      <div matRipple class=\"text-white bg-primary p-2 m-toolbar-seccion xanimated xfadeInDown text-puntos-suspensivos d-flex justify-content-between align-items-center\" (click)=\"goBack()\">\r\n        <span class=\"pl-2 font-weight-light fs-13 text-puntos\">{{tituloToolBar}}</span>        \r\n        <div class=\"border-1\">\r\n          <i class=\"fa fa-arrow-left pr-1\" aria-hidden=\"true\"></i>\r\n          <!-- <span class=\"fs-13\">Atrás</span> -->\r\n        </div>\r\n      </div>\r\n    </ng-container>\r\n\r\n    <!-- categorias -->\r\n    <div [hidden]=\"!showCategoria\" class=\"content-secciones xanimated xfadeIn\">\r\n\r\n        <!-- informacion y comentarios solo delivery cliente -->\r\n        <div class=\"p-2 pl-3 pr-3 border-bottom d-flex justify-content-between fs-14\" \r\n            style=\"background: #e3f2fd;\" matRipple [matRippleColor]=\"rippleColor\"\r\n            *ngIf=\"isShowCalificacion && isCliente\"\r\n            (click)=\"openDialogComentarios()\"\r\n            >\r\n          <div class=\"d-flex\">\r\n            <span class=\"pr-2\"><i class=\"fa fa-star text-warning pr-1\"></i> {{ dataCalificacion.calificacion | number: '.1' }}</span>\r\n          </div>\r\n          <div>\r\n            <span>{{ dataCalificacion.cantidad }} Opiniones <i class=\"fa fa-angle-right text-secondary pl-2\"></i></span>            \r\n          </div>\r\n        </div>\r\n\r\n        <ng-container *ngIf=\"miPedidoService.objCarta\">                 \r\n              <ul>\r\n                  <li *ngFor=\"let item of miPedidoService.objCarta.carta\" class=\"xCursor\"\r\n                      matRipple [matRippleColor]=\"rippleColor\"\r\n                      (click)=\"getSecciones(item)\">\r\n                      <div class=\"m1 seccion item-categoria-carta\">      \r\n                        <div class=\"w-100 d-flex align-items-center\">\r\n                          <div class=\"img mt-2\">\r\n                            <img src=\"assets/images/048-grill.png\" alt=\"\">\r\n                          </div>                        \r\n                          <div>\r\n                            <span class=\"fw-100 fs-20\">{{item.des}}</span><br>                        \r\n                            <div class=\"text-secondary\">\r\n                              <span class=\"mt-2 fs-15\">{{ item.detalle | lowercase }}</span><br>\r\n                              <i class=\"fa fa-clock-o pr-2\" aria-hidden=\"true\"></i>\r\n                              <span class=\"mt-2 fs-12\">Horario: {{item.hora_ini}} a {{item.hora_fin}} </span>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                          \r\n                        <!-- si esta disponible segun hora -->\r\n                        <div *ngIf=\"!item.abierto\" class=\"aling-rigth\">\r\n                          <img src=\"assets/images/002-lock.png\" alt=\"bloqueado\" class=\"animated\" [ngClass]=\"{'wobble': item.animateBloqueoCategoria}\">\r\n                        </div>\r\n                      </div>\r\n                  </li>\r\n              </ul>    \r\n            \r\n        </ng-container>\r\n    </div>    \r\n\r\n  \r\n\r\n    <!-- Secciones -->\r\n    <div [hidden]=\"!showSecciones && isScreenIsMobile\"      \r\n      class=\"content-secciones animated fadeIn m-main-pt-40\">\r\n\r\n        <!-- promociones -->\r\n        <ng-container *ngIf=\"objPromociones\">\r\n          <div *ngFor=\"let item of objPromociones; let i = index\" class=\"m1 seccion li-seccion xCursor\"\r\n                matRipple [matRippleColor]=\"rippleColor\">        \r\n            <app-item-promocion [promo]=\"item\" class=\"w-100\" (selected)=\"showItemsPromo(item)\"></app-item-promocion>\r\n          </div> \r\n        </ng-container>\r\n\r\n      <ng-container>\r\n        <ul>\r\n          <li *ngFor=\"let item of objSecciones; let i = index\" class=\"li-seccion xCursor\"\r\n              matRipple [matRippleColor]=\"rippleColor\"\r\n              (click)=\"getItems(item)\">\r\n            <div class=\"m1 seccion\">\r\n              <div class=\"img\">\r\n                <ng-container *ngIf=\"item.img === ''; else elseTemplateImg\">\r\n                  <img src=\"assets/images/{{i}}.png\" alt=\"img-icon\">                  \r\n                </ng-container>\r\n                <ng-template #elseTemplateImg>\r\n                  <img src=\"assets/images/{{item.img}}\" alt=\"img-icon\">\r\n                </ng-template>\r\n                \r\n              </div>\r\n              <div style=\"width: calc(100% - 50px) !important;\">\r\n                <div>\r\n                  <div class=\"d-flex\">\r\n                    <span class=\"fw-100 fs-19\">{{item.des}}</span><br>\r\n                    <div *ngIf=\"item.descuento\">\r\n                      <span class=\"badge badge-danger ml-2\">- {{ item.descuento}}</span>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"titulo-detalle-seccion text-secondary\">\r\n                    <span class=\"fw-100 mt-2 fs-13\">{{getObjDetalleSeccion(item)}}</span>\r\n                  </div>\r\n                </div>                \r\n              </div>\r\n            </div>\r\n          </li>\r\n        </ul>\r\n        <br><br>\r\n      </ng-container>      \r\n    </div>\r\n\r\n    <!-- items -->\r\n    <!-- color-fondo-ul -->\r\n    <div [hidden]=\"!showItems && isScreenIsMobile\" \r\n      [ngClass]=\"{'fadeInRight': showItems}\"\r\n      class=\"content-items animated fadeIn xtransicion m-main-pt-40\">\r\n      <ng-container>\r\n\r\n\r\n        <!-- vista tradiciconal -->\r\n        <ng-container *ngIf=\"!isViewMercado; else elseViewItemMercado\">\r\n          \r\n          <ul class=\"ul-items\">\r\n            <li *ngFor=\"let item of objItems\" class=\"li-item\">\r\n              <div class=\"border-bottom-li xcontent child-item border-left-item-{{getEstadoStockItem(item.cantidad)}}\" matRipple [matRippleColor]=\"rippleColor\"> \r\n                <div class=\"m1 d-flex xtitulo\"  [ngClass]=\"{'li-tachado': item.cantidad < 1, 'p-titulo-item-sin-detalle': item.detalles.length === 0}\" (click)=\"selectedItem(item)\">                                \r\n                  <!-- style 2.0 200720 -->\r\n                  <div class=\"content-titulo-item w-100 d-flex align-items-center justify-content-between w-100\">\r\n                      <ng-container *ngIf=\"item.img === ''; else elseConImagen\">\r\n                        <!-- sin imagen -->                      \r\n                          <div class=\"d-flex justify-content-between w-100\">\r\n                            <div>\r\n                              <span class=\"fw-600 fs-12 item-titulo\">{{item.des}} <i *ngIf=\"item.is_recomendacion === '1'\" class=\"fa fa-star text-warning pr-1\"></i></span>\r\n                              \r\n                              <ng-container *ngIf=\"item.detalles.length > 0\">\r\n                                <p class=\"titlo-detalle mb-1\" >{{item.detalles}}</p>                    \r\n                                \r\n                              </ng-container>                            \r\n                            </div>\r\n                            <!-- si no hay detalles -->\r\n                            <div class=\"text-right pl-1\">\r\n                              <p class=\"mb-0 fw-600\">\r\n                                <span *ngIf=\"item.precio_antes\" class=\"fw-600 li-tachado mr-1\">{{item.precio_antes | number:'0.2' }}</span>\r\n                                {{item.precio | number:'0.2' }}\r\n                              </p>                            \r\n                            </div>\r\n                          </div>                      \r\n                      </ng-container>                    \r\n                      <ng-template #elseConImagen>\r\n                        <!-- con imagen -->\r\n                        <div class=\"d-flex justify-content-between w-100 align-items-center\">\r\n                          <div>\r\n                            <span class=\"fw-600 fs-12 item-titulo\">{{item.des}} <i *ngIf=\"item.is_recomendacion === '1'\" class=\"fa fa-star text-warning pr-1\"></i></span>\r\n                            \r\n                            <ng-container>\r\n                              <p *ngIf=\"item.detalles.length > 0\" class=\"titlo-detalle mb-1\" >{{item.detalles}}</p>                    \r\n                              \r\n                              <!-- si hay detalles los precios abajo -->\r\n                              <div>\r\n                                <p *ngIf=\"item.precio_antes\" class=\"mb-0 fw-600 li-tachado\">{{item.precio_antes | number:'0.2' }}</p>\r\n                                <p class=\"mb-0 fw-600 pr-2\">{{item.precio | number:'0.2' }}</p>\r\n                              </div>\r\n                            </ng-container>                            \r\n                          </div>\r\n                          <!-- imagen -->\r\n                          <div class=\"text-right ml-1\">\r\n                            <div class=\"rounded-circle icon-div-carta\">\r\n                              <img class=\"icon-item-carta rounded-circle\" src=\"{{rutaImgItem}}{{item.img}}\" alt=\"icon-item-carta\">\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </ng-template>\r\n                      \r\n                    </div>\r\n\r\n                    \r\n                  </div>\r\n                  \r\n                  <!-- control para aumentar con un clic  - para una sola opcion de consumo | delivery o autopedido (llevar) -->\r\n                  <ng-container *ngIf=\"isPuntoAutoPedido || isTomaPedidoRapido || isCliente\">\r\n                    <div class=\"control-more-clic animated fadeInUp\" *ngIf=\"item.is_visible_control_last_add || item.cantidad_seleccionada > 0\">                    \r\n                      <app-comp-ctrl-add-fast class=\"float-left mr-1\"\r\n                          (objResponse)=\"resultCantItemMercado($event)\" \r\n                          [cantidad_show] = \"item.cantidad_seleccionada\"\r\n                          [objItem]=\"item\"\r\n                          [comprimir] = \"false\"\r\n                          [quitarFadeUp] = \"true\"\r\n                          [limitAdd]=\"item.cantidad\">\r\n                      </app-comp-ctrl-add-fast>\r\n                      <div class=\"btn-indicacion-last-control\" (click)=\"selectedItem(item, true)\">\r\n                        <i class=\"fa fa-pencil pr-1\"></i>\r\n                        <span class=\"fs-11\">Indicaciones</span>\r\n                      </div>\r\n                    </div>\r\n                  </ng-container>\r\n                  \r\n\r\n              </div>            \r\n            </li>          \r\n          </ul> \r\n\r\n        </ng-container>\r\n\r\n        <!-- vista mercado -->\r\n        <ng-template #elseViewItemMercado>\r\n          <ul class=\"content-view-item-mercado\">\r\n            <li *ngFor=\"let item of objItems\" class=\"li-content-mercado\">\r\n                <div class=\"li-item-mercado d-flex xtitulo p-titulo-item-sin-detalle\" matRipple [ngClass]=\"{'li-tachado': item.cantidad < 1}\">\r\n                  <div class=\"w-100\">                                            \r\n                        <!-- con imagen -->\r\n                        <div class=\"w-100 align-items-center\">\r\n\r\n                          <div>\r\n                            \r\n                            <app-comp-ctrl-add-fast class=\"div-control-add-fast\"\r\n                              (objResponse)=\"resultCantItemMercado($event)\" \r\n                              [cantidad_show] = \"item.cantidad_seleccionada\"\r\n                              [objItem]=\"item\"\r\n                              [limitAdd]=\"item.cantidad\">\r\n                            </app-comp-ctrl-add-fast>\r\n  \r\n                            <!-- imagen -->\r\n                            <div class=\"text-right ml-1\">\r\n                              <div class=\"text-center\">\r\n                                <ng-container *ngIf=\"item.img===''; else elseTemplateConImg\" >\r\n                                  <img class=\"icon-item-carta\" src=\"{{imgNull}}\" alt=\"icon-item-carta\" (click)=\"selectedItem(item)\">\r\n                                </ng-container>\r\n                                <ng-template #elseTemplateConImg>\r\n                                  <img class=\"icon-item-carta\" src=\"{{rutaImgItem}}{{item.img}}\" alt=\"icon-item-carta\" (click)=\"selectedItem(item)\">                                  \r\n                                </ng-template>\r\n                                \r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                          \r\n                          <div class=\"text-center\" (click)=\"selectedItem(item)\">\r\n                            <span class=\"fw-600 fs-11 item-titulo\">{{item.des}} <i *ngIf=\"item.is_recomendacion === '1'\" class=\"fa fa-star text-warning pr-1\"></i></span>                                                          \r\n                            <div>\r\n                                <p *ngIf=\"item.precio_antes\" class=\"mb-0 fw-600 li-tachado\">{{item.precio_antes | number:'0.2' }}</p>\r\n                                <p class=\"mb-0 fw-600 pr-2\">{{item.precio | number:'0.2' }}</p>\r\n                            </div>             \r\n                          </div>\r\n                          \r\n                        </div>\r\n                  </div>\r\n  \r\n                </div>      \r\n            </li>          \r\n          </ul> \r\n        </ng-template>\r\n        \r\n\r\n        \r\n               \r\n      </ng-container>\r\n    </div>\r\n\r\n\r\n    <!-- mi orden siempre que la pantalla no sea mobile -->\r\n    <ng-container>\r\n      <div class=\"content-resumen\">\r\n          <app-resumen-pedido></app-resumen-pedido>\r\n      </div>\r\n    </ng-container>\r\n    \r\n\r\n    <br>\r\n\r\n  </div>\r\n\r\n    <!-- busqueda -->\r\n    <div [hidden]=\"!isBusqueda\" class=\"xtransicion color-fondo-ul xanimated xfadeInDown\" style=\"border-top: 8px solid #3f51b5;\">\r\n        <ng-container>\r\n          <ul>\r\n              <!-- [ngClass]=\"{'li-padding-selected': item.selected}\" -->\r\n            <li *ngFor=\"let item of objCartaBus\" [hidden]=\"!item.visible\">\r\n              <div class=\"xcontent border-left-item-{{getEstadoStockItem(item.cantidad)}}\">\r\n                <div class=\"m1 d-flex xtitulo\" matRipple [matRippleColor]=\"rippleColor\" [ngClass]=\"{'li-tachado': item.cantidad < 1, 'p-titulo-item-sin-detalle': item.detalles.length === 0, 'p-titulo-item-select': item.selected}\" (click)=\"selectedItem(item)\">\r\n                  <!-- titulo item -->\r\n                  <div class=\"content-titulo-item w-100\">\r\n                    <span>{{item.des}}</span>\r\n                    <ng-container *ngIf=\"item.detalles.length > 0\">\r\n                        <p class=\"titlo-detalle\" >{{item.seccion}}: {{item.detalles}}</p>                    \r\n                      </ng-container>                    \r\n                  </div>\r\n    \r\n                </div>\r\n\r\n                \r\n              </div>            \r\n            </li>          \r\n          </ul>        \r\n        </ng-container>\r\n      </div>\r\n      <br>\r\n</div>\r\n";

/***/ }),

/***/ 97903:
/*!************************************************************************************!*\
  !*** ./src/app/pages/pedido/estado-pedido/estado-pedido.component.html?ngResource ***!
  \************************************************************************************/
/***/ ((module) => {

module.exports = "<div class=\"animated fadeIn\">     \n     \n    <ng-container *ngIf=\"!isDeliveryCliente; else templateDelivery\">\n        \n        <div class=\"row xboder-abajo m-0 p-2\">\n            <div class=\"col-4 text-center xboder-derecha\">\n                <span>{{tituloMesa}}</span>\n                <h3>{{infoToken.numMesaLector | number:'2.'}}</h3>\n            </div>\n            <!-- <span *ngIf=\"!estadoPedido\">.</span> -->    \n            <ng-template #elseTemplate>\n                \n            </ng-template>\n            \n            <div class=\"col-8 xcontainer-center text-right\" *ngIf=\"estadoPedido\">\n                <span *ngIf=\"estadoPedido.estado === 0\">Tiempo de espera <strong>{{ tiempoEspera }} min</strong> aprox.</span>\n                <span *ngIf=\"estadoPedido.estado === 1\">Su pedido esta por llegar.</span>\n                <span *ngIf=\"estadoPedido.estado === 2\">Su pedido ya fue despachado.</span>\n            </div>\n        </div>\n\n        <!-- importe -->\n        <div class=\"row xboder-abajo m-0 p-2 xcontainer-center\">\n            <div class=\"col-6 pb-3 pt-3\">\n                <span class=\"fs-13\">Importe a pagar</span><br>\n                <ng-container *ngIf=\"estadoPedido.hayPedidoClientePendiente; else elseTemplateCuenta\">\n                    <span class=\"text-danger\">Tiene pedido pendiente.</span>\n                </ng-container>\n                <ng-template #elseTemplateCuenta>                \n                    <span class=\"text-info xCursor\" (click)=\"verCuenta()\">Ver cuenta</span>\n                </ng-template>\n                \n            </div>\n            <div class=\"col-6 text-right\">\n                <span class=\"fs-25\">{{simbolo_moneda}} {{ estadoPedido.importe | number: '.2' }}</span>\n            </div>\n        </div>\n\n        <!-- link pagar -->\n        <div class=\"row xboder-abajo m-0 p-2 pt-3 pb-3 xcontainer-center\">\n            <div class=\"col-8\">\n                <img class=\"pr-2\" src=\"./assets/images/001-visa.png\" alt=\"visa-card\">\n                <img class=\"pr-2\" src=\"./assets/images/002-mastercard.png\" alt=\"maestro-card\">\n                <img src=\"./assets/images/002-american-express.png\" alt=\"american-express\">\n                <!-- <img src=\"./assets/images/003-diners-club.png\" alt=\"diners-club\"> -->\n            </div>\n            <div class=\"col-4 text-right\">\n                <button [disabled]=\"estadoPedido.hayPedidoClientePendiente || estadoPedido.importe == 0 || !isComercioAceptaTarjeta\" mat-flat-button color=\"primary\" (click)=\"pagarCuenta()\">Pagar</button>                \n            </div>\n            <div class=\"col-12\">\n                <p *ngIf=\"!isComercioAceptaTarjeta\" class=\"fs-11 fw-100 m-0\">Comercio solo acepta pagos en caja.</p>\n            </div>\n        </div>\n\n        <!-- SOLCITAR ATENCION - LLAMAR AL PERSOANL -->\n\n        <div *ngIf=\"!infoToken.isSoloLLevar\" class=\"row xboder-abajo m-0 p-2 xcontainer-center\" matRipple [matRippleColor]=\"rippleColor\" (click)=\"solicitarAtencion()\">\n            <div class=\"col-8 pb-3 pt-3\">\n                <span class=\"fs-13 fw-600\">Solicitar atención del personal.</span>\n                <span class=\"fs-13 text-info pl-2 animated flash\" [hidden]=\"!isViewMsjSolicitudPersoanl\">Solicitud enviada.</span>\n            </div>\n            <div class=\"col-4 text-right\">\n                <img src=\"./assets/images/solicitar-atencion.png\" alt=\"solicitar-atencion\">\n            </div>\n        </div>\n\n        <!-- facturacion -->\n        <!-- <div *ngIf=\"estadoPedido.importe != 0\" class=\"animated fadeIn row xboder-abajo m-0 p-2 xcontainer-center\" matRipple [matRippleColor]=\"rippleColor\" (click)=\"showDatosFacturacion()\">\n            <div class=\"col-9 pb-3 pt-3\">\n                <p class=\"fs-13 fw-600 m-0\">Datos de facturación.</p>\n                <span class=\"fw-100 text-secondary fs-11\">Especifique los datos de su comprobante.</span>\n            </div>\n            <div class=\"col-3 text-right\">\n                <img src=\"./assets/images/001-bill.png\" alt=\"bill\">                \n            </div>\n        </div> -->\n\n        <!-- link encuesta -->\n        <div class=\"row xboder-abajo m-0 p-2 xcontainer-center\">\n            <div class=\"col-12 pb-3 pt-3\">\n                <span class=\"fs-13\">Al cancelar la cuenta por favor tomece un minuto para calificar nuestro servicio, su opinión es muy importante.</span>\n            </div>\n        </div>\n\n        <!-- link completar datos -->\n        <!-- <div class=\"row xboder-abajo m-0 p-2 xcontainer-center\">\n            <div class=\"col-8 pb-3 pt-3\">\n                <span class=\"fs-13\">Complete su información para recibir promociones y descuentos.</span>            \n            </div>\n            <div class=\"col-4 text-right\">\n                <button mat-flat-button color=\"primary\"><i class=\"fa fa-arrow-right\"></i></button>\n            </div>\n        </div> -->\n    </ng-container>\n\n\n\n    <!-- cunado es DELIVERY  -->\n    <ng-template #templateDelivery>\n        <div class=\"border-bottom m-0 p-3\" matRipple [matRippleColor]=\"rippleColor\">\n            <span class=\"fw-100 fs-12 text-secondary\">Direccion de entrega:</span>\n            <p class=\"m-0\">Jr. Reyes Guerra 456</p>\n        </div>\n        <div class=\"border-bottom m-0 p-3\" matRipple [matRippleColor]=\"rippleColor\">\n            <!-- <span class=\"fw-100 fs-12 text-secondary\">Hora de entrega:</span> -->            \n            <p class=\"m-0\"><i class=\"fa fa-clock-o\"></i> Hora de entrega: 10 - 15 min</p>\n        </div>\n        <div class=\"border-bottom m-0 p-3\" matRipple [matRippleColor]=\"rippleColor\">\n            \n            <!-- <p class=\"m-0\">Jr. Reyes Guerra 456</p> -->\n            <mat-form-field class=\"w-100\">\n                <input type=\"number\" matInput placeholder=\"Telefono\">\n            </mat-form-field>\n            <span class=\"fw-100 fs-12 text-secondary\">Añade un número de teléfono para que podamos contactarte e informarte de tu pedido.</span>\n        </div>\n\n        <div class=\"border-bottom m-0 p-3\" matRipple [matRippleColor]=\"rippleColor\">\n            <div class=\"row border-bottom\">\n                \n            </div>\n        </div>\n    </ng-template>    \n    <br><br>\n</div>";

/***/ }),

/***/ 86542:
/*!**********************************************************************!*\
  !*** ./src/app/pages/pedido/inicio/inicio.component.html?ngResource ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = "\n<div class=\"h-100 overflow-hidden\"> \n  <div class=\"toolbar-main\" [ngClass]=\"{'fadeInTool': isVisibleToolBar, 'fadeOutTool': !isVisibleToolBar}\">\n    <app-tool-bar></app-tool-bar>\n  </div>\n  <div>\n    <mat-tab-group backgroundColor=\"primary\" color=\"accent\" class=\"main-contemt transicion\">\n      <mat-tab label=\"Carta\">\n        <div class=\"x100-toolbar-hidden\" (scroll)=\"onScroll($event)\">\n          <app-carta></app-carta>\n          <br>\n        </div>\n      </mat-tab>\n      <mat-tab>\n        <ng-template matTabLabel>\n          <span>Mi Pedido</span>\n          <div *ngIf=\"countTotalItems > 0\" class=\"countItem countTotal animated fadeInUp\">\n            {{countTotalItems | number: '2.'}}</div>\n        </ng-template>\n        <div class=\"x100-toolbar-hidden\" (scroll)=\"onScroll($event)\">\n          <app-resumen-pedido></app-resumen-pedido>\n          <br>\n        </div>\n      </mat-tab>\n      <!-- <mat-tab label=\"Estado\">\n        <app-estado-pedido></app-estado-pedido>\n      </mat-tab> -->\n    </mat-tab-group>\n  </div>\n\n</div>";

/***/ }),

/***/ 54345:
/*!******************************************************************!*\
  !*** ./src/app/pages/pedido/main/main.component.html?ngResource ***!
  \******************************************************************/
/***/ ((module) => {

module.exports = "<!-- loader -->\n  <div [ngClass]=\"{'loaded': socketService.isSocketOpen$ | async}\">\n    <div class=\"wrapper\">\n        <div id=\"loader-wrapper\">\n        <div id=\"loader\"></div>                \n        <div class=\"loader-msj\">{{socketService.msjConex$ | async}}</div>\n        <div class=\"loader-section section-left\"></div>\n        <div class=\"loader-section section-right\"></div>\n        </div>\n    </div>\n  </div>     \n<!-- loader -->\n\n<!-- loader send pedido or transaction -->\n<div class=\"animated fadeIn div-loader-2\" *ngIf=\"listenStatusService.isLoaderSendPedido$ | async\">\n  <!-- <div class=\"animated fadeIn div-loader-2\"> -->\n  <div class=\"loader\">\n      <ng-container *ngIf=\"listenStatusService.isFinishLoaderSendPedido$ | async; else elseTemplateNoFinish\">\n        \n        <ng-container *ngIf=\"isUsuarioCliente; else elseTemplateIsMozo\">\n          <img src=\"./assets/images/printer_3.gif\" alt=\"send-printer\">        \n          <div style=\"max-width: 220px;\">\n            <p class=\"pt-2 fs-18 fw-600\">Pedido Recibido.</p>\n            <hr>\n            <p class=\"pt-2 fs-15 fw-100\">Su pedido fue recibido correctamente en las zonas de producción correspondientes.</p>\n            <hr>\n            <button mat-flat-button color=\"primary\" (click)=\"closeMsjLoaderPedido()\">Listo</button>\n          </div>          \n        </ng-container>\n        <ng-template #elseTemplateIsMozo>\n\n            <img src=\"./assets/images/success_3.gif\" width=\"130px\" alt=\"send-success\">        \n            <p class=\"pt-2 fs-18 fw-600\">Pedido Enviado</p>\n          \n        </ng-template>\n        \n\n                \n      </ng-container>\n      <ng-template #elseTemplateNoFinish>        \n        <img src=\"./assets/images/plane_3.gif\" alt=\"send\">\n        <br><br>\n        <mat-progress-bar mode=\"indeterminate\"></mat-progress-bar>\n        <span class=\"pt-2 fs-16 fw-600\">Enviando pedido...</span>\n\n        <!-- <button (click)=\"pruebaMsjs()\">ok</button> -->\n      </ng-template>\n      \n  </div>    \n</div>\n<!-- loader send pedido or transaction -->\n\n<!-- loader send pedido or transaction -->\n<div class=\"animated fadeIn div-loader-2\" *ngIf=\"listenStatusService.isLoaderCarta$ | async\">\n  <div class=\"loader\">\n      <mat-progress-bar mode=\"indeterminate\"></mat-progress-bar>\n      <span class=\"pt-2\">Obteniendo productos...</span>\n  </div>    \n</div>\n<!-- loader send pedido or transaction -->\n\n<!-- notifica llamado cliente mesa -->\n<app-comp-list-call-client></app-comp-list-call-client>\n<!-- notifica llamado cliente mesa -->\n\n<!-- <div *ngIf=\"isPagePagarShow\">\n  <router-outlet></router-outlet>\n</div> -->\n\n<!-- <router-outlet></router-outlet> -->\n<!-- *ngIf=\"!isPagePagarShow\" -->\n<div class=\"h-100 overflow-hidden\" >  \n    <app-progress-time-limit></app-progress-time-limit>\n    <div class=\"toolbar-main\" [ngClass]=\"{'fadeInTool': isVisibleToolBar, 'fadeOutTool': !isVisibleToolBar}\">\n      <app-tool-bar></app-tool-bar>      \n    </div>        \n\n    <div>      \n      \n      <mat-tab-group (selectedTabChange)=\"clickTab($event)\" backgroundColor=\"primary\" color=\"accent\"\n        class=\"main-contemt transicion xanimated xfadeIn\" [selectedIndex]=\"selectedTab\"\n        [ngClass]=\"{'header-less-tabs pt-0': isBusqueda}\">\n        <mat-tab label=\"Carta\">\n          <div class=\"x100-toolbar-hidden\" (scroll)=\"onScroll($event)\">          \n            <app-carta></app-carta>\n            <br>\n\n            <!-- footer boton ir a mi pedido -->\n            <div class=\"footer-btn-go-lista animated fadeIn\" \n              [ngClass]=\"{'fadeInUp':  countTotalItems > 0,'fadeOutDown': countTotalItems <= 0}\" \n              *ngIf=\"(isUsuarioCliente || isPuntoAutoPedido) && isScreenIsMobile\">\n              <!-- boton atras -->\n              <div class=\"content-info text-left\">\n                <p class=\"fw-100 fs-12 m-0\">Importe Total</p>\n                <p class=\"fw-800 fs-20\">S/. {{ importeTotalProductos | number: '.2' }}</p>\n              </div>\n\n              <!-- importe total del pedido -->\n              <div class=\"content-btn\"> \n                <button matRipple class=\"btn mr-1\" style=\"background: #3f51b5; color: white;\" (click)=\"goListaProductos()\">\n                  <span class=\"fs-15\">Ver Pedido</span>\n                </button>\n                <button matRipple class=\"btn text-center\" style=\"background: #007BFF; color: white;\" (click)=\"goBackCarta()\">\n                  <i class=\"fa fa-arrow-left\"></i>\n                </button>\n                <!-- <p class=\"badge badge-light\">{{ countTotalItems }}</p>\n                <p>Ver pedido</p>\n                <p>S/. {{ importeTotalProductos | number: '.2' }}</p> -->\n              </div>\n            </div>\n\n          </div>     \n        </mat-tab>\n        <mat-tab label=\"MiPedido\" [disabled]=\"!isScreenIsMobile\">\n          <ng-template matTabLabel>\n              <span>Mi Pedido </span>\n              <i class=\"fa fa-shopping-basket pl-2\" aria-hidden=\"true\"></i>\n              \n              <div *ngIf=\"countTotalItems > 0\" class=\"countItem countTotal animated fadeInUp d-flex\">\n                {{countTotalItems | number: '2.'}}\n                <div class=\"div-spinner\">\n                </div>\n              </div>              \n          </ng-template>\n          <div class=\"x100-toolbar-hidden\" [ngClass]=\"{'fondo-gris': isUsuarioCliente}\" (scroll)=\"onScroll($event)\">\n            <ng-container *ngIf=\"isScreenIsMobile\">              \n              <app-resumen-pedido></app-resumen-pedido>\n            </ng-container>\n            \n            <br>\n          </div>\n        </mat-tab>\n\n        <!-- solo si personal autorizado  -->\n        <mat-tab label=\"Mesas\" *ngIf=\"!isUsuarioCliente && !isClienteDelivery && !isClienteReserva\">\n            <div class=\"x100-toolbar-hidden\" (scroll)=\"onScroll($event)\"> \n              <!-- <app-estado-pedido></app-estado-pedido> -->\n              <app-comp-list-mesas></app-comp-list-mesas>\n              <br>\n            </div>          \n        </mat-tab>      \n\n        <!-- solo si es usuario cliente  -->\n        <mat-tab label=\"Estado\" *ngIf=\"isUsuarioCliente && !isClienteDelivery && !isClienteReserva\">\n          <!-- <ng-container *ngIf=\"isUsuarioCliente\"> -->\n            <div class=\"x100-toolbar-hidden\" (scroll)=\"onScroll($event)\"> \n              <app-estado-pedido></app-estado-pedido>\n              <br>\n            </div>\n          <!-- </ng-container>         -->\n        </mat-tab>\n      </mat-tab-group>\n    </div>    \n    \n    \n    <app-mozo-show-traduce-text></app-mozo-show-traduce-text>\n   \n\n</div>";

/***/ }),

/***/ 18619:
/*!*****************************************************************************************************!*\
  !*** ./src/app/pages/pedido/resumen-pedido/dialog-loading/dialog-loading.component.html?ngResource ***!
  \*****************************************************************************************************/
/***/ ((module) => {

module.exports = "<div class=\"text-center p-3\">\n  <!-- <ng-container *ngIf=\"isSusccess; else elseTemplate\"> -->\n      <!-- <div class=\"text-center\" class=\"animated fadeInDown\" *ngIf=\"isSusccess\">\n        <span>\n      </div>     -->\n  <!-- </ng-container> -->\n  <!-- <ng-template #elseTemplate> -->\n    <div class=\"fw-100 fs-18\">\n      <ng-container *ngIf=\"!isSusccess; else elseTemplate\">\n          <span><i class=\"fa fa-spinner fa-spin fa-2x fa-fw pr-1\"></i>Enviando ...</span>  \n      </ng-container>\n      <ng-template #elseTemplate>          \n          <span class=\"animated fadeInLeft\"><i class=\"fa fa-check text-success pr-1\" aria-hidden=\"true\"></i>Envio correcto</span>\n      </ng-template>          \n      <!-- <mat-progress-bar mode=\"indeterminate\"></mat-progress-bar> -->\n    </div>\n  <!-- </ng-template> -->\n</div>";

/***/ }),

/***/ 15079:
/*!**************************************************************************************!*\
  !*** ./src/app/pages/pedido/resumen-pedido/resumen-pedido.component.html?ngResource ***!
  \**************************************************************************************/
/***/ ((module) => {

module.exports = "<div *ngIf=\"!isHayCuentaBusqueda && isCliente || isPuntoAuntoPedido\" class=\"animated fadeIn transicion\" [ngClass]=\"[!isVisibleConfirmarAnimated ? 'fadeInLeft' : 'fadeOutLeft d-none']\">\r\n    <app-comp-list-item-pedido-cliente        \r\n        [arrSubtotales]=\"_arrSubtotales\"\r\n    ></app-comp-list-item-pedido-cliente>\r\n</div>\r\n\r\n<div [hidden]=\"!isHayCuentaBusqueda\" class=\"bg-dark fs-13 p-2 text-white text-center\">\r\n    CUENTA DE LA MESA {{numMesaCuenta | number: '2.'}}\r\n</div>\r\n\r\n<div class=\"d-flex w-100 xanimated xfadeIn div-content-all\" \r\n    [ngClass]=\"{'xh-100': isVisibleConfirmarAnimated}\"\r\n    *ngIf=\"hayItems \" id=\"cardcontentall\">\r\n    <!-- <div class=\"w-100\"> -->\r\n        <div *ngIf=\"!isCliente && !isPuntoAuntoPedido || isHayCuentaBusqueda\" class=\"w-100 div-resumen-pedido transicion\"\r\n        [ngClass]=\"[!isVisibleConfirmarAnimated ? 'd-inline' : 'd-none']\">\r\n            <div *ngFor=\"let tpc of _miPedido.tipoconsumo\" class=\"xCursor\">\r\n                <ng-container *ngIf=\"tpc.count_items_seccion > 0\">\r\n                    <div class=\"div-plr titulo-tpc\">\r\n                        <span [hidden]=\"isDeliveryCliente\">{{tpc.descripcion}}</span>\r\n                        <span [hidden]=\"!isDeliveryCliente\"><i class=\"fa fa-arrow-left pr-2\" (click)=\"goBackCarta()\"></i>  Resumen de mi orden</span>\r\n                        <div class=\"countItem countTpc\">{{tpc.count_items_seccion}}</div>\r\n                    </div>\r\n                    <div *ngFor=\"let seccion of tpc.secciones\">\r\n                        <ng-container *ngIf=\"seccion.count_items > 0\">\r\n                            <div class=\"div-plr titulo-seccion\">\r\n                                <span>{{seccion.des | titlecase}}</span>\r\n                                <div class=\"countItem countSeccion\">{{seccion.count_items}}</div>\r\n                            </div>\r\n                            <ul class=\"w-100\">\r\n                                <div *ngFor=\"let item of seccion.items\">\r\n                                    <ng-container *ngIf=\"item.cantidad_seleccionada > 0\">\r\n                                        <li class=\"d-flex div-plr li-item\" matRipple [matRippleColor]=\"rippleColor\" (click)=\"openDlgItemToResumen(seccion, item)\">\r\n                                            <div class=\"pr-2 fw-100\">{{item.cantidad_seleccionada | number: '2.'}}</div>\r\n                                            <div class=\"w-100 fw-100 pr-1\">{{item.des | lowercase}}  \r\n                                                <span [hidden]=\"!item.indicaciones\">( {{item.indicaciones}} )</span> \r\n                                                <span *ngIf=\"item.ispromo\" style=\"font-size: 9px; font-weight: 100;\" class=\"badge badge-info fw-100 fs-9\">Promo</span> \r\n                                            </div>\r\n                                            <div class=\"fw-100\">{{item.precio_print | number:'0.2' }}</div>\r\n                                        </li>\r\n                                            <!-- subitems -->\r\n                                            <ng-container *ngIf=\"item.subitems_view\">                                                \r\n                                                <div>\r\n                                                    <ul class=\"w-100\">                                                        \r\n                                                        <!-- <div *ngFor=\"let subitem of item.subitems_view\">                   -->\r\n                                                                <!-- (click)=\"openDlgSubItem(tpc, seccion, item, subitem)\"                                       -->\r\n                                                            <li class=\"d-flex div-plr li-item fw-100 fs-13 text-secondary subitem-content-resumen\" *ngFor=\"let subitem of item.subitems_view\" matRipple [matRippleColor]=\"rippleColorSubItem\">\r\n                                                                <!-- <div class=\"w-100 d-flex\"> -->\r\n                                                                    <div class=\"d-flex w-100\" [ngClass]=\"{'pl-4': isHayCuentaBusqueda}\">\r\n                                                                        <div class=\"btnCount btnMenos\" *ngIf=\"!isHayCuentaBusqueda\" (click)=\"addItemToResumen(tpc, seccion, item, subitem, 1)\">-</div> \r\n                                                                            {{subitem.cantidad_seleccionada | number: '2.'}} {{subitem.des}}\r\n                                                                        <div class=\"btnCount btnMas\" *ngIf=\"!isHayCuentaBusqueda\" (click)=\"addItemToResumen(tpc, seccion, item, subitem, 0)\">+</div> \r\n                                                                    </div>\r\n\r\n                                                                    <div class=\"fs-11 text-right\" style=\"width: 45px;\" [hidden]=\"subitem.precio === 0\">\r\n                                                                        + {{subitem.precio | number:'0.2' }}\r\n                                                                    </div>                                                                    \r\n                                                                <!-- </div> -->\r\n                                                            </li>\r\n                                                        <!-- </div> -->\r\n                                                    </ul>\r\n                                                </div>\r\n                                            </ng-container>\r\n                                            \r\n                                       \r\n                                    </ng-container>                            \r\n                                </div>\r\n                            </ul>            \r\n                        </ng-container>\r\n                    </div>\r\n                </ng-container>\r\n            </div>    \r\n\r\n            <!-- subtotales -->    \r\n            <div class=\"div-total\">\r\n                <ul class=\"w-100 ul-total\">\r\n                    <li class=\"d-flex div-plr li-item\" *ngFor=\"let item of _arrSubtotales\" matRipple\r\n                    [matRippleColor]=\"rippleColor\">\r\n                    <div class=\"w-100\">{{item.descripcion | titlecase}}</div>\r\n                    <div>{{item.importe | number:'0.2' }}</div>\r\n                    </li>\r\n                </ul>\r\n            </div>        \r\n            <br>\r\n            \r\n            <ng-container *ngIf=\"isHayCuentaBusqueda\">\r\n                <div class=\"text-center\">                    \r\n                    <button mat-flat-button color=\"accent\" (click)=\"nuevoPedidoFromCuenta()\">Nuevo Pedido</button>\r\n                    <button *ngIf=\"!isCliente\" mat-flat-button color=\"primary\" class=\"ml-2\" (click)=\"imprimirPrecuenta()\" [disabled]=\"loadPrinterPrecuenta\">\r\n                        <i class=\"fa fa-spinner fa-spin\" *ngIf=\"loadPrinterPrecuenta\"></i>\r\n                        Imprimir Precuenta\r\n                    </button>\r\n                </div>\r\n            </ng-container>\r\n            <br>\r\n            <br><br>\r\n            <br><br>\r\n        </div>\r\n    <!-- </div> -->\r\n\r\n    <!-- confirma pedido -->\r\n    <div class=\"div-resumen-pre-pago w-100\" [hidden]=\"!isVisibleConfirmar\">\r\n        <div class=\"xcontent div-confirma-pedido w-100 p-3 transicion animated fadeInRight\"\r\n          [ngClass]=\"[isVisibleConfirmarAnimated ? 'show' : 'hide', isVisibleConfirmarAnimated ? 'fadeInRight' : 'fadeInLeft', !isDeliveryCliente ? 'bg-1': 'bg-2']\">\r\n            <div class=\"text-center d-flex justify-content-center w-100\">\r\n\r\n                <!-- cuando es usuario cliente y escaneo codigo solo para llevar -->\r\n                <!-- <ng-container *ngIf=\"isCliente && isSoloLLevar\">\r\n                    <div class=\"text-center\">                        \r\n                        <hr>\r\n                        <p class=\"fw-100 fs-17\">\r\n                            <i class=\"fa fa-info-circle\" aria-hidden=\"true\"></i>\r\n                            Para confirmar su pedido seleccione entre estas opciones:\r\n                            </p>\r\n                        <hr>\r\n                        \r\n                        <br>\r\n                        <div class=\"text-center\">                            \r\n                            <div class=\"btn-footer-next transicion w-50 m-auto\" matRipple (click)=\"pagarCuentaSoloLLevar()\">\r\n                                <div>\r\n                                    <span class=\"animated fadeInLeft\">Pagar con tarjeta</span>\r\n                                </div>\r\n                            </div>\r\n                            <br>\r\n                            <hr>\r\n                            <br>\r\n                            <div class=\"btn-footer-next transicion w-50 m-auto bg-primary\" matRipple>\r\n                                <div>\r\n                                    <span class=\"animated fadeInLeft\">Acercarse a pagar en caja.</span>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </ng-container> -->\r\n                \r\n                <!-- cuando es usuario cliente -->                                \r\n                <ng-container *ngIf=\"isCliente || isPuntoAuntoPedido\">\r\n                    <ng-container *ngIf=\"isReservaCliente; else elseTemplateDelivery\">                        \r\n\r\n                        <div class=\"w-100 p-2\" style=\"max-width: 500px;\">\r\n                            <app-comp-datos-reserva \r\n                            (isReady)=\"isReadyClienteReserva = $event\"\r\n                            (dataReserva) = \"getDatosFormConfirmaReserva($event)\"></app-comp-datos-reserva>\r\n\r\n                            <p class=\"fw-100 fs-14 text-secondary\">\r\n                                <i class=\"fa fa-exclamation-triangle\" aria-hidden=\"true\"></i>\r\n                                Por favor, verifique su pedido, una vez enviado ya no podra realizar ningun\r\n                                cambio.</p>\r\n                                <hr>\r\n                        </div>\r\n\r\n                        \r\n                    </ng-container>\r\n                    <ng-template #elseTemplateDelivery>\r\n                        <ng-container *ngIf=\"!isDeliveryCliente || isPuntoAuntoPedido; else templateDelivery\" class=\"w-100\">\r\n    \r\n                            <div class=\"text-center\">\r\n                                <br><br>             \r\n                                <div *ngIf=\"isShowNombreClienteLoginInvitado\">\r\n                                    <app-text-nom-cliente [sizeTextBg]=\"true\" (isNombreValid)=\"nombreClienteValido = $event\"></app-text-nom-cliente>\r\n                                </div>                   \r\n                                <hr>\r\n                                <div>\r\n                                    <p class=\"fw-600 fs-17 text-dark\">\r\n                                        <i class=\"fa fa-exclamation-triangle\" aria-hidden=\"true\"></i>\r\n                                        Por favor, verifique su pedido, una vez enviado ya no podra realizar ningun\r\n                                    cambio.</p>\r\n                                    <hr>\r\n                                    \r\n                                    <br>\r\n                                    <div class=\"text-center\">\r\n                                        <button [disabled]=\"!nombreClienteValido\" class=\"btn btn-footer-next transicion w-50 m-auto\" matRipple (click)=\"prepararEnvio()\"\r\n                                                    [ngClass]=\"{'xdisabled': isRequiereMesa}\">\r\n                                            <div>\r\n                                                <span class=\"animated fadeInLeft\">Enviar Pedido</span>\r\n                                            </div>\r\n                                        </button>\r\n                                        <!-- <p class=\"text-danger fs-15\" *ngIf=\"!nombreClienteValido\">Su nombre es necesario para adjuntar al pedido</p> -->\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        \r\n                        </ng-container>\r\n                        <ng-template #templateDelivery>\r\n                            \r\n                            <!-- si es cliente deliver -->\r\n    \r\n    \r\n                            <app-confirmar-delivery \r\n                                class=\"w-100\"\r\n                                [listSubtotales] = \"_arrSubtotales\" \r\n                                (isReady)=\"isReadyClienteDelivery = $event\"\r\n                                (dataDelivery) = \"getDatosFormConfirmaDelivery($event)\">\r\n                            </app-confirmar-delivery>\r\n                           \r\n    \r\n                            <!-- si es cliente deliver -->\r\n    \r\n                        </ng-template>\r\n\r\n                    </ng-template>\r\n                    \r\n\r\n                    \r\n                </ng-container>\r\n\r\n                <!-- cuando es personal autorizado -->\r\n                <ng-container *ngIf=\"!isCliente && !isPuntoAuntoPedido\" #divUsuarioAutorizado>\r\n                    <!-- datos del pedido -->\r\n                    <div [hidden]=\"isDelivery\" class=\"div-confirma-pedido-mesa w-100\">\r\n                        <form #frmconfirma=\"ngForm\">\r\n                            <div *ngIf=\"frmConfirma.reserva\" class=\"xanimated xfadeIn\">\r\n                                <p class=\"fs-30 fw-100\">RESERVAR</p>\r\n                            </div>\r\n\r\n                            <div *ngIf=\"!frmConfirma.reserva\" class=\"xanimated xfadeIn\">\r\n                            <span class=\"fw-100 fs-20\">Indique # de mesa</span>\r\n                            <div class=\"w-100\">\r\n                                <mat-form-field class=\"text-center fs-20\">\r\n                                <input \r\n                                    type=\"number\"\r\n                                    matInput\r\n                                    [(ngModel)]=\"frmConfirma.nummesa\" name=\"mesa\"\r\n                                    [required]=\"isRequiereMesa\" (keyup)=\"checkIsRequierMesa(txtNumMesa.value)\" #txtNumMesa>\r\n                                </mat-form-field>\r\n                            </div>\r\n                            </div>\r\n                                            \r\n                            <div class=\"w-100\">\r\n                            <mat-form-field class=\"w-100 text-center\">\r\n                                <input matInput placeholder=\"Indique alguna referencia\" [(ngModel)]=\"frmConfirma.referencia\"\r\n                                name=\"referencia\">\r\n                            </mat-form-field>\r\n                            </div>\r\n                            <br>\r\n                            <div class=\"w-50\">               \r\n                                <mat-checkbox [(ngModel)]=\"frmConfirma.reserva\" name=\"reserva\" (change)=\"checkIsRequierMesa()\">\r\n                                Esto es una reserva.\r\n                                </mat-checkbox>\r\n                            </div>\r\n                            <br><br>\r\n                            <hr>\r\n                            <p class=\"fw-100 fs-17 text-secondary\">\r\n                                <i class=\"fa fa-exclamation-triangle\" aria-hidden=\"true\"></i>\r\n                                Por favor, verifique su pedido, una vez enviado ya no podra realizar ningun\r\n                            cambio.</p>\r\n                            <hr>\r\n                            <!-- {{isRequiereMesa}} -->\r\n                        </form>\r\n                    </div>\r\n                    <!-- datos del pedido -->\r\n\r\n                    <!-- datos del delivery -->\r\n                    <div [hidden]=\"!isDelivery\">\r\n                        <app-datos-delivery (changeStatus)=\"checkDataDelivery($event)\" [listSubtotales] = \"_arrSubtotales\" ></app-datos-delivery>\r\n                        \r\n                        <p class=\"fw-100 fs-14 text-secondary\">\r\n                        <i class=\"fa fa-exclamation-triangle\" aria-hidden=\"true\"></i>\r\n                        Por favor, verifique su pedido, una vez enviado ya no podra realizar ningun\r\n                        cambio.</p>\r\n                        <hr>\r\n                        <br><br><br><br>\r\n                    </div>\r\n                    \r\n                    <!-- datos del delivery -->\r\n                    \r\n                </ng-container>\r\n                                \r\n                \r\n            </div>\r\n        </div>\r\n    </div>\r\n    <!-- confirma pedido -->\r\n</div>\r\n\r\n<!-- ver la cuenta solo personal autorizado -->\r\n<div class=\"text-center\" *ngIf=\"!hayItems && !isCliente && !isPuntoAuntoPedido\">\r\n    <br>    \r\n    <img class=\"img-cuenta\" src=\"./assets/images/icon_1.gif\" width=\"300px\" alt=\"..\">\r\n    <br>\r\n    <span class=\"fw-100 fs-20\">Ver cuenta de la mesa #:</span>\r\n    <div class=\"w-100\">\r\n        <mat-form-field class=\"text-center fs-20\">\r\n        <input \r\n            type=\"number\"\r\n            matInput\r\n            #txt_mesa_cuenta\r\n            >\r\n        </mat-form-field>\r\n    </div>        \r\n    <span class=\"fs-14 font-weight-bold text-danger animated flash\" [hidden]=\"!msjErr\">No se encontro cuenta de esta mesa.</span>\r\n    <br><br>\r\n    <button mat-flat-button color=\"primary\" (click)=\"xLoadCuentaMesa(txt_mesa_cuenta.value)\">Listo, buscar</button>\r\n    <br><br><br>\r\n</div>\r\n\r\n<!-- resumen de mi orden cuand es usuario cliente -->\r\n<ng-container *ngIf=\"!hayItems && isCliente && !isDeliveryCliente\">\r\n    <div class=\"text-center d-flex flex-column h-75\">        \r\n        <div class=\"m-auto\">\r\n            <p>Aun no tiene ningun producto en lista.</p>\r\n            <button class=\"btn btn-sm btn-secondary\" (click)=\"pintarMiPedidoNuevamente()\"> \r\n                <ng-container *ngIf=\"isReloadListPedidos; else elseTemplateText\">\r\n                    <i class=\"fa fa-spinner fa-spin\"></i>\r\n                </ng-container>\r\n                <ng-template #elseTemplateText>\r\n                    Recargar Lista\r\n                </ng-template>                            \r\n            </button>        \r\n        </div>\r\n    </div>    \r\n</ng-container>\r\n\r\n\r\n<!-- footer -->\r\n<ng-container *ngIf=\"hayItems && !isHayCuentaBusqueda\">\r\n    <div class=\"xfooter\">\r\n      <div class=\"m-0 w-100 d-flex justify-content-between\">\r\n        <div class=\"btn-footer-cancel\" matRipple (click)=\"nuevoPedido()\">\r\n            <span [hidden]=\"isVisibleConfirmarAnimated\" class=\"animated fadeInRight\">\r\n                <ng-container *ngIf=\"isCliente; else elseTemplateisDeliveryCliente\">\r\n                    Borrar Lista\r\n                </ng-container>\r\n                <ng-template #elseTemplateisDeliveryCliente>\r\n                    Nuevo Pedido\r\n                </ng-template>\r\n                \r\n            </span>            \r\n            <span [hidden]=\"!isVisibleConfirmarAnimated\" class=\"animated fadeInLeft\"><i class=\"fa fa-arrow-left\"></i> Atras </span>\r\n        </div>\r\n        \r\n        <ng-container *ngIf=\"!isVisibleConfirmarAnimated; then divBtnListo; else divBtnEnviar\"></ng-container>\r\n        <ng-template #divBtnListo>\r\n            <div class=\"btn-footer-next transicion\" matRipple (click)=\"confirmarPeiddo()\">\r\n              <div>\r\n                <span class=\"animated fadeInRight\">Continuar <i class=\"fa fa-arrow-right\"></i></span>\r\n              </div>\r\n            </div>\r\n        </ng-template>\r\n        <ng-template #divBtnEnviar>\r\n            <ng-container *ngIf=\"!isDelivery; else elseTemplate\">\r\n              <div *ngIf=\"!isCliente && !isPuntoAuntoPedido\" class=\"btn-footer-next transicion\" matRipple (click)=\"prepararEnvio()\"\r\n                [ngClass]=\"{'xdisabled': isRequiereMesa}\">\r\n                <div>\r\n                  <span class=\"animated fadeInLeft\">Enviar Pedido</span>\r\n                </div>\r\n              </div>\r\n            </ng-container>\r\n            <ng-template #elseTemplate>\r\n              <div class=\"btn-footer-next transicion\" matRipple (click)=\"prepararEnvio()\"\r\n                [ngClass]=\"{'xdisabled': isDelivery && !isDeliveryValid}\">\r\n                <div>\r\n                  <span class=\"animated fadeInLeft\">Enviar delivery</span>\r\n                </div>\r\n              </div>\r\n            </ng-template>\r\n\r\n\r\n            <!-- cliente delivery -->\r\n            <ng-container *ngIf=\"isDeliveryCliente\">\r\n                <div class=\"btn-footer-next transicion\" matRipple (click)=\"prepararEnvio()\"\r\n                [ngClass]=\"{'xdisabled': !isReadyClienteDelivery}\">\r\n                <div>\r\n                    <span class=\"animated fadeInLeft\">Confirmar</span>\r\n                </div>\r\n                </div>\r\n            </ng-container>\r\n\r\n             <!-- cliente reserva -->\r\n             <ng-container *ngIf=\"isReservaCliente\">\r\n                <div class=\"btn-footer-next transicion\" matRipple (click)=\"prepararEnvio()\"\r\n                [ngClass]=\"{'xdisabled': !isReadyClienteReserva}\">\r\n                <div>\r\n                    <span class=\"animated fadeInLeft\">Enviar Reserva</span>\r\n                </div>\r\n                </div>\r\n            </ng-container>\r\n\r\n        </ng-template>        \r\n\r\n\r\n        \r\n\r\n      </div>\r\n    </div>\r\n</ng-container>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_pedido_pedido_module_ts.js.map