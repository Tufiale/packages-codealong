var me=(c,a)=>()=>(a||c((a={exports:{}}).exports,a),a.exports);var xe=me((Ee,$)=>{(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))y(l);new MutationObserver(l=>{for(const v of l)if(v.type==="childList")for(const S of v.addedNodes)S.tagName==="LINK"&&S.rel==="modulepreload"&&y(S)}).observe(document,{childList:!0,subtree:!0});function x(l){const v={};return l.integrity&&(v.integrity=l.integrity),l.referrerPolicy&&(v.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?v.credentials="include":l.crossOrigin==="anonymous"?v.credentials="omit":v.credentials="same-origin",v}function y(l){if(l.ep)return;l.ep=!0;const v=x(l);fetch(l.href,v)}})();var $={};(function c(a,x,y,l){var v=!!(a.Worker&&a.Blob&&a.Promise&&a.OffscreenCanvas&&a.OffscreenCanvasRenderingContext2D&&a.HTMLCanvasElement&&a.HTMLCanvasElement.prototype.transferControlToOffscreen&&a.URL&&a.URL.createObjectURL);function S(){}function z(t){var e=x.exports.Promise,w=e!==void 0?e:a.Promise;return typeof w=="function"?new w(t):(t(S,S),null)}var o=function(){var t=Math.floor(16.666666666666668),e,w,m={},E=0;return typeof requestAnimationFrame=="function"&&typeof cancelAnimationFrame=="function"?(e=function(C){var p=Math.random();return m[p]=requestAnimationFrame(function b(F){E===F||E+t-1<F?(E=F,delete m[p],C()):m[p]=requestAnimationFrame(b)}),p},w=function(C){m[C]&&cancelAnimationFrame(m[C])}):(e=function(C){return setTimeout(C,t)},w=function(C){return clearTimeout(C)}),{frame:e,cancel:w}}(),r=function(){var t,e,w={};function m(E){function C(p,b){E.postMessage({options:p||{},callback:b})}E.init=function(b){var F=b.transferControlToOffscreen();E.postMessage({canvas:F},[F])},E.fire=function(b,F,B){if(e)return C(b,null),e;var T=Math.random().toString(36).slice(2);return e=z(function(D){function q(P){P.data.callback===T&&(delete w[T],E.removeEventListener("message",q),e=null,B(),D())}E.addEventListener("message",q),C(b,T),w[T]=q.bind(null,{data:{callback:T}})}),e},E.reset=function(){E.postMessage({reset:!0});for(var b in w)w[b](),delete w[b]}}return function(){if(t)return t;if(!y&&v){var E=["var CONFETTI, SIZE = {}, module = {};","("+c.toString()+")(this, module, true, SIZE);","onmessage = function(msg) {","  if (msg.data.options) {","    CONFETTI(msg.data.options).then(function () {","      if (msg.data.callback) {","        postMessage({ callback: msg.data.callback });","      }","    });","  } else if (msg.data.reset) {","    CONFETTI && CONFETTI.reset();","  } else if (msg.data.resize) {","    SIZE.width = msg.data.resize.width;","    SIZE.height = msg.data.resize.height;","  } else if (msg.data.canvas) {","    SIZE.width = msg.data.canvas.width;","    SIZE.height = msg.data.canvas.height;","    CONFETTI = module.exports.create(msg.data.canvas);","  }","}"].join(`
`);try{t=new Worker(URL.createObjectURL(new Blob([E])))}catch(C){return typeof console!==void 0&&typeof console.warn=="function"&&console.warn("🎊 Could not load worker",C),null}m(t)}return t}}(),s={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:["square","circle"],zIndex:100,colors:["#26ccff","#a25afd","#ff5e7e","#88ff5a","#fcff42","#ffa62d","#ff36ff"],disableForReducedMotion:!1,scalar:1};function h(t,e){return e?e(t):t}function u(t){return t!=null}function n(t,e,w){return h(t&&u(t[e])?t[e]:s[e],w)}function g(t){return t<0?0:Math.floor(t)}function d(t,e){return Math.floor(Math.random()*(e-t))+t}function f(t){return parseInt(t,16)}function M(t){return t.map(I)}function I(t){var e=String(t).replace(/[^0-9a-f]/gi,"");return e.length<6&&(e=e[0]+e[0]+e[1]+e[1]+e[2]+e[2]),{r:f(e.substring(0,2)),g:f(e.substring(2,4)),b:f(e.substring(4,6))}}function L(t){var e=n(t,"origin",Object);return e.x=n(e,"x",Number),e.y=n(e,"y",Number),e}function k(t){t.width=document.documentElement.clientWidth,t.height=document.documentElement.clientHeight}function O(t){var e=t.getBoundingClientRect();t.width=e.width,t.height=e.height}function A(t){var e=document.createElement("canvas");return e.style.position="fixed",e.style.top="0px",e.style.left="0px",e.style.pointerEvents="none",e.style.zIndex=t,e}function N(t,e,w,m,E,C,p,b,F){t.save(),t.translate(e,w),t.rotate(C),t.scale(m,E),t.arc(0,0,1,p,b,F),t.restore()}function U(t){var e=t.angle*(Math.PI/180),w=t.spread*(Math.PI/180);return{x:t.x,y:t.y,wobble:Math.random()*10,wobbleSpeed:Math.min(.11,Math.random()*.1+.05),velocity:t.startVelocity*.5+Math.random()*t.startVelocity,angle2D:-e+(.5*w-Math.random()*w),tiltAngle:(Math.random()*(.75-.25)+.25)*Math.PI,color:t.color,shape:t.shape,tick:0,totalTicks:t.ticks,decay:t.decay,drift:t.drift,random:Math.random()+2,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:t.gravity*3,ovalScalar:.6,scalar:t.scalar}}function R(t,e){e.x+=Math.cos(e.angle2D)*e.velocity+e.drift,e.y+=Math.sin(e.angle2D)*e.velocity+e.gravity,e.wobble+=e.wobbleSpeed,e.velocity*=e.decay,e.tiltAngle+=.1,e.tiltSin=Math.sin(e.tiltAngle),e.tiltCos=Math.cos(e.tiltAngle),e.random=Math.random()+2,e.wobbleX=e.x+10*e.scalar*Math.cos(e.wobble),e.wobbleY=e.y+10*e.scalar*Math.sin(e.wobble);var w=e.tick++/e.totalTicks,m=e.x+e.random*e.tiltCos,E=e.y+e.random*e.tiltSin,C=e.wobbleX+e.random*e.tiltCos,p=e.wobbleY+e.random*e.tiltSin;if(t.fillStyle="rgba("+e.color.r+", "+e.color.g+", "+e.color.b+", "+(1-w)+")",t.beginPath(),e.shape==="circle")t.ellipse?t.ellipse(e.x,e.y,Math.abs(C-m)*e.ovalScalar,Math.abs(p-E)*e.ovalScalar,Math.PI/10*e.wobble,0,2*Math.PI):N(t,e.x,e.y,Math.abs(C-m)*e.ovalScalar,Math.abs(p-E)*e.ovalScalar,Math.PI/10*e.wobble,0,2*Math.PI);else if(e.shape==="star")for(var b=Math.PI/2*3,F=4*e.scalar,B=8*e.scalar,T=e.x,D=e.y,q=5,P=Math.PI/q;q--;)T=e.x+Math.cos(b)*B,D=e.y+Math.sin(b)*B,t.lineTo(T,D),b+=P,T=e.x+Math.cos(b)*F,D=e.y+Math.sin(b)*F,t.lineTo(T,D),b+=P;else t.moveTo(Math.floor(e.x),Math.floor(e.y)),t.lineTo(Math.floor(e.wobbleX),Math.floor(E)),t.lineTo(Math.floor(C),Math.floor(p)),t.lineTo(Math.floor(m),Math.floor(e.wobbleY));return t.closePath(),t.fill(),e.tick<e.totalTicks}function W(t,e,w,m,E){var C=e.slice(),p=t.getContext("2d"),b,F,B=z(function(T){function D(){b=F=null,p.clearRect(0,0,m.width,m.height),E(),T()}function q(){y&&!(m.width===l.width&&m.height===l.height)&&(m.width=t.width=l.width,m.height=t.height=l.height),!m.width&&!m.height&&(w(t),m.width=t.width,m.height=t.height),p.clearRect(0,0,m.width,m.height),C=C.filter(function(P){return R(p,P)}),C.length?b=o.frame(q):D()}b=o.frame(q),F=D});return{addFettis:function(T){return C=C.concat(T),B},canvas:t,promise:B,reset:function(){b&&o.cancel(b),F&&F()}}}function _(t,e){var w=!t,m=!!n(e||{},"resize"),E=n(e,"disableForReducedMotion",Boolean),C=v&&!!n(e||{},"useWorker"),p=C?r():null,b=w?k:O,F=t&&p?!!t.__confetti_initialized:!1,B=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion)").matches,T;function D(P,J,Q){for(var H=n(P,"particleCount",g),G=n(P,"angle",Number),K=n(P,"spread",Number),Z=n(P,"startVelocity",Number),le=n(P,"decay",Number),se=n(P,"gravity",Number),fe=n(P,"drift",Number),te=n(P,"colors",M),de=n(P,"ticks",Number),ne=n(P,"shapes"),he=n(P,"scalar"),oe=L(P),ae=H,ee=[],ve=t.width*oe.x,ge=t.height*oe.y;ae--;)ee.push(U({x:ve,y:ge,angle:G,spread:K,startVelocity:Z,color:te[ae%te.length],shape:ne[d(0,ne.length)],ticks:de,decay:le,gravity:se,drift:fe,scalar:he}));return T?T.addFettis(ee):(T=W(t,ee,b,J,Q),T.promise)}function q(P){var J=E||n(P,"disableForReducedMotion",Boolean),Q=n(P,"zIndex",Number);if(J&&B)return z(function(Z){Z()});w&&T?t=T.canvas:w&&!t&&(t=A(Q),document.body.appendChild(t)),m&&!F&&b(t);var H={width:t.width,height:t.height};p&&!F&&p.init(t),F=!0,p&&(t.__confetti_initialized=!0);function G(){if(p){var Z={getBoundingClientRect:function(){if(!w)return t.getBoundingClientRect()}};b(Z),p.postMessage({resize:{width:Z.width,height:Z.height}});return}H.width=H.height=null}function K(){T=null,m&&a.removeEventListener("resize",G),w&&t&&(document.body.removeChild(t),t=null,F=!1)}return m&&a.addEventListener("resize",G,!1),p?p.fire(P,H,K):D(P,H,K)}return q.reset=function(){p&&p.reset(),T&&T.reset()},q}var X;function re(){return X||(X=_(null,{useWorker:!0,resize:!0})),X}x.exports=function(){return re().apply(this,arguments)},x.exports.reset=function(){re().reset()},x.exports.create=_})(function(){return typeof window<"u"?window:typeof self<"u"?self:this||{}}(),$,!1);const pe=$.exports;$.exports.create;if(!V)var V={map:function(c,a){var x={};return a?c.map(function(y,l){return x.index=l,a.call(x,y)}):c.slice()},naturalOrder:function(c,a){return c<a?-1:c>a?1:0},sum:function(c,a){var x={};return c.reduce(a?function(y,l,v){return x.index=v,y+a.call(x,l)}:function(y,l){return y+l},0)},max:function(c,a){return Math.max.apply(null,a?V.map(c,a):c)}};var be=function(){var c=5,a=8-c,x=1e3;function y(o,r,s){return(o<<2*c)+(r<<c)+s}function l(o){var r=[],s=!1;function h(){r.sort(o),s=!0}return{push:function(u){r.push(u),s=!1},peek:function(u){return s||h(),u===void 0&&(u=r.length-1),r[u]},pop:function(){return s||h(),r.pop()},size:function(){return r.length},map:function(u){return r.map(u)},debug:function(){return s||h(),r}}}function v(o,r,s,h,u,n,g){var d=this;d.r1=o,d.r2=r,d.g1=s,d.g2=h,d.b1=u,d.b2=n,d.histo=g}function S(){this.vboxes=new l(function(o,r){return V.naturalOrder(o.vbox.count()*o.vbox.volume(),r.vbox.count()*r.vbox.volume())})}function z(o,r){if(r.count()){var s=r.r2-r.r1+1,h=r.g2-r.g1+1,u=V.max([s,h,r.b2-r.b1+1]);if(r.count()==1)return[r.copy()];var n,g,d,f,M=0,I=[],L=[];if(u==s)for(n=r.r1;n<=r.r2;n++){for(f=0,g=r.g1;g<=r.g2;g++)for(d=r.b1;d<=r.b2;d++)f+=o[y(n,g,d)]||0;I[n]=M+=f}else if(u==h)for(n=r.g1;n<=r.g2;n++){for(f=0,g=r.r1;g<=r.r2;g++)for(d=r.b1;d<=r.b2;d++)f+=o[y(g,n,d)]||0;I[n]=M+=f}else for(n=r.b1;n<=r.b2;n++){for(f=0,g=r.r1;g<=r.r2;g++)for(d=r.g1;d<=r.g2;d++)f+=o[y(g,d,n)]||0;I[n]=M+=f}return I.forEach(function(k,O){L[O]=M-k}),function(k){var O,A,N,U,R,W=k+"1",_=k+"2",X=0;for(n=r[W];n<=r[_];n++)if(I[n]>M/2){for(N=r.copy(),U=r.copy(),R=(O=n-r[W])<=(A=r[_]-n)?Math.min(r[_]-1,~~(n+A/2)):Math.max(r[W],~~(n-1-O/2));!I[R];)R++;for(X=L[R];!X&&I[R-1];)X=L[--R];return N[_]=R,U[W]=N[_]+1,[N,U]}}(u==s?"r":u==h?"g":"b")}}return v.prototype={volume:function(o){var r=this;return r._volume&&!o||(r._volume=(r.r2-r.r1+1)*(r.g2-r.g1+1)*(r.b2-r.b1+1)),r._volume},count:function(o){var r=this,s=r.histo;if(!r._count_set||o){var h,u,n,g=0;for(h=r.r1;h<=r.r2;h++)for(u=r.g1;u<=r.g2;u++)for(n=r.b1;n<=r.b2;n++)g+=s[y(h,u,n)]||0;r._count=g,r._count_set=!0}return r._count},copy:function(){var o=this;return new v(o.r1,o.r2,o.g1,o.g2,o.b1,o.b2,o.histo)},avg:function(o){var r=this,s=r.histo;if(!r._avg||o){var h,u,n,g,d=0,f=1<<8-c,M=0,I=0,L=0;for(u=r.r1;u<=r.r2;u++)for(n=r.g1;n<=r.g2;n++)for(g=r.b1;g<=r.b2;g++)d+=h=s[y(u,n,g)]||0,M+=h*(u+.5)*f,I+=h*(n+.5)*f,L+=h*(g+.5)*f;r._avg=d?[~~(M/d),~~(I/d),~~(L/d)]:[~~(f*(r.r1+r.r2+1)/2),~~(f*(r.g1+r.g2+1)/2),~~(f*(r.b1+r.b2+1)/2)]}return r._avg},contains:function(o){var r=this,s=o[0]>>a;return gval=o[1]>>a,bval=o[2]>>a,s>=r.r1&&s<=r.r2&&gval>=r.g1&&gval<=r.g2&&bval>=r.b1&&bval<=r.b2}},S.prototype={push:function(o){this.vboxes.push({vbox:o,color:o.avg()})},palette:function(){return this.vboxes.map(function(o){return o.color})},size:function(){return this.vboxes.size()},map:function(o){for(var r=this.vboxes,s=0;s<r.size();s++)if(r.peek(s).vbox.contains(o))return r.peek(s).color;return this.nearest(o)},nearest:function(o){for(var r,s,h,u=this.vboxes,n=0;n<u.size();n++)((s=Math.sqrt(Math.pow(o[0]-u.peek(n).color[0],2)+Math.pow(o[1]-u.peek(n).color[1],2)+Math.pow(o[2]-u.peek(n).color[2],2)))<r||r===void 0)&&(r=s,h=u.peek(n).color);return h},forcebw:function(){var o=this.vboxes;o.sort(function(u,n){return V.naturalOrder(V.sum(u.color),V.sum(n.color))});var r=o[0].color;r[0]<5&&r[1]<5&&r[2]<5&&(o[0].color=[0,0,0]);var s=o.length-1,h=o[s].color;h[0]>251&&h[1]>251&&h[2]>251&&(o[s].color=[255,255,255])}},{quantize:function(o,r){if(!o.length||r<2||r>256)return!1;var s=function(f){var M,I=new Array(1<<3*c);return f.forEach(function(L){M=y(L[0]>>a,L[1]>>a,L[2]>>a),I[M]=(I[M]||0)+1}),I}(o);s.forEach(function(){});var h=function(f,M){var I,L,k,O=1e6,A=0,N=1e6,U=0,R=1e6,W=0;return f.forEach(function(_){(I=_[0]>>a)<O?O=I:I>A&&(A=I),(L=_[1]>>a)<N?N=L:L>U&&(U=L),(k=_[2]>>a)<R?R=k:k>W&&(W=k)}),new v(O,A,N,U,R,W,M)}(o,s),u=new l(function(f,M){return V.naturalOrder(f.count(),M.count())});function n(f,M){for(var I,L=f.size(),k=0;k<x;){if(L>=M||k++>x)return;if((I=f.pop()).count()){var O=z(s,I),A=O[0],N=O[1];if(!A)return;f.push(A),N&&(f.push(N),L++)}else f.push(I),k++}}u.push(h),n(u,.75*r);for(var g=new l(function(f,M){return V.naturalOrder(f.count()*f.volume(),M.count()*M.volume())});u.size();)g.push(u.pop());n(g,r);for(var d=new S;g.size();)d.push(g.pop());return d}}}().quantize,ce=function(c){this.canvas=document.createElement("canvas"),this.context=this.canvas.getContext("2d"),this.width=this.canvas.width=c.naturalWidth,this.height=this.canvas.height=c.naturalHeight,this.context.drawImage(c,0,0,this.width,this.height)};ce.prototype.getImageData=function(){return this.context.getImageData(0,0,this.width,this.height)};var Y=function(){};Y.prototype.getColor=function(c,a){return a===void 0&&(a=10),this.getPalette(c,5,a)[0]},Y.prototype.getPalette=function(c,a,x){var y=function(z){var o=z.colorCount,r=z.quality;if(o!==void 0&&Number.isInteger(o)){if(o===1)throw new Error("colorCount should be between 2 and 20. To get one color, call getColor() instead of getPalette()");o=Math.max(o,2),o=Math.min(o,20)}else o=10;return(r===void 0||!Number.isInteger(r)||r<1)&&(r=10),{colorCount:o,quality:r}}({colorCount:a,quality:x}),l=new ce(c),v=function(z,o,r){for(var s,h,u,n,g,d=z,f=[],M=0;M<o;M+=r)h=d[0+(s=4*M)],u=d[s+1],n=d[s+2],((g=d[s+3])===void 0||g>=125)&&(h>250&&u>250&&n>250||f.push([h,u,n]));return f}(l.getImageData().data,l.width*l.height,y.quality),S=be(v,y.colorCount);return S?S.palette():null},Y.prototype.getColorFromUrl=function(c,a,x){var y=this,l=document.createElement("img");l.addEventListener("load",function(){var v=y.getPalette(l,5,x);a(v[0],c)}),l.src=c},Y.prototype.getImageData=function(c,a){var x=new XMLHttpRequest;x.open("GET",c,!0),x.responseType="arraybuffer",x.onload=function(){if(this.status==200){var y=new Uint8Array(this.response);i=y.length;for(var l=new Array(i),v=0;v<y.length;v++)l[v]=String.fromCharCode(y[v]);var S=l.join(""),z=window.btoa(S);a("data:image/png;base64,"+z)}},x.send()},Y.prototype.getColorAsync=function(c,a,x){var y=this;this.getImageData(c,function(l){var v=document.createElement("img");v.addEventListener("load",function(){var S=y.getPalette(v,5,x);a(S[0],this)}),v.src=l})};const j=document.querySelector("#dog-image"),ye=new Y,ie=()=>{const c=ye.getColor(j);document.body.style.backgroundColor=`rgb(${c[1]}), ${c[1]} `,console.log(c)};j.complete?ie():j==null||j.addEventListener("load",ie);const we=document.querySelector("#new-image-url"),Me=c=>{j.src=c.target.value};we.addEventListener("input",Me);const Ce=()=>{pe({particleCount:10,spread:180,colors:["#ee2fbe","#abe2de","#65ae3c"]})},ue=document.querySelector("#confettiButton");ue&&ue.addEventListener("click",Ce)});export default xe();
