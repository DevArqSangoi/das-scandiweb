(function(){"use strict";var e={537:function(e,t,n){var r=n(963),i=n(252);function a(e,t){const n=(0,i.up)("router-view");return(0,i.wg)(),(0,i.iD)("div",null,[(0,i.Wm)(n)])}var o=n(744);const u={},s=(0,o.Z)(u,[["render",a]]);var l=s,c=n(201),d=n(582),p=n(577),v=n(262);function h(){var e=this,t=(0,v.iH)([]),n=(0,v.iH)(!0),r=(0,v.iH)("idle"),a=(0,v.iH)(null),o=function(){return(0,d.mG)(e,void 0,void 0,(function(){var e,r,i;return(0,d.Jh)(this,(function(o){switch(o.label){case 0:return o.trys.push([0,3,4,5]),[4,fetch("http://das-scandiweb.infinityfreeapp.com/api/products")];case 1:if(e=o.sent(),!e.ok)throw new Error("Network response was not ok");return r=t,[4,e.json()];case 2:return r.value=o.sent(),[3,5];case 3:return i=o.sent(),i instanceof Error&&(a.value={message:i.message},console.error(i)),[3,5];case 4:return n.value=!1,[7];case 5:return[2]}}))}))},u=function(t){return(0,d.mG)(e,void 0,void 0,(function(){var e,n;return(0,d.Jh)(this,(function(r){switch(r.label){case 0:return r.trys.push([0,2,,3]),[4,fetch("http://das-scandiweb.infinityfreeapp.com/api/products",{method:"POST",body:JSON.stringify(t)})];case 1:if(e=r.sent(),!e.ok)throw new Error("Network response was not ok");return o(),[3,3];case 2:if(n=r.sent(),n instanceof Error)throw console.error(n),new Error("Erro ao adicionar produto: ".concat(n));return[3,3];case 3:return[2]}}))}))};(0,i.bv)(o);var s=function(e){return new Promise((function(t,n){fetch("http://das-scandiweb.infinityfreeapp.com/api/products".concat(e.sku),{method:"DELETE"}).then((function(e){if(!e.ok)throw new Error("Network response was not ok");t()})).catch((function(e){e instanceof Error&&(console.error(e),n({message:"An error occurred while deleting a product"}))}))}))},l=function(t){return(0,d.mG)(e,void 0,void 0,(function(){var e,n,i,u;return(0,d.Jh)(this,(function(l){switch(l.label){case 0:r.value="deleting",e=0,n=t,l.label=1;case 1:if(!(e<n.length))return[3,6];i=n[e],l.label=2;case 2:return l.trys.push([2,4,,5]),[4,s(i)];case 3:return l.sent(),[3,5];case 4:return u=l.sent(),u instanceof Error&&(a.value={message:u.message},console.error(u)),[3,5];case 5:return e++,[3,1];case 6:return[4,o()];case 7:return l.sent(),r.value="deleted",setTimeout((function(){r.value="idle"}),1e3),[2]}}))}))};return{products:t,isLoading:n,deleteStatus:r,error:a,loadProducts:o,addProduct:u,deleteProducts:l}}function f(){var e=(0,v.iH)(localStorage.getItem("theme")||"light"),t=(0,v.iH)("dark"===e.value);(0,i.m0)((function(){document.documentElement.className=e.value,localStorage.setItem("theme",e.value),t.value="dark"===e.value}));var n=function(){e.value="light"===e.value?"dark":"light"};return{theme:e,toggleTheme:n,isDarkMode:t}}var g=["onSubmit"],m=(0,i._)("h1",null,"PRODUCT ADD",-1),w=(0,i._)("button",{type:"submit",class:"button"},"Save",-1),k=(0,i._)("div",{class:"line-divider"},null,-1),_={class:"input-group"},b=(0,i._)("label",{for:"sku"},"SKU:",-1),y={class:"description"},V={key:0,class:"error-message"},S={class:"input-group"},U=(0,i._)("label",{for:"name"},"Name:",-1),z={class:"description"},D={key:0,class:"error-message"},P={class:"input-group"},W=(0,i._)("label",{for:"price"},"Price ($):",-1),C={class:"description"},E={key:0,class:"error-message"},H={class:"select-type"},q=(0,i._)("label",{for:"productType"},"Type:",-1),I=(0,i._)("option",{value:"dvd"},"DVD",-1),T=(0,i._)("option",{value:"book"},"Book",-1),N=(0,i._)("option",{value:"furniture"},"Furniture",-1),j=[I,T,N],O={key:0},x={class:"input-group"},L=(0,i._)("label",{for:"size"},"Size (mb):",-1),F={class:"description"},A={key:1},G={class:"input-group"},J=(0,i._)("label",{for:"weight"},"Weight (kg):",-1),M={class:"description"},K={key:2},Z={class:"input-group"},B=(0,i._)("label",{for:"height"},"Height (kg):",-1),Y={class:"description"},R={class:"input-group"},$=(0,i._)("label",{for:"width"},"Width (kg):",-1),Q={class:"description"},X={class:"input-group"},ee=(0,i._)("label",{for:"length"},"Length (kg):",-1),te={class:"description"},ne=(0,i._)("div",{class:"line-divider"},null,-1),re={class:"footer"},ie=(0,i._)("div",{class:"empty-div"},null,-1),ae=(0,i._)("span",{class:"foottext"},"Scandiweb Test assignment",-1),oe={class:"slider-container"},ue={class:"switch"},se=(0,i._)("span",{class:"slider round"},[(0,i._)("span",{class:"moon"},"🌙"),(0,i._)("span",{class:"sun"},"☀")],-1),le=(0,i.aZ)({__name:"add-product",setup:function(e){var t=h().addProduct,n=f(),a=n.toggleTheme,o=n.isDarkMode,u=(0,c.tv)(),s=(0,v.qj)({value:"dvd"}),l=(0,v.qj)({sku:"",name:"",price:0,type:"dvd",size:0}),I=(0,v.qj)({sku:"",name:"",price:0,type:"book",weight:0}),T=(0,v.qj)({sku:"",name:"",price:0,type:"furniture",height:0,width:0,length:0}),N=(0,i.Fl)((function(){switch(s.value){case"dvd":return l;case"book":return I;case"furniture":return T;default:throw new Error("Unsupported product type: ".concat(s.value))}})),le=(0,v.qj)({isValidSku:!0,isValidName:!0,isValidPrice:!0,isValidSize:!0,isValidWeight:!0,isValidHeight:!0,isValidWidth:!0,isValidLength:!0,isValidForm:!0});function ce(){return(0,d.mG)(this,void 0,void 0,(function(){var e;return(0,d.Jh)(this,(function(n){switch(n.label){case 0:if(le.isValidForm=de(),!le.isValidForm)return[3,4];n.label=1;case 1:return n.trys.push([1,3,,4]),console.log(N.value),[4,t(N.value)];case 2:return n.sent(),u.push("/products"),[3,4];case 3:return e=n.sent(),console.error("Erro ao adicionar produto:",e),[3,4];case 4:return[2]}}))}))}function de(){switch(le.isValidSku=""!==N.value.sku,le.isValidName=""!==N.value.name,le.isValidPrice=N.value.price>0,N.value.type){case"dvd":le.isValidSize=N.value.size>0&&N.value.size<=45e3;break;case"book":le.isValidWeight=N.value.weight>0&&N.value.weight<=10;break;case"furniture":le.isValidHeight=N.value.height>0&&N.value.height<=5,le.isValidWidth=N.value.width>0&&N.value.width<=5,le.isValidLength=N.value.length>0&&N.value.length<=5;break}return le.isValidSku&&le.isValidName&&le.isValidPrice&&le.isValidSize&&le.isValidWeight&&le.isValidHeight&&le.isValidWidth&&le.isValidLength}var pe=function(){u.push("/products")};return function(e,t){return(0,i.wg)(),(0,i.iD)("form",{id:"product_form",class:"add-container dynamic-form",onSubmit:(0,r.iM)(ce,["prevent"])},[(0,i._)("div",{class:"header"},[m,(0,i._)("div",{class:"button-group"},[w,(0,i._)("button",{type:"button",class:"button",onClick:pe},"Cancel")])]),k,(0,i._)("div",_,[b,(0,i.wy)((0,i._)("input",{type:"text",id:"sku","onUpdate:modelValue":t[0]||(t[0]=function(e){return N.value.sku=e}),placeholder:"SKU",onInput:t[1]||(t[1]=function(e){return le.isValidSku=!0}),class:(0,p.C_)({error:!le.isValidSku})},null,34),[[r.nr,N.value.sku]]),(0,i._)("div",y,[(0,i.Uk)(" > "),le.isValidSku?(0,i.kq)("",!0):((0,i.wg)(),(0,i.iD)("span",V,"Invalid SKU."))])]),(0,i._)("div",S,[U,(0,i.wy)((0,i._)("input",{type:"text",id:"name","onUpdate:modelValue":t[2]||(t[2]=function(e){return N.value.name=e}),placeholder:"Name",onInput:t[3]||(t[3]=function(e){return le.isValidName=!0}),class:(0,p.C_)({error:!le.isValidName})},null,34),[[r.nr,N.value.name]]),(0,i._)("div",z,[(0,i.Uk)(" > "),le.isValidName?(0,i.kq)("",!0):((0,i.wg)(),(0,i.iD)("span",D,"Invalid name."))])]),(0,i._)("div",P,[W,(0,i.wy)((0,i._)("input",{"onUpdate:modelValue":t[4]||(t[4]=function(e){return N.value.price=e}),id:"price",placeholder:"Price",onInput:t[5]||(t[5]=function(e){return le.isValidPrice=!0}),class:(0,p.C_)({error:!le.isValidPrice})},null,34),[[r.nr,N.value.price,void 0,{number:!0}]]),(0,i._)("div",C,[(0,i.Uk)(" > "),le.isValidName?(0,i.kq)("",!0):((0,i.wg)(),(0,i.iD)("span",E,"Invalid price."))])]),(0,i._)("div",H,[q,(0,i.wy)((0,i._)("select",{"onUpdate:modelValue":t[6]||(t[6]=function(e){return N.value.type=e}),id:"productType"},j,512),[[r.bM,N.value.type]])]),"dvd"===N.value.type?((0,i.wg)(),(0,i.iD)("div",O,[(0,i._)("div",x,[L,(0,i.wy)((0,i._)("input",{"onUpdate:modelValue":t[7]||(t[7]=function(e){return N.value.size=e}),id:"size",placeholder:"Size",onInput:t[8]||(t[8]=function(e){return le.isValidSize=!0}),class:(0,p.C_)({error:!le.isValidSize})},null,34),[[r.nr,N.value.size,void 0,{number:!0}]])]),(0,i._)("div",F,[(0,i.Uk)(" > "),(0,i._)("span",{class:(0,p.C_)({"error-message":!le.isValidSize,blink:!N.value.size})},(0,p.zw)(le.isValidSize?"Please, provide size in mb.":"Invalid size."),3)])])):(0,i.kq)("",!0),"book"===N.value.type?((0,i.wg)(),(0,i.iD)("div",A,[(0,i._)("div",G,[J,(0,i.wy)((0,i._)("input",{"onUpdate:modelValue":t[9]||(t[9]=function(e){return N.value.weight=e}),id:"weight",placeholder:"Weight",onInput:t[10]||(t[10]=function(e){return le.isValidWeight=!0}),class:(0,p.C_)({error:!le.isValidWeight})},null,34),[[r.nr,N.value.weight,void 0,{number:!0}]])]),(0,i._)("div",M,[(0,i.Uk)(" > "),(0,i._)("span",{class:(0,p.C_)({"error-message":!le.isValidWeight,blink:!N.value.weight})},(0,p.zw)(le.isValidWeight?"Please, provide weight in kg.":"Invalid weight."),3)])])):(0,i.kq)("",!0),"furniture"===N.value.type?((0,i.wg)(),(0,i.iD)("div",K,[(0,i._)("div",Z,[B,(0,i.wy)((0,i._)("input",{"onUpdate:modelValue":t[11]||(t[11]=function(e){return N.value.height=e}),id:"height",placeholder:"Height",onInput:t[12]||(t[12]=function(e){return le.isValidHeight=!0}),class:(0,p.C_)({error:!le.isValidHeight})},null,34),[[r.nr,N.value.height,void 0,{number:!0}]])]),(0,i._)("div",Y,[(0,i.Uk)(" > "),(0,i._)("span",{class:(0,p.C_)({"error-message":!le.isValidHeight,blink:!N.value.height})},(0,p.zw)(le.isValidHeight?"Please, provide height in meters.":"Invalid height."),3)]),(0,i._)("div",R,[$,(0,i.wy)((0,i._)("input",{"onUpdate:modelValue":t[13]||(t[13]=function(e){return N.value.width=e}),id:"width",placeholder:"Width",onInput:t[14]||(t[14]=function(e){return le.isValidWidth=!0}),class:(0,p.C_)({error:!le.isValidWidth})},null,34),[[r.nr,N.value.width,void 0,{number:!0}]])]),(0,i._)("div",Q,[(0,i.Uk)(" > "),(0,i._)("span",{class:(0,p.C_)({"error-message":!le.isValidWidth,blink:!N.value.width})},(0,p.zw)(le.isValidWidth?"Please, provide width in meters.":"Invalid width."),3)]),(0,i._)("div",X,[ee,(0,i.wy)((0,i._)("input",{"onUpdate:modelValue":t[15]||(t[15]=function(e){return N.value.length=e}),id:"length",placeholder:"Length",onInput:t[16]||(t[16]=function(e){return le.isValidLength=!0}),class:(0,p.C_)({error:!le.isValidLength})},null,34),[[r.nr,N.value.length,void 0,{number:!0}]])]),(0,i._)("div",te,[(0,i.Uk)(" > "),(0,i._)("span",{class:(0,p.C_)({"error-message":!le.isValidLength,blink:!N.value.length})},(0,p.zw)(le.isValidLength?"Please, provide length in meters.":"Invalid length."),3)])])):(0,i.kq)("",!0),ne,(0,i._)("div",re,[ie,ae,(0,i._)("div",oe,[(0,i._)("label",ue,[(0,i.wy)((0,i._)("input",{type:"checkbox","onUpdate:modelValue":t[17]||(t[17]=function(e){return(0,v.dq)(o)?o.value=e:null}),id:"theme-switch",onChange:t[18]||(t[18]=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return(0,v.SU)(a)&&(0,v.SU)(a).apply(void 0,e)})},null,544),[[r.e8,(0,v.SU)(o)]]),se])])])],40,g)}}});const ce=le;var de=ce,pe=n(410),ve={class:"product-card card"},he={class:"card-content"},fe={class:"card-title"},ge={class:"card-attribute"},me={class:"card-price"},we={class:"card-attribute"},ke={key:0,class:"card-attribute"},_e={key:1,class:"card-attribute"},be={key:2,class:"card-attribute"},ye=(0,i.aZ)({__name:"product-card",props:{product:{}},emits:["update:checked"],setup:function(e,t){var n=t.emit,r=(0,v.iH)(!1);(0,i.YP)(r,(function(e){n("update:checked",e)}));var a=function(){r.value=!r.value},o={dvd:"DVD",book:"Book",furniture:"Furniture"};return function(e,t){return(0,i.wg)(),(0,i.iD)("div",ve,[(0,i._)("div",{class:(0,p.C_)(["delete-checkbox",{checked:r.value}]),onClick:a},null,2),(0,i._)("div",he,[(0,i._)("div",fe,(0,p.zw)(e.product.name),1),(0,i._)("div",ge,(0,p.zw)(e.product.sku),1),(0,i._)("div",me,"US$ "+(0,p.zw)(e.product.price),1),(0,i._)("div",we,(0,p.zw)(o[e.product.type]),1),"dvd"===e.product.type?((0,i.wg)(),(0,i.iD)("div",ke," Size: "+(0,p.zw)(e.product.size)+" MB ",1)):(0,i.kq)("",!0),"book"===e.product.type?((0,i.wg)(),(0,i.iD)("div",_e," Weight: "+(0,p.zw)(e.product.weight)+" KG ",1)):(0,i.kq)("",!0),"furniture"===e.product.type?((0,i.wg)(),(0,i.iD)("div",be,[(0,i.Uk)(" Dimensions: "),(0,i._)("div",null,(0,p.zw)(e.product.height)+" H x "+(0,p.zw)(e.product.width)+" W x "+(0,p.zw)(e.product.length)+" L ",1)])):(0,i.kq)("",!0)])])}}});const Ve=ye;var Se=Ve,Ue={class:"container"},ze={class:"header"},De=(0,i._)("h1",null,"PRODUCT LIST",-1),Pe={key:0,class:"delete"},We={class:"button-group"},Ce=(0,i._)("div",{class:"line-divider"},null,-1),Ee={class:"product-grid"},He=(0,i._)("div",{class:"line-divider"},null,-1),qe={class:"footer"},Ie=(0,i._)("div",{class:"empty-div"},null,-1),Te=(0,i._)("span",{class:"foottext"},"Scandiweb Test assignment",-1),Ne={class:"slider-container"},je={class:"switch"},Oe=(0,i._)("span",{class:"slider round"},[(0,i._)("span",{class:"moon"},"🌙"),(0,i._)("span",{class:"sun"},"☀")],-1),xe=(0,i.aZ)({__name:"product-list",setup:function(e){var t=this,n=f(),a=n.toggleTheme,o=n.isDarkMode,u=h(),s=u.products,l=u.loadProducts,c=u.deleteProducts,g=u.deleteStatus,m=(0,v.iH)([]);(0,i.bv)((function(){return(0,d.mG)(t,void 0,void 0,(function(){return(0,d.Jh)(this,(function(e){switch(e.label){case 0:return[4,l()];case 1:return e.sent(),m.value=new Array(s.value.length).fill(!1),[2]}}))}))}));var w=function(){return(0,d.mG)(t,void 0,void 0,(function(){var e;return(0,d.Jh)(this,(function(t){switch(t.label){case 0:return e=m.value.map((function(e,t){return e?s.value[t]:null})).filter((function(e){return null!==e})),[4,c(e)];case 1:return t.sent(),[4,l()];case 2:return t.sent(),m.value=new Array(s.value.length).fill(!1),[2]}}))}))},k=(0,i.Fl)((function(){for(var e=[],t=0;t<s.value.length;t+=16)e.push(s.value.slice(t,t+16));return e}));return function(e,t){var n=(0,i.up)("router-link");return(0,i.wg)(),(0,i.iD)("div",Ue,[(0,i._)("div",ze,[De,(0,i.Wm)(r.uT,{name:"fade"},{default:(0,i.w5)((function(){return["idle"!==(0,v.SU)(g)?((0,i.wg)(),(0,i.iD)("p",Pe,(0,p.zw)("deleting"===(0,v.SU)(g)?"Deleting...":"Deleted!"),1)):(0,i.kq)("",!0)]})),_:1}),(0,i._)("div",We,[(0,i.Wm)(n,{to:"/add-product",class:"button"},{default:(0,i.w5)((function(){return[(0,i.Uk)("ADD")]})),_:1}),(0,i._)("button",{onClick:w,class:"button",id:"delete-product-btn"}," MASS DELETE ")])]),Ce,(0,i.Wm)((0,v.SU)(pe.lr),{mouseDrag:!1,transition:1500,"items-to-show":1.3,"wrap-around":!0},{addons:(0,i.w5)((function(){return[(0,i.Wm)((0,v.SU)(pe.W_))]})),default:(0,i.w5)((function(){return[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(k.value,(function(e,t){return(0,i.wg)(),(0,i.j4)((0,v.SU)(pe.Mi),{key:t},{default:(0,i.w5)((function(){return[(0,i._)("div",Ee,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(e,(function(e,n){return(0,i.wg)(),(0,i.j4)(Se,{key:e.sku,product:e,checked:m.value[16*t+n],"onUpdate:checked":function(e){return m.value[16*t+n]=e},class:"card"},null,8,["product","checked","onUpdate:checked"])})),128))])]})),_:2},1024)})),128))]})),_:1}),He,(0,i._)("div",qe,[Ie,Te,(0,i._)("div",Ne,[(0,i._)("label",je,[(0,i.wy)((0,i._)("input",{type:"checkbox","onUpdate:modelValue":t[0]||(t[0]=function(e){return(0,v.dq)(o)?o.value=e:null}),id:"theme-switch",onChange:t[1]||(t[1]=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return(0,v.SU)(a)&&(0,v.SU)(a).apply(void 0,e)})},null,544),[[r.e8,(0,v.SU)(o)]]),Oe])])])])}}});const Le=xe;var Fe=Le,Ae=[{path:"/add-product",name:"add-product",component:de},{path:"/products",name:"products",component:Fe},{path:"/",name:"home",component:Fe}],Ge=(0,c.p7)({history:(0,c.r5)("/"),routes:Ae}),Je=Ge,Me=n(907),Ke=n(154),Ze=(0,v.qj)({products:[]}),Be=(0,i.Fl)((function(){return Ze.products}));function Ye(){return(0,d.mG)(this,void 0,void 0,(function(){var e,t;return(0,d.Jh)(this,(function(n){switch(n.label){case 0:return n.trys.push([0,2,,3]),console.log("albuble no nessa buceta"),[4,Ke.Z.get("/api/products")];case 1:return e=n.sent(),Ze.products=e.data,[3,3];case 2:throw t=n.sent(),new Error("Erro ao carregar produtos: ".concat(t));case 3:return[2]}}))}))}function Re(e){return(0,d.mG)(this,void 0,void 0,(function(){var t;return(0,d.Jh)(this,(function(n){switch(n.label){case 0:return n.trys.push([0,2,,3]),console.log("abluble products delete"),[4,Promise.all(e.map((function(e){return Ke.Z.delete("/api/products/".concat(e))})))];case 1:return n.sent(),[3,3];case 2:throw t=n.sent(),new Error("Erro ao excluir produtos: ".concat(t));case 3:return[2]}}))}))}var $e={state:Ze,products:Be,loadProducts:Ye,deleteProducts:Re},Qe=(0,Me.MT)({modules:{products:$e}}),Xe=n(205);(0,Xe.z)("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}}),(0,r.ri)(l).use(Qe).use(Je).mount("#app")}},t={};function n(r){var i=t[r];if(void 0!==i)return i.exports;var a=t[r]={exports:{}};return e[r](a,a.exports,n),a.exports}n.m=e,function(){var e=[];n.O=function(t,r,i,a){if(!r){var o=1/0;for(c=0;c<e.length;c++){r=e[c][0],i=e[c][1],a=e[c][2];for(var u=!0,s=0;s<r.length;s++)(!1&a||o>=a)&&Object.keys(n.O).every((function(e){return n.O[e](r[s])}))?r.splice(s--,1):(u=!1,a<o&&(o=a));if(u){e.splice(c--,1);var l=i();void 0!==l&&(t=l)}}return t}a=a||0;for(var c=e.length;c>0&&e[c-1][2]>a;c--)e[c]=e[c-1];e[c]=[r,i,a]}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,r){var i,a,o=r[0],u=r[1],s=r[2],l=0;if(o.some((function(t){return 0!==e[t]}))){for(i in u)n.o(u,i)&&(n.m[i]=u[i]);if(s)var c=s(n)}for(t&&t(r);l<o.length;l++)a=o[l],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(c)},r=self["webpackChunkfrontend"]=self["webpackChunkfrontend"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(537)}));r=n.O(r)})();
//# sourceMappingURL=app.ea4aa2a7.js.map