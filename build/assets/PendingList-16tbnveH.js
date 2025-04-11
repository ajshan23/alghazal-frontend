import{r,a7 as Y,j as e,ah as i,ai as l}from"./index-Bj3mz5Pw.js";import{A as G}from"./AdaptableCard-CW5rWfWy.js";import{X as Q,I as V,Y as Z,T as ee}from"./toString-CQNPFSTv.js";import{D as ae,d as se}from"./debounce-Dydopoza.js";import{B as x}from"./Button-Dhq_u3bq.js";import{D as A}from"./Drawer-7ZtkgvAT.js";import{t as O,N as R}from"./toast-CEafV06e.js";import{I as re}from"./Input-9SAYI4Mj.js";import{C as te}from"./index-C28Iij6M.js";import"./Card-vVKS0sxe.js";import"./Views-Bc58ZmG5.js";import"./index-DhcYxbh9.js";import"./index-DereAiEi.js";import"./Skeleton-DUNfQ8XH.js";import"./Select-bc2POzie.js";import"./get-CS1_jRFf.js";import"./context-DBklxPP3.js";import"./index-Bkx5KVf2.js";import"./useColorLevel-10S34ZEH.js";import"./index-zI0RxmbS.js";import"./index-Chjiymov.js";import"./CloseButton-PxoRbE_t.js";import"./StatusIcon-sOt29h0g.js";import"./chainedFunction-BxZSneMW.js";import"./isNil-DFW_rJgM.js";import"./_baseIsEqual-WHXuIrZd.js";import"./_getPrototype-Dx9yexOq.js";const oe=({searchTerm:o,filters:n})=>{const g=r.useRef(null),m=Y(),[y,u]=r.useState([]),[C,c]=r.useState(!0),[p,S]=r.useState(1),[h,W]=r.useState(10),[P,z]=r.useState(0),[_,k]=r.useState(!1),[v,D]=r.useState(null),[K,F]=r.useState([]),[H,I]=r.useState(!1),[j,J]=r.useState(null);r.useEffect(()=>{S(1)},[o,n]),r.useEffect(()=>{(async()=>{var s,t,d,f;c(!0);try{const w={page:p,limit:h,searchTerm:o||"",pending:!0};n.warranty!==void 0&&(w.warranty=n.warranty);const $=await i.get(`${l}/jobcards/`,{params:w});u((t=(s=$.data)==null?void 0:s.data)==null?void 0:t.data),z((f=(d=$.data)==null?void 0:d.data)==null?void 0:f.countOfDocuments)}catch(w){console.error("Error fetching job cards:",w)}finally{c(!1)}})()},[p,h,o,n]);const E=async a=>{D(a),k(!0);try{const s=await i.get(`${l}/worker/available`);F(s.data.data)}catch(s){console.error("Error fetching available workers:",s)}},N=()=>{k(!1),D(null)},L=async a=>{var s,t;if(v)try{await i.put(`${l}/worker/assign`,{workerId:a,jobcardId:v});const d={page:p,limit:h,searchTerm:o||"",pending:!0};n.warranty!==void 0&&(d.warranty=n.warranty);const f=await i.get(`${l}/jobcards/`,{params:d});u((t=(s=f.data)==null?void 0:s.data)==null?void 0:t.data),N()}catch(d){console.error("Error assigning worker:",d)}},B=a=>{J(a),I(!0)},b=()=>{I(!1),J(null)},T=async()=>{var a,s;if(j)try{await i.put(`${l}/jobcards/return?id=${j}`);const t=await i.get(`${l}/jobcards/`,{params:{page:p,limit:h,searchTerm:o,pending:!0}});u((s=(a=t.data)==null?void 0:a.data)==null?void 0:s.data),O.push(e.jsx(R,{title:"Success",type:"success",children:"Job card returned successfully."})),b()}catch(t){console.error("Error returning job card:",t)}},q=async()=>{var a,s;if(j)try{await i.put(`${l}/jobcards/work-done?id=${j}`);const t=await i.get(`${l}/jobcards/`,{params:{page:p,limit:h,searchTerm:o,pending:!0}});u((s=(a=t.data)==null?void 0:a.data)==null?void 0:s.data),O.push(e.jsx(R,{title:"Success",type:"success",children:"Job card marked as completed successfully."})),b()}catch(t){console.error("Error marking job card as completed:",t)}},U=r.useMemo(()=>[{header:"Customer Name",accessorKey:"customerName",cell:a=>e.jsx("span",{className:"capitalize",children:a.row.original.customerName})},{header:"Phone",accessorKey:"phoneNumber"},{header:"Date",accessorKey:"InDate",cell:a=>e.jsx("span",{children:new Date(a.row.original.InDate).toLocaleDateString()})},{header:"Jobcard No.",accessorKey:"jobCardNumber"},{header:"Worker",accessorKey:"worker",cell:a=>{const s=a.row.original.worker;return s?e.jsx("div",{className:"flex justify-center",children:e.jsx("img",{src:s.workerImage,alt:s.workerName,className:"w-10 h-10 rounded-full object-cover cursor-pointer",onClick:()=>E(a.row.original._id)})}):e.jsx("div",{className:"flex justify-center",children:e.jsx(x,{size:"xs",icon:e.jsx(Q,{}),onClick:()=>E(a.row.original._id),children:"Assign"})})}},{header:"Actions",id:"actions",cell:a=>e.jsxs("div",{className:"flex justify-end text-lg gap-2",children:[e.jsx("span",{className:"cursor-pointer p-2 hover:text-green-500",onClick:()=>m(`/app/jobcards/jobcard/${a.row.original._id}`),children:e.jsx(V,{})}),e.jsx(x,{size:"xs",icon:e.jsx(Z,{}),onClick:()=>B(a.row.original._id),children:"Change"})]})}],[m]),M=a=>S(a),X=a=>{W(a),S(1)};return e.jsxs(e.Fragment,{children:[e.jsx(ae,{ref:g,columns:U,data:y,loading:C,pagingData:{total:P,pageIndex:p,pageSize:h},onPaginationChange:M,onSelectChange:X}),e.jsx(A,{title:"Assign Worker",isOpen:_,onClose:N,onRequestClose:N,children:e.jsx("div",{className:"space-y-4",children:K.map(a=>e.jsxs("div",{className:"flex items-center justify-between p-2 hover:bg-gray-100 rounded",children:[e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx("img",{src:a.workerImage,alt:a.workerName,className:"w-10 h-10 rounded-full object-cover"}),e.jsxs("div",{children:[e.jsx("p",{className:"font-semibold",children:a.workerName}),e.jsx("p",{className:"text-sm text-gray-500",children:a.phoneNumber})]})]}),e.jsx(x,{size:"xs",onClick:()=>L(a._id),children:"Assign"})]},a._id))})}),e.jsx(A,{title:"Change Status",isOpen:H,onClose:b,onRequestClose:b,children:e.jsxs("div",{className:"space-y-4",children:[e.jsx(x,{block:!0,onClick:T,children:"Return"}),e.jsx(x,{block:!0,onClick:q,children:"Completed"})]})})]})},ne=({onSearch:o,onFilter:n})=>{const[g,m]=r.useState(!1),y=se(c=>{o(c)},500),u=c=>{y(c.target.value)},C=c=>{m(c),n({warranty:c})};return e.jsxs("div",{className:"flex flex-col lg:flex-row lg:items-center gap-2",children:[e.jsx(re,{className:"w-full md:w-96 md:mb-0 mb-4",size:"sm",placeholder:"Search pending job cards...",prefix:e.jsx(ee,{className:"text-lg"}),onChange:u}),e.jsx("div",{className:"flex items-center",children:e.jsx(te,{checked:g,onChange:C,children:"Warranty"})})]})},Re=()=>{const[o,n]=r.useState(""),[g,m]=r.useState({});return e.jsxs(G,{className:"h-full",bodyClass:"h-full",children:[e.jsxs("div",{className:"lg:flex items-center justify-between mb-4",children:[e.jsx("h3",{className:"mb-4 lg:mb-0",children:"Pending Job Cards"}),e.jsx(ne,{onSearch:n,onFilter:m})]}),e.jsx(oe,{searchTerm:o,filters:g})]})};export{Re as default};
