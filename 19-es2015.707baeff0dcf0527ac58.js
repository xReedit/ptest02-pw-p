(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{ht3D:function(i,e,t){"use strict";t.r(e),t.d(e,"PedidoConfirmadoModule",(function(){return g}));var s=t("ofXK"),o=t("tyNb"),r=t("zOUh"),n=t("/sn2"),a=t("yFR0"),c=t("nx09"),b=t("0IaG"),d=t("dDDv"),h=t("W2jQ"),u=t("wne+"),l=t("fXoL"),v=t("Wp6s"),f=t("bTqV");const p=[{path:"",component:(()=>{class i{constructor(i,e,t,s,o,r,n,a){this.infoTokenService=i,this.navigatorService=e,this.router=t,this.socketService=s,this.miPedidoService=o,this.dialog=r,this.pushNotificationSerice=n,this.utilitariosSerivce=a,this.titulo="Pedido Confirmado",this.subtitulo="Su orden llegara pronto.",this.img="food_delivery.gif",this.isReservaCliente=!1}ngOnInit(){this.navigatorService.disableGoBack(),this.navigatorService.setOffListenNavigator(!0),this.isReservaCliente=this.infoTokenService.infoUsToken.isReserva,this.isReservaCliente&&(this.titulo="Reserva Confirmada",this.subtitulo="Su reserva esta hecha. Lo esperamos a la hora que indico.",this.img="icon-app/reserva.JPG")}finDeliveryAvisoMsj(){"iOS"!==this.utilitariosSerivce.getOS()&&this.lanzarPermisoNotificationPush(0),this.miPedidoService.prepareNewPedido(),this.infoTokenService.removeStoragePedido(),this.infoTokenService.setIdCliente(),this.socketService.isSocketOpenReconect=!0,this.socketService.closeConnection(),this.navigatorService.cerrarSession()}lanzarPermisoNotificationPush(i=0){if(this.pushNotificationSerice.getIsTienePermiso())return void this.pushNotificationSerice.suscribirse();const e=new b.e;e.disableClose=!0,e.hasBackdrop=!0,e.data={idMjs:i},this.dialog.open(h.a,e).afterClosed().subscribe(i=>{i&&this.pushNotificationSerice.suscribirse()})}}return i.\u0275fac=function(e){return new(e||i)(l.Lb(r.a),l.Lb(n.a),l.Lb(o.d),l.Lb(a.a),l.Lb(c.a),l.Lb(b.b),l.Lb(d.a),l.Lb(u.a))},i.\u0275cmp=l.Fb({type:i,selectors:[["app-confirmado"]],decls:24,vars:3,consts:[[1,"animated","fadeIn","h-100","d-flex","justify-content-center","align-items-center",2,"background-color","#3f51b5"],[1,"m-2","mb-2"],[1,"p-3",2,"max-width","500px","margin","0 auto"],[1,"p-3","bg-white"],[1,"text-center"],[1,"fs-20"],[2,"max-width","220px"],["alt","delivery","width","160px",3,"src"],[1,"p-3","bg-white","text-center"],["mat-flat-button","","color","primary",3,"click"]],template:function(i,e){1&i&&(l.Rb(0,"div",0),l.Rb(1,"mat-card",1),l.Rb(2,"div",2),l.Rb(3,"div",3),l.Rb(4,"div",4),l.Rb(5,"p",5),l.Gc(6),l.Qb(),l.Mb(7,"hr"),l.Rb(8,"div",6),l.Rb(9,"p"),l.Gc(10),l.Qb(),l.Qb(),l.Mb(11,"hr"),l.Mb(12,"img",7),l.Mb(13,"hr"),l.Rb(14,"p"),l.Gc(15,"Puede ver el estado en "),l.Mb(16,"br"),l.Rb(17,"strong"),l.Gc(18,"Mis Pedidos"),l.Qb(),l.Gc(19,"."),l.Qb(),l.Qb(),l.Qb(),l.Rb(20,"div",8),l.Rb(21,"button",9),l.Zb("click",(function(){return e.finDeliveryAvisoMsj()})),l.Gc(22," Listo. "),l.Qb(),l.Mb(23,"br"),l.Qb(),l.Qb(),l.Qb(),l.Qb()),2&i&&(l.zb(6),l.Hc(e.titulo),l.zb(4),l.Hc(e.subtitulo),l.zb(2),l.nc("src","./assets/images/",e.img,"",l.yc))},directives:[v.a,f.b],styles:[""]}),i})(),data:{titulo:"Cuenta"},children:[{path:"",redirectTo:"confirmado"}]}];let m=(()=>{class i{}return i.\u0275mod=l.Jb({type:i}),i.\u0275inj=l.Ib({factory:function(e){return new(e||i)},imports:[[o.h.forChild(p)],o.h]}),i})();var S=t("rsRi");let g=(()=>{class i{}return i.\u0275mod=l.Jb({type:i}),i.\u0275inj=l.Ib({factory:function(e){return new(e||i)},imports:[[s.c,m,S.a]]}),i})()}}]);