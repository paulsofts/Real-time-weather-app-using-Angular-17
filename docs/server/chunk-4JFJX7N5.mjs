import './polyfills.server.mjs';
import{A as M,B as k,C as E,D as _,G as S,M as O,a as U,b as h,c as w,d as l,e as x,f as t,g as e,h as o,i as y,j as n,k as c,l as m,m as b,n as p,o as d,v as u,x as C,y as F,z as v}from"./chunk-A3YPMTG7.mjs";var P=(()=>{let a=class a{constructor(s){this._httpClient=s}getWeatherDataByCity(s){var i={"x-rapidapi-host":"weatherapi-com.p.rapidapi.com","x-rapidapi-key":"3441e3d09dmsh65aa5232e72a575p1bfd80jsnbb2bcb5d4acd"},r=s,g="https://weatherapi-com.p.rapidapi.com/current.json";return this._httpClient.get(g,{params:{q:r},headers:i})}};a.\u0275fac=function(i){return new(i||a)(h(v))},a.\u0275prov=U({token:a,factory:a.\u0275fac,providedIn:"root"});let f=a;return f})();var A=(()=>{let a=class a{constructor(s){this.weatherService=s,this.title="weather-app",this.todayDate=new Date}changeLocation(){this.getWeatherDataByCity()}getWeatherDataByCity(){var s=$("#cityName").val();this.weatherService.getWeatherDataByCity(s).subscribe(i=>{console.log(i),this.temp=i.current.temp_c,this.location=i.location.name,this.humidity=i.current.humidity,this.wind=i.current.wind_kph,this.precipitation=i.current.precip_in,this.condition=i.current.condition.text},i=>console.log(i))}};a.\u0275fac=function(i){return new(i||a)(x(P))},a.\u0275cmp=w({type:a,selectors:[["app-root"]],standalone:!0,features:[b],decls:93,vars:14,consts:[[1,"mainDIv"],[1,"container"],[1,"weather-side"],[1,"weather-gradient"],[1,"date-container"],[1,"date-dayname"],[1,"date-day"],["data-feather","map-pin",1,"location-icon"],[1,"location"],[1,"weather-container"],["data-feather","sun",1,"weather-icon"],[1,"weather-temp"],[1,"weather-desc"],[1,"info-side"],[1,"today-info-container"],[1,"today-info"],[1,"precipitation"],[1,"title"],[1,"value"],[1,"clear"],[1,"humidity"],[1,"wind"],[1,"week-container"],[1,"week-list"],[1,"active"],["data-feather","sun",1,"day-icon"],[1,"day-name"],[1,"day-temp"],["data-feather","cloud-rain",1,"day-icon"],["data-feather","cloud",1,"day-icon"],["data-feather","cloud-snow",1,"day-icon"],["type","text","id","cityName","placeholder","Search...",1,"form-control"],[1,"location-container"],["type","button",1,"location-button",3,"click"],["data-feather","map-pin"]],template:function(i,r){i&1&&(t(0,"div",0)(1,"div",1)(2,"div",2),o(3,"div",3),t(4,"div",4)(5,"h2",5),n(6),p(7,"date"),e(),t(8,"span",6),n(9),p(10,"date"),e(),o(11,"i",7),t(12,"span",8),n(13),e()(),t(14,"div",9),o(15,"i",10),t(16,"h1",11),n(17),e(),t(18,"h3",12),n(19),e()()(),t(20,"div",13)(21,"div",14)(22,"div",15)(23,"div",16)(24,"span",17),n(25,"Precipitation"),e(),t(26,"span",18),n(27),e(),o(28,"div",19),e(),t(29,"div",20)(30,"span",17),n(31,"HUMIDITY"),e(),t(32,"span",18),n(33),e(),o(34,"div",19),e(),t(35,"div",21)(36,"span",17),n(37,"WIND"),e(),t(38,"span",18),n(39),e(),o(40,"div",19),e()()(),t(41,"div",22)(42,"ul",23)(43,"li",24),o(44,"i",25),t(45,"span",26),n(46,"Mon"),e(),t(47,"span",27),n(48,"29\xB0C"),e()(),t(49,"li"),o(50,"i",28),t(51,"span",26),n(52,"Tue"),e(),t(53,"span",27),n(54,"19\xB0C"),e()(),t(55,"li"),o(56,"i",29),t(57,"span",26),n(58,"Wed"),e(),t(59,"span",27),n(60,"21\xB0C"),e()(),t(61,"li"),o(62,"i",30),t(63,"span",26),n(64,"Thu"),e(),t(65,"span",27),n(66,"08\xB0C"),e()(),t(67,"li"),o(68,"i",28),t(69,"span",26),n(70,"Fry"),e(),t(71,"span",27),n(72,"19\xB0C"),e()(),t(73,"li"),o(74,"i",28),t(75,"span",26),n(76,"Sat"),e(),t(77,"span",27),n(78,"19\xB0C"),e()(),t(79,"li"),o(80,"i",28),t(81,"span",26),n(82,"Sun"),e(),t(83,"span",27),n(84,"19\xB0C"),e()(),o(85,"div",19),e()(),t(86,"div"),o(87,"input",31),e(),t(88,"div",32)(89,"button",33),y("click",function(){return r.changeLocation()}),o(90,"i",34),t(91,"span"),n(92,"Change location"),e()()()()()()),i&2&&(l(6),c(d(7,8,r.todayDate,"EEEE")),l(3),c(d(10,11,r.todayDate,"MMMM Y")),l(4),c(r.location),l(4),m("",r.temp,"\xB0C"),l(2),c(r.condition),l(8),m("",r.precipitation," %"),l(6),m("",r.humidity," %"),l(6),m("",r.wind," km/h"))},dependencies:[F,C],styles:['@font-face{font-family:Montserrat;font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/montserrat/v26/JTUSjIg1_i6t8kCHKm459WRhyzbi.woff2) format("woff2");unicode-range:U+0460-052F,U+1C80-1C88,U+20B4,U+2DE0-2DFF,U+A640-A69F,U+FE2E-FE2F}@font-face{font-family:Montserrat;font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/montserrat/v26/JTUSjIg1_i6t8kCHKm459W1hyzbi.woff2) format("woff2");unicode-range:U+0301,U+0400-045F,U+0490-0491,U+04B0-04B1,U+2116}@font-face{font-family:Montserrat;font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/montserrat/v26/JTUSjIg1_i6t8kCHKm459WZhyzbi.woff2) format("woff2");unicode-range:U+0102-0103,U+0110-0111,U+0128-0129,U+0168-0169,U+01A0-01A1,U+01AF-01B0,U+0300-0301,U+0303-0304,U+0308-0309,U+0323,U+0329,U+1EA0-1EF9,U+20AB}@font-face{font-family:Montserrat;font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/montserrat/v26/JTUSjIg1_i6t8kCHKm459Wdhyzbi.woff2) format("woff2");unicode-range:U+0100-02AF,U+0304,U+0308,U+0329,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:Montserrat;font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/montserrat/v26/JTUSjIg1_i6t8kCHKm459Wlhyw.woff2) format("woff2");unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}@font-face{font-family:Montserrat;font-style:normal;font-weight:700;font-display:swap;src:url(https://fonts.gstatic.com/s/montserrat/v26/JTUSjIg1_i6t8kCHKm459WRhyzbi.woff2) format("woff2");unicode-range:U+0460-052F,U+1C80-1C88,U+20B4,U+2DE0-2DFF,U+A640-A69F,U+FE2E-FE2F}@font-face{font-family:Montserrat;font-style:normal;font-weight:700;font-display:swap;src:url(https://fonts.gstatic.com/s/montserrat/v26/JTUSjIg1_i6t8kCHKm459W1hyzbi.woff2) format("woff2");unicode-range:U+0301,U+0400-045F,U+0490-0491,U+04B0-04B1,U+2116}@font-face{font-family:Montserrat;font-style:normal;font-weight:700;font-display:swap;src:url(https://fonts.gstatic.com/s/montserrat/v26/JTUSjIg1_i6t8kCHKm459WZhyzbi.woff2) format("woff2");unicode-range:U+0102-0103,U+0110-0111,U+0128-0129,U+0168-0169,U+01A0-01A1,U+01AF-01B0,U+0300-0301,U+0303-0304,U+0308-0309,U+0323,U+0329,U+1EA0-1EF9,U+20AB}@font-face{font-family:Montserrat;font-style:normal;font-weight:700;font-display:swap;src:url(https://fonts.gstatic.com/s/montserrat/v26/JTUSjIg1_i6t8kCHKm459Wdhyzbi.woff2) format("woff2");unicode-range:U+0100-02AF,U+0304,U+0308,U+0329,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:Montserrat;font-style:normal;font-weight:700;font-display:swap;src:url(https://fonts.gstatic.com/s/montserrat/v26/JTUSjIg1_i6t8kCHKm459Wlhyw.woff2) format("woff2");unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}@font-face{font-family:Montserrat;font-style:normal;font-weight:900;font-display:swap;src:url(https://fonts.gstatic.com/s/montserrat/v26/JTUSjIg1_i6t8kCHKm459WRhyzbi.woff2) format("woff2");unicode-range:U+0460-052F,U+1C80-1C88,U+20B4,U+2DE0-2DFF,U+A640-A69F,U+FE2E-FE2F}@font-face{font-family:Montserrat;font-style:normal;font-weight:900;font-display:swap;src:url(https://fonts.gstatic.com/s/montserrat/v26/JTUSjIg1_i6t8kCHKm459W1hyzbi.woff2) format("woff2");unicode-range:U+0301,U+0400-045F,U+0490-0491,U+04B0-04B1,U+2116}@font-face{font-family:Montserrat;font-style:normal;font-weight:900;font-display:swap;src:url(https://fonts.gstatic.com/s/montserrat/v26/JTUSjIg1_i6t8kCHKm459WZhyzbi.woff2) format("woff2");unicode-range:U+0102-0103,U+0110-0111,U+0128-0129,U+0168-0169,U+01A0-01A1,U+01AF-01B0,U+0300-0301,U+0303-0304,U+0308-0309,U+0323,U+0329,U+1EA0-1EF9,U+20AB}@font-face{font-family:Montserrat;font-style:normal;font-weight:900;font-display:swap;src:url(https://fonts.gstatic.com/s/montserrat/v26/JTUSjIg1_i6t8kCHKm459Wdhyzbi.woff2) format("woff2");unicode-range:U+0100-02AF,U+0304,U+0308,U+0329,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:Montserrat;font-style:normal;font-weight:900;font-display:swap;src:url(https://fonts.gstatic.com/s/montserrat/v26/JTUSjIg1_i6t8kCHKm459Wlhyw.woff2) format("woff2");unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}[_ngcontent-%COMP%]:root{--gradient: linear-gradient( 135deg, #72EDF2 10%, #5151E5 100%)}*[_ngcontent-%COMP%]{-webkit-box-sizing:border-box;box-sizing:border-box;line-height:1.25em}.clear[_ngcontent-%COMP%]{clear:both}body[_ngcontent-%COMP%]{margin:0;width:100%;height:100vh;font-family:Montserrat,sans-serif;background-color:#343d4b;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.container[_ngcontent-%COMP%]{border-radius:25px;-webkit-box-shadow:0 0 70px -10px rgba(0,0,0,.2);box-shadow:0 0 70px -10px #0003;background-color:#222831;color:#fff;height:400px}.weather-side[_ngcontent-%COMP%]{position:relative;height:100%;border-radius:25px;background-image:url(https://images.unsplash.com/photo-1559963110-71b394e7494d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80);width:300px;-webkit-box-shadow:0 0 20px -10px rgba(0,0,0,.2);box-shadow:0 0 20px -10px #0003;-webkit-transition:-webkit-transform .3s ease;transition:-webkit-transform .3s ease;-o-transition:transform .3s ease;transition:transform .3s ease;transition:transform .3s ease,-webkit-transform .3s ease;-webkit-transform:translateZ(0) scale(1.02) perspective(1000px);transform:translateZ(0) scale(1.02) perspective(1000px);float:left}.weather-side[_ngcontent-%COMP%]:hover{-webkit-transform:scale(1.1) perspective(1500px) rotateY(10deg);transform:scale(1.1) perspective(1500px) rotateY(10deg)}.weather-gradient[_ngcontent-%COMP%]{position:absolute;width:100%;height:100%;top:0;left:0;background-image:linear-gradient(135deg,#72edf2 10%,#5151e5);border-radius:25px;opacity:.8}.container[_ngcontent-%COMP%]{width:70%}.date-container[_ngcontent-%COMP%]{position:absolute;top:25px;left:25px}.date-dayname[_ngcontent-%COMP%]{margin:0}.date-day[_ngcontent-%COMP%]{display:block}.location[_ngcontent-%COMP%]{display:inline-block;margin-top:10px}.location-icon[_ngcontent-%COMP%]{display:inline-block;height:.8em;width:auto;margin-right:5px}.weather-container[_ngcontent-%COMP%]{position:absolute;bottom:25px;left:25px}.weather-icon.feather[_ngcontent-%COMP%]{height:60px;width:auto}.weather-temp[_ngcontent-%COMP%]{margin:0;font-weight:700;font-size:4em}.weather-desc[_ngcontent-%COMP%]{margin:0}.info-side[_ngcontent-%COMP%]{position:relative;float:left;height:100%;padding-top:25px}.today-info[_ngcontent-%COMP%]{padding:15px;margin:0 25px 25px;box-shadow:0 0 50px -5px #00000040;border-radius:10px}.today-info[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:not(:last-child){margin:0 0 10px}.today-info[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{float:left;font-weight:700}.today-info[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%]{float:right}.week-list[_ngcontent-%COMP%]{list-style-type:none;padding:0;margin:10px 35px;-webkit-box-shadow:0 0 50px -5px rgba(0,0,0,.25);box-shadow:0 0 50px -5px #00000040;border-radius:10px;background:#222831}.mainDIv[_ngcontent-%COMP%]{margin:0;width:100%;height:100vh;font-family:Montserrat,sans-serif;background-color:#343d4b;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.week-list[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]{float:left;padding:15px;cursor:pointer;-webkit-transition:.2s ease;-o-transition:.2s ease;transition:.2s ease;border-radius:10px}.week-list[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]:hover{-webkit-transform:scale(1.1);-ms-transform:scale(1.1);transform:scale(1.1);background:#fff;color:#222831;-webkit-box-shadow:0 0 40px -5px rgba(0,0,0,.2);box-shadow:0 0 40px -5px #0003}.week-list[_ngcontent-%COMP%] > li.active[_ngcontent-%COMP%]{background:#fff;color:#222831;border-radius:10px}.week-list[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]   .day-name[_ngcontent-%COMP%]{display:block;margin:10px 0 0;text-align:center}.week-list[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]   .day-icon[_ngcontent-%COMP%]{display:block;height:30px;width:auto;margin:0 auto}.week-list[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]   .day-temp[_ngcontent-%COMP%]{display:block;text-align:center;margin:10px 0 0;font-weight:700}.location-container[_ngcontent-%COMP%]{padding:25px 35px}.location-button[_ngcontent-%COMP%]{outline:none;width:100%;-webkit-box-sizing:border-box;box-sizing:border-box;border:none;border-radius:25px;padding:10px;font-family:Montserrat,sans-serif;background-image:linear-gradient(135deg,#72edf2 10%,#5151e5);color:#fff;font-weight:700;-webkit-box-shadow:0 0 30px -5px rgba(0,0,0,.25);box-shadow:0 0 30px -5px #00000040;cursor:pointer;-webkit-transition:-webkit-transform .2s ease;transition:-webkit-transform .2s ease;-o-transition:transform .2s ease;transition:transform .2s ease;transition:transform .2s ease,-webkit-transform .2s ease}.location-button[_ngcontent-%COMP%]:hover{-webkit-transform:scale(.95);-ms-transform:scale(.95);transform:scale(.95)}.location-button[_ngcontent-%COMP%]   .feather[_ngcontent-%COMP%]{height:1em;width:auto;margin-right:5px}']});let f=a;return f})();var B=[];var D={providers:[O(B),_(),M(k())]};var H={providers:[S()]},I=u(D,H);var T=()=>E(A,I),ot=T;export{ot as a};
