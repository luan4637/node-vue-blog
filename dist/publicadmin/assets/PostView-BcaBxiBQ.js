import{u as n,m as p,_ as d,o as r,c as i,a as t,w as a,v as l,b as u}from"./index-DVxQJmxD.js";const m={setup(){return{postStore:n()}},computed:{...p(n,["loading","post"])},methods:{getPost(s){this.postStore.getPost(s)}},created(){this.getPost(this.$route.params.id)}},_={class:"form"},b={class:"mb-3"},f=t("label",{class:"form-label"},"Title",-1),h={class:"mb-3"},v=t("label",{class:"form-label"},"Content",-1),$=t("button",{type:"submit",class:"btn btn-primary"},"Submit",-1);function P(s,o,c,g,w,B){return r(),i("div",_,[t("div",b,[f,t("p",null,[a(t("input",{"onUpdate:modelValue":o[0]||(o[0]=e=>s.post.title=e),class:"form-control"},null,512),[[l,s.post.title]])])]),t("div",h,[v,t("p",null,[a(t("textarea",{"onUpdate:modelValue":o[1]||(o[1]=e=>s.post.content=e),class:"form-control"},null,512),[[l,s.post.content]])])]),$])}const S=d(m,[["render",P]]),V={class:"container"},x={__name:"PostView",setup(s){return(o,c)=>(r(),i("div",null,[t("div",V,[u(S)])]))}};export{x as default};
