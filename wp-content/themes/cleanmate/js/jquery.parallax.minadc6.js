!function(n,i,t){"use strict";var o=function(i,t){var o=n(i),e={speed:30},s=n.extend(e,t);this.bind=function(){var i=this;n(window).on("scroll",function(){i.update()}).resize(function(){i.update()}),this.update()},this.update=function(){var i=o.offset().top,t=n(window).scrollTop(),e=o.innerHeight(),d=n(window).height();i+e<t||i>t+d||o.css("backgroundPosition","50% "+(t-i)*(s.speed/100)+"px")}};n.fn.parallax=function(n){new o(this,n).bind()}}(jQuery,document,window);