import{u as n,m as p,_ as c,o as r,c as d,a as t,w as l,v as a,b as u}from"./index-RKOIKYQs.js";const _={setup(){return{postStore:n()}},computed:{...p(n,["loading","post"])},methods:{getPost(o){this.postStore.getPost(o)}},created(){this.getPost(this.$route.params.id)}},m={class:"form"},f=t("dt",null,"Title",-1),h=t("dt",null,"Content",-1);function $(o,e,i,S,V,g){return r(),d("div",m,[t("dl",null,[f,t("dd",null,[l(t("input",{"onUpdate:modelValue":e[0]||(e[0]=s=>o.post.title=s),class:"form-control"},null,512),[[a,o.post.title]])])]),t("dl",null,[h,t("dd",null,[l(t("textarea",{"onUpdate:modelValue":e[1]||(e[1]=s=>o.post.content=s),class:"form-control"},null,512),[[a,o.post.content]])])])])}const v=c(_,[["render",$]]),P={class:"container"},B={__name:"PostView",setup(o){return(e,i)=>(r(),d("div",null,[t("div",P,[u(v)])]))}};export{B as default};
