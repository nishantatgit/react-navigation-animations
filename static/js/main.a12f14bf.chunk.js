(this["webpackJsonppage-navigation-animation"]=this["webpackJsonppage-navigation-animation"]||[]).push([[0],{30:function(e,t,n){},31:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n(0),s=n.n(a),i=n(21),r=n.n(i),o=(n(30),n.p,n(31),n(7)),u=n(2),l=n(13),j=n(14),b=n(17),O=n.n(b),d=n(22),h=function(e,t){(function(){var n=Object(d.a)(O.a.mark((function n(){var c;return O.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch(e).then((function(e){return e.json()}));case 2:c=n.sent,t&&"function"===typeof t&&t(c);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}})()()},f="https://ergast.com/api/f1",m={BASE_URL:f,SEASONS:"".concat(f,"/seasons.json?limit=75")},p={Circuit:{Location:"Location",circuitId:"Circuit ID",circuitName:"Circuit Name"},date:"Date",raceName:"Race Name",round:"Round",season:"Season",result:"View Result"},x="Formula One Racing Seasons",N=n(24),v=n(9),S=n.n(v),g={"link-tile":function(e){var t=e.path,n=e.label,a=e.className,s=S()(a,"tile");return Object(c.jsx)(o.b,{to:t,className:s,title:"Formulae 1 season ".concat(n),children:n})},"race-tile":function(e){var t=e.Circuit,n=(t.Location,t.circuitId,t.circuitName),a=e.date,s=e.raceName,i=e.round,r=e.season,u=e.result,l=e.className,j=S()(l,"race-tile");return Object(c.jsxs)("div",{className:j,children:[Object(c.jsx)("span",{children:a}),Object(c.jsx)("span",{children:n}),Object(c.jsx)("span",{children:s}),Object(c.jsx)("span",{children:i}),!u&&Object(c.jsx)(o.b,{to:"".concat(r,"/").concat(i,"/results"),title:"season ".concat(r," results"),children:"Result"}),u&&Object(c.jsx)("span",{children:u})]})}},R=function(e){var t=e.componentName,n=e.list,a=e.className,s=g[t],i=S()(a,"list");return Object(c.jsx)("section",{className:i,children:n.map((function(e){return Object(c.jsx)(s,Object(N.a)({},e))}))})},C=(n(38),function(){var e=Object(a.useState)([]),t=Object(j.a)(e,2),n=t[0],s=t[1];return Object(a.useEffect)(h.bind(null,m.SEASONS,(function(e){var t=e.MRData.SeasonTable.Seasons.map((function(e){return{path:"/season/".concat(e.season),label:e.season}}));s(Object(l.a)(t))})),[]),Object(c.jsxs)("section",{className:"homepage",children:[Object(c.jsx)("h1",{children:x}),Object(c.jsx)(R,{componentName:"link-tile",list:n})]})}),E=(n(39),function(){var e=Object(a.useState)([]),t=Object(j.a)(e,2),n=t[0],s=t[1],i=Object(u.f)().year;return Object(a.useEffect)(h.bind(null,"".concat(m.BASE_URL,"/").concat(i,".json"),(function(e){var t=e.MRData.RaceTable.Races;s([p].concat(Object(l.a)(t)))})),[]),Object(c.jsxs)("section",{className:"season-details",children:[Object(c.jsxs)("h1",{children:["Season Details for year ",i]}),Object(c.jsx)(R,{componentName:"race-tile",list:n})]})});var L=function(){return Object(c.jsx)(o.a,{children:Object(c.jsx)("div",{className:"App",children:Object(c.jsxs)(u.c,{children:[Object(c.jsx)(u.a,{exact:!0,path:"/",children:Object(c.jsx)(C,{})}),Object(c.jsx)(u.a,{path:"/season/:year",children:Object(c.jsx)(E,{})})]})})})},y=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,41)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),c(e),a(e),s(e),i(e)}))};r.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(L,{})}),document.getElementById("root")),y()}},[[40,1,2]]]);
//# sourceMappingURL=main.a12f14bf.chunk.js.map