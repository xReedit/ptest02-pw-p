(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{ADEv:function(t,e,i){"use strict";i.r(e),i.d(e,"EncuestaModule",(function(){return O}));var n=i("ofXK"),s=i("tyNb"),c=i("zOUh"),a=i("+lji"),o=i("/sn2"),r=i("yFR0"),b=i("eI2u"),u=i("JOr0"),d=i("fXoL"),l=i("wZkO"),h=i("bTqV"),p=i("3jVI");function f(t,e){if(1&t){const t=d.Rb();d.Ob(0),d.Qb(1,"div"),d.Lb(2,"textarea",18,19),d.Lb(4,"br"),d.Lb(5,"br"),d.Qb(6,"button",10),d.Yb("click",(function(){d.wc(t);const e=d.tc(3),i=d.cc().$implicit,n=d.cc();return n.pasarTab(n.listOption,i,e.value)})),d.Hc(7,"Listo, Enviar"),d.Pb(),d.Pb(),d.Nb()}}function g(t,e){if(1&t){const t=d.Rb();d.Qb(0,"app-encuesta-opcion",20),d.Yb("NextPregunta",(function(e){d.wc(t);const i=d.cc().$implicit;return d.cc().pasarTab(e,i)})),d.Pb()}if(2&t){const t=d.cc(2);d.kc("ListOption",t.listOption)}}function m(t,e){if(1&t&&(d.Qb(0,"mat-tab",12),d.Lb(1,"br"),d.Lb(2,"br"),d.Qb(3,"div",7),d.Qb(4,"div",null,15),d.Qb(6,"p",8),d.Hc(7),d.Pb(),d.Fc(8,f,8,0,"ng-container",16),d.Fc(9,g,1,1,"ng-template",null,17,d.Gc),d.Pb(),d.Pb(),d.Pb()),2&t){const t=e.$implicit,i=d.tc(10);d.zb(7),d.Ic(t.pregunta),d.zb(1),d.kc("ngIf","1"===t.obligatorio)("ngIfElse",i)}}function v(t,e){if(1&t){const t=d.Rb();d.Qb(0,"footer",21),d.Qb(1,"button",22),d.Yb("click",(function(){return d.wc(t),d.cc().cerrarSession()})),d.Hc(2,"En otro momento, gracias."),d.Pb(),d.Pb()}}const S=[{path:"",component:(()=>{class t{constructor(t,e,i,n,s,c){this.infoTokenService=t,this.crudService=e,this.navigatorService=i,this.socketService=n,this.listenStatusService=s,this.establecimientoService=c,this.nomSede="",this.ciudadSede="",this.countFin=4,this.selectedTabEncuesta=0,this.intervalConteo=null,this.isBtnPagoShow=!1,this.ListRespuestas=[],this.xIdEncuesta=0,this.countOption=1}ngOnInit(){this.infoToken=this.infoTokenService.getInfoUs(),this.infoSede=this.establecimientoService.get(),this.nomSede=this.infoSede.nombre,this.ciudadSede=this.infoSede.ciudad,this.dataPost={idsede:this.infoSede.idsede},this.loadOpciones(),this.loadEncuesta(),this.navigatorService.disabledBack=!0,history.pushState(null,null,location.href),window.onpopstate=function(){history.go(1)},this.listenStatusService.isBtnPagoShow$.subscribe(t=>{this.isBtnPagoShow=t})}loadEncuesta(){this.crudService.postFree(this.dataPost,"encuesta","la-encuesta",!1).subscribe(t=>{if(t.success){if(0===t.data.length)return void this.cerrarSession();const e=t.data[0].preguntas;this.xIdEncuesta=e.idencuesta,this.titulo_inicio=e.inicio,this.titulo_fin=e.fin,this.listPreguntas=e.preguntas,this.countOption+=this.listPreguntas.length}else this.cerrarSession()})}loadOpciones(){this.crudService.postFree(this.dataPost,"encuesta","las-opciones",!1).subscribe(t=>{t.success&&(this.listOption=t.data)})}pasarTab(t=null,e=null,i=null){if(!t)return void this.selectedTabEncuesta++;const n="1"===e.obligatorio;this.ListRespuestas.push({idencuesta_pregunta:e.idencuesta_pregunta,idencuesta_respuesta:t.idencuesta_respuesta||0,iscomentario:n,comentario:i||""}),this.selectedTabEncuesta++,n&&this.guardarEncuesta(),this.countOption===this.selectedTabEncuesta&&this.cuentaRegresiva()}guardarEncuesta(){this.crudService.postFree({item:this.ListRespuestas,i:this.xIdEncuesta},"encuesta","guardar",!1).subscribe(t=>{})}cuentaRegresiva(){this.countFin<=0?(this.intervalConteo=null,this.cerrarSession()):this.conteoFinEncuesta()}conteoFinEncuesta(){this.intervalConteo=setTimeout(()=>{this.countFin--,this.cuentaRegresiva()},1e3)}cerrarSession(){this.navigatorService.cerrarSession(this.isBtnPagoShow),this.infoTokenService.cerrarSession(),this.socketService.isSocketOpenReconect=!0,this.socketService.closeConnection()}}return t.\u0275fac=function(e){return new(e||t)(d.Kb(c.a),d.Kb(a.a),d.Kb(o.a),d.Kb(r.a),d.Kb(b.a),d.Kb(u.a))},t.\u0275cmp=d.Eb({type:t,selectors:[["app-encuesta"]],decls:32,vars:13,consts:[[1,"animated","fadeIn"],[1,"text-center","p-3","encabezado-encuesta"],[1,"fs-17","fw-600","m-0"],[1,"fs-14","fw-100","p-0"],[1,"text-center","xcontainer-centrado","p-3","hv-50"],[1,"contain-size",3,"disableRipple","dynamicHeight","selectedIndex"],["disabled","",1,"overflow-hidden"],[1,"overflow-hidden"],[1,"fs-17","fw-600"],["src","assets/images/reactions_1.gif","width","100%","alt","."],["mat-flat-button","","color","primary",3,"click"],["disabled","",4,"ngFor","ngForOf"],["disabled",""],[1,"text-secondary","fs-50","fw-100"],["class","xfooter text-center bg-white p-3",4,"ngIf"],["opitem",""],[4,"ngIf","ngIfElse"],["elseTemplate",""],["id","txt_comentario","id","txt_comentario","cols","100","rows","3",2,"width","70%"],["txt_comentario",""],[1,"d-flex",3,"ListOption","NextPregunta"],[1,"xfooter","text-center","bg-white","p-3"],["mat-flat-button","","color","accent",3,"click"]],template:function(t,e){1&t&&(d.Qb(0,"div",0),d.Qb(1,"div",1),d.Qb(2,"p",2),d.Hc(3),d.Pb(),d.Qb(4,"span",3),d.Hc(5),d.Pb(),d.Pb(),d.Qb(6,"div",4),d.Qb(7,"mat-tab-group",5),d.Qb(8,"mat-tab",6),d.Lb(9,"br"),d.Lb(10,"br"),d.Qb(11,"div",7),d.Qb(12,"p",8),d.Hc(13),d.Pb(),d.Lb(14,"img",9),d.Lb(15,"br"),d.Lb(16,"br"),d.Lb(17,"br"),d.Qb(18,"button",10),d.Yb("click",(function(){return e.pasarTab()})),d.Hc(19,"Ok, Empezar"),d.Pb(),d.Pb(),d.Pb(),d.Fc(20,m,11,3,"mat-tab",11),d.Qb(21,"mat-tab",12),d.Lb(22,"br"),d.Lb(23,"br"),d.Qb(24,"div",7),d.Qb(25,"p",8),d.Hc(26),d.Pb(),d.Lb(27,"br"),d.Qb(28,"p",13),d.Hc(29),d.dc(30,"number"),d.Pb(),d.Pb(),d.Pb(),d.Pb(),d.Pb(),d.Fc(31,v,3,0,"footer",14),d.Pb()),2&t&&(d.zb(3),d.Ic(e.nomSede),d.zb(2),d.Ic(e.ciudadSede),d.zb(2),d.kc("disableRipple",!0)("dynamicHeight",!1)("selectedIndex",e.selectedTabEncuesta),d.zb(6),d.Ic(e.titulo_inicio),d.zb(7),d.kc("ngForOf",e.listPreguntas),d.zb(6),d.Ic(e.titulo_fin),d.zb(3),d.Ic(d.fc(30,10,e.countFin,"2.")),d.zb(2),d.kc("ngIf",0===e.selectedTabEncuesta))},directives:[l.c,l.a,h.b,n.s,n.t,p.a],pipes:[n.g],styles:[".encabezado-encuesta[_ngcontent-%COMP%]{position:fixed;top:0;width:100%;background:#3f51b5;color:#f5f5f5}.contain-size[_ngcontent-%COMP%]{contain:size}.mat-tab-header-pagination-controls-enabled[_ngcontent-%COMP%]   .mat-tab-header-pagination[_ngcontent-%COMP%], .mat-tab-header-pagination.mat-tab-header-pagination-disabled[_ngcontent-%COMP%],   .mat-tab-header-pagination{display:none!important}.hv-50[_ngcontent-%COMP%]{height:45vh}"]}),t})(),data:{titulo:"Inicio"},children:[{path:"",redirectTo:"inicio"}]}];let P=(()=>{class t{}return t.\u0275mod=d.Ib({type:t}),t.\u0275inj=d.Hb({factory:function(e){return new(e||t)},imports:[[s.h.forChild(S)],s.h]}),t})();var w=i("rsRi"),I=i("lSLK");let O=(()=>{class t{}return t.\u0275mod=d.Ib({type:t}),t.\u0275inj=d.Hb({factory:function(e){return new(e||t)},imports:[[n.c,P,w.a,I.a]]}),t})()}}]);