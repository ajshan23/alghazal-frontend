import{r as p,j as e,c as I,z as ie,a5 as he,aa as be,am as ve,an as Ce,W as je,m as Se,P as A,ah as q,S as Q}from"./index-CA7vLNFI.js";import{A as ke}from"./AdaptableCard-CmhLWxHq.js";import{Z as ye,_ as le,$ as Ne,W as we,X as Pe,a0 as Te,J as $e,a1 as Ie,a2 as Ee,a3 as Re,a4 as Me,a5 as Ae}from"./toString-C_n6VLVY.js";import{T as X,u as ze,f as Y,g as De,a as Le,b as Fe,c as Oe}from"./index-CSQYPRSF.js";import{S as _e,D as He}from"./Select-x-0aCyUg.js";import{C as D}from"./index-B0zAe8ME.js";import{B as qe}from"./Badge-BVlo33er.js";import{I as Be,F as We,a as Ge,b as Ke,c as Ve}from"./formik.esm-BtFMNxVz.js";import{u as Ue,b as Xe,c as Ze,B as H}from"./Button-BWlffnBS.js";import{d as Je,e as ce}from"./Views-DLdkzVCz.js";import"./Card-DAnh9Ik9.js";import"./index-CnX7-TCL.js";import"./get-BX0NKbV_.js";import"./_getPrototype-CyHMCE_m.js";import"./isNil-C6Hksnuv.js";import"./index-B5bUWmwT.js";const L=7,Qe=({className:d,onArrow:s})=>{const[t,r]=p.useState(!1);return e.jsx("li",{className:d,role:"presentation",onMouseEnter:()=>{r(!0)},onMouseLeave:()=>{r(!1)},onClick:()=>s("nextMore"),children:t?e.jsx(ye,{}):e.jsx(le,{})})},Ye=({className:d,onArrow:s})=>{const[t,r]=p.useState(!1);return e.jsx("li",{className:d,role:"presentation",onMouseEnter:()=>{r(!0)},onMouseLeave:()=>{r(!1)},onClick:()=>s("prevMore"),children:t?e.jsx(Ne,{}):e.jsx(le,{})})},et=d=>{const{pageCount:s,currentPage:t,onChange:r,pagerClass:a}=d,[m,u]=p.useState(!1),[x,l]=p.useState(!1);p.useEffect(()=>{s>L?(t>L-2&&u(!0),t<s-2&&l(!0),t>=s-3&&t<=s&&l(!1),t>=1&&t<=4&&u(!1)):(u(!1),l(!1))},[t,s]);const n=(c,i)=>{i.preventDefault();let f=c;f<1&&(f=1),f>s&&(f=s),f!==t&&r(f)},h=p.useCallback(c=>{let i=t;c==="nextMore"&&(i=t+5),c==="prevMore"&&(i=t-5),r(i)},[t,r]),v=p.useMemo(()=>{const c=[];if(m&&!x){const i=s-(L-2);for(let f=i;f<s;f++)c.push(f)}else if(!m&&x)for(let i=2;i<L;i++)c.push(i);else if(m&&x){const i=Math.floor(L/2)-1,f=t>=s-2&&t<=s;for(let k=t-i;k<=t+(f?0:i);k++)c.push(k)}else for(let i=2;i<s;i++)c.push(i);return c.length>L?[]:c},[m,x,t,s]),S=c=>I(a.default,t===c?a.active:a.inactive);return e.jsxs("ul",{children:[s>0&&e.jsx("li",{className:S(1),role:"presentation",onClick:c=>n(1,c),children:"1"}),m&&e.jsx(Ye,{className:I(a.default,a.inactive),onArrow:c=>h(c)}),v.map((c,i)=>e.jsx("li",{className:S(c),role:"presentation",onClick:f=>n(c,f),children:c},i)),x&&e.jsx(Qe,{className:I(a.default,a.inactive),onArrow:c=>h(c)}),s>1&&e.jsx("li",{className:S(s),role:"presentation",onClick:c=>n(s,c),children:s})]})},tt=d=>{const{currentPage:s,pagerClass:t,onPrev:r}=d,a=s<=1,m=x=>{a||r(x)},u=I(t.default,"pagination-pager-prev",a?t.disabled:t.inactive);return e.jsx("span",{className:u,role:"presentation",onClick:m,children:e.jsx(we,{})})},st=d=>{const{currentPage:s,pageCount:t,pagerClass:r,onNext:a}=d,m=s===t||t===0,u=l=>{l.preventDefault(),!m&&a(l)},x=I(r.default,"pagination-pager-next",m?r.disabled:r.inactive);return e.jsx("span",{className:x,role:"presentation",onClick:u,children:e.jsx(Pe,{})})},at=d=>{const{total:s}=d;return e.jsxs("div",{className:"pagination-total",children:["Total ",e.jsx("span",{children:s})," Items"]})},ue=d=>{const{className:s,currentPage:t=1,displayTotal:r=!1,onChange:a,pageSize:m=1,total:u=5}=d,[x,l]=p.useState(u),[n,h]=p.useState(m),{themeColor:v,primaryColorLevel:S}=ie(),c=p.useMemo(()=>typeof x=="number"?Math.ceil(x/n):null,[x,n]),i=p.useCallback(N=>{const b=parseInt(N,10),w=c;let y;return w?(b<1&&(y=1),b>w&&(y=w)):(isNaN(b)||b<1)&&(y=1),(y===void 0&&isNaN(b)||y===0)&&(y=1),y===void 0?b:y},[c]),[f,k]=p.useState(t?i(t):1);p.useEffect(()=>{u!==x&&l(u),m!==n&&h(m),t!==f&&k(t)},[u,m,t]);const C=N=>{k(i(N)),a==null||a(i(N))},j=p.useCallback(()=>{const N=f-1;k(i(N)),a==null||a(i(N))},[a,f,i]),T=p.useCallback(()=>{const N=f+1;k(i(N)),a==null||a(i(N))},[a,f,i]),P={default:"pagination-pager",inactive:"pagination-pager-inactive",active:`text-${v}-${S} bg-${v}-50 hover:bg-${v}-50 dark:bg-${v}-${S} dark:text-gray-100`,disabled:"pagination-pager-disabled"},R=I("pagination",s);return e.jsxs("div",{className:R,children:[r&&e.jsx(at,{total:u}),e.jsx(tt,{currentPage:f,pagerClass:P,onPrev:j}),e.jsx(et,{pageCount:c,currentPage:f,pagerClass:P,onChange:C}),e.jsx(st,{currentPage:f,pageCount:c,pagerClass:P,onNext:T})]})};ue.displayName="Pagination";const U=p.forwardRef((d,s)=>{const{animation:t=!0,asElement:r="span",className:a,height:m,style:u,variant:x="block",width:l}=d;return e.jsx(r,{ref:s,className:I("skeleton",x==="circle"&&"skeleton-circle",x==="block"&&"skeleton-block",t&&"animate-pulse",a),style:{width:l,height:m,...u}})});U.displayName="Skeleton";const{Tr:rt,Td:nt,TBody:ot}=X,it=d=>{const{columns:s=1,rows:t=10,avatarInColumns:r=[],avatarProps:a}=d;return e.jsx(ot,{children:Array.from(new Array(t),(m,u)=>u+0).map(m=>e.jsx(rt,{children:Array.from(new Array(s),(u,x)=>x+0).map(u=>e.jsx(nt,{children:e.jsxs("div",{className:"flex flex-auto items-center gap-2",children:[r.includes(u)&&e.jsx("div",{children:e.jsx(U,{variant:"circle",...a})}),e.jsx(U,{})]})},`col-${u}`))},`row-${m}`))})},{Tr:ee,Th:lt,Td:ct,THead:ut,TBody:dt,Sorter:mt}=X,te=d=>{const{indeterminate:s,onChange:t,onCheckBoxChange:r,onIndeterminateCheckBoxChange:a,...m}=d,u=p.useRef(null);p.useEffect(()=>{typeof s=="boolean"&&u.current&&(u.current.indeterminate=!m.checked&&s)},[u,s]);const x=l=>{t(l),r==null||r(l),a==null||a(l)};return e.jsx(D,{ref:u,className:"mb-0",onChange:(l,n)=>x(n),...m})};function gt(d,s){const{skeletonAvatarColumns:t,columns:r=[],data:a=[],loading:m=!1,onCheckBoxChange:u,onIndeterminateCheckBoxChange:x,onPaginationChange:l,onSelectChange:n,onSort:h,pageSizes:v=[10,25,50,100],selectable:S=!1,skeletonAvatarProps:c,pagingData:i={total:0,pageIndex:1,pageSize:10}}=d,{pageSize:f,pageIndex:k,total:C}=i,[j,T]=p.useState(null),P=p.useMemo(()=>v.map(o=>({value:o,label:`${o} / page`})),[v]),R=(o,g)=>{m||u==null||u(o,g)},N=(o,g)=>{m||x==null||x(o,g)},b=o=>{m||l==null||l(o)},w=o=>{m||n==null||n(Number(o))};p.useEffect(()=>{if(Array.isArray(j)){const o=j.length>0?j[0].desc?"desc":"asc":"",g=j.length>0?j[0].id:"";h==null||h({order:o,key:g})}},[j]);const y=p.useMemo(()=>{const o=r;return S?[{id:"select",header:({table:g})=>e.jsx(te,{checked:g.getIsAllRowsSelected(),indeterminate:g.getIsSomeRowsSelected(),onChange:g.getToggleAllRowsSelectedHandler(),onIndeterminateCheckBoxChange:E=>{N(E.target.checked,g.getRowModel().rows)}}),cell:({row:g})=>e.jsx(te,{checked:g.getIsSelected(),disabled:!g.getCanSelect(),indeterminate:g.getIsSomeSelected(),onChange:g.getToggleSelectedHandler(),onCheckBoxChange:E=>R(E.target.checked,g.original)})},...o]:o},[r,S]),M=ze({data:a,columns:y,getCoreRowModel:De(),getFilteredRowModel:Le(),getPaginationRowModel:Fe(),getSortedRowModel:Oe(),manualPagination:!0,manualSorting:!0,onSortingChange:o=>{T(o)},state:{sorting:j}}),F=()=>{M.resetSorting()},z=()=>{M.toggleAllRowsSelected(!1)};return p.useImperativeHandle(s,()=>({resetSorting:F,resetSelected:z})),e.jsxs(he,{loading:m&&a.length!==0,type:"cover",children:[e.jsxs(X,{children:[e.jsx(ut,{children:M.getHeaderGroups().map(o=>e.jsx(ee,{children:o.headers.map(g=>e.jsx(lt,{colSpan:g.colSpan,children:g.isPlaceholder?null:e.jsxs("div",{className:I(g.column.getCanSort()&&"cursor-pointer select-none point",m&&"pointer-events-none"),onClick:g.column.getToggleSortingHandler(),children:[Y(g.column.columnDef.header,g.getContext()),g.column.getCanSort()&&e.jsx(mt,{sort:g.column.getIsSorted()})]})},g.id))},o.id))}),m&&a.length===0?e.jsx(it,{columns:y.length,rows:i.pageSize,avatarInColumns:t,avatarProps:c}):e.jsx(dt,{children:M.getRowModel().rows.slice(0,f).map(o=>e.jsx(ee,{children:o.getVisibleCells().map(g=>e.jsx(ct,{children:Y(g.column.columnDef.cell,g.getContext())},g.id))},o.id))})]}),e.jsxs("div",{className:"flex items-center justify-between mt-4",children:[e.jsx(ue,{pageSize:f,currentPage:k,total:C,onChange:b}),e.jsx("div",{style:{minWidth:130},children:e.jsx(_e,{size:"sm",menuPlacement:"top",isSearchable:!1,value:P.filter(o=>o.value===f),options:P,onChange:o=>w(o==null?void 0:o.value)})})]})]})}const ft=p.forwardRef(gt),xt={Draft:{dotClass:"bg-gray-500"},Sent:{dotClass:"bg-blue-500"},Approved:{dotClass:"bg-emerald-500"},Rejected:{dotClass:"bg-red-500"},Converted:{dotClass:"bg-purple-500"}},pt=({searchTerm:d,filters:s})=>{const t=p.useRef(null),r=be(),[a,m]=p.useState([]),[u,x]=p.useState(!0),[l,n]=p.useState(1),[h,v]=p.useState(10),[S,c]=p.useState(0);p.useEffect(()=>{n(1)},[d,s]),p.useEffect(()=>{(async()=>{var j,T,P,R,N,b;x(!0);try{const w={page:l,limit:h,search:d||void 0};(j=s.status)!=null&&j.length&&(w.status=s.status.join(","));const y=await ve.get(`${Ce}/estimation`,{params:w});m(((P=(T=y.data)==null?void 0:T.data)==null?void 0:P.estimations)||[]),c(((b=(N=(R=y.data)==null?void 0:R.data)==null?void 0:N.pagination)==null?void 0:b.total)||0)}catch(w){console.error("Error fetching estimations:",w)}finally{x(!1)}})()},[l,h,d,s]);const i=p.useMemo(()=>[{header:"Estimation No.",accessorKey:"estimationNumber"},{header:"Client Name",accessorKey:"clientName",cell:C=>e.jsx("span",{className:"capitalize",children:C.row.original.clientName})},{header:"Date",accessorKey:"dateOfEstimation",cell:C=>e.jsx("span",{children:new Date(C.row.original.dateOfEstimation).toLocaleDateString()})},{header:"Estimated Amount",accessorKey:"estimatedAmount",cell:C=>e.jsxs("span",{children:["₹",C.row.original.estimatedAmount.toLocaleString()]})},{header:"Status",accessorKey:"status",cell:C=>{var T;const j=C.row.original.status;return e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(qe,{className:((T=xt[j])==null?void 0:T.dotClass)||"bg-gray-500"}),e.jsx("span",{className:"capitalize font-semibold",children:j})]})}},{header:"Actions",id:"actions",cell:C=>e.jsxs("div",{className:"flex justify-end text-lg",children:[e.jsx("span",{className:"cursor-pointer p-2 hover:text-blue-500",onClick:()=>r(`/estimations/edit/${C.row.original._id}`),children:e.jsx(Te,{})}),e.jsx("span",{className:"cursor-pointer p-2 hover:text-green-500",onClick:()=>r(`/app/estimation/${C.row.original._id}`),children:e.jsx($e,{})})]})}],[r]),f=C=>n(C),k=C=>{v(C),n(1)};return e.jsx(ft,{ref:t,columns:i,data:a,loading:u,pagingData:{total:S,pageIndex:l,pageSize:h},onPaginationChange:f,onSelectChange:k})};var B,se;function ht(){if(se)return B;se=1;var d=Je(),s=function(){return d.Date.now()};return B=s,B}var W,ae;function bt(){if(ae)return W;ae=1;var d=/\s/;function s(t){for(var r=t.length;r--&&d.test(t.charAt(r)););return r}return W=s,W}var G,re;function vt(){if(re)return G;re=1;var d=bt(),s=/^\s+/;function t(r){return r&&r.slice(0,d(r)+1).replace(s,"")}return G=t,G}var K,ne;function Ct(){if(ne)return K;ne=1;var d=vt(),s=ce(),t=Ie(),r=NaN,a=/^[-+]0x[0-9a-f]+$/i,m=/^0b[01]+$/i,u=/^0o[0-7]+$/i,x=parseInt;function l(n){if(typeof n=="number")return n;if(t(n))return r;if(s(n)){var h=typeof n.valueOf=="function"?n.valueOf():n;n=s(h)?h+"":h}if(typeof n!="string")return n===0?n:+n;n=d(n);var v=m.test(n);return v||u.test(n)?x(n.slice(2),v?2:8):a.test(n)?r:+n}return K=l,K}var V,oe;function jt(){if(oe)return V;oe=1;var d=ce(),s=ht(),t=Ct(),r="Expected a function",a=Math.max,m=Math.min;function u(x,l,n){var h,v,S,c,i,f,k=0,C=!1,j=!1,T=!0;if(typeof x!="function")throw new TypeError(r);l=t(l)||0,d(n)&&(C=!!n.leading,j="maxWait"in n,S=j?a(t(n.maxWait)||0,l):S,T="trailing"in n?!!n.trailing:T);function P(o){var g=h,E=v;return h=v=void 0,k=o,c=x.apply(E,g),c}function R(o){return k=o,i=setTimeout(w,l),C?P(o):c}function N(o){var g=o-f,E=o-k,O=l-g;return j?m(O,S-E):O}function b(o){var g=o-f,E=o-k;return f===void 0||g>=l||g<0||j&&E>=S}function w(){var o=s();if(b(o))return y(o);i=setTimeout(w,N(o))}function y(o){return i=void 0,T&&h?P(o):(h=v=void 0,c)}function M(){i!==void 0&&clearTimeout(i),k=0,h=f=v=i=void 0}function F(){return i===void 0?c:y(s())}function z(){var o=s(),g=b(o);if(h=arguments,v=this,f=o,g){if(i===void 0)return R(f);if(j)return clearTimeout(i),i=setTimeout(w,l),P(f)}return i===void 0&&(i=setTimeout(w,l)),c}return z.cancel=M,z.flush=F,z}return V=u,V}var St=jt();const kt=je(St),de=p.forwardRef((d,s)=>{var Z,J;const{active:t=!1,block:r=!1,children:a,className:m,color:u="",disabled:x=!1,icon:l,loading:n=!1,shape:h="round",size:v,variant:S="default",...c}=d,{themeColor:i,controlSize:f,primaryColorLevel:k}=ie(),C=(Z=Ue())==null?void 0:Z.size,j=(J=Xe())==null?void 0:J.size,T="button",P="inline-flex items-center justify-center",R=(u==null?void 0:u.split("-"))||[],N=v||j||C||f,b=R[0]||i,w=R[1]||k,[y,M]=Ze(w),F=()=>{let $="";switch(N){case q.LG:$=I(`h-${A.lg}`,l&&!a?`w-${A.lg} ${P} text-2xl`:"px-8 py-2 text-base");break;case q.SM:$=I(`h-${A.sm}`,l&&!a?`w-${A.sm} ${P} text-lg`:"px-3 py-2 text-sm");break;case q.XS:$=I(`h-${A.xs}`,l&&!a?`w-${A.xs} ${P} text-base`:"px-3 py-1 text-xs");break;default:$=I(`h-${A.md}`,l&&!a?`w-${A.md} ${P} text-xl`:"px-8 py-2");break}return $},z="opacity-50 cursor-not-allowed",o=()=>{const $={bgColor:t?`bg-${b}-${y}`:`bg-${b}-${w}`,textColor:"text-white",hoverColor:t?"":`hover:bg-${b}-${M}`,activeColor:`active:bg-${b}-${y}`};return _($)},g=()=>{const $={bgColor:t?`bg-${b}-200 dark:bg-${b}-50`:`bg-${b}-50 dark:bg-${b}-500 dark:bg-opacity-20`,textColor:`text-${b}-${w} dark:text-${b}-50`,hoverColor:t?"":`hover:bg-${b}-100 dark:hover:bg-${b}-500 dark:hover:bg-opacity-30`,activeColor:`active:bg-${b}-200 dark:active:bg-${b}-500 dark:active:bg-opacity-40`};return _($)},E=()=>_({bgColor:t?"bg-gray-100 border border-gray-300 dark:bg-gray-500 dark:border-gray-500":"bg-white border border-gray-300 dark:bg-gray-700 dark:border-gray-700",textColor:"text-gray-600 dark:text-gray-100",hoverColor:t?"":"hover:bg-gray-50 dark:hover:bg-gray-600",activeColor:"active:bg-gray-100 dark:active:bg-gray-500 dark:active:border-gray-500"}),O=()=>_({bgColor:t?"bg-gray-100 dark:bg-gray-500":"bg-transparent border border-transparent",textColor:"text-gray-600 dark:text-gray-100",hoverColor:t?"":"hover:bg-gray-50 dark:hover:bg-gray-600",activeColor:"active:bg-gray-100 dark:active:bg-gray-500 dark:active:border-gray-500"}),_=({bgColor:$,hoverColor:fe,activeColor:xe,textColor:pe})=>`${$} ${x||n?z:fe+" "+xe} ${pe}`,me=I(T,(()=>{switch(S){case"solid":return o();case"twoTone":return g();case"plain":return O();case"default":return E();default:return E()}})(),`radius-${h}`,F(),m,r?"w-full":""),ge=()=>n&&a?e.jsxs("span",{className:"flex items-center justify-center",children:[e.jsx(Q,{enableTheme:!1,className:"mr-1"}),a]}):l&&!a&&n?e.jsx(Q,{enableTheme:!1}):l&&!a&&!n?e.jsx(e.Fragment,{children:l}):l&&a&&!n?e.jsxs("span",{className:"flex items-center justify-center",children:[e.jsx("span",{className:"text-lg",children:l}),e.jsx("span",{className:"ltr:ml-1 rtl:mr-1",children:a})]}):e.jsx(e.Fragment,{children:a});return e.jsx(Se,{ref:s,className:me,...c,onClick:$=>{(x||n)&&$.preventDefault()},children:ge()})});de.displayName="LinkButton";const yt=({onSearch:d,onFilter:s})=>{const[t,r]=p.useState(!1),a=p.useRef(null),m=kt(h=>{d(h)},500),u=h=>{m(h.target.value)},x=()=>r(!0),l=()=>r(!1),n=h=>{s({status:h.status.length>0?h.status:void 0}),l()};return e.jsxs("div",{className:"flex flex-col lg:flex-row lg:items-center gap-2",children:[e.jsx(Be,{ref:a,className:"w-full md:w-96 md:mb-0 mb-4",size:"sm",placeholder:"Search estimations...",prefix:e.jsx(Ee,{className:"text-lg"}),onChange:u}),e.jsx(H,{size:"sm",className:"block lg:inline-block md:mb-0 mb-4",icon:e.jsx(Re,{}),onClick:x,children:"Filter"}),e.jsx(H,{block:!0,size:"sm",icon:e.jsx(Me,{}),className:"block lg:inline-block md:mb-0 mb-4",children:"Export"}),e.jsx(de,{to:"/app/create-estimation",block:!0,variant:"solid",size:"sm",icon:e.jsx(Ae,{}),className:"block lg:inline-block md:mb-0 mb-4",children:"Add Estimation"}),e.jsx(He,{title:"Filter Estimations",isOpen:t,onClose:l,onRequestClose:l,footer:e.jsxs("div",{className:"text-right w-full",children:[e.jsx(H,{size:"sm",className:"mr-2",onClick:l,children:"Cancel"}),e.jsx(H,{size:"sm",variant:"solid",type:"submit",form:"filter-form",children:"Apply"})]}),children:e.jsx(We,{initialValues:{status:[]},onSubmit:n,children:({values:h,setFieldValue:v})=>e.jsx(Ge,{id:"filter-form",children:e.jsx(Ke,{children:e.jsxs(Ve,{children:[e.jsx("h6",{className:"mb-4",children:"Estimation Status"}),e.jsxs(D.Group,{vertical:!0,value:h.status,onChange:S=>v("status",S),children:[e.jsx(D,{className:"mb-3",value:"Draft",children:"Draft"}),e.jsx(D,{className:"mb-3",value:"Sent",children:"Sent"}),e.jsx(D,{className:"mb-3",value:"Approved",children:"Approved"}),e.jsx(D,{className:"mb-3",value:"Rejected",children:"Rejected"}),e.jsx(D,{className:"mb-3",value:"Converted",children:"Converted to Job"})]})]})})})})})]})},qt=()=>{const[d,s]=p.useState(""),[t,r]=p.useState({});return e.jsxs(ke,{className:"h-full",bodyClass:"h-full",children:[e.jsxs("div",{className:"lg:flex items-center justify-between mb-4",children:[e.jsx("h3",{className:"mb-4 lg:mb-0",children:"Estimations"}),e.jsx(yt,{onSearch:s,onFilter:r})]}),e.jsx(pt,{searchTerm:d,filters:t})]})};export{qt as default};
