import{r as s,a7 as D,j as e,ah as k,ai as I}from"./index-Bj3mz5Pw.js";import{A as E}from"./AdaptableCard-CW5rWfWy.js";import{I as K,T}from"./toString-CQNPFSTv.js";import{D as B,d as J}from"./debounce-Dydopoza.js";import{I as L}from"./Input-9SAYI4Mj.js";import{C as z}from"./index-C28Iij6M.js";import"./Card-vVKS0sxe.js";import"./Views-Bc58ZmG5.js";import"./index-DhcYxbh9.js";import"./index-DereAiEi.js";import"./Skeleton-DUNfQ8XH.js";import"./Select-bc2POzie.js";import"./get-CS1_jRFf.js";import"./context-DBklxPP3.js";import"./index-Bkx5KVf2.js";import"./isNil-DFW_rJgM.js";import"./_baseIsEqual-WHXuIrZd.js";import"./_getPrototype-Dx9yexOq.js";const A=({searchTerm:t,filters:o})=>{const l=s.useRef(null),c=D(),[d,m]=s.useState([]),[h,r]=s.useState(!0),[u,p]=s.useState(1),[x,y]=s.useState(10),[w,N]=s.useState(0);s.useEffect(()=>{p(1)},[t,o]),s.useEffect(()=>{(async()=>{var n,f,g,j;r(!0);try{const i={page:u,limit:x,searchTerm:t||"",billed:!0};o.warranty!==void 0&&(i.warranty=o.warranty);const b=await k.get(`${I}/jobcards/`,{params:i});m((f=(n=b.data)==null?void 0:n.data)==null?void 0:f.data),N((j=(g=b.data)==null?void 0:g.data)==null?void 0:j.countOfDocuments)}catch(i){console.error("Error fetching job cards:",i)}finally{r(!1)}})()},[u,x,t,o]);const C=s.useMemo(()=>[{header:"Customer Name",accessorKey:"customerName",cell:a=>e.jsx("span",{className:"capitalize",children:a.row.original.customerName})},{header:"Phone",accessorKey:"phoneNumber"},{header:"Date",accessorKey:"InDate",cell:a=>e.jsx("span",{children:new Date(a.row.original.InDate).toLocaleDateString()})},{header:"Jobcard No.",accessorKey:"jobCardNumber"},{header:"Worker",accessorKey:"worker",cell:a=>{const n=a.row.original.worker;return n?e.jsx("div",{className:"flex justify-center",children:e.jsx("img",{src:n.workerImage,alt:n.workerName,className:"w-10 h-10 rounded-full object-cover"})}):e.jsx("div",{className:"flex justify-center",children:e.jsx("span",{children:"-"})})}},{header:"Invoice Number",accessorKey:"invoiceNumber"},{header:"Invoice Date",accessorKey:"invoiceDate",cell:a=>e.jsx("span",{children:new Date(a.row.original.invoiceDate).toLocaleDateString()})},{header:"Actions",id:"actions",cell:a=>e.jsx("div",{className:"flex justify-end text-lg",children:e.jsx("span",{className:"cursor-pointer p-2 hover:text-green-500",onClick:()=>c(`/app/jobcards/jobcard/${a.row.original._id}`),children:e.jsx(K,{})})})}],[c]),S=a=>p(a),v=a=>{y(a),p(1)};return e.jsx(B,{ref:l,columns:C,data:d,loading:h,pagingData:{total:w,pageIndex:u,pageSize:x},onPaginationChange:S,onSelectChange:v})},P=({onSearch:t,onFilter:o})=>{const[l,c]=s.useState(!1),d=J(r=>{t(r)},500),m=r=>{d(r.target.value)},h=r=>{c(r),o({warranty:r})};return e.jsxs("div",{className:"flex flex-col lg:flex-row lg:items-center gap-2",children:[e.jsx(L,{className:"w-full md:w-96 md:mb-0 mb-4",size:"sm",placeholder:"Search billed job cards...",prefix:e.jsx(T,{className:"text-lg"}),onChange:m}),e.jsx("div",{className:"flex items-center",children:e.jsx(z,{checked:l,onChange:h,children:"Warranty"})})]})},se=()=>{const[t,o]=s.useState(""),[l,c]=s.useState({});return e.jsxs(E,{className:"h-full",bodyClass:"h-full",children:[e.jsxs("div",{className:"lg:flex items-center justify-between mb-4",children:[e.jsx("h3",{className:"mb-4 lg:mb-0",children:"Billed Job Cards"}),e.jsx(P,{onSearch:o,onFilter:c})]}),e.jsx(A,{searchTerm:t,filters:l})]})};export{se as default};
