"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2690],{6593:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(1644);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),s=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(o.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),d=s(n),m=r,h=d["".concat(o,".").concat(m)]||d[m]||p[m]||l;return n?a.createElement(h,i(i({ref:t},c),{},{components:n})):a.createElement(h,i({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=m;var u={};for(var o in t)hasOwnProperty.call(t,o)&&(u[o]=t[o]);u.originalType=e,u[d]="string"==typeof e?e:r,i[1]=u;for(var s=2;s<l;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7026:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(1644),r=n(156);const l={tabItem:"tabItem_hFhF"};function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l.tabItem,i),hidden:n},t)}},6663:(e,t,n)=>{n.d(t,{Z:()=>y});var a=n(373),r=n(1644),l=n(156),i=n(1476),u=n(2824),o=n(9643),s=n(7190),c=n(6985);function d(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function p(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??d(n);return function(e){const t=(0,s.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:n}=e;const a=(0,u.k6)(),l=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,o._X)(l),(0,r.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(a.location.search);t.set(l,e),a.replace({...a.location,search:t.toString()})}),[l,a])]}function k(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,l=p(e),[i,u]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:l}))),[o,s]=h({queryString:n,groupId:a}),[d,k]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,l]=(0,c.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&l.set(e)}),[n,l])]}({groupId:a}),g=(()=>{const e=o??d;return m({value:e,tabValues:l})?e:null})();(0,r.useLayoutEffect)((()=>{g&&u(g)}),[g]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);u(e),s(e),k(e)}),[s,k,l]),tabValues:l}}var g=n(8810);const f={tabList:"tabList_A6Ol",tabItem:"tabItem_djxK"};function b(e){let{className:t,block:n,selectedValue:u,selectValue:o,tabValues:s}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,i.o5)(),p=e=>{const t=e.currentTarget,n=c.indexOf(t),a=s[n].value;a!==u&&(d(t),o(a))},m=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},t)},s.map((e=>{let{value:t,label:n,attributes:i}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:u===t?0:-1,"aria-selected":u===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:p},i,{className:(0,l.Z)("tabs__item",f.tabItem,i?.className,{"tabs__item--active":u===t})}),n??t)})))}function N(e){let{lazy:t,children:n,selectedValue:a}=e;const l=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function v(e){const t=k(e);return r.createElement("div",{className:(0,l.Z)("tabs-container",f.tabList)},r.createElement(b,(0,a.Z)({},e,t)),r.createElement(N,(0,a.Z)({},e,t)))}function y(e){const t=(0,g.Z)();return r.createElement(v,(0,a.Z)({key:String(t)},e))}},9881:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>u,metadata:()=>s,toc:()=>d});var a=n(373),r=(n(1644),n(6593)),l=n(6663),i=n(7026);const u={id:"chunk",title:"Chunk Node",sidebar_label:"Chunk"},o=void 0,s={unversionedId:"node-reference/chunk",id:"node-reference/chunk",title:"Chunk Node",description:"Overview",source:"@site/docs/node-reference/chunk.mdx",sourceDirName:"node-reference",slug:"/node-reference/chunk",permalink:"/docs/node-reference/chunk",draft:!1,editUrl:"https://github.com/ironclad/rivet/tree/main/packages/docs/docs/node-reference/chunk.mdx",tags:[],version:"current",frontMatter:{id:"chunk",title:"Chunk Node",sidebar_label:"Chunk"},sidebar:"nodeReference",previous:{title:"All Nodes",permalink:"/docs/node-reference/all-nodes"},next:{title:"Extract with Regex",permalink:"/docs/node-reference/extract-with-regex"}},c={},d=[{value:"Overview",id:"overview",level:2},{value:"Inputs",id:"inputs",level:2},{value:"Outputs",id:"outputs",level:2},{value:"Editor Settings",id:"editor-settings",level:2},{value:"Example 1: Chunk a string into multiple chunks",id:"example-1-chunk-a-string-into-multiple-chunks",level:3},{value:"Error Handling",id:"error-handling",level:2},{value:"FAQ",id:"faq",level:2},{value:"See Also",id:"see-also",level:2}],p={toc:d},m="wrapper";function h(e){let{components:t,...u}=e;return(0,r.kt)(m,(0,a.Z)({},p,u,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"The Chunk node is used to split a string into an array of strings based on a token count."),(0,r.kt)("p",null,"Chunking a string is useful to avoid hitting token count limited in LLMs. You can split a string into multiple chunks and then feed each chunk into a separate Chat node, then combine the outputs of the chat nodes back together to effectively answer questions\nabout strings of text longer than the LLM can handle."),(0,r.kt)("p",null,"The Chunk node can also be used to truncate a string to a certain token count, from the beginning or the end, by using the ",(0,r.kt)("inlineCode",{parentName:"p"},"first")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"last")," outputs."),(0,r.kt)("p",null,"If an overlap percentage is specified, then the chunks will overlap by the specified percentage (relative to the max token count). For example, if the max token count is 100 and the overlap is 50%, then the chunks will overlap by 50 tokens. This can be useful so that context is not lost between chunks, but it may result in more total chunks."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Chunk Node Screenshot",src:n(8151).Z,width:"560",height:"512"})),(0,r.kt)(l.Z,{defaultValue:"inputs",values:[{label:"Inputs",value:"inputs"},{label:"Outputs",value:"outputs"},{label:"Editor Settings",value:"settings"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"inputs",mdxType:"TabItem"},(0,r.kt)("h2",{id:"inputs"},"Inputs"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Title"),(0,r.kt)("th",{parentName:"tr",align:null},"Data Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Default Value"),(0,r.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Input"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"The string that should be chunked."),(0,r.kt)("td",{parentName:"tr",align:null},"(Required)"),(0,r.kt)("td",{parentName:"tr",align:null},"None"))))),(0,r.kt)(i.Z,{value:"outputs",mdxType:"TabItem"},(0,r.kt)("h2",{id:"outputs"},"Outputs"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Title"),(0,r.kt)("th",{parentName:"tr",align:null},"Data Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Chunks"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string[]")),(0,r.kt)("td",{parentName:"tr",align:null},"The array of string chunks after splitting the string by the configured amount of tokens."),(0,r.kt)("td",{parentName:"tr",align:null},"May be an array of length 1 if the string did not need to be split.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"First"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"The first chunk in the chunks array."),(0,r.kt)("td",{parentName:"tr",align:null},"Useful for truncating a string to a specified token count.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Last"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"The last chunk in the chunks array."),(0,r.kt)("td",{parentName:"tr",align:null},"Useful for truncating a string from the start to a specified token count.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Indexes"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"number[]")),(0,r.kt)("td",{parentName:"tr",align:null},"A list of the indexes of the chunks."),(0,r.kt)("td",{parentName:"tr",align:null},"Useful when filtering or zipping the chunks array, and other more complex tasks.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Count"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"number")),(0,r.kt)("td",{parentName:"tr",align:null},"The number of chunks in the chunks array."),(0,r.kt)("td",{parentName:"tr",align:null},"Has many uses for more complex tasks."))))),(0,r.kt)(i.Z,{value:"settings",mdxType:"TabItem"},(0,r.kt)("h2",{id:"editor-settings"},"Editor Settings"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Setting"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Default Value"),(0,r.kt)("th",{parentName:"tr",align:null},"Use Input Toggle"),(0,r.kt)("th",{parentName:"tr",align:null},"Input Data Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Model"),(0,r.kt)("td",{parentName:"tr",align:null},"The model to use for tokenizing. Different LLMs use different tokenizers."),(0,r.kt)("td",{parentName:"tr",align:null},"gpt-3.5-turbo"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Max Tokens"),(0,r.kt)("td",{parentName:"tr",align:null},"The maximum number of tokens in the chunk."),(0,r.kt)("td",{parentName:"tr",align:null},"1024"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"number"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Overlap"),(0,r.kt)("td",{parentName:"tr",align:null},"The amount of overlap (0-100% as 0-1) between chunks, as a factor of the max token count."),(0,r.kt)("td",{parentName:"tr",align:null},"0"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"number"))))))),(0,r.kt)("h3",{id:"example-1-chunk-a-string-into-multiple-chunks"},"Example 1: Chunk a string into multiple chunks"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Create a text node with some long data, such as lorem ipsum."),(0,r.kt)("li",{parentName:"ol"},"Create a Chunk node and connect the text node to the input. Set the max tokens to something small like 100."),(0,r.kt)("li",{parentName:"ol"},"Run the graph. Note how the output of the chunk node has split the text (visually as new lines) into multiple chunks.")),(0,r.kt)("h2",{id:"error-handling"},"Error Handling"),(0,r.kt)("p",null,"The chunk node has no notable error handling behavior. If the input is not a string, then it will be coerced into a string."),(0,r.kt)("h2",{id:"faq"},"FAQ"),(0,r.kt)("h2",{id:"see-also"},"See Also"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/user-guide/splitting"},"Splitting")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/node-reference/chat"},"Chat Node")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/node-reference/text"},"Text Node")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/node-reference/trim-chat-messages"},"Trim Chat Messages Node"))))}h.isMDXComponent=!0},8151:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/chunk-node-10dc3985b02ce6f5938cd2f042533620.png"}}]);