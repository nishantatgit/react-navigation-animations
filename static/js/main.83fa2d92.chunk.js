(this["webpackJsonppage-navigation-animation"]=this["webpackJsonppage-navigation-animation"]||[]).push([[0],{31:function(e,t,n){},32:function(e,t,n){},58:function(e,t,n){},59:function(e,t,n){},60:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n(0),s=n.n(a),i=n(21),o=n.n(i),r=(n(31),n.p,n(32),n(8)),l=n(3),u=n(14),j=n(9),b=n(22),d=n.n(b),O=n(17),h=n.n(O),f=n(23),m=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],c=Object(j.a)(n,2),a=c[0],s=c[1],i=function(){var n=Object(f.a)(h.a.mark((function n(){var c;return h.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a&&"function"===typeof a&&a(),n.next=3,fetch(e).then((function(e){return e.json()}));case 3:c=n.sent,s&&"function"===typeof s&&(console.log("hiding loader ...."),s()),t&&"function"===typeof t&&t(c);case 6:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();i()},p="https://ergast.com/api/f1",x={BASE_URL:p,SEASONS:"".concat(p,"/seasons.json?limit=75")},N={Circuit:{Location:"Location",circuitId:"Circuit ID",circuitName:"Circuit Name"},date:"Date",raceName:"Race Name",round:"Round",season:"Season",result:"View Result"},v="Formula One Racing Seasons",g=n(25),S=n(11),R=n.n(S),y={"link-tile":function(e){var t=e.path,n=e.label,a=e.className,s=R()(a,"tile");return Object(c.jsx)(r.b,{to:t,className:s,title:"Formulae 1 season ".concat(n),children:n})},"race-tile":function(e){var t=e.Circuit,n=(t.Location,t.circuitId,t.circuitName),a=e.date,s=e.raceName,i=e.round,o=e.season,l=e.result,u=e.className,j=R()(u,"race-tile");return Object(c.jsxs)("div",{className:j,children:[Object(c.jsx)("span",{className:"mobile-only-inline-block",children:"Round ".concat(l?"Number":i)}),Object(c.jsx)("span",{children:a}),Object(c.jsx)("span",{children:n}),Object(c.jsx)("span",{children:s}),Object(c.jsx)("span",{className:"desktop-only-inline-block",children:i}),!l&&Object(c.jsx)(r.b,{to:"".concat(o,"/").concat(i,"/results"),title:"season ".concat(o," results"),children:"Result"}),l&&Object(c.jsx)("span",{children:l})]})}},k=function(e){var t=e.componentName,n=e.list,a=e.className,s=y[t],i=R()(a,"list");return Object(c.jsx)("section",{className:i,children:n.map((function(e){return Object(c.jsx)(s,Object(g.a)({},e))}))})},C=(n(58),function(){var e=Object(a.useState)([]),t=Object(j.a)(e,2),n=t[0],s=t[1],i=Object(a.useState)(!1),o=Object(j.a)(i,2),r=o[0],l=o[1];return Object(a.useEffect)(m.bind(null,x.SEASONS,(function(e){var t=e.MRData.SeasonTable.Seasons.map((function(e){return{path:"/season/".concat(e.season),label:e.season}}));s(Object(u.a)(t))}),[function(){l(!0)},function(){l(!1)}]),[]),r?Object(c.jsx)(d.a,{type:"Circles",className:"homepage-loader",height:"200",width:"200"}):Object(c.jsxs)("section",{className:"homepage",children:[Object(c.jsx)("h1",{children:v}),Object(c.jsx)(k,{componentName:"link-tile",list:n})]})}),E=(n(59),function(){var e=Object(a.useState)([]),t=Object(j.a)(e,2),n=t[0],s=t[1],i=Object(l.f)().year;return Object(a.useEffect)(m.bind(null,"".concat(x.BASE_URL,"/").concat(i,".json"),(function(e){var t=e.MRData.RaceTable.Races;s([N].concat(Object(u.a)(t)))})),[]),Object(c.jsxs)("section",{className:"season-details",children:[Object(c.jsxs)("h1",{children:["Season Details for year ",i]}),Object(c.jsx)(k,{componentName:"race-tile",list:n})]})});var L=function(){return Object(c.jsx)(r.a,{basename:"/react-navigation-animations",children:Object(c.jsx)("div",{className:"App",children:Object(c.jsxs)(l.c,{children:[Object(c.jsx)(l.a,{exact:!0,path:"/",children:Object(c.jsx)(C,{})}),Object(c.jsx)(l.a,{path:"/season/:year",children:Object(c.jsx)(E,{})})]})})})},w=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,61)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),c(e),a(e),s(e),i(e)}))};o.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(L,{})}),document.getElementById("root")),w()}},[[60,1,2]]]);
//# sourceMappingURL=main.83fa2d92.chunk.js.map