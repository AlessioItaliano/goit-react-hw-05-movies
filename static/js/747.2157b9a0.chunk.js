"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[747],{9747:function(n,e,t){t.r(e),t.d(e,{default:function(){return H}});var r,a,i,c,o,s,u,l,p,d,f=t(9439),x=t(2791),h=t(7689),v=t(1087),g=t(3876),m=t(1686),Z=t.n(m),j=t(3853),b=t(3311),w=t(168),k=t(5867),y=k.ZP.div(r||(r=(0,w.Z)(["\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 0 20px 20px 20px;\n"]))),_=(0,k.ZP)(v.rU)(a||(a=(0,w.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: black;\n  font-size: 20px;\n  max-width: 70px;\n  text-decoration: none;\n\n  padding: 8px 12px;\n  cursor: pointer;\n  border-radius: 10px;\n  border: 1.5px solid black;\n  margin-bottom: 20px;\n\n  :hover {\n    background-color: yellow;\n  }\n"]))),P=k.ZP.p(i||(i=(0,w.Z)(["\n  font-size: 20px;\n  font-weight: 700;\n  color: black;\n  margin: 10px 0;\n"]))),U=k.ZP.p(c||(c=(0,w.Z)(["\n  font-size: 20px;\n  font-weight: 400;\n  color: black;\n  margin: 10px 0;\n"]))),C=k.ZP.h1(o||(o=(0,w.Z)(["\n  font-size: 25px;\n  font-weight: 700;\n  color: black;\n  margin: 10px 0;\n"]))),F=k.ZP.p(s||(s=(0,w.Z)(["\n  font-size: 20px;\n  font-weight: 500;\n  color: black;\n  margin: 10px 0;\n"]))),z=k.ZP.div(u||(u=(0,w.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n  width: 100%;\n  height: 100%;\n  border-bottom: 1px solid black;\n"]))),S=k.ZP.div(l||(l=(0,w.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-self: flex-start;\n  padding: 10px 20px;\n"]))),A=k.ZP.ul(p||(p=(0,w.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-self: flex-start;\n  padding: 10px 20px;\n"]))),N=k.ZP.div(d||(d=(0,w.Z)(["\n  border-bottom: 1px solid black;\n"]))),T=t(184),H=function(){var n,e,t=(0,x.useState)(null),r=(0,f.Z)(t,2),a=r[0],i=r[1],c=(0,h.UO)().movieId,o=null!==(n=null===(e=(0,h.TH)().state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/movies";if((0,x.useEffect)((function(){(0,b.TP)(c).then((function(n){return i(n)})).catch((function(){Z().Notify.failure("\u0423\u043f\u0441, \u0449\u043e\u0441\u044c \u043f\u0456\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a...\u0421\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u043f\u0435\u0440\u0435\u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u0438 \u0441\u0442\u043e\u0440\u0456\u043d\u043a\u0443 \u0449\u0435 \u0440\u0430\u0437.")}))}),[c]),a){var s=a.title,u=a.poster_path,l=a.vote_average,p=a.overview,d=a.genres,m=a.release_date,w=Math.floor(10*l),k=m.slice(0,4);return(0,T.jsx)(T.Fragment,{children:(0,T.jsxs)(y,{children:[(0,T.jsxs)(_,{to:o,children:[(0,T.jsx)(j.Ao2,{size:"20px"}),"Back"]}),(0,T.jsxs)(z,{children:[(0,T.jsx)(T.Fragment,{children:u?(0,T.jsx)("img",{src:"https://image.tmdb.org/t/p/w500/".concat(u),alt:s}):(0,T.jsx)("img",{src:"https://via.placeholder.com/150x150/CCCCCC/FFFFFF?text=No+Image",alt:"No Available Foto"})}),(0,T.jsxs)(S,{children:[(0,T.jsxs)(C,{children:[s," (",k,")"]}),(0,T.jsxs)(F,{children:["User score: ",w,"%"]}),(0,T.jsxs)("div",{children:[(0,T.jsx)(P,{children:"Overview"}),p.length>0?(0,T.jsx)(U,{children:p}):(0,T.jsx)(U,{children:"We don't have any overview for this movie"})]}),(0,T.jsxs)("div",{children:[(0,T.jsx)(P,{children:"Genres"}),(0,T.jsx)(U,{children:d.map((function(n){return n.name})).join(" ")})]})]})]}),(0,T.jsxs)(N,{children:[(0,T.jsx)(P,{children:"Additional information"}),(0,T.jsxs)(A,{children:[(0,T.jsx)(v.rU,{to:"/movies/".concat(c,"/cast"),children:"Cast"}),(0,T.jsx)(v.rU,{to:"/movies/".concat(c,"/reviews"),children:"Reviews"})]})]}),(0,T.jsx)(x.Suspense,{fallback:(0,T.jsx)(g.Z,{}),children:(0,T.jsx)(h.j3,{})})]})})}}},3311:function(n,e,t){t.d(e,{Df:function(){return s},TP:function(){return l},gH:function(){return u},tx:function(){return d},zv:function(){return p}});var r=t(4165),a=t(5861),i=t(1243),c="https://api.themoviedb.org/3",o="db1d869ed5ade03c76087b14b8b94d47",s=function(){var n=(0,a.Z)((0,r.Z)().mark((function n(){var e;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("".concat(c,"/trending/movie/week?api_key=").concat(o,"&language=en-US&page=1"));case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),u=function(){var n=(0,a.Z)((0,r.Z)().mark((function n(e){var t;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("".concat(c,"/search/movie?query=").concat(e,"&api_key=").concat(o,"&language=en-US&include_adult=false&page=1"));case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,a.Z)((0,r.Z)().mark((function n(e){var t;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("".concat(c,"/movie/").concat(e,"?api_key=").concat(o,"&language=en-US"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,a.Z)((0,r.Z)().mark((function n(e){var t;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("".concat(c,"/movie/").concat(e,"/credits?api_key=").concat(o,"&language=en-US"));case 2:return t=n.sent,n.abrupt("return",t.data.cast);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),d=function(){var n=(0,a.Z)((0,r.Z)().mark((function n(e){var t;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("".concat(c,"/movie/").concat(e,"/reviews?api_key=").concat(o,"&language=en-US&page=1"));case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=747.2157b9a0.chunk.js.map