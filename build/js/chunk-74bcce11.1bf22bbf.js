(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-74bcce11"],{"404f":function(e,t,a){"use strict";a.r(t);a("797a"),a("771d"),a("4862"),a("9c71");var r=a("9287"),o=a("cf2e"),n=a("03ae"),c=a("8287"),i=a("7a23"),l={class:"goods"};function s(e,t,a,s,u,d){var p=c["a"],m=n["a"],b=o["a"],f=r["a"];return Object(i["openBlock"])(),Object(i["createElementBlock"])("div",l,[Object(i["createVNode"])(p,{searchFormConfig:e.searchFormConfig,onReSetDataList:e.reSetDataList,onSearchDataList:e.searchDataList},null,8,["searchFormConfig","onReSetDataList","onSearchDataList"]),Object(i["createVNode"])(f,{pageTableConfig:e.pageTableConfig,pageName:"goods",ref:"pageModel"},{img:Object(i["withCtx"])((function(e){return[Object(i["createVNode"])(m,{style:{width:"60px",height:"60px"},src:e.row.imgUrl,"preview-src-list":[e.row.imgUrl],"preview-teleported":""},null,8,["src","preview-src-list"])]})),statu:Object(i["withCtx"])((function(e){return[Object(i["createVNode"])(b,{type:e.row["statu"]?"danger":"primary",size:"small",plain:""},{default:Object(i["withCtx"])((function(){return[Object(i["createTextVNode"])(Object(i["toDisplayString"])(e.row["statu"]?"下架":"上架"),1)]})),_:2},1032,["type"])]})),_:1},8,["pageTableConfig"])])}var u=a("3835"),d=a("67d2"),p=a("4e40"),m={title:"商品列表",propList:[{prop:"id",label:"商品号",minWidth:"80"},{prop:"name",label:"商品名称",minWidth:"100"},{prop:"imgUrl",label:"图片",minWidth:"100",slotName:"img"},{prop:"oldPrice",label:"旧价格",minWidth:"80"},{prop:"newPrice",label:"新价格",minWidth:"80"},{prop:"status",label:"商品状态",minWidth:"80",slotName:"statu"},{prop:"createAt",label:"创建时间",minWidth:"180",slotName:"createAt"},{prop:"updateAt",label:"更新时间",minWidth:"180",slotName:"updateAt"},{prop:"operation",label:"操作",minWidth:"100",slotName:"operation"}]},b={IFormItems:[{name:"id",type:"input",label:"goodsid",placeholder:"请输入商品号"},{name:"name",type:"input",label:"goodsname",placeholder:"请输入商品名"},{name:"status",type:"select",label:"statu",placeholder:"请选择商品状态",options:[{title:"上架",value:1},{title:"下架",value:0}]},{name:"createAt",type:"datePicker",label:"creatDate",otherOptions:{startPlaceholder:"开始时间",endPlaceholder:"结束时间",type:"daterange"}}],labelWidth:"120px"},f=a("560c"),h=Object(i["defineComponent"])({name:"goods",components:{pageTable:d["a"],searchForm:p["a"]},setup:function(){var e=Object(f["a"])(),t=Object(u["a"])(e,3),a=t[0],r=t[1],o=t[2];return{pageTableConfig:m,searchFormConfig:b,pageModel:a,searchDataList:r,reSetDataList:o}}}),g=a("6b0d"),O=a.n(g);const j=O()(h,[["render",s]]);t["default"]=j},4862:function(e,t,a){},"4e40":function(e,t,a){"use strict";var r=a("8287");t["a"]=r["a"]},"560c":function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var r=a("7a23"),o=a("0613");function n(){var e=Object(o["c"])(),t=Object(r["ref"])(),a=function(a){var r;console.log(a),e.commit("systemStore/changeFormValue",a),null===(r=t.value)||void 0===r||r.getSearchDataList(a)},n=function(){var e;null===(e=t.value)||void 0===e||e.getSearchDataList()};return[t,a,n]}},"67d2":function(e,t,a){"use strict";var r=a("9287");t["a"]=r["a"]},8287:function(e,t,a){"use strict";a("797a"),a("5959");var r=a("cf2e"),o=a("54bb"),n=a("7a23"),c={class:"footer"},i=Object(n["createTextVNode"])(" 重置 "),l=Object(n["createTextVNode"])(" 搜索 ");function s(e,t,a,s,u,d){var p=Object(n["resolveComponent"])("refresh-left"),m=o["a"],b=r["a"],f=Object(n["resolveComponent"])("search"),h=Object(n["resolveComponent"])("wb-form");return Object(n["openBlock"])(),Object(n["createElementBlock"])("div",null,[Object(n["createVNode"])(h,Object(n["mergeProps"])(e.searchFormConfig,{modelValue:e.formValue,"onUpdate:modelValue":t[0]||(t[0]=function(t){return e.formValue=t})}),{button:Object(n["withCtx"])((function(){return[Object(n["createElementVNode"])("div",c,[Object(n["createVNode"])(b,{onClick:e.removeFormValue},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(m,{style:{"margin-right":"3px"}},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(p)]})),_:1}),i]})),_:1},8,["onClick"]),Object(n["createVNode"])(b,{type:"primary",onClick:e.searchDataList},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(m,{style:{"margin-righ":"3px"}},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(f)]})),_:1}),l]})),_:1},8,["onClick"])])]})),_:1},16,["modelValue"])])}var u=a("b85c"),d=(a("b0c0"),a("0d08")),p=Object(n["defineComponent"])({props:["searchFormConfig"],emits:["searchDataList","reSetDataList"],components:{WbForm:d["a"]},setup:function(e,t){var a,r,o=t.emit,c=null!==(a=e.searchFormConfig.IFormItems)&&void 0!==a?a:[],i={},l=Object(u["a"])(c);try{for(l.s();!(r=l.n()).done;){var s=r.value;i[s.name]=""}}catch(b){l.e(b)}finally{l.f()}var d=Object(n["ref"])(i),p=function(){for(var e in i)d.value[e]="";o("reSetDataList")},m=function(){console.log(123),o("searchDataList",d.value)};return{formValue:d,removeFormValue:p,searchDataList:m}}}),m=(a("a8fd"),a("6b0d")),b=a.n(m);const f=b()(p,[["render",s],["__scopeId","data-v-376e4452"]]);t["a"]=f},"9c71":function(e,t,a){},a8fd:function(e,t,a){"use strict";a("dadc")},dadc:function(e,t,a){}}]);
//# sourceMappingURL=chunk-74bcce11.1bf22bbf.js.map