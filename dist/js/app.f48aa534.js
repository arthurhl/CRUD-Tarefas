(function(t){function e(e){for(var n,i,d=e[0],s=e[1],l=e[2],u=0,p=[];u<d.length;u++)i=d[u],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&p.push(r[i][0]),r[i]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n]);c&&c(e);while(p.length)p.shift()();return a.push.apply(a,l||[]),o()}function o(){for(var t,e=0;e<a.length;e++){for(var o=a[e],n=!0,d=1;d<o.length;d++){var s=o[d];0!==r[s]&&(n=!1)}n&&(a.splice(e--,1),t=i(i.s=o[0]))}return t}var n={},r={app:0},a=[];function i(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,i),o.l=!0,o.exports}i.m=t,i.c=n,i.d=function(t,e,o){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(i.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(o,n,function(e){return t[e]}.bind(null,n));return o},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var d=window["webpackJsonp"]=window["webpackJsonp"]||[],s=d.push.bind(d);d.push=e,d=d.slice();for(var l=0;l<d.length;l++)e(d[l]);var c=s;a.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"3a62":function(t,e,o){},"56d7":function(t,e,o){"use strict";o.r(e);o("e260"),o("e6cf"),o("cca6"),o("a79d");var n=o("2b0e"),r=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"container-fluid"},[o("AddTodo",{on:{"add-todo":t.AddTodo}}),o("Todos",{attrs:{todos:t.todos},on:{"delete-todo":t.DeleteTodo}})],1)},a=[],i=o("2909"),d=(o("99af"),o("4de4"),function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"container-fluid"},[o("div",[o("br"),o("br"),o("h1",{staticClass:"text-center"},[t._v("CRUD de Tarefas")]),o("br"),o("br"),o("form",{on:{submit:t.AddTodo}},[o("div",{staticClass:"form-group"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Escreva sua tarefa",required:""},domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value)}}})]),t._m(0)])])])}),s=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"form-group"},[o("button",{staticClass:"btn btn-success"},[t._v("Adicionar Tarefa")])])}],l={name:"AddTodo",data:function(){return{title:""}},methods:{AddTodo:function(t){t.preventDefault();var e={id:Date.now(),title:this.title,completed:!1};this.$emit("add-todo",e),this.title=""}}},c=l,u=o("2877"),p=Object(u["a"])(c,d,s,!1,null,"3640f12d",null),f=p.exports,m=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"container-fluid"},t._l(t.todos,(function(e){return o("div",{key:e.id},[o("TodoItem",{attrs:{todos:t.todos,todo:e},on:{"delete-todo":function(o){return t.$emit("delete-todo",e.id)}}})],1)})),0)},v=[],h=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"container-fluid"},[o("div",{staticClass:"todo-item",class:{"is-complete":t.todo.completed}},[o("p",[o("input",{attrs:{type:"checkbox"},domProps:{checked:t.todo.completed},on:{change:t.MarkComplete}}),t._v(" "+t._s(t.todo.title)+" ")]),o("button",{staticClass:"btn btn-primary",on:{click:t.Update}},[t._v("Editar")]),o("button",{staticClass:"btn btn-danger",on:{click:function(e){return t.$emit("delete-todo",t.todo.id)}}},[t._v(" Deletar ")])]),this.flag?o("div",[o("form",{on:{submit:t.UpdateTodo}},[o("div",{staticClass:"form-group"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.UpdateTitle,expression:"UpdateTitle"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Novo título da tarefa",required:""},domProps:{value:t.UpdateTitle},on:{input:function(e){e.target.composing||(t.UpdateTitle=e.target.value)}}})]),t._m(0)])]):t._e()])},b=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"form-group"},[o("button",{staticClass:"btn btn-secondary"},[t._v("Salvar")])])}],g={name:"TodoItem",props:["todo","todos"],methods:{MarkComplete:function(){this.todo.completed=!this.todo.completed},Update:function(){this.flag=!this.flag},UpdateTodo:function(t){var e=this;t.preventDefault(),this.todos.filter((function(t){t.id==e.todo.id&&(t.title=e.UpdateTitle)})),this.flag=!1}},data:function(){return{flag:!1,UpdateTitle:""}}},T=g,_=Object(u["a"])(T,h,b,!1,null,"8f14ad14",null),y=_.exports,C={name:"Todos",props:["todos"],components:{TodoItem:y}},x=C,O=Object(u["a"])(x,m,v,!1,null,"7a1a1722",null),j=O.exports,w={name:"App",components:{AddTodo:f,Todos:j},data:function(){return{todos:[{id:"1",title:"Tarefa 1",completed:!1}]}},methods:{AddTodo:function(t){this.todos=[].concat(Object(i["a"])(this.todos),[t])},DeleteTodo:function(t){this.todos=this.todos.filter((function(e){return e.id!==t}))}}},U=w,k=Object(u["a"])(U,r,a,!1,null,null,null),P=k.exports;o("3a62");n["a"].config.productionTip=!1,new n["a"]({render:function(t){return t(P)}}).$mount("#app")}});
//# sourceMappingURL=app.f48aa534.js.map