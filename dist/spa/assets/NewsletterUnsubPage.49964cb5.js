import{_ as w,r as d,m as x,p as o,q as b,s as f,O as a,t as r,R as i,S as n,v as c,aw as h,ax as y}from"./index.c7030ef6.js";import{Q as g}from"./QForm.aa0ff1cc.js";import{Q as N}from"./QPage.f2832083.js";import{api as U}from"./axios.8bc7815c.js";import{U as V}from"./UseNewsletter.febf8f68.js";import{E as k}from"./EmailInput.e039f995.js";const q={class:"flex flex-center"},B={class:"col-12 text-white"},D={class:"text-h1 font-customization text-primary",duration:500},P={class:"col-12 self-center flex flex-center q-mb-md"},Q={class:"q-pa-md flex flex-center"},z={class:"text-h4 font-customization text-white",duration:500,delay:50},C=a("br",null,null,-1),E={duration:500,delay:100},F={__name:"NewsletterUnsubPage",setup(M){const t=d(""),m=d(null),{unsubscribe:_}=V();async function p(){await U.get(`/newsletter/unsubscribe/mailer/${t.value}`)}async function v(){m.value.validate().then(async u=>{if(!u){alert("Preencha seu email para assinar o newsletter!");return}try{await _({email:t.value}),await p(t.value)}catch(e){console.log(e.message)}})}return(u,e)=>{const l=x("motion-slide-visible-once-bottom");return o(),b(N,{class:"justify-center wrap",style:{"vertical-align":"center"}},{default:f(()=>[a("div",q,[a("div",B,[r((o(),i("h1",D,[n(" Newsletter ")])),[[l]])])]),a("div",P,[a("div",Q,[r((o(),i("p",z,[n(" Desassinar a newsletter e parar de receber "),C,n(" lan\xE7amentos e promo\xE7\xF5es da Mayarog ")])),[[l]])])]),r((o(),i("div",E,[c(g,{class:"row flex justify-center q-gutter-md",ref_key:"newsletterForm",ref:m,onSubmit:e[3]||(e[3]=y(s=>v(),["prevent"]))},{default:f(()=>[c(k,{class:"col-xs-10 col-sm-7 col-md-4",label:"Cancelar assinatura da newsletter",placeholder:"Digite seu e-mail",modelValue:t.value,"onUpdate:modelValue":e[0]||(e[0]=s=>t.value=s),onChange:e[1]||(e[1]=s=>t.value=s),"onUpdate:value":e[2]||(e[2]=s=>t.value=s)},null,8,["modelValue"]),a("div",null,[c(h,{rounded:"",fab:"",unelevated:"",label:"Desassinar",color:"primary","text-color":"white",class:"q-px-xl",size:"sm",type:"submit"})])]),_:1},512)])),[[l]])]),_:1})}}};var T=w(F,[["__file","/home/osyris/workspace/mayarog/mayarog_hotsite/mayarog_site/src/pages/NewsletterUnsubPage.vue"]]);export{T as default};
