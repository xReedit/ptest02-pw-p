(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{aVxZ:function(l,n,t){"use strict";t.r(n);var u=t("CcnG"),e=function(){return function(){}}(),i=t("pMnS"),o=t("bujt"),a=t("UodH"),c=t("lLAP"),s=t("wFw1"),b=t("Ip0R"),r=function(){function l(){this.NextPregunta=new u.m}return l.prototype.ngOnInit=function(){},l.prototype.xNextPregunta=function(l){var n=this;setTimeout(function(){n.NextPregunta.emit(l)},300)},l}(),d=u.sb({encapsulation:0,styles:[[".btnIco[_ngcontent-%COMP%]{opacity:.7;padding:10px;cursor:pointer;transition:transform .2s}.btnIco[_ngcontent-%COMP%]:hover{transform:scale(1.2);opacity:1}.divBtn[_ngcontent-%COMP%]{display:grid}.divBtn[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#757575}.op[_ngcontent-%COMP%]{text-align:center;line-height:1}.op[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:65px}"]],data:{}});function p(l){return u.Qb(0,[(l()(),u.ub(0,0,null,null,5,"div",[],null,null,null,null,null)),(l()(),u.ub(1,0,null,null,4,"div",[["class","divBtn text-center"]],null,[[null,"click"]],function(l,n,t){var u=!0;return"click"===n&&(u=!1!==l.component.xNextPregunta(l.context.$implicit)&&u),u},null,null)),(l()(),u.ub(2,0,null,null,3,"div",[["class","op"]],null,null,null,null,null)),(l()(),u.ub(3,0,null,null,0,"img",[["alt","btnOption"],["class","btnIco"]],[[8,"src",4]],null,null,null,null)),(l()(),u.ub(4,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),u.Ob(5,null,["",""]))],null,function(l,n){l(n,3,0,u.yb(1,"assets/images/encuesta-img/",n.context.$implicit.img,"")),l(n,5,0,n.context.$implicit.descripcion)})}function f(l){return u.Qb(0,[(l()(),u.jb(16777216,null,null,1,null,p)),u.tb(1,278528,null,0,b.m,[u.Q,u.N,u.t],{ngForOf:[0,"ngForOf"]},null)],function(l,n){l(n,1,0,n.component.ListOption)},null)}var g=t("Rlre"),h=t("La40"),m=t("zOUh"),v=t("+lji"),E=t("/sn2"),O=t("yFR0"),x=t("eI2u"),S=function(){function l(l,n,t,u,e){this.infoTokenService=l,this.crudService=n,this.navigatorService=t,this.socketService=u,this.listenStatusService=e,this.nomSede=[],this.countFin=4,this.selectedTabEncuesta=0,this.intervalConteo=null,this.isBtnPagoShow=!1,this.ListRespuestas=[],this.xIdEncuesta=0,this.countOption=1}return l.prototype.ngOnInit=function(){var l=this;this.infoToken=this.infoTokenService.getInfoUs(),console.log(this.infoToken),this.nomSede=localStorage.getItem("sys::s").split("|"),this.dataPost={idsede:this.infoToken.idsede},this.loadOpciones(),this.loadEncuesta(),this.navigatorService.disabledBack=!0,history.pushState(null,null,location.href),window.onpopstate=function(){history.go(1)},this.listenStatusService.isBtnPagoShow$.subscribe(function(n){l.isBtnPagoShow=n})},l.prototype.loadEncuesta=function(){var l=this;this.crudService.postFree(this.dataPost,"encuesta","la-encuesta",!1).subscribe(function(n){if(n.success){var t=n.data[0].preguntas;l.xIdEncuesta=t.idencuesta,l.titulo_inicio=t.inicio,l.titulo_fin=t.fin,l.listPreguntas=t.preguntas,l.countOption+=l.listPreguntas.length}})},l.prototype.loadOpciones=function(){var l=this;this.crudService.postFree(this.dataPost,"encuesta","las-opciones",!1).subscribe(function(n){console.log("las opciones",n),n.success&&(l.listOption=n.data)})},l.prototype.pasarTab=function(l,n,t){if(void 0===l&&(l=null),void 0===n&&(n=null),void 0===t&&(t=null),l){var u="1"===n.obligatorio;this.ListRespuestas.push({idencuesta_pregunta:n.idencuesta_pregunta,idencuesta_respuesta:l.idencuesta_respuesta||0,iscomentario:u,comentario:t||""}),this.selectedTabEncuesta++,u&&this.guardarEncuesta(),console.log("countOption",this.countOption),console.log("selectedTabEncuesta",this.selectedTabEncuesta),this.countOption===this.selectedTabEncuesta&&(console.log("terminar encuesta"),this.cuentaRegresiva())}else this.selectedTabEncuesta++},l.prototype.guardarEncuesta=function(){this.crudService.postFree({item:this.ListRespuestas,i:this.xIdEncuesta},"encuesta","guardar",!1).subscribe(function(l){console.log("guardado",l)})},l.prototype.cuentaRegresiva=function(){this.countFin<=0?(this.intervalConteo=null,this.cerrarSession()):this.conteoFinEncuesta()},l.prototype.conteoFinEncuesta=function(){var l=this;this.intervalConteo=setTimeout(function(){l.countFin--,l.cuentaRegresiva()},1e3)},l.prototype.cerrarSession=function(){this.navigatorService.cerrarSession(this.isBtnPagoShow),this.infoTokenService.cerrarSession(),this.socketService.isSocketOpenReconect=!0,this.socketService.closeConnection()},l}(),P=u.sb({encapsulation:0,styles:[[".encabezado-encuesta[_ngcontent-%COMP%]{position:fixed;top:0;width:100%;background:#3f51b5;color:#f5f5f5}.contain-size[_ngcontent-%COMP%]{contain:size}.mat-tab-header-pagination-controls-enabled[_ngcontent-%COMP%]   .mat-tab-header-pagination[_ngcontent-%COMP%], .mat-tab-header-pagination.mat-tab-header-pagination-disabled[_ngcontent-%COMP%]{display:none!important}  .mat-tab-header-pagination{display:none!important}.hv-50[_ngcontent-%COMP%]{height:45vh}"]],data:{}});function y(l){return u.Qb(0,[(l()(),u.ub(0,0,null,null,7,null,null,null,null,null,null,null)),(l()(),u.ub(1,0,null,null,6,"div",[],null,null,null,null,null)),(l()(),u.ub(2,0,[["txt_comentario",1]],null,0,"textarea",[["cols","100"],["id","txt_comentario"],["rows","3"],["style","width: 70%;"]],null,null,null,null,null)),(l()(),u.ub(3,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),u.ub(4,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),u.ub(5,0,null,null,2,"button",[["color","primary"],["mat-flat-button",""]],[[1,"disabled",0],[2,"_mat-animation-noopable",null]],[[null,"click"]],function(l,n,t){var e=!0,i=l.component;return"click"===n&&(e=!1!==i.pasarTab(i.listOption,l.parent.context.$implicit,u.Gb(l,2).value)&&e),e},o.b,o.a)),u.tb(6,180224,null,0,a.b,[u.k,c.d,[2,s.a]],{color:[0,"color"]},null),(l()(),u.Ob(-1,0,["Listo, Enviar"]))],function(l,n){l(n,6,0,"primary")},function(l,n){l(n,5,0,u.Gb(n,6).disabled||null,"NoopAnimations"===u.Gb(n,6)._animationMode)})}function _(l){return u.Qb(0,[(l()(),u.ub(0,0,null,null,1,"app-encuesta-opcion",[["class","d-flex"]],null,[[null,"NextPregunta"]],function(l,n,t){var u=!0;return"NextPregunta"===n&&(u=!1!==l.component.pasarTab(t,l.parent.context.$implicit)&&u),u},f,d)),u.tb(1,114688,null,0,r,[],{ListOption:[0,"ListOption"]},{NextPregunta:"NextPregunta"})],function(l,n){l(n,1,0,n.component.listOption)},null)}function w(l){return u.Qb(0,[(l()(),u.ub(0,16777216,null,null,12,"mat-tab",[["disabled",""]],null,null,null,g.d,g.a)),u.tb(1,770048,[[1,4]],2,h.c,[u.Q],{disabled:[0,"disabled"]},null),u.Mb(603979776,4,{templateLabel:0}),u.Mb(335544320,5,{_explicitContent:0}),(l()(),u.ub(4,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),u.ub(5,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),u.ub(6,0,null,0,6,"div",[["class","overflow-hidden"]],null,null,null,null,null)),(l()(),u.ub(7,0,[["opitem",1]],null,5,"div",[],null,null,null,null,null)),(l()(),u.ub(8,0,null,null,1,"p",[["class","fs-17 fw-600"]],null,null,null,null,null)),(l()(),u.Ob(9,null,["",""])),(l()(),u.jb(16777216,null,null,1,null,y)),u.tb(11,16384,null,0,b.n,[u.Q,u.N],{ngIf:[0,"ngIf"],ngIfElse:[1,"ngIfElse"]},null),(l()(),u.jb(0,[["elseTemplate",2]],null,0,null,_)),(l()(),u.jb(0,null,null,0))],function(l,n){l(n,1,0,""),l(n,11,0,"1"===n.context.$implicit.obligatorio,u.Gb(n,12))},function(l,n){l(n,9,0,n.context.$implicit.pregunta)})}function k(l){return u.Qb(0,[(l()(),u.ub(0,0,null,null,3,"footer",[["class","xfooter text-center bg-white p-3"]],null,null,null,null,null)),(l()(),u.ub(1,0,null,null,2,"button",[["color","accent"],["mat-flat-button",""]],[[1,"disabled",0],[2,"_mat-animation-noopable",null]],[[null,"click"]],function(l,n,t){var u=!0;return"click"===n&&(u=!1!==l.component.cerrarSession()&&u),u},o.b,o.a)),u.tb(2,180224,null,0,a.b,[u.k,c.d,[2,s.a]],{color:[0,"color"]},null),(l()(),u.Ob(-1,0,["En otro momento, gracias."]))],function(l,n){l(n,2,0,"accent")},function(l,n){l(n,1,0,u.Gb(n,2).disabled||null,"NoopAnimations"===u.Gb(n,2)._animationMode)})}function M(l){return u.Qb(0,[u.Ib(0,b.f,[u.v]),(l()(),u.ub(1,0,null,null,42,"div",[["class","animated fadeIn"]],null,null,null,null,null)),(l()(),u.ub(2,0,null,null,4,"div",[["class","text-center p-3 encabezado-encuesta"]],null,null,null,null,null)),(l()(),u.ub(3,0,null,null,1,"p",[["class","fs-17 fw-600 m-0"]],null,null,null,null,null)),(l()(),u.Ob(4,null,["",""])),(l()(),u.ub(5,0,null,null,1,"span",[["class","fs-14 fw-100 p-0"]],null,null,null,null,null)),(l()(),u.Ob(6,null,["",""])),(l()(),u.ub(7,0,null,null,34,"div",[["class","text-center xcontainer-centrado p-3 hv-50"]],null,null,null,null,null)),(l()(),u.ub(8,0,null,null,33,"mat-tab-group",[["class","contain-size mat-tab-group"]],[[2,"mat-tab-group-dynamic-height",null],[2,"mat-tab-group-inverted-header",null]],null,null,g.c,g.b)),u.tb(9,3325952,null,1,h.f,[u.k,u.h,[2,h.a],[2,s.a]],{disableRipple:[0,"disableRipple"],dynamicHeight:[1,"dynamicHeight"],selectedIndex:[2,"selectedIndex"]},null),u.Mb(603979776,1,{_tabs:1}),(l()(),u.ub(11,16777216,null,null,15,"mat-tab",[["class","overflow-hidden"],["disabled",""]],null,null,null,g.d,g.a)),u.tb(12,770048,[[1,4]],2,h.c,[u.Q],{disabled:[0,"disabled"]},null),u.Mb(603979776,2,{templateLabel:0}),u.Mb(335544320,3,{_explicitContent:0}),(l()(),u.ub(15,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),u.ub(16,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),u.ub(17,0,null,0,9,"div",[["class","overflow-hidden"]],null,null,null,null,null)),(l()(),u.ub(18,0,null,null,1,"p",[["class","fs-17 fw-600"]],null,null,null,null,null)),(l()(),u.Ob(19,null,["",""])),(l()(),u.ub(20,0,null,null,0,"img",[["alt","."],["src","assets/images/reactions_1.gif"],["width","100%"]],null,null,null,null,null)),(l()(),u.ub(21,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),u.ub(22,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),u.ub(23,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),u.ub(24,0,null,null,2,"button",[["color","primary"],["mat-flat-button",""]],[[1,"disabled",0],[2,"_mat-animation-noopable",null]],[[null,"click"]],function(l,n,t){var u=!0;return"click"===n&&(u=!1!==l.component.pasarTab()&&u),u},o.b,o.a)),u.tb(25,180224,null,0,a.b,[u.k,c.d,[2,s.a]],{color:[0,"color"]},null),(l()(),u.Ob(-1,0,["Ok, Empezar"])),(l()(),u.jb(16777216,null,null,1,null,w)),u.tb(28,278528,null,0,b.m,[u.Q,u.N,u.t],{ngForOf:[0,"ngForOf"]},null),(l()(),u.ub(29,16777216,null,null,12,"mat-tab",[["disabled",""]],null,null,null,g.d,g.a)),u.tb(30,770048,[[1,4]],2,h.c,[u.Q],{disabled:[0,"disabled"]},null),u.Mb(603979776,6,{templateLabel:0}),u.Mb(335544320,7,{_explicitContent:0}),(l()(),u.ub(33,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),u.ub(34,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),u.ub(35,0,null,0,6,"div",[["class","overflow-hidden"]],null,null,null,null,null)),(l()(),u.ub(36,0,null,null,1,"p",[["class","fs-17 fw-600"]],null,null,null,null,null)),(l()(),u.Ob(37,null,["",""])),(l()(),u.ub(38,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),u.ub(39,0,null,null,2,"p",[["class","text-secondary fs-50 fw-100"]],null,null,null,null,null)),(l()(),u.Ob(40,null,["",""])),u.Kb(41,2),(l()(),u.jb(16777216,null,null,1,null,k)),u.tb(43,16384,null,0,b.n,[u.Q,u.N],{ngIf:[0,"ngIf"]},null)],function(l,n){var t=n.component;l(n,9,0,!0,!1,t.selectedTabEncuesta),l(n,12,0,""),l(n,25,0,"primary"),l(n,28,0,t.listPreguntas),l(n,30,0,""),l(n,43,0,0===t.selectedTabEncuesta)},function(l,n){var t=n.component;l(n,4,0,t.nomSede[0]),l(n,6,0,t.nomSede[1]),l(n,8,0,u.Gb(n,9).dynamicHeight,"below"===u.Gb(n,9).headerPosition),l(n,19,0,t.titulo_inicio),l(n,24,0,u.Gb(n,25).disabled||null,"NoopAnimations"===u.Gb(n,25)._animationMode),l(n,37,0,t.titulo_fin);var e=u.Pb(n,40,0,l(n,41,0,u.Gb(n,0),t.countFin,"2."));l(n,40,0,e)})}function I(l){return u.Qb(0,[(l()(),u.ub(0,0,null,null,1,"app-encuesta",[],null,null,null,M,P)),u.tb(1,114688,null,0,S,[m.a,v.a,E.a,O.a,x.a],null,null)],function(l,n){l(n,1,0)},null)}var C=u.qb("app-encuesta",S,I,{},{},[]),T=t("t68o"),F=t("xYTU"),j=t("M2Lx"),N=t("Wf4p"),Q=t("eDkP"),L=t("Fzqc"),R=t("o3x0"),G=t("wmQ5"),z=t("gIcY"),B=t("ZYCi"),$={titulo:"Inicio"},A=function(){return function(){}}(),Y=t("ZYjt"),Z=t("dWZg"),H=t("SMsm"),U=t("/VYK"),q=t("seP3"),K=t("b716"),V=t("4c35"),D=t("Z+uX"),J=t("8mMr"),W=t("qAlS"),X=t("de3e"),ll=t("vARd"),nl=t("Lwpp"),tl=t("YhbO"),ul=t("jlZm"),el=t("FVSy"),il=t("rsRi"),ol=t("lSLK");t.d(n,"EncuestaModuleNgFactory",function(){return al});var al=u.rb(e,[],function(l){return u.Db([u.Eb(512,u.j,u.cb,[[8,[i.a,C,T.a,F.a,F.b]],[3,u.j],u.y]),u.Eb(4608,b.p,b.o,[u.v,[2,b.E]]),u.Eb(4608,j.c,j.c,[]),u.Eb(4608,N.a,N.a,[]),u.Eb(4608,Q.a,Q.a,[Q.g,Q.c,u.j,Q.f,Q.d,u.r,u.A,b.d,L.b,[2,b.i]]),u.Eb(5120,Q.h,Q.i,[Q.a]),u.Eb(5120,R.c,R.d,[Q.a]),u.Eb(135680,R.e,R.e,[Q.a,u.r,[2,b.i],[2,R.b],R.c,[3,R.e],Q.c]),u.Eb(5120,G.b,G.a,[[3,G.b]]),u.Eb(4608,z.e,z.e,[]),u.Eb(4608,z.v,z.v,[]),u.Eb(1073742336,b.c,b.c,[]),u.Eb(1073742336,B.n,B.n,[[2,B.s],[2,B.l]]),u.Eb(1073742336,A,A,[]),u.Eb(1073742336,L.a,L.a,[]),u.Eb(1073742336,N.e,N.e,[[2,N.b],[2,Y.f]]),u.Eb(1073742336,Z.b,Z.b,[]),u.Eb(1073742336,N.g,N.g,[]),u.Eb(1073742336,a.c,a.c,[]),u.Eb(1073742336,H.a,H.a,[]),u.Eb(1073742336,U.c,U.c,[]),u.Eb(1073742336,j.d,j.d,[]),u.Eb(1073742336,q.d,q.d,[]),u.Eb(1073742336,K.b,K.b,[]),u.Eb(1073742336,V.g,V.g,[]),u.Eb(1073742336,c.a,c.a,[]),u.Eb(1073742336,h.k,h.k,[]),u.Eb(1073742336,D.c,D.c,[]),u.Eb(1073742336,J.b,J.b,[]),u.Eb(1073742336,W.b,W.b,[]),u.Eb(1073742336,Q.e,Q.e,[]),u.Eb(1073742336,R.j,R.j,[]),u.Eb(1073742336,X.d,X.d,[]),u.Eb(1073742336,X.c,X.c,[]),u.Eb(1073742336,ll.e,ll.e,[]),u.Eb(1073742336,nl.e,nl.e,[]),u.Eb(1073742336,G.c,G.c,[]),u.Eb(1073742336,tl.c,tl.c,[]),u.Eb(1073742336,ul.d,ul.d,[]),u.Eb(1073742336,el.c,el.c,[]),u.Eb(1073742336,il.a,il.a,[]),u.Eb(1073742336,z.u,z.u,[]),u.Eb(1073742336,z.r,z.r,[]),u.Eb(1073742336,z.i,z.i,[]),u.Eb(1073742336,ol.a,ol.a,[]),u.Eb(1073742336,e,e,[]),u.Eb(1024,B.j,function(){return[[{path:"",component:S,data:$,children:[{path:"",redirectTo:"inicio"}]}]]},[])])})}}]);