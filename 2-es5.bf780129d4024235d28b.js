function _defineProperties(e,i){for(var t=0;t<i.length;t++){var o=i[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function _createClass(e,i,t){return i&&_defineProperties(e.prototype,i),t&&_defineProperties(e,t),e}function _classCallCheck(e,i){if(!(e instanceof i))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"3ui4":function(e,i,t){"use strict";t.d(i,"a",(function(){return o}));var o=function e(){_classCallCheck(this,e),this.secciones=[]}},"6NNB":function(e,i,t){"use strict";t.d(i,"a",(function(){return o}));var o=function e(){_classCallCheck(this,e),this.tipoconsumo=[]}},Ie24:function(e,i,t){"use strict";t.d(i,"a",(function(){return o}));var o=function e(){_classCallCheck(this,e),this.descuento=null,this.items=[]}},RHa8:function(e,i,t){"use strict";t.d(i,"a",(function(){return n}));var o=t("fXoL"),n=function(){var e=function(){function e(){_classCallCheck(this,e)}return _createClass(e,[{key:"aplicarDescuentoItem",value:function(e,i){var t=parseFloat(e.precio),o=Math.round(t-t*(i/100));e.precio_antes=e.precio,e.precio=o.toString(),e.precio_default=o,e.precio_unitario=o.toString(),e.ispromo_aplica=!0}},{key:"reviewPromoApplyItem",value:function(e,i){if(!i)return null;if(e.ispromo){var t=e.ispromo,o=0;if(t.iditem_subitem){var n=e.subitems_selected.find((function(e){return e.iditem_subitem===t.iditem_subitem}));if(!n||!e.subitems_view)return i;o=parseFloat(n.precio.toString())}if(1===t.is_nxn){var s=parseInt(t.cantidad_x,0),r=parseInt(t.cantidad,0),c=r-s,a=e.cantidad_seleccionada;if(a>=r){var u=parseFloat(t.porc_descuento),d=c*(parseInt((a/r).toString(),0)*(parseFloat(e.precio_unitario)+o)),m=d;i-=m=0===(m*=u/100)?d:m,e.ispromo_aplica=!0}else e.ispromo_aplica=!1}else e.ispromo_aplica=!0}return i}},{key:"resetPrecioDefaultItem",value:function(e){parseFloat(e.precio),e.precio_antes=e.precio,e.precio=e.precio_antes.toString(),e.precio_default=e.precio_antes,e.precio_unitario=e.precio_antes.toString()}}]),e}();return e.\u0275fac=function(i){return new(i||e)},e.\u0275prov=o.Hb({token:e,factory:e.\u0275fac,providedIn:"root"}),e}()},Te6q:function(e,i,t){"use strict";t.d(i,"a",(function(){return o}));var o=function e(){_classCallCheck(this,e),this.precio_total=0,this.precio_antes=null,this.cantidad_seleccionada_x_tpc=0,this.cantidad_descontado=0,this.itemtiposconsumo=[],this.subitems_selected=[],this.subitems_view=[]}},WF5t:function(e,i,t){"use strict";t.d(i,"a",(function(){return r}));var o=t("7RJT"),n=t("zOUh"),s=t("fXoL"),r=function(){var e=function(){function e(i){_classCallCheck(this,e),this.infoToken=i,this.countdownTimerRef=null,this.init=0,this.valPorcentaje=0,this.isPlayTimer=!1,this.dateNow=new Date,this.countdownSource=new o.BehaviorSubject(0),this.countdown$=this.countdownSource.asObservable(),this.isTimeLimitSource=new o.BehaviorSubject(!1),this.isTimeLimitComplet$=this.isTimeLimitSource.asObservable(),this.isPorgressVisibleSource=new o.BehaviorSubject(!1),this.isPorgressVisible$=this.isPorgressVisibleSource.asObservable()}return _createClass(e,[{key:"destroy",value:function(){this.clearTimeout()}},{key:"playCountTimerLimit",value:function(){this.infoToken.isDelivery()||this.infoToken.isReserva()||this.isPlayTimer||(this.isPlayTimer=!0,this.initCount())}},{key:"resetCountTimerLimit",value:function(){this.infoToken.isDelivery()||(localStorage.getItem("sys::tcount")?(this.isPlayTimer=!0,this.initCount()):this.stopCountTimerLimit())}},{key:"initCount",value:function(){this.infoToken.isDelivery()||(this.valPorcentaje=0,this.init=localStorage.getItem("sys::tcount")?parseInt(localStorage.getItem("sys::tcount"),0):0,this.isTimeLimitSource.next(!1),this.isPorgressVisibleSource.next(!0),this.progressCount())}},{key:"progressCount",value:function(){var e=this,i=0;this.isPlayTimer&&(this.countdownTimerRef=setTimeout((function(){e.init=e.setTimeDate(),e.valPorcentaje=Math.round(e.init/e.maxTime*100),localStorage.setItem("sys::tcount",e.init.toString()),e.init>e.maxTime?(e.init=e.maxTime,e.valPorcentaje=100,e.countdownSource.next(e.valPorcentaje),e.isTimeLimitSource.next(!0),e.stopCountTimerLimit()):(i!==e.valPorcentaje&&e.countdownSource.next(e.valPorcentaje),e.progressCount()),i=e.valPorcentaje}),1e3))}},{key:"setTimeDate",value:function(){var e=(new Date).getTime(),i=localStorage.getItem("sys::tnum")?parseInt(localStorage.getItem("sys::tnum"),0):e,t=Math.floor((e-i)/1e3);return localStorage.setItem("sys::tnum",i.toString()),t}},{key:"stopCountTimerLimit",value:function(){this.isPlayTimer=!1,this.init=0,this.valPorcentaje=0,localStorage.removeItem("sys::tcount"),localStorage.removeItem("sys::tnum"),this.clearTimeout(),this.isPorgressVisibleSource.next(!1),this.isTimeLimitSource.next(!1)}},{key:"clearTimeout",value:function(e){function i(){return e.apply(this,arguments)}return i.toString=function(){return e.toString()},i}((function(){this.countdownTimerRef&&(clearTimeout(this.countdownTimerRef),this.countdownTimerRef=null)}))}]),e}();return e.\u0275fac=function(i){return new(i||e)(s.Vb(n.a))},e.\u0275prov=s.Hb({token:e,factory:e.\u0275fac,providedIn:"root"}),e}()},fbMX:function(e,i,t){"use strict";t.d(i,"a",(function(){return n}));var o=t("fXoL"),n=function(){var e=function(){function e(){_classCallCheck(this,e)}return _createClass(e,[{key:"set",value:function(e,i){localStorage.setItem(e,i)}},{key:"get",value:function(e){return localStorage.getItem(e)}},{key:"isExistKey",value:function(e){return!!localStorage.getItem(e)}},{key:"clear",value:function(e){localStorage.removeItem(e)}}]),e}();return e.\u0275fac=function(i){return new(i||e)},e.\u0275prov=o.Hb({token:e,factory:e.\u0275fac,providedIn:"root"}),e}()},nx09:function(e,i,t){"use strict";t.d(i,"a",(function(){return P}));var o,n=t("7RJT"),s=t("Te6q"),r=t("6NNB"),c=function e(){_classCallCheck(this,e)},a=t("Ie24"),u=t("3ui4"),d=t("fbMX"),m=t("yFR0"),l=t("WF5t"),p=t("/sn2"),f=t("wne+"),v=t("eI2u"),h=function e(){_classCallCheck(this,e),this.isTpcLocal=!1,this.isTpcSoloLLevar=!1,this.isTpcSoloDelivery=!1,this.isTpcSoloOther=!1,this.isRequiereMesa=!1},S=function e(){_classCallCheck(this,e)},_=t("JOr0"),b=t("+lji"),g=t("zOUh"),y=t("RHa8"),C=t("fXoL"),I=t("dNgK"),P=((o=function(){function e(i,t,o,c,u,d,m,l,p,f,v){_classCallCheck(this,e),this.storageService=i,this.socketService=t,this.timerLimitService=o,this.navigatorService=c,this._snackBar=u,this.utilesService=d,this.listenStatusService=m,this.establecimientoService=l,this.crudService=p,this.infoTokenService=f,this.cocinarDescuentosPromoService=v,this.miPedidoSource=new n.BehaviorSubject(new r.a),this.miPedidoObserver$=this.miPedidoSource.asObservable(),this.countItemsSource=new n.BehaviorSubject(0),this.countItemsObserve$=this.countItemsSource.asObservable(),this.itemStockChangeSource=new n.BehaviorSubject(new s.a),this.itemStockChangeObserve$=this.itemStockChangeSource.asObservable(),this.isPreAvisoVisible=!1,this.listItemsPedido=[],this.miPedido=new r.a,this.mpObjNewItemTiposConsumo=[],this.mpObjSeccionSelected=new a.a,this.time=new Date,this.pwa_delivery_servicio_propio=!1,this.deliveryCanItemsInOrder=0,this.deliveryArrConstantes={cantItemsScala:0,costoScala:0}}return _createClass(e,[{key:"setObjMiPedido",value:function(e){this.miPedido=e,this.miPedidoSource.next(this.miPedido)}},{key:"resetObjMiPedido",value:function(){this.miPedido=new r.a,this.miPedidoSource.next(this.miPedido)}},{key:"setObjCarta",value:function(e){this.objCarta={},this.objCarta={carta:null,bodega:null,promociones:null,recomendados:null},this.objCarta.carta=e[0].carta,this.objCarta.bodega=e[0].bodega,this.objCarta.promociones=e[0].promociones;var i=this.objCarta.carta,t=this.objCarta.bodega;if(t){if(!this.objCarta.carta){var o=new c;return o.des="Productos",o.detalle="",o.hora_fin="",o.hora_ini="",o.idcarta=0,o.idcategoria=0,o.secciones=[],(i=[]).push(o),i.map((function(e){t.map((function(i){e.secciones.push(i)}))})),void(this.objCarta.carta=i)}i.map((function(e){t.map((function(i){e.secciones.push(i)}))}))}var n=[];i.map((function(e){e.secciones.map((function(e){var i=e.items.filter((function(e){return"1"===e.is_recomendacion}));i&&i.map((function(e){return n.push(e)}))}))})),n.length>0&&(this.objCarta.recomendados=n)}},{key:"getObjCarta",value:function(){return this.objCarta}},{key:"getObjCartaLibery",value:function(){return JSON.parse(JSON.stringify(this.objCarta))}},{key:"setObjCartaDescuentos",value:function(e){var i=this;if(this.infoTokenService.infoUsToken.isHayDescuento=!1,0!==e.length&&(1!==e[0].solo_app||this.infoTokenService.infoUsToken.isCliente)){this.infoTokenService.infoUsToken.isHayDescuento=!0;var t=0;e.map((function(e){switch(e.tipo){case 0:i.objCarta.carta.map((function(o){o.secciones.map((function(o){var n=o.items.filter((function(i){return i.iditem.toString()===e.id}))[0];if(n)return t=e.porcentaje,n.iddescuento=e.idsede_descuento,i.aplicarDescuentoImte(n,t),!1}))}));break;case 1:t=e.porcentaje,i.objCarta.carta.map((function(o){o.secciones.map((function(o){o.idseccion.toString()===e.id&&(o.descuento=t+"%",o.iddescuento=e.idsede_descuento,o.items.map((function(e){i.aplicarDescuentoImte(e,t)})))}))}));break;case 2:t=e.porcentaje,i.objCarta.bodega.map((function(o){var n=o.items.filter((function(i){return i.iditem.toString()===e.id}))[0];if(n)return t=e.porcentaje,n.iddescuento=e.idsede_descuento,i.aplicarDescuentoImte(n,t),!1}));break;case 3:t=e.porcentaje,i.objCarta.bodega.map((function(o){o.idseccion.toString()===e.id&&(o.descuento=t+"%",o.iddescuento=e.idsede_descuento,o.items.map((function(e){i.aplicarDescuentoImte(e,t)})))}))}}))}}},{key:"aplicarDescuentoImte",value:function(e,i){var t=parseFloat(e.precio),o=Math.round(t-t*(i/100));e.precio_antes=e.precio,e.precio=o.toString(),e.precio_default=o,e.precio_unitario=o.toString()}},{key:"getIdsDescuentos",value:function(){var e,i=[];return this.miPedido.tipoconsumo.map((function(t){t.secciones.map((function(t){(e=t.iddescuento)&&(i.filter((function(i){return i.id===e}))[0]||i.push({id:e})),t.items.map((function(o){(e=t.iddescuento)&&(i.filter((function(i){return i.id===e}))[0]||i.push({id:e}))}))}))})),i}},{key:"getMiPedido",value:function(){return 0===this.miPedido.tipoconsumo.length&&this.storageService.isExistKey("sys::order::all")&&(this.miPedido=JSON.parse(atob(this.storageService.get("sys::order::all")))),this.miPedido}},{key:"setobjItemTipoConsumoSelected",value:function(e){this.mpObjItemTipoConsumoSelected=e}},{key:"setObjNewItemTiposConsumo",value:function(e){this.mpObjNewItemTiposConsumo=e}},{key:"getObjNewItemTiposConsumo",value:function(){return this.mpObjNewItemTiposConsumo}},{key:"setObjSeccionSeleced",value:function(e){this.mpObjSeccionSelected=new a.a,this.mpObjSeccionSelected.des=e.des,this.mpObjSeccionSelected.idimpresora=e.idimpresora,this.mpObjSeccionSelected.idimpresora_otro=e.idimpresora_otro,this.mpObjSeccionSelected.idseccion=e.idseccion,this.mpObjSeccionSelected.sec_orden=e.sec_orden,this.mpObjSeccionSelected.ver_stock_cero=e.ver_stock_cero,this.mpObjSeccionSelected.iddescuento=e.iddescuento,this.mpObjSeccionSelected.descuento=e.descuento}},{key:"getObjSeccionSeleced",value:function(){return this.mpObjSeccionSelected}},{key:"getDeliveryConstCantEscala",value:function(){var e=this,i=localStorage.getItem("sys::ICS");i?this.deliveryArrConstantes=JSON.parse(atob(i)):this.crudService.getAll("pedido","get-const-delivery-items-escala",!1,!1,!1).subscribe((function(i){e.deliveryArrConstantes={cantItemsScala:i.data[0].value,costoScala:i.data[1].value},localStorage.setItem("sys::ICS",btoa(JSON.stringify(e.deliveryArrConstantes)))}))}},{key:"addItem2",value:function(e,i){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,n=parseInt(i.cantidad.toString(),0),s=0===t;if(!(n<=0&&s)){var r=e.cantidad_seleccionada||0;if(!((r+=s?1:-1)<0)){"ND"!==i.isporcion&&(r=r<0?0:r,n=(n+=s?-1:1)<0||r<0?0:n),r=r<0?0:r,e.cantidad_seleccionada=r;var c=JSON.parse(JSON.stringify(e)),a=this.findItemMiPedido(c,this.mpObjSeccionSelected,i,s);a.cantidad=n,o&&(i=this.findItemCarta(i)),i.sumar=s,i.subitems_selected=a.subitems_selected,i.subitems_view=a.subitems_view;var u=this.findItemListPedido(i),d=1;u?(u.itemtiposconsumo||(u.itemtiposconsumo=this.mpObjItemTipoConsumoSelected),d=this.totalItemTpcSelected(u.itemtiposconsumo)||0,u.cantidad_seleccionada=d,u.subitems_selected=a.subitems_selected,u.subitems_view=0===d?[]:a.subitems_view):this.listItemsPedido.push(i),i.cantidad_seleccionada=d,this.itemStockChangeSource.next(i),this.setLocalStorageHora(),this.setLocalStoragePedido(),this.socketService.emit("itemModificado",i),this.listenStatusService.setHayPedidoPendiente(!0)}}}},{key:"totalItemTpcSelected",value:function(e){return e.map((function(e){return e.cantidad_seleccionada||0})).reduce((function(e,i){return e+i}),0)}},{key:"addCantItemMiPedido",value:function(e,i){var t=i,o=t*parseFloat(e.precio_unitario);o+=e.subitems_view?e.subitems_view.map((function(e){return e.precio})).reduce((function(e,i){return e+i}),0):0,e.cantidad_seleccionada=t,e.ispromo&&(o=this.cocinarDescuentosPromoService.reviewPromoApplyItem(e,o)||o),e.precio_total=o,e.precio_print=o}},{key:"addPrecioItemMiPedido",value:function(e){var i=e.subitems_view?e.subitems_view.map((function(e){return e.precio})).reduce((function(e,i){return e+i}),0):0,t=e.cantidad_seleccionada*parseFloat(e.precio_unitario);t+=i,e.ispromo&&(t=this.cocinarDescuentosPromoService.reviewPromoApplyItem(e,t)||t),e.precio_total=t,e.precio_print=t}},{key:"addItemSubItemMiPedido",value:function(e,i,t,o){var n=this;if(e.subitems){if(0===e.subitems.length)return;var s=new S;if(s.id="",s.des="",s.listDes=[],s.cantidad_seleccionada=0,s.precio=0,s.indicaciones="",s.subitems=[],e.subitems_selected&&e.subitems_selected.length>0){e.subitems_selected.map((function(e){s.id+=e.iditem_subitem.toString(),s.listDes.push(n.utilesService.primeraConMayusculas(e.des.toLowerCase())),s.cantidad_seleccionada=1,s.precio+=parseFloat(e.precio.toString()),s.subitems.push(e),s.idtipo_consumo=e.idtipo_consumo})),s.des=s.listDes.join(", "),s.des+=void 0===e.indicaciones||""===e.indicaciones?"":", ("+e.indicaciones+")",e.indicaciones="",e.subitems_view=e.subitems_view?e.subitems_view:[],e.subitems_view.filter((function(e){return e.idtipo_consumo===o.idtipo_consumo}))[0]||(e.subitems_view=[]);var r=e.subitems_view.filter((function(e){return e.id===s.id}))[0];r?t?(r.indicaciones+=s.indicaciones,r.cantidad_seleccionada+=1,r.precio+=s.precio,r.des=s.des):this.restarCantSubItemView(e,r):t?e.subitems_view.push(s):this.restarCantSubItemView(e,null),this.addPrecioItemMiPedido(e)}else if(!t){if(!(null==e?void 0:e.subitems_view))return;if(0===(null==e?void 0:e.subitems_view.length))return;this.restarCantSubItemView(e,null)}}}},{key:"restarCantSubItemView",value:function(e){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(i){var t=i.precio/i.cantidad_seleccionada;i.cantidad_seleccionada-=1,i.precio-=t,i.precio=i.precio<0?0:i.precio,i.cantidad_seleccionada<=0&&(e.subitems_view=e.subitems_view.filter((function(e){return e.cantidad_seleccionada>0})))}else{var o=e.subitems_view[e.subitems_view.length-1],n=o.precio/o.cantidad_seleccionada;o.cantidad_seleccionada--,o.precio-=n,o.cantidad_seleccionada<=0&&(e.subitems_view=e.subitems_view.filter((function(e){return e.cantidad_seleccionada>0}))),e.subitems_selected=o.subitems}}},{key:"addItemInCarta",value:function(e){var i=this.findItemCarta(e);i?i.cantidad=i.cantidad:this.objCarta.carta.map((function(i){i.secciones.filter((function(i){return i.idseccion===e.idseccion})).map((function(i){i.items.push(e)}))}))}},{key:"findItemFromArr",value:function(e,i){return e.filter((function(e){return e.iditem===i.iditem}))[0]}},{key:"findItemListPedido",value:function(e){return this.listItemsPedido.filter((function(i){return i.iditem===e.iditem}))[0]}},{key:"findItemCartaAndClearIndicaciones",value:function(){this.objCarta.carta.map((function(e){e.secciones.map((function(e){e.items.map((function(e){return e.is_visible_control_last_add=!1})),e.items.filter((function(e){return e.indicaciones})).map((function(e){return e.indicaciones=""})),e.items.filter((function(e){return e.subitems_selected})).map((function(e){return e.subitems_selected=null})),e.items.filter((function(e){return e.subitems_view})).map((function(e){return e.subitems_view=null}))}))}))}},{key:"findItemCarta",value:function(e){var i;return this.objCarta.carta.map((function(t){t.secciones.map((function(t){var o=t.items.filter((function(i){return i.idcarta_lista.toString()===e.idcarta_lista.toString()}))[0];if(o)return i=o}))})),i}},{key:"findItemCartaByIdCartaLista",value:function(e){var i;return this.objCarta.carta.map((function(t){t.secciones.map((function(t){var o=t.items.filter((function(i){return i.idcarta_lista.toString()===e.toString()}))[0];if(o)return i=o}))})),i}},{key:"findSubItemCartaById",value:function(e,i){var t=[];return this.objCarta.carta.map((function(o){o.secciones.map((function(o){o.items.filter((function(e){return e.iditem.toString()!==i})).filter((function(e){return e.subitems})).map((function(i){i.subitems.map((function(i){var o=i.opciones.filter((function(i){return i.idproducto.toString()+i.idporcion.toString()===e}))[0];o&&t.push(o)}))}))}))})),t}},{key:"resetCantidadesTpcItemCarta",value:function(){this.objCarta&&this.objCarta.carta&&this.objCarta.carta.map((function(e){e.secciones.map((function(e){e.items.map((function(e){e.indicaciones="",e.cantidad_seleccionada=0,e.itemtiposconsumo=null}))}))}))}},{key:"findItemSeccionCarta",value:function(e){var i;return this.objCarta.carta.map((function(t){var o=t.secciones.filter((function(i){return i.idseccion===e}))[0];o&&(i=o)})),i}},{key:"findOnlyItemMiPedido",value:function(e){return this.miPedido.tipoconsumo.map((function(i){return i.secciones.map((function(i){return i.items.find((function(i){return i.idcarta_lista.toString()===e.idcarta_lista.toString()}))}))}))[0].find((function(e){return e}))}},{key:"findItemMiPedido",value:function(e,i,t,o){var n,s=JSON.parse(JSON.stringify(t)),r=e.cantidad_seleccionada;s.itemtiposconsumo=[],this.addCantItemMiPedido(s,r);var c=this.miPedido.tipoconsumo.filter((function(i){return i.idtipo_consumo.toString()===e.idtipo_consumo.toString()}))[0];if(c){var a=c.secciones.filter((function(e){return e.idseccion===i.idseccion}))[0];if(a){var u=a.items.filter((function(e){return e.idcarta_lista.toString()===t.idcarta_lista.toString()}))[0];u?(u.indicaciones=s.indicaciones,this.addCantItemMiPedido(u,r),n=s=u):(a.items.push(s),n=s),s.subitems=t.subitems,s.subitems_selected=t.subitems_selected,this.addItemSubItemMiPedido(s,t,o,e),this.setCountCantItemTpcAndSeccion(c,a)}else{n=s;var d=JSON.parse(JSON.stringify(i));d.items=[],d.items.push(s),c.secciones=c.secciones?c.secciones:[],c.secciones.push(d),this.addItemSubItemMiPedido(s,t,o,e),this.setCountCantItemTpcAndSeccion(c,d)}}else{s.subitems=t.subitems,s.subitems_selected=t.subitems_selected,this.addItemSubItemMiPedido(s,t,o,e);var m=JSON.parse(JSON.stringify(i));m.items=[],m.items.push(s),e.secciones=e.secciones?e.secciones:[],e.secciones.push(m),this.miPedido.tipoconsumo.push(e),this.setCountCantItemTpcAndSeccion(e,m),n=s}return this.clearObjMiPedido(),n}},{key:"quitarTpcMiPedido",value:function(e){1===e.count_items_seccion&&(this.miPedido.tipoconsumo=this.miPedido.tipoconsumo.filter((function(i){return!e})))}},{key:"quitarSeccionMiPedido",value:function(e){1===e.count_items&&this.miPedido.tipoconsumo.map((function(i){i.secciones.filter((function(i){return!e}))}))}},{key:"findMiPedidoIsTPCLocal",value:function(){var e=!1;return this.miPedido.tipoconsumo.filter((function(e){return"LOCAL"===e.titulo})).map((function(i){e=!!i.secciones.filter((function(e){return e.count_items>0}))[0]})),e}},{key:"findMiPedidoIsTPCDelivery",value:function(){var e=!1;return this.miPedido.tipoconsumo.filter((function(e){return"DELIVERY"===e.descripcion.toUpperCase()})).map((function(i){e=!!i.secciones.filter((function(e){return e.count_items>0}))[0]})),e}},{key:"findMiPedidoIsTPCLLevar",value:function(){var e=!1;return this.miPedido.tipoconsumo.filter((function(e){return e.descripcion.toUpperCase().indexOf("LLEVAR")})).map((function(i){e=!!i.secciones.filter((function(e){return e.count_items>0}))[0]})),e}},{key:"findEvaluateTPCMiPedido",value:function(){var e=new h,i=0;return this.miPedido.tipoconsumo.filter((function(e){return e.count_items_seccion>0})).map((function(t){"LOCAL"===t.titulo&&(e.isTpcLocal=!0,i++),t.descripcion.toUpperCase().indexOf("LLEVAR")>-1&&(e.isTpcSoloLLevar=!0,i++),t.descripcion.toUpperCase().indexOf("DELIVERY")>-1&&(e.isTpcSoloDelivery=!0),e.isRequiereMesa=!!e.isTpcLocal,e.isTpcSoloLLevar=!(1!==i||!e.isTpcSoloLLevar)})),e}},{key:"findSeccionInMipedidoByPrint",value:function(e){var i;return this.miPedido.tipoconsumo.map((function(t){i=t.secciones.filter((function(i){return i.idimpresora===e}))})),i}},{key:"findIsHayItems",value:function(){return this.setCountTotalImtesPedido()>0}},{key:"clearObjMiPedido",value:function(){if(this.miPedido.tipoconsumo=this.miPedido.tipoconsumo.filter((function(e){return e.count_items_seccion>0})),0===this.miPedido.tipoconsumo.length)return this.miPedido=new r.a,void this.miPedidoSource.next(this.miPedido);this.miPedido.tipoconsumo=this.miPedido.tipoconsumo.map((function(e){return e.secciones=e.secciones.filter((function(e){return e.count_items>0})),e})),this.miPedido.tipoconsumo=this.miPedido.tipoconsumo.map((function(e){return e.secciones=e.secciones.map((function(e){return e.items=e.items.filter((function(e){return e.cantidad_seleccionada>0})),e})),e})),this.miPedidoSource.next(this.miPedido)}},{key:"setCountCantItemTpcAndSeccion",value:function(e,i){var t=i.items.map((function(e){return e.cantidad_seleccionada})).reduce((function(e,i){return e+i}),0);i.count_items=t;var o=e.secciones.map((function(e){return e.count_items})).reduce((function(e,i){return e+i}),0);e.count_items_seccion=o,this.setCountTotalImtesPedido()}},{key:"setCountTotalImtesPedido",value:function(){var e=this.miPedido.tipoconsumo.map((function(e){return e.count_items_seccion})).reduce((function(e,i){return e+i}),0);return this.countItemsSource.next(e),e}},{key:"setLocalStorageHora",value:function(){if(!this.storageService.isExistKey("sys::h")){var e="".concat(this.time.getHours(),":").concat(this.time.getMinutes(),":").concat(this.time.getSeconds());this.storageService.set("sys::h",e.toString())}}},{key:"setLocalStoragePedido",value:function(){this.storageService.set("sys::order",btoa(JSON.stringify(this.listItemsPedido))),this.storageService.set("sys::order::all",btoa(JSON.stringify(this.miPedido)))}},{key:"clearPedidoIsLimitTime",value:function(){this.storageService.isExistKey("sys::order")&&(this.listItemsPedido=JSON.parse(atob(this.storageService.get("sys::order"))),this.miPedido=JSON.parse(atob(this.storageService.get("sys::order::all"))))}},{key:"resetAllNewPedido",value:function(){this.socketService.emit("resetPedido",this.listItemsPedido),this.prepareNewPedido()}},{key:"prepareNewPedido",value:function(){this.resetTpcCarta(),this.storageService.clear("sys::h"),this.storageService.clear("sys::order"),this.storageService.clear("sys::order::all"),this.storageService.clear("sys::tcount"),this.storageService.clear("sys::tnum"),this.storageService.clear("sys::mps"),this.miPedido=null,this.miPedido=new r.a,this.miPedidoSource.next(this.miPedido),this.countItemsSource.next(0),this.listenStatusService.setHayPedidoPendiente(!1),this.stopTimerLimit()}},{key:"getOnlyCarta",value:function(){this.socketService.emit("getOnlyCarta",null)}},{key:"resetTpcCarta",value:function(){var e=this;try{this.listItemsPedido.map((function(i){if(i.indicaciones="",i.itemtiposconsumo){i.itemtiposconsumo=null;var t=e.findItemCarta(i);t.indicaciones="",t.cantidad_seleccionada=0,t.itemtiposconsumo=null,t.is_visible_control_last_add=!1}}))}catch(i){}this.resetCantidadesTpcItemCarta(),this.listItemsPedido=[]}},{key:"updatePedidoFromStrorage",value:function(){var e=this;this.listenStatusService.setHayPedidoPendiente(!1),this.storageService.isExistKey("sys::order")&&(this.listenStatusService.setHayPedidoPendiente(!0),this.listItemsPedido=JSON.parse(atob(this.storageService.get("sys::order"))),this.miPedido=JSON.parse(atob(this.storageService.get("sys::order::all"))),this.setCountTotalImtesPedido(),this.miPedidoSource.next(this.miPedido),this.listItemsPedido.map((function(i){e.objCarta.carta.map((function(e){e.secciones.map((function(e){var t=e.items.filter((function(e){return e.idcarta_lista.toString()===i.idcarta_lista.toString()}))[0];t&&(t.cantidad_seleccionada=i.cantidad_seleccionada,t.itemtiposconsumo=i.itemtiposconsumo)}))}))})))}},{key:"updatePedidoFromClear",value:function(){var e=this;this.listItemsPedido&&(this.listItemsPedido.map((function(i){0===i.isalmacen&&e.objCarta.carta.map((function(e){e.secciones.map((function(e){var t=e.items.filter((function(e){return"ND"!==e.isporcion&&e.idcarta_lista.toString()===i.idcarta_lista.toString()}))[0];t&&(t.cantidad=parseInt(t.cantidad.toString(),0)+i.cantidad_seleccionada)}))}))})),this.prepareNewPedido())}},{key:"getEstadoStockItem",value:function(e){return e>10?"verde":e>5?"amarillo":"rojo"}},{key:"validarReglasCarta",value:function(e){var i=this,t=0,o=0,n=0,s=0,r=0,c=0,a=0;this.miPedido.tipoconsumo.map((function(e){e.secciones.map((function(e){e.items.map((function(e){return e.precio_total_calc=null}))}))})),e.map((function(e){t=e.idseccion,o=e.idseccion_detalle,n=i.countCantItemsFromSeccion(t),s=i.countCantItemsFromSeccion(o),r=(r=n-s)<0?n:r,i.miPedido.tipoconsumo.map((function(e){e.secciones.filter((function(e){return e.idseccion.toString()===o.toString()})).map((function(e){e.items.map((function(e,i){var t=parseFloat(e.precio),o=e.cantidad_seleccionada;a=null!==e.precio_total_calc?e.precio_total_calc:e.precio_total,c=a,n>=s?c=0:r>0&&(c=(c=a-(c=r*t))<0?0:c,r=r-o<0?0:r-o),e.precio_total_calc=parseFloat(c.toString()),e.precio_print=parseFloat(c.toString()),e.cantidad_descontado=o}))}))}))}))}},{key:"countCantItemsFromSeccion",value:function(e){var i=0;return this.miPedido.tipoconsumo.map((function(t){t.secciones.map((function(t){i+=t.items.filter((function(i){return i.idseccion.toString()===e.toString()})).map((function(e){return e.cantidad_seleccionada})).reduce((function(e,i){return e+i}),0)}))})),i}},{key:"countCantItemsFromTpcSeccion",value:function(e,i){var t=0;return this.miPedido.tipoconsumo.filter((function(i){return i.idtipo_consumo.toString()===e.toString()})).map((function(e){e.secciones.map((function(e){t+=e.items.filter((function(e){return e.idseccion.toString()===i.toString()})).map((function(e){return e.cantidad_seleccionada})).reduce((function(e,i){return e+i}),0)}))})),t}},{key:"countCantItemsFromTpc",value:function(e){var i=0;return this.miPedido.tipoconsumo.filter((function(i){return i.idtipo_consumo.toString()===e.toString()})).map((function(e){e.secciones.map((function(e){i+=e.items.map((function(e){return e.cantidad_seleccionada})).reduce((function(e,i){return e+i}),0)}))})),i}},{key:"countCantItemsFromTpcDes",value:function(e){var i=0;return this.miPedido.tipoconsumo.filter((function(i){return i.descripcion.toLowerCase()===e.toLowerCase()})).map((function(e){e.secciones.map((function(e){i+=e.items.map((function(e){return e.cantidad_seleccionada})).reduce((function(e,i){return e+i}),0)}))})),i}},{key:"getArrSubTotales",value:function(e){var i=this,t=this.getSubTotalMiPedido(),o=1===this.establecimientoService.establecimiento.pwa_delivery_hablitar_calc_costo_servicio,n=1===this.establecimientoService.establecimiento.pwa_delivery_habilitar_calc_costo_servicio_solo_app,s=this.establecimientoService.establecimiento.pwa_delivery_comision_fija_no_afiliado,r=1===this.establecimientoService.establecimiento.pwa_delivery_comercio_paga_entrega;this.pwa_delivery_servicio_propio=1===this.establecimientoService.establecimiento.pwa_delivery_servicio_propio;var c=!this.infoTokenService.infoUsToken.idusuario;c&&(o=o||n);var a=t,u=[],d={id:0,descripcion:"SUB TOTAL",esImpuesto:0,visible:!0,quitar:!1,tachado:!1,visible_cpe:!0};d.importe=parseFloat(t.toString()).toFixed(2),u.push(d);var m=[];e.filter((function(e){return"p"===e.tipo})).map((function(e){var i=e.monto/100,o=1===e.es_impuesto,n=0===e.activo,s=(t*i).toFixed(2),r={};r.id=e.tipo+e.id,r.descripcion=e.descripcion,r.esImpuesto=e.es_impuesto,r.visible=!0,r.quitar=!1,r.tachado=!1,r.visible_cpe=o,"I.G.V"===r.descripcion?(r.importe=n?i:0,m.push(r)):(r.importe=o?n?s:0:s,r.importe=parseFloat(r.importe.toString()).toFixed(2),a+=parseFloat(r.importe)),0!==r.importe&&m.push(r)}));var l=0,p=[],f=e.filter((function(e){return"a"===e.tipo})),v=!1,h=this.countCantItemsFromTpcDes("delivery")+this.countCantItemsFromTpcDes("entrega")+this.countCantItemsFromTpcDes("cantidad");if(v=h>0,l=this.establecimientoService.get().c_servicio||this.establecimientoService.get().c_minimo,f.map((function(e){var t={};if((e.descripcion.toUpperCase().indexOf("DELIVERY")>-1||e.descripcion.toUpperCase().indexOf("ENTREGA")>-1)&&c){if(e.descripcion="Entrega",!i.pwa_delivery_servicio_propio||o){v=!0,l=i.establecimientoService.get().c_servicio||i.establecimientoService.get().c_minimo;var n=i.countCantItemsFromTpc(e.idtipo_consumo);return void(c=n>0)}l=parseFloat(e.monto)}else l=parseFloat(e.monto);if(0!==i.countCantItemsFromTpc(e.idtipo_consumo)){if(0===e.nivel){var s=i.countCantItemsFromTpcSeccion(e.idtipo_consumo,e.idseccion);if(0===s)return;var r=i.calcCostoCantItemsDelivery();l=s*parseFloat(e.monto)+r}t.id=e.tipo+e.id,t.descripcion=e.descripcion,t.esImpuesto=e.es_impuesto,t.visible=!0,t.quitar=!0,t.tachado=!1,t.visible_cpe=!1,t.importe=parseFloat(l.toString()).toFixed(2),a+=parseFloat(t.importe);var u=p.filter((function(e){return e.descripcion===t.descripcion}))[0];u?u.importe=parseFloat(u.importe)+parseFloat(t.importe):p.push(t)}})),v){var S={},_=this.calcCostoCantItemsDelivery()+(this.establecimientoService.get().c_servicio||this.establecimientoService.get().c_minimo)+s;this.establecimientoService.setCostoSercioDelivery(_),!r&&o&&(S.id=-2,S.descripcion="Entrega",S.isDeliveryApp=!0,S.esImpuesto=0,S.visible=!0,S.quitar=!0,S.tachado=!1,S.visible_cpe=!1,S.importe=parseFloat(_.toString()).toFixed(2),a+=parseFloat(S.importe),p.push(S))}m.map((function(e){return u.push(e)})),p.map((function(e){return u.push(e)}));var b=u.filter((function(e){return"SUB TOTAL"===e.descripcion}))[0],g=u.filter((function(e){return"I.G.V"===e.descripcion}))[0],y=g?g.importe:0,C=b?b.importe:0;return y>0&&(C-=y=parseFloat((C*y).toString()).toFixed(2),g.importe=y,b.importe=C.toFixed(2)),(d={}).id=0,d.esImpuesto=0,d.descripcion="TOTAL",d.visible=!0,d.quitar=!1,d.tachado=!1,d.visible_cpe=!0,d.importe=parseFloat(a.toString()).toFixed(2),u.push(d),u}},{key:"calcCostoCantItemsDelivery",value:function(){var e=0,i=parseInt(this.deliveryArrConstantes.cantItemsScala.toString(),0);if(0===i)return 0;if(this.deliveryCanItemsInOrder>i){var t=this.deliveryCanItemsInOrder/i;t>1&&(e=Math.floor(t)*this.deliveryArrConstantes.costoScala)}else e=0;return e}},{key:"getSubTotalMiPedido",value:function(){var e=0,i=0;return this.miPedido.tipoconsumo.map((function(t){t.secciones.map((function(t){e+=t.items.map((function(e){return i+=e.cantidad_seleccionada,e.precio_print})).reduce((function(e,i){return e+i}),0)}))})),this.deliveryCanItemsInOrder=i,e}},{key:"getImporteTotalItemFromMiPedido",value:function(e){var i=0;return this.miPedido.tipoconsumo.map((function(t){t.secciones.map((function(t){i+=t.items.filter((function(i){return i.iditem===e.iditem})).map((function(e){return e.precio_print})).reduce((function(e,i){return e+i}),0)}))})),i}},{key:"playTimerLimit",value:function(){this.timerLimitService.playCountTimerLimit()}},{key:"stopTimerLimit",value:function(){this.timerLimitService.resetCountTimerLimit()}},{key:"restoreTimerLimit",value:function(){this.timerLimitService.resetCountTimerLimit()}},{key:"listenChangeCantItem",value:function(){var e=this;this.socketService.onItemModificado().subscribe((function(i){var t;if(null!=i.listItemPorcion)i.listItemPorcion.map((function(o){t=e.findItemCartaByIdCartaLista(o.idcarta_lista);var n=parseInt(o.cantidad,0);t.cantidad=n||parseInt(i.item.cantidad.toString(),0),e.setCantidadItemModificadoPwa(i.item,t,parseInt(o.cantidad,0),!0)}));else{if(!i.item)return;t=e.findItemCarta(i=i.item),e.setCantidadItemModificadoPwa(i,t)}})),this.socketService.onItemResetCant().subscribe((function(i){var t;null!=i.listItemPorcion?i.listItemPorcion.map((function(o){(t=e.findItemCartaByIdCartaLista(o.idcarta_lista)).cantidad=parseInt(o.cantidad,0),e.setCantidadItemModificadoPwa(i.item,t,parseInt(o.cantidad,0),!0),e.itemStockChangeSource.next(t)})):((t=e.findItemCarta(i=i.item)).cantidad=parseInt(i.cantidad.toString(),0),t.subitems=i.subitems,e.itemStockChangeSource.next(t))})),this.socketService.onNuevoItemAddInCarta().subscribe((function(i){e.addItemInCarta(i)})),this.socketService.onGetDatosSede().subscribe((function(i){e.objDatosSede=i[0],e.objDatosSede.datossede[0].longitude=parseFloat(e.objDatosSede.datossede[0].longitude),e.objDatosSede.datossede[0].latitude=parseFloat(e.objDatosSede.datossede[0].latitude),e.listenStatusService.setHayDatosSede(!0),localStorage.setItem("sys::s",e.objDatosSede.datossede[0].nombre+"|"+e.objDatosSede.datossede[0].ciudad),e.establecimientoService.setImpresoras(e.objDatosSede.impresoras),e.max_minute_order=i[0].datossede[0].pwa_time_limit,e.pwa_delivery_servicio_propio=0!==i[0].datossede[0].pwa_delivery_servicio_propio,e.timerLimitService.maxTime=100*e.max_minute_order})),this.timerLimitService.countdown$.subscribe((function(i){switch(i){case 1:e.isPreAvisoVisible=!1;break;case 80:e.isPreAvisoVisible||(e.isPreAvisoVisible=!0,e._snackBar.open("Proximo a cumplir el tiempo de envio.","",{duration:2e3}));break;case 100:e._snackBar.open("Tiempo agotado, debe realizar un nuevo pedido.","",{duration:3e3})}})),this.timerLimitService.isTimeLimitComplet$.subscribe((function(i){!0===i&&(e.resetAllNewPedido(),e.navigatorService.setPageActive("carta"))}))}},{key:"setCantidadItemModificadoPwa",value:function(e,i){var t=this,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,n=arguments.length>3&&void 0!==arguments[3]&&arguments[3];e.subitems&&e.idcarta_lista===i.idcarta_lista&&(e.subitems||(e.subitems=[]),e.subitems.map((function(o){o.opciones.map((function(o){i.subitems&&(null==i||i.subitems.map((function(i){var n=i.opciones.filter((function(e){return e.iditem_subitem===parseInt(o.iditem_subitem.toString(),0)}))[0];if(n&&"ND"!==n.cantidad){n.cantidad=o.cantidad;var s=n.idproducto.toString()+n.idporcion.toString();t.findSubItemCartaById(s,e.iditem.toString()).map((function(e){e.cantidad=o.cantidad}))}})))}))}))),n||(i.cantidad=o||parseInt(e.cantidad.toString(),0)),this.itemStockChangeSource.next(i)}},{key:"darFormatoPedido",value:function(e){var i=new r.a,t=[];return e.data.map((function(e){var i=t.filter((function(i){return i.idtipo_consumo===e.idtipo_consumo}))[0];i||((i=new u.a).descripcion=e.des_tp,i.idtipo_consumo=parseInt(e.idtipo_consumo,0),t.push(i))})),t.map((function(i){e.data.filter((function(e){return e.idtipo_consumo===i.idtipo_consumo})).map((function(e,t){var o=i.secciones.filter((function(i){return i.idseccion.toString()===e.idseccion.toString()}))[0];o||((o=new a.a).idseccion=e.idseccion.toString(),o.des=e.des_seccion,o.sec_orden=e.sec_orden,o.ver_stock_cero=0,i.count_items_seccion=t+1,i.secciones.push(o))}))})),t.map((function(i){i.secciones.map((function(t){e.data.filter((function(e){return e.idtipo_consumo.toString()===i.idtipo_consumo.toString()&&e.idseccion.toString()===t.idseccion.toString()})).map((function(e,i){var o=new s.a;o.des=e.descripcion,o.detalles="",o.iditem=e.iditem,o.idcarta_lista=e.idcarta_lista,o.idseccion=e.idseccion,o.isalmacen=e.isalmacen,o.cantidad_seleccionada=parseInt(e.cantidad,0),o.precio=e.punitario,o.precio_print=parseFloat(e.ptotal),o.precio_total=parseFloat(e.ptotal),o.procede="0"===e.procede?1:0,o.seccion=e.des_seccion,o.img=e.img,o.subitems_view="null"!==e.subitems&&""!==e.subitems&&e.subitems?JSON.parse(e.subitems):[],t.count_items=i+1,t.items=t.items?t.items:[],t.items.push(o)}))}))})),i.tipoconsumo=t,i}},{key:"printerPrecuenta",value:function(e){var i=this;this.crudService.postFree(e,"pedido","printer-precuenta",!0).subscribe((function(t){var o={detalle_json:JSON.stringify(e.dataPrint),idprint_server_estructura:1,tipo:"comanda",descripcion_doc:"comanda",nom_documento:"comanda",idprint_server_detalle:t.data[0].rpt};i.socketService.emit("printerOnly",o),i.socketService.emit("notificar-impresion-precuenta",null)}))}},{key:"cerrarSession",value:function(){this.socketService.closeConnection(),this.navigatorService.cerrarSession()}}]),e}()).\u0275fac=function(e){return new(e||o)(C.Vb(d.a),C.Vb(m.a),C.Vb(l.a),C.Vb(p.a),C.Vb(I.a),C.Vb(f.a),C.Vb(v.a),C.Vb(_.a),C.Vb(b.a),C.Vb(g.a),C.Vb(y.a))},o.\u0275prov=C.Hb({token:o,factory:o.\u0275fac,providedIn:"root"}),o)}}]);