(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"3ui4":function(e,i,t){"use strict";t.d(i,"a",(function(){return s}));class s{constructor(){this.secciones=[]}}},"6NNB":function(e,i,t){"use strict";t.d(i,"a",(function(){return s}));class s{constructor(){this.tipoconsumo=[]}}},Ie24:function(e,i,t){"use strict";t.d(i,"a",(function(){return s}));class s{constructor(){this.descuento=null,this.items=[]}}},RHa8:function(e,i,t){"use strict";t.d(i,"a",(function(){return o}));var s=t("fXoL");let o=(()=>{class e{constructor(){}aplicarDescuentoItem(e,i){const t=parseFloat(e.precio),s=Math.round(t-t*(i/100));e.precio_antes=e.precio,e.precio=s.toString(),e.precio_default=s,e.precio_unitario=s.toString(),e.ispromo_aplica=!0}reviewPromoApplyItem(e,i){if(!i)return null;if(e.ispromo){const t=e.ispromo;let s=0;if(t.iditem_subitem){const o=e.subitems_selected.find(e=>e.iditem_subitem===t.iditem_subitem);if(!o||!e.subitems_view)return i;s=parseFloat(o.precio.toString())}if(1===t.is_nxn){const o=parseInt(t.cantidad_x,0),a=parseInt(t.cantidad,0),c=a-o,r=e.cantidad_seleccionada;if(r>=a){const o=parseFloat(t.porc_descuento),n=c*(parseInt((r/a).toString(),0)*(parseFloat(e.precio_unitario)+s));let d=n;d-=d*(o/100),d=0===d?n:d,i-=d,e.ispromo_aplica=!0}else e.ispromo_aplica=!1}else e.ispromo_aplica=!0}return i}resetPrecioDefaultItem(e){parseFloat(e.precio),e.precio_antes=e.precio,e.precio=e.precio_antes.toString(),e.precio_default=e.precio_antes,e.precio_unitario=e.precio_antes.toString()}}return e.\u0275fac=function(i){return new(i||e)},e.\u0275prov=s.Hb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()},Te6q:function(e,i,t){"use strict";t.d(i,"a",(function(){return s}));class s{constructor(){this.precio_total=0,this.precio_antes=null,this.cantidad_seleccionada_x_tpc=0,this.cantidad_descontado=0,this.itemtiposconsumo=[],this.subitems_selected=[],this.subitems_view=[]}}},WF5t:function(e,i,t){"use strict";t.d(i,"a",(function(){return c}));var s=t("7RJT"),o=t("zOUh"),a=t("fXoL");let c=(()=>{class e{constructor(e){this.infoToken=e,this.countdownTimerRef=null,this.init=0,this.valPorcentaje=0,this.isPlayTimer=!1,this.dateNow=new Date,this.countdownSource=new s.BehaviorSubject(0),this.countdown$=this.countdownSource.asObservable(),this.isTimeLimitSource=new s.BehaviorSubject(!1),this.isTimeLimitComplet$=this.isTimeLimitSource.asObservable(),this.isPorgressVisibleSource=new s.BehaviorSubject(!1),this.isPorgressVisible$=this.isPorgressVisibleSource.asObservable()}destroy(){this.clearTimeout()}playCountTimerLimit(){this.infoToken.isDelivery()||this.infoToken.isReserva()||this.isPlayTimer||(this.isPlayTimer=!0,this.initCount())}resetCountTimerLimit(){this.infoToken.isDelivery()||(localStorage.getItem("sys::tcount")?(this.isPlayTimer=!0,this.initCount()):this.stopCountTimerLimit())}initCount(){this.infoToken.isDelivery()||(this.valPorcentaje=0,this.init=localStorage.getItem("sys::tcount")?parseInt(localStorage.getItem("sys::tcount"),0):0,this.isTimeLimitSource.next(!1),this.isPorgressVisibleSource.next(!0),this.progressCount())}progressCount(){let e=0;this.isPlayTimer&&(this.countdownTimerRef=setTimeout(()=>{this.init=this.setTimeDate(),this.valPorcentaje=Math.round(this.init/this.maxTime*100),localStorage.setItem("sys::tcount",this.init.toString()),this.init>this.maxTime?(this.init=this.maxTime,this.valPorcentaje=100,this.countdownSource.next(this.valPorcentaje),this.isTimeLimitSource.next(!0),this.stopCountTimerLimit()):(e!==this.valPorcentaje&&this.countdownSource.next(this.valPorcentaje),this.progressCount()),e=this.valPorcentaje},1e3))}setTimeDate(){const e=(new Date).getTime(),i=localStorage.getItem("sys::tnum")?parseInt(localStorage.getItem("sys::tnum"),0):e,t=Math.floor((e-i)/1e3);return localStorage.setItem("sys::tnum",i.toString()),t}stopCountTimerLimit(){this.isPlayTimer=!1,this.init=0,this.valPorcentaje=0,localStorage.removeItem("sys::tcount"),localStorage.removeItem("sys::tnum"),this.clearTimeout(),this.isPorgressVisibleSource.next(!1),this.isTimeLimitSource.next(!1)}clearTimeout(){this.countdownTimerRef&&(clearTimeout(this.countdownTimerRef),this.countdownTimerRef=null)}}return e.\u0275fac=function(i){return new(i||e)(a.Vb(o.a))},e.\u0275prov=a.Hb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()},fbMX:function(e,i,t){"use strict";t.d(i,"a",(function(){return o}));var s=t("fXoL");let o=(()=>{class e{constructor(){}set(e,i){localStorage.setItem(e,i)}get(e){return localStorage.getItem(e)}isExistKey(e){return!!localStorage.getItem(e)}clear(e){localStorage.removeItem(e)}}return e.\u0275fac=function(i){return new(i||e)},e.\u0275prov=s.Hb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()},nx09:function(e,i,t){"use strict";t.d(i,"a",(function(){return C}));var s=t("7RJT"),o=t("Te6q"),a=t("6NNB");class c{}var r=t("Ie24"),n=t("3ui4"),d=t("fbMX"),m=t("yFR0"),l=t("WF5t"),p=t("/sn2"),u=t("wne+"),h=t("eI2u");class S{constructor(){this.isTpcLocal=!1,this.isTpcSoloLLevar=!1,this.isTpcSoloDelivery=!1,this.isTpcSoloOther=!1,this.isRequiereMesa=!1}}class _{}var b=t("JOr0"),v=t("+lji"),f=t("zOUh"),g=t("RHa8"),I=t("fXoL"),P=t("dNgK");let C=(()=>{class e{constructor(e,i,t,c,n,d,m,l,p,u,h){this.storageService=e,this.socketService=i,this.timerLimitService=t,this.navigatorService=c,this._snackBar=n,this.utilesService=d,this.listenStatusService=m,this.establecimientoService=l,this.crudService=p,this.infoTokenService=u,this.cocinarDescuentosPromoService=h,this.miPedidoSource=new s.BehaviorSubject(new a.a),this.miPedidoObserver$=this.miPedidoSource.asObservable(),this.countItemsSource=new s.BehaviorSubject(0),this.countItemsObserve$=this.countItemsSource.asObservable(),this.itemStockChangeSource=new s.BehaviorSubject(new o.a),this.itemStockChangeObserve$=this.itemStockChangeSource.asObservable(),this.isPreAvisoVisible=!1,this.listItemsPedido=[],this.miPedido=new a.a,this.mpObjNewItemTiposConsumo=[],this.mpObjSeccionSelected=new r.a,this.time=new Date,this.pwa_delivery_servicio_propio=!1,this.deliveryCanItemsInOrder=0,this.deliveryArrConstantes={cantItemsScala:0,costoScala:0}}getObjCarta(){return this.objCarta}getObjCartaLibery(){return JSON.parse(JSON.stringify(this.objCarta))}setObjMiPedido(e){this.miPedido=e,this.miPedidoSource.next(this.miPedido)}resetObjMiPedido(){this.miPedido=new a.a,this.miPedidoSource.next(this.miPedido)}setObjCarta(e){this.objCarta={},this.objCarta={carta:null,bodega:null,promociones:null,recomendados:null},this.objCarta.carta=e[0].carta,this.objCarta.bodega=e[0].bodega,this.objCarta.promociones=e[0].promociones;let i=this.objCarta.carta;const t=this.objCarta.bodega;if(t){if(!this.objCarta.carta){const e=new c;return e.des="Productos",e.detalle="",e.hora_fin="",e.hora_ini="",e.idcarta=0,e.idcategoria=0,e.secciones=[],i=[],i.push(e),i.map(e=>{t.map(i=>{e.secciones.push(i)})}),void(this.objCarta.carta=i)}i.map(e=>{t.map(i=>{e.secciones.push(i)})})}const s=[];i.map(e=>{e.secciones.map(e=>{const i=e.items.filter(e=>"1"===e.is_recomendacion);i&&i.map(e=>s.push(e))})}),s.length>0&&(this.objCarta.recomendados=s)}setObjCartaDescuentos(e){if(this.infoTokenService.infoUsToken.isHayDescuento=!1,0===e.length)return;if(1===e[0].solo_app&&!this.infoTokenService.infoUsToken.isCliente)return;this.infoTokenService.infoUsToken.isHayDescuento=!0;let i=0;e.map(e=>{switch(e.tipo){case 0:this.objCarta.carta.map(t=>{t.secciones.map(t=>{const s=t.items.filter(i=>i.iditem.toString()===e.id)[0];if(s)return i=e.porcentaje,s.iddescuento=e.idsede_descuento,this.aplicarDescuentoImte(s,i),!1})});break;case 1:i=e.porcentaje,this.objCarta.carta.map(t=>{t.secciones.map(t=>{t.idseccion.toString()===e.id&&(t.descuento=i+"%",t.iddescuento=e.idsede_descuento,t.items.map(e=>{this.aplicarDescuentoImte(e,i)}))})});break;case 2:i=e.porcentaje,this.objCarta.bodega.map(t=>{const s=t.items.filter(i=>i.iditem.toString()===e.id)[0];if(s)return i=e.porcentaje,s.iddescuento=e.idsede_descuento,this.aplicarDescuentoImte(s,i),!1});break;case 3:i=e.porcentaje,this.objCarta.bodega.map(t=>{t.idseccion.toString()===e.id&&(t.descuento=i+"%",t.iddescuento=e.idsede_descuento,t.items.map(e=>{this.aplicarDescuentoImte(e,i)}))})}})}aplicarDescuentoImte(e,i){const t=parseFloat(e.precio),s=Math.round(t-t*(i/100));e.precio_antes=e.precio,e.precio=s.toString(),e.precio_default=s,e.precio_unitario=s.toString()}getIdsDescuentos(){let e;const i=[];return this.miPedido.tipoconsumo.map(t=>{t.secciones.map(t=>{e=t.iddescuento,e&&(i.filter(i=>i.id===e)[0]||i.push({id:e})),t.items.map(s=>{e=t.iddescuento,e&&(i.filter(i=>i.id===e)[0]||i.push({id:e}))})})}),i}getMiPedido(){return 0===this.miPedido.tipoconsumo.length&&this.storageService.isExistKey("sys::order::all")&&(this.miPedido=JSON.parse(atob(this.storageService.get("sys::order::all")))),this.miPedido}setobjItemTipoConsumoSelected(e){this.mpObjItemTipoConsumoSelected=e}setObjNewItemTiposConsumo(e){this.mpObjNewItemTiposConsumo=e}getObjNewItemTiposConsumo(){return this.mpObjNewItemTiposConsumo}setObjSeccionSeleced(e){this.mpObjSeccionSelected=new r.a,this.mpObjSeccionSelected.des=e.des,this.mpObjSeccionSelected.idimpresora=e.idimpresora,this.mpObjSeccionSelected.idimpresora_otro=e.idimpresora_otro,this.mpObjSeccionSelected.idseccion=e.idseccion,this.mpObjSeccionSelected.sec_orden=e.sec_orden,this.mpObjSeccionSelected.ver_stock_cero=e.ver_stock_cero,this.mpObjSeccionSelected.iddescuento=e.iddescuento,this.mpObjSeccionSelected.descuento=e.descuento}getObjSeccionSeleced(){return this.mpObjSeccionSelected}getDeliveryConstCantEscala(){const e=localStorage.getItem("sys::ICS");e?this.deliveryArrConstantes=JSON.parse(atob(e)):this.crudService.getAll("pedido","get-const-delivery-items-escala",!1,!1,!1).subscribe(e=>{this.deliveryArrConstantes={cantItemsScala:e.data[0].value,costoScala:e.data[1].value},localStorage.setItem("sys::ICS",btoa(JSON.stringify(this.deliveryArrConstantes)))})}addItem2(e,i,t=0,s=null){let o=parseInt(i.cantidad.toString(),0);const a=0===t;if(o<=0&&a)return;let c=e.cantidad_seleccionada||0;if(c+=a?1:-1,c<0)return;"ND"!==i.isporcion&&(o+=a?-1:1,c=c<0?0:c,o=o<0||c<0?0:o),c=c<0?0:c,e.cantidad_seleccionada=c;const r=JSON.parse(JSON.stringify(e)),n=this.findItemMiPedido(r,this.mpObjSeccionSelected,i,a);n.cantidad=o,s&&(i=this.findItemCarta(i)),i.sumar=a,i.subitems_selected=n.subitems_selected,i.subitems_view=n.subitems_view;const d=this.findItemListPedido(i);let m=1;d?(d.itemtiposconsumo||(d.itemtiposconsumo=this.mpObjItemTipoConsumoSelected),m=this.totalItemTpcSelected(d.itemtiposconsumo)||0,d.cantidad_seleccionada=m,d.subitems_selected=n.subitems_selected,d.subitems_view=0===m?[]:n.subitems_view):this.listItemsPedido.push(i),i.cantidad_seleccionada=m,this.itemStockChangeSource.next(i),this.setLocalStorageHora(),this.setLocalStoragePedido(),this.socketService.emit("itemModificado",i),this.listenStatusService.setHayPedidoPendiente(!0)}totalItemTpcSelected(e){return e.map(e=>e.cantidad_seleccionada||0).reduce((e,i)=>e+i,0)}addCantItemMiPedido(e,i){const t=i;let s=t*parseFloat(e.precio_unitario);s+=e.subitems_view?e.subitems_view.map(e=>e.precio).reduce((e,i)=>e+i,0):0,e.cantidad_seleccionada=t,e.ispromo&&(s=this.cocinarDescuentosPromoService.reviewPromoApplyItem(e,s)||s),e.precio_total=s,e.precio_print=s}addPrecioItemMiPedido(e){const i=e.subitems_view?e.subitems_view.map(e=>e.precio).reduce((e,i)=>e+i,0):0;let t=e.cantidad_seleccionada*parseFloat(e.precio_unitario);t+=i,e.ispromo&&(t=this.cocinarDescuentosPromoService.reviewPromoApplyItem(e,t)||t),e.precio_total=t,e.precio_print=t}addItemSubItemMiPedido(e,i,t,s){if(e.subitems){if(0===e.subitems.length)return;const i=new _;if(i.id="",i.des="",i.listDes=[],i.cantidad_seleccionada=0,i.precio=0,i.indicaciones="",i.subitems=[],e.subitems_selected&&e.subitems_selected.length>0){e.subitems_selected.map(e=>{i.id+=e.iditem_subitem.toString(),i.listDes.push(this.utilesService.primeraConMayusculas(e.des.toLowerCase())),i.cantidad_seleccionada=1,i.precio+=parseFloat(e.precio.toString()),i.subitems.push(e),i.idtipo_consumo=e.idtipo_consumo}),i.des=i.listDes.join(", "),i.des+=void 0===e.indicaciones||""===e.indicaciones?"":", ("+e.indicaciones+")",e.indicaciones="",e.subitems_view=e.subitems_view?e.subitems_view:[],e.subitems_view.filter(e=>e.idtipo_consumo===s.idtipo_consumo)[0]||(e.subitems_view=[]);const o=e.subitems_view.filter(e=>e.id===i.id)[0];o?t?(o.indicaciones+=i.indicaciones,o.cantidad_seleccionada+=1,o.precio+=i.precio,o.des=i.des):this.restarCantSubItemView(e,o):t?e.subitems_view.push(i):this.restarCantSubItemView(e,null),this.addPrecioItemMiPedido(e)}else if(!t){if(!(null==e?void 0:e.subitems_view))return;if(0===(null==e?void 0:e.subitems_view.length))return;this.restarCantSubItemView(e,null)}}}restarCantSubItemView(e,i=null){if(i){const t=i.precio/i.cantidad_seleccionada;i.cantidad_seleccionada-=1,i.precio-=t,i.precio=i.precio<0?0:i.precio,i.cantidad_seleccionada<=0&&(e.subitems_view=e.subitems_view.filter(e=>e.cantidad_seleccionada>0))}else{const i=e.subitems_view[e.subitems_view.length-1],t=i.precio/i.cantidad_seleccionada;i.cantidad_seleccionada--,i.precio-=t,i.cantidad_seleccionada<=0&&(e.subitems_view=e.subitems_view.filter(e=>e.cantidad_seleccionada>0)),e.subitems_selected=i.subitems}}addItemInCarta(e){const i=this.findItemCarta(e);i?i.cantidad=i.cantidad:this.objCarta.carta.map(i=>{i.secciones.filter(i=>i.idseccion===e.idseccion).map(i=>{i.items.push(e)})})}findItemFromArr(e,i){return e.filter(e=>e.iditem===i.iditem)[0]}findItemListPedido(e){return this.listItemsPedido.filter(i=>i.iditem===e.iditem)[0]}findItemCartaAndClearIndicaciones(){this.objCarta.carta.map(e=>{e.secciones.map(e=>{e.items.map(e=>e.is_visible_control_last_add=!1),e.items.filter(e=>e.indicaciones).map(e=>e.indicaciones=""),e.items.filter(e=>e.subitems_selected).map(e=>e.subitems_selected=null),e.items.filter(e=>e.subitems_view).map(e=>e.subitems_view=null)})})}findItemCarta(e){let i;return this.objCarta.carta.map(t=>{t.secciones.map(t=>{const s=t.items.filter(i=>i.idcarta_lista.toString()===e.idcarta_lista.toString())[0];if(s)return i=s,i})}),i}findItemCartaByIdCartaLista(e){let i;return this.objCarta.carta.map(t=>{t.secciones.map(t=>{const s=t.items.filter(i=>i.idcarta_lista.toString()===e.toString())[0];if(s)return i=s,i})}),i}findSubItemCartaById(e,i){const t=[];return this.objCarta.carta.map(s=>{s.secciones.map(s=>{s.items.filter(e=>e.iditem.toString()!==i).filter(e=>e.subitems).map(i=>{i.subitems.map(i=>{const s=i.opciones.filter(i=>i.idproducto.toString()+i.idporcion.toString()===e)[0];s&&t.push(s)})})})}),t}resetCantidadesTpcItemCarta(){this.objCarta&&this.objCarta.carta&&this.objCarta.carta.map(e=>{e.secciones.map(e=>{e.items.map(e=>{e.indicaciones="",e.cantidad_seleccionada=0,e.itemtiposconsumo=null})})})}findItemSeccionCarta(e){let i;return this.objCarta.carta.map(t=>{const s=t.secciones.filter(i=>i.idseccion===e)[0];s&&(i=s)}),i}findOnlyItemMiPedido(e){return this.miPedido.tipoconsumo.map(i=>i.secciones.map(i=>i.items.find(i=>i.idcarta_lista.toString()===e.idcarta_lista.toString())))[0].find(e=>e)}findItemMiPedido(e,i,t,s){let o,a=JSON.parse(JSON.stringify(t));const c=e.cantidad_seleccionada;a.itemtiposconsumo=[],this.addCantItemMiPedido(a,c);const r=this.miPedido.tipoconsumo.filter(i=>i.idtipo_consumo.toString()===e.idtipo_consumo.toString())[0];if(r){const n=r.secciones.filter(e=>e.idseccion===i.idseccion)[0];if(n){const i=n.items.filter(e=>e.idcarta_lista.toString()===t.idcarta_lista.toString())[0];i?(i.indicaciones=a.indicaciones,this.addCantItemMiPedido(i,c),a=i,o=a):(n.items.push(a),o=a),a.subitems=t.subitems,a.subitems_selected=t.subitems_selected,this.addItemSubItemMiPedido(a,t,s,e),this.setCountCantItemTpcAndSeccion(r,n)}else{o=a;const c=JSON.parse(JSON.stringify(i));c.items=[],c.items.push(a),r.secciones=r.secciones?r.secciones:[],r.secciones.push(c),this.addItemSubItemMiPedido(a,t,s,e),this.setCountCantItemTpcAndSeccion(r,c)}}else{a.subitems=t.subitems,a.subitems_selected=t.subitems_selected,this.addItemSubItemMiPedido(a,t,s,e);const c=JSON.parse(JSON.stringify(i));c.items=[],c.items.push(a),e.secciones=e.secciones?e.secciones:[],e.secciones.push(c),this.miPedido.tipoconsumo.push(e),this.setCountCantItemTpcAndSeccion(e,c),o=a}return this.clearObjMiPedido(),o}quitarTpcMiPedido(e){1===e.count_items_seccion&&(this.miPedido.tipoconsumo=this.miPedido.tipoconsumo.filter(i=>!e))}quitarSeccionMiPedido(e){1===e.count_items&&this.miPedido.tipoconsumo.map(i=>{i.secciones.filter(i=>!e)})}findMiPedidoIsTPCLocal(){let e=!1;return this.miPedido.tipoconsumo.filter(e=>"LOCAL"===e.titulo).map(i=>{e=!!i.secciones.filter(e=>e.count_items>0)[0]}),e}findMiPedidoIsTPCDelivery(){let e=!1;return this.miPedido.tipoconsumo.filter(e=>"DELIVERY"===e.descripcion.toUpperCase()).map(i=>{e=!!i.secciones.filter(e=>e.count_items>0)[0]}),e}findMiPedidoIsTPCLLevar(){let e=!1;return this.miPedido.tipoconsumo.filter(e=>e.descripcion.toUpperCase().indexOf("LLEVAR")).map(i=>{e=!!i.secciones.filter(e=>e.count_items>0)[0]}),e}findEvaluateTPCMiPedido(){const e=new S;let i=0;return this.miPedido.tipoconsumo.filter(e=>e.count_items_seccion>0).map(t=>{"LOCAL"===t.titulo&&(e.isTpcLocal=!0,i++),t.descripcion.toUpperCase().indexOf("LLEVAR")>-1&&(e.isTpcSoloLLevar=!0,i++),t.descripcion.toUpperCase().indexOf("DELIVERY")>-1&&(e.isTpcSoloDelivery=!0),e.isRequiereMesa=!!e.isTpcLocal,e.isTpcSoloLLevar=!(1!==i||!e.isTpcSoloLLevar)}),e}findSeccionInMipedidoByPrint(e){let i;return this.miPedido.tipoconsumo.map(t=>{i=t.secciones.filter(i=>i.idimpresora===e)}),i}findIsHayItems(){return this.setCountTotalImtesPedido()>0}clearObjMiPedido(){if(this.miPedido.tipoconsumo=this.miPedido.tipoconsumo.filter(e=>e.count_items_seccion>0),0===this.miPedido.tipoconsumo.length)return this.miPedido=new a.a,void this.miPedidoSource.next(this.miPedido);this.miPedido.tipoconsumo=this.miPedido.tipoconsumo.map(e=>(e.secciones=e.secciones.filter(e=>e.count_items>0),e)),this.miPedido.tipoconsumo=this.miPedido.tipoconsumo.map(e=>(e.secciones=e.secciones.map(e=>(e.items=e.items.filter(e=>e.cantidad_seleccionada>0),e)),e)),this.miPedidoSource.next(this.miPedido)}setCountCantItemTpcAndSeccion(e,i){const t=i.items.map(e=>e.cantidad_seleccionada).reduce((e,i)=>e+i,0);i.count_items=t;const s=e.secciones.map(e=>e.count_items).reduce((e,i)=>e+i,0);e.count_items_seccion=s,this.setCountTotalImtesPedido()}setCountTotalImtesPedido(){const e=this.miPedido.tipoconsumo.map(e=>e.count_items_seccion).reduce((e,i)=>e+i,0);return this.countItemsSource.next(e),e}setLocalStorageHora(){if(this.storageService.isExistKey("sys::h"))return;const e=`${this.time.getHours()}:${this.time.getMinutes()}:${this.time.getSeconds()}`;this.storageService.set("sys::h",e.toString())}setLocalStoragePedido(){this.storageService.set("sys::order",btoa(JSON.stringify(this.listItemsPedido))),this.storageService.set("sys::order::all",btoa(JSON.stringify(this.miPedido)))}clearPedidoIsLimitTime(){this.storageService.isExistKey("sys::order")&&(this.listItemsPedido=JSON.parse(atob(this.storageService.get("sys::order"))),this.miPedido=JSON.parse(atob(this.storageService.get("sys::order::all"))))}resetAllNewPedido(){this.socketService.emit("resetPedido",this.listItemsPedido),this.prepareNewPedido()}prepareNewPedido(){this.resetTpcCarta(),this.storageService.clear("sys::h"),this.storageService.clear("sys::order"),this.storageService.clear("sys::order::all"),this.storageService.clear("sys::tcount"),this.storageService.clear("sys::tnum"),this.storageService.clear("sys::mps"),this.miPedido=null,this.miPedido=new a.a,this.miPedidoSource.next(this.miPedido),this.countItemsSource.next(0),this.listenStatusService.setHayPedidoPendiente(!1),this.stopTimerLimit()}getOnlyCarta(){this.socketService.emit("getOnlyCarta",null)}resetTpcCarta(){try{this.listItemsPedido.map(e=>{if(e.indicaciones="",!e.itemtiposconsumo)return;e.itemtiposconsumo=null;const i=this.findItemCarta(e);i.indicaciones="",i.cantidad_seleccionada=0,i.itemtiposconsumo=null,i.is_visible_control_last_add=!1})}catch(e){}this.resetCantidadesTpcItemCarta(),this.listItemsPedido=[]}updatePedidoFromStrorage(){this.listenStatusService.setHayPedidoPendiente(!1),this.storageService.isExistKey("sys::order")&&(this.listenStatusService.setHayPedidoPendiente(!0),this.listItemsPedido=JSON.parse(atob(this.storageService.get("sys::order"))),this.miPedido=JSON.parse(atob(this.storageService.get("sys::order::all"))),this.setCountTotalImtesPedido(),this.miPedidoSource.next(this.miPedido),this.listItemsPedido.map(e=>{this.objCarta.carta.map(i=>{i.secciones.map(i=>{const t=i.items.filter(i=>i.idcarta_lista.toString()===e.idcarta_lista.toString())[0];t&&(t.cantidad_seleccionada=e.cantidad_seleccionada,t.itemtiposconsumo=e.itemtiposconsumo)})})}))}updatePedidoFromClear(){this.listItemsPedido&&(this.listItemsPedido.map(e=>{0===e.isalmacen&&this.objCarta.carta.map(i=>{i.secciones.map(i=>{const t=i.items.filter(i=>"ND"!==i.isporcion&&i.idcarta_lista.toString()===e.idcarta_lista.toString())[0];t&&(t.cantidad=parseInt(t.cantidad.toString(),0)+e.cantidad_seleccionada)})})}),this.prepareNewPedido())}getEstadoStockItem(e){return e>10?"verde":e>5?"amarillo":"rojo"}validarReglasCarta(e){let i=0,t=0,s=0,o=0,a=0,c=0,r=0;this.miPedido.tipoconsumo.map(e=>{e.secciones.map(e=>{e.items.map(e=>e.precio_total_calc=null)})}),e.map(e=>{i=e.idseccion,t=e.idseccion_detalle,s=this.countCantItemsFromSeccion(i),o=this.countCantItemsFromSeccion(t),a=s-o,a=a<0?s:a,this.miPedido.tipoconsumo.map(e=>{e.secciones.filter(e=>e.idseccion.toString()===t.toString()).map(e=>{e.items.map((e,i)=>{const t=parseFloat(e.precio),n=e.cantidad_seleccionada;r=null!==e.precio_total_calc?e.precio_total_calc:e.precio_total,c=r,s>=o?c=0:a>0&&(c=a*t,c=r-c,c=c<0?0:c,a=a-n<0?0:a-n),e.precio_total_calc=parseFloat(c.toString()),e.precio_print=parseFloat(c.toString()),e.cantidad_descontado=n})})})})}countCantItemsFromSeccion(e){let i=0;return this.miPedido.tipoconsumo.map(t=>{t.secciones.map(t=>{i+=t.items.filter(i=>i.idseccion.toString()===e.toString()).map(e=>e.cantidad_seleccionada).reduce((e,i)=>e+i,0)})}),i}countCantItemsFromTpcSeccion(e,i){let t=0;return this.miPedido.tipoconsumo.filter(i=>i.idtipo_consumo.toString()===e.toString()).map(e=>{e.secciones.map(e=>{t+=e.items.filter(e=>e.idseccion.toString()===i.toString()).map(e=>e.cantidad_seleccionada).reduce((e,i)=>e+i,0)})}),t}countCantItemsFromTpc(e){let i=0;return this.miPedido.tipoconsumo.filter(i=>i.idtipo_consumo.toString()===e.toString()).map(e=>{e.secciones.map(e=>{i+=e.items.map(e=>e.cantidad_seleccionada).reduce((e,i)=>e+i,0)})}),i}countCantItemsFromTpcDes(e){let i=0;return this.miPedido.tipoconsumo.filter(i=>i.descripcion.toLowerCase()===e.toLowerCase()).map(e=>{e.secciones.map(e=>{i+=e.items.map(e=>e.cantidad_seleccionada).reduce((e,i)=>e+i,0)})}),i}getArrSubTotales(e){const i=this.getSubTotalMiPedido();let t=1===this.establecimientoService.establecimiento.pwa_delivery_hablitar_calc_costo_servicio;const s=1===this.establecimientoService.establecimiento.pwa_delivery_habilitar_calc_costo_servicio_solo_app,o=this.establecimientoService.establecimiento.pwa_delivery_comision_fija_no_afiliado,a=1===this.establecimientoService.establecimiento.pwa_delivery_comercio_paga_entrega;this.pwa_delivery_servicio_propio=1===this.establecimientoService.establecimiento.pwa_delivery_servicio_propio;let c=!this.infoTokenService.infoUsToken.idusuario;c&&(t=t||s);let r=i;const n=[];let d={id:0,descripcion:"SUB TOTAL",esImpuesto:0,visible:!0,quitar:!1,tachado:!1,visible_cpe:!0};d.importe=parseFloat(i.toString()).toFixed(2),n.push(d);const m=[];e.filter(e=>"p"===e.tipo).map(e=>{const t=e.monto/100,s=1===e.es_impuesto,o=0===e.activo,a=(i*t).toFixed(2),c={};c.id=e.tipo+e.id,c.descripcion=e.descripcion,c.esImpuesto=e.es_impuesto,c.visible=!0,c.quitar=!1,c.tachado=!1,c.visible_cpe=s,"I.G.V"===c.descripcion?(c.importe=o?t:0,m.push(c)):(c.importe=s?o?a:0:a,c.importe=parseFloat(c.importe.toString()).toFixed(2),r+=parseFloat(c.importe)),0!==c.importe&&m.push(c)});let l=0;const p=[],u=e.filter(e=>"a"===e.tipo);let h=!1,S=!0,_=!1;const b=this.countCantItemsFromTpcDes("delivery")+this.countCantItemsFromTpcDes("entrega")+this.countCantItemsFromTpcDes("cantidad");if(_=b>0,l=this.establecimientoService.get().c_servicio||this.establecimientoService.get().c_minimo,u.map(e=>{const i={};if((e.descripcion.toUpperCase().indexOf("DELIVERY")>-1||e.descripcion.toUpperCase().indexOf("ENTREGA")>-1)&&c){if(S=!0,h=!0,e.descripcion="Entrega",!this.pwa_delivery_servicio_propio||t){_=!0,h=!1,l=this.establecimientoService.get().c_servicio||this.establecimientoService.get().c_minimo;const i=this.countCantItemsFromTpc(e.idtipo_consumo);return c=i>0,void(S=i>0)}l=parseFloat(e.monto)}else l=parseFloat(e.monto);if(0===this.countCantItemsFromTpc(e.idtipo_consumo))return;if(0===e.nivel){const i=this.countCantItemsFromTpcSeccion(e.idtipo_consumo,e.idseccion);if(0===i)return;const t=this.calcCostoCantItemsDelivery();l=i*parseFloat(e.monto)+t}i.id=e.tipo+e.id,i.descripcion=e.descripcion,i.esImpuesto=e.es_impuesto,i.visible=!0,i.quitar=!0,i.tachado=!1,i.visible_cpe=!1,i.importe=parseFloat(l.toString()).toFixed(2),r+=parseFloat(i.importe);const s=p.filter(e=>e.descripcion===i.descripcion)[0];s?s.importe=parseFloat(s.importe)+parseFloat(i.importe):p.push(i)}),_){const e={},i=this.calcCostoCantItemsDelivery()+(this.establecimientoService.get().c_servicio||this.establecimientoService.get().c_minimo)+o;this.establecimientoService.setCostoSercioDelivery(i),!a&&t&&(e.id=-2,e.descripcion="Entrega",e.isDeliveryApp=!0,e.esImpuesto=0,e.visible=!0,e.quitar=!0,e.tachado=!1,e.visible_cpe=!1,e.importe=parseFloat(i.toString()).toFixed(2),r+=parseFloat(e.importe),p.push(e))}m.map(e=>n.push(e)),p.map(e=>n.push(e));const v=n.filter(e=>"SUB TOTAL"===e.descripcion)[0],f=n.filter(e=>"I.G.V"===e.descripcion)[0];let g=f?f.importe:0,I=v?v.importe:0;return g>0&&(g=parseFloat((I*g).toString()).toFixed(2),I-=g,f.importe=g,v.importe=I.toFixed(2)),d={},d.id=0,d.esImpuesto=0,d.descripcion="TOTAL",d.visible=!0,d.quitar=!1,d.tachado=!1,d.visible_cpe=!0,d.importe=parseFloat(r.toString()).toFixed(2),n.push(d),n}calcCostoCantItemsDelivery(){let e=0;const i=parseInt(this.deliveryArrConstantes.cantItemsScala.toString(),0);if(0===i)return 0;if(this.deliveryCanItemsInOrder>i){const t=this.deliveryCanItemsInOrder/i;t>1&&(e=Math.floor(t)*this.deliveryArrConstantes.costoScala)}else e=0;return e}getSubTotalMiPedido(){let e=0,i=0;return this.miPedido.tipoconsumo.map(t=>{t.secciones.map(t=>{e+=t.items.map(e=>(i+=e.cantidad_seleccionada,e.precio_print)).reduce((e,i)=>e+i,0)})}),this.deliveryCanItemsInOrder=i,e}getImporteTotalItemFromMiPedido(e){let i=0;return this.miPedido.tipoconsumo.map(t=>{t.secciones.map(t=>{i+=t.items.filter(i=>i.iditem===e.iditem).map(e=>e.precio_print).reduce((e,i)=>e+i,0)})}),i}playTimerLimit(){this.timerLimitService.playCountTimerLimit()}stopTimerLimit(){this.timerLimitService.resetCountTimerLimit()}restoreTimerLimit(){this.timerLimitService.resetCountTimerLimit()}listenChangeCantItem(){this.socketService.onItemModificado().subscribe(e=>{let i;if(null!=e.listItemPorcion)e.listItemPorcion.map(t=>{i=this.findItemCartaByIdCartaLista(t.idcarta_lista);const s=parseInt(t.cantidad,0);i.cantidad=s||parseInt(e.item.cantidad.toString(),0),this.setCantidadItemModificadoPwa(e.item,i,parseInt(t.cantidad,0),!0)});else{if(!e.item)return;i=this.findItemCarta(e=e.item),this.setCantidadItemModificadoPwa(e,i)}}),this.socketService.onItemResetCant().subscribe(e=>{let i;null!=e.listItemPorcion?e.listItemPorcion.map(t=>{i=this.findItemCartaByIdCartaLista(t.idcarta_lista),i.cantidad=parseInt(t.cantidad,0),this.setCantidadItemModificadoPwa(e.item,i,parseInt(t.cantidad,0),!0),this.itemStockChangeSource.next(i)}):(i=this.findItemCarta(e=e.item),i.cantidad=parseInt(e.cantidad.toString(),0),i.subitems=e.subitems,this.itemStockChangeSource.next(i))}),this.socketService.onNuevoItemAddInCarta().subscribe(e=>{this.addItemInCarta(e)}),this.socketService.onGetDatosSede().subscribe(e=>{this.objDatosSede=e[0],this.objDatosSede.datossede[0].longitude=parseFloat(this.objDatosSede.datossede[0].longitude),this.objDatosSede.datossede[0].latitude=parseFloat(this.objDatosSede.datossede[0].latitude),this.listenStatusService.setHayDatosSede(!0),localStorage.setItem("sys::s",this.objDatosSede.datossede[0].nombre+"|"+this.objDatosSede.datossede[0].ciudad),this.establecimientoService.setImpresoras(this.objDatosSede.impresoras),this.max_minute_order=e[0].datossede[0].pwa_time_limit,this.pwa_delivery_servicio_propio=0!==e[0].datossede[0].pwa_delivery_servicio_propio,this.timerLimitService.maxTime=100*this.max_minute_order}),this.timerLimitService.countdown$.subscribe(e=>{switch(e){case 1:this.isPreAvisoVisible=!1;break;case 80:this.isPreAvisoVisible||(this.isPreAvisoVisible=!0,this._snackBar.open("Proximo a cumplir el tiempo de envio.","",{duration:2e3}));break;case 100:this._snackBar.open("Tiempo agotado, debe realizar un nuevo pedido.","",{duration:3e3})}}),this.timerLimitService.isTimeLimitComplet$.subscribe(e=>{!0===e&&(this.resetAllNewPedido(),this.navigatorService.setPageActive("carta"))})}setCantidadItemModificadoPwa(e,i,t=null,s=!1){e.subitems&&e.idcarta_lista===i.idcarta_lista&&(e.subitems||(e.subitems=[]),e.subitems.map(t=>{t.opciones.map(t=>{i.subitems&&(null==i||i.subitems.map(i=>{const s=i.opciones.filter(e=>e.iditem_subitem===parseInt(t.iditem_subitem.toString(),0))[0];if(s&&"ND"!==s.cantidad){s.cantidad=t.cantidad;const i=s.idproducto.toString()+s.idporcion.toString();this.findSubItemCartaById(i,e.iditem.toString()).map(e=>{e.cantidad=t.cantidad})}}))})})),s||(i.cantidad=t||parseInt(e.cantidad.toString(),0)),this.itemStockChangeSource.next(i)}darFormatoPedido(e){const i=new a.a,t=[];return e.data.map(e=>{let i=t.filter(i=>i.idtipo_consumo===e.idtipo_consumo)[0];i||(i=new n.a,i.descripcion=e.des_tp,i.idtipo_consumo=parseInt(e.idtipo_consumo,0),t.push(i))}),t.map(i=>{e.data.filter(e=>e.idtipo_consumo===i.idtipo_consumo).map((e,t)=>{let s=i.secciones.filter(i=>i.idseccion.toString()===e.idseccion.toString())[0];s||(s=new r.a,s.idseccion=e.idseccion.toString(),s.des=e.des_seccion,s.sec_orden=e.sec_orden,s.ver_stock_cero=0,i.count_items_seccion=t+1,i.secciones.push(s))})}),t.map(i=>{i.secciones.map(t=>{e.data.filter(e=>e.idtipo_consumo.toString()===i.idtipo_consumo.toString()&&e.idseccion.toString()===t.idseccion.toString()).map((e,i)=>{const s=new o.a;s.des=e.descripcion,s.detalles="",s.iditem=e.iditem,s.idcarta_lista=e.idcarta_lista,s.idseccion=e.idseccion,s.isalmacen=e.isalmacen,s.cantidad_seleccionada=parseInt(e.cantidad,0),s.precio=e.punitario,s.precio_print=parseFloat(e.ptotal),s.precio_total=parseFloat(e.ptotal),s.procede="0"===e.procede?1:0,s.seccion=e.des_seccion,s.img=e.img,s.subitems_view="null"!==e.subitems&&""!==e.subitems&&e.subitems?JSON.parse(e.subitems):[],t.count_items=i+1,t.items=t.items?t.items:[],t.items.push(s)})})}),i.tipoconsumo=t,i}printerPrecuenta(e){this.crudService.postFree(e,"pedido","printer-precuenta",!0).subscribe(i=>{const t={detalle_json:JSON.stringify(e.dataPrint),idprint_server_estructura:1,tipo:"comanda",descripcion_doc:"comanda",nom_documento:"comanda",idprint_server_detalle:i.data[0].rpt};this.socketService.emit("printerOnly",t),this.socketService.emit("notificar-impresion-precuenta",null)})}cerrarSession(){this.socketService.closeConnection(),this.navigatorService.cerrarSession()}}return e.\u0275fac=function(i){return new(i||e)(I.Vb(d.a),I.Vb(m.a),I.Vb(l.a),I.Vb(p.a),I.Vb(P.a),I.Vb(u.a),I.Vb(h.a),I.Vb(b.a),I.Vb(v.a),I.Vb(f.a),I.Vb(g.a))},e.\u0275prov=I.Hb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()}}]);