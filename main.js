!function(a){function t(){l=0,C=!1,p="stay",g=b.length,u=a(window).width(),w=a(window).height(),k=a("[data-animation]");a(".pages .page").index(a(".page-end"));dis=.25*w;for(var t=0;g>t;t++)a(b[t]).attr("data-id",t+1);v.addClass(T.direction).addClass(T.swipeAnim),b.css({width:u+"px"}),a(b[l]).addClass("current"),T.onchange(l,b[l],p),s()}function e(a){return C===!0?(event.preventDefault(),!1):(d=1,y=!0,b.addClass("drag"),void(r="horizontal"===T.direction?a.pageX:a.pageY))}function n(t){return C===!0||y===!1?(event.preventDefault(),!1):(d=2,event.preventDefault(),c="horizontal"===T.direction?t.pageX:t.pageY,0!=l&&l||!N||(window.stopDirec=2),1==window.stopDirec&&0>c-r?void(d=1):2==window.stopDirec&&c-r>0?void(d=1):3==window.stopDirec?void(d=1):(o(),x=c-r,0>x?(h=a(0===l?b[g-1]:b[l-1]),m=a(l===g-1?b[0]:b[l+1])):(h=a(0===l?b[g-1]:b[l-1]),m=a(l===g-1?b[0]:b[l+1])),f=a(b[l]),void(0>x?(m.addClass("mov"),m.css({"-webkit-transform":"translateY("+(w+x)+"px)"}),f.css({"-webkit-transform":"translateY("+x+"px)"})):(h.addClass("mov"),h.css({"-webkit-transform":"translateY("+(-w+x)+"px)"}),f.css({"-webkit-transform":"translateY("+x+"px)"})))))}function i(t){if(C===!0||2!==d);else{d=3,y=!1,b.removeClass("drag"),c="horizontal"===T.direction?t.pageX:t.pageY,x=c-r,Math.abs(x)<=dis&&x>0?(p="stay",f.css({"-webkit-transform":"translateY(0)"}),h.css({"-webkit-transform":"translateY("+-w+"px)"})):Math.abs(x)<=dis&&0>x?(p="stay",f.css({"-webkit-transform":"translateY(0)"}),m.css({"-webkit-transform":"translateY("+w+"px)"})):x>=0?(p="backward",reback(),0===l?l=g-1:l-=1,f.css({"-webkit-transform":"translateY("+w+"px)"}),h.css({"-webkit-transform":"translateY(0)"})):0>x&&(p="forward",reback(),l===g-1?l=0:l+=1,f.css({"-webkit-transform":"translateY("+-w+"px)"}),m.css({"-webkit-transform":"translateY(0)"})),l==g-1&&(N=!1);var e=a(".pages .page").index(a(".page-end"));l!=e||(window.stopDirec=1,a(".u-guideTop").hide()),C=!0,setTimeout(function(){C=!1},1e3)}}function o(){"horizontal"===T.direction?c>=r?v.removeClass("forward").addClass("backward"):r>c&&v.removeClass("backward").addClass("forward"):c>=r?v.removeClass("forward").addClass("backward"):r>c&&v.removeClass("backward").addClass("forward")}function s(){k.css({"-webkit-animation":"none",display:"none"}),a(".current [data-animation]").each(function(t,e){var n=a(e),i=n.attr("data-animation"),o=n.attr("data-duration")||500,s=n.attr("data-timing-function")||"ease",r=n.attr("data-delay")?n.attr("data-delay"):0;"followSlide"===i&&("horizontal"!==T.direction||"forward"!==p&&"stay"!==p?"horizontal"===T.direction&&"backward"===p?i="followSlideToRight":"vertical"!==T.direction||"forward"!==p&&"stay"!==p?"vertical"===T.direction&&"backward"===p&&(i="followSlideToBottom"):i="followSlideToTop":i="followSlideToLeft"),n.css({display:"block","-webkit-animation-name":i,"-webkit-animation-duration":o+"ms","-webkit-animation-timing-function":"ease","-webkit-animation-timing-function":s,"-webkit-animation-delay":r+"ms","-webkit-animation-fill-mode":"both"})}),a(b.get(3)).find(".content").css({"-webkit-transform":" matrix(1, 0, 0, 1, 0, 0)"})}var r,c,d,p,l,g,u,w,h,f,m,v,b,k,T,x=0,y=!1,C=!0,N=!0;a.fn.parallax=function(e){return T=a.extend({},a.fn.parallax.defaults,e),this.each(function(){v=a(this),b=v.find(".page"),t()})},a.fn.parallax.defaults={direction:"vertical",swipeAnim:"default",drag:!0,loading:!1,indicator:!1,arrow:!1,onchange:function(){},orientationchange:function(){}},a(document).on("touchstart",".page",function(a){"moveArea_c"!=a.changedTouches[0].target.className&&"appArea_c"!=a.changedTouches[0].target.className&&"app"!=a.changedTouches[0].target.className&&"appouter"!=a.changedTouches[0].target.className&&"app ready"!=a.changedTouches[0].target.className&&"app_image"!=a.changedTouches[0].target.className&&e(a.changedTouches[0])}).on("touchmove",".page",function(a){"moveArea_c"!=a.changedTouches[0].target.className&&"appArea_c"!=a.changedTouches[0].target.className&&"app"!=a.changedTouches[0].target.className&&"appouter"!=a.changedTouches[0].target.className&&"app ready"!=a.changedTouches[0].target.className&&"app_image"!=a.changedTouches[0].target.className&&n(a.changedTouches[0])}).on("touchend",".page",function(a){"moveArea_c"!=a.changedTouches[0].target.className&&"appArea_c"!=a.changedTouches[0].target.className&&"app"!=a.changedTouches[0].target.className&&"appouter"!=a.changedTouches[0].target.className&&"app ready"!=a.changedTouches[0].target.className&&"app_image"!=a.changedTouches[0].target.className&&i(a.changedTouches[0])}).on("webkitAnimationEnd webkitTransitionEnd",".pages",function(){"stay"!==p&&(setTimeout(function(){b.removeClass("mov")},10),a(b.removeClass("current").get(l)).addClass("current"),T.onchange(l,b[l],p),s())}),a(".page *").on("webkitAnimationEnd",function(){event.stopPropagation()}),window.addEventListener("onorientationchange"in window?"orientationchange":"resize",function(){(180===window.orientation||0===window.orientation)&&T.orientationchange("portrait"),(90===window.orientation||-90===window.orientation)&&T.orientationchange("landscape")},!1),window.slideTo=function(t){l=t,p="backward",a(b.get(l)).css({"-webkit-transform":"translateY(0)"}),a(b.removeClass("current").get(l)).addClass("current"),a(b.get(3)).find(".content").css({"-webkit-transform":" matrix(1, 0, 0, 1, 0, 0)"}),s(),window.stopDirec=0,a(".u-guideTop").show(),setTimeout(function(){a(".pages").css({"-webkit-transition-duration":"400ms","transition-duration":"400ms"})},300)},window.moveTo=function(t){l=t;var e=a(window).height();a(".pages").css({"-webkit-transform":"matrix(1, 0, 0, 1, 0, -"+e*t+")"})}}(Zepto),!function(a){window.page=function(){function t(a,t){i=a.pageY,d=t.height()+150,s=t.css("-webkit-transform")?t.css("-webkit-transform").replace("matrix(","").replace(")","").split(","):[0,0,0,0,0,0],s=parseInt(s[5])||0}function e(a,t){d=t.height()+150,r=c.css("-webkit-transform").replace("matrix(","").replace(")","").split(","),r=Math.abs(parseInt(r[5])||0),n=a.pageY,d>p&&i>n?(o=s+n-i,Math.abs(o)<=d-p&&(event.preventDefault(),event.stopPropagation(),t.css("-webkit-transform","matrix(1, 0, 0, 1, 0, "+o+")"))):0>o&&n>=i&&(event.preventDefault(),event.stopPropagation(),o=s+n-i,t.css("-webkit-transform","matrix(1, 0, 0, 1, 0, "+o+")"))}a(".pages").parallax({direction:"vertical",swipeAnim:"default",drag:!0,loading:!1,indicator:!1,arrow:!1,onchange:function(t){var e=a(".pages .page").index(a(".page-end"));t!=e?(window.stopDirec=0,a(".u-guideTop").show()):(window.stopDirec=1,a(".u-guideTop").hide()),1==a(".pages .page").size()&&(window.stopDirec=3)},orientationchange:function(){}});var n,i,o,s,r,c=a(".pages"),d=0,p=a(window).height();a(".page-flow").on("touchstart",function(){t(event.changedTouches[0],a(this).find(a(".content")))}).on("touchmove",function(){e(event.changedTouches[0],a(this).find(a(".content")))})}}(Zepto),function(a){function t(t){var e=t.target.localName;return"div"===e?null:"img"===e?a(t.target).parent().parent():a(t.target).parent()}function e(){i?a(i).css({visibility:"visible"}):i=a("<div></div>").addClass("shalay").css({position:"fixed",width:"100%",height:"100%",top:0,left:0,"background-color":"black",opacity:.7,"z-index":100,visibility:"visible"}).appendTo("body")}function n(t){var t=a(t[0]).attr("class").substr(7)-1;console.log(),a(".app-footer img").eq(t).css({position:"fixed",width:.9*o,top:"50%",left:"50%","margin-top":.9*-o/2,"margin-left":.9*-o/2,"z-index":999,display:"block"})}var i,o=(a(window).height(),a(window).width());touch.on(".app-footer >img","tap",function(){a(this).css({display:"none"}),a(i).css({visibility:"hidden"})}),touch.on(".page-5 .bottom>div","tap",function(a){var i=t(a);i&&(e(),n(t(a)))}),touch.on(".app-footer img","tap",function(){a(this).css({display:"none"})}),a(i).on("tap",function(){a(this).css({visibility:"hidden"}),a(".app-footer >img").css({display:"none"})})}(Zepto);