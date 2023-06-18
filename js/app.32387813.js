(function(){"use strict";var e={537:function(e,t,n){var i=n(963),r=n(252);function a(e,t){const n=(0,r.up)("router-view");return(0,r.wg)(),(0,r.iD)("div",null,[(0,r.Wm)(n)])}var u=n(744);const o={},s=(0,u.Z)(o,[["render",a]]);var l=s,c=n(201),d=n(582),p=n(577),v=n(262),h=n(154),f=h.Z.create({baseURL:"https://das-scandiweb.000webhostapp.com"});function g(){var e=this,t=(0,v.iH)([]),n=(0,v.iH)(!0),i=(0,v.iH)("idle"),a=(0,v.iH)(null),u=function(){return(0,d.mG)(e,void 0,void 0,(function(){var e,i;return(0,d.Jh)(this,(function(r){switch(r.label){case 0:return r.trys.push([0,2,3,4]),[4,f.get("/api/products")];case 1:return e=r.sent(),t.value=e.data,[3,4];case 2:return i=r.sent(),h.Z.isAxiosError(i)?a.value={message:i.message}:a.value={message:"An error occurred while fetching products"},[3,4];case 3:return n.value=!1,[7];case 4:return[2]}}))}))},o=function(t){return(0,d.mG)(e,void 0,void 0,(function(){var e;return(0,d.Jh)(this,(function(n){switch(n.label){case 0:return n.trys.push([0,2,,3]),[4,f.post("/api/products",t)];case 1:return n.sent(),u(),[3,3];case 2:throw e=n.sent(),new Error("Erro ao adicionar produto: ".concat(e));case 3:return[2]}}))}))};(0,r.bv)(u);var s=function(e){return new Promise((function(t,n){f.delete("/api/products/".concat(e.sku)).then((function(){return t()})).catch((function(e){h.Z.isAxiosError(e)?n({message:e.message}):n({message:"An error occurred while deleting a product"})}))}))},l=function(t){return(0,d.mG)(e,void 0,void 0,(function(){var e,n,r,o;return(0,d.Jh)(this,(function(l){switch(l.label){case 0:i.value="deleting",e=0,n=t,l.label=1;case 1:if(!(e<n.length))return[3,6];r=n[e],l.label=2;case 2:return l.trys.push([2,4,,5]),[4,s(r)];case 3:return l.sent(),[3,5];case 4:return o=l.sent(),a.value=o,[3,5];case 5:return e++,[3,1];case 6:return[4,u()];case 7:return l.sent(),i.value="deleted",setTimeout((function(){i.value="idle"}),1e3),[2]}}))}))};return{products:t,isLoading:n,deleteStatus:i,error:a,loadProducts:u,addProduct:o,deleteProducts:l}}function m(){var e=(0,v.iH)(localStorage.getItem("theme")||"light"),t=(0,v.iH)("dark"===e.value);(0,r.m0)((function(){document.documentElement.className=e.value,localStorage.setItem("theme",e.value),t.value="dark"===e.value}));var n=function(){e.value="light"===e.value?"dark":"light"};return{theme:e,toggleTheme:n,isDarkMode:t}}var w=["onSubmit"],_=(0,r._)("h1",null,"PRODUCT ADD",-1),k=(0,r._)("button",{type:"submit",class:"button"},"Save",-1),b=(0,r._)("div",{class:"line-divider"},null,-1),y={class:"input-group"},V=(0,r._)("label",{for:"sku"},"SKU:",-1),S={class:"description"},U={key:0,class:"error-message"},z={class:"input-group"},D=(0,r._)("label",{for:"name"},"Name:",-1),P={class:"description"},W={key:0,class:"error-message"},C={class:"input-group"},H=(0,r._)("label",{for:"price"},"Price ($):",-1),q={class:"description"},I={key:0,class:"error-message"},T={class:"select-type"},x=(0,r._)("label",{for:"productType"},"Type:",-1),E=(0,r._)("option",{value:"dvd"},"DVD",-1),j=(0,r._)("option",{value:"book"},"Book",-1),L=(0,r._)("option",{value:"furniture"},"Furniture",-1),N=[E,j,L],O={key:0},A={class:"input-group"},F=(0,r._)("label",{for:"size"},"Size (mb):",-1),G={class:"description"},M={key:1},Z={class:"input-group"},J=(0,r._)("label",{for:"weight"},"Weight (kg):",-1),K={class:"description"},B={key:2},R={class:"input-group"},Y=(0,r._)("label",{for:"height"},"Height (kg):",-1),$={class:"description"},Q={class:"input-group"},X=(0,r._)("label",{for:"width"},"Width (kg):",-1),ee={class:"description"},te={class:"input-group"},ne=(0,r._)("label",{for:"length"},"Length (kg):",-1),ie={class:"description"},re=(0,r._)("div",{class:"line-divider"},null,-1),ae={class:"footer"},ue=(0,r._)("div",{class:"empty-div"},null,-1),oe=(0,r._)("span",{class:"foottext"},"Scandiweb Test assignment",-1),se={class:"slider-container"},le={class:"switch"},ce=(0,r._)("span",{class:"slider round"},[(0,r._)("span",{class:"moon"},"🌙"),(0,r._)("span",{class:"sun"},"☀")],-1),de=(0,r.aZ)({__name:"add-product",setup:function(e){var t=g().addProduct,n=m(),a=n.toggleTheme,u=n.isDarkMode,o=(0,c.tv)(),s=(0,v.qj)({value:"dvd"}),l=(0,v.qj)({sku:"",name:"",price:0,type:"dvd",size:0}),h=(0,v.qj)({sku:"",name:"",price:0,type:"book",weight:0}),f=(0,v.qj)({sku:"",name:"",price:0,type:"furniture",height:0,width:0,length:0}),E=(0,r.Fl)((function(){switch(s.value){case"dvd":return l;case"book":return h;case"furniture":return f;default:throw new Error("Unsupported product type: ".concat(s.value))}})),j=(0,v.qj)({isValidSku:!0,isValidName:!0,isValidPrice:!0,isValidSize:!0,isValidWeight:!0,isValidHeight:!0,isValidWidth:!0,isValidLength:!0,isValidForm:!0});function L(){return(0,d.mG)(this,void 0,void 0,(function(){var e;return(0,d.Jh)(this,(function(n){switch(n.label){case 0:if(j.isValidForm=de(),!j.isValidForm)return[3,4];n.label=1;case 1:return n.trys.push([1,3,,4]),console.log(E.value),[4,t(E.value)];case 2:return n.sent(),o.push("/products"),[3,4];case 3:return e=n.sent(),console.error("Erro ao adicionar produto:",e),[3,4];case 4:return[2]}}))}))}function de(){switch(j.isValidSku=""!==E.value.sku,j.isValidName=""!==E.value.name,j.isValidPrice=E.value.price>0,E.value.type){case"dvd":j.isValidSize=E.value.size>0&&E.value.size<=45e3;break;case"book":j.isValidWeight=E.value.weight>0&&E.value.weight<=10;break;case"furniture":j.isValidHeight=E.value.height>0&&E.value.height<=5,j.isValidWidth=E.value.width>0&&E.value.width<=5,j.isValidLength=E.value.length>0&&E.value.length<=5;break}return j.isValidSku&&j.isValidName&&j.isValidPrice&&j.isValidSize&&j.isValidWeight&&j.isValidHeight&&j.isValidWidth&&j.isValidLength}var pe=function(){o.push("/products")};return function(e,t){return(0,r.wg)(),(0,r.iD)("form",{id:"product_form",class:"add-container dynamic-form",onSubmit:(0,i.iM)(L,["prevent"])},[(0,r._)("div",{class:"header"},[_,(0,r._)("div",{class:"button-group"},[k,(0,r._)("button",{type:"button",class:"button",onClick:pe},"Cancel")])]),b,(0,r._)("div",y,[V,(0,r.wy)((0,r._)("input",{type:"text",id:"sku","onUpdate:modelValue":t[0]||(t[0]=function(e){return E.value.sku=e}),placeholder:"SKU",onInput:t[1]||(t[1]=function(e){return j.isValidSku=!0}),class:(0,p.C_)({error:!j.isValidSku})},null,34),[[i.nr,E.value.sku]]),(0,r._)("div",S,[(0,r.Uk)(" > "),j.isValidSku?(0,r.kq)("",!0):((0,r.wg)(),(0,r.iD)("span",U,"Invalid SKU."))])]),(0,r._)("div",z,[D,(0,r.wy)((0,r._)("input",{type:"text",id:"name","onUpdate:modelValue":t[2]||(t[2]=function(e){return E.value.name=e}),placeholder:"Name",onInput:t[3]||(t[3]=function(e){return j.isValidName=!0}),class:(0,p.C_)({error:!j.isValidName})},null,34),[[i.nr,E.value.name]]),(0,r._)("div",P,[(0,r.Uk)(" > "),j.isValidName?(0,r.kq)("",!0):((0,r.wg)(),(0,r.iD)("span",W,"Invalid name."))])]),(0,r._)("div",C,[H,(0,r.wy)((0,r._)("input",{"onUpdate:modelValue":t[4]||(t[4]=function(e){return E.value.price=e}),id:"price",placeholder:"Price",onInput:t[5]||(t[5]=function(e){return j.isValidPrice=!0}),class:(0,p.C_)({error:!j.isValidPrice})},null,34),[[i.nr,E.value.price,void 0,{number:!0}]]),(0,r._)("div",q,[(0,r.Uk)(" > "),j.isValidName?(0,r.kq)("",!0):((0,r.wg)(),(0,r.iD)("span",I,"Invalid price."))])]),(0,r._)("div",T,[x,(0,r.wy)((0,r._)("select",{"onUpdate:modelValue":t[6]||(t[6]=function(e){return E.value.type=e}),id:"productType"},N,512),[[i.bM,E.value.type]])]),"dvd"===E.value.type?((0,r.wg)(),(0,r.iD)("div",O,[(0,r._)("div",A,[F,(0,r.wy)((0,r._)("input",{"onUpdate:modelValue":t[7]||(t[7]=function(e){return E.value.size=e}),id:"size",placeholder:"Size",onInput:t[8]||(t[8]=function(e){return j.isValidSize=!0}),class:(0,p.C_)({error:!j.isValidSize})},null,34),[[i.nr,E.value.size,void 0,{number:!0}]])]),(0,r._)("div",G,[(0,r.Uk)(" > "),(0,r._)("span",{class:(0,p.C_)({"error-message":!j.isValidSize,blink:!E.value.size})},(0,p.zw)(j.isValidSize?"Please, provide size in mb.":"Invalid size."),3)])])):(0,r.kq)("",!0),"book"===E.value.type?((0,r.wg)(),(0,r.iD)("div",M,[(0,r._)("div",Z,[J,(0,r.wy)((0,r._)("input",{"onUpdate:modelValue":t[9]||(t[9]=function(e){return E.value.weight=e}),id:"weight",placeholder:"Weight",onInput:t[10]||(t[10]=function(e){return j.isValidWeight=!0}),class:(0,p.C_)({error:!j.isValidWeight})},null,34),[[i.nr,E.value.weight,void 0,{number:!0}]])]),(0,r._)("div",K,[(0,r.Uk)(" > "),(0,r._)("span",{class:(0,p.C_)({"error-message":!j.isValidWeight,blink:!E.value.weight})},(0,p.zw)(j.isValidWeight?"Please, provide weight in kg.":"Invalid weight."),3)])])):(0,r.kq)("",!0),"furniture"===E.value.type?((0,r.wg)(),(0,r.iD)("div",B,[(0,r._)("div",R,[Y,(0,r.wy)((0,r._)("input",{"onUpdate:modelValue":t[11]||(t[11]=function(e){return E.value.height=e}),id:"height",placeholder:"Height",onInput:t[12]||(t[12]=function(e){return j.isValidHeight=!0}),class:(0,p.C_)({error:!j.isValidHeight})},null,34),[[i.nr,E.value.height,void 0,{number:!0}]])]),(0,r._)("div",$,[(0,r.Uk)(" > "),(0,r._)("span",{class:(0,p.C_)({"error-message":!j.isValidHeight,blink:!E.value.height})},(0,p.zw)(j.isValidHeight?"Please, provide height in meters.":"Invalid height."),3)]),(0,r._)("div",Q,[X,(0,r.wy)((0,r._)("input",{"onUpdate:modelValue":t[13]||(t[13]=function(e){return E.value.width=e}),id:"width",placeholder:"Width",onInput:t[14]||(t[14]=function(e){return j.isValidWidth=!0}),class:(0,p.C_)({error:!j.isValidWidth})},null,34),[[i.nr,E.value.width,void 0,{number:!0}]])]),(0,r._)("div",ee,[(0,r.Uk)(" > "),(0,r._)("span",{class:(0,p.C_)({"error-message":!j.isValidWidth,blink:!E.value.width})},(0,p.zw)(j.isValidWidth?"Please, provide width in meters.":"Invalid width."),3)]),(0,r._)("div",te,[ne,(0,r.wy)((0,r._)("input",{"onUpdate:modelValue":t[15]||(t[15]=function(e){return E.value.length=e}),id:"length",placeholder:"Length",onInput:t[16]||(t[16]=function(e){return j.isValidLength=!0}),class:(0,p.C_)({error:!j.isValidLength})},null,34),[[i.nr,E.value.length,void 0,{number:!0}]])]),(0,r._)("div",ie,[(0,r.Uk)(" > "),(0,r._)("span",{class:(0,p.C_)({"error-message":!j.isValidLength,blink:!E.value.length})},(0,p.zw)(j.isValidLength?"Please, provide length in meters.":"Invalid length."),3)])])):(0,r.kq)("",!0),re,(0,r._)("div",ae,[ue,oe,(0,r._)("div",se,[(0,r._)("label",le,[(0,r.wy)((0,r._)("input",{type:"checkbox","onUpdate:modelValue":t[17]||(t[17]=function(e){return(0,v.dq)(u)?u.value=e:null}),id:"theme-switch",onChange:t[18]||(t[18]=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return(0,v.SU)(a)&&(0,v.SU)(a).apply(void 0,e)})},null,544),[[i.e8,(0,v.SU)(u)]]),ce])])])],40,w)}}});const pe=de;var ve=pe,he=n(410),fe={class:"product-card card"},ge={class:"card-content"},me={class:"card-title"},we={class:"card-attribute"},_e={class:"card-price"},ke={class:"card-attribute"},be={key:0,class:"card-attribute"},ye={key:1,class:"card-attribute"},Ve={key:2,class:"card-attribute"},Se=(0,r.aZ)({__name:"product-card",props:{product:{}},emits:["update:checked"],setup:function(e,t){var n=t.emit,i=(0,v.iH)(!1);(0,r.YP)(i,(function(e){n("update:checked",e)}));var a=function(){i.value=!i.value},u={dvd:"DVD",book:"Book",furniture:"Furniture"};return function(e,t){return(0,r.wg)(),(0,r.iD)("div",fe,[(0,r._)("div",{class:(0,p.C_)(["delete-checkbox",{checked:i.value}]),onClick:a},null,2),(0,r._)("div",ge,[(0,r._)("div",me,(0,p.zw)(e.product.name),1),(0,r._)("div",we,(0,p.zw)(e.product.sku),1),(0,r._)("div",_e,"US$ "+(0,p.zw)(e.product.price),1),(0,r._)("div",ke,(0,p.zw)(u[e.product.type]),1),"dvd"===e.product.type?((0,r.wg)(),(0,r.iD)("div",be," Size: "+(0,p.zw)(e.product.size)+" MB ",1)):(0,r.kq)("",!0),"book"===e.product.type?((0,r.wg)(),(0,r.iD)("div",ye," Weight: "+(0,p.zw)(e.product.weight)+" KG ",1)):(0,r.kq)("",!0),"furniture"===e.product.type?((0,r.wg)(),(0,r.iD)("div",Ve,[(0,r.Uk)(" Dimensions: "),(0,r._)("div",null,(0,p.zw)(e.product.height)+" H x "+(0,p.zw)(e.product.width)+" W x "+(0,p.zw)(e.product.length)+" L ",1)])):(0,r.kq)("",!0)])])}}});const Ue=Se;var ze=Ue,De={class:"container"},Pe={class:"header"},We=(0,r._)("h1",null,"PRODUCT LIST",-1),Ce={key:0,class:"delete"},He={class:"button-group"},qe=(0,r._)("div",{class:"line-divider"},null,-1),Ie={class:"product-grid"},Te=(0,r._)("div",{class:"line-divider"},null,-1),xe={class:"footer"},Ee=(0,r._)("div",{class:"empty-div"},null,-1),je=(0,r._)("span",{class:"foottext"},"Scandiweb Test assignment",-1),Le={class:"slider-container"},Ne={class:"switch"},Oe=(0,r._)("span",{class:"slider round"},[(0,r._)("span",{class:"moon"},"🌙"),(0,r._)("span",{class:"sun"},"☀")],-1),Ae=(0,r.aZ)({__name:"product-list",setup:function(e){var t=this,n=m(),a=n.toggleTheme,u=n.isDarkMode,o=g(),s=o.products,l=o.loadProducts,c=o.deleteProducts,h=o.deleteStatus,f=(0,v.iH)([]);(0,r.bv)((function(){return(0,d.mG)(t,void 0,void 0,(function(){return(0,d.Jh)(this,(function(e){switch(e.label){case 0:return[4,l()];case 1:return e.sent(),f.value=new Array(s.value.length).fill(!1),[2]}}))}))}));var w=function(){return(0,d.mG)(t,void 0,void 0,(function(){var e;return(0,d.Jh)(this,(function(t){switch(t.label){case 0:return e=f.value.map((function(e,t){return e?s.value[t]:null})).filter((function(e){return null!==e})),[4,c(e)];case 1:return t.sent(),[4,l()];case 2:return t.sent(),f.value=new Array(s.value.length).fill(!1),[2]}}))}))},_=(0,r.Fl)((function(){for(var e=[],t=0;t<s.value.length;t+=16)e.push(s.value.slice(t,t+16));return e}));return function(e,t){var n=(0,r.up)("router-link");return(0,r.wg)(),(0,r.iD)("div",De,[(0,r._)("div",Pe,[We,(0,r.Wm)(i.uT,{name:"fade"},{default:(0,r.w5)((function(){return["idle"!==(0,v.SU)(h)?((0,r.wg)(),(0,r.iD)("p",Ce,(0,p.zw)("deleting"===(0,v.SU)(h)?"Deleting...":"Deleted!"),1)):(0,r.kq)("",!0)]})),_:1}),(0,r._)("div",He,[(0,r.Wm)(n,{to:"/add-product",class:"button"},{default:(0,r.w5)((function(){return[(0,r.Uk)("ADD")]})),_:1}),(0,r._)("button",{onClick:w,class:"button",id:"delete-product-btn"}," MASS DELETE ")])]),qe,(0,r.Wm)((0,v.SU)(he.lr),{mouseDrag:!1,transition:1500,"items-to-show":1.3,"wrap-around":!0},{addons:(0,r.w5)((function(){return[(0,r.Wm)((0,v.SU)(he.W_))]})),default:(0,r.w5)((function(){return[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(_.value,(function(e,t){return(0,r.wg)(),(0,r.j4)((0,v.SU)(he.Mi),{key:t},{default:(0,r.w5)((function(){return[(0,r._)("div",Ie,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(e,(function(e,n){return(0,r.wg)(),(0,r.j4)(ze,{key:e.sku,product:e,checked:f.value[16*t+n],"onUpdate:checked":function(e){return f.value[16*t+n]=e},class:"card"},null,8,["product","checked","onUpdate:checked"])})),128))])]})),_:2},1024)})),128))]})),_:1}),Te,(0,r._)("div",xe,[Ee,je,(0,r._)("div",Le,[(0,r._)("label",Ne,[(0,r.wy)((0,r._)("input",{type:"checkbox","onUpdate:modelValue":t[0]||(t[0]=function(e){return(0,v.dq)(u)?u.value=e:null}),id:"theme-switch",onChange:t[1]||(t[1]=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return(0,v.SU)(a)&&(0,v.SU)(a).apply(void 0,e)})},null,544),[[i.e8,(0,v.SU)(u)]]),Oe])])])])}}});const Fe=Ae;var Ge=Fe,Me=[{path:"/add-product",name:"add-product",component:ve},{path:"/products",name:"products",component:Ge},{path:"/",name:"home",component:Ge}],Ze=(0,c.p7)({history:(0,c.r5)("/"),routes:Me}),Je=Ze,Ke=n(907),Be=(0,v.qj)({products:[]}),Re=(0,r.Fl)((function(){return Be.products}));function Ye(){return(0,d.mG)(this,void 0,void 0,(function(){var e,t;return(0,d.Jh)(this,(function(n){switch(n.label){case 0:return n.trys.push([0,2,,3]),console.log("albuble no nessa buceta"),[4,h.Z.get("/api/products")];case 1:return e=n.sent(),Be.products=e.data,[3,3];case 2:throw t=n.sent(),new Error("Erro ao carregar produtos: ".concat(t));case 3:return[2]}}))}))}function $e(e){return(0,d.mG)(this,void 0,void 0,(function(){var t;return(0,d.Jh)(this,(function(n){switch(n.label){case 0:return n.trys.push([0,2,,3]),console.log("abluble products delete"),[4,Promise.all(e.map((function(e){return h.Z.delete("/api/products/".concat(e))})))];case 1:return n.sent(),[3,3];case 2:throw t=n.sent(),new Error("Erro ao excluir produtos: ".concat(t));case 3:return[2]}}))}))}var Qe={state:Be,products:Re,loadProducts:Ye,deleteProducts:$e},Xe=(0,Ke.MT)({modules:{products:Qe}}),et=n(205);(0,et.z)("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}}),(0,i.ri)(l).use(Xe).use(Je).mount("#app")}},t={};function n(i){var r=t[i];if(void 0!==r)return r.exports;var a=t[i]={exports:{}};return e[i](a,a.exports,n),a.exports}n.m=e,function(){var e=[];n.O=function(t,i,r,a){if(!i){var u=1/0;for(c=0;c<e.length;c++){i=e[c][0],r=e[c][1],a=e[c][2];for(var o=!0,s=0;s<i.length;s++)(!1&a||u>=a)&&Object.keys(n.O).every((function(e){return n.O[e](i[s])}))?i.splice(s--,1):(o=!1,a<u&&(u=a));if(o){e.splice(c--,1);var l=r();void 0!==l&&(t=l)}}return t}a=a||0;for(var c=e.length;c>0&&e[c-1][2]>a;c--)e[c]=e[c-1];e[c]=[i,r,a]}}(),function(){n.d=function(e,t){for(var i in t)n.o(t,i)&&!n.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,i){var r,a,u=i[0],o=i[1],s=i[2],l=0;if(u.some((function(t){return 0!==e[t]}))){for(r in o)n.o(o,r)&&(n.m[r]=o[r]);if(s)var c=s(n)}for(t&&t(i);l<u.length;l++)a=u[l],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(c)},i=self["webpackChunkfrontend"]=self["webpackChunkfrontend"]||[];i.forEach(t.bind(null,0)),i.push=t.bind(null,i.push.bind(i))}();var i=n.O(void 0,[998],(function(){return n(537)}));i=n.O(i)})();
//# sourceMappingURL=app.32387813.js.map