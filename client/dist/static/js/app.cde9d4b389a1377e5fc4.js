webpackJsonp([1],{"1B3o":function(t,e){},"Arp+":function(t,e,n){"use strict";var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("form",{on:{submit:function(e){e.preventDefault(),t.signup(e)}}},[n("div",{staticClass:"field"},[n("p",{staticClass:"control has-icons-left"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.username,expression:"username"}],staticClass:"input",attrs:{type:"username",placeholder:"Nom"},domProps:{value:t.username},on:{input:function(e){e.target.composing||(t.username=e.target.value)}}}),t._v(" "),t._m(0)])]),t._v(" "),n("div",{staticClass:"field"},[n("p",{staticClass:"control has-icons-left"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"input",attrs:{type:"email",placeholder:"Email"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}}),t._v(" "),t._m(1)])]),t._v(" "),n("div",{staticClass:"field"},[n("p",{staticClass:"control has-icons-left"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"input",attrs:{type:"password",placeholder:"Mot de passe"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}}),t._v(" "),t._m(2)])]),t._v(" "),n("button",{staticClass:"button is-info"},[t._v("Signup")])])])},i=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:"icon is-small is-left"},[n("i",{staticClass:"fa fa-smile-o "})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:"icon is-small is-left"},[n("i",{staticClass:"fa fa-envelope"})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:"icon is-small is-left"},[n("i",{staticClass:"fa fa-lock"})])}],a={render:s,staticRenderFns:i};e.a=a},Btuh:function(t,e,n){"use strict";function s(t){n("PEvh")}var i=n("xXn6"),a=n("pVo+"),r=n("VU/8"),o=s,c=r(i.a,a.a,!1,o,"data-v-4dfe3dc3",null);e.a=c.exports},CKjB:function(t,e,n){"use strict";var s=n("Pfph");e.a={name:"CreateNew",data:function(){return{name:null,image:null,ingredients:[null,null,null],instructions:[null,null,null],duration:null,tags:[null,null],err:null}},methods:{addIngredientInput:function(){this.ingredients.push(null)},addInstructionInput:function(){this.instructions.push(null)},addTagInput:function(){this.tags.push(null)},onFileChange:function(t){var e=t.target.files||t.dataTransfer.files;e.length&&this.createImage(e[0])},createImage:function(t){var e=(new Image,new FileReader),n=this;e.onload=function(t){n.image=t.target.result},e.readAsDataURL(t)},removeImage:function(t){this.image=""},postNewRecipe:function(){var t=this,e={name:this.name,image:this.image,ingredients:this.ingredients,instructions:this.instructions,duration:this.duration,tags:this.tags,user:this.$root.user};console.log(e),Object(s.a)(e).then(function(){t.$router.push("/")}).catch(function(e){t.err=!0})},removeIngredient:function(t){this.ingredients.splice(this.ingredients[t],1)},removeInstruction:function(t){this.instructions.splice(this.instructions[t],1)},removeTag:function(t){this.tags.splice(this.tags[t],1)}},created:function(){}}},GT6G:function(t,e,n){"use strict";var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("nav",{staticClass:"navbar is-transparent"},[t._m(0),t._v(" "),n("div",{staticClass:"navbar-menu",attrs:{id:"navMenuTransparentExample"}},[n("div",{staticClass:"navbar-end"},[t.$root.user?t._e():n("router-link",{staticClass:"navbar-item ",attrs:{to:"/login"}},[t._v("\n          👤 Login\n        ")]),t._v(" "),t.$root.user?t._e():n("router-link",{staticClass:"navbar-item ",attrs:{to:"/signup"}},[t._v("\n          📜 Signup\n        ")]),t._v(" "),t.$root.user?n("router-link",{staticClass:"navbar-item",attrs:{to:"/new"}},[t._v("\n          Ajouter une recette 🖊️\n        ")]):t._e(),t._v(" "),t.$root.user?n("router-link",{staticClass:"navbar-item",attrs:{to:"/favs"}},[t._v("\n          Mes favoris ❤️\n        ")]):t._e(),t._v(" "),t.$root.user?n("a",{staticClass:"navbar-item",attrs:{href:"#"},on:{click:function(e){e.preventDefault(),t.logout(e)}}},[t._v("\n          Logout ❎\n        ")]):t._e()],1)])]),t._v(" "),n("section",{staticClass:"section"},[n("div",{staticClass:"container"},[n("router-view")],1)])])},i=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"navbar-brand"},[n("a",{staticClass:"navbar-item",attrs:{href:"/"}},[n("p",[n("span",[t._v("🍳")])])]),t._v(" "),n("a",{staticClass:"navbar-item",attrs:{href:"/"}},[n("h1",[t._v("Cooky")])])])}],a={render:s,staticRenderFns:i};e.a=a},Gxpt:function(t,e,n){"use strict";var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",[t._v(" Mes favoris ")]),t._v(" "),n("div",{staticClass:"container"},t._l(t.likes,function(e,s){return n("div",{staticClass:"card"},[n("h2",[t._v(t._s(e.name))]),t._v(" "),n("router-link",{attrs:{to:"/recipes/"+e._id}},[e.image?n("img",{attrs:{src:e.image,alt:"recipe image"}}):t._e()])],1)}))])},i=[],a={render:s,staticRenderFns:i};e.a=a},M93x:function(t,e,n){"use strict";function s(t){n("Pmm0")}var i=n("xJD8"),a=n("GT6G"),r=n("VU/8"),o=s,c=r(i.a,a.a,!1,o,"data-v-59c95520",null);e.a=c.exports},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n("7+uW"),i=n("M93x"),a=n("YaEn"),r=n("Pfph"),o=n("MMSg"),c=n.n(o),u=n("doPI");n.n(u);s.a.use(c.a),s.a.config.productionTip=!1,new s.a({el:"#app",router:a.a,render:function(t){return t(i.a)},data:{user:null},created:function(){Object(r.b)(this.$root)}})},Olfh:function(t,e,n){"use strict";function s(t){n("w7RK")}var i=n("vwWU"),a=n("Gxpt"),r=n("VU/8"),o=s,c=r(i.a,a.a,!1,o,"data-v-1290517d",null);e.a=c.exports},PEvh:function(t,e){},PRy2:function(t,e,n){"use strict";var s=n("Pfph");e.a={data:function(){return{recipes:[]}},methods:{likeRecipe:function(t,e,n){var i=this;-1===this.recipes[n].likes.indexOf(e)?Object(s.e)(t,e).then(function(t){i.recipes[n].likes.push(e),i.recipes[n].isLiked=!0}):Object(s.e)(t,e).then(function(t){i.recipes[n].likes.pop(e),i.recipes[n].isLiked=!1})}},created:function(){var t=this;Object(s.d)().then(function(e){t.recipes=e,e.forEach(function(e){var n=t.$root.user._id;-1===e.likes.indexOf(n)?e.isLiked=!1:e.isLiked=!0})})}}},Pfph:function(t,e,n){"use strict";function s(t){var e=t.token,n=t.user;h.defaults.headers.common.Authorization="Bearer "+e,localStorage.setItem("token",e),localStorage.setItem("user",d()(n))}function i(t){var e=localStorage.getItem("token"),n=localStorage.getItem("user");if(e&&n){var i=JSON.parse(n);s({token:e,user:i}),t.user=i}}function a(t,e,n){return h.post("/login",{username:t,password:e}).then(function(t){return s(t.data),n.user=t.data.user,t.data})}function r(t){localStorage.removeItem("token"),t.user=null,delete _.a.defaults.headers.common.Authorization}function o(t){return h.post("/signup",t).then(function(t){return t.data})}function c(){return h.get("/recipes").then(function(t){return t.data})}function u(t){var e="/recipes/"+t;return h.get(e).then(function(t){return t.data})}function l(t,e){var n="/recipes/"+t+"/like";return h.post(n,{uID:e}).then(function(t){return t})}function v(t){return h.post("/recipes/new",t).then(function(t){return t})}function p(t){return h.get("/recipes/test/favs",t).then(function(t){return t.data})}e.b=i,e.f=a,e.g=r,e.i=o,e.d=c,e.c=u,e.e=l,e.a=v,e.h=p;var f=n("mvHQ"),d=n.n(f),m=n("mtWM"),_=n.n(m),h=_.a.create({baseURL:"/api"})},Pmm0:function(t,e){},QRL1:function(t,e,n){"use strict";var s=n("Pfph");e.a={data:function(){return{username:"",password:"",email:"",error:null}},methods:{signup:function(){var t=this;this.error=null,Object(s.i)({username:this.username,email:this.email,password:this.password}).then(function(){t.$router.push("/login")}).catch(function(e){t.error=e,console.error("Signup err",e)})}}}},TWJE:function(t,e,n){"use strict";var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"form"},[n("h1",[t._v("Nouvelle recette ➕")]),t._v(" "),t.image?n("div",[n("img",{attrs:{src:t.image}}),t._v(" "),n("button",{staticClass:"button is-warning",staticStyle:{width:"30%"},on:{click:t.removeImage}},[t._v("Remove image")])]):n("div",[n("div",{staticClass:"file"},[n("label",{staticClass:"file-label"},[n("input",{staticClass:"file-input",attrs:{type:"file",name:"resume"},on:{change:t.onFileChange}}),t._v(" "),t._m(0)])])]),t._v(" "),n("form",[n("label",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],attrs:{type:"text",name:"name",placeholder:"Nom de la recette"},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}})]),t._v(" "),t._l(t.ingredients,function(e,s){return n("label",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.ingredients[s],expression:"ingredients[index]"}],staticClass:"inline-input",attrs:{type:"text",name:"ingredients",placeholder:"Ingredient"},domProps:{value:t.ingredients[s]},on:{input:function(e){e.target.composing||t.$set(t.ingredients,s,e.target.value)}}}),t._v(" "),n("button",{staticClass:"destroy",on:{click:function(e){e.preventDefault(),t.removeIngredient(s)}}},[t._v("X")])])}),t._v(" "),n("button",{staticClass:"button is-info",attrs:{type:"button"},on:{click:function(e){e.preventDefault(),t.addIngredientInput(e)}}},[t._v(" Ajouter un ingrédient\n    ")]),t._v(" "),t._l(t.instructions,function(e,s){return n("label",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.instructions[s],expression:"instructions[index]"}],staticClass:"inline-input",attrs:{type:"text",name:"instructions",placeholder:"Instructions"},domProps:{value:t.instructions[s]},on:{input:function(e){e.target.composing||t.$set(t.instructions,s,e.target.value)}}}),t._v(" "),n("button",{staticClass:"destroy",on:{click:function(e){e.preventDefault(),t.removeInstruction(s)}}},[t._v("X")])])}),t._v(" "),n("button",{staticClass:"button is-info",attrs:{type:"button"},on:{click:function(e){e.preventDefault(),t.addInstructionInput(e)}}},[t._v("☝🏼  Ajouter une instruction\n    ")]),t._v(" "),n("label",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.duration,expression:"duration"}],attrs:{type:"text",name:"duration",placeholder:"⌚ Durée"},domProps:{value:t.duration},on:{input:function(e){e.target.composing||(t.duration=e.target.value)}}})]),t._v(" "),t._l(t.tags,function(e,s){return n("label",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.tags[s],expression:"tags[index]"}],staticClass:"inline-input",attrs:{type:"text",name:"tags",placeholder:" Tag"},domProps:{value:t.tags[s]},on:{input:function(e){e.target.composing||t.$set(t.tags,s,e.target.value)}}}),t._v(" "),n("button",{staticClass:"destroy",on:{click:function(e){e.preventDefault(),t.removeTag(s)}}},[t._v("X")])])}),t._v(" "),n("button",{staticClass:"button is-info",attrs:{type:"button"},on:{click:function(e){e.preventDefault(),t.addTagInput(e)}}},[t._v(" #️⃣  Ajouter un tag\n    ")])],2),t._v(" "),n("button",{staticClass:"button is-success",on:{click:t.postNewRecipe}},[t._v("Ajouter")]),t._v(" "),t._m(1),t._v(" "),t.err?n("div",[t._v("\n    Please fill out all fields\n  ")]):t._e()])},i=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:"file-cta"},[n("span",{staticClass:"file-icon"},[n("i",{staticClass:"fa fa-upload"})]),t._v(" "),n("span",{staticClass:"file-label"},[t._v("\n        Choisir une photo\n      ")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("form",{attrs:{action:"/",method:"get"}},[n("button",{staticClass:"button is-danger"},[t._v("Annuler")])])}],a={render:s,staticRenderFns:i};e.a=a},YaEn:function(t,e,n){"use strict";var s=n("7+uW"),i=n("/ocq"),a=n("wD/n"),r=n("fpQY"),o=n("tYer"),c=n("Btuh"),u=n("ihDc"),l=n("Olfh");s.a.use(i.a);var v=new i.a({mode:"history",routes:[{path:"/",component:a.a},{path:"/login",component:r.a,beforeEnter:function(t,e,n){v.app.$root.user?n("/"):n()}},{path:"/signup",component:o.a},{path:"/recipes/:id",component:c.a},{path:"/new",component:u.a},{path:"/favs",component:l.a}]});e.a=v},doPI:function(t,e){},fpQY:function(t,e,n){"use strict";function s(t){n("jv9g")}var i=n("nlR8"),a=n("xGOk"),r=n("VU/8"),o=s,c=r(i.a,a.a,!1,o,"data-v-403c28f4",null);e.a=c.exports},ihDc:function(t,e,n){"use strict";function s(t){n("uEzi")}var i=n("CKjB"),a=n("TWJE"),r=n("VU/8"),o=s,c=r(i.a,a.a,!1,o,"data-v-5884218f",null);e.a=c.exports},jv9g:function(t,e){},lNGL:function(t,e){},nlR8:function(t,e,n){"use strict";var s=n("Pfph");e.a={data:function(){return{username:"",password:""}},methods:{login:function(){var t=this;Object(s.f)(this.username,this.password,this.$root).then(function(e){t.$router.push("/")})}}}},"pVo+":function(t,e,n){"use strict";var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"card"},[n("h1",[t._v(t._s(t.recipe.name))]),t._v(" "),n("h2",[t._v(t._s(t.recipe.likes.length)+" ❤️   -  "+t._s(t.recipe.duration)+" ⏲️")]),t._v(" "),n("div",{staticClass:"tags"},t._l(t.recipe.tags,function(e){return n("p",[t._v(t._s(e))])})),t._v(" "),n("div",{staticClass:"content"},[t.recipe.image?n("img",{attrs:{src:t.recipe.image,alt:"recipe pic"}}):t._e(),t._v(" "),n("div",{staticClass:"ing"},[n("ul",t._l(t.recipe.ingredients,function(e){return n("li",{attrs:{ingredient:e}},[t._v(t._s(e))])}))])]),t._v(" "),n("ol",t._l(t.recipe.instructions,function(e){return n("li",{attrs:{instruction:e}},[t._v(t._s(e))])}))])},i=[],a={render:s,staticRenderFns:i};e.a=a},tYer:function(t,e,n){"use strict";function s(t){n("1B3o")}var i=n("QRL1"),a=n("Arp+"),r=n("VU/8"),o=s,c=r(i.a,a.a,!1,o,"data-v-13a2e29d",null);e.a=c.exports},uEzi:function(t,e){},ul59:function(t,e,n){"use strict";var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._m(0),t._v(" "),n("div",{staticClass:"container"},t._l(t.recipes,function(e,s){return n("div",{staticClass:"card"},[n("h2",[t._v(t._s(e.name))]),t._v(" "),n("router-link",{attrs:{to:"/recipes/"+e._id}},[e.image?n("img",{attrs:{src:e.image,alt:"recipe pic"}}):t._e()]),t._v(" "),n("div",{staticClass:"likes"},[n("button",{class:{liked:e.isLiked},on:{click:function(n){t.likeRecipe(e._id,t.$root.user._id,s)}}},[t._v("\n        "+t._s(e.likes.length)+" ❤️")])])],1)}))])},i=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h1",[t._v("👨🏻‍🍳 Bienvenue sur "),n("span",[t._v("Cooky")]),t._v(" 👩🏼‍🍳")])}],a={render:s,staticRenderFns:i};e.a=a},vwWU:function(t,e,n){"use strict";var s=n("Pfph");e.a={data:function(){return{likes:[]}},created:function(){var t=this;Object(s.h)().then(function(e){return t.likes=e})}}},w7RK:function(t,e){},"wD/n":function(t,e,n){"use strict";function s(t){n("lNGL")}var i=n("PRy2"),a=n("ul59"),r=n("VU/8"),o=s,c=r(i.a,a.a,!1,o,"data-v-926dfbb8",null);e.a=c.exports},xGOk:function(t,e,n){"use strict";var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("form",{on:{submit:function(e){e.preventDefault(),t.login(e)}}},[n("div",{staticClass:"field"},[n("p",{staticClass:"control has-icons-left"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.username,expression:"username"}],staticClass:"input",attrs:{type:"username",placeholder:"Nom"},domProps:{value:t.username},on:{input:function(e){e.target.composing||(t.username=e.target.value)}}}),t._v(" "),t._m(0)])]),t._v(" "),n("div",{staticClass:"field"},[n("p",{staticClass:"control has-icons-left"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"input",attrs:{type:"password",placeholder:"Mot de passe"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}}),t._v(" "),t._m(1)])]),t._v(" "),n("button",{staticClass:"button is-info"},[t._v("Login")])]),t._v(" "),n("router-link",{attrs:{to:"/signup"}},[t._v("\n    Pas de compte? Créez-en un ici\n  ")])],1)},i=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:"icon is-small is-left"},[n("i",{staticClass:"fa fa-smile-o "})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:"icon is-small is-left"},[n("i",{staticClass:"fa fa-lock"})])}],a={render:s,staticRenderFns:i};e.a=a},xJD8:function(t,e,n){"use strict";var s=n("Pfph");e.a={name:"app",methods:{logout:function(){Object(s.g)(this.$root),this.$router.push("/")}}}},xXn6:function(t,e,n){"use strict";var s=n("Pfph");e.a={name:"RecipeCard",data:function(){return{recipe:Object}},methods:{getRecipe:function(){var t=this;Object(s.c)(this.$route.params.id).then(function(e){t.recipe=e})}},created:function(){this.getRecipe()}}}},["NHnr"]);
//# sourceMappingURL=app.cde9d4b389a1377e5fc4.js.map