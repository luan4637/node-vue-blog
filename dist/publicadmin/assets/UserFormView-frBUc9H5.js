import{m as p,_,r as b,o as c,c as u,a as s,w as r,v as l,e as a,f,g as h,N as v}from"./index-Bm8KrLBo.js";import{u as i}from"./UserStore-9XZxqjRL.js";const w={setup(){return{userStore:i(),userObject:{firstName:"",lastName:"",email:"",password:""}}},computed:{...p(i,["loading","user"])},methods:{getUser(e){this.userStore.getUser(e)},onSubmitForm(){this.userStore.submitUser(this.user)}},created(){this.$route.params.id?this.getUser(this.$route.params.id):this.user=Object.assign(this.user,this.userObject)}},N={class:"row mb-3"},U=s("label",{class:"col-2 col-form-label"},"First name",-1),S={class:"col-10"},g={class:"row mb-3"},$=s("label",{class:"col-2 col-form-label"},"Last name",-1),V={class:"col-10"},k={class:"row mb-3"},F=s("label",{class:"col-2 col-form-label"},"Email",-1),j={class:"col-10"},B={class:"row mb-3"},O=s("label",{class:"col-2 col-form-label"},"Password",-1),y={class:"col-10"},C={class:"btn-group"};function L(e,o,m,P,q,n){const d=b("RouterLink");return c(),u("form",null,[s("div",N,[U,s("p",S,[r(s("input",{"onUpdate:modelValue":o[0]||(o[0]=t=>e.user.firstName=t),class:"form-control"},null,512),[[l,e.user.firstName]])])]),s("div",g,[$,s("p",V,[r(s("input",{"onUpdate:modelValue":o[1]||(o[1]=t=>e.user.lastName=t),class:"form-control"},null,512),[[l,e.user.lastName]])])]),s("div",k,[F,s("p",j,[r(s("input",{"onUpdate:modelValue":o[2]||(o[2]=t=>e.user.email=t),class:"form-control"},null,512),[[l,e.user.email]])])]),s("div",B,[O,s("p",y,[r(s("input",{"onUpdate:modelValue":o[3]||(o[3]=t=>e.user.password=t),class:"form-control"},null,512),[[l,e.user.password]])])]),s("div",C,[a(d,{to:{name:"user"},class:"btn btn-secondary"},{default:f(()=>[h("Back")]),_:1}),s("button",{type:"button",class:"btn btn-primary pull-right",onClick:o[4]||(o[4]=(...t)=>n.onSubmitForm&&n.onSubmitForm(...t))},"Save")])])}const E=_(w,[["render",L]]),R={class:"container"},T={class:"row"},D={class:"col-2"},M={class:"col-10"},G={__name:"UserFormView",setup(e){return(o,m)=>(c(),u("div",null,[s("div",R,[s("div",T,[s("div",D,[a(v)]),s("div",M,[a(E)])])])]))}};export{G as default};
