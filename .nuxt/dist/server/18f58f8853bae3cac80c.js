exports.ids=[35],exports.modules={24:function(t){t.exports=JSON.parse('[{"id":1,"title":"SSR in Vue.js","summary":"Learn about SSR in Vue.js, and where Nuxt.js can make it all faster.","content":"<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>","author":"Jane Doe","published":"13:00 - 06/06/2017"},{"id":2,"title":"Introduction to SSR","summary":"Learn about SSR in JavaScript and how it can be super cool.","content":"<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>","author":"John Doe","published":"11:00 - 06/06/2017"}]')},58:function(t,e,o){"use strict";o.r(e);var n=o(24),r={validate:({params:t})=>/^\d+$/.test(t.id),asyncData({params:t},e){let o=n.find(e=>e.id===parseInt(t.id));o?e(null,{post:o}):e({statusCode:404,message:"Post not found"})},head(){return{title:this.post.title,meta:[{hid:"description",name:"description",content:this.post.summary}]}}},l=o(1),component=Object(l.a)(r,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"w-auto flex flex-row"},[t._ssrNode('<div class="w-1/3 ">',"</div>",[t._ssrNode('<div class=" bg-primary p-8 text-white">',"</div>",[t._ssrNode('<ul class=" px-8 ">',"</ul>",[t._ssrNode('<h3 class=" text-2xl">CONSULTANCY SERVICES</h3> <li>Health &amp; Safety Consultancy</li> <li>Fire Risk Assessment / Fire Safety Audit</li> <h3 class=" text-2xl pt-4">TRAINING SERVICES</h3> '),o("nuxt-link",{staticClass:" border-b border-bg-secondary text-white",attrs:{to:"/courses/coursecat"}},[t._v("Safety Management – IOSH Courses")]),t._ssrNode(" <li>Construction Safety Courses</li> <li>Safety Passport Schemes</li> <li>Workplace Safety Training Courses</li> <li>Confined Space, Equipment and Plant Training</li> <li>Working at Height Courses</li> <li>Sector Specific (Petroleum, Rail, Food, OMC)</li> <li>Environmental and Quality Management</li>")],2)])]),t._ssrNode(' <div class="w-2/3"><div class="bg-gray-200 py-8"><div><div class="py-6 px-6 "><h1 class=" text-2xl">'+t._ssrEscape(t._s(t.post.title))+"</h1> <div>"+t._s(t.post.content)+'</div></div> <div class=" py-6 px-6 h-auto "><div class=" border border-gray-400 lg:border lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal"><div class="mb-8"><p class="text-sm text-gray-600 flex items-center justify-end"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" class="fill-current text-gray-500 w-3 h-3 mr-2"><path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z"></path></svg>'+t._ssrEscape("\n                    "+t._s(t.post.title)+"\n                ")+'</p> <p class="text-gray-700 text-base">'+t._s(t.post.content)+'</p></div></div></div> <br> <h4 class=" leading-normal ">\n            by <strong>'+t._ssrEscape(t._s(t.post.author))+"</strong> at <strong>"+t._ssrEscape(t._s(t.post.published))+'</strong></h4> <div><h1 class=" text-2xl">'+t._ssrEscape(t._s(t.post.title))+'</h1> <p class="pt-2 pb-6">The course provides the essential knowledge and understanding of how to manage health &amp; safety responsibilities in the workplace.</p></div></div></div></div>')],2)},[],!1,null,null,"7221203c");e.default=component.exports}};
//# sourceMappingURL=18f58f8853bae3cac80c.js.map