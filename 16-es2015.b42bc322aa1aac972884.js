(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{Xxw6:function(t,e,i){"use strict";i.r(e),i.d(e,"CashModule",(function(){return H}));var a=i("ofXK"),s=i("tyNb"),n=i("eI2u"),o=i("fXoL"),r=i("FKr1");let c=(()=>{class t{constructor(t,e){this.router=t,this.listenService=e,this.numberShowPageAtm=0}ngOnInit(){this.listenService.numberPageShowAtm$.subscribe(t=>{this.numberShowPageAtm=t})}goBackCash(){--this.numberShowPageAtm,this.numberShowPageAtm<0&&this.router.navigate(["../home"]),this.numberShowPageAtm=this.numberShowPageAtm<0?0:this.numberShowPageAtm,this.listenService.setNumberShowPageAtm(this.numberShowPageAtm)}}return t.\u0275fac=function(e){return new(e||t)(o.Lb(s.d),o.Lb(n.a))},t.\u0275cmp=o.Fb({type:t,selectors:[["app-main"]],decls:10,vars:0,consts:[[1,"animated","fadeIn","overflow-hidden","w-100"],[1,"header-app-1","p-3","d-flex","justify-content-between"],[1,"fa","fa-arrow-left",3,"click"],["matRipple","",1,"text-center"],[1,"pl-2","fs-13","fw-100","text-puntos"],[1,"d-flex"],[1,"fa","fa-credit-card"],[1,"div-content"]],template:function(t,e){1&t&&(o.Rb(0,"div",0),o.Rb(1,"div",1),o.Rb(2,"i",2),o.Zb("click",(function(){return e.goBackCash()})),o.Qb(),o.Rb(3,"div",3),o.Rb(4,"span",4),o.Fc(5,"Papaya Cash aa"),o.Qb(),o.Qb(),o.Rb(6,"div",5),o.Mb(7,"i",6),o.Qb(),o.Qb(),o.Rb(8,"div",7),o.Mb(9,"router-outlet"),o.Qb(),o.Qb())},directives:[r.n,s.h],styles:[".header-app-1[_ngcontent-%COMP%]{background:#3f51b5;color:#fff;width:100%;top:0;left:0;z-index:1;-webkit-box-align:baseline;-webkit-align-items:baseline;align-items:baseline}"]}),t})();var b=i("qmRn"),l=i("22RU");class d{}var h=i("+lji"),p=i("yFR0"),m=i("AA5P"),g=i("bTqV"),u=i("DXvS"),f=i("9UHp"),R=i("zOUh"),v=i("wne+"),C=i("zkg+"),w=i("bv9b"),S=i("Wp6s"),P=i("kmnG"),T=i("qFsG"),Q=i("bSwM");function A(t,e){1&t&&(o.Rb(0,"div",4),o.Rb(1,"div"),o.Rb(2,"span"),o.Fc(3,"Verificando, un momento por favor..."),o.Qb(),o.Mb(4,"mat-progress-bar",5),o.Qb(),o.Qb())}const k=function(t){return{"text-danger animated flash":t}};function F(t,e){if(1&t){const t=o.Sb();o.Rb(0,"div",19),o.Rb(1,"p",20),o.Fc(2,"Se requiere un coreo para notificarle."),o.Qb(),o.Rb(3,"mat-form-field",21),o.Rb(4,"input",22,23),o.Zb("keyup",(function(){o.xc(t);const e=o.uc(5);return o.dc(2).verificarCorreo(e)})),o.Qb(),o.Qb(),o.Rb(6,"span",24),o.Fc(7,"Correo no valido"),o.Qb(),o.Mb(8,"hr"),o.Qb()}if(2&t){const t=o.dc(2);o.zb(1),o.lc("ngClass",o.qc(2,k,t.isViewAlertEmail)),o.zb(5),o.lc("hidden",t.isEmailValid)}}function I(t,e){1&t&&(o.Rb(0,"p",28),o.Fc(1,"Acepte los terminos."),o.Qb())}function M(t,e){if(1&t){const t=o.Sb();o.Rb(0,"div",8),o.Rb(1,"mat-checkbox",25),o.Zb("click",(function(){return o.xc(t),o.dc(2).goPagar()})),o.Fc(2,"Acepto los "),o.Rb(3,"a",26),o.Fc(4,"Terminos y condiciones"),o.Qb(),o.Qb(),o.Dc(5,I,2,0,"p",27),o.Mb(6,"hr"),o.Qb()}if(2&t){const t=o.dc(2);o.zb(5),o.lc("ngIf",t.isViewAlertTerminos)}}function y(t,e){if(1&t){const t=o.Sb();o.Rb(0,"div"),o.Rb(1,"div",6),o.Rb(2,"mat-card",7),o.Rb(3,"div",8),o.Rb(4,"p"),o.Fc(5,"Importe a pagar:"),o.Qb(),o.Rb(6,"div"),o.Rb(7,"p",9),o.Rb(8,"span",10),o.Fc(9,"S/."),o.Qb(),o.Rb(10,"span",11),o.Fc(11),o.ec(12,"number"),o.Qb(),o.Qb(),o.Qb(),o.Mb(13,"hr"),o.Dc(14,F,9,4,"div",12),o.Dc(15,M,7,1,"div",13),o.Rb(16,"div",14),o.Mb(17,"div",15),o.Rb(18,"div",16),o.Zb("click",(function(){return o.xc(t),o.dc().verificarCheckTerminos()})),o.Mb(19,"span",17),o.Rb(20,"span",18),o.Fc(21,"Pagar Aqui"),o.Qb(),o.Qb(),o.Qb(),o.Qb(),o.Qb(),o.Qb(),o.Qb()}if(2&t){const t=o.dc();o.zb(11),o.Gc(o.gc(12,5,t.importeTransaccion,"0.2")),o.zb(3),o.lc("ngIf",t.isRequiredEmail),o.zb(1),o.lc("ngIf",t.isDisabledCheck&&t.isEmailValid),o.zb(4),o.lc("hidden",!t.isLoadBtnPago),o.zb(1),o.lc("hidden",t.isLoadBtnPago)}}function x(t,e){if(1&t){const t=o.Sb();o.Pb(0),o.Rb(1,"div",32),o.Mb(2,"i",33),o.Rb(3,"p"),o.Fc(4,"Ups! hubo un problema."),o.Qb(),o.Qb(),o.Rb(5,"div",34),o.Rb(6,"div",8),o.Rb(7,"span",35),o.Fc(8),o.Mb(9,"br"),o.Fc(10),o.Mb(11,"br"),o.Fc(12),o.Mb(13,"br"),o.Qb(),o.Qb(),o.Qb(),o.Rb(14,"div",34),o.Rb(15,"div",8),o.Rb(16,"button",36),o.Zb("click",(function(){return o.xc(t),o.dc(2).btnFinListo(!1)})),o.Fc(17,"Regresar"),o.Qb(),o.Qb(),o.Qb(),o.Ob()}if(2&t){const t=o.dc(2);o.zb(8),o.Hc(" ",t.dataResTransaction.errorMessage," "),o.zb(2),o.Hc(" ",t.dataResTransaction.data.ACTION_DESCRIPTION," "),o.zb(2),o.Hc(" ",t.dataResTransaction.data.CARD," ")}}function D(t,e){if(1&t){const t=o.Sb();o.Rb(0,"div"),o.Rb(1,"div",34),o.Rb(2,"div",8),o.Rb(3,"p",37),o.Fc(4,"Pedido Confirmado"),o.Qb(),o.Mb(5,"hr"),o.Rb(6,"p"),o.Fc(7,"Su orden llegara pronto."),o.Qb(),o.Mb(8,"hr"),o.Mb(9,"img",38),o.Mb(10,"hr"),o.Rb(11,"p"),o.Fc(12,"Puede ver el estado de este en "),o.Mb(13,"br"),o.Rb(14,"strong"),o.Fc(15,"Mis Pedidos"),o.Qb(),o.Fc(16,"."),o.Qb(),o.Qb(),o.Qb(),o.Rb(17,"div",39),o.Rb(18,"button",40),o.Zb("click",(function(){return o.xc(t),o.dc(2).btnFinListo(!0)})),o.Fc(19," Listo. "),o.Qb(),o.Mb(20,"br"),o.Qb(),o.Qb()}}function z(t,e){if(1&t&&(o.Rb(0,"div",29),o.Dc(1,x,18,3,"ng-container",30),o.Dc(2,D,21,0,"ng-template",null,31,o.Ec),o.Qb()),2&t){const t=o.uc(3),e=o.dc();o.zb(1),o.lc("ngIf",e.dataResTransaction.error)("ngIfElse",t)}}let L=(()=>{class t{constructor(t,e,i,a){this.infoTokenService=t,this.utilService=e,this.crudService=i,this.listenStatusService=a,this.responseTransa=new o.n,this.repuestaBtnListo=new o.n(!1),this.isLoaderTransaction=!1,this.isLoadBtnPago=!1,this.isCheckTerminos=!1,this.isTrasctionSuccess=!1,this.isViewAlertTerminos=!1,this.isViewAlertEmail=!1,this.isEmailValid=!0,this.isRequiredEmail=!1,this.isDisabledCheck=!1,this.dataResTransaction=null,this.fechaTransaction=new Date,this.importeTransaccion=0,this.responseTranaccion={success:!1,data:{}},this.listenKeyLoader="sys::transaction-load",this.listenKeyData="sys::transaction-response",this.dataClientePago=new C.a}ngOnInit(){this.importeTransaccion=this.dataTrasa.importe,this.infoToken=this.infoTokenService.getInfoUs(),this.getEmailCliente(),localStorage.setItem("sys::btnP","0")}getEmailCliente(){this.crudService.postFree({id:this.infoToken.idcliente},"transaction","get-email-client",!1).subscribe(t=>{this.dataClientePago.email=t.data[0].correo?t.data[0].correo:"",this.isRequiredEmail=""===this.dataClientePago.email,this.isEmailValid=!this.isRequiredEmail,this.dataClientePago.isSaveEmail=this.isRequiredEmail,this.dataClientePago.idcliente=t.data[0].idcliente_card,this.dataClientePago.diasRegistrado=t.data[0].dias_registrado,this.dataClientePago.nombres=this.infoToken.nombres,this.dataClientePago.ip=this.infoToken.ipCliente,this.dataClientePago.ip?this.isDisabledCheck=!0:this.crudService.getFree("https://api.ipify.org?format=json").subscribe(t=>{this.dataClientePago.ip=t.ip,this.infoTokenService.setLocalIpCliente(this.dataClientePago.ip),this.isDisabledCheck=!0}),this.getNomApClientePago(this.dataClientePago.nombres)})}getNomApClientePago(t){const e=t.split(" ");let i="",a="";switch(e.length){case 1:i=e[0];break;case 2:i=e[0],a=e[1];break;case 3:case 4:i=e[0],a=e[2]}this.dataClientePago.nombre=this.utilService.primeraConMayusculas(i),this.dataClientePago.apellido=this.utilService.primeraConMayusculas(a)}goPagar(){if(this.isViewAlertEmail=!1,this.isViewAlertTerminos=!1,this.isCheckTerminos=!this.isCheckTerminos,!this.isCheckTerminos||!this.isEmailValid)return this.isViewAlertEmail=!0,void(this.isViewAlertTerminos=!0);this.isLoadBtnPago=!0,this.generarPurchasenumber()}generarPurchasenumber(){this.crudService.getAll("transaction","get-purchasenumber",!1,!1,!1).subscribe(t=>{const e=t.data[0].purchasenumber;this.el_purchasenumber=e,pagar(this.importeTransaccion,e,this.dataClientePago),this.listenResponse(),this.verificarCheckTerminos(),this.listenStatusService.setIsBtnPagoShow(!0),localStorage.setItem("sys::btnP","1")})}listenResponse(){this.timeListenerKeys=setTimeout(()=>{const t=localStorage.getItem(this.listenKeyData);let e;this.isLoaderTransaction="0"!==localStorage.getItem(this.listenKeyLoader),"null"!==t?(this.isLoadBtnPago=!1,this.dataResTransaction=JSON.parse(t),this.isTrasctionSuccess=!this.dataResTransaction.error,this.isTrasctionSuccess?(e={purchaseNumber:this.dataResTransaction.order.purchaseNumber,card:this.dataResTransaction.dataMap.CARD,brand:this.dataResTransaction.dataMap.BRAND,descripcion:this.dataResTransaction.dataMap.ACTION_DESCRIPTION,status:this.dataResTransaction.dataMap.STATUS,error:this.dataResTransaction.error},this.responseTranaccion.success=!0,this.responseTranaccion.data=e,this.emitRespuesta(),setTimeout(()=>{this.isLoaderTransaction=!1,this.infoTokenService.setIsPagoSuccess(!0)},1900)):(e={purchaseNumber:this.el_purchasenumber,card:this.dataResTransaction.data.CARD,brand:this.dataResTransaction.data.BRAND,descripcion:this.dataResTransaction.data.ACTION_DESCRIPTION,status:this.dataResTransaction.data.STATUS,error:this.dataResTransaction.error},this.responseTranaccion.success=!1,this.responseTranaccion.data=e,this.emitRespuesta()),localStorage.removeItem(this.listenKeyData)):this.listenResponse()},100)}verificarCheckTerminos(){this.isViewAlertTerminos=!this.isCheckTerminos,this.isViewAlertEmail=!this.isEmailValid}verificarCorreo(t){this.isEmailValid=t.checkValidity(),this.isViewAlertEmail=!this.isEmailValid,this.dataClientePago.email=t.value}emitRespuesta(){this.responseTransa.emit(this.responseTranaccion)}btnFinListo(){this.repuestaBtnListo.emit(!0)}}return t.\u0275fac=function(e){return new(e||t)(o.Lb(R.a),o.Lb(v.a),o.Lb(h.a),o.Lb(n.a))},t.\u0275cmp=o.Fb({type:t,selectors:[["app-comp-pasarela-pago"]],inputs:{dataTrasa:"dataTrasa"},outputs:{responseTransa:"responseTransa",repuestaBtnListo:"repuestaBtnListo"},decls:4,vars:3,consts:[["class","loader-pago",4,"ngIf"],[1,"animated","fadeIn","content-pago"],[4,"ngIf"],["class","animated fadeIn",4,"ngIf"],[1,"loader-pago"],["mode","indeterminate"],[1,"p-3",2,"max-width","500px","margin","0 auto"],[1,"mt-2","mb-2"],[1,"text-center"],[1,"fs-30","fw-600"],[1,"fs-15"],["id","importe"],["class","w-100",4,"ngIf"],["class","text-center",4,"ngIf"],[1,"div-btn"],["id","btn_pago"],["id","btn-disabled",1,"btn-pago-disabled",3,"click"],[1,"fa","fa-spinner","fa-spin",3,"hidden"],[3,"hidden"],[1,"w-100"],["ng","",1,"fs-13","fw-100",3,"ngClass"],[1,"w-100","text-center"],["matInput","","type","email","name","email","pattern","[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$","placeholder","Correo electronico",1,"text-center",3,"keyup"],["txtCorreo",""],[1,"fs-13","fw-100","text-danger","m-0","p-0",3,"hidden"],[3,"click"],["href","http://papaya.com.pe/terminos-condiciones.html","target","_blank"],["class","fw-100 fs-14 text-danger animated flash",4,"ngIf"],[1,"fw-100","fs-14","text-danger","animated","flash"],[1,"animated","fadeIn"],[4,"ngIf","ngIfElse"],["elseTemplate",""],[1,"text-center","fs-20","fw-100","banner-res-error","p-3"],["aria-hidden","true",1,"fa","fa-times-circle-o","fa-2x"],[1,"p-3","bg-white"],[1,"fw-100"],["mat-flat-button","","color","accent",3,"click"],[1,"fs-20"],["src","./assets/images/food_delivery.gif","alt","delivery","width","160px"],[1,"p-3","bg-white","text-center"],["mat-flat-button","","color","primary",3,"click"]],template:function(t,e){1&t&&(o.Dc(0,A,5,0,"div",0),o.Rb(1,"div",1),o.Dc(2,y,22,8,"div",2),o.Dc(3,z,4,2,"div",3),o.Qb()),2&t&&(o.lc("ngIf",e.isLoaderTransaction),o.zb(2),o.lc("ngIf",!e.dataResTransaction),o.zb(1),o.lc("ngIf",e.dataResTransaction))},directives:[a.n,w.a,S.a,a.l,P.b,T.a,Q.a,g.a],pipes:[a.f],styles:[".content-pago[_ngcontent-%COMP%]{height:100vh}.header-pago[_ngcontent-%COMP%]{background:#3f51b5;color:#fff;width:100%}.loader-pago[_ngcontent-%COMP%]{position:absolute;z-index:1;height:100vh;text-align:center;vertical-align:middle;background:#212121;width:100%;opacity:.9;color:#fff}.loader-pago[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{top:50%}.btn-pago-disabled[_ngcontent-%COMP%], .loader-pago[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{position:relative;width:50%;margin:0 auto}.btn-pago-disabled[_ngcontent-%COMP%]{-webkit-transition:all 1s ease-in-out;transition:all 1s ease-in-out;background:grey;border-radius:5px;padding:8px;color:#fff;text-align:center}.btn-hidden[_ngcontent-%COMP%]{display:none}.div-btn[_ngcontent-%COMP%]{height:48px}.banner-res-ok[_ngcontent-%COMP%]{color:#fff;background:#436be1}.banner-res-error[_ngcontent-%COMP%]{color:#fff;background:#ef5350}"]}),t})();function E(t,e){if(1&t){const t=o.Sb();o.Rb(0,"div",26),o.Rb(1,"app-comp-ctrl-add-fast",27),o.Zb("objResponse",(function(e){return o.xc(t),o.dc(2).resultCantItem(e)})),o.Qb(),o.Mb(2,"img",28),o.Rb(3,"p",29),o.Fc(4),o.Qb(),o.Rb(5,"p",8),o.Fc(6),o.ec(7,"number"),o.Qb(),o.Qb()}if(2&t){const t=e.$implicit,i=o.dc(2);o.zb(1),o.lc("objItem",t)("stopAdd",i.stopAdd),o.zb(1),o.nc("src","assets/images/icon-app/",t.img,"",o.yc),o.zb(2),o.Hc(" ",t.denominacion," "),o.zb(2),o.Ic("",t.simbolo," ",o.gc(7,6,t.valor,".2"),"")}}function O(t,e){1&t&&(o.Pb(0),o.Mb(1,"span",30),o.Ob())}function _(t,e){if(1&t&&(o.Rb(0,"span"),o.Fc(1),o.ec(2,"number"),o.Qb()),2&t){const t=o.dc(2);o.zb(1),o.Hc(" S/. ",o.gc(2,1,t.costoEntrega,".2")," ")}}function B(t,e){if(1&t){const t=o.Sb();o.Rb(0,"div",2),o.Rb(1,"div",3),o.Mb(2,"img",4),o.Qb(),o.Rb(3,"div",5),o.Rb(4,"div",6),o.Rb(5,"p",7),o.Fc(6,"Selecciona el monto que deseas retirar. Confirma la cantidad y un repartidor te llevar\xe1 el efectivo. El monto maximo a retirar es de "),o.Rb(7,"span",8),o.Fc(8,"S/. 200.00"),o.Qb(),o.Qb(),o.Qb(),o.Mb(9,"hr"),o.Rb(10,"div",9),o.Rb(11,"h4"),o.Fc(12,"ATM"),o.Qb(),o.Rb(13,"div",10),o.Dc(14,E,8,9,"div",11),o.Qb(),o.Qb(),o.Mb(15,"hr"),o.Rb(16,"div",12),o.Mb(17,"br"),o.Rb(18,"button",13),o.Zb("click",(function(){return o.xc(t),o.dc().btnNext()})),o.Fc(19," Continuar "),o.Rb(20,"span",5),o.Fc(21),o.ec(22,"number"),o.Qb(),o.Qb(),o.Qb(),o.Mb(23,"br"),o.Mb(24,"br"),o.Qb(),o.Rb(25,"div",14),o.Rb(26,"h5"),o.Fc(27,"Detalle del retiro"),o.Qb(),o.Mb(28,"br"),o.Rb(29,"app-comp-get-datos-cliente",15),o.Zb("frmResponse",(function(e){return o.xc(t),o.dc().frmClienteResponse(e)})),o.Qb(),o.Mb(30,"hr"),o.Rb(31,"table",16),o.Rb(32,"tbody"),o.Rb(33,"tr"),o.Rb(34,"td"),o.Rb(35,"span"),o.Fc(36,"Monto a retirar"),o.Qb(),o.Qb(),o.Rb(37,"td",17),o.Rb(38,"span",18),o.Fc(39),o.ec(40,"number"),o.Qb(),o.Qb(),o.Qb(),o.Rb(41,"tr"),o.Rb(42,"td"),o.Rb(43,"span"),o.Fc(44," Costo de entrega "),o.Qb(),o.Qb(),o.Rb(45,"td",19),o.Dc(46,O,2,0,"ng-container",20),o.Dc(47,_,3,4,"ng-template",null,21,o.Ec),o.Qb(),o.Qb(),o.Rb(49,"tr"),o.Rb(50,"td"),o.Rb(51,"span"),o.Fc(52," Total "),o.Qb(),o.Qb(),o.Rb(53,"td",19),o.Rb(54,"span",22),o.Fc(55),o.ec(56,"number"),o.Qb(),o.Qb(),o.Qb(),o.Qb(),o.Qb(),o.Mb(57,"hr"),o.Mb(58,"br"),o.Rb(59,"div",12),o.Rb(60,"button",23),o.Zb("click",(function(){return o.xc(t),o.dc().btnBackAtm()})),o.Mb(61,"span",24),o.Fc(62," Atras"),o.Qb(),o.Rb(63,"button",25),o.Zb("click",(function(){return o.xc(t),o.dc().nextPagar()})),o.Fc(64," Listo, Confirmar "),o.Qb(),o.Qb(),o.Mb(65,"br"),o.Mb(66,"br"),o.Qb(),o.Qb()}if(2&t){const t=o.uc(48),e=o.dc();o.zb(3),o.lc("hidden",0!=e.opShowPage),o.zb(11),o.lc("ngForOf",e.listBilletes),o.zb(4),o.lc("disabled",0===e.importeRetirar),o.zb(2),o.lc("hidden",0===e.importeRetirar),o.zb(1),o.Hc(" S/. ",o.gc(22,12,e.importeRetirar,".2")," "),o.zb(4),o.lc("hidden",1!=e.opShowPage),o.zb(4),o.lc("opciones",e.opcionesFrmCliente),o.zb(10),o.Hc("S/. ",o.gc(40,15,e.importeRetirar,".2"),""),o.zb(7),o.lc("ngIf",e.isLoadingCosto)("ngIfElse",t),o.zb(9),o.Hc("S/. ",o.gc(56,18,e.importeNetoRetirar,".2"),""),o.zb(8),o.lc("disabled",!e.enabledSendPedido)}}function N(t,e){if(1&t){const t=o.Sb();o.Rb(0,"div",31),o.Rb(1,"app-comp-pasarela-pago",32),o.Zb("responseTransa",(function(e){return o.xc(t),o.dc().respuestaTransaccion(e)}))("repuestaBtnListo",(function(e){return o.xc(t),o.dc().finTransaccionOk(e)})),o.Qb(),o.Qb()}if(2&t){const t=o.dc();o.zb(1),o.lc("dataTrasa",t.dataAtmPago)}}const V=[{path:"",component:c,data:{titulo:"Inicio"},children:[{path:"",redirectTo:"atm"},{path:"atm",component:(()=>{class t{constructor(t,e,i,a,s,n){this.parametrosDelivery=t,this.router=e,this.listenService=i,this.crudService=a,this.socketService=s,this.verifyClientService=n,this.listBilletes=[],this.importeRetirar=0,this.stopAdd=!1,this.limitAdd=200,this.opcionesFrmCliente=new b.a,this.opShowPage=0,this.enabledSendPedido=!1,this.comisionAtm=0,this.costoEntrega=0,this.importeNetoRetirar=0,this.isLoadingCosto=!1,this.dataAtmPago=new d,this.isClienteLogueado=!1}ngOnInit(){this.infoClient=this.verifyClientService.getDataClient(),this.socketService.connect(this.infoClient,0,!1,!0),this.verifyBtnPagoReload(),this.opcionesFrmCliente.showDirreccionA=!0,this.opcionesFrmCliente.telefono=!0,this.opcionesFrmCliente.calDistanciaCentro=!0,this.opcionesFrmCliente.tituloDirA="A d\xf3nde lo llevamos?",this.listBilletes.push({denominacion:"Cien nuevos soles",valor:100,simbolo:"S/. ",img:"b100.jpg"}),this.listBilletes.push({denominacion:"Cicuenta nuevos soles",valor:50,simbolo:"S/. ",img:"b50.jpg"}),this.listenService.numberPageShowAtm$.subscribe(t=>{this.opShowPage=t})}verifyBtnPagoReload(){let t=localStorage.getItem("sys::btnP");t=t||"","1"===t.toString()&&(localStorage.setItem("sys::btnP","0"),window.location.reload())}resultCantItem(t){this.importeRetirar=this.listBilletes.map(t=>(t.cantidad_selected=t.cantidad_selected?t.cantidad_selected:0,t.importeTotal=t.cantidad_selected*t.valor,t.importeTotal)).reduce((t,e)=>t+e,0),this.stopAdd=this.importeRetirar>=200}btnNext(){this.opShowPage=1,this.listenService.setNumberShowPageAtm(this.opShowPage),this.getComisionAtm()}btnBackAtm(){--this.opShowPage,this.opShowPage=this.opShowPage<0?0:this.opShowPage,this.listenService.setNumberShowPageAtm(this.opShowPage)}getComisionAtm(){this.parametrosDelivery.getComisionAtm(this.importeRetirar).subscribe(t=>{this.comisionAtm=t.comision})}calcCostoEntrega(){this.costosPlaza&&(this.costoEntrega=this.costosPlaza.c_servicio+parseFloat(this.comisionAtm.toString()),this.importeNetoRetirar=this.importeRetirar+this.costoEntrega,this.setDataFromAtmCash())}setDataFromAtmCash(){this.dataAtmPago.from="atm",this.dataAtmPago.importe=this.importeNetoRetirar}frmClienteResponse(t){this.isLoadingCosto=!0,this.responseFrmDatosCliente=t,this.isLoadingCosto=t.ladingCostoServicio,this.enabledSendPedido=!this.isLoadingCosto&&t.success,t.ladingCostoServicio||(this.costosPlaza=t.costosPlaza,this.calcCostoEntrega())}nextPagar(){this.opShowPage=2,this.listenService.setNumberShowPageAtm(this.opShowPage),window.scroll(0,0)}respuestaTransaccion(t){t.success&&this.crudService.postFree({importeSolicita:this.importeRetirar,importeTotal:this.importeNetoRetirar,importeEntrega:this.costosPlaza.c_servicio,importeTransaccion:this.comisionAtm,idcliente:this.responseFrmDatosCliente.cliente.idcliente,billetes:this.listBilletes,transaccion:t.data,entrega:{cliente:{idcliente:this.responseFrmDatosCliente.cliente.idcliente,nombres:this.responseFrmDatosCliente.cliente.nombres,telefono:this.responseFrmDatosCliente.telefono},direccion:this.responseFrmDatosCliente.direccionA}},"delivery","set-cash-atm",!1).subscribe(t=>{this.socketService.emit("nuevo-retiro-cash-atm","")})}finTransaccionOk(t){t?this.router.navigate(["../"]):(this.btnBackAtm(),this.opShowPage=0,this.listenService.setNumberShowPageAtm(this.opShowPage))}}return t.\u0275fac=function(e){return new(e||t)(o.Lb(l.a),o.Lb(s.d),o.Lb(n.a),o.Lb(h.a),o.Lb(p.a),o.Lb(m.a))},t.\u0275cmp=o.Fb({type:t,selectors:[["app-atm"]],decls:2,vars:2,consts:[["class","animated fadeIn w-100 div-content overflow-auto",4,"ngIf"],["class","animated fadeInRight w-100 p-1",4,"ngIf"],[1,"animated","fadeIn","w-100","div-content","overflow-auto"],[2,"min-width","186px","background","lightsteelblue"],["src","assets/images/icon-app/atm2.jpg","alt","","width","100%"],[3,"hidden"],[1,"p-3"],[1,"fs-13","fw-100"],[1,"fw-600"],[1,"pl-3","pr-3","pt-1"],[1,"d-flex","justify-content-start"],["class","img-billete mr-4",4,"ngFor","ngForOf"],[1,"w-100","text-center"],["mat-raised-button","","color","primary",1,"w-75",3,"disabled","click"],[1,"animated","fadeInRight","w-100","p-3",3,"hidden"],[1,"fs-12",3,"opciones","frmResponse"],[1,"w-100"],["align","right",1,"aling-right"],[1,"fw-600","fs-16"],["align","right"],[4,"ngIf","ngIfElse"],["elseTemplate",""],[1,"fw-600","fs-17"],["mat-raised-button","","color","accent",1,"mr-2",3,"click"],[1,"fa","fa-arrow-circle-left","pr-1"],["mat-raised-button","","color","primary",3,"disabled","click"],[1,"img-billete","mr-4"],[3,"objItem","stopAdd","objResponse"],["alt","b100",3,"src"],[1,"text-secondary","fs-12"],[1,"fa","fa-circle-o-notch","fa-spin"],[1,"animated","fadeInRight","w-100","p-1"],[3,"dataTrasa","responseTransa","repuestaBtnListo"]],template:function(t,e){1&t&&(o.Dc(0,B,67,21,"div",0),o.Dc(1,N,2,1,"div",1)),2&t&&(o.lc("ngIf",2!==e.opShowPage),o.zb(1),o.lc("ngIf",2===e.opShowPage))},directives:[a.n,a.m,g.a,u.a,f.a,L],pipes:[a.f],styles:["p[_ngcontent-%COMP%]{margin:0}.div-content[_ngcontent-%COMP%]{width:100%;max-width:500px;margin:0 auto}.img-billete[_ngcontent-%COMP%]{display:grid}.img-billete[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:140px;padding-right:5px}"]}),t})(),data:{titulo:"Categorias"}}]}];let j=(()=>{class t{}return t.\u0275mod=o.Jb({type:t}),t.\u0275inj=o.Ib({factory:function(e){return new(e||t)},imports:[[s.g.forChild(V)],s.g]}),t})();var q=i("rsRi"),Z=i("lSLK");let H=(()=>{class t{}return t.\u0275mod=o.Jb({type:t}),t.\u0275inj=o.Ib({factory:function(e){return new(e||t)},imports:[[a.c,j,q.a,Z.a]]}),t})()}}]);