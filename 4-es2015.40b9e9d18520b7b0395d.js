(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"2dOp":function(t,e,i){"use strict";i.d(e,"a",(function(){return n}));class n{}},"6eTy":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.cpa=function(t,e){var i=(0,n.headingDistanceTo)(t.location,e.location),c=i.distance,s=i.heading,l=c*Math.sin((0,a.degToRad)(s)),d=c*Math.cos((0,a.degToRad)(s)),u={position:{x:0,y:0},vector:{x:t.speed*Math.sin((0,a.degToRad)(t.heading)),y:t.speed*Math.cos((0,a.degToRad)(t.heading))}},h={position:{x:l,y:d},vector:{x:e.speed*Math.sin((0,a.degToRad)(e.heading)),y:e.speed*Math.cos((0,a.degToRad)(e.heading))}};return{time:r(u,h),distance:o(u,h)}},e.cpaTime=r,e.cpaDistance=o;var n=i("RvDl"),a=i("9TDR");function r(t,e){var i=d(t.vector,e.vector),n=c(i,i);return n<1e-8?0:-c(d(t.position,e.position),i)/n}function o(t,e){var i=r(t,e);return function(t){return Math.sqrt(c(t,t))}(d(s(t.position,l(i,t.vector)),s(e.position,l(i,e.vector))))}function c(t,e){return t.x*e.x+t.y*e.y}function s(t,e){return{x:t.x+e.x,y:t.y+e.y}}function l(t,e){return{x:t*e.x,y:t*e.y}}function d(t,e){return{x:t.x-e.x,y:t.y-e.y}}},"9TDR":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.degToRad=function(t){return t*Math.PI/180},e.radToDeg=function(t){return 180*t/Math.PI},e.knotsToMeterPerSecond=function(t){return.514444*t},e.meterPerSecondToKnots=function(t){return t/.514444},e.knotsToKmPerHour=function(t){return 1.852*t},e.kmPerHourToKnots=function(t){return t/1.852}},"Pg/a":function(t,e,i){"use strict";i.d(e,"a",(function(){return O}));var n=i("fXoL"),a=i("3Pt+"),r=i("AA5P"),o=i("+lji"),c=i("2dOp"),s=i("JOr0"),l=i("nx09"),d=i("zOUh"),u=i("wne+"),h=i("pxUr"),f=i("bSwM"),g=i("ofXK"),p=i("kmnG"),b=i("qFsG"),m=i("QibW"),v=i("bTqV"),C=i("0IaG");const M=["search"],y=["registerForm"];function R(t,e){if(1&t){const t=n.Sb();n.Pb(0),n.Rb(1,"mat-form-field",3),n.Rb(2,"input",35,36),n.Zb("ngModelChange",(function(e){return n.xc(t),n.dc().dataCliente.direccion=e}))("keydown.enter",(function(e){return n.xc(t),e.preventDefault()}))("keyup",(function(){n.xc(t);const e=n.uc(3);return n.dc().checkDireccion(e.value)})),n.Qb(),n.Qb(),n.Ob()}if(2&t){const t=n.dc();n.zb(2),n.lc("ngModel",t.dataCliente.direccion)}}function D(t,e){if(1&t){const t=n.Sb();n.Rb(0,"div",9),n.Rb(1,"mat-form-field",3),n.Mb(2,"input",37,38),n.Qb(),n.Rb(4,"button",39),n.Zb("click",(function(){n.xc(t);const e=n.uc(3);return n.dc().getDirCoordenadas(e.value)})),n.Mb(5,"span",40),n.Qb(),n.Qb()}}function w(t,e){if(1&t){const t=n.Sb();n.Rb(0,"div",41),n.Rb(1,"button",42),n.Zb("click",(function(){return n.xc(t),n.dc().confirmarDireccion()})),n.Fc(2,"Confirmar"),n.Qb(),n.Qb()}}function L(t,e){1&t&&n.Nb(0)}function T(t,e){1&t&&n.Fc(0," Listo Guardar ")}function k(t,e){1&t&&(n.Pb(0),n.Mb(1,"i",44),n.Fc(2," Guardando ... "),n.Ob())}function x(t,e){1&t&&(n.Mb(0,"i",45),n.Fc(1," Hecho "))}function I(t,e){if(1&t&&(n.Dc(0,k,3,0,"ng-container",7),n.Dc(1,x,2,0,"ng-template",null,43,n.Ec)),2&t){const t=n.uc(2),e=n.dc();n.lc("ngIf",1===e.loader)("ngIfElse",t)}}function Q(t,e){1&t&&(n.Rb(0,"p",46),n.Fc(1,"Indique direccion y una referencia."),n.Qb())}function _(t,e){1&t&&(n.Rb(0,"p",47),n.Fc(1,"El servicio no esta disponible en esta ubicaci\xf3n."),n.Qb())}let O=(()=>{class t{constructor(t,e,i,a,r,o,c,s,l){this.formBuilder=t,this.mapsAPILoader=e,this.ngZone=i,this.verifyClientService=a,this.crudService=r,this.miPedidoService=o,this.inforTokenService=c,this.utilService=s,this.establecimientoService=l,this.loader=0,this.dirInCoordenadas=!1,this.isUsCliente=!0,this.countMoveMap=0,this.isChangeDireccion=!0,this.checkekFirstOption=!0,this.isGuardarDireccion=!0,this.dataMaps=new n.n,this.saveDireccionOk=new n.n,this.isDireccionValid=!0,this.mapCenter={},this._componentRestrictions={country:"pe"},this.markerClicked=t=>{this.map&&this.map.setCenter({lat:t.latitude,lng:t.longitude})}}ngOnInit(){this.dataCliente=new c.a,this.inforTokenService.getInfoUs(),this.isUsCliente=this.inforTokenService.getInfoUs().isCliente,this.loadForm()}ngAfterViewInit(){this.loadInitComponent()}loadInitComponent(){this.mapsAPILoader.load().then(()=>{this.setCurrentLocation(),this.geoCoder=new google.maps.Geocoder;const t=new google.maps.places.Autocomplete(this.searchElementRef.nativeElement,{componentRestrictions:this._componentRestrictions});t.addListener("place_changed",()=>{this.ngZone.run(()=>{const e=t.getPlace();this.countMoveMap=0,this.dataMapa=e,this.address=e.formatted_address,null!=e.geometry&&(this.latitude=e.geometry.location.lat(),this.longitude=e.geometry.location.lng(),this.zoom=17,this.isChangeDireccion=!1,this.mapCenter.lat=this.latitude,this.mapCenter.lng=this.longitude,setTimeout(()=>{this.isChangeDireccion=!0},500))})})})}setCurrentLocation(){if(!1===this.isUsCliente)return this.dataInfoSede=this.miPedidoService.objDatosSede.datossede[0],this.latitude=this.dataInfoSede.latitude,this.longitude=this.dataInfoSede.longitude,void(this.zoom=17);"geolocation"in navigator&&navigator.geolocation.getCurrentPosition(t=>{this.latitude=t.coords.latitude,this.longitude=t.coords.longitude,this.zoom=17,this.getAddress(this.latitude,this.longitude)})}markerDragEnd(t){this.latitude=t.coords.lat,this.longitude=t.coords.lng}getDirCoordenadas(t){const e=t.split(","),i=parseFloat(e[0]),n=parseFloat(e[1]);this.latitude=i,this.longitude=n,this.isChangeDireccion=!0,this.getAddress(i,n)}getAddress(t,e){this.geoCoder.geocode({location:{lat:t,lng:e}},(t,e)=>{if("OK"===e&&t[0]&&(this.zoom=17,this.address=t[0].formatted_address,this.dataMapa=t[0],this.isChangeDireccion&&(this.dataCliente.direccion=this.address),this.dirInCoordenadas&&this.registerForm.controls.direccion.patchValue(this.dataCliente.direccion),!this.isUsCliente)){const t=this.searchTypeMap("locality");this.isDireccionValid=t.toLowerCase().trim()===this.dataInfoSede.ciudad.toLowerCase().trim()}})}loadForm(){this.registerForm=this.formBuilder.group({direccion:["",a.t.required],referencia:[this.dataCliente.referencia,a.t.required],longitude:[this.longitude,a.t.required],latitude:[this.latitude,a.t.required],titulo:this.dataCliente.titulo||"Casa"}),this.registerForm.statusChanges.subscribe(t=>{"VALID"===t&&this.guardarDireccion()})}checkDireccion(t){""===t.trim()&&(this.longitude=null,this.latitude=null)}guardarDireccion(){this.isDireccionValid&&(this.dataCliente.direccion=this.address,this.dataCliente.idcliente=this.isUsCliente?this.verifyClientService.getDataClient().idcliente:this.idClienteBuscar,this.dataCliente.longitude=this.mapCenter.lng,this.dataCliente.latitude=this.mapCenter.lat,this.dataCliente.referencia=this.utilService.addslashes(this.dataCliente.referencia),this.dataCliente.ciudad=this.searchTypeMap("locality"),this.dataCliente.provincia=this.searchTypeMap("administrative_area_level_2"),this.dataCliente.departamento=this.searchTypeMap("administrative_area_level_1"),this.dataCliente.pais=this.searchTypeMap("country"),this.dataCliente.codigo=this.searchTypeMap("postal_code"))}saveDireccion(){if(this.loader=1,this.dataCliente.titulo=this.dataCliente.titulo||"Casa",!this.isGuardarDireccion)return this.loader=2,this.dataCliente.idcliente_pwa_direccion=null,void this.saveDireccionOk.emit(this.dataCliente);this.isUsCliente&&this.countMoveMap>1?(this.getAddress(this.mapCenter.lat,this.mapCenter.lng),setTimeout(()=>{this.guardarDireccion(),this.setBdDireccion()},1500)):this.setBdDireccion()}setBdDireccion(){this.dataCliente.referencia=this.utilService.addslashes(this.dataCliente.referencia),this.crudService.postFree(this.dataCliente,"cliente","new-direccion",!1).subscribe(t=>{setTimeout(()=>{this.loader=2,setTimeout(()=>{this.dataCliente.idcliente_pwa_direccion=t.data[0].idcliente_pwa_direccion,this.saveDireccionOk.emit(this.dataCliente),this.countMoveMap=1},500)},1e3)})}searchTypeMap(t){let e="";return this.dataMapa.address_components.map(i=>{i.types.map(n=>{if(n===t)return e=i.long_name,e})}),e}mapReady(t){this.map=t}idleMap(){this.countMoveMap++}centerChange(t){t&&(this.mapCenter.lat=t.lat,this.mapCenter.lng=t.lng)}clickmap(){this.isChangeDireccion=!0}confirmarDireccion(){this.countMoveMap=1,this.getAddress(this.mapCenter.lat,this.mapCenter.lng)}}return t.\u0275fac=function(e){return new(e||t)(n.Lb(a.c),n.Lb(h.d),n.Lb(n.z),n.Lb(r.a),n.Lb(o.a),n.Lb(l.a),n.Lb(d.a),n.Lb(u.a),n.Lb(s.a))},t.\u0275cmp=n.Fb({type:t,selectors:[["app-agregar-direccion"]],viewQuery:function(t,e){var i;1&t&&(n.Kc(M,!0),n.Kc(y,!0),n.Kc(M,!0)),2&t&&(n.tc(i=n.ac())&&(e.searchElementRef=i.first),n.tc(i=n.ac())&&(e.myForm=i.first),n.tc(i=n.ac())&&(e.agmMap=i.first))},inputs:{idClienteBuscar:"idClienteBuscar",isGuardarDireccion:"isGuardarDireccion"},outputs:{dataMaps:"dataMaps",saveDireccionOk:"saveDireccionOk"},decls:56,vars:19,consts:[[1,"bg-warning","pt-3","pr-3","pl-3","p-1"],[1,"fs-13"],[3,"formGroup"],[1,"w-100"],[1,"p-3"],[1,"text-secondary","fw-100","fs-11"],[1,"fs-11","mt-2","text-info",3,"change"],[4,"ngIf","ngIfElse"],["elseTemplateCoordenadas",""],[1,"w-100","d-flex","justify-content-between"],["matInput","","maxlength","150","placeholder","Referencia / piso / oficina","formControlName","referencia",1,"input-headline",3,"ngModel","ngModelChange"],[1,"btn-in-input","btn","btn-sm","btn-info",3,"disabled","click"],["hidden","true"],["matInput","","placeholder","Referencia / piso / oficina","formControlName","longitude",1,"input-headline",3,"ngModel","ngModelChange"],["matInput","","placeholder","Referencia / piso / oficina","formControlName","latitude",1,"input-headline",3,"ngModel","ngModelChange"],["id","map_canvas",1,"border"],[3,"latitude","longitude","zoom","centerChange","mapClick","idle"],[1,"centerMarker"],["class","btn-confirmar-dir",4,"ngIf"],[1,"fw-600","fs-13"],[1,"fs-13",3,"ngModel","ngModelChange"],["radioGroup","matRadioGroup"],["value","Casa",1,"pr-3",3,"checked"],["value","Trabajo",1,"pr-3"],["value","Novi@",1,"pr-3"],["value","Otro",1,"pr-3"],[1,"text-center","pb-3"],["mat-flat-button","","mat-dialog-close","",1,"mr-3"],[1,"fa","fa-arrow-left"],["mat-flat-button","","color","primary",3,"disabled","click"],[4,"ngIf","ngIfThen","ngIfElse"],["thenTemplate",""],["elseTemplate",""],["class","fw-600 text-danger fs-14",4,"ngIf"],["class","fw-600 text-danger fs-16",4,"ngIf"],["matInput","","placeholder","Direccion","formControlName","direccion","autocorrect","off","autocapitalize","off","spellcheck","off","type","text","id","search",1,"input-headline",3,"ngModel","ngModelChange","keydown.enter","keyup"],["search",""],["matInput","","placeholder","Coordenadas",1,"input-headline"],["text_coordenadas",""],[1,"btn-in-input","btn","btn-sm","btn-info",3,"click"],[1,"fa","fa-search"],[1,"btn-confirmar-dir"],[1,"btn","btn-success",3,"click"],["elseTemplateHecho",""],[1,"fa","fa-spinner","fa-spin","fa-fw"],[1,"fa","fa-check"],[1,"fw-600","text-danger","fs-14"],[1,"fw-600","text-danger","fs-16"]],template:function(t,e){if(1&t&&(n.Rb(0,"div",0),n.Rb(1,"p",1),n.Fc(2,"Indique la direccion exacta de entrega. "),n.Rb(3,"strong"),n.Fc(4,"Se tomara como referencia el punto que especifica en el mapa."),n.Qb(),n.Qb(),n.Qb(),n.Rb(5,"div"),n.Rb(6,"form",2),n.Rb(7,"div",3),n.Rb(8,"div",4),n.Rb(9,"span",5),n.Fc(10,"Escriba el nombre de la calle numero y ciudad. No es necesario escribir: Jiron, jr, pasaje, av, etc."),n.Qb(),n.Rb(11,"div"),n.Rb(12,"mat-checkbox",6),n.Zb("change",(function(){return e.dirInCoordenadas=!e.dirInCoordenadas})),n.Fc(13,"Ingresar direccion en coordenadas: Lat, Lng."),n.Qb(),n.Qb(),n.Dc(14,R,4,1,"ng-container",7),n.Dc(15,D,6,0,"ng-template",null,8,n.Ec),n.Rb(17,"div",9),n.Rb(18,"mat-form-field",3),n.Rb(19,"input",10),n.Zb("ngModelChange",(function(t){return e.dataCliente.referencia=t})),n.Qb(),n.Qb(),n.Rb(20,"button",11),n.Zb("click",(function(){return e.saveDireccion()})),n.Fc(21,"Listo"),n.Qb(),n.Qb(),n.Rb(22,"div",12),n.Rb(23,"mat-form-field",3),n.Rb(24,"input",13),n.Zb("ngModelChange",(function(t){return e.longitude=t})),n.Qb(),n.Qb(),n.Rb(25,"mat-form-field",3),n.Rb(26,"input",14),n.Zb("ngModelChange",(function(t){return e.latitude=t})),n.Qb(),n.Qb(),n.Qb(),n.Rb(27,"div",15),n.Rb(28,"agm-map",16),n.Zb("centerChange",(function(t){return e.centerChange(t)}))("mapClick",(function(){return e.clickmap()}))("idle",(function(){return e.idleMap()})),n.Qb(),n.Mb(29,"div",17),n.Dc(30,w,3,0,"div",18),n.Qb(),n.Qb(),n.Qb(),n.Qb(),n.Rb(31,"div",4),n.Rb(32,"p",19),n.Fc(33,"Esta es la direcci\xf3n de mi:"),n.Qb(),n.Rb(34,"mat-radio-group",20,21),n.Zb("ngModelChange",(function(t){return e.dataCliente.titulo=t})),n.Rb(36,"mat-radio-button",22),n.Fc(37,"Casa"),n.Qb(),n.Rb(38,"mat-radio-button",23),n.Fc(39,"Trabajo"),n.Qb(),n.Rb(40,"mat-radio-button",24),n.Fc(41,"Novi@"),n.Qb(),n.Rb(42,"mat-radio-button",25),n.Fc(43,"Otro"),n.Qb(),n.Qb(),n.Qb(),n.Rb(44,"div",26),n.Rb(45,"button",27),n.Mb(46,"i",28),n.Fc(47," Atras "),n.Qb(),n.Rb(48,"button",29),n.Zb("click",(function(){return e.saveDireccion()})),n.Dc(49,L,1,0,"ng-container",30),n.Dc(50,T,1,0,"ng-template",null,31,n.Ec),n.Dc(52,I,3,2,"ng-template",null,32,n.Ec),n.Qb(),n.Dc(54,Q,2,0,"p",33),n.Dc(55,_,2,0,"p",34),n.Qb(),n.Qb()),2&t){const t=n.uc(16),i=n.uc(51),a=n.uc(53);n.zb(6),n.lc("formGroup",e.registerForm),n.zb(8),n.lc("ngIf",!e.dirInCoordenadas)("ngIfElse",t),n.zb(5),n.lc("ngModel",e.dataCliente.referencia),n.zb(1),n.lc("disabled",!e.registerForm.valid||e.loader>0||!e.isDireccionValid),n.zb(4),n.lc("ngModel",e.longitude),n.zb(2),n.lc("ngModel",e.latitude),n.zb(2),n.lc("latitude",e.latitude)("longitude",e.longitude)("zoom",e.zoom),n.zb(2),n.lc("ngIf",e.countMoveMap>1),n.zb(4),n.lc("ngModel",e.dataCliente.titulo),n.zb(2),n.lc("checked",e.checkekFirstOption),n.zb(12),n.lc("disabled",!e.registerForm.valid||e.loader>0||!e.isDireccionValid),n.zb(1),n.lc("ngIf",0===e.loader)("ngIfThen",i)("ngIfElse",a),n.zb(5),n.lc("ngIf",!e.registerForm.valid),n.zb(1),n.lc("ngIf",!e.isDireccionValid)}},directives:[a.u,a.n,a.g,f.a,g.n,p.b,b.a,a.b,a.i,a.m,a.f,h.b,m.b,a.p,m.a,v.a,C.c],styles:["agm-map[_ngcontent-%COMP%]{height:300px}.btn-in-input[_ngcontent-%COMP%]{top:17px;position:relative;width:50px;height:30px;margin-left:10px}.input-headline[_ngcontent-%COMP%]{font-size:13px;line-height:13px}#map_canvas[_ngcontent-%COMP%]{position:relative}#map_canvas[_ngcontent-%COMP%]   .centerMarker[_ngcontent-%COMP%]{position:absolute;background:url(//maps.gstatic.com/mapfiles/markers2/marker.png) no-repeat;top:50%;left:50%;z-index:1;margin-left:-10px;margin-top:-34px;height:34px;width:20px;cursor:pointer}.btn-confirmar-dir[_ngcontent-%COMP%]{width:100%;text-align:center;position:absolute;bottom:10px}"]}),t})()},RvDl:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.EARTH_RADIUS=void 0,e.isEqual=function(t,e){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;return!(!t||!e)&&Math.abs(b(t)-b(e))<=i&&Math.abs(p(t)-p(e))<=i},e.isLatLon=s,e.isLatLng=l,e.isLatitudeLongitude=d,e.isLonLatTuple=u,e.getLocationType=h,e.createLocation=f,e.toLatLon=function(t){if(u(t))return{lat:t[1],lon:t[0]};if(s(t))return{lat:t.lat,lon:t.lon};if(l(t))return{lat:t.lat,lon:t.lng};if(d(t))return{lat:t.latitude,lon:t.longitude};throw new Error("Unknown location format "+JSON.stringify(t))},e.toLatLng=function(t){if(u(t))return{lat:t[1],lng:t[0]};if(s(t))return{lat:t.lat,lng:t.lon};if(l(t))return{lat:t.lat,lng:t.lng};if(d(t))return{lat:t.latitude,lng:t.longitude};throw new Error("Unknown location format "+JSON.stringify(t))},e.toLatitudeLongitude=function(t){if(u(t))return{latitude:t[1],longitude:t[0]};if(s(t))return{latitude:t.lat,longitude:t.lon};if(l(t))return{latitude:t.lat,longitude:t.lng};if(d(t))return{latitude:t.latitude,longitude:t.longitude};throw new Error("Unknown location format "+JSON.stringify(t))},e.toLonLatTuple=g,e.getLongitude=p,e.getLatitude=b,e.moveTo=m,e.headingDistanceTo=v,e.headingTo=function(t,e){return v(t,e).heading},e.distanceTo=C,e.insideBoundingBox=function(t,e){var i=b(t),n=p(t),a=p(e.topLeft),r=b(e.topLeft),o=p(e.bottomRight),c=b(e.bottomRight),s=Math.min(r,c),l=Math.max(r,c),d=Math.min(a,o),u=Math.max(a,o);return n>=d&&n<=u&&i>=s&&i<=l},e.insidePolygon=function(t,e){if(!e||!Array.isArray(e))throw new TypeError("Invalid polygon. Array with locations expected");if(0===e.length)throw new TypeError("Invalid polygon. Non-empty Array expected");return(0,a.default)(g(t),e.map(g))},e.insideCircle=function(t,e,i){return C(e,t)<=i},e.normalizeHeading=function(t){var e=t%360;return e<0&&(e+=360),e>=360&&(e-=360),e},e.normalizeLatitude=M,e.normalizeLongitude=y,e.normalizeLocation=function(t){if(u(t))return[y(t[0]),M(t[1])];if(s(t))return{lat:M(t.lat),lon:y(t.lon)};if(l(t))return{lat:M(t.lat),lng:y(t.lng)};if(d(t))return{latitude:M(t.latitude),longitude:y(t.longitude)};throw new Error("Unknown location format "+JSON.stringify(t))},e.average=function(t){if(!Array.isArray(t)||0===t.length)return null;var e=t[0];return f(R(t.map(b)),R(t.map(p)),h(e))},e.getBoundingBox=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;if(!Array.isArray(t)||0===t.length)return{topLeft:null,bottomRight:null};var i=h(t[0]),n=Math.max.apply(Math,o(t.map(b))),a=Math.min.apply(Math,o(t.map(p))),r=Math.min.apply(Math,o(t.map(b))),c=Math.max.apply(Math,o(t.map(p))),s=f(n,a,i),l=f(r,c,i);if(null===e||0===e)return{topLeft:s,bottomRight:l};var d=Math.SQRT2*e;return{topLeft:m(s,{heading:315,distance:d}),bottomRight:m(l,{heading:135,distance:d})}};var n,a=(n=i("cQc6"))&&n.__esModule?n:{default:n},r=i("9TDR");function o(t){if(Array.isArray(t)){for(var e=0,i=Array(t.length);e<t.length;e++)i[e]=t[e];return i}return Array.from(t)}var c=e.EARTH_RADIUS=6378137;function s(t){return!!t&&"number"==typeof t.lat&&"number"==typeof t.lon}function l(t){return!!t&&"number"==typeof t.lat&&"number"==typeof t.lng}function d(t){return!!t&&"number"==typeof t.latitude&&"number"==typeof t.longitude}function u(t){return Array.isArray(t)&&"number"==typeof t[0]&&"number"==typeof t[1]}function h(t){if(u(t))return"LonLatTuple";if(s(t))return"LatLon";if(l(t))return"LatLng";if(d(t))return"LatitudeLongitude";throw new Error("Unknown location format "+JSON.stringify(t))}function f(t,e,i){if("LonLatTuple"===i)return[e,t];if("LatLon"===i)return{lat:t,lon:e};if("LatLng"===i)return{lat:t,lng:e};if("LatitudeLongitude"===i)return{latitude:t,longitude:e};throw new Error("Unknown location format "+JSON.stringify(location))}function g(t){if(u(t))return[t[0],t[1]];if(s(t))return[t.lon,t.lat];if(l(t))return[t.lng,t.lat];if(d(t))return[t.longitude,t.latitude];throw new Error("Unknown location format "+JSON.stringify(t))}function p(t){if(u(t))return t[0];if(s(t))return t.lon;if(l(t))return t.lng;if(d(t))return t.longitude;throw new Error("Unknown location format "+JSON.stringify(t))}function b(t){if(u(t))return t[1];if(s(t))return t.lat;if(l(t))return t.lat;if(d(t))return t.latitude;throw new Error("Unknown location format "+JSON.stringify(t))}function m(t,e){var i=b(t),n=p(t),a=e.heading,o=e.distance,s=o*Math.cos((0,r.degToRad)(a))/c,l=o*Math.sin((0,r.degToRad)(a))/(c*Math.cos((0,r.degToRad)(i)));return f(i+(0,r.radToDeg)(s),n+(0,r.radToDeg)(l),h(t))}function v(t,e){var i=b(t),n=p(t),a=b(e),o=p(e),s=(0,r.degToRad)(i),l=(0,r.degToRad)(a),d=(0,r.degToRad)(a-i),u=(0,r.degToRad)(o-n),h=Math.sin(d/2)*Math.sin(d/2)+Math.cos(s)*Math.cos(l)*Math.sin(u/2)*Math.sin(u/2),f=2*Math.atan2(Math.sqrt(h),Math.sqrt(1-h)),g=c*f,m=Math.sin(u)*Math.cos(l),v=Math.cos(s)*Math.sin(l)-Math.sin(s)*Math.cos(l)*Math.cos(u);return{distance:g,heading:(0,r.radToDeg)(Math.atan2(m,v))}}function C(t,e){return v(t,e).distance}function M(t){return Math.asin(Math.sin(t/180*Math.PI))*(180/Math.PI)}function y(t){var e=t%360;return e>180&&(e-=360),e<=-180&&(e+=360),e}function R(t){return function(t){return t.reduce((function(t,e){return t+e}),0)}(t)/t.length}},VhxH:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i("9TDR");Object.keys(n).forEach((function(t){"default"!==t&&"__esModule"!==t&&Object.defineProperty(e,t,{enumerable:!0,get:function(){return n[t]}})}));var a=i("RvDl");Object.keys(a).forEach((function(t){"default"!==t&&"__esModule"!==t&&Object.defineProperty(e,t,{enumerable:!0,get:function(){return a[t]}})}));var r=i("6eTy");Object.defineProperty(e,"cpa",{enumerable:!0,get:function(){return r.cpa}})},cQc6:function(t,e){t.exports=function(t,e){for(var i=t[0],n=t[1],a=!1,r=0,o=e.length-1;r<e.length;o=r++){var c=e[r][0],s=e[r][1],l=e[o][1];s>n!=l>n&&i<(e[o][0]-c)*(n-s)/(l-s)+c&&(a=!a)}return a}},lkOP:function(t,e,i){"use strict";i.d(e,"a",(function(){return d}));var n=i("fXoL"),a=i("AA5P"),r=i("+lji"),o=i("0IaG"),c=i("ofXK"),s=i("FKr1");function l(t,e){if(1&t){const t=n.Sb();n.Rb(0,"li",1),n.Zb("click",(function(){n.xc(t);const i=e.$implicit;return n.dc().selected(i)})),n.Rb(1,"div",2),n.Rb(2,"p",3),n.Fc(3),n.Qb(),n.Rb(4,"p",4),n.Fc(5),n.Qb(),n.Rb(6,"p",5),n.Fc(7),n.Qb(),n.Qb(),n.Qb()}if(2&t){const t=e.$implicit;n.zb(3),n.Gc(t.titulo),n.zb(2),n.Gc(t.direccion),n.zb(2),n.Gc(t.referencia)}}let d=(()=>{class t{constructor(t,e,i){this.data=t,this.crudService=e,this.verifyClientService=i,this.direccionSelected=new n.n}ngOnInit(){this.infoClienteLogueado=this.verifyClientService.getDataClient(),this.idClienteDirecciones=this.idClienteBuscar?this.idClienteBuscar:this.infoClienteLogueado.idcliente,this.loadDireccion()}loadDireccion(){this.listDirecciones=[],this.idClienteDirecciones&&"0"!==this.idClienteDirecciones.toString()&&this.crudService.postFree({idcliente:this.idClienteDirecciones},"delivery","get-direccion-cliente",!1).subscribe(t=>{this.listDirecciones=t.data})}selected(t){this.direccionSelected.emit(t)}}return t.\u0275fac=function(e){return new(e||t)(n.Lb(o.a),n.Lb(r.a),n.Lb(a.a))},t.\u0275cmp=n.Fb({type:t,selectors:[["app-seleccionar-direccion"]],inputs:{idClienteBuscar:"idClienteBuscar"},outputs:{direccionSelected:"direccionSelected"},decls:2,vars:1,consts:[["class","li-item","matRipple","",3,"click",4,"ngFor","ngForOf"],["matRipple","",1,"li-item",3,"click"],[1,"p-3"],[1,"fw-600","fs-14"],[1,"fw-100","fs-13"],[1,"fw-600","fs-12","text-secondary"]],template:function(t,e){1&t&&(n.Rb(0,"ul"),n.Dc(1,l,8,3,"li",0),n.Qb()),2&t&&(n.zb(1),n.lc("ngForOf",e.listDirecciones))},directives:[c.m,s.n],styles:["p[_ngcontent-%COMP%]{margin-bottom:0}.li-item[_ngcontent-%COMP%]{border-bottom:1px solid #d3d3d3}"]}),t})()}}]);