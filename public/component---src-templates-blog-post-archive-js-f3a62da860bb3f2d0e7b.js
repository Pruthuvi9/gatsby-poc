"use strict";(self.webpackChunkgatsby_starter_wordpress_blog=self.webpackChunkgatsby_starter_wordpress_blog||[]).push([[701],{8771:function(e,t,l){var r=l(7294),a=l(1883);t.Z=()=>{var e;const{author:t}=(0,a.useStaticQuery)("104267996"),l=null==t||null===(e=t.avatar)||void 0===e?void 0:e.url;return r.createElement("div",{className:"bio"},l&&r.createElement("img",{alt:(null==t?void 0:t.firstName)||"",className:"bio-avatar",src:l}),(null==t?void 0:t.firstName)&&r.createElement("p",null,"Written by ",r.createElement("strong",null,t.firstName)," ",(null==t?void 0:t.description)||null," ",(null==t?void 0:t.twitter)&&r.createElement("a",{href:"https://twitter.com/"+((null==t?void 0:t.twitter)||"")},"You should follow them on Twitter")))}},9644:function(e,t,l){l.r(t);var r=l(7294),a=l(1883),n=l(5935),o=l(8771),s=l(7061),i=l(8183);t.default=e=>{let{data:t,pageContext:{nextPagePath:l,previousPagePath:c}}=e;const m=t.allWpPost.nodes;return m.length?r.createElement(s.Z,{isHomePage:!0},r.createElement(i.Z,{title:"All posts"}),r.createElement(o.Z,null),r.createElement("ol",{style:{listStyle:"none"}},m.map((e=>{const t=e.title;return r.createElement("li",{key:e.uri},r.createElement("article",{className:"post-list-item",itemScope:!0,itemType:"http://schema.org/Article"},r.createElement("header",null,r.createElement("h2",null,r.createElement(a.Link,{to:e.uri,itemProp:"url"},r.createElement("span",{itemProp:"headline"},(0,n.ZP)(t)))),r.createElement("small",null,e.date)),r.createElement("section",{itemProp:"description"},(0,n.ZP)(e.excerpt))))}))),c&&r.createElement(r.Fragment,null,r.createElement(a.Link,{to:c},"Previous page"),r.createElement("br",null)),l&&r.createElement(a.Link,{to:l},"Next page")):r.createElement(s.Z,{isHomePage:!0},r.createElement(i.Z,{title:"All posts"}),r.createElement(o.Z,null),r.createElement("p",null,"No blog posts found. Add posts to your WordPress site and they'll appear here!"))}}}]);
//# sourceMappingURL=component---src-templates-blog-post-archive-js-f3a62da860bb3f2d0e7b.js.map