(this.webpackJsonpkusinanichichi=this.webpackJsonpkusinanichichi||[]).push([[0],{12:function(e,t,a){},15:function(e,t,a){},37:function(e,t,a){},57:function(e,t,a){},60:function(e,t,a){},61:function(e,t,a){},68:function(e,t,a){"use strict";a.r(t);var c=a(1),s=a.n(c),n=a(31),i=a.n(n),r=(a(37),a(17)),l=a(3),d=a(9),o=a(10),m=a.n(o),b=(a(15),a(12),a(0));var j=function(){var e=Object(c.useState)([]),t=Object(d.a)(e,2),a=t[0],s=t[1];return Object(c.useEffect)((function(){m.a.get("http://localhost:3001/silogmenu").then((function(e){s(e.data)}))})),Object(b.jsx)("div",{className:"menupage container",children:Object(b.jsxs)("div",{className:"row",children:[Object(b.jsxs)("div",{className:"col-md-4 py-2 d-flex flex-column flex-wrap",children:[Object(b.jsx)("a",{className:"btn btn-animation btn-bg border-orange menu_writing current",href:"/silogmeals",role:"button",children:"Silog Meals"}),Object(b.jsx)("a",{className:"btn btn-animation btn-bg border-orange mt-3 menu_writing",href:"/snacks",role:"button",children:"Snacks"}),Object(b.jsx)("a",{className:"btn btn-animation btn-bg border-orange mt-3 menu_writing",href:"/drinks",role:"button",children:"Drinks"}),Object(b.jsx)("a",{className:"btn btn-animation btn-bg border-orange mt-3 menu_writing",href:"/wings",role:"button",children:"Wings"})]}),Object(b.jsx)("div",{className:"mx-auto col mt-2 mr-4",children:Object(b.jsx)("div",{className:"d-flex row flex-wrap justify-content-around text-center",children:a.map((function(e,t){var a=parseFloat(e.foodPrice).toFixed(2);return Object(b.jsxs)("div",{className:"card col-lg-5 col-md-6 border-0 food_cards m-2",children:[Object(b.jsx)("img",{className:"food-img card-img-top m-auto rounded border-orange",src:e.foodImgPath,style:{height:"190px",width:"235px"},alt:""}),Object(b.jsx)("div",{className:"card-body",children:Object(b.jsxs)("div",{className:"card-title menu_writing",children:["\u20b1",a," \xa0 \u2014 \xa0",e.foodName]})})]})}))})})]})})},h=(a(57),a(20)),x=a(16);var u=function(){return Object(b.jsxs)("div",{className:"homepage",children:[Object(b.jsxs)("div",{className:"text-center text-muted mb-5",children:["** ",Object(b.jsxs)("u",{children:["Please order through our ",Object(b.jsx)("a",{className:"text-decoration-none",href:"https://www.facebook.com/kusinanichichipromisesalasa",target:"_blank",children:"Facebook"})," page"]})," **"]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("div",{className:"text-center h3 our-best-seller-font mb-4",children:"Our Best Sellers"}),Object(b.jsx)("div",{className:"row",children:Object(b.jsx)("div",{className:"mx-auto col",children:Object(b.jsx)("div",{className:"d-flex row flex-wrap justify-content-around",children:[{id:"1",imgPath:"https://i.imgur.com/BSf6QJ2.jpg"},{id:"2",imgPath:"https://i.imgur.com/a7tAoRn.jpg"},{id:"3",imgPath:"https://i.imgur.com/siZ80nZ.jpg"}].map((function(e,t){return Object(b.jsx)("div",{className:"card col-lg-3 col-md-6 border-0 m-2",children:Object(b.jsx)("img",{className:"card-img-top m-auto rounded border-orange border-thickness",src:e.imgPath,style:{height:"190px",width:"235px"},alt:""})})}))})})}),Object(b.jsx)("div",{className:"row",children:Object(b.jsx)("div",{className:"col text-center mb-5",children:Object(b.jsxs)("a",{className:"btn btn-animation btn-color mt-4 text-dark",href:"/silogmeals",role:"button",style:{width:"115px"},alt:"",children:[" Menu ",Object(b.jsx)(h.a,{className:"pl-3",icon:x.a})," "]})})})]}),Object(b.jsx)("div",{className:"h3 text-center mt-5 mb-4 our-best-seller-font",children:"Reviews"}),Object(b.jsx)("div",{className:"row",children:Object(b.jsx)("div",{className:"mx-auto col",children:Object(b.jsx)("div",{className:"d-flex flex-row flex-wrap justify-content-around",children:[{id:"1",imgPath:"https://i.imgur.com/9kXwAf8.jpg"},{id:"2",imgPath:"https://i.imgur.com/Ne4t0uG.jpg"},{id:"3",imgPath:"https://i.imgur.com/mvkq1VS.jpg"},{id:"4",imgPath:"https://i.imgur.com/c87BXKG.jpg"}].map((function(e,t){return Object(b.jsx)("div",{className:"card shadow-lg bg-dark col-lg-3 col-md-6 border-0 m-2",children:Object(b.jsx)("img",{className:"card-img-top m-auto rounded",src:e.imgPath,alt:""})})}))})})})]})},g=a.p+"static/media/logo.390867ea.jpg";a(60);var O=function(){var e,t=Object(c.useState)(!1),a=Object(d.a)(t,2),s=a[0],n=a[1],i=document.querySelector(".nav-menu-btn,.mobile-nav__position");return s&&(i.classList.toggle("open"),e=Object(b.jsx)("nav",{className:"mobile-nav__background navbar navbar-light border-bottom shadow-lg",children:Object(b.jsxs)("ul",{className:"navbar-nav d-flex flex-column pt-4 mx-auto",children:[Object(b.jsx)("li",{className:"nav-item highlight",children:Object(b.jsx)("a",{href:"/",className:"nav-link mobile-nav-link__texts",children:"Home"})}),Object(b.jsx)("li",{className:"nav-item highlight mt-5",children:Object(b.jsx)("a",{href:"/silogmeals",className:"nav-link mobile-nav-link__texts",children:"Menu"})}),Object(b.jsx)("li",{className:"nav-item highlight mt-5 mb-4",children:Object(b.jsx)("a",{href:"/contact",className:"nav-link mobile-nav-link__texts",children:"Contact"})})]})})),Object(b.jsxs)("div",{children:[Object(b.jsx)("div",{className:"nav-lgscreen",children:Object(b.jsxs)("nav",{id:"navigation",className:"navbar bg-light nav_border fixed-top border-bottom",children:[Object(b.jsx)("div",{className:"row",children:Object(b.jsx)("div",{className:"col address-writing",children:Object(b.jsxs)("a",{href:"https://www.google.com/maps/dir/?api=1&destination=14.2787659%2C121.0552253&fbclid=IwAR3Ko4NduyJwbUQjLyi_gSo1-on9m74v1yjpEBHWGDB5IkbN_4CjtKL9bZE",target:"_blank",children:["Blk 9 Lot 29 Matthew St. ",Object(b.jsx)("br",{}),"Juana 6 Brgy. San Francisco 4024 Bi\xf1an, Philippines"]})})}),Object(b.jsx)("a",{className:"navbar-brand ml-5",href:"/",children:Object(b.jsx)("img",{className:"border-orange rounded-circle",src:g,style:{height:"85px",width:"85px"},alt:""})}),Object(b.jsxs)("ul",{id:"menuLinks",className:"navbar-nav d-flex flex-row",children:[Object(b.jsx)("li",{className:"nav-item",children:Object(b.jsx)("a",{className:"nav-link px-2",href:"/",children:"Home"})}),Object(b.jsx)("li",{className:"nav-item",children:Object(b.jsx)("a",{className:"nav-link px-2",href:"/silogmeals#",children:"enu"})}),Object(b.jsx)("li",{className:"nav-item",children:Object(b.jsx)("a",{className:"nav-link px-2",href:"/contact",children:"Contact"})})]})]})}),Object(b.jsx)("div",{className:"ml-3 mt-1",children:Object(b.jsx)("a",{className:"mx-auto mobile-logo",href:"/",children:Object(b.jsx)("img",{className:"border-orange rounded-circle",src:g,style:{height:"85px",width:"85px"},alt:""})})}),Object(b.jsxs)("div",{className:"mobile-nav ",children:[Object(b.jsx)("div",{className:"mobile-nav__position",children:e}),Object(b.jsx)("div",{className:"nav-menu-btn mr-4 shadow-lg ml-auto ".concat(s?"open":""),onClick:function(){return n(!s)},children:Object(b.jsx)("div",{className:"ml-auto nav-menu-btn__burger"})})]})]})};a.p,a.p,a.p;var v=function(){var e=Object(c.useState)([]),t=Object(d.a)(e,2),a=t[0],s=t[1];return Object(c.useEffect)((function(){m.a.get("http://localhost:3001/snackmenu").then((function(e){s(e.data)}))})),Object(b.jsx)("div",{className:"menupage container",children:Object(b.jsxs)("div",{className:"row",children:[Object(b.jsxs)("div",{className:"col-md-4 py-2 d-flex flex-column flex-wrap",children:[Object(b.jsx)("a",{className:"btn btn-animation btn-bg border-orange menu_writing",href:"/silogmeals",role:"button",children:"Silog Meals"}),Object(b.jsx)("a",{className:"btn btn-animation btn-bg border-orange mt-3 menu_writing current",href:"/snacks",role:"button",children:"Snacks"}),Object(b.jsx)("a",{className:"btn btn-animation btn-bg border-orange mt-3 menu_writing",href:"/drinks",role:"button",children:"Drinks"}),Object(b.jsx)("a",{className:"btn btn-animation btn-bg border-orange mt-3 menu_writing",href:"/wings",role:"button",children:"Wings"})]}),Object(b.jsx)("div",{className:"mx-auto col mt-2 mr-4",children:Object(b.jsx)("div",{className:"d-flex row flex-wrap justify-content-around text-center",children:a.map((function(e,t){var a=parseFloat(e.snackPrice).toFixed(2);return Object(b.jsxs)("div",{className:"card col-lg-5 col-md-6 border-0 food_cards m-2",children:[Object(b.jsx)("img",{className:"food-img card-img-top m-auto rounded border-orange",src:e.snackImgPath,style:{height:"190px",width:"235px"},alt:""}),Object(b.jsx)("div",{className:"card-body",children:Object(b.jsxs)("div",{className:"card-title menu_writing",children:["\u20b1",a," \xa0 \u2014 \xa0",e.snackName]})})]})}))})})]})})};a.p;var N=function(){var e=Object(c.useState)([]),t=Object(d.a)(e,2),a=t[0],s=t[1];return Object(c.useEffect)((function(){m.a.get("http://localhost:3001/drinkmenu").then((function(e){s(e.data)}))})),Object(b.jsx)("div",{className:"menupage container",children:Object(b.jsxs)("div",{className:"row",children:[Object(b.jsxs)("div",{className:"col-md-4 py-2 d-flex flex-column flex-wrap",children:[Object(b.jsx)("a",{className:"btn btn-animation btn-bg border-orange menu_writing",href:"/silogmeals",role:"button",children:"Silog Meals"}),Object(b.jsx)("a",{className:"btn btn-animation btn-bg border-orange mt-3 menu_writing",href:"/snacks",role:"button",children:"Snacks"}),Object(b.jsx)("a",{className:"btn btn-animation btn-bg border-orange mt-3 menu_writing current",href:"/drinks",role:"button",children:"Drinks"}),Object(b.jsx)("a",{className:"btn btn-animation btn-bg border-orange mt-3 menu_writing",href:"/wings",role:"button",children:"Wings"})]}),Object(b.jsx)("div",{className:"mx-auto col mt-2 mr-4",children:Object(b.jsx)("div",{className:"d-flex row flex-wrap justify-content-around text-center",children:a.map((function(e,t){var a=parseFloat(e.drinkPriceSm).toFixed(2),c=parseFloat(e.drinkPriceMd).toFixed(2),s=parseFloat(e.drinkPriceLg).toFixed(2);return Object(b.jsxs)("div",{className:"card col-lg-5 col-md-6 border-0 food_cards m-2",children:[Object(b.jsx)("img",{className:"food-img card-img-top m-auto rounded border-orange",src:e.drinkImgPath,style:{height:"190px",width:"235px"},alt:""}),Object(b.jsx)("div",{className:"card-body",children:Object(b.jsxs)("div",{className:"card-title menu_writing",children:[" ",e.drinkName,Object(b.jsxs)("div",{className:"text-muted",children:[e.drinkSizeSm,"oz \u2014 ",e.drinkSizeMd,"oz \u2014 ",e.drinkSizeLg,"oz "]}),Object(b.jsxs)("div",{className:"menu_writing",children:[" \u20b1",a," \u2014 \u20b1",c," \u2014 \u20b1",s," "]}),Object(b.jsx)("div",{children:"NATA and Pearl \u20b110.00/scoop "})]})})]})}))})})]})})};a.p,a(61);var p=function(){return Object(b.jsx)("div",{className:"container contact-page",children:Object(b.jsx)("div",{className:"text-center",children:Object(b.jsxs)("div",{className:"row",children:[Object(b.jsxs)("div",{className:"col order-1",children:[Object(b.jsxs)("div",{className:"m-5",children:[" ",Object(b.jsx)("span",{className:"h5",children:"PHONE"}),Object(b.jsx)("div",{className:"contact-subtext",children:"+63 (949) 456-6027"}),Object(b.jsx)("div",{className:"contact-subtext",children:"or"}),Object(b.jsx)("div",{className:"contact-subtext",children:"+63 (949) 984-3231"})]}),Object(b.jsxs)("div",{className:"m-5",children:[" ",Object(b.jsx)("span",{className:"h5",children:"Email"}),Object(b.jsx)("div",{className:"contact-subtext",children:Object(b.jsx)("a",{href:"mailto: ludyanncharisecatipon@gmail.com",children:"ludyanncharisecatipon@gmail.com"})})]}),Object(b.jsxs)("div",{className:"m-5",children:[" ",Object(b.jsx)("span",{className:"h5",children:"HOURS"}),Object(b.jsx)("div",{className:"contact-subtext",children:"Monday: 11am \u2014 9pm"}),Object(b.jsx)("div",{className:"contact-subtext",children:"Tuesday: 11am \u2014 9pm"}),Object(b.jsx)("div",{className:"contact-subtext",children:"Wednesday: 11am \u2014 9pm"}),Object(b.jsx)("div",{className:"contact-subtext",children:"Thursday: 11am \u2014 9pm"}),Object(b.jsx)("div",{className:"contact-subtext",children:"Friday: 11am \u2014 9pm"}),Object(b.jsx)("div",{className:"contact-subtext",children:"Saturday: 11am \u2014 9pm"}),Object(b.jsx)("div",{className:"contact-subtext",children:"Sunday: 11am \u2014 9pm"})]}),Object(b.jsxs)("div",{className:"m-5",children:[" ",Object(b.jsx)("span",{className:"h5",children:"ADDRESS"}),Object(b.jsx)("div",{className:"contact-subtext",children:"Blk 9 Lot 29 Matthew St. Juana 6 Brgy. San Francisco 4024 Bi\xf1an, Philippines"})]})]}),Object(b.jsxs)("div",{className:"col order-2",children:[Object(b.jsxs)("div",{className:"m-5",children:[" ",Object(b.jsx)("span",{className:"h5",children:" ORDERS"}),Object(b.jsx)("div",{className:"contact-subtext",children:"To change or cancel orders, please call us or contact us through Facebook messenger."})]}),Object(b.jsx)("div",{children:Object(b.jsx)("iframe",{className:"map-responsive",src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d966.6405260578687!2d121.05463048810928!3d14.27874099937245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x683bca8788172b54!2zMTTCsDE2JzQzLjUiTiAxMjHCsDAzJzE4LjYiRQ!5e0!3m2!1sen!2sus!4v1649299982145!5m2!1sen!2sus"})})]})]})})})};var f=function(){var e=Object(c.useState)([]),t=Object(d.a)(e,2),a=t[0],s=t[1];return Object(c.useEffect)((function(){m.a.get("http://localhost:3001/wingsmenu").then((function(e){s(e.data)}))})),Object(b.jsx)("div",{className:"menupage container",children:Object(b.jsxs)("div",{className:"row",children:[Object(b.jsxs)("div",{className:"col-md-4 py-2 d-flex flex-column flex-wrap",children:[Object(b.jsx)("a",{className:"btn btn-animation btn-bg border-orange menu_writing",href:"/silogmeals",role:"button",children:"Silog Meals"}),Object(b.jsx)("a",{className:"btn btn-animation btn-bg border-orange mt-3 menu_writing",href:"/snacks",role:"button",children:"Snacks"}),Object(b.jsx)("a",{className:"btn btn-animation btn-bg border-orange mt-3 menu_writing",href:"/drinks",role:"button",children:"Drinks"}),Object(b.jsx)("a",{className:"btn btn-animation btn-bg border-orange mt-3 menu_writing current",href:"/wings",role:"button",children:"Wings"})]}),Object(b.jsx)("div",{className:"mx-auto col mt-2 mr-4",children:Object(b.jsx)("div",{className:"d-flex row flex-wrap justify-content-around text-center",children:a.map((function(e,t){var a=parseFloat(e.wingsPrice).toFixed(2);return Object(b.jsxs)("div",{className:"card col-lg-5 col-md-6 border-0 food_cards m-2",children:[Object(b.jsx)("img",{className:"food-img card-img-top m-auto rounded border-orange",src:e.wingsImgPath,style:{height:"190px",width:"235px"},alt:""}),Object(b.jsx)("div",{className:"card-body",children:Object(b.jsxs)("div",{className:"card-title menu_writing",children:["\u20b1",a," \xa0 \u2014 \xa0",e.wingsMenuName]})})]})}))})})]})})};var w=function(){return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)(r.b,{children:[Object(b.jsx)(O,{}),Object(b.jsxs)(l.c,{children:[Object(b.jsx)(l.a,{path:"/snacks",children:Object(b.jsx)(v,{})}),Object(b.jsx)(l.a,{path:"/drinks",children:Object(b.jsx)(N,{})}),Object(b.jsx)(l.a,{path:"/silogmeals",children:Object(b.jsx)(j,{})}),Object(b.jsx)(l.a,{path:"/wings",children:Object(b.jsx)(f,{})}),Object(b.jsx)(l.a,{path:"/contact",children:Object(b.jsx)(p,{})}),Object(b.jsx)(l.a,{path:"/",children:Object(b.jsx)(u,{})})]})]})})};i.a.render(Object(b.jsx)(s.a.StrictMode,{children:Object(b.jsx)(r.a,{children:Object(b.jsx)(w,{})})}),document.getElementById("root"))}},[[68,1,2]]]);
//# sourceMappingURL=main.84acf776.chunk.js.map