(function(t){function e(e){for(var r,i,s=e[0],c=e[1],l=e[2],u=0,d=[];u<s.length;u++)i=s[u],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&d.push(o[i][0]),o[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);p&&p(e);while(d.length)d.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],r=!0,i=1;i<n.length;i++){var c=n[i];0!==o[c]&&(r=!1)}r&&(a.splice(e--,1),t=s(s.s=n[0]))}return t}var r={},o={app:0},a=[];function i(t){return s.p+"js/"+({about:"about"}[t]||t)+"."+{about:"f050d08b"}[t]+".js"}function s(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(t){var e=[],n=o[t];if(0!==n)if(n)e.push(n[2]);else{var r=new Promise((function(e,r){n=o[t]=[e,r]}));e.push(n[2]=r);var a,c=document.createElement("script");c.charset="utf-8",c.timeout=120,s.nc&&c.setAttribute("nonce",s.nc),c.src=i(t);var l=new Error;a=function(e){c.onerror=c.onload=null,clearTimeout(u);var n=o[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;l.message="Loading chunk "+t+" failed.\n("+r+": "+a+")",l.name="ChunkLoadError",l.type=r,l.request=a,n[1](l)}o[t]=void 0}};var u=setTimeout((function(){a({type:"timeout",target:c})}),12e4);c.onerror=c.onload=a,document.head.appendChild(c)}return Promise.all(e)},s.m=t,s.c=r,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(n,r,function(e){return t[e]}.bind(null,r));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/",s.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var p=l;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0134":function(t,e,n){},3279:function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"app-grid"},[n("nav",[n("div",{staticClass:"logo"}),n("div",{staticClass:"nav-group"},[n("h2",[t._v("Wheezy")]),n("router-link",{attrs:{to:"/"}},[t._v("Home")]),n("router-link",{attrs:{to:"/about"}},[t._v("About")])],1),n("div",{staticClass:"nav-group"},[n("h2",[t._v("Playlists")]),n("router-link",{attrs:{to:"/"}},[t._v("This Week")]),n("router-link",{attrs:{to:"/last-week"}},[t._v("Last Week")])],1)]),n("div",{staticClass:"container"},[n("router-view")],1)]),n("stream")],1)},a=[],i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"controls"},[t._m(0),n("div",{class:t.playing?"pause stream-button":"play stream-button",on:{click:t.toggleStream}}),t._m(1)])},s=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h2",[t._v("Wiley Radio")]),n("h3",[t._v("Listen now")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("audio",{attrs:{id:"player"}},[n("source",{attrs:{src:"http://wileyradio.org:8000/liq.mp3",type:"audio/mpeg"}})])}],c=n("bc3a"),l=n.n(c),u={name:"Stream",props:{},data:function(){return{playing:!1,user:""}},mounted:function(){var t=this;l.a.get("https://wileyradio.org/user.php").then((function(e){t.user=e.data}))},methods:{toggleStream:function(){this.playing?(this.playing=!1,document.getElementById("player").pause()):(this.playing=!0,document.getElementById("player").play())}}},p=u,d=(n("6c78"),n("2877")),f=Object(d["a"])(p,i,s,!1,null,"8238bf42",null),m=f.exports,h={components:{Stream:m}},v=h,g=(n("5c0b"),n("db0a"),Object(d["a"])(v,o,a,!1,null,"deb26550",null)),b=g.exports,y=n("9483");Object(y["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});n("d3b7");var k=n("8c4f"),_=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("HelloWorld")],1)},w=[],O=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",[t._v("This Week's Playlist")]),n("playlist")],1)},x=[],C=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",t._l(t.tracks,(function(t,e){return n("playlist-track",{key:e,attrs:{index:e+1,search:t}})})),1)},P=[],j=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.track?n("div",{staticClass:"track",attrs:{"data-key":t.index}},[n("div",{staticClass:"image",style:{backgroundImage:"url('"+t.image+"')"}}),n("div",{staticClass:"track-info"},[n("h2",{domProps:{textContent:t._s(t.track.trackName)}}),n("h4",[t._v("by "+t._s(t.track.artistName))]),n("h3",[n("span",{domProps:{textContent:t._s(t.track.artistName)}}),t._v(" • "),n("span",{domProps:{textContent:t._s(t.track.collectionCensoredName)}})]),n("h3",{domProps:{textContent:t._s(t.songLength)}}),n("a",{staticClass:"button itunes",attrs:{href:t.track.trackViewUrl}},[t._v("Open in Apple Music")])])]):t._e()},S=[],T=(n("a9e3"),n("b680"),n("ac1f"),n("5319"),n("841c"),{name:"Playlist-Track",props:{index:Number,search:String},computed:{songLength:function(){var t=Math.floor(this.track.trackTimeMillis/6e4),e=(this.track.trackTimeMillis%6e4/1e3).toFixed(0);return t+":"+(e<10?"0":"")+e},image:function(){return this.track.artworkUrl100?this.track.artworkUrl100.replace("100x100","500x500"):""}},data:function(){return{track:{}}},mounted:function(){var t=this;l.a.get("https://itunes.apple.com/search?term=".concat(this.search,"&country=US&media=music&entity=song&limit=1"),{}).then((function(e){t.track=e.data.results[0]}))}}),E=T,M=(n("f09b"),Object(d["a"])(E,j,S,!1,null,"32764346",null)),W=M.exports,L={name:"Playlist",props:{playlistId:String},components:{PlaylistTrack:W},data:function(){return{tracks:["Doves In The Wind","Sex Super Smash Bros.","Not in Love We're Just High","How to Be a Heartbreaker","Less I know The Better","She (Featuring Frank Ocean)","Cola","Dead To Me Kali Uchis","Friend Zone Thundercat","Gettin' Jiggy Wit It","Blue Marina","Heartbeat","Pink Lemonade Wombats","Gold Digger","Body Of My Own","OKOKOK","False Alarm","Don't You Forget About Me"]}},mounted:function(){}},N=L,$=(n("c463"),Object(d["a"])(N,C,P,!1,null,"a418340a",null)),A=$.exports,B={name:"HelloWorld",components:{Playlist:A},props:{msg:String}},F=B,H=Object(d["a"])(F,O,x,!1,null,"1cfef1ce",null),I=H.exports,U={name:"home",components:{HelloWorld:I}},D=U,J=Object(d["a"])(D,_,w,!1,null,null,null),K=J.exports;r["a"].use(k["a"]);var q=[{path:"/",name:"home",component:K},{path:"/about",name:"about",component:function(){return n.e("about").then(n.bind(null,"f820"))}}],G=new k["a"]({mode:"history",base:"/",routes:q}),z=G,R=n("2f62");r["a"].use(R["a"]);var V=new R["a"].Store({state:{},mutations:{},actions:{},modules:{}});r["a"].config.productionTip=!1,new r["a"]({router:z,store:V,render:function(t){return t(b)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";var r=n("9c0c"),o=n.n(r);o.a},"6c78":function(t,e,n){"use strict";var r=n("3279"),o=n.n(r);o.a},"9c0c":function(t,e,n){},a006:function(t,e,n){},c463:function(t,e,n){"use strict";var r=n("feda"),o=n.n(r);o.a},db0a:function(t,e,n){"use strict";var r=n("0134"),o=n.n(r);o.a},f09b:function(t,e,n){"use strict";var r=n("a006"),o=n.n(r);o.a},feda:function(t,e,n){}});
//# sourceMappingURL=app.b422cbd5.js.map