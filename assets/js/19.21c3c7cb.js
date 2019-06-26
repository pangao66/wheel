(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{468:function(t,e,n){"use strict";var s=n(15),i=n(10),o=n(23),r=n(92),l=n(93),a=n(20),c=n(469),h=n(94);i(i.S+i.F*!n(68)(function(t){Array.from(t)}),"Array",{from:function(t){var e,n,i,p,u=o(t),v="function"==typeof this?this:Array,d=arguments.length,_=d>1?arguments[1]:void 0,f=void 0!==_,m=0,g=h(u);if(f&&(_=s(_,d>2?arguments[2]:void 0,2)),null==g||v==Array&&l(g))for(n=new v(e=a(u.length));e>m;m++)c(n,m,f?_(u[m],m):u[m]);else for(p=g.call(u),n=new v;!(i=p.next()).done;m++)c(n,m,f?r(p,_,[i.value,m],!0):i.value);return n.length=m,n}})},469:function(t,e,n){"use strict";var s=n(8),i=n(49);t.exports=function(t,e,n){e in t?s.f(t,e,i(0,n)):t[e]=n}},470:function(t,e,n){},545:function(t,e,n){"use strict";var s=n(470);n.n(s).a},592:function(t,e,n){"use strict";n.r(e);n(22),n(468);var s={name:"WheelScroll",data:function(){return{scrollBarVisible:!1,isScrolling:!1,startPosition:void 0,endPosition:void 0,scrollBarY:0,contentY:0,barHeight:void 0,parentHeight:void 0,mouseIn:!1}},beforeDestroy:function(){},mounted:function(){this.listenToDocument(),this.parentHeight=this.$refs.parent.getBoundingClientRect().height,this.updateScrollBar(),this.listenToRemoteResources(),this.listenToDomChange()},computed:{maxScrollHeight:function(){return this.parentHeight-this.barHeight},childHeight:function(){return this.$refs.child.getBoundingClientRect().height}},methods:{listenToRemoteResources:function(){var t=this,e=this.$refs.parent.querySelectorAll("img, video, audio");Array.from(e).map(function(e){e.hasAttribute("data-wheel-listened")||(e.setAttribute("data-wheel-listened","yes"),e.addEventListener("load",function(){t.updateScrollBar()}))})},listenToDomChange:function(){var t=this,e=this.$refs.child;new MutationObserver(function(){t.listenToRemoteResources()}).observe(e,{attributes:!0,childList:!0,subtree:!0})},listenToDocument:function(){var t=this;document.addEventListener("mousemove",function(e){return t.onMouseMoveScrollbar(e)}),document.addEventListener("mouseup",function(e){return t.onMouseUpScrollbar(e)})},calculateContentYFromDeltaY:function(t){var e=this.contentY;return e-=t>20?60:t<-20?-60:3*t},onWheel:function(t){this.updateContentY(t.deltaY,function(){return t.preventDefault()}),this.updateScrollBar()},updateContentY:function(t,e){var n=this.calculateContentYMax();this.contentY=this.calculateContentYFromDeltaY(t),this.contentY>0?this.contentY=0:this.contentY<-n?this.contentY=-n:e&&e()},calculateContentYMax:function(){var t=window.getComputedStyle(this.$refs.parent),e=t.borderTopWidth,n=t.borderBottomWidth,s=t.paddingTop,i=t.paddingBottom;return e=parseInt(e),n=parseInt(n),s=parseInt(s),i=parseInt(i),this.childHeight-this.parentHeight+(e+n+s+i)},updateScrollBar:function(){var t=this.parentHeight,e=this.childHeight;this.barHeight=t*t/e,this.$refs.bar.style.height=this.barHeight+"px",this.scrollBarY=-t*this.contentY/e,this.$refs.bar.style.transform="translateY(".concat(this.scrollBarY,"px)")},onMouseEnter:function(){this.scrollBarVisible=!0,this.mouseIn=!0},onMouseLeave:function(){this.mouseIn=!1,this.isScrolling||(this.scrollBarVisible=!1)},onMouseMove:function(){this.mouseIn=!0},onMouseDownScrollBar:function(t){this.isScrolling=!0;var e=t.screenX,n=t.screenY;this.startPosition={x:e,y:n}},onMouseMoveScrollbar:function(t){if(this.isScrolling){this.endPosition={x:t.screenX,y:t.screenY};var e={x:this.endPosition.x-this.startPosition.x,y:this.endPosition.y-this.startPosition.y};this.scrollBarY=this.calculateScrollBarY(e),this.contentY=-this.childHeight*this.scrollBarY/this.parentHeight,this.startPosition=this.endPosition,this.$refs.bar.style.transform="translate(0px,".concat(this.scrollBarY,"px)")}},calculateScrollBarY:function(t){var e=parseInt(this.scrollBarY)+t.y;return e<0?e=0:e>this.maxScrollHeight&&(e=this.maxScrollHeight),e},onMouseUpScrollbar:function(t){this.isScrolling=!1,this.mouseIn||(this.scrollBarVisible=!1)},onSelectStartScrollBar:function(t){t.preventDefault()}}},i=(n(545),n(1)),o=Object(i.a)(s,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"parent",staticClass:"wheel-scroll-wrapper",on:{mouseenter:t.onMouseEnter,mouseleave:t.onMouseLeave,wheel:t.onWheel,mousemove:t.onMouseMove}},[n("div",{ref:"child",staticClass:"wheel-scroll",style:{transform:"translateY("+this.contentY+"px)"}},[t._t("default")],2),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:t.scrollBarVisible,expression:"scrollBarVisible"}],staticClass:"wheel-scroll-track"},[n("div",{ref:"bar",staticClass:"wheel-scroll-bar",on:{mousedown:t.onMouseDownScrollBar,selectstart:t.onSelectStartScrollBar}},[n("div",{staticClass:"wheel-scroll-bar-inner"})])])])},[],!1,null,"1bd1a850",null).exports,r=n(415),l=n(418),a={components:{WScroll:o,WIcon:r.a},mixins:[l.a],data:function(){return{codeStr:'\n        <w-scroll style="width: 300px; height: 300px;border: 1px solid green;">\n          <img src="https://www.guidedogs.org/wp-content/uploads/2017/07/2O17-8819-purple-2-min-400x400.jpg" alt="">              \n          <p id="test2">123456789_10_11_12_13_14_15_16_17_189</p>\n          <p>2</p>\n          <p>3</p>\n          <p>4</p>\n          <p>5</p>\n          <p>6</p>\n          <p>7</p>\n          <p>8</p>\n          <p>9</p>\n          <p>10</p>\n          <p>11</p>\n          <p>12</p>\n          <p>13</p>\n          <p>14</p>\n          <p>15</p>\n          <p>16</p>\n          <p>17</p>\n          <p>18</p>\n          <p>19</p>\n          <p>20</p>\n        </w-scroll>\n    '.replace(/^ {8}/gm,"").trim()}}},c=Object(i.a)(a,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"demo"},[n("h2",[t._v("📌 简单用法")]),t._v(" "),t._m(0),t._v(" "),n("div",{staticClass:"component-wrapper"},[n("div",{staticClass:"component-wrapper-demo"},[n("w-scroll",{staticStyle:{width:"300px",height:"300px",border:"1px solid green"}},[n("img",{attrs:{src:"https://www.guidedogs.org/wp-content/uploads/2017/07/2O17-8819-purple-2-min-400x400.jpg",alt:""}}),t._v(" "),n("p",{attrs:{id:"test2"}},[t._v("123456789_10_11_12_13_14_15_16_17_189")]),t._v(" "),n("p",[t._v("2")]),t._v(" "),n("p",[t._v("3")]),t._v(" "),n("p",[t._v("4")]),t._v(" "),n("p",[t._v("5")]),t._v(" "),n("p",[t._v("6")]),t._v(" "),n("p",[t._v("7")]),t._v(" "),n("p",[t._v("8")]),t._v(" "),n("p",[t._v("9")]),t._v(" "),n("p",[t._v("10")]),t._v(" "),n("p",[t._v("11")]),t._v(" "),n("p",[t._v("12")]),t._v(" "),n("p",[t._v("13")]),t._v(" "),n("p",[t._v("14")]),t._v(" "),n("p",[t._v("15")]),t._v(" "),n("p",[t._v("16")]),t._v(" "),n("p",[t._v("17")]),t._v(" "),n("p",[t._v("18")]),t._v(" "),n("p",[t._v("19")]),t._v(" "),n("p",[t._v("20")])])],1),t._v(" "),n("div",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"code-content",staticStyle:{height:"0"}},[n("div",{staticClass:"code-content-height"},[n("pre",[n("code",{staticClass:"html"},[t._v(t._s(t.codeStr))])])])]),t._v(" "),n("div",{ref:"xxx",staticClass:"lock-code",on:{click:function(e){return t.showCode(0)}}},[n("w-icon",{staticClass:"icon-down",attrs:{name:!1===t.isShow[0]?"down":"up"}}),t._v(" "),n("span",{staticClass:"lock-code-word"},[t._v(t._s(!1===t.isShow[0]?"显示代码":"隐藏代码"))])],1)])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("预览")])])}],!1,null,null,null);e.default=c.exports}}]);