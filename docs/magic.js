"use strict";var b=["to","action","text"],c=["href","nofollow","noreferrer"],d=["collapse","items","text","url"],e=["id","width","height","class","style","host"];function f(a){return s(a)||g(a)||p(a)||o()}function g(a){if("undefined"!=typeof Symbol&&null!=a[Symbol.iterator]||null!=a["@@iterator"])return Array.from(a)}function h(a,b){if(null==a)return{};var c,d,e=j(a,b);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(d=0;d<f.length;d++)c=f[d],0<=b.indexOf(c)||Object.prototype.propertyIsEnumerable.call(a,c)&&(e[c]=a[c])}return e}function j(a,b){if(null==a)return{};var c,d,e={},f=Object.keys(a);for(d=0;d<f.length;d++)c=f[d],0<=b.indexOf(c)||(e[c]=a[c]);return e}function k(a,b){var c=Object.keys(a);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(a);b&&(d=d.filter(function(b){return Object.getOwnPropertyDescriptor(a,b).enumerable})),c.push.apply(c,d)}return c}function l(a){for(var b,c=1;c<arguments.length;c++)b=null==arguments[c]?{}:arguments[c],c%2?k(Object(b),!0).forEach(function(c){m(a,c,b[c])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(b)):k(Object(b)).forEach(function(c){Object.defineProperty(a,c,Object.getOwnPropertyDescriptor(b,c))});return a}function m(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}function n(a,b){return s(a)||r(a,b)||p(a,b)||o()}function o(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function p(a,b){if(a){if("string"==typeof a)return q(a,b);var c=Object.prototype.toString.call(a).slice(8,-1);return"Object"===c&&a.constructor&&(c=a.constructor.name),"Map"===c||"Set"===c?Array.from(a):"Arguments"===c||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c)?q(a,b):void 0}}function q(a,b){(null==b||b>a.length)&&(b=a.length);for(var c=0,d=Array(b);c<b;c++)d[c]=a[c];return d}function r(a,b){var c=null==a?null:"undefined"!=typeof Symbol&&a[Symbol.iterator]||a["@@iterator"];if(null!=c){var d,e,f=[],g=!0,h=!1;try{for(c=c.call(a);!(g=(d=c.next()).done)&&(f.push(d.value),!(b&&f.length===b));g=!0);}catch(a){h=!0,e=a}finally{try{g||null==c["return"]||c["return"]()}finally{if(h)throw e}}return f}}function s(a){if(Array.isArray(a))return a}function t(a){"@babel/helpers - typeof";return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},t(a)}(function(){var i=function(){var a=2,b=3,c={},d=[],e=d.map,f=Array.isArray,g="undefined"==typeof requestAnimationFrame?setTimeout:requestAnimationFrame,h=function(a){var b="";if("string"==typeof a)return a;if(f(a)&&0<a.length)for(var c,d=0;d<a.length;d++)""!==(c=h(a[d]))&&(b+=(b&&" ")+c);else for(var d in a)a[d]&&(b+=(b&&" ")+d);return b},j=function(c,a){var b={};for(var d in c)b[d]=c[d];for(var d in a)b[d]=a[d];return b},k=function(a){return a.reduce(function(a,b){return a.concat(b&&!0!==b?"function"==typeof b[0]?[b]:k(b):0)},d)},l=function(c,a){return f(c)&&f(a)&&c[0]===a[0]&&"function"==typeof c[0]},m=function(c,a){if(c!==a)for(var b in j(c,a)){if(c[b]!==a[b]&&!l(c[b],a[b]))return!0;a[b]=c[b]}},n=function(a,b,c){for(var d,e,f=0,g=[];f<a.length||f<b.length;f++)d=a[f],e=b[f],g.push(e?!d||e[0]!==d[0]||m(e[1],d[1])?[e[0],e[1],e[0](c,e[1]),d&&d[2]()]:d:d&&d[2]());return g},o=function(a,b,c,d,e,f){if("key"===b);else if("style"===b)for(var g in j(c,d))c=null==d||null==d[g]?"":d[g],"-"===g[0]?a[b].setProperty(g,c):a[b][g]=c;else"o"===b[0]&&"n"===b[1]?((a.actions||(a.actions={}))[b=b.slice(2)]=d)?!c&&a.addEventListener(b,e):a.removeEventListener(b,e):!f&&"list"!==b&&b in a?a[b]=null==d?"":d:null!=d&&!1!==d&&("class"!==b||(d=h(d)))?a.setAttribute(b,d):a.removeAttribute(b)},p=function(a,c,d){var e=a.props,f=a.type===b?document.createTextNode(a.name):(d=d||"svg"===a.name)?document.createElementNS("http://www.w3.org/2000/svg",a.name,{is:e.is}):document.createElement(a.name,{is:e.is});for(var g in e)o(f,g,null,e[g],c,d);for(var h=0,j=a.children.length;h<j;h++)f.appendChild(p(a.children[h]=v(a.children[h]),c,d));return a.node=f},q=function(a){return null==a?null:a.key},r=function(a,c,d,e,f,g){if(d===e);else if(null!=d&&d.type===b&&e.type===b)d.name!==e.name&&(c.nodeValue=e.name);else if(null==d||d.name!==e.name)c=a.insertBefore(p(e=v(e),f,g),c),null!=d&&a.removeChild(d.node);else{var h,k,l,m,n=d.props,s=e.props,t=d.children,u=e.children,w=0,x=0,y=t.length-1,z=u.length-1;for(var A in g=g||"svg"===e.name,j(n,s))("value"===A||"selected"===A||"checked"===A?c[A]:n[A])!==s[A]&&o(c,A,n[A],s[A],f,g);for(;x<=z&&w<=y&&null!=(l=q(t[w]))&&l===q(u[x]);)r(c,t[w].node,t[w],u[x]=v(u[x++],t[w++]),f,g);for(;x<=z&&w<=y&&null!=(l=q(t[y]))&&l===q(u[z]);)r(c,t[y].node,t[y],u[z]=v(u[z--],t[y--]),f,g);if(w>y)for(;x<=z;)c.insertBefore(p(u[x]=v(u[x++]),f,g),(k=t[w])&&k.node);else if(x>z)for(;w<=y;)c.removeChild(t[w++].node);else{for(var A=w,B={},C={};A<=y;A++)null!=(l=t[A].key)&&(B[l]=t[A]);for(;x<=z;){if(l=q(k=t[w]),m=q(u[x]=v(u[x],k)),C[l]||null!=m&&m===q(t[w+1])){null==l&&c.removeChild(k.node),w++;continue}null==m||1===d.type?(null==l&&(r(c,k&&k.node,k,u[x],f,g),x++),w++):(l===m?(r(c,k.node,k,u[x],f,g),C[m]=!0,w++):null==(h=B[m])?r(c,k&&k.node,null,u[x],f,g):(r(c,c.insertBefore(h.node,k&&k.node),h,u[x],f,g),C[m]=!0),x++)}for(;w<=y;)null==q(k=t[w++])&&c.removeChild(k.node);for(var A in B)null==C[A]&&c.removeChild(B[A].node)}}return e.node=c},s=function(c,a){for(var b in c)if(c[b]!==a[b])return!0;for(var b in a)if(c[b]!==a[b])return!0},u=function(a){return"object"===t(a)?a:x(a)},v=function(b,c){return b.type===a?((!c||!c.lazy||s(c.lazy,b.lazy))&&((c=u(b.lazy.view(b.lazy))).lazy=b.lazy),c):b},w=function(a,b,c,d,e,f){return{name:a,props:b,children:c,node:d,type:f,key:e}},x=function(a,e){return w(a,c,d,e,void 0,b)},y=function(a){return a.nodeType===b?x(a.nodeValue,a):w(a.nodeName.toLowerCase(),c,e.call(a.childNodes,y),a,void 0,1)};return{h:function h(a,b){for(var d,e=[],g=[],h=arguments.length;2<h--;)e.push(arguments[h]);for(;0<e.length;)if(f(d=e.pop()))for(var h=d.length;0<h--;)e.push(d[h]);else if(!1===d||!0===d||null==d);else g.push(u(d));return b=b||c,"function"==typeof a?a(b,g):w(a,b,g,void 0,b.key)},app:function app(a){var b={},c=!1,d=a.view,e=a.node,h=e&&y(e),i=a.subscriptions,j=[],l=function(a){q(this.actions[a.type],a)},m=function(a){return b!==a&&(b=a,i&&(j=n(j,k([i(b)]),q)),d&&!c&&g(s,c=!0)),b},o=a.middleware,p=void 0===o?function(a){return a}:o,q=p(function(a,c){return"function"==typeof a?q(a(b,c)):f(a)?"function"==typeof a[0]||f(a[0])?q(a[0],"function"==typeof a[1]?a[1](c):a[1]):(k(a.slice(1)).map(function(a){a&&a[0](q,a[1])},m(a[0])),b):m(a)}),s=function(){c=!1,e=r(e.parentNode,e,h,h=u(d(b)),l)};q(a.init)}}}(),j=i.h,k=i.app,m=function(a){return function(){var b=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{},d=1<arguments.length?arguments[1]:void 0,e=function(a){for(var b=arguments.length,c=Array(1<b?b-1:0),d=1;d<b;d++)c[d-1]=arguments[d];return c.some(function(b){return b===t(a)})};if(e(d,"undefined")){if(b.props)return j(a,{},[b]);e(b,"string","number","function")||Array.isArray(b)?(d=b,b={}):e(b.View,"function")&&(d=b.View,b={})}return j(a,b,d)}},o=m("a"),a=m("button"),q=m("circle"),r=m("code"),s=m("div"),u=m("footer"),v=m("g"),g=m("h1"),w=m("h2"),x=m("h3"),y=m("h4"),z=m("header"),A=m("iframe"),B=m("img"),C=m("input"),D=m("li"),E=m("link"),F=m("main"),G=m("meta"),H=m("nav"),I=m("p"),p=m("path"),J=m("pre"),K=m("script"),L=m("span"),M=m("svg"),N=m("title"),O=m("ul"),P=m("view"),Q={listenPopState:function listenPopState(a,b){var c=function(c){return a(b,c)};return addEventListener("popstate",c),function(){return removeEventListener("popstate",c)}}},R=function(a){var b,c=a.blog,d=a.link,e=a.month,f=a.url,g=a.year,h=Object.entries(c[g][e]),i=[e];return d?b="".concat(d).concat(e,"/"):i.push(" - ",g),[x(b?Z({to:b},i):i),h.map(function(c){var d=n(c,2),e=d[0],f=d[1];return f.map(function(c){return S(l(l(l({},a),c.state),{},{name:c.name,link:b,day:e}))})})]},S=function(a){return s([y([a.day,"-",a.month,"-",a.year," - ",Z({to:a.name},a.title)]),I(a.description)])},T=function(){return s({class:"Credits"},["made with a few bits of ",Z({to:"https://magic.github.io/",target:"_blank",rel:"noopener"},"magic")])},U=function(){var a=1<arguments.length&&arguments[1]!==void 0?arguments[1]:[];return u({class:"Footer"},[s({class:"Container"},[T(),a])])},V=function(a){if("string"==typeof a)a={project:a};else if(!a.project)return;var b=a,c=b.branch,d=void 0===c?"master":c,e=b.host,f=void 0===e?"github":e,g=a,h=g.project,i=void 0!==h&&h,j="",k=i;i.startsWith("@")?(j="@",i=i.substr(1)):k=i.split("/")[1];var l=[["npm",function(){var a=0<arguments.length&&arguments[0]!==void 0?arguments[0]:i;return a&&{to:"https://www.npmjs.com/package/".concat(k),src:"https://img.shields.io/npm/v/".concat(j).concat(a,"?color=blue")}}],["node",function(){var a=0<arguments.length&&arguments[0]!==void 0?arguments[0]:i;return a&&{src:"https://img.shields.io/node/v/".concat(j).concat(a,"?color=blue")}}],["license",function(){var a=0<arguments.length&&arguments[0]!==void 0?arguments[0]:i;return a&&{src:"https://img.shields.io/npm/l/".concat(j).concat(a,"?color=blue")}}],["travis",function(){var a=0<arguments.length&&arguments[0]!==void 0?arguments[0]:i;return a&&{to:"https://travis-ci.com/".concat(a),src:"https://img.shields.io/travis/com/".concat(a,"/").concat(d)}}],["appveyor",function(){var a=0<arguments.length&&arguments[0]!==void 0?arguments[0]:i;if(a){var b=a.split("/"),c=n(b,2),e=c[0],f=c[1];return e=e.replace(/-/g,""),{to:"https://ci.appveyor.com/project/".concat(e,"/").concat(f,"/branch/").concat(d),src:"https://img.shields.io/appveyor/ci/".concat(e,"/").concat(f,"/").concat(d,".svg")}}}],["coveralls",function(){var a=0<arguments.length&&arguments[0]!==void 0?arguments[0]:i;return{to:"https://coveralls.io/".concat(f,"/").concat(a),src:"https://img.shields.io/coveralls/".concat(f,"/").concat(a,"/").concat(d,".svg")}}],["snyk",function(){var a=0<arguments.length&&arguments[0]!==void 0?arguments[0]:i;return a&&{to:"https://snyk.io/test/".concat(f,"/").concat(a),src:"https://img.shields.io/snyk/vulnerabilities/github/".concat(a,".svg")}}]].map(function(b){var c=n(b,2),d=c[0],e=c[1];return e(a[d])});return l.length?O({class:"GitBadges"},l.map(function(a){var b=a.to,c=a.src;if(c){var d=X({src:c,height:"23"});return b?D(Z({to:b},d)):D(d)}})):void 0},W=function(){var a=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{},b=1<arguments.length&&arguments[1]!==void 0?arguments[1]:[],c=a.logo,d=a.menu,e=a.logotext,f=a.root,g=a.theme,h=a.hash,i=a.url;return c||d||e?z({class:"Header"},[$({root:f}),e&&I(e),d&&_({url:i,hash:h,root:f,menu:d}),b]):void 0},X=function(a){if("string"==typeof a&&(a={src:a}),!!a.src)return a.alt||(a.title?a.alt=a.title:(a.role="presentation",a.alt="",a.loading=a.loading||"lazy")),B(a)},Y=function(){0<arguments.length&&arguments[0]!==void 0?arguments[0]:{};return M({class:"LightSwitch icon",onclick:ga.changeTheme,height:25,width:25,viewBox:"0 0 352 460"},[p({d:"M149 48C96 48 48 95 47 143c-1 13 19 17 20 0-1-35 48-75 83-75 15 0 12-22-1-20z"}),p({d:"M176 0C74 0 0 83 0 176c9 91 84 118 100 204h20c-16-92-97-138-100-204C22 70 105 21 176 20zM95 400c2 68 20 48 40 60h82c20-12 38 8 40-60z"}),p({d:"M175 0c102 0 177 83 177 176-9 91-86 118-102 204h-20c16-92 99-138 102-204-2-106-86-155-157-156z"})])},Z=function(a,d){var e=a.to,f=a.action,g=void 0===f?ga.go:f,i=a.text,j=h(a,b),k=j.href,l=j.nofollow,m=j.noreferrer,n=h(j,c);e=e||k||"",n.href=e,i&&d?i=[i,d]:!i&&(d?i=d:i=e);var p="/"===e[0]||"#"===e[0];return p?n.onclick=[g,fa.preventDefault]:(n.target="_blank",n.rel="noopener",l&&(n.rel+=" nofollow"),m&&(n.rel+=" noreferrer")),o(n,i)},$=function(a){var b=a.root;return Z({to:b,class:"Logo"},[M({viewBox:"0 0 512 444"},[p({d:"M512 444L256 0 0 444z",fill:"#663695"}),q({cx:"256",cy:"294",r:"130",fill:"#fff"}),q({cx:"256",cy:"281",r:"40",fill:"#663695"}),p({d:"M256 350v44m24-44l1 13c1 27 29 27 29-7m-160-72s46-47 106-47c59 0 106 47 106 47s-47 43-106 43c-60 0-106-43-106-43zm65-75a134 134 0 0189 2",class:"stroke"}),p({d:"M256 81v53m184 270l-43-29M72 404l43-29",class:"stroke white"})])])},_=function(){var a=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},b=a.collapse,c=a.menu,d=a.hash,e=a["class"],f=void 0===e?"":e,g=a.url;return f.includes("Menu")||(f="Menu ".concat(f).trim()),d&&!g.endsWith(d)&&(g+="#".concat(d)),H({className:f},O(c.map(function(a){return aa(l(l({},a),{},{url:g,collapse:void 0===b||b}))})))},aa=function(a){var b=a.collapse,c=a.items,e=void 0===c?[]:c,f=a.text,g=a.url,i=h(a,d),j={class:{}},k=i.to;k===g&&(j["class"].active=!0);var m=[],n=!b||g.includes(k);return n&&e.length&&(m=O(e.map(function(a){return aa(l({url:g,collapse:b},a))}))),D(j,[k?Z(i,f):L(i,f),m])},ba=function(a){var b=a.nospy,c=void 0===b?{}:b,d=a.cookies,e=void 0===d?[]:d,f=c.show,g=c.title,h=void 0===g?"Privacy Notice":g,i=c.content,j=void 0===i?"This app neither saves, collects, nor shares any data about you.":i,k=c.buttonText,l=void 0===k?"Awesome!":k;return f?s({class:"NoSpy"},[s({class:"Container"},[h&&x(h),j&&I(j),C({onclick:ga.nospy.toggle,value:l,type:"button"})])]):s({class:"NoSpy"},M({class:"icon",onclick:ga.nospy.toggle,width:"25",height:"25",viewBox:"0 0 512 512"},[v([p({d:"\nM507,208c-1-7-7-12-14-13c-7-1-13,3-16,9\nc-5,11-16,19-29,19c-14,0-26-10-30-23c-2-8-11-13-19-11\nC393,191,389,192,384,192c-35-0-64-29-64-64c0-5,1-9,2-14\nc2-8-3-16-11-19C297,90,288,78,288,64c-0-13,8-24,19-29\nc6-3,10-9,9-16c-1-7-6-12-13-14C288,2,272,0,256,0\nC115,0,0,115,0,256c0,141,115,256,256,256c141-0,256-115,256-256\nC512,239,510,224,507,209z M414,414C374,455,318,480,256,480s-118-25-158-66\nC57,374,32,318,32,256S57,138,98,98C138,57,194,32,256,32c3,0,6,0,9,0\nC259,42,256,52,256,64c0,24,13,44,33,55C288,122,288,125,288,128\nc0,53,43,96,96,96c3,0,6-0,8-0C403,242,424,256,448,256\nc11-0,22-3,32-8c0,3,0,6,0,9C480,318,455,374,414,414z\n"}),q({cx:"192",cy:"128",r:"32"}),q({cx:"128",cy:"256",r:"32"}),q({cx:"288",cy:"384",r:"32"}),q({cx:"272",cy:"272",r:"16"}),q({cx:"400",cy:"336",r:"16"}),q({cx:"176",cy:"368",r:"16"})])]))},ca=function(a,b){var c=a.page,d=a.state,e={id:"Magic",class:d.pageClass};return F(e,s({class:{Wrapper:!0}},[W(d),s({class:"Page",id:"page"},c(d)),U(d),b]))},da=function(b,c){"string"==typeof b?b={content:b}:c?b=l({content:c},b):Array.isArray(b)&&(b={content:b.join("")});var d=b,f=d.content,g=d.lines,h=!(void 0!==g)||g;return s({class:{Pre:!0,lines:!h||"false"!==h}},[s({class:"menu"},[a({onclick:[ga.pre.clip,function(a){return{e:a,content:f}}]},"copy")]),J(f.trim().split("\n").map(da.Line))])};da.Comment=function(a){return L({class:"comment"},a)},da.Line=function(a){return r({class:"line"},da.Words(a))},da.Word=function(a){if(!a)return"";var b=a.includes("://"),c=a.startsWith("mailto:")||a.includes("@")&&a.includes(".");if(b||c)return Z({to:a,text:a});var d="";return"state"===a?d="state":"actions"===a?d="actions":fa.pre.keywords.includes(a)?d="keyword":fa.pre.builtins.includes(a)?d="builtin":fa.pre.booleans.includes(a)&&(d="boolean"),d?L({class:d},a):a},da.Words=function(a){var b=a.split(fa.pre.commentRegex),c=f(b),d=c[0],e=c.slice(1),g=!d.endsWith(":")&&e.length;if(g)return[da.Words(d),da.Comment(e.join("").split(fa.pre.wordRegex).map(da.Word))];var h=[],i=a;if(a.replace(fa.pre.stringRegex,function(a){var b=i.split(a),c=n(b,2),d=c[0],e=c[1];h.push(d.split(fa.pre.wordRegex).map(da.Word)),h.push(L({class:"string"},a)),i=e}),i!==a)return h.push(i.split(fa.pre.wordRegex).map(da.Word)),h;var j=a.split(fa.pre.wordRegex);return j.map(da.Word)};var ea=function(a,b){"object"!==t(a)&&(a={id:a}),a.id||"string"!=typeof b||(a.id=b),a.id&&(parseInt(a.id)===parseInt(a.id)?a.id="https://player.vimeo.com/video/".concat(a.id):!a.id.startsWith("http")&&(a.id="https://www.youtube-nocookie.com/embed/".concat(a.id)));var c=a,d=c.id,f=c.width,g=c.height,i=c["class"],j=void 0===i?"VideoEmbed":i,k=c.style,m=c.host,n=h(c,e);if(d){j.includes("VideoEmbed")||(j="VideoEmbed ".concat(j)),g&&(k=k||{},k.height=g),f&&(k=k||{},k.width=f);var o={class:j};return k&&(o.style=k),s(o,A(l(l({frameborder:0,allow:"encrypted-media",allowfullscreen:""},n),{},{src:d})))}},fa={pre:{booleans:["true","false"],builtins:["Array","Object","String","Number","RegExp","Null","Symbol","Set","WeakSet","Map","WeakMap","setInterval","setTimeout","Promise","JSON","Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Uint16Array","Int32Array","Uint32Array","Float32Array","Float64Array"],commentRegex:/(\/\/)/gim,keywords:["let","this","long","package","float","goto","private","class","if","short","while","protected","with","debugger","case","continue","volatile","interface","instanceof","super","synchronized","throw","extends","final","export","throws","try","import","double","enum","boolean","abstract","function","implements","typeof","transient","break","default","do","static","void","int","new","async","native","switch","else","delete","null","public","var","await","byte","finally","catch","in","return","for","get","const","char","module","exports","require","npm","install","=>"],stringRegex:/("|')(.*?)\1/gim,wordRegex:/( )/gim},preventDefault:function preventDefault(a){return a.preventDefault(),a}},ga={changeTheme:function changeTheme(a){return l(l({},a),{},{pageClass:l(l({},a.pageClass),{},{light:"dark"===a.theme}),theme:"dark"===a.theme?"light":"dark"})},go:function go(a,b){var c=b.currentTarget.href.replace(window.location.origin,""),d=c.split("#"),e=n(d,2),f=e[0],g=e[1],h=void 0===g?"":g;if(f===a.url&&h===a.hash)return h&&(window.location.hash=h),a;var i=a.pages&&a.pages[f]&&a.pages[f].title;i&&(document.title=a.title=i),f===a.url?window.location.hash=h:!h&&window.scrollTo({top:0});var j=window,k=j.scrollY;return window.history.pushState({url:f,hash:h,scrollY:k},a.title,c),l(l({},a),{},{url:f,hash:h,prev:a.url})},nospy:{toggle:function toggle(a){return a.nospy.show=!a.nospy.show,l({},a)}},pop:function pop(a,b){var c=window.location,d=c.pathname,e=c.hash;e=e.substring(1);var f=0;return b.state&&(d=b.state.url,e=b.state.hash,f=b.state.scrollY||0),e?window.location.hash=e:window.scroll({top:f}),l(l({},a),{},{url:d,hash:e})},pre:{clip:function clip(a,b){var c=b.content;if("undefined"!=typeof document&&"function"==typeof document.execCommand){var d=document.createElement("textarea");d.id="copy",d.innerHTML=c,document.body.appendChild(d);var e=document.getElementById("copy");e.select(),document.execCommand("copy"),document.body.removeChild(e)}return a}}},ha={"/video-embed/":function videoEmbed(){return[g({id:"magic-modulesvideo-embed"},"@magic-modules/video-embed"),I(["this is the\n",Z({to:"https://github.com/magic-modules",text:"@magic-modules"}),"\nVideoEmbed component. It renders videos from any http url that allows iframe embedding."]),V("@magic-modules/video-embed"),w({id:"installation"},"installation"),da({lines:"false"},"npm install @magic-modules/video-embed"),w({id:"usage"},"usage"),x({id:"usage-youtube"},"youtube"),I("in a page/component, just pass a video id to the VideoEmbed module."),y({id:"javascript"},"javascript"),da({lines:"false"},"VideoEmbed('ecIWPzGEbFc')"),y({id:"markdown"},"markdown"),da({lines:"false"},"<VideoEmbed id=\"ecIWPzGEbFc\"></VideoEmbed>"),I("renders"),ea({id:"ecIWPzGEbFc"}),x({id:"usage-vimeo"},"vimeo"),I("if the video id is a number, the video is assumed to be hosted on vimeo"),y({id:"javascript-1"},"javascript"),da({lines:"false"},"VideoEmbed(116582567)"),y({id:"markdown-1"},"markdown"),da({lines:"false"},"<VideoEmbed>116582567</VideoEmbed>"),I("renders"),ea({id:"116582567"}),y({id:"usage-others"},"other video hosts"),I("videos from arbitrary hosts can be included as well, as long as those hosts allow iframe embeds"),y({id:"javascript-2"},"javascript"),da({lines:"false"},"VideoEmbed('https://videopress.com/embed/kUJmAcSf')"),y({id:"markdown-2"},"markdown"),da({lines:"false"},"<VideoEmbed id=\"https://videopress.com/embed/kUJmAcSf\"></VideoEmbed>"),I("renders"),ea({id:"https://videopress.com/embed/kUJmAcSf"}),w({id:"props"},"props"),I("you can pass a width and height, and any other props to the video."),y({id:"javascript-3"},"javascript"),da({lines:"false"},"VideoEmbed({ id: 'tIxHmsWCd7g', width: \"50%\", height: 200 })"),y({id:"markdown-3"},"markdown"),da({lines:"false"},"<VideoEmbed id=\"tIxHmsWCd7g\" width=\"50%\" height=\"200\"></VideoEmbed>"),I("renders"),ea({id:"tIxHmsWCd7g",width:"50%",height:"200px"}),x({id:"fixed-dimensions"},"fixed-dimensions"),I("to set a fixed video size, simply add both a height and a width value (px, em, rem, vh, pt)."),y({id:"javascript-4"},"javascript"),da({lines:"false"},"VideoEmbed({ id: 'E-dUveGINTg', width: \"300px\", height: \"900px\" })"),y({id:"markdown-4"},"markdown"),da({lines:"false"},"<VideoEmbed id=\"E-dUveGINTg\" width=\"300px\" height=\"900px\"></VideoEmbed>"),I("renders"),ea({id:"E-dUveGINTg",width:"300px",height:"900px"}),w({id:"source"},"source"),I(["the source for this page is in the\n",Z({to:"https://github.com/magic-modules/video-embed/tree/master/example",text:"example directory"}),"\nand gets built and published to github using\n",Z({to:"https://github.com/magic/core",text:"@magic/core"})])]},"/video-embed/404/":function videoEmbed404(){return s("404 - not found.")}};k({init:l(l({},{description:"renders videos from any http url that allows iframe embedding",logotext:"VideoEmbed",menu:[{text:"installation",to:"/video-embed/#installation"},{items:[{text:"youtube",to:"/video-embed/#usage-youtube"},{text:"vimeo",to:"/video-embed/#usage-vimeo"},{text:"other hosts",to:"/video-embed/#usage-others"}],text:"usage",to:"/video-embed/#usage"},{text:"props",to:"/video-embed/#props"},{text:"fixed dimensions",to:"/video-embed/#fixed-dimensions"},{text:"source",to:"/video-embed/#source"}],nospy:{show:!1},pageClass:{},pages:{"/video-embed/":{},"/video-embed/404/":{description:"404 - not found.",title:"404 - not found"}},root:"/video-embed/",theme:"dark",title:"@magic-modules/video-embed",url:"/video-embed/"}),{},{url:window.location.pathname,hash:window.location.hash.substr(1)}),subscriptions:function subscriptions(){return[[Q.listenPopState,ga.pop]]},view:function(a){var b=ha[a.url]?a.url:"/404/",c=ha[b],d=a.pages&&a.pages[b];return d&&Object.keys(d).forEach(function(b){a[b]=d[b]}),a.url=b,ca({page:c,state:a},[Y(a),ba(a)])},node:document.getElementById("Magic")})})();