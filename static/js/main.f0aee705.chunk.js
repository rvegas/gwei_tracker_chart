(this.webpackJsonpgwei_price_watcher=this.webpackJsonpgwei_price_watcher||[]).push([[0],{160:function(e,t,r){"use strict";r.r(t);var i=r(10),n=r.n(i),a=r(49),o=r.n(a),c=(r(57),r(52)),d=r(51),s=(r(58),r(50)),p=r(15),u={apiKey:"AIzaSyCYa490KJ_GJqsykw4668Z-CiZ2wfJ1tZ4",authDomain:"gwei-price-watcher.firebaseapp.com",projectId:"gwei-price-watcher",storageBucket:"gwei-price-watcher.appspot.com",messagingSenderId:"859407948329",appId:"1:859407948329:web:8fa4d1f6db64e32a7c5a38",measurementId:"G-RKYDJQ62M6"},l=r(7);p.a.apps.length?p.a.app():p.a.initializeApp(u);var b=p.a.firestore().collection("gwei_prices").orderBy("date","desc").limit(30);var f=function(){var e=Object(i.useState)(null),t=Object(d.a)(e,2),r=t[0],n=t[1],a=Object(i.useCallback)((function(){b.get().then((function(e){var t=e.docs.map((function(e){return Object(c.a)({id:e.id},e.data())})).reverse(),r=t.map((function(e){return new Date(1e3*e.date.seconds).toLocaleString("en-GB",{timeZone:"UTC"})})),i=t.map((function(e){return e.uni_swap})),a=t.map((function(e){return e.erc20_transfer})),o=t.map((function(e){return e.uni_liq}));n({labels:r,uni_swap:i,erc_20:a,uni_liq:o})}))}),[]);Object(i.useEffect)((function(){a()}),[a]);var o={labels:r?r.labels:[],datasets:[{label:"UNI SWAP",backgroundColor:"rgb(20 144 41 / 0.3)",borderColor:"rgb(20 144 41 / 1)",pointBackgroundColor:"#fff",pointBorderWidth:2,pointHoverRadius:5,pointHoverBorderWidth:2,pointRadius:4,pointHitRadius:10,data:r?r.uni_swap:[]},{label:"ERC 20",backgroundColor:"rgb(27 63 136 / 0.3)",borderColor:"rgb(27 63 136 / 1)",pointBackgroundColor:"#fff",pointBorderWidth:2,pointHoverRadius:5,pointHoverBorderWidth:2,pointRadius:4,pointHitRadius:10,data:r?r.erc_20:[]},{label:"UNI LIQ",backgroundColor:"rgb(142 20 144 / .3)",borderColor:"rgb(142 20 144 / 1)",pointBackgroundColor:"#fff",pointBorderWidth:2,pointHoverRadius:5,pointHoverBorderWidth:2,pointRadius:4,pointHitRadius:10,data:r?r.uni_liq:[]}]};return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsxs)("header",{className:"App-header",children:[Object(l.jsx)("h2",{children:"Gwei Prices"}),Object(l.jsx)("div",{className:"chart",children:Object(l.jsx)(s.Line,{data:o})})]}),Object(l.jsx)("footer",{children:Object(l.jsx)("a",{href:"https://etherscan.io/apis",rel:"noreferrer",target:"_blank",children:"Powered by Etherscan.io APIs"})})]})},h=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,161)).then((function(t){var r=t.getCLS,i=t.getFID,n=t.getFCP,a=t.getLCP,o=t.getTTFB;r(e),i(e),n(e),a(e),o(e)}))};o.a.render(Object(l.jsx)(n.a.StrictMode,{children:Object(l.jsx)(f,{})}),document.getElementById("root")),h()},57:function(e,t,r){},58:function(e,t,r){}},[[160,1,2]]]);
//# sourceMappingURL=main.f0aee705.chunk.js.map