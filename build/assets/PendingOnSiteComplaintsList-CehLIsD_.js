import{r as a,a7 as q,j as e,ah as i,ai as l}from"./index-Bj3mz5Pw.js";import{A as U}from"./AdaptableCard-CW5rWfWy.js";import{P as F}from"./PendingOnSiteComplaintsTableTools-BbN78Tqk.js";import{X,I as Y,Y as G}from"./toString-CQNPFSTv.js";import{D as J}from"./debounce-Dydopoza.js";import{B as Q}from"./Badge-nyZZIW2G.js";import{B as m}from"./Button-Dhq_u3bq.js";import{D}from"./Drawer-7ZtkgvAT.js";import{t as P,N as A}from"./toast-CEafV06e.js";import"./Card-vVKS0sxe.js";import"./Input-9SAYI4Mj.js";import"./context-DBklxPP3.js";import"./Views-Bc58ZmG5.js";import"./isNil-DFW_rJgM.js";import"./get-CS1_jRFf.js";import"./index-C28Iij6M.js";import"./_baseIsEqual-WHXuIrZd.js";import"./_getPrototype-Dx9yexOq.js";import"./index-DhcYxbh9.js";import"./index-DereAiEi.js";import"./Skeleton-DUNfQ8XH.js";import"./Select-bc2POzie.js";import"./index-Bkx5KVf2.js";import"./useColorLevel-10S34ZEH.js";import"./index-zI0RxmbS.js";import"./index-Chjiymov.js";import"./CloseButton-PxoRbE_t.js";import"./StatusIcon-sOt29h0g.js";import"./chainedFunction-BxZSneMW.js";const V={Warranty:{dotClass:"bg-green-500"},"Non-Warranty":{dotClass:"bg-red-500"}},Z=({searchTerm:n,warrantyFilter:o})=>{const p=a.useRef(null),u=q(),[O,g]=a.useState([]),[E,S]=a.useState(!0),[c,h]=a.useState(1),[d,I]=a.useState(10),[W,$]=a.useState(0),[z,j]=a.useState(!1),[y,C]=a.useState(null),[R,_]=a.useState([]),[K,w]=a.useState(!1),[N,b]=a.useState(null);a.useEffect(()=>{h(1)},[n,o]),a.useEffect(()=>{(async()=>{S(!0);try{const t={page:c,limit:d,searchTerm:n||"",complaintStatus:"Pending"};o?t.warrantyStatus="true":t.warrantyStatus="false";const r=await i.get(`${l}/onsite`,{params:t});g(r.data.data.data),$(r.data.data.countOfDocuments)}catch(t){console.error("Error fetching complaints:",t)}finally{S(!1)}})()},[c,d,n,o]);const k=async s=>{C(s),j(!0);try{const t=await i.get(`${l}/worker/available`);_(t.data.data)}catch(t){console.error("Error fetching available workers:",t)}},f=()=>{j(!1),C(null)},T=async s=>{if(y)try{await i.put(`${l}/onsite/${y}/assign-worker`,{workerId:s});const t={page:c,limit:d,searchTerm:n||"",complaintStatus:"Pending"};o?t.warrantyStatus="true":t.warrantyStatus="false";const r=await i.get(`${l}/onsite`,{params:t});g(r.data.data.data),f()}catch(t){console.error("Error assigning worker:",t)}},B=s=>{b(s),w(!0)},x=()=>{w(!1),b(null)},v=async s=>{if(N)try{await i.put(`${l}/onsite/${N}/status`,{complaintStatus:s});const t={page:c,limit:d,searchTerm:n||"",complaintStatus:"Pending"};o?t.warrantyStatus="true":t.warrantyStatus="false";const r=await i.get(`${l}/onsite`,{params:t});g(r.data.data.data),P.push(e.jsx(A,{title:"Success",type:"success",children:"Status changed successfully."})),x()}catch(t){console.error("Error changing status:",t),P.push(e.jsx(A,{title:"Error",type:"danger",children:"Failed to change status."}))}},H=a.useMemo(()=>[{header:"Customer Name",accessorKey:"customerName",cell:s=>e.jsx("span",{className:"capitalize",children:s.row.original.customerName})},{header:"Address",accessorKey:"customerAddress"},{header:"Complaint No.",accessorKey:"complaintNumber"},{header:"Make",accessorKey:"make"},{header:"Warranty",accessorKey:"warrantyStatus",cell:s=>{var r;const t=s.row.original.warrantyStatus;return e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(Q,{className:((r=V[t])==null?void 0:r.dotClass)||"bg-gray-500"}),e.jsx("span",{className:"capitalize font-semibold",children:t})]})}},{header:"Worker",accessorKey:"attendedPerson",cell:s=>{const t=s.row.original.attendedPerson;return t?e.jsx("div",{className:"flex justify-center",children:e.jsx("img",{src:t.workerImage,alt:t.workerName,className:"w-10 h-10 rounded-full object-cover cursor-pointer",onClick:()=>k(s.row.original._id)})}):e.jsx("div",{className:"flex justify-center",children:e.jsx(m,{size:"xs",icon:e.jsx(X,{}),onClick:()=>k(s.row.original._id),children:"Assign"})})}},{header:"Actions",id:"actions",cell:s=>e.jsxs("div",{className:"flex justify-end text-lg gap-2",children:[e.jsx("span",{className:"cursor-pointer p-2 hover:text-green-500",onClick:()=>u(`/app/onsite/${s.row.original._id}`),children:e.jsx(Y,{})}),e.jsx(m,{size:"xs",icon:e.jsx(G,{}),onClick:()=>B(s.row.original._id),children:"Change"})]})}],[u]),L=s=>h(s),M=s=>{I(s),h(1)};return e.jsxs(e.Fragment,{children:[e.jsx(J,{ref:p,columns:H,data:O,loading:E,pagingData:{total:W,pageIndex:c,pageSize:d},onPaginationChange:L,onSelectChange:M}),e.jsx(D,{title:"Assign Worker",isOpen:z,onClose:f,onRequestClose:f,children:e.jsx("div",{className:"space-y-4",children:R.map(s=>e.jsxs("div",{className:"flex items-center justify-between p-2 hover:bg-gray-100 rounded",children:[e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx("img",{src:s.workerImage,alt:s.workerName,className:"w-10 h-10 rounded-full object-cover"}),e.jsxs("div",{children:[e.jsx("p",{className:"font-semibold",children:s.workerName}),e.jsx("p",{className:"text-sm text-gray-500",children:s.phoneNumber})]})]}),e.jsx(m,{size:"xs",onClick:()=>T(s._id),children:"Assign"})]},s._id))})}),e.jsx(D,{title:"Change Status",isOpen:K,onClose:x,onRequestClose:x,children:e.jsxs("div",{className:"space-y-4",children:[e.jsx(m,{block:!0,onClick:()=>v("Closed"),children:"Close Complaint"}),e.jsx(m,{block:!0,onClick:()=>v("Sent to Workshop"),children:"Send to Workshop"})]})})]})},Ae=()=>{const[n,o]=a.useState(""),[p,u]=a.useState(!1);return e.jsxs(U,{className:"h-full",bodyClass:"h-full",children:[e.jsxs("div",{className:"lg:flex items-center justify-between mb-4",children:[e.jsx("h3",{className:"mb-4 lg:mb-0",children:"Pending On-Site Complaints"}),e.jsx(F,{onSearch:o,onFilter:u})]}),e.jsx(Z,{searchTerm:n,warrantyFilter:p})]})};export{Ae as default};
