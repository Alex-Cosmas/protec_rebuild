exports.ids=[37],exports.modules={24:function(e){e.exports=JSON.parse('[{"id":1,"title":"Importance of Health and Safety training","summary":"Thousands of people are killed each year at work. And over a million are injured and more than that still suffer from illnesses caused by or made worse by their work.","content":"<p>Preventing accidents and ill health caused by work should be a key priority for everyone at work.</p><p>Education and training are important tools for informing workers and managers about workplace hazards and controls so they can work more safely and be more productive.</p><p>You may not have all the resources but is starts with awareness. This ensures that:</p><ul><li>Employees are legally compliant with the companies Health and Safety Procedures</li><li>The number of injuries, illnesses, death, property damage, workers absenteeism and compensation are effectively reduced</li><li>Employees themselves will help promote proper safety procedures<br />Effective training will encourage self-evaluation</li></ul>","author":"Protec East Africa","published":"06/03/2017","category":"Safety","urlImage":"https://weareproteceastafrica.com/admin/blog_images/image002.jpg"}]')},53:function(e,t,r){"use strict";r.r(t);var o=r(24),l={validate:({params:e})=>/^\d+$/.test(e.id),asyncData({params:e},t){let r=o.find(t=>t.id===parseInt(e.id));r?t(null,{post:r}):t({statusCode:404,message:"Post not found"})},head(){return{title:this.post.title,meta:[{hid:"description",name:"description",content:this.post.summary}]}}},n=r(1),component=Object(n.a)(l,function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{staticClass:"w-auto flex flex-row"},[e._ssrNode('<div class="md: w-full "><div class="bg-gray-200 py-8 "><div class=" mx-24"><div class="py-6 px-6 "><h1 class=" text-2xl">'+e._ssrEscape(e._s(e.post.title))+'</h1> <br> <h4 class=" leading-normal ">\n                by <strong>'+e._ssrEscape(e._s(e.post.author))+"</strong> at <strong>"+e._ssrEscape(e._s(e.post.published))+"</strong></h4> <br> <div>"+e._ssrEscape(e._s(e.post.urlImage))+'</div></div> <div class=" py-6 px-6 h-auto "><div class=" border border-gray-400 lg:border lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal"><div class="mb-8"><p class="text-sm text-gray-600 flex items-center justify-end"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" class="fill-current text-gray-500 w-3 h-3 mr-2"><path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z"></path></svg>'+e._ssrEscape("\n                        "+e._s(e.post.category)+"\n                    ")+'</p> <p class="text-gray-700 text-base">'+e._s(e.post.content)+"</p></div></div></div></div></div></div>")])},[],!1,null,null,"7221203c");t.default=component.exports}};
//# sourceMappingURL=ada30547dec81b962917.js.map