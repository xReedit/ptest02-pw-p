function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var i=0;i<t.length;i++){var a=t[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function _createClass(e,t,i){return t&&_defineProperties(e.prototype,t),i&&_defineProperties(e,i),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{Xxw6:function(e,t,i){"use strict";i.r(t),i.d(t,"CashModule",(function(){return $}));var a,n=i("ofXK"),s=i("tyNb"),o=i("eI2u"),r=i("fXoL"),c=i("FKr1"),l=((a=function(){function e(t,i){_classCallCheck(this,e),this.router=t,this.listenService=i,this.numberShowPageAtm=0}return _createClass(e,[{key:"ngOnInit",value:function(){var e=this;this.listenService.numberPageShowAtm$.subscribe((function(t){e.numberShowPageAtm=t}))}},{key:"goBackCash",value:function(){--this.numberShowPageAtm,this.numberShowPageAtm<0&&this.router.navigate(["../home"]),this.numberShowPageAtm=this.numberShowPageAtm<0?0:this.numberShowPageAtm,this.listenService.setNumberShowPageAtm(this.numberShowPageAtm)}}]),e}()).\u0275fac=function(e){return new(e||a)(r.Lb(s.d),r.Lb(o.a))},a.\u0275cmp=r.Fb({type:a,selectors:[["app-main"]],decls:10,vars:0,consts:[[1,"animated","fadeIn","overflow-hidden","w-100"],[1,"header-app-1","p-3","d-flex","justify-content-between"],[1,"fa","fa-arrow-left",3,"click"],["matRipple","",1,"text-center"],[1,"pl-2","fs-13","fw-100","text-puntos"],[1,"d-flex"],[1,"fa","fa-credit-card"],[1,"div-content"]],template:function(e,t){1&e&&(r.Rb(0,"div",0),r.Rb(1,"div",1),r.Rb(2,"i",2),r.Zb("click",(function(){return t.goBackCash()})),r.Qb(),r.Rb(3,"div",3),r.Rb(4,"span",4),r.Fc(5,"Papaya Cash"),r.Qb(),r.Qb(),r.Rb(6,"div",5),r.Mb(7,"i",6),r.Qb(),r.Qb(),r.Rb(8,"div",7),r.Mb(9,"router-outlet"),r.Qb(),r.Qb())},directives:[c.n,s.h],styles:[".header-app-1[_ngcontent-%COMP%]{background:#3f51b5;color:#fff;width:100%;top:0;left:0;z-index:1;-webkit-box-align:baseline;-webkit-align-items:baseline;align-items:baseline}"]}),a),b=i("qmRn"),d=i("22RU"),h=function e(){_classCallCheck(this,e)},p=i("+lji"),m=i("yFR0"),u=i("AA5P"),f=i("bTqV"),g=i("DXvS"),v=i("9UHp"),R=i("zOUh"),C=i("wne+"),w=i("zkg+"),P=i("bv9b"),S=i("Wp6s"),k=i("kmnG"),T=i("qFsG"),Q=i("bSwM");function y(e,t){1&e&&(r.Rb(0,"div",4),r.Rb(1,"div"),r.Rb(2,"span"),r.Fc(3,"Verificando, un momento por favor..."),r.Qb(),r.Mb(4,"mat-progress-bar",5),r.Qb(),r.Qb())}var A=function(e){return{"text-danger animated flash":e}};function F(e,t){if(1&e){var i=r.Sb();r.Rb(0,"div",19),r.Rb(1,"p",20),r.Fc(2,"Se requiere un coreo para notificarle."),r.Qb(),r.Rb(3,"mat-form-field",21),r.Rb(4,"input",22,23),r.Zb("keyup",(function(){r.xc(i);var e=r.uc(5);return r.dc(2).verificarCorreo(e)})),r.Qb(),r.Qb(),r.Rb(6,"span",24),r.Fc(7,"Correo no valido"),r.Qb(),r.Mb(8,"hr"),r.Qb()}if(2&e){var a=r.dc(2);r.zb(1),r.lc("ngClass",r.qc(2,A,a.isViewAlertEmail)),r.zb(5),r.lc("hidden",a.isEmailValid)}}function I(e,t){1&e&&(r.Rb(0,"p",28),r.Fc(1,"Acepte los terminos."),r.Qb())}function M(e,t){if(1&e){var i=r.Sb();r.Rb(0,"div",8),r.Rb(1,"mat-checkbox",25),r.Zb("click",(function(){return r.xc(i),r.dc(2).goPagar()})),r.Fc(2,"Acepto los "),r.Rb(3,"a",26),r.Fc(4,"Terminos y condiciones"),r.Qb(),r.Qb(),r.Dc(5,I,2,0,"p",27),r.Mb(6,"hr"),r.Qb()}if(2&e){var a=r.dc(2);r.zb(5),r.lc("ngIf",a.isViewAlertTerminos)}}function x(e,t){if(1&e){var i=r.Sb();r.Rb(0,"div"),r.Rb(1,"div",6),r.Rb(2,"mat-card",7),r.Rb(3,"div",8),r.Rb(4,"p"),r.Fc(5,"Importe a pagar:"),r.Qb(),r.Rb(6,"div"),r.Rb(7,"p",9),r.Rb(8,"span",10),r.Fc(9,"S/."),r.Qb(),r.Rb(10,"span",11),r.Fc(11),r.ec(12,"number"),r.Qb(),r.Qb(),r.Qb(),r.Mb(13,"hr"),r.Dc(14,F,9,4,"div",12),r.Dc(15,M,7,1,"div",13),r.Rb(16,"div",14),r.Mb(17,"div",15),r.Rb(18,"div",16),r.Zb("click",(function(){return r.xc(i),r.dc().verificarCheckTerminos()})),r.Mb(19,"span",17),r.Rb(20,"span",18),r.Fc(21,"Pagar Aqui"),r.Qb(),r.Qb(),r.Qb(),r.Qb(),r.Qb(),r.Qb(),r.Qb()}if(2&e){var a=r.dc();r.zb(11),r.Gc(r.gc(12,5,a.importeTransaccion,"0.2")),r.zb(3),r.lc("ngIf",a.isRequiredEmail),r.zb(1),r.lc("ngIf",a.isDisabledCheck&&a.isEmailValid),r.zb(4),r.lc("hidden",!a.isLoadBtnPago),r.zb(1),r.lc("hidden",a.isLoadBtnPago)}}function _(e,t){if(1&e){var i=r.Sb();r.Pb(0),r.Rb(1,"div",32),r.Mb(2,"i",33),r.Rb(3,"p"),r.Fc(4,"Ups! hubo un problema."),r.Qb(),r.Qb(),r.Rb(5,"div",34),r.Rb(6,"div",8),r.Rb(7,"span",35),r.Fc(8),r.Mb(9,"br"),r.Fc(10),r.Mb(11,"br"),r.Fc(12),r.Mb(13,"br"),r.Qb(),r.Qb(),r.Qb(),r.Rb(14,"div",34),r.Rb(15,"div",8),r.Rb(16,"button",36),r.Zb("click",(function(){return r.xc(i),r.dc(2).btnFinListo(!1)})),r.Fc(17,"Regresar"),r.Qb(),r.Qb(),r.Qb(),r.Ob()}if(2&e){var a=r.dc(2);r.zb(8),r.Hc(" ",a.dataResTransaction.errorMessage," "),r.zb(2),r.Hc(" ",a.dataResTransaction.data.ACTION_DESCRIPTION," "),r.zb(2),r.Hc(" ",a.dataResTransaction.data.CARD," ")}}function D(e,t){if(1&e){var i=r.Sb();r.Rb(0,"div"),r.Rb(1,"div",34),r.Rb(2,"div",8),r.Rb(3,"p",37),r.Fc(4,"Pedido Confirmado"),r.Qb(),r.Mb(5,"hr"),r.Rb(6,"p"),r.Fc(7,"Su orden llegara pronto."),r.Qb(),r.Mb(8,"hr"),r.Mb(9,"img",38),r.Mb(10,"hr"),r.Rb(11,"p"),r.Fc(12,"Puede ver el estado de este en "),r.Mb(13,"br"),r.Rb(14,"strong"),r.Fc(15,"Mis Pedidos"),r.Qb(),r.Fc(16,"."),r.Qb(),r.Qb(),r.Qb(),r.Rb(17,"div",39),r.Rb(18,"button",40),r.Zb("click",(function(){return r.xc(i),r.dc(2).btnFinListo(!0)})),r.Fc(19," Listo. "),r.Qb(),r.Mb(20,"br"),r.Qb(),r.Qb()}}function z(e,t){if(1&e&&(r.Rb(0,"div",29),r.Dc(1,_,18,3,"ng-container",30),r.Dc(2,D,21,0,"ng-template",null,31,r.Ec),r.Qb()),2&e){var i=r.uc(3),a=r.dc();r.zb(1),r.lc("ngIf",a.dataResTransaction.error)("ngIfElse",i)}}var L,E=((L=function(){function e(t,i,a,n){_classCallCheck(this,e),this.infoTokenService=t,this.utilService=i,this.crudService=a,this.listenStatusService=n,this.responseTransa=new r.n,this.repuestaBtnListo=new r.n(!1),this.isLoaderTransaction=!1,this.isLoadBtnPago=!1,this.isCheckTerminos=!1,this.isTrasctionSuccess=!1,this.isViewAlertTerminos=!1,this.isViewAlertEmail=!1,this.isEmailValid=!0,this.isRequiredEmail=!1,this.isDisabledCheck=!1,this.dataResTransaction=null,this.fechaTransaction=new Date,this.importeTransaccion=0,this.responseTranaccion={success:!1,data:{}},this.listenKeyLoader="sys::transaction-load",this.listenKeyData="sys::transaction-response",this.dataClientePago=new w.a}return _createClass(e,[{key:"ngOnInit",value:function(){this.importeTransaccion=this.dataTrasa.importe,this.infoToken=this.infoTokenService.getInfoUs(),this.getEmailCliente(),localStorage.setItem("sys::btnP","0")}},{key:"getEmailCliente",value:function(){var e=this;this.crudService.postFree({id:this.infoToken.idcliente},"transaction","get-email-client",!1).subscribe((function(t){e.dataClientePago.email=t.data[0].correo?t.data[0].correo:"",e.isRequiredEmail=""===e.dataClientePago.email,e.isEmailValid=!e.isRequiredEmail,e.dataClientePago.isSaveEmail=e.isRequiredEmail,e.dataClientePago.idcliente=t.data[0].idcliente_card,e.dataClientePago.diasRegistrado=t.data[0].dias_registrado,e.dataClientePago.nombres=e.infoToken.nombres,e.dataClientePago.ip=e.infoToken.ipCliente,e.dataClientePago.ip?e.isDisabledCheck=!0:e.crudService.getFree("https://api.ipify.org?format=json").subscribe((function(t){e.dataClientePago.ip=t.ip,e.infoTokenService.setLocalIpCliente(e.dataClientePago.ip),e.isDisabledCheck=!0})),e.getNomApClientePago(e.dataClientePago.nombres)}))}},{key:"getNomApClientePago",value:function(e){var t=e.split(" "),i="",a="";switch(t.length){case 1:i=t[0];break;case 2:i=t[0],a=t[1];break;case 3:case 4:i=t[0],a=t[2]}this.dataClientePago.nombre=this.utilService.primeraConMayusculas(i),this.dataClientePago.apellido=this.utilService.primeraConMayusculas(a)}},{key:"goPagar",value:function(){if(this.isViewAlertEmail=!1,this.isViewAlertTerminos=!1,this.isCheckTerminos=!this.isCheckTerminos,!this.isCheckTerminos||!this.isEmailValid)return this.isViewAlertEmail=!0,void(this.isViewAlertTerminos=!0);this.isLoadBtnPago=!0,this.generarPurchasenumber()}},{key:"generarPurchasenumber",value:function(){var e=this;this.crudService.getAll("transaction","get-purchasenumber",!1,!1,!1).subscribe((function(t){var i=t.data[0].purchasenumber;e.el_purchasenumber=i,pagar(e.importeTransaccion,i,e.dataClientePago),e.listenResponse(),e.verificarCheckTerminos(),e.listenStatusService.setIsBtnPagoShow(!0),localStorage.setItem("sys::btnP","1")}))}},{key:"listenResponse",value:function(){var e=this;this.timeListenerKeys=setTimeout((function(){var t,i=localStorage.getItem(e.listenKeyData);e.isLoaderTransaction="0"!==localStorage.getItem(e.listenKeyLoader),"null"!==i?(e.isLoadBtnPago=!1,e.dataResTransaction=JSON.parse(i),e.isTrasctionSuccess=!e.dataResTransaction.error,e.isTrasctionSuccess?(t={purchaseNumber:e.dataResTransaction.order.purchaseNumber,card:e.dataResTransaction.dataMap.CARD,brand:e.dataResTransaction.dataMap.BRAND,descripcion:e.dataResTransaction.dataMap.ACTION_DESCRIPTION,status:e.dataResTransaction.dataMap.STATUS,error:e.dataResTransaction.error},e.responseTranaccion.success=!0,e.responseTranaccion.data=t,e.emitRespuesta(),setTimeout((function(){e.isLoaderTransaction=!1,e.infoTokenService.setIsPagoSuccess(!0)}),1900)):(t={purchaseNumber:e.el_purchasenumber,card:e.dataResTransaction.data.CARD,brand:e.dataResTransaction.data.BRAND,descripcion:e.dataResTransaction.data.ACTION_DESCRIPTION,status:e.dataResTransaction.data.STATUS,error:e.dataResTransaction.error},e.responseTranaccion.success=!1,e.responseTranaccion.data=t,e.emitRespuesta()),localStorage.removeItem(e.listenKeyData)):e.listenResponse()}),100)}},{key:"verificarCheckTerminos",value:function(){this.isViewAlertTerminos=!this.isCheckTerminos,this.isViewAlertEmail=!this.isEmailValid}},{key:"verificarCorreo",value:function(e){this.isEmailValid=e.checkValidity(),this.isViewAlertEmail=!this.isEmailValid,this.dataClientePago.email=e.value}},{key:"emitRespuesta",value:function(){this.responseTransa.emit(this.responseTranaccion)}},{key:"btnFinListo",value:function(){this.repuestaBtnListo.emit(!0)}}]),e}()).\u0275fac=function(e){return new(e||L)(r.Lb(R.a),r.Lb(C.a),r.Lb(p.a),r.Lb(o.a))},L.\u0275cmp=r.Fb({type:L,selectors:[["app-comp-pasarela-pago"]],inputs:{dataTrasa:"dataTrasa"},outputs:{responseTransa:"responseTransa",repuestaBtnListo:"repuestaBtnListo"},decls:4,vars:3,consts:[["class","loader-pago",4,"ngIf"],[1,"animated","fadeIn","content-pago"],[4,"ngIf"],["class","animated fadeIn",4,"ngIf"],[1,"loader-pago"],["mode","indeterminate"],[1,"p-3",2,"max-width","500px","margin","0 auto"],[1,"mt-2","mb-2"],[1,"text-center"],[1,"fs-30","fw-600"],[1,"fs-15"],["id","importe"],["class","w-100",4,"ngIf"],["class","text-center",4,"ngIf"],[1,"div-btn"],["id","btn_pago"],["id","btn-disabled",1,"btn-pago-disabled",3,"click"],[1,"fa","fa-spinner","fa-spin",3,"hidden"],[3,"hidden"],[1,"w-100"],["ng","",1,"fs-13","fw-100",3,"ngClass"],[1,"w-100","text-center"],["matInput","","type","email","name","email","pattern","[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$","placeholder","Correo electronico",1,"text-center",3,"keyup"],["txtCorreo",""],[1,"fs-13","fw-100","text-danger","m-0","p-0",3,"hidden"],[3,"click"],["href","http://papaya.com.pe/terminos-condiciones.html","target","_blank"],["class","fw-100 fs-14 text-danger animated flash",4,"ngIf"],[1,"fw-100","fs-14","text-danger","animated","flash"],[1,"animated","fadeIn"],[4,"ngIf","ngIfElse"],["elseTemplate",""],[1,"text-center","fs-20","fw-100","banner-res-error","p-3"],["aria-hidden","true",1,"fa","fa-times-circle-o","fa-2x"],[1,"p-3","bg-white"],[1,"fw-100"],["mat-flat-button","","color","accent",3,"click"],[1,"fs-20"],["src","./assets/images/food_delivery.gif","alt","delivery","width","160px"],[1,"p-3","bg-white","text-center"],["mat-flat-button","","color","primary",3,"click"]],template:function(e,t){1&e&&(r.Dc(0,y,5,0,"div",0),r.Rb(1,"div",1),r.Dc(2,x,22,8,"div",2),r.Dc(3,z,4,2,"div",3),r.Qb()),2&e&&(r.lc("ngIf",t.isLoaderTransaction),r.zb(2),r.lc("ngIf",!t.dataResTransaction),r.zb(1),r.lc("ngIf",t.dataResTransaction))},directives:[n.n,P.a,S.a,n.l,k.b,T.a,Q.a,f.a],pipes:[n.f],styles:[".content-pago[_ngcontent-%COMP%]{height:100vh}.header-pago[_ngcontent-%COMP%]{background:#3f51b5;color:#fff;width:100%}.loader-pago[_ngcontent-%COMP%]{position:absolute;z-index:1;height:100vh;text-align:center;vertical-align:middle;background:#212121;width:100%;opacity:.9;color:#fff}.loader-pago[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{top:50%}.btn-pago-disabled[_ngcontent-%COMP%], .loader-pago[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{position:relative;width:50%;margin:0 auto}.btn-pago-disabled[_ngcontent-%COMP%]{-webkit-transition:all 1s ease-in-out;transition:all 1s ease-in-out;background:grey;border-radius:5px;padding:8px;color:#fff;text-align:center}.btn-hidden[_ngcontent-%COMP%]{display:none}.div-btn[_ngcontent-%COMP%]{height:48px}.banner-res-ok[_ngcontent-%COMP%]{color:#fff;background:#436be1}.banner-res-error[_ngcontent-%COMP%]{color:#fff;background:#ef5350}"]}),L);function O(e,t){if(1&e){var i=r.Sb();r.Rb(0,"div",26),r.Rb(1,"app-comp-ctrl-add-fast",27),r.Zb("objResponse",(function(e){return r.xc(i),r.dc(2).resultCantItem(e)})),r.Qb(),r.Mb(2,"img",28),r.Rb(3,"p",29),r.Fc(4),r.Qb(),r.Rb(5,"p",8),r.Fc(6),r.ec(7,"number"),r.Qb(),r.Qb()}if(2&e){var a=t.$implicit,n=r.dc(2);r.zb(1),r.lc("objItem",a)("stopAdd",n.stopAdd),r.zb(1),r.nc("src","assets/images/icon-app/",a.img,"",r.yc),r.zb(2),r.Hc(" ",a.denominacion," "),r.zb(2),r.Ic("",a.simbolo," ",r.gc(7,6,a.valor,".2"),"")}}function B(e,t){1&e&&(r.Pb(0),r.Mb(1,"span",30),r.Ob())}function N(e,t){if(1&e&&(r.Rb(0,"span"),r.Fc(1),r.ec(2,"number"),r.Qb()),2&e){var i=r.dc(2);r.zb(1),r.Hc(" S/. ",r.gc(2,1,i.costoEntrega,".2")," ")}}function V(e,t){if(1&e){var i=r.Sb();r.Rb(0,"div",2),r.Rb(1,"div",3),r.Mb(2,"img",4),r.Qb(),r.Rb(3,"div",5),r.Rb(4,"div",6),r.Rb(5,"p",7),r.Fc(6,"Selecciona el monto que deseas retirar. Confirma la cantidad y un repartidor te llevar\xe1 el efectivo. El monto maximo a retirar es de "),r.Rb(7,"span",8),r.Fc(8,"S/. 200.00"),r.Qb(),r.Qb(),r.Qb(),r.Mb(9,"hr"),r.Rb(10,"div",9),r.Rb(11,"h4"),r.Fc(12,"ATM"),r.Qb(),r.Rb(13,"div",10),r.Dc(14,O,8,9,"div",11),r.Qb(),r.Qb(),r.Mb(15,"hr"),r.Rb(16,"div",12),r.Mb(17,"br"),r.Rb(18,"button",13),r.Zb("click",(function(){return r.xc(i),r.dc().btnNext()})),r.Fc(19," Continuar "),r.Rb(20,"span",5),r.Fc(21),r.ec(22,"number"),r.Qb(),r.Qb(),r.Qb(),r.Mb(23,"br"),r.Mb(24,"br"),r.Qb(),r.Rb(25,"div",14),r.Rb(26,"h5"),r.Fc(27,"Detalle del retiro"),r.Qb(),r.Mb(28,"br"),r.Rb(29,"app-comp-get-datos-cliente",15),r.Zb("frmResponse",(function(e){return r.xc(i),r.dc().frmClienteResponse(e)})),r.Qb(),r.Mb(30,"hr"),r.Rb(31,"table",16),r.Rb(32,"tbody"),r.Rb(33,"tr"),r.Rb(34,"td"),r.Rb(35,"span"),r.Fc(36,"Monto a retirar"),r.Qb(),r.Qb(),r.Rb(37,"td",17),r.Rb(38,"span",18),r.Fc(39),r.ec(40,"number"),r.Qb(),r.Qb(),r.Qb(),r.Rb(41,"tr"),r.Rb(42,"td"),r.Rb(43,"span"),r.Fc(44," Costo de entrega "),r.Qb(),r.Qb(),r.Rb(45,"td",19),r.Dc(46,B,2,0,"ng-container",20),r.Dc(47,N,3,4,"ng-template",null,21,r.Ec),r.Qb(),r.Qb(),r.Rb(49,"tr"),r.Rb(50,"td"),r.Rb(51,"span"),r.Fc(52," Total "),r.Qb(),r.Qb(),r.Rb(53,"td",19),r.Rb(54,"span",22),r.Fc(55),r.ec(56,"number"),r.Qb(),r.Qb(),r.Qb(),r.Qb(),r.Qb(),r.Mb(57,"hr"),r.Mb(58,"br"),r.Rb(59,"div",12),r.Rb(60,"button",23),r.Zb("click",(function(){return r.xc(i),r.dc().btnBackAtm()})),r.Mb(61,"span",24),r.Fc(62," Atras"),r.Qb(),r.Rb(63,"button",25),r.Zb("click",(function(){return r.xc(i),r.dc().nextPagar()})),r.Fc(64," Listo, Confirmar "),r.Qb(),r.Qb(),r.Mb(65,"br"),r.Mb(66,"br"),r.Qb(),r.Qb()}if(2&e){var a=r.uc(48),n=r.dc();r.zb(3),r.lc("hidden",0!=n.opShowPage),r.zb(11),r.lc("ngForOf",n.listBilletes),r.zb(4),r.lc("disabled",0===n.importeRetirar),r.zb(2),r.lc("hidden",0===n.importeRetirar),r.zb(1),r.Hc(" S/. ",r.gc(22,12,n.importeRetirar,".2")," "),r.zb(4),r.lc("hidden",1!=n.opShowPage),r.zb(4),r.lc("opciones",n.opcionesFrmCliente),r.zb(10),r.Hc("S/. ",r.gc(40,15,n.importeRetirar,".2"),""),r.zb(7),r.lc("ngIf",n.isLoadingCosto)("ngIfElse",a),r.zb(9),r.Hc("S/. ",r.gc(56,18,n.importeNetoRetirar,".2"),""),r.zb(8),r.lc("disabled",!n.enabledSendPedido)}}function j(e,t){if(1&e){var i=r.Sb();r.Rb(0,"div",31),r.Rb(1,"app-comp-pasarela-pago",32),r.Zb("responseTransa",(function(e){return r.xc(i),r.dc().respuestaTransaccion(e)}))("repuestaBtnListo",(function(e){return r.xc(i),r.dc().finTransaccionOk(e)})),r.Qb(),r.Qb()}if(2&e){var a=r.dc();r.zb(1),r.lc("dataTrasa",a.dataAtmPago)}}var q,Z,H,K=[{path:"",component:l,data:{titulo:"Inicio"},children:[{path:"",redirectTo:"atm"},{path:"atm",component:(q=function(){function e(t,i,a,n,s,o){_classCallCheck(this,e),this.parametrosDelivery=t,this.router=i,this.listenService=a,this.crudService=n,this.socketService=s,this.verifyClientService=o,this.listBilletes=[],this.importeRetirar=0,this.stopAdd=!1,this.limitAdd=200,this.opcionesFrmCliente=new b.a,this.opShowPage=0,this.enabledSendPedido=!1,this.comisionAtm=0,this.costoEntrega=0,this.importeNetoRetirar=0,this.isLoadingCosto=!1,this.dataAtmPago=new h,this.isClienteLogueado=!1}return _createClass(e,[{key:"ngOnInit",value:function(){var e=this;this.infoClient=this.verifyClientService.getDataClient(),this.socketService.connect(this.infoClient,0,!1,!0),this.verifyBtnPagoReload(),this.opcionesFrmCliente.showDirreccionA=!0,this.opcionesFrmCliente.telefono=!0,this.opcionesFrmCliente.calDistanciaCentro=!0,this.opcionesFrmCliente.tituloDirA="A d\xf3nde lo llevamos?",this.listBilletes.push({denominacion:"Cien nuevos soles",valor:100,simbolo:"S/. ",img:"b100.jpg"}),this.listBilletes.push({denominacion:"Cicuenta nuevos soles",valor:50,simbolo:"S/. ",img:"b50.jpg"}),this.listenService.numberPageShowAtm$.subscribe((function(t){e.opShowPage=t}))}},{key:"verifyBtnPagoReload",value:function(){var e=localStorage.getItem("sys::btnP");"1"===(e=e||"").toString()&&(localStorage.setItem("sys::btnP","0"),window.location.reload())}},{key:"resultCantItem",value:function(e){this.importeRetirar=this.listBilletes.map((function(e){return e.cantidad_selected=e.cantidad_selected?e.cantidad_selected:0,e.importeTotal=e.cantidad_selected*e.valor,e.importeTotal})).reduce((function(e,t){return e+t}),0),this.stopAdd=this.importeRetirar>=200}},{key:"btnNext",value:function(){this.opShowPage=1,this.listenService.setNumberShowPageAtm(this.opShowPage),this.getComisionAtm()}},{key:"btnBackAtm",value:function(){--this.opShowPage,this.opShowPage=this.opShowPage<0?0:this.opShowPage,this.listenService.setNumberShowPageAtm(this.opShowPage)}},{key:"getComisionAtm",value:function(){var e=this;this.parametrosDelivery.getComisionAtm(this.importeRetirar).subscribe((function(t){e.comisionAtm=t.comision}))}},{key:"calcCostoEntrega",value:function(){this.costosPlaza&&(this.costoEntrega=this.costosPlaza.c_servicio+parseFloat(this.comisionAtm.toString()),this.importeNetoRetirar=this.importeRetirar+this.costoEntrega,this.setDataFromAtmCash())}},{key:"setDataFromAtmCash",value:function(){this.dataAtmPago.from="atm",this.dataAtmPago.importe=this.importeNetoRetirar}},{key:"frmClienteResponse",value:function(e){this.isLoadingCosto=!0,this.responseFrmDatosCliente=e,this.isLoadingCosto=e.ladingCostoServicio,this.enabledSendPedido=!this.isLoadingCosto&&e.success,e.ladingCostoServicio||(this.costosPlaza=e.costosPlaza,this.calcCostoEntrega())}},{key:"nextPagar",value:function(){this.opShowPage=2,this.listenService.setNumberShowPageAtm(this.opShowPage),window.scroll(0,0)}},{key:"respuestaTransaccion",value:function(e){var t=this;e.success&&this.crudService.postFree({importeSolicita:this.importeRetirar,importeTotal:this.importeNetoRetirar,importeEntrega:this.costosPlaza.c_servicio,importeTransaccion:this.comisionAtm,idcliente:this.responseFrmDatosCliente.cliente.idcliente,billetes:this.listBilletes,transaccion:e.data,entrega:{cliente:{idcliente:this.responseFrmDatosCliente.cliente.idcliente,nombres:this.responseFrmDatosCliente.cliente.nombres,telefono:this.responseFrmDatosCliente.telefono},direccion:this.responseFrmDatosCliente.direccionA}},"delivery","set-cash-atm",!1).subscribe((function(e){t.socketService.emit("nuevo-retiro-cash-atm","")}))}},{key:"finTransaccionOk",value:function(e){e?this.router.navigate(["../"]):(this.btnBackAtm(),this.opShowPage=0,this.listenService.setNumberShowPageAtm(this.opShowPage))}}]),e}(),q.\u0275fac=function(e){return new(e||q)(r.Lb(d.a),r.Lb(s.d),r.Lb(o.a),r.Lb(p.a),r.Lb(m.a),r.Lb(u.a))},q.\u0275cmp=r.Fb({type:q,selectors:[["app-atm"]],decls:2,vars:2,consts:[["class","animated fadeIn w-100 div-content overflow-auto",4,"ngIf"],["class","animated fadeInRight w-100 p-1",4,"ngIf"],[1,"animated","fadeIn","w-100","div-content","overflow-auto"],[2,"min-width","186px","background","lightsteelblue"],["src","assets/images/icon-app/atm2.jpg","alt","","width","100%"],[3,"hidden"],[1,"p-3"],[1,"fs-13","fw-100"],[1,"fw-600"],[1,"pl-3","pr-3","pt-1"],[1,"d-flex","justify-content-start"],["class","img-billete mr-4",4,"ngFor","ngForOf"],[1,"w-100","text-center"],["mat-raised-button","","color","primary",1,"w-75",3,"disabled","click"],[1,"animated","fadeInRight","w-100","p-3",3,"hidden"],[1,"fs-12",3,"opciones","frmResponse"],[1,"w-100"],["align","right",1,"aling-right"],[1,"fw-600","fs-16"],["align","right"],[4,"ngIf","ngIfElse"],["elseTemplate",""],[1,"fw-600","fs-17"],["mat-raised-button","","color","accent",1,"mr-2",3,"click"],[1,"fa","fa-arrow-circle-left","pr-1"],["mat-raised-button","","color","primary",3,"disabled","click"],[1,"img-billete","mr-4"],[3,"objItem","stopAdd","objResponse"],["alt","b100",3,"src"],[1,"text-secondary","fs-12"],[1,"fa","fa-circle-o-notch","fa-spin"],[1,"animated","fadeInRight","w-100","p-1"],[3,"dataTrasa","responseTransa","repuestaBtnListo"]],template:function(e,t){1&e&&(r.Dc(0,V,67,21,"div",0),r.Dc(1,j,2,1,"div",1)),2&e&&(r.lc("ngIf",2!==t.opShowPage),r.zb(1),r.lc("ngIf",2===t.opShowPage))},directives:[n.n,n.m,f.a,g.a,v.a,E],pipes:[n.f],styles:["p[_ngcontent-%COMP%]{margin:0}.div-content[_ngcontent-%COMP%]{width:100%;max-width:500px;margin:0 auto}.img-billete[_ngcontent-%COMP%]{display:grid}.img-billete[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:140px;padding-right:5px}"]}),q),data:{titulo:"Categorias"}}]}],U=((Z=function e(){_classCallCheck(this,e)}).\u0275mod=r.Jb({type:Z}),Z.\u0275inj=r.Ib({factory:function(e){return new(e||Z)},imports:[[s.g.forChild(K)],s.g]}),Z),J=i("rsRi"),X=i("lSLK"),$=((H=function e(){_classCallCheck(this,e)}).\u0275mod=r.Jb({type:H}),H.\u0275inj=r.Ib({factory:function(e){return new(e||H)},imports:[[n.c,U,J.a,X.a]]}),H)}}]);