(function(e,z){typeof exports=="object"&&typeof module<"u"?module.exports=z(require("vue")):typeof define=="function"&&define.amd?define(["vue"],z):(e=typeof globalThis<"u"?globalThis:e||self,e["draggable-vue-uploader"]=z(e.Vue))})(this,function(e){"use strict";const z=(h,o,n,a,l)=>{const{action:g,headers:t}=h,c=new XMLHttpRequest;c.open("POST",g,!0),c.upload.onprogress=u=>{if(u.lengthComputable){const f=u.loaded/u.total*100;n(Math.round(f))}},c.onload=function(){c.status===200?a(c.response):l(c.statusText)},c.onerror=function(){l(c.statusText)};const _=new FormData;_.append("file",o);for(const u of Object.keys(t))c.setRequestHeader(u,t[u]);c.send(_)},te="",M={class:"draggable-upload"},C={key:0,class:"draggable-upload-container"},S=[e.createElementVNode("div",{class:"draggable-upload-icon"},[e.createElementVNode("svg",{t:"1685080744217",class:"icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"3426","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"30",height:"30"},[e.createElementVNode("path",{d:"M576 631.466667V725.333333h170.666667c59.733333-8.533333 106.666667-64 106.666666-128 0-72.533333-55.466667-128-128-128-17.066667 0-29.866667 4.266667-42.666666 8.533334V469.333333c0-93.866667-76.8-170.666667-170.666667-170.666666s-170.666667 76.8-170.666667 170.666666c0 17.066667 4.266667 29.866667 4.266667 46.933334-8.533333-4.266667-17.066667-4.266667-25.6-4.266667C260.266667 512 213.333333 558.933333 213.333333 618.666667S260.266667 725.333333 320 725.333333h170.666667v-93.866666l-46.933334 46.933333L384 618.666667l149.333333-149.333334 149.333334 149.333334-59.733334 59.733333-46.933333-46.933333z m0 93.866666v85.333334h-85.333333v-85.333334h-42.666667v85.333334h-128C213.333333 810.666667 128 725.333333 128 618.666667c0-85.333333 55.466667-157.866667 128-183.466667C273.066667 311.466667 379.733333 213.333333 512 213.333333c110.933333 0 209.066667 72.533333 243.2 170.666667 102.4 12.8 183.466667 102.4 183.466667 213.333333s-85.333333 200.533333-192 213.333334h-128v-85.333334h-42.666667z",fill:"#ccc","p-id":"3427"})])],-1)],$={key:1,class:"draggable-upload-picture"},L=["src"],D={class:"draggable-upload-picture--mask"},U={class:"draggable-upload-picture--mask-icon"},I=[e.createElementVNode("path",{d:"M512 832c-156.448 0-296.021333-98.730667-418.410667-291.605333a52.938667 52.938667 0 0 1 0-56.789334C215.978667 290.730667 355.552 192 512 192c156.448 0 296.021333 98.730667 418.410667 291.605333a52.938667 52.938667 0 0 1 0 56.789334C808.021333 733.269333 668.448 832 512 832z m0-576c-129.514667 0-249.461333 83.850667-360.117333 256C262.538667 684.149333 382.485333 768 512 768c129.514667 0 249.461333-83.850667 360.117333-256C761.461333 339.850667 641.514667 256 512 256z m0 405.333333c-83.210667 0-150.666667-66.858667-150.666667-149.333333S428.789333 362.666667 512 362.666667s150.666667 66.858667 150.666667 149.333333S595.210667 661.333333 512 661.333333z m0-64c47.552 0 86.101333-38.208 86.101333-85.333333S559.552 426.666667 512 426.666667c-47.552 0-86.101333 38.208-86.101333 85.333333s38.549333 85.333333 86.101333 85.333333z",fill:"#ffffff","p-id":"2410"},null,-1)],O=[e.createElementVNode("path",{d:"M110.325 231.601h83.275l38.767 682.942c0.779 14.201 12.565 25.316 26.793 25.316h508.28c14.229 0 26.015-11.141 26.793-25.342l38.148-682.917h83.331c14.846 0 26.848-12.027 26.848-26.845 0-14.82-12.002-26.847-26.848-26.847h-210.236l-13.109-70.256c0-14.82-12-26.848-26.849-26.848h-305.029c-14.846 0-26.846 12.028-26.846 26.848l-13.109 70.256h-210.184c-14.847 0-26.847 12.027-26.847 26.847 0 14.819 11.974 26.846 26.821 26.846zM387.336 134.5h251.338l13.108 43.411h-277.554l13.109-43.411zM778.608 231.601l-36.563 654.593h-457.516l-37.156-654.592h531.234zM380.075 835.857c0.538 0 1.020 0 1.557-0.026 14.819-0.832 26.121-13.531 25.263-28.325l-28.242-497.594c-0.833-14.819-13.88-25.961-28.324-25.289-14.818 0.833-26.122 13.53-25.263 28.323l28.243 497.594c0.805 14.283 12.645 25.317 26.766 25.317zM643.436 835.832c0.539 0.026 1.022 0.026 1.557 0.026 14.121 0 25.961-11.033 26.767-25.317l28.242-497.594c0.833-14.792-10.469-27.489-25.262-28.323-14.579-0.618-27.465 10.47-28.324 25.289l-28.242 497.594c-0.833 14.794 10.47 27.492 25.261 28.325zM513.019 835.857c14.847 0 26.847-12.026 26.847-26.846v-497.595c0-14.818-12-26.847-26.847-26.847-14.846 0-26.846 12.029-26.846 26.847v497.595c0 14.82 12 26.846 26.846 26.846z",fill:"#fff","p-id":"4492"},null,-1)],F={key:2,class:"progress"},R={class:"progress-line"},y={__name:"upload",props:{action:String,name:String,data:Object,beforeUpload:Function,headers:{type:Object,default:{},required:!1},file:{type:Object,default:null,required:!1},url:{type:String,default:"",required:!1}},emits:["change","delete","progress","success","error","viewer"],setup(h,{emit:o}){const n=h,a=e.ref(n.url),l=e.ref(n.file),g=e.ref(null),t=e.ref({loading:!1,percent:""}),c=e.computed(()=>a.value!==""&&typeof a.value<"u"||l.value),_=r=>{const x=r.target.files[0],B=new FileReader;g.value="",B.onload=async()=>{let b=!0;a.value=B.result,l.value=x,l.value.url=a.value,o("change",l.value),n.beforeUpload&&(b=await n.beforeUpload(x)),b&&(t.value.percent="",t.value.loading=!0,z({...n},x,u,f,i))},x&&B.readAsDataURL(x)},u=r=>{t.value.percent=`${r}%`,o("progress",l.value,r)},f=r=>{t.value.loading=!1,o("success",l.value,r)},i=r=>{t.value.loading=!1,l.value=null,a.value="",o("error",null,r)},v=()=>{o("delete",{file:l,url:a.value}),l.value=null,a.value=""},p=()=>{o("viewer",a.value)};return(r,E)=>(e.openBlock(),e.createElementBlock("div",M,[c.value?e.createCommentVNode("",!0):(e.openBlock(),e.createElementBlock("div",C,S)),e.createElementVNode("input",{type:"file",class:"draggable-upload-input",ref:"fileInput",onChange:_},null,544),c.value?(e.openBlock(),e.createElementBlock("div",$,[e.createElementVNode("img",{src:a.value},null,8,L),e.createElementVNode("div",D,[e.createElementVNode("div",U,[(e.openBlock(),e.createElementBlock("svg",{t:"1685080359077",class:"icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"2409","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"20",height:"20",onClick:p},I)),(e.openBlock(),e.createElementBlock("svg",{t:"1685081236389",class:"icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"4491","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"20",height:"20",onClick:v},O))])])])):e.createCommentVNode("",!0),t.value.loading?(e.openBlock(),e.createElementBlock("div",F,[e.createElementVNode("div",R,[e.createElementVNode("div",{class:"progress-line-inner",style:e.normalizeStyle({width:t.value.percent})},null,4)])])):e.createCommentVNode("",!0)]))}},se="",T=["draggable","onDragstart","onDragover"],j={__name:"UploadList",props:{action:String,name:String,data:Object,beforeUpload:Function,fileList:Array,headers:{type:Object,default:{},required:!1},maximum:{type:Number,default:10,required:!1}},emits:["change","delete","progress","success","error"],setup(h,{emit:o}){const n=h,a=e.ref(null),l=e.ref(0),g=e.ref(-1),t=e.ref(n.fileList);let c=0,_=200;e.onMounted(()=>{u()});const u=()=>{t.value.length<n.maximum&&t.value.push({file:null,url:"",id:new Date().getTime()})},f=e.computed(()=>{let d=[];return t.value.forEach(s=>{(s.file!==null||s.url!=="")&&d.push(s)}),d}),i=(d,s)=>{l.value=s,a.value=t.value[s]},v=(d,s)=>{const m=new Date().getTime();d.preventDefault(),g.value=s,!(g.value===-1||l.value===s||g.value===t.value.length-1||m-c<=_)&&(c=m,t.value.splice(l.value,1),t.value.splice(s,0,a.value),l.value=s,a.value=t.value[s],o("change",f.value))},p=(d,s)=>{o("progress",d,s)},r=(d,s,m)=>{t.value[m].file=d,t.value[m].url=d.url,o("success",d,s)},E=(d,s,m)=>{t.value.splice(m,1),o("error",d,s)},x=(d,s)=>{t.value[s].file=d,u(),o("change",f.value)},B=(d,s)=>{t.value.splice(s,1),(t.value[t.value.length-1].file!==null||t.value[t.value.length-1].url!=="")&&u(),o("delete",d,s)},b=(d,s)=>{o("viewer",d,s,f.value)};return(d,s)=>(e.openBlock(),e.createBlock(e.TransitionGroup,{class:"draggable-upload-list",name:"flip-list",tag:"ul"},{default:e.withCtx(()=>[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(t.value,(m,k)=>(e.openBlock(),e.createElementBlock("li",{class:"draggable-upload-list--item",key:m.id,draggable:k<t.value.length-1,onDragstart:w=>i(w,k),onDragover:w=>v(w,k)},[e.createVNode(y,{action:n.action,headers:n.headers,beforeUpload:n.beforeUpload,file:m.file,url:m.url,onChange:w=>x(w,k),onDelete:w=>B(w,k),onSuccess:(w,N)=>r(w,N,k),onError:(w,N)=>E(w,N,k),onProgress:p,onViewer:w=>b(w,k)},null,8,["action","headers","beforeUpload","file","url","onChange","onDelete","onSuccess","onError","onViewer"])],40,T))),128))]),_:1}))}},ae="",q=(h,o)=>{const n=h.__vccOpts||h;for(const[a,l]of o)n[a]=l;return n},V=h=>(e.pushScopeId("data-v-92b6ecc4"),h=h(),e.popScopeId(),h),P={class:"viewer"},A=[V(()=>e.createElementVNode("svg",{t:"1685417633295",class:"icon viewer-close-icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"2365","xmlns:xlink":"http://www.w3.org/1999/xlink"},[e.createElementVNode("path",{d:"M504.224 470.288l207.84-207.84a16 16 0 0 1 22.608 0l11.328 11.328a16 16 0 0 1 0 22.624l-207.84 207.824 207.84 207.84a16 16 0 0 1 0 22.608l-11.328 11.328a16 16 0 0 1-22.624 0l-207.824-207.84-207.84 207.84a16 16 0 0 1-22.608 0l-11.328-11.328a16 16 0 0 1 0-22.624l207.84-207.824-207.84-207.84a16 16 0 0 1 0-22.608l11.328-11.328a16 16 0 0 1 22.624 0l207.824 207.84z",fill:"#ffffff","p-id":"2366"})],-1))],H={class:"viewer-container"},G=["src"],X={class:"viewer-tools"},J=V(()=>e.createElementVNode("svg",{t:"1685426295481",class:"viewer-tools-icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"3367","xmlns:xlink":"http://www.w3.org/1999/xlink"},[e.createElementVNode("path",{d:"M0 0h256v51.2H0z",fill:"#000","p-id":"3368"}),e.createElementVNode("path",{d:"M51.2 0v256H0V0zM1024 0v256h-51.2V0z",fill:"#000","p-id":"3369"}),e.createElementVNode("path",{d:"M1024 51.2h-256V0h256zM1024 1024h-256v-51.2h256z",fill:"#000","p-id":"3370"}),e.createElementVNode("path",{d:"M972.8 1024v-256h51.2v256zM0 1024v-256h51.2v256z",fill:"#000","p-id":"3371"}),e.createElementVNode("path",{d:"M0 972.8h256v51.2H0z",fill:"#000","p-id":"3372"})],-1)),K=["fill"],Q=["fill"],W=[V(()=>e.createElementVNode("path",{d:"M288 352v192h128v64h-128v64h192v-320h-192z m128 128h-64v-64h64v64zM544 352v320h192v-320h-192z m128 256h-64v-192h64v192zM957.44 531.84h1.344v-1.92l-1.344 1.92z","p-id":"2456"},null,-1)),V(()=>e.createElementVNode("path",{d:"M46.72 474.88l35.84 55.04 1.28 1.92 35.84 55.04 60.16-119.04-32 1.92C168.96 277.76 331.52 128 529.28 128c211.904 0 384 172.16 384 384s-172.096 384-384 384c-140.16 0-263.04-75.52-329.6-188.16h-1.92l-0.64 0.64-53.12 31.36A446.592 446.592 0 0 0 529.28 960c247.744 0 448-200.32 448-448s-200.256-448-448-448C294.4 64 102.4 243.84 83.2 472.96l-36.48 1.92z","p-id":"2457"},null,-1))],Y=[V(()=>e.createElementVNode("path",{d:"M288 352v192h128v64h-128v64h192v-320h-192z m128 128h-64v-64h64v64zM544 352v320h192v-320h-192z m128 256h-64v-192h64v192zM957.44 531.84h1.344v-1.92l-1.344 1.92z","p-id":"5097"},null,-1)),V(()=>e.createElementVNode("path",{d:"M994.56 474.88l-35.84 55.04-1.28 1.92-35.84 55.04-60.16-119.04 32 1.92C872.32 277.76 709.76 128 512 128 300.16 128 128 300.16 128 512s172.16 384 384 384c140.16 0 263.04-75.52 329.6-188.16h1.856l0.704 0.704 53.056 31.296A446.4 446.4 0 0 1 512 960c-247.68 0-448-200.32-448-448s200.32-448 448-448c234.88 0 426.88 179.84 446.08 408.96l36.48 1.92z","p-id":"5098"},null,-1))],Z=q({__name:"Viewer",props:{imgURL:String,index:Number,list:{type:Array,default:[]},showImgViewer:Boolean},emits:["close"],setup(h,{emit:o}){const n=h,a=e.ref(n.index),l=e.ref(0),g=e.computed(()=>n.list.length>1),t=e.ref(n.imgURL),c=f=>{if(!g.value)return;l.value=0;let i=a.value+f;i>n.list.length-1&&(i=0),i<0&&(i=n.list.length-1),t.value=n.list[i].url,a.value=i},_=f=>{l.value=l.value+f,(l.value===-360||l.value===360)&&(l.value=0)},u=()=>{o("close")};return(f,i)=>(e.openBlock(),e.createElementBlock("div",P,[e.createElementVNode("div",{class:"viewer-close",onClick:u},A),e.createElementVNode("div",H,[e.createElementVNode("img",{class:"viewer-container-img",style:e.normalizeStyle({transform:"rotate("+l.value+"deg)"}),src:t.value},null,12,G)]),e.createElementVNode("div",X,[J,(e.openBlock(),e.createElementBlock("svg",{t:"1685428058884",class:"viewer-tools-icon",style:e.normalizeStyle(g.value?"cursor: pointer;":"cursor: not-allowed"),viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"3191","xmlns:xlink":"http://www.w3.org/1999/xlink",onClick:i[0]||(i[0]=v=>c(-1))},[e.createElementVNode("path",{d:"M768 278.624l-45.248-45.248L444.128 512l278.624 278.624L768 745.376 534.624 512zM288 832h64V192H288z",fill:g.value?"#000":"#dddddd","p-id":"3192"},null,8,K)],4)),(e.openBlock(),e.createElementBlock("svg",{t:"1685428125993",class:"viewer-tools-icon",style:e.normalizeStyle(g.value?"cursor: pointer;":"cursor: not-allowed"),viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"3365","xmlns:xlink":"http://www.w3.org/1999/xlink",onClick:i[1]||(i[1]=v=>c(1))},[e.createElementVNode("path",{d:"M256 278.624L489.376 512 256 745.376l45.248 45.248L579.872 512 301.248 233.376zM672 832h64V192h-64z",fill:g.value?"#000":"#dddddd","p-id":"3366"},null,8,Q)],4)),(e.openBlock(),e.createElementBlock("svg",{t:"1685432878765",class:"viewer-tools-icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"2455","xmlns:xlink":"http://www.w3.org/1999/xlink",onClick:i[2]||(i[2]=v=>_(-90))},W)),(e.openBlock(),e.createElementBlock("svg",{t:"1685432800892",class:"viewer-tools-icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"5096","xmlns:xlink":"http://www.w3.org/1999/xlink",onClick:i[3]||(i[3]=v=>_(90))},Y))])]))}},[["__scopeId","data-v-92b6ecc4"]]),ee={__name:"index",props:{action:String,name:String,data:Object,beforeUpload:Function,fileList:Array,url:String,maximum:Number,headers:Object},emits:["change","delete","progress","success","error"],setup(h,{emit:o}){const n=h,a=e.ref(!1),l=e.ref({imgURL:"",index:0,list:[]}),g=(p,r)=>{o("progress",p,r)},t=(p,r)=>{o("success",p,r)},c=(p,r)=>{o("error",p,r)},_=p=>{o("change",p)},u=(p,r)=>{o("delete",p,r)},f=(p,r,E)=>{l.value.imgURL=p,E&&(l.value.index=r,l.value.list=E),a.value=!0},i=()=>{a.value=!1},v=()=>{const p={...n,onChange:_,onDelete:u,onSuccess:t,onError:c,onProgress:g,onViewer:f};return e.h("div",null,[a.value?e.h(Z,{...l.value,showImgViewer:a.value,onClose:i}):"",n.fileList?e.h(j,p):e.h(y,p)])};return(p,r)=>(e.openBlock(),e.createBlock(v))}};return{install:h=>{h.component("draggable-upload",ee)}}});
