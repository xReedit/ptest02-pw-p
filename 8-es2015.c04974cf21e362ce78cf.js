(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"/mdI":function(t,i,e){"use strict";e.d(i,"a",(function(){return a}));class a{}},"9UHp":function(t,i,e){"use strict";e.d(i,"a",(function(){return b}));var a=e("fXoL"),s=e("ofXK");function n(t,i){1&t&&(a.Ob(0),a.Lb(1,"span",8),a.Nb())}function o(t,i){if(1&t&&(a.Qb(0,"span",6),a.Hc(1),a.Pb()),2&t){const t=a.cc();a.zb(1),a.Jc(" ",t.cantidad," ")}}function c(t,i){if(1&t){const t=a.Rb();a.Ob(0),a.Qb(1,"span",9),a.Yb("click",(function(){return a.wc(t),a.cc().menos()})),a.Pb(),a.Nb()}}function r(t,i){if(1&t){const t=a.Rb();a.Qb(0,"span",10),a.Yb("click",(function(){return a.wc(t),a.cc().menos()})),a.Pb()}}const d=function(t,i){return{headShake:t,cantidad:i}},h=function(t){return{fadeInUp:t}},l=function(t){return{headShake:t}};let b=(()=>{class t{constructor(){this.cantidad=0,this.showDetalle=!1,this.showAnimateStop=!1,this.isShowVisible=!0,this.timerViewAfter=0,this.countSegundos=10,this.isSuma=!0,this.objResponse=new a.n}set objItem(t){this._objItem=t,this.cantidad=this._objItem.cantidad_selected?this._objItem.cantidad_selected:0,this.cantidad=this._objItem.cantidad_seleccionada?this._objItem.cantidad_seleccionada:this.cantidad,this.cantidad_show=this.cantidad}ngOnInit(){this.zoom=this.zoom?this.zoom:1,this.showViewComprimir()}showCantDetalle(){return this.isSuma=!0,this.stopAdd&&!this.showDetalle&&0!==this.cantidad?(this.showDetalle=!0,this.timerViewAfter=this.countSegundos,void this.timerShowView()):this.stopAdd?(this.showAnimateStop=!0,void setTimeout(()=>{this.showAnimateStop=!1},200)):(this.add(),this.showDetalle=!0,this.timerViewAfter=this.countSegundos,void this.timerShowView())}timerShowView(){this.intervalShowaAfter=setInterval(()=>{this.timerViewAfter--,this.timerViewAfter<=0&&(this.timerViewAfter=0,this.showDetalle=!1===this.comprimir,clearInterval(this.intervalShowaAfter))},1e3)}add(){if(this.limitAdd=this.limitAdd?this.limitAdd:NaN,this.cantidad=this.cantidad_show!==this.cantidad?this.cantidad_show:this.cantidad,this.timerViewAfter=this.countSegundos,this.isSuma=!0,isNaN(this.limitAdd)||(this.stopAdd=this.limitAdd<=0),this.stopAdd)return this.showAnimateStop=!0,void setTimeout(()=>{this.showAnimateStop=!1},200);this.cantidad++,this.emitResponse()}menos(){console.log("menosss"),this.cantidad=this.cantidad_show!==this.cantidad?this.cantidad_show:this.cantidad,this.timerViewAfter=this.countSegundos,this.cantidad--,this.isSuma=!1,this.cantidad<0?this.showAnimateStop=!0:(this.showAnimateStop=!1,0===this.cantidad&&this.showViewComprimir(),this.emitResponse())}showViewComprimir(){this.showDetalle=!1===this.comprimir}emitResponse(){this._objItem||(this._objItem={}),this._objItem.cantidad_selected=this.cantidad,this._objItem.cantidad_seleccionada=this.cantidad,this.cantidad_show=this.cantidad,this._objItem.isSuma_selected=this.isSuma,this.objResponse.emit(this._objItem)}}return t.\u0275fac=function(i){return new(i||t)},t.\u0275cmp=a.Eb({type:t,selectors:[["app-comp-ctrl-add-fast"]],inputs:{stopAdd:"stopAdd",limitAdd:"limitAdd",zoom:"zoom",comprimir:"comprimir",quitarFadeUp:"quitarFadeUp",cantidad_show:"cantidad_show",objItem:"objItem"},outputs:{objResponse:"objResponse"},decls:15,vars:19,consts:[[1,"animated","fadeIn",3,"hidden"],[1,"btn-circle-add","btn-postion","animated",3,"ngClass","click"],[4,"ngIf","ngIfElse"],["elseTemplateCant",""],[1,"btn-detalle","btn-postion","animated",3,"ngClass","hidden"],["elseTemplate",""],[1,"fw-600"],[1,"fa","fa-plus","animated",3,"ngClass","click"],[1,"fa","fa-plus","fw-600"],[1,"fa","fa-trash",3,"click"],[1,"fa","fa-minus",3,"click"]],template:function(t,i){if(1&t&&(a.Qb(0,"div"),a.Qb(1,"div",0),a.Qb(2,"div",1),a.Yb("click",(function(){return i.showCantDetalle()})),a.Fc(3,n,2,0,"ng-container",2),a.Fc(4,o,2,1,"ng-template",null,3,a.Gc),a.Pb(),a.Pb(),a.Qb(6,"div",4),a.Qb(7,"div"),a.Fc(8,c,2,0,"ng-container",2),a.Fc(9,r,1,0,"ng-template",null,5,a.Gc),a.Pb(),a.Qb(11,"div",6),a.Hc(12),a.Pb(),a.Qb(13,"div"),a.Qb(14,"span",7),a.Yb("click",(function(){return i.add()})),a.Pb(),a.Pb(),a.Pb(),a.Pb()),2&t){const t=a.tc(5),e=a.tc(10);a.zb(1),a.kc("hidden",i.showDetalle),a.zb(1),a.kc("ngClass",a.qc(12,d,i.showAnimateStop,i.cantidad>0)),a.zb(1),a.kc("ngIf",0===i.cantidad)("ngIfElse",t),a.zb(3),a.Cc("zoom",i.zoom),a.kc("ngClass",a.pc(15,h,!i.quitarFadeUp))("hidden",!i.showDetalle),a.zb(2),a.kc("ngIf",1===i.cantidad_show)("ngIfElse",e),a.zb(4),a.Ic(i.cantidad_show),a.zb(2),a.kc("ngClass",a.pc(17,l,i.showAnimateStop))}},directives:[s.q,s.t],styles:[".btn-postion[_ngcontent-%COMP%]{position:relative;float:right}.btn-circle-add[_ngcontent-%COMP%]{padding:5px;border:1px solid;border-radius:50%;font-size:10px;width:26px;text-align:center;color:#3f51b5}.btn-circle-add.cantidad[_ngcontent-%COMP%]{background:#3f51b5;color:#fff;font-weight:600}.btn-detalle[_ngcontent-%COMP%]{display:grid;width:89px;background:#3f51b5;color:#fff;grid-template-columns:auto 23px auto;text-align:center;padding:2px 5px;border-radius:5px;float:right}"],changeDetection:0}),t})()},DYek:function(t,i,e){"use strict";e.d(i,"a",(function(){return S}));var a=e("fXoL"),s=e("zOUh"),n=e("wne+"),o=e("+lji"),c=e("zkg+"),r=e("eI2u"),d=(e("/mdI"),e("ofXK")),h=e("bv9b"),l=e("Wp6s"),b=e("kmnG"),p=e("qFsG"),m=e("bSwM"),u=e("bTqV");function f(t,i){1&t&&(a.Qb(0,"div",4),a.Qb(1,"div"),a.Qb(2,"span"),a.Hc(3,"Verificando, un momento por favor..."),a.Pb(),a.Lb(4,"mat-progress-bar",5),a.Pb(),a.Pb())}const g=function(t){return{"text-danger animated flash":t}};function w(t,i){if(1&t){const t=a.Rb();a.Qb(0,"div",19),a.Qb(1,"p",20),a.Hc(2,"Se requiere un coreo para notificarle."),a.Pb(),a.Qb(3,"mat-form-field",21),a.Qb(4,"input",22,23),a.Yb("keyup",(function(){a.wc(t);const i=a.tc(5);return a.cc(2).verificarCorreo(i)})),a.Pb(),a.Pb(),a.Qb(6,"span",24),a.Hc(7,"Correo no valido"),a.Pb(),a.Lb(8,"hr"),a.Pb()}if(2&t){const t=a.cc(2);a.zb(1),a.kc("ngClass",a.pc(2,g,t.isViewAlertEmail)),a.zb(5),a.kc("hidden",t.isEmailValid)}}function P(t,i){1&t&&(a.Qb(0,"p",28),a.Hc(1,"Acepte los terminos."),a.Pb())}function v(t,i){if(1&t){const t=a.Rb();a.Qb(0,"div",8),a.Qb(1,"mat-checkbox",25),a.Yb("click",(function(){return a.wc(t),a.cc(2).goPagar()})),a.Hc(2,"Acepto los "),a.Qb(3,"a",26),a.Hc(4,"Terminos y condiciones"),a.Pb(),a.Pb(),a.Fc(5,P,2,0,"p",27),a.Lb(6,"hr"),a.Pb()}if(2&t){const t=a.cc(2);a.zb(5),a.kc("ngIf",t.isViewAlertTerminos)}}function T(t,i){if(1&t){const t=a.Rb();a.Qb(0,"div"),a.Qb(1,"div",6),a.Qb(2,"mat-card",7),a.Qb(3,"div",8),a.Qb(4,"p"),a.Hc(5,"Importe a pagar:"),a.Pb(),a.Qb(6,"div"),a.Qb(7,"p",9),a.Qb(8,"span",10),a.Hc(9,"S/."),a.Pb(),a.Qb(10,"span",11),a.Hc(11),a.dc(12,"number"),a.Pb(),a.Pb(),a.Pb(),a.Lb(13,"hr"),a.Fc(14,w,9,4,"div",12),a.Fc(15,v,7,1,"div",13),a.Qb(16,"div",14),a.Lb(17,"div",15),a.Qb(18,"div",16),a.Yb("click",(function(){return a.wc(t),a.cc().verificarCheckTerminos()})),a.Lb(19,"span",17),a.Qb(20,"span",18),a.Hc(21,"Pagar Aqui"),a.Pb(),a.Pb(),a.Pb(),a.Pb(),a.Pb(),a.Pb(),a.Pb()}if(2&t){const t=a.cc();a.zb(11),a.Ic(a.fc(12,5,t.importeTransaccion,"0.2")),a.zb(3),a.kc("ngIf",t.isRequiredEmail),a.zb(1),a.kc("ngIf",t.isDisabledCheck&&t.isEmailValid),a.zb(4),a.kc("hidden",!t.isLoadBtnPago),a.zb(1),a.kc("hidden",t.isLoadBtnPago)}}function C(t,i){if(1&t){const t=a.Rb();a.Ob(0),a.Qb(1,"div",32),a.Lb(2,"i",33),a.Qb(3,"p"),a.Hc(4,"Ups! hubo un problema."),a.Pb(),a.Pb(),a.Qb(5,"div",34),a.Qb(6,"div",8),a.Qb(7,"span",35),a.Hc(8),a.Lb(9,"br"),a.Hc(10),a.Lb(11,"br"),a.Hc(12),a.Lb(13,"br"),a.Pb(),a.Pb(),a.Pb(),a.Qb(14,"div",34),a.Qb(15,"div",8),a.Qb(16,"button",36),a.Yb("click",(function(){return a.wc(t),a.cc(2).btnFinListo(!1)})),a.Hc(17,"Regresar"),a.Pb(),a.Pb(),a.Pb(),a.Nb()}if(2&t){const t=a.cc(2);a.zb(8),a.Jc(" ",t.dataResTransaction.errorMessage," "),a.zb(2),a.Jc(" ",t.dataResTransaction.data.ACTION_DESCRIPTION," "),a.zb(2),a.Jc(" ",t.dataResTransaction.data.CARD," ")}}function k(t,i){if(1&t){const t=a.Rb();a.Qb(0,"div"),a.Qb(1,"div",34),a.Qb(2,"div",8),a.Qb(3,"p",37),a.Hc(4,"Pedido Confirmado"),a.Pb(),a.Lb(5,"hr"),a.Qb(6,"p"),a.Hc(7,"Su orden llegara pronto."),a.Pb(),a.Lb(8,"hr"),a.Lb(9,"img",38),a.Lb(10,"hr"),a.Qb(11,"p"),a.Hc(12,"Puede ver el estado de este en "),a.Lb(13,"br"),a.Qb(14,"strong"),a.Hc(15,"Mis Pedidos"),a.Pb(),a.Hc(16,"."),a.Pb(),a.Pb(),a.Pb(),a.Qb(17,"div",39),a.Qb(18,"button",40),a.Yb("click",(function(){return a.wc(t),a.cc(2).btnFinListo(!0)})),a.Hc(19," Listo. "),a.Pb(),a.Lb(20,"br"),a.Pb(),a.Pb()}}function I(t,i){if(1&t&&(a.Qb(0,"div",29),a.Fc(1,C,18,3,"ng-container",30),a.Fc(2,k,21,0,"ng-template",null,31,a.Gc),a.Pb()),2&t){const t=a.tc(3),i=a.cc();a.zb(1),a.kc("ngIf",i.dataResTransaction.error)("ngIfElse",t)}}let S=(()=>{class t{constructor(t,i,e,s){this.infoTokenService=t,this.utilService=i,this.crudService=e,this.listenStatusService=s,this.responseTransa=new a.n,this.repuestaBtnListo=new a.n(!1),this.isLoaderTransaction=!1,this.isLoadBtnPago=!1,this.isCheckTerminos=!1,this.isTrasctionSuccess=!1,this.isViewAlertTerminos=!1,this.isViewAlertEmail=!1,this.isEmailValid=!0,this.isRequiredEmail=!1,this.isDisabledCheck=!1,this.dataResTransaction=null,this.fechaTransaction=new Date,this.importeTransaccion=0,this.responseTranaccion={success:!1,data:{}},this.listenKeyLoader="sys::transaction-load",this.listenKeyData="sys::transaction-response",this.dataClientePago=new c.a}ngOnInit(){this.importeTransaccion=this.dataTrasa.importe,this.infoToken=this.infoTokenService.getInfoUs(),this.getEmailCliente(),localStorage.setItem("sys::btnP","0")}getEmailCliente(){this.crudService.postFree({id:this.infoToken.idcliente},"transaction","get-email-client",!1).subscribe(t=>{this.dataClientePago.email=t.data[0].correo?t.data[0].correo:"",this.isRequiredEmail=""===this.dataClientePago.email,this.isEmailValid=!this.isRequiredEmail,this.dataClientePago.isSaveEmail=this.isRequiredEmail,this.dataClientePago.idcliente=t.data[0].idcliente_card,this.dataClientePago.diasRegistrado=t.data[0].dias_registrado,this.dataClientePago.nombres=this.infoToken.nombres,this.dataClientePago.ip=this.infoToken.ipCliente,this.dataClientePago.ip?this.isDisabledCheck=!0:this.crudService.getFree("https://api.ipify.org?format=json").subscribe(t=>{this.dataClientePago.ip=t.ip,this.infoTokenService.setLocalIpCliente(this.dataClientePago.ip),this.isDisabledCheck=!0}),this.getNomApClientePago(this.dataClientePago.nombres)})}getNomApClientePago(t){const i=t.split(" ");let e="",a="";switch(i.length){case 1:e=i[0];break;case 2:e=i[0],a=i[1];break;case 3:case 4:e=i[0],a=i[2]}this.dataClientePago.nombre=this.utilService.primeraConMayusculas(e),this.dataClientePago.apellido=this.utilService.primeraConMayusculas(a)}goPagar(){if(this.isViewAlertEmail=!1,this.isViewAlertTerminos=!1,this.isCheckTerminos=!this.isCheckTerminos,!this.isCheckTerminos||!this.isEmailValid)return this.isViewAlertEmail=!0,void(this.isViewAlertTerminos=!0);this.isLoadBtnPago=!0,this.generarPurchasenumber()}generarPurchasenumber(){this.crudService.getAll("transaction","get-purchasenumber",!1,!1,!1).subscribe(t=>{const i=t.data[0].purchasenumber;this.el_purchasenumber=i,pagar(this.importeTransaccion,i,this.dataClientePago),this.listenResponse(),this.verificarCheckTerminos(),this.listenStatusService.setIsBtnPagoShow(!0),localStorage.setItem("sys::btnP","1")})}listenResponse(){this.timeListenerKeys=setTimeout(()=>{const t=localStorage.getItem(this.listenKeyData);let i;this.isLoaderTransaction="0"!==localStorage.getItem(this.listenKeyLoader),"null"!==t?(this.isLoadBtnPago=!1,this.dataResTransaction=JSON.parse(t),this.isTrasctionSuccess=!this.dataResTransaction.error,this.isTrasctionSuccess?(i={purchaseNumber:this.dataResTransaction.order.purchaseNumber,card:this.dataResTransaction.dataMap.CARD,brand:this.dataResTransaction.dataMap.BRAND,descripcion:this.dataResTransaction.dataMap.ACTION_DESCRIPTION,status:this.dataResTransaction.dataMap.STATUS,error:this.dataResTransaction.error},this.responseTranaccion.success=!0,this.responseTranaccion.data=i,this.emitRespuesta(),setTimeout(()=>{this.isLoaderTransaction=!1,this.infoTokenService.setIsPagoSuccess(!0)},1900)):(i={purchaseNumber:this.el_purchasenumber,card:this.dataResTransaction.data.CARD,brand:this.dataResTransaction.data.BRAND,descripcion:this.dataResTransaction.data.ACTION_DESCRIPTION,status:this.dataResTransaction.data.STATUS,error:this.dataResTransaction.error},this.responseTranaccion.success=!1,this.responseTranaccion.data=i,this.emitRespuesta()),localStorage.removeItem(this.listenKeyData)):this.listenResponse()},100)}verificarCheckTerminos(){this.isViewAlertTerminos=!this.isCheckTerminos,this.isViewAlertEmail=!this.isEmailValid}verificarCorreo(t){this.isEmailValid=t.checkValidity(),this.isViewAlertEmail=!this.isEmailValid,this.dataClientePago.email=t.value}emitRespuesta(){this.responseTransa.emit(this.responseTranaccion)}btnFinListo(){this.repuestaBtnListo.emit(!0)}}return t.\u0275fac=function(i){return new(i||t)(a.Kb(s.a),a.Kb(n.a),a.Kb(o.a),a.Kb(r.a))},t.\u0275cmp=a.Eb({type:t,selectors:[["app-comp-pasarela-pago"]],inputs:{dataTrasa:"dataTrasa"},outputs:{responseTransa:"responseTransa",repuestaBtnListo:"repuestaBtnListo"},decls:4,vars:3,consts:[["class","loader-pago",4,"ngIf"],[1,"animated","fadeIn","content-pago"],[4,"ngIf"],["class","animated fadeIn",4,"ngIf"],[1,"loader-pago"],["mode","indeterminate"],[1,"p-3",2,"max-width","500px","margin","0 auto"],[1,"mt-2","mb-2"],[1,"text-center"],[1,"fs-30","fw-600"],[1,"fs-15"],["id","importe"],["class","w-100",4,"ngIf"],["class","text-center",4,"ngIf"],[1,"div-btn"],["id","btn_pago"],["id","btn-disabled",1,"btn-pago-disabled",3,"click"],[1,"fa","fa-spinner","fa-spin",3,"hidden"],[3,"hidden"],[1,"w-100"],["ng","",1,"fs-13","fw-100",3,"ngClass"],[1,"w-100","text-center"],["matInput","","type","email","name","email","pattern","[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$","placeholder","Correo electronico",1,"text-center",3,"keyup"],["txtCorreo",""],[1,"fs-13","fw-100","text-danger","m-0","p-0",3,"hidden"],[3,"click"],["href","http://papaya.com.pe/terminos-condiciones.html","target","_blank"],["class","fw-100 fs-14 text-danger animated flash",4,"ngIf"],[1,"fw-100","fs-14","text-danger","animated","flash"],[1,"animated","fadeIn"],[4,"ngIf","ngIfElse"],["elseTemplate",""],[1,"text-center","fs-20","fw-100","banner-res-error","p-3"],["aria-hidden","true",1,"fa","fa-times-circle-o","fa-2x"],[1,"p-3","bg-white"],[1,"fw-100"],["mat-flat-button","","color","accent",3,"click"],[1,"fs-20"],["src","./assets/images/food_delivery.gif","alt","delivery","width","160px"],[1,"p-3","bg-white","text-center"],["mat-flat-button","","color","primary",3,"click"]],template:function(t,i){1&t&&(a.Fc(0,f,5,0,"div",0),a.Qb(1,"div",1),a.Fc(2,T,22,8,"div",2),a.Fc(3,I,4,2,"div",3),a.Pb()),2&t&&(a.kc("ngIf",i.isLoaderTransaction),a.zb(2),a.kc("ngIf",!i.dataResTransaction),a.zb(1),a.kc("ngIf",i.dataResTransaction))},directives:[d.t,h.a,l.a,d.q,b.c,p.a,m.a,u.b],pipes:[d.g],styles:[".content-pago[_ngcontent-%COMP%]{height:100vh}.header-pago[_ngcontent-%COMP%]{background:#3f51b5;color:#fff;width:100%}.loader-pago[_ngcontent-%COMP%]{position:absolute;z-index:1;height:100vh;text-align:center;vertical-align:middle;background:#212121;width:100%;opacity:.9;color:#fff}.loader-pago[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{top:50%}.btn-pago-disabled[_ngcontent-%COMP%], .loader-pago[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{position:relative;width:50%;margin:0 auto}.btn-pago-disabled[_ngcontent-%COMP%]{-webkit-transition:all 1s ease-in-out;transition:all 1s ease-in-out;background:grey;border-radius:5px;padding:8px;color:#fff;text-align:center}.btn-hidden[_ngcontent-%COMP%]{display:none}.div-btn[_ngcontent-%COMP%]{height:48px}.banner-res-ok[_ngcontent-%COMP%]{color:#fff;background:#436be1}.banner-res-error[_ngcontent-%COMP%]{color:#fff;background:#ef5350}"]}),t})()},"zkg+":function(t,i,e){"use strict";e.d(i,"a",(function(){return a}));class a{}}}]);