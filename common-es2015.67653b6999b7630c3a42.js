(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"6qA3":function(e,t,i){"use strict";var r=i("OAkW"),n=i("Z5tI"),o=i("poJ0"),s=i("ozli"),a=i("yRPT"),c=i("90cg"),u=i("GMZp"),d=i("VKeD"),l=i("zfKp");t.subscribeTo=function(e){if(e&&"function"==typeof e[l.observable])return s.subscribeToObservable(e);if(a.isArrayLike(e))return r.subscribeToArray(e);if(c.isPromise(e))return n.subscribeToPromise(e);if(e&&"function"==typeof e[d.iterator])return o.subscribeToIterable(e);var t=u.isObject(e)?"an invalid object":"'"+e+"'";throw new TypeError("You provided "+t+" where a stream was expected. You can provide an Observable, Promise, Array, or Iterable.")}},"90cg":function(e,t,i){"use strict";t.isPromise=function(e){return!!e&&"function"!=typeof e.subscribe&&"function"==typeof e.then}},FDOz:function(e,t,i){"use strict";i.d(t,"a",(function(){return y})),i.d(t,"b",(function(){return b})),i("mrSG");var r=i("fXoL"),n=i("tyNb"),o=i("EY2u");const s=[];let a=(()=>{let e=class{constructor(e){this.router=e,this.trees=s}add(e){this.trees.push(e)}remove(e){this.trees.splice(this.trees.indexOf(e),1)}shouldPrefetch(e){const t=this.router.parseUrl(e);return this.trees.some(c.bind(null,t))}};return e.\u0275fac=function(t){return new(t||e)(r.Vb(n.d))},e.\u0275prov=r.Hb({token:e,factory:function(t){return e.\u0275fac(t)}}),e})();function c(e,t){return function(e,t){return Object.keys(t).length<=Object.keys(e).length&&Object.keys(t).every(i=>t[i]===e[i])}(t.queryParams,e.queryParams)&&function e(t,i,r){if(t.segments.length>r.length)return!!u(t.segments.slice(0,r.length),r)&&!i.hasChildren();if(t.segments.length===r.length){if(!u(t.segments,r))return!1;if(!i.hasChildren())return!0;for(const r in i.children){if(!t.children[r])break;if(e(t.children[r],i.children[r],i.children[r].segments))return!0}return!1}{const o=r.slice(0,t.segments.length),s=r.slice(t.segments.length);return!!u(t.segments,o)&&!!t.children[n.c]&&e(t.children[n.c],i,s)}}(t.root,e.root,e.root.segments)}function u(e,t){return e.length===t.length&&e.every((e,i)=>e.path===t[i].path||e.path.startsWith(":")||t[i].path.startsWith(":"))}const d="undefined"!=typeof window?window.requestIdleCallback||function(e){const t=Date.now();return setTimeout((function(){e({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-t))}})}),1)}:()=>{},l=()=>"undefined"!=typeof window&&!!window.IntersectionObserver,h=new r.q("LinkHandler");let f=(()=>{let e=class{constructor(e,t){this.loader=e,this.queue=t,this.elementLink=new Map,this.observer=l()?new IntersectionObserver(e=>{e.forEach(e=>{if(e.isIntersecting){const t=e.target,i=this.elementLink.get(t);this.queue.add(i.urlTree),this.observer.unobserve(t),d(()=>{this.loader.preload().subscribe(()=>{}),this.queue.remove(i.urlTree)})}})}):null}register(e){this.elementLink.set(e.element,e),this.observer.observe(e.element)}unregister(e){this.elementLink.has(e.element)&&(this.observer.unobserve(e.element),this.elementLink.delete(e.element))}supported(){return l()}};return e.\u0275fac=function(t){return new(t||e)(r.Vb(n.i),r.Vb(a))},e.\u0275prov=r.Hb({token:e,factory:function(t){return e.\u0275fac(t)}}),e})(),p=(()=>{let e=class{constructor(e,t){this.loader=e,this.queue=t}register(e){this.queue.add(e.urlTree),d(()=>this.loader.preload().subscribe(()=>{}))}unregister(e){}supported(){return!0}};return e.\u0275fac=function(t){return new(t||e)(r.Vb(n.i),r.Vb(a))},e.\u0275prov=r.Hb({token:e,factory:function(t){return e.\u0275fac(t)}}),e})(),b=(()=>{let e=class{constructor(e,t,i,r){this.linkHandlers=e,this.el=t,this.linkHandler=this.linkHandlers.filter(e=>e.supported()).shift(),this.rl=i||r}ngOnChanges(e){e.routerLink&&(this.linkHandler.unregister(this),this.linkHandler.register(this))}ngOnDestroy(){this.linkHandler.unregister(this)}get element(){return this.el.nativeElement}get urlTree(){return this.rl.urlTree}};return e.\u0275fac=function(t){return new(t||e)(r.Lb(h),r.Lb(r.l),r.Lb(n.e,8),r.Lb(n.f,8))},e.\u0275dir=r.Gb({type:e,selectors:[["","routerLink",""]],inputs:{routerLink:"routerLink"},features:[r.xb]}),e})(),g=(()=>{let e=class{constructor(e,t){this.queue=e,this.router=t,this.loading=new Set}preload(e,t){if(this.loading.has(e))return o.a;const i="undefined"!=typeof window?navigator.connection:void 0;if(i&&((i.effectiveType||"").includes("2g")||i.saveData))return o.a;if(e.data&&!1===e.data.preload)return o.a;const r=m(this.router.config,e);return this.queue.shouldPrefetch(r)?(this.loading.add(e),t()):o.a}};return e.\u0275fac=function(t){return new(t||e)(r.Vb(a),r.Vb(n.d))},e.\u0275prov=r.Hb({token:e,factory:function(t){return e.\u0275fac(t)}}),e})();const m=(e,t)=>{e=e.slice();const i=new Map,r=new Set;for(;e.length;){const n=e.shift();if(r.add(n),n===t)break;let o=n.children||[];const s=n._loadedConfig;s&&s.routes&&(o=o.concat(s.routes)),o.forEach(t=>{r.has(t)||(i.set(t,n),e.push(t))})}let n="",o=t;for(;o;)n=v(o)?`/${o.path}${n}`:`/(${o.outlet}:${o.path}${n})`,o=i.get(o);return n};function v(e){return e.outlet===n.c||!e.outlet}let y=(()=>{let e=class{};return e.\u0275mod=r.Jb({type:e}),e.\u0275inj=r.Ib({factory:function(t){return new(t||e)},providers:[{provide:h,useClass:f,multi:!0},{provide:h,useClass:p,multi:!0},a,g]}),e})()},HWNa:function(e,t,i){"use strict";i.d(t,"a",(function(){return s}));var r=i("JOr0"),n=i("VhxH"),o=i("fXoL");let s=(()=>{class e{constructor(e){this.estableciminetoService=e,this.directionsService=new google.maps.DirectionsService,this.origin={},this.destination={}}calculateRoute(e,t,i=!0){let r=0;r=t.c_minimo;const n=t.c_km;if(t.latitude="string"==typeof t.latitude?parseFloat(t.latitude):t.latitude,t.longitude="string"==typeof t.longitude?parseFloat(t.longitude):t.longitude,e.latitude="string"==typeof e.latitude?parseFloat(e.latitude):e.latitude,e.longitude="string"==typeof e.longitude?parseFloat(e.longitude):e.longitude,i){const i=this.estableciminetoService.getFindDirClienteCacheEstableciemto(e,t);if(i)return t.distancia_km=i.distancia_km,t.c_servicio=this.calCostoDistancia(t,i.distancia_km),t.c_servicio}this.origin={lat:e.latitude,lng:e.longitude},this.destination={lat:t.latitude,lng:t.longitude};const o={origin:this.origin,destination:this.destination,travelMode:google.maps.TravelMode.DRIVING};let s=0;return this.directionsService.route(o,(i,o)=>{if("OK"===o){s=i.routes[0].legs[0].distance.value;const o=s/1e3;t.distancia_mt=s.toString(),t.distancia_km=o.toFixed(2),s=Math.ceil(o),s>2&&(r=(s-1)*n+r,t.c_servicio=r);const a=[];a.push(t),this.estableciminetoService.setEstableciminetosCache({idcliente_pwa_direccion:e.idcliente_pwa_direccion,listEstablecimientos:a})}}),setTimeout(()=>(t.c_servicio=r,r),500),t.c_servicio=r,r}calCostoDistancia(e,t){const i=Math.ceil(t);let r=e.c_minimo;return i>2&&(r=(i-1)*e.c_km+r,e.c_servicio=r),r}calcDistancia(e,t){const i={lat:t.latitude,lon:t.longitude};return Object(n.insideCircle)({lat:e.latitude,lon:e.longitude},i,75)}}return e.\u0275fac=function(t){return new(t||e)(o.Vb(r.a))},e.\u0275prov=o.Hb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()},IW2O:function(e,t,i){"use strict";var r=this&&this.__extends||function(){var e=function(t,i){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var i in t)t.hasOwnProperty(i)&&(e[i]=t[i])})(t,i)};return function(t,i){function r(){this.constructor=t}e(t,i),t.prototype=null===i?Object.create(i):(r.prototype=i.prototype,new r)}}(),n=i("Y4kR"),o=i("cSoz");t.takeUntil=function(e){return function(t){return t.lift(new s(e))}};var s=function(){function e(e){this.notifier=e}return e.prototype.call=function(e,t){var i=new a(e),r=o.subscribeToResult(i,this.notifier);return r&&!i.seenValue?(i.add(r),t.subscribe(i)):i},e}(),a=function(e){function t(t){var i=e.call(this,t)||this;return i.seenValue=!1,i}return r(t,e),t.prototype.notifyNext=function(e,t,i,r,n){this.seenValue=!0,this.complete()},t.prototype.notifyComplete=function(){},t}(n.OuterSubscriber)},N6vS:function(e,t,i){"use strict";i.d(t,"a",(function(){return l}));var r=i("0IaG"),n=i("eI2u"),o=i("fXoL"),s=i("lkOP"),a=i("bTqV"),c=i("ofXK"),u=i("Pg/a");function d(e,t){if(1&e){const e=o.Sb();o.Rb(0,"app-agregar-direccion",9),o.Yb("saveDireccionOk",(function(t){return o.uc(e),o.cc().setDireccion(t)})),o.Qb()}if(2&e){const e=o.cc();o.ic("isGuardarDireccion",e.isGuardarDireccion)("idClienteBuscar",e._idClienteBuscar)}}let l=(()=>{class e{constructor(e,t,i){this.dialogRef=e,this.listenService=t,this.isShowAddDireccion=!1,this.isGuardarDireccion=!0,this.isGuardarDireccion=!i||i.isGuardar,this._idClienteBuscar=i?i.idClienteBuscar:null}ngOnInit(){}setDireccion(e){this.direccionSelected=e,this.listenService.setChangeDireccionDelivery(this.direccionSelected),this.cerrarDlg()}showAddDireccion(){this.isShowAddDireccion=!0}cerrarDlg(){this.dialogRef.close(this.direccionSelected)}}return e.\u0275fac=function(t){return new(t||e)(o.Lb(r.f),o.Lb(n.a),o.Lb(r.a))},e.\u0275cmp=o.Fb({type:e,selectors:[["app-dialog-select-direccion"]],decls:16,vars:4,consts:[[3,"hidden"],[1,"fs-14","fw-600","pl-3","pt-3"],[3,"idClienteBuscar","direccionSelected"],[1,"text-center"],["mat-flat-button","","mat-dialog-close","",1,"mr-3"],[1,"fa","fa-arrow-left"],["mat-flat-button","","color","primary",3,"click"],[1,"fa","fa-plus"],[3,"isGuardarDireccion","idClienteBuscar","saveDireccionOk",4,"ngIf"],[3,"isGuardarDireccion","idClienteBuscar","saveDireccionOk"]],template:function(e,t){1&e&&(o.Rb(0,"div",0),o.Rb(1,"p",1),o.Cc(2,"Direccion de entrega:"),o.Qb(),o.Mb(3,"hr"),o.Rb(4,"app-seleccionar-direccion",2),o.Yb("direccionSelected",(function(e){return t.setDireccion(e)})),o.Qb(),o.Mb(5,"br"),o.Rb(6,"div",3),o.Rb(7,"button",4),o.Mb(8,"i",5),o.Cc(9," Atras "),o.Qb(),o.Rb(10,"button",6),o.Yb("click",(function(){return t.showAddDireccion()})),o.Mb(11,"i",7),o.Cc(12," Agregar Direccion "),o.Qb(),o.Qb(),o.Mb(13,"br"),o.Qb(),o.Rb(14,"div",0),o.Ac(15,d,1,2,"app-agregar-direccion",8),o.Qb()),2&e&&(o.ic("hidden",t.isShowAddDireccion),o.zb(4),o.ic("idClienteBuscar",t._idClienteBuscar),o.zb(10),o.ic("hidden",!t.isShowAddDireccion),o.zb(1),o.ic("ngIf",t.isShowAddDireccion))},directives:[s.a,a.a,r.c,c.n,u.a],styles:[""]}),e})()},OAkW:function(e,t,i){"use strict";t.subscribeToArray=function(e){return function(t){for(var i=0,r=e.length;i<r&&!t.closed;i++)t.next(e[i]);t.complete()}}},OzqD:function(e,t,i){"use strict";i.d(t,"a",(function(){return u}));var r=i("A8zI"),n=i("eI2u"),o=i("+lji"),s=i("zOUh"),a=i("7RJT"),c=i("fXoL");let u=(()=>{class e{constructor(e,t,i){this.listenStatusService=e,this.crudService=t,this.infoTokenService=i,this.estadoPedido=new r.a,this.keyStorage="sys::status",this.timeInterval=null,this.timeNow=new Date,this.hayPedidoPendiente=!1,this.timeRestanteAproxSource=new a.BehaviorSubject(0),this.timeRestanteAprox$=this.timeRestanteAproxSource.asObservable(),this.hayCuentaClienteSource=new a.BehaviorSubject(null),this.hayCuentaCliente$=this.hayCuentaClienteSource.asObservable(),this.deserializar(),this.dataPost={idsede:this.infoTokenService.getInfoUs().idsede,idcliente:this.infoTokenService.getInfoUs().idcliente}}deserializar(){let e=localStorage.getItem(this.keyStorage);e="{}"===e?null:e,this.estadoPedido=e?JSON.parse(e):new r.a}get(){this.deserializar(),this.getCuentaTotales()}getCuentaTotales(){let e=0;return this.crudService.postFree(this.dataPost,"pedido","lacuenta-cliente-totales",!1).subscribe(t=>{0!==t.data.length?(e=t.data[0].importe||0,this.setImporte(e),this.estadoPedido.hayPedidoCliente=!0,this.calcTimeAprox(),this.notifyChange()):this.estadoPedido.hayPedidoCliente=!1}),e}getCuenta(){this.crudService.postFree(this.dataPost,"pedido","lacuenta-cliente",!1).subscribe(e=>{if(0!==e.data.length)return this.estadoPedido.hayPedidoCliente=!0,this.calcTimeAprox(),this.hayCuentaClienteSource.next(e),this.notifyChange(),e;this.estadoPedido.hayPedidoCliente=!1})}getImporteCuenta(){return new Promise(e=>{this.crudService.postFree(this.dataPost,"pedido","lacuenta-cliente-totales",!1).subscribe(t=>{e(t.success?t.data[0].importe:0)})})}getObj(){return this.estadoPedido||this.deserializar(),this.estadoPedido}setEstado(e){this.deserializar(),this.estadoPedido.estado=e,this.notifyChange()}setImporte(e){this.deserializar(),this.estadoPedido.importe=e,this.notifyChange()}setHoraInitPedido(e){this.deserializar(),this.estadoPedido.horaInt=e,this.notifyChange()}setTimeAprox(e){this.deserializar(),this.estadoPedido.isTiempoAproxCumplido=e,this.notifyChange()}setHayPedidoPendiente(e){this.deserializar(),this.estadoPedido.hayPedidoClientePendiente=e,this.notifyChange()}setisPagada(e){this.deserializar(),this.estadoPedido.isPagada=e,this.notifyChange()}setisRegisterPago(e){this.deserializar(),this.estadoPedido.isRegisterOnePago=e,this.notifyChange()}calcTimeAprox(){this.crudService.postFree(this.dataPost,"pedido","calc-time-despacho",!1).subscribe(e=>{this.estadoPedido.estado=0,this.estadoPedido.numMinAprox=e.data[0].rpt,this.estadoPedido.isTiempoAproxCumplido=!1,this.notifyChange(),this.getTimeAprox()})}getTimeAprox(){return 0===this.estadoPedido.estado?this.timeInterval=setTimeout(()=>{let e=this.calTimeMin();e<=0?(this.estadoPedido.estado=1,this.notifyChange(),this.clearTimeout(),clearTimeout(this.timeInterval),e=0):this.getTimeAprox(),this.timeRestanteAproxSource.next(e)},2e3):this.clearTimeout(),0}calTimeMin(){let e=(new Date).getTime()-this.estadoPedido.horaInt;return e=Math.round(e%864e5%36e5/6e4),e=this.estadoPedido.numMinAprox-e,isNaN(e)?0:e}clearTimeout(){clearTimeout(this.timeInterval),this.timeInterval=null}notifyChange(){this.listenStatusService.setEstadoPedido(this.estadoPedido),localStorage.setItem(this.keyStorage,JSON.stringify(this.estadoPedido))}}return e.\u0275fac=function(t){return new(t||e)(c.Vb(n.a),c.Vb(o.a),c.Vb(s.a))},e.\u0275prov=c.Hb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()},PCNd:function(e,t,i){"use strict";i.d(t,"a",(function(){return s}));var r=i("ofXK"),n=i("FDOz"),o=i("fXoL");let s=(()=>{class e{}return e.\u0275mod=o.Jb({type:e}),e.\u0275inj=o.Ib({factory:function(t){return new(t||e)},imports:[[r.c,n.a],n.a]}),e})()},VKeD:function(e,t,i){"use strict";function r(){return"function"==typeof Symbol&&Symbol.iterator?Symbol.iterator:"@@iterator"}t.getSymbolIterator=r,t.iterator=r(),t.$$iterator=t.iterator},Vi6O:function(e,t,i){"use strict";var r=this&&this.__extends||function(){var e=function(t,i){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var i in t)t.hasOwnProperty(i)&&(e[i]=t[i])})(t,i)};return function(t,i){function r(){this.constructor=t}e(t,i),t.prototype=null===i?Object.create(i):(r.prototype=i.prototype,new r)}}();t.InnerSubscriber=function(e){function t(t,i,r){var n=e.call(this)||this;return n.parent=t,n.outerValue=i,n.outerIndex=r,n.index=0,n}return r(t,e),t.prototype._next=function(e){this.parent.notifyNext(this.outerValue,e,this.outerIndex,this.index++,this)},t.prototype._error=function(e){this.parent.notifyError(e,this),this.unsubscribe()},t.prototype._complete=function(){this.parent.notifyComplete(this),this.unsubscribe()},t}(i("FWf1").Subscriber)},Y4kR:function(e,t,i){"use strict";var r=this&&this.__extends||function(){var e=function(t,i){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var i in t)t.hasOwnProperty(i)&&(e[i]=t[i])})(t,i)};return function(t,i){function r(){this.constructor=t}e(t,i),t.prototype=null===i?Object.create(i):(r.prototype=i.prototype,new r)}}();t.OuterSubscriber=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return r(t,e),t.prototype.notifyNext=function(e,t,i,r,n){this.destination.next(t)},t.prototype.notifyError=function(e,t){this.destination.error(e)},t.prototype.notifyComplete=function(e){this.destination.complete()},t}(i("FWf1").Subscriber)},Z5tI:function(e,t,i){"use strict";var r=i("MkmW");t.subscribeToPromise=function(e){return function(t){return e.then((function(e){t.closed||(t.next(e),t.complete())}),(function(e){return t.error(e)})).then(null,r.hostReportError),t}}},cSoz:function(e,t,i){"use strict";var r=i("Vi6O"),n=i("6qA3"),o=i("Q1FS");t.subscribeToResult=function(e,t,i,s,a){if(void 0===a&&(a=new r.InnerSubscriber(e,i,s)),!a.closed)return t instanceof o.Observable?t.subscribe(a):n.subscribeTo(t)(a)}},"nYx/":function(e,t,i){"use strict";i.d(t,"a",(function(){return a}));var r=i("zOUh"),n=i("+lji"),o=i("yFR0"),s=i("fXoL");let a=(()=>{class e{constructor(e,t,i){this.infoTokenService=e,this.crudService=t,this.socketService=i,this.infoToken=this.infoTokenService.getInfoUs()}getSubtotales(){this.objTotales=JSON.parse(atob(localStorage.getItem("sys::st")))}registrarPago(e,t,i,r=!1){this.getSubtotales();const n={idcliente:this.infoToken.idcliente,idorg:this.infoToken.idorg,idsede:this.infoToken.idsede,mesa:this.infoToken.numMesaLector,importe:e},o={idcliente:n.idcliente,idorg:n.idorg,idsede:n.idsede,mesa:n.mesa,importe:n.importe,isdelivery:r,objSubTotal:this.objTotales,objTransaction:t,objCliente:i,objOperacion:n};this.crudService.postFree(o,"transaction","registrar-pago",!1).subscribe(e=>{this.socketService.emit("notificar-pago-pwa",o)})}getIpClient(){let e="";return this.crudService.getFree("https://api.ipify.org?format=jsonp&callback=?").subscribe(t=>{e=t.ip}),e}getDataTrasaction(){return this.loadDataTransaction(),this.responseTransaction.isSuccess=!(this.responseTransaction&&!this.responseTransaction.error),this.responseTransaction}setIdRegistroPagoTransaction(e){this.loadDataTransaction(),this.responseTransaction.idregistro_pago=e,this.upDataTransaction()}loadDataTransaction(){this.responseTransaction=JSON.parse(localStorage.getItem("sys::transaction-response"))}upDataTransaction(){localStorage.setItem("sys::transaction-response",JSON.stringify(this.responseTransaction))}removeLocalDataTransaction(){localStorage.removeItem("sys::transaction-response"),this.responseTransaction=null}}return e.\u0275fac=function(t){return new(t||e)(s.Vb(r.a),s.Vb(n.a),s.Vb(o.a))},e.\u0275prov=s.Hb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()},ozli:function(e,t,i){"use strict";var r=i("zfKp");t.subscribeToObservable=function(e){return function(t){var i=e[r.observable]();if("function"!=typeof i.subscribe)throw new TypeError("Provided object does not correctly implement Symbol.observable");return i.subscribe(t)}}},poJ0:function(e,t,i){"use strict";var r=i("VKeD");t.subscribeToIterable=function(e){return function(t){for(var i=e[r.iterator]();;){var n=i.next();if(n.done){t.complete();break}if(t.next(n.value),t.closed)break}return"function"==typeof i.return&&t.add((function(){i.return&&i.return()})),t}}},yRPT:function(e,t,i){"use strict";t.isArrayLike=function(e){return e&&"number"==typeof e.length&&"function"!=typeof e}}}]);