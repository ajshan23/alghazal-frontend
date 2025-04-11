import{v as b,j as e}from"./index-Bj3mz5Pw.js";import{I as w}from"./Input-9SAYI4Mj.js";import{B as N}from"./Button-Dhq_u3bq.js";import{C as v}from"./index-C28Iij6M.js";import{F,a as I,b as y,c as n,d as t}from"./formik.esm-sXIm4dFv.js";import{A as P}from"./Alert-COxxIF6A.js";import{P as M}from"./PasswordInput-BRlUjMr3.js";import{A as i}from"./ActionLink-CrbLs8U9.js";import{u as S}from"./useTimeOutMessage-CT-pCTJa.js";import{c as k,a as l,b as A}from"./index.esm-DZfJtAA7.js";import"./context-DBklxPP3.js";import"./Views-Bc58ZmG5.js";import"./isNil-DFW_rJgM.js";import"./get-CS1_jRFf.js";import"./toString-CQNPFSTv.js";import"./useColorLevel-10S34ZEH.js";import"./_baseIsEqual-WHXuIrZd.js";import"./_getPrototype-Dx9yexOq.js";import"./index-DUqM6xV3.js";import"./StatusIcon-sOt29h0g.js";import"./CloseButton-PxoRbE_t.js";import"./useThemeClass-JsLiYU2F.js";const C=k().shape({userName:l().required("Please enter your user name"),password:l().required("Please enter your password"),rememberMe:A()}),U=c=>{const{disableSubmit:d=!1,className:p,forgotPasswordUrl:u="/forgot-password",signUpUrl:x="/sign-up"}=c,[m,h]=S(),{signIn:f}=b(),j=async(r,s)=>{const{userName:a,password:g}=r;s(!0);const o=await f({userName:a,password:g});(o==null?void 0:o.status)==="failed"&&h(o.message),s(!1)};return e.jsxs("div",{className:p,children:[m&&e.jsx(P,{showIcon:!0,className:"mb-4",type:"danger",children:e.jsx(e.Fragment,{children:m})}),e.jsx(F,{initialValues:{userName:"admin",password:"123Qwe",rememberMe:!0},validationSchema:C,onSubmit:(r,{setSubmitting:s})=>{d?s(!1):j(r,s)},children:({touched:r,errors:s,isSubmitting:a})=>e.jsx(I,{children:e.jsxs(y,{children:[e.jsx(n,{label:"User Name",invalid:s.userName&&r.userName,errorMessage:s.userName,children:e.jsx(t,{type:"text",autoComplete:"off",name:"userName",placeholder:"User Name",component:w})}),e.jsx(n,{label:"Password",invalid:s.password&&r.password,errorMessage:s.password,children:e.jsx(t,{autoComplete:"off",name:"password",placeholder:"Password",component:M})}),e.jsxs("div",{className:"flex justify-between mb-6",children:[e.jsx(t,{className:"mb-0",name:"rememberMe",component:v,children:"Remember Me"}),e.jsx(i,{to:u,children:"Forgot Password?"})]}),e.jsx(N,{block:!0,loading:a,variant:"solid",type:"submit",children:a?"Signing in...":"Sign In"}),e.jsxs("div",{className:"mt-4 text-center",children:[e.jsxs("span",{children:["Don't have an account yet?"," "]}),e.jsx(i,{to:x,children:"Sign up"})]})]})})})]})},se=()=>e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"mb-8",children:[e.jsx("h3",{className:"mb-1",children:"Welcome back!"}),e.jsx("p",{children:"Please enter your credentials to sign in!"})]}),e.jsx(U,{disableSubmit:!1})]});export{se as default};
