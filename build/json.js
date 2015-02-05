//! Copyright 2015, kissy-json@1.0.4 MIT Licensed, build time: Thu, 05 Feb 2015 06:36:16 GMT 
modulex.add("json",[],function(t,n,e){var r,i,o,u,a,s;r=function(t){var n={"\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","	":"\\t",'"':'\\"'},e={},r=/["\b\f\n\r\t\x00-\x1f]/g,i=/\\\\|\\\/|\\b|\\f|\\n|\\r|\\t|\\"|\\u[0-9a-zA-Z]{4}/g;for(var o in n){var u=n[o];e[u]=o}return e["\\/"]="/",e["\\\\"]="\\",t={quote:function(t){return'"'+t.replace(r,function(t){var e;return(e=n[t])||(e="\\u"+("0000"+t.charCodeAt(0).toString(16)).slice(-4)),e})+'"'},unQuote:function(t){return t.slice(1,t.length-1).replace(i,function(t){var n;return(n=e[t])||(n=String.fromCharCode(parseInt(t.slice(2),16))),n})}}}(),i=function(t){var n={}.toString,e=!{toString:1}.propertyIsEnumerable("toString"),r=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toString","toLocaleString","valueOf"];return t={isArray:Array.isArray||function(t){return"[object Array]"===n.call(t)},inArray:function(t,n){for(var e=0,r=n.length;r>e;e++)if(n[e]===t)return!0;return!1},keys:Object.keys||function(t){var n,i,o=[];for(n in t)t.hasOwnProperty(n)&&o.push(n);if(e)for(i=r.length-1;i>=0;i--)n=r[i],t.hasOwnProperty(n)&&o.push(n);return o}}}(),o=function(t){var n=function(t){function n(t,n){return n=n||1,t[t.length-n]}function e(t,n){for(var e in n)t[e]=n[e]}function r(t){return"[object Array]"===Object.prototype.toString.call(t)}function i(t,n,e){if(t){var i,o,u,a=0;if(e=e||null,r(t))for(u=t.length,o=t[0];u>a&&n.call(e,o,a,t)!==!1;o=t[++a]);else for(i in t)if(n.call(e,t[i],i,t)===!1)break}}function o(t,n){for(var e=0,r=n.length;r>e;e++)if(n[e]===t)return!0;return!1}var u={},a={SHIFT_TYPE:1,REDUCE_TYPE:2,ACCEPT_TYPE:0,TYPE_INDEX:0,PRODUCTION_INDEX:1,TO_INDEX:2},s=function(t){var n=this;n.rules=[],e(n,t),n.resetInput(n.input,n.filename)};s.prototype={resetInput:function(t,n){e(this,{input:t,filename:n,matched:"",stateStack:[s.STATIC.INITIAL],match:"",text:"",firstLine:1,lineNumber:1,lastLine:1,firstColumn:1,lastColumn:1})},getCurrentRules:function(){var t=this,n=t.stateStack[t.stateStack.length-1],e=[];return t.mapState&&(n=t.mapState(n)),i(t.rules,function(t){var r=t.state||t[3];r?o(n,r)&&e.push(t):n===s.STATIC.INITIAL&&e.push(t)}),e},pushState:function(t){this.stateStack.push(t)},popState:function(t){t=t||1;for(var n;t--;)n=this.stateStack.pop();return n},showDebugInfo:function(){var t=this,n=s.STATIC.DEBUG_CONTEXT_LIMIT,e=t.matched,r=t.match,i=t.input;e=e.slice(0,e.length-r.length);var o=(e.length>n?"...":"")+e.slice(0-n).replace(/\n/g," "),u=r+i;return u=u.slice(0,n).replace(/\n/g," ")+(u.length>n?"...":""),o+u+"\n"+new Array(o.length+1).join("-")+"^"},mapSymbol:function(t){return this.symbolMap[t]},mapReverseSymbol:function(t){var n,e=this,r=e.symbolMap,i=e.reverseSymbolMap;if(!i&&r){i=e.reverseSymbolMap={};for(n in r)i[r[n]]=n}return i?i[t]:t},lex:function(){var n,r,i,o,u,a=this,c=a.input,l=a.getCurrentRules();if(a.match=a.text="",!c)return a.mapSymbol(s.STATIC.END_TAG);for(n=0;n<l.length;n++){r=l[n];var f=r.regexp||r[1],h=r.token||r[0],p=r.action||r[2]||t;if(i=c.match(f)){u=i[0].match(/\n.*/g),u&&(a.lineNumber+=u.length),e(a,{firstLine:a.lastLine,lastLine:a.lineNumber,firstColumn:a.lastColumn,lastColumn:u?u[u.length-1].length-1:a.lastColumn+i[0].length});var v;return v=a.match=i[0],a.matches=i,a.text=v,a.matched+=v,o=p&&p.call(a),o=o===t?h:a.mapSymbol(o),c=c.slice(v.length),a.input=c,o?o:a.lex()}}}},s.STATIC={INITIAL:"I",DEBUG_CONTEXT_LIMIT:20,END_TAG:"$EOF"};var c=new s({rules:[["b",/^"(\\"|\\\\|\\\/|\\b|\\f|\\n|\\r|\\t|\\u[0-9a-zA-Z]{4}|[^\\"\x00-\x1f])*"/,0],[0,/^[\t\r\n\x20]/,0],["c",/^,/,0],["d",/^:/,0],["e",/^\[/,0],["f",/^\]/,0],["g",/^\{/,0],["h",/^\}/,0],["i",/^-?\d+(?:\.\d+)?(?:e-?\d+)?/i,0],["j",/^(true|false)/,0],["k",/^null/,0],["l",/^./,0]]});return u.lexer=c,c.symbolMap={$EOF:"a",STRING:"b",COMMA:"c",COLON:"d",LEFT_BRACKET:"e",RIGHT_BRACKET:"f",LEFT_BRACE:"g",RIGHT_BRACE:"h",NUMBER:"i",BOOLEAN:"j",NULL:"k",INVALID:"l",$START:"m",json:"n",value:"o",object:"p",array:"q",elementList:"r",member:"s",memberList:"t"},u.productions=[["m",["n"]],["n",["o"],function(){return this.$1}],["o",["b"],function(){return this.yy.unQuote(this.$1)}],["o",["i"],function(){return parseFloat(this.$1)}],["o",["p"],function(){return this.$1}],["o",["q"],function(){return this.$1}],["o",["j"],function(){return"true"===this.$1}],["o",["k"],function(){return null}],["r",["o"],function(){return[this.$1]}],["r",["r","c","o"],function(){return this.$1[this.$1.length]=this.$3,this.$1}],["q",["e","f"],function(){return[]}],["q",["e","r","f"],function(){return this.$2}],["s",["b","d","o"],function(){return{key:this.yy.unQuote(this.$1),value:this.$3}}],["t",["s"],function(){var t={};return t[this.$1.key]=this.$1.value,t}],["t",["t","c","s"],function(){return this.$1[this.$3.key]=this.$3.value,this.$1}],["p",["g","h"],function(){return{}}],["p",["g","t","h"],function(){return this.$2}]],u.table={gotos:{0:{n:7,o:8,p:9,q:10},2:{o:12,p:9,q:10,r:13},3:{s:16,t:17},18:{o:23,p:9,q:10},20:{o:24,p:9,q:10},21:{s:25}},action:{0:{b:[1,t,1],e:[1,t,2],g:[1,t,3],i:[1,t,4],j:[1,t,5],k:[1,t,6]},1:{a:[2,2],f:[2,2],c:[2,2],h:[2,2]},2:{b:[1,t,1],e:[1,t,2],f:[1,t,11],g:[1,t,3],i:[1,t,4],j:[1,t,5],k:[1,t,6]},3:{b:[1,t,14],h:[1,t,15]},4:{a:[2,3],f:[2,3],c:[2,3],h:[2,3]},5:{a:[2,6],f:[2,6],c:[2,6],h:[2,6]},6:{a:[2,7],f:[2,7],c:[2,7],h:[2,7]},7:{a:[0]},8:{a:[2,1]},9:{a:[2,4],f:[2,4],c:[2,4],h:[2,4]},10:{a:[2,5],f:[2,5],c:[2,5],h:[2,5]},11:{a:[2,10],f:[2,10],c:[2,10],h:[2,10]},12:{f:[2,8],c:[2,8]},13:{c:[1,t,18],f:[1,t,19]},14:{d:[1,t,20]},15:{a:[2,15],f:[2,15],c:[2,15],h:[2,15]},16:{h:[2,13],c:[2,13]},17:{c:[1,t,21],h:[1,t,22]},18:{b:[1,t,1],e:[1,t,2],g:[1,t,3],i:[1,t,4],j:[1,t,5],k:[1,t,6]},19:{a:[2,11],f:[2,11],c:[2,11],h:[2,11]},20:{b:[1,t,1],e:[1,t,2],g:[1,t,3],i:[1,t,4],j:[1,t,5],k:[1,t,6]},21:{b:[1,t,14]},22:{a:[2,16],f:[2,16],c:[2,16],h:[2,16]},23:{f:[2,9],c:[2,9]},24:{h:[2,12],c:[2,12]},25:{h:[2,14],c:[2,14]}}},u.parse=function(e,r){var o,u,s,c,l,f=this,h=f.lexer,p=f.table,v=p.gotos,g=p.action,T=f.productions,m=r?"in file: "+r+" ":"",y=[],b=[0],E=[];for(h.resetInput(e,r);;){if(o=n(b),u||(u=h.lex()),c=u?g[o]&&g[o][u]:null,!c){var I,S=[];throw g[o]&&i(g[o],function(t,n){c=t[a.TYPE_INDEX];var e=[];e[a.SHIFT_TYPE]="shift",e[a.REDUCE_TYPE]="reduce",e[a.ACCEPT_TYPE]="accept",S.push(e[c]+":"+f.lexer.mapReverseSymbol(n))}),I=m+"syntax error at line "+h.lineNumber+":\n"+h.showDebugInfo()+"\nexpect "+S.join(", "),new Error(I)}switch(c[a.TYPE_INDEX]){case a.SHIFT_TYPE:E.push(u),y.push(h.text),b.push(c[a.TO_INDEX]),u=null;break;case a.REDUCE_TYPE:var C=T[c[a.PRODUCTION_INDEX]],A=C.symbol||C[0],d=C.action||C[2],N=C.rhs||C[1],$=N.length;l=n(y,$),s=t,f.$$=l;for(var O=0;$>O;O++)f["$"+($-O)]=n(y,O+1);d&&(s=d.call(f)),l=s!==t?s:f.$$;var _=-1*$;b.splice(_,$),y.splice(_,$),E.splice(_,$),E.push(A),y.push(l);var j=v[n(b)][A];b.push(j);break;case a.ACCEPT_TYPE:return l}}},u}();return"undefined"!=typeof e&&(t=n),t}(),u=function(t){function n(t){return 10>t?"0"+t:t}function e(t,e,r,i,a,l,f){var h=e[t];switch(h&&"object"==typeof h&&("function"==typeof h.toJSON?h=h.toJSON(t):h instanceof Date?h=isFinite(h.valueOf())?h.getUTCFullYear()+"-"+n(h.getUTCMonth()+1)+"-"+n(h.getUTCDate())+"T"+n(h.getUTCHours())+":"+n(h.getUTCMinutes())+":"+n(h.getUTCSeconds())+"Z":null:(h instanceof String||h instanceof Number||h instanceof Boolean)&&(h=h.valueOf())),void 0!==r&&(h=r.call(e,t,h)),typeof h){case"number":return isFinite(h)?String(h):"null";case"string":return s.quote(h);case"boolean":return String(h);case"object":return h?c.isArray(h)?u(h,r,i,a,l,f):o(h,r,i,a,l,f):"null"}return void 0}function o(t,n,r,i,o,u){var a=u;u+=i;var l,f,h,p;l=void 0!==r?r:c.keys(t);var v=[];for(h=0,f=l.length;f>h;h++){p=l[h];var g=e(p,t,n,r,i,o,u);if(void 0!==g){var T=s.quote(p);T+=":",i&&(T+=" "),T+=g,v[v.length]=T}}var m;if(v.length)if(i){var y=",\n"+u,b=v.join(y);m="{\n"+u+b+"\n"+a+"}"}else m="{"+v.join(",")+"}";else m="{}";return m}function u(t,n,r,i,o,u){var a=u;u+=i;for(var s=[],c=t.length,l=0;c>l;){var f=e(String(l),t,n,r,i,o,u);s[s.length]=void 0===f?"null":f,++l}var h;if(s.length)if(i){var p="\n,"+u,v=s.join(p);h="[\n"+u+v+"\n"+a+"]"}else h="["+s.join(",")+"]";else h="[]";return h}function a(t,n,r){var i,o,u="";return n&&("function"==typeof n?o=n:c.isArray(n)&&(i=n)),"number"==typeof r?(r=Math.min(10,r),u=new Array(r+1).join(" ")):"string"==typeof r&&(u=r.slice(0,10)),e("",{"":t},o,i,u,[],"")}var s=r,c=i;return t=a}(),a=function(t){function n(t,e,r){var i,o,u,s=t[e];if("object"==typeof s)if(a.isArray(s)){i=0,o=s.length;for(var c=[];o>i;)u=n(s,String(i),r),void 0!==u&&(c[c.length]=u);s=c}else{var l=a.keys(s);for(i=0,o=l.length;o>i;i++){var f=l[i];u=n(s,f,r),void 0===u?delete s[f]:s[f]=u}}return r.call(t,e,s)}var e=o,u=r,a=i;return e.yy={unQuote:u.unQuote},t=function(t,r){var i=e.parse(String(t));return r?n({"":i},"",r):i}}(),s=function(t){var n=u,e=a;return t={version:"1.0.4",stringify:n,parse:e}}(),e.exports=s});