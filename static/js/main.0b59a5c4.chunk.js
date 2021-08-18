(this["webpackJsonpcovid-19-tracker"]=this["webpackJsonpcovid-19-tracker"]||[]).push([[0],{101:function(e,t,c){},106:function(e,t,c){},202:function(e,t,c){},203:function(e,t,c){},204:function(e,t,c){},205:function(e,t,c){},207:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c(7),s=c.n(a),r=c(13),o=c.n(r),i=c(16),l=c(11),d=(c(66),c.p+"static/media/COVID-19.04145961.jpg"),j=c(2),u=function(){return Object(j.jsxs)("div",{className:"app__header",children:[Object(j.jsx)("div",{className:"app__header__image",children:Object(j.jsx)("img",{src:d})}),Object(j.jsx)("h3",{children:"Covid 19 Tracker"})]})},h=c(234),b=c(238),O=c(239),f=c(10),x=c.n(f);c(101);var p=function(e){var t=e.title,c=e.id,n=e.cases,a=e.total,s=e.handleClick,r=e.setHandleClick;return Object(j.jsx)(h.a,{onClick:function(){r(c),console.log(s)},children:Object(j.jsxs)(b.a,{className:c,children:[Object(j.jsx)(O.a,{className:"statsBox__title",color:"textSecondary",children:t}),Object(j.jsx)("h2",{className:"statsBox__cases",children:x()(n).format("+0,0")}),Object(j.jsxs)(O.a,{className:"statsBox__total",color:"textSecondary",children:["Total ",x()(a).format("0,0")]})]})})};var v=function(e){var t=e.title,c=(e.cases,e.vaccinationData);console.log(c),console.log(c[Object.keys(c)[0]]),console.log(c[Object.keys(c)[1]]),console.log(c[Object.keys(c)[3]]);var n=c[Object.keys(c)[2]]-c[Object.keys(c)[0]];return console.log(n),Object(j.jsx)(h.a,{children:Object(j.jsxs)(b.a,{className:"vaccinated",children:[Object(j.jsx)(O.a,{className:"statsBox__title",color:"textSecondary",children:t}),Object(j.jsx)("h2",{className:"statsBox__cases",children:x()(n).format("+0,0")}),Object(j.jsxs)(O.a,{className:"statsBox__total",color:"textSecondary",children:["Total ",x()(c[Object.keys(c)[0]]).format("0,0")]})]})})},m=(c(106),c(64)),y=c.n(m);var g=function(e){var t=e.name,c=e.flag,n=e.continent,a=e.updated;return Object(j.jsx)("div",{children:Object(j.jsx)(h.a,{className:"countryInfo",children:Object(j.jsxs)(b.a,{className:"countryInfo__cardContent",children:[Object(j.jsx)("h2",{children:t||"Afghanistan"}),Object(j.jsx)("div",{children:Object(j.jsx)("img",{alt:"flag",src:c})}),Object(j.jsx)(O.a,{color:"textSecondary",children:n||"Asia"}),Object(j.jsxs)(O.a,{color:"textSecondary",className:"timestamp",children:["Updated: ",y()(a).format("MMMM Do YYYY, h:mm:a")]})]})})})},_=c(88);c(202);var k=function(e){var t=e.country,c=e.handleClick;console.log(c),console.log(t);var a=Object(n.useState)({}),s=Object(l.a)(a,2),r=s[0],d=s[1],u=function(e){var t,c=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"cases",n=[];for(var a in e.cases){if(t){var s={x:a,y:e[c][a]-t};n.push(s)}t=e[c][a]}return n};console.log(t),console.log(e.handleClick),Object(n.useEffect)((function(){(function(){var e=Object(i.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://disease.sh/v3/covid-19/historical/".concat(t,"?lastdays=90")).then((function(e){return e.json()})).then((function(e){console.log(e.country),console.log(t);var n=u(e.timeline,c);d(n)}));case 2:console.log(r);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[t,c]),console.log(t);var h={legend:{display:!0},elements:{point:{radius:0}},maintainAspectRatio:!1,tooltips:{mode:"index",intersect:!1,callbacks:{label:function(e,t){return x()(e.value).format("+0,0")}}},scales:{xAxes:[{type:"time",time:{format:"MM/DD/YY",tooltipFormat:"ll"}}],yAxes:[{gridLines:{display:!1},ticks:{callback:function(e,t,c){return x()(e).format("0a")}}}]}};return Object(j.jsxs)("div",{className:"lineGraph",children:[Object(j.jsxs)("h4",{children:["Graph Showing ",c," data"]}),(null===r||void 0===r?void 0:r.length)>0&&Object(j.jsx)(_.Line,{data:{datasets:[{backgroundColor:"rgba(204,16,52, 0.5)",borderColor:"#CC1034",label:"".concat(c," Increase In last 90 days"),data:r}]},options:h})]})};c(203);var w=function(){var e=Object(n.useState)([]),t=Object(l.a)(e,2),c=t[0],a=t[1];return Object(n.useEffect)((function(){(function(){var e=Object(i.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://disease.sh/v3/covid-19/countries?sort=cases").then((function(e){return e.json()})).then((function(e){var t=e.map((function(e){return{country:e.country,cases:e.cases}}));a(t)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(j.jsxs)("div",{className:"table",children:[Object(j.jsx)("h4",{children:"Live Cases By Country"}),Object(j.jsxs)("table",{children:[Object(j.jsx)("thead",{children:Object(j.jsx)("tr",{children:c.map((function(e){return Object(j.jsxs)("tr",{className:"table_row",children:[Object(j.jsx)("td",{children:e.country}),Object(j.jsx)("td",{children:x()(e.cases).format("0,0")})]})}))})}),Object(j.jsx)("tbody",{})]})]})};c(204);var C=function(){var e=Object(n.useState)([]),t=Object(l.a)(e,2),c=t[0],a=t[1];return Object(n.useEffect)((function(){(function(){var e=Object(i.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https:disease.sh/v3/covid-19/all").then((function(e){return e.json()})).then((function(e){a(e)}));case 2:console.log(c);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(j.jsxs)("div",{className:"world__summary",children:[Object(j.jsx)("h3",{children:"Current Global Covid-19 Figures"}),Object(j.jsxs)("div",{className:"world__summary__content",children:[Object(j.jsx)(h.a,{className:"world__summary__card",children:Object(j.jsxs)(b.a,{className:"cases",children:[Object(j.jsx)(O.a,{color:"textSecondary",children:" Cases"}),Object(j.jsx)("h4",{children:x()(c.cases).format("0,0")}),Object(j.jsxs)(O.a,{color:"textSecondary",children:["+",x()(c.todayCases).format("0,0")]})]})}),Object(j.jsx)(h.a,{children:Object(j.jsxs)(b.a,{className:"recovered",children:[Object(j.jsx)(O.a,{color:"textSecondary",children:"Recovered"}),Object(j.jsx)("h4",{children:x()(c.recovered).format("0,0")}),Object(j.jsxs)(O.a,{color:"textSecondary",children:["+",x()(c.todayRecovered).format("0,0")]})]})}),Object(j.jsx)(h.a,{children:Object(j.jsxs)(b.a,{className:"deaths",children:[Object(j.jsx)(O.a,{color:"textSecondary",children:"Deaths"}),Object(j.jsxs)("h4",{children:["  ",x()(c.deaths).format("0,0")]}),Object(j.jsxs)(O.a,{color:"textSecondary",children:["+",x()(c.todayDeaths).format("0,0")]})]})})]})]})},N=c(244),S=c(245),I=c(246),D=c(240),A=c(241),M=c(247),B=c(242),G=c(243),Y=c(15),z=c.n(Y),E=(c(82),c(205),c(89)),R=z.a.icon({iconUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Google_Maps_pin.svg/585px-Google_Maps_pin.svg.png",shadowUrl:E.a,iconSize:[25,41],iconAnchor:[12,41]});function H(e){var t=e.center,c=Object(D.a)();return c.setView(t,c.getZoom()),null}z.a.Marker.prototype.options.icon=R;var F=function(e){var t=e.countries,c=e.handleClick,n=e.active,a=e.critical,s=e.name,r=e.center,o=e.zoom,i=e.population;return console.log(t),console.log(c),Object(j.jsx)("div",{className:"map",children:Object(j.jsxs)(A.a,{center:r,zoom:o,children:[Object(j.jsx)(M.a,{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'}),Object(j.jsx)(B.a,{position:r,children:Object(j.jsxs)(G.a,{children:[Object(j.jsxs)("h3",{children:["Country: ",s]})," ",Object(j.jsx)("br",{}),Object(j.jsxs)("h4",{children:["Population: ",x()(i).format(0,0)]}),"  ",Object(j.jsx)("br",{}),Object(j.jsxs)("h4",{children:["Active Cases: ",x()(n).format(0,0)]}),"  ",Object(j.jsx)("br",{}),Object(j.jsxs)("h4",{children:["Critical: ",x()(a).format(0,0)]})]})}),Object(j.jsx)(H,{center:r})]})})};var L=function(){var e=Object(n.useState)([]),t=Object(l.a)(e,2),c=t[0],a=t[1],s=Object(n.useState)("AFG"),r=Object(l.a)(s,2),d=r[0],O=r[1],f=Object(n.useState)({country:"Afghanistan",countryInfo:{flag:"https://disease.sh/assets/img/flags/af.png"}}),x=Object(l.a)(f,2),m=x[0],y=x[1],_=Object(n.useState)({}),D=Object(l.a)(_,2),A=D[0],M=D[1],B=Object(n.useState)("cases"),G=Object(l.a)(B,2),Y=G[0],z=G[1],E=Object(n.useState)({lat:30,lng:-40.4796}),R=Object(l.a)(E,2),H=R[0],L=R[1],T=Object(n.useState)(3),U=Object(l.a)(T,2),V=U[0],J=U[1],P=Object(n.useState)([]),W=Object(l.a)(P,2),Z=W[0],q=W[1];console.log(Y),console.log(m),Object(n.useEffect)((function(){(function(){var e=Object(i.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://disease.sh/v3/covid-19/countries?yesterday=true&twoDaysAgo=false&allowNull=true").then((function(e){return e.json()})).then((function(e){console.log(e);var t=e.map((function(e){return{country:e.country,value:e.countryInfo.iso3,id:e.countryInfo._id,flag:e.countryInfo.flag,updated:e.updated}}));a(t),q(e),console.log(t)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var K=function(){var e=Object(i.a)(o.a.mark((function e(t){var c,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=t.target.value,n="worldwide"===c?"https:disease.sh/v3/covid-19/all":"https:disease.sh/v3/covid-19/countries/".concat(c,"?strict=true"),e.next=4,fetch(n).then((function(e){return e.json()})).then((function(e){O(c),y(e),console.log(e),console.log(e.country),L({lat:e.countryInfo.lat,lng:e.countryInfo.long}),J(4)}));case 4:console.log(m),function(){var e=Object(i.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://disease.sh/v3/covid-19/vaccine/coverage/countries/".concat(c,"?lastdays=3")).then((function(e){return e.json()})).then((function(e){M(e.timeline)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()();case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(j.jsxs)("div",{className:"app",children:[Object(j.jsx)(u,{}),Object(j.jsxs)("div",{className:"app__content",children:[Object(j.jsxs)("div",{className:"app__left",children:[Object(j.jsx)(N.a,{className:"app__dropdown",children:Object(j.jsxs)(S.a,{className:"app__dropdown__select",variant:"outlined",value:d,onChange:K,children:[Object(j.jsx)(I.a,{value:"worldwide",children:"Worldwide"},"worldwide"),c.map((function(e){return Object(j.jsx)(I.a,{value:e.value,children:e.country})}))]})}),Object(j.jsxs)("div",{className:"countryInfo__container",children:[Object(j.jsx)(g,{name:m.country,flag:m.countryInfo.flag,continent:m.continent,updated:m.updated}),Object(j.jsxs)("div",{className:"statsBox",children:[Object(j.jsx)(p,{handleClick:Y,setHandleClick:z,className:"cases",id:"cases",title:" Cases",cases:m.todayCases,total:m.cases}),Object(j.jsx)(p,{handleClick:Y,setHandleClick:z,title:"Recovered",id:"recovered",cases:m.todayRecovered,total:m.recovered}),Object(j.jsx)(p,{handleClick:Y,setHandleClick:z,title:"Deaths",id:"deaths",cases:m.todayDeaths,total:m.deaths}),Object(j.jsx)(v,{title:"Vaccinated",vaccinationData:A})]})]}),Object(j.jsx)("div",{children:Object(j.jsx)(F,{handleClick:Y,countries:Z,name:m.country,active:m.active,critical:m.critical,population:m.population,center:H,zoom:V})}),Object(j.jsx)(C,{})]}),Object(j.jsxs)(h.a,{className:"app__right",children:[Object(j.jsx)(b.a,{children:Object(j.jsx)(w,{})}),Object(j.jsx)(b.a,{className:"lineGraph_Card",children:Object(j.jsx)(k,{center:H,country:d,handleClick:Y})})]})]})]})};s.a.render(Object(j.jsx)("div",{children:Object(j.jsx)(L,{})}),document.getElementById("root"))},66:function(e,t,c){}},[[207,1,2]]]);
//# sourceMappingURL=main.0b59a5c4.chunk.js.map