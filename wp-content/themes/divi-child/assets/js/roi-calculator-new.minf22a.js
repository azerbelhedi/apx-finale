"use strict";var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};!function(t,e,a){"function"==typeof define&&define.amd?define(["jquery"],t):"object"===("undefined"==typeof exports?"undefined":_typeof(exports))?module.exports=t(require("jquery")):t(e||a)}(function(l){var o=function(d,b,w){var x={invalid:[],getCaret:function(){try{var t,e=0,a=d.get(0),n=document.selection,r=a.selectionStart;return n&&-1===navigator.appVersion.indexOf("MSIE 10")?((t=n.createRange()).moveStart("character",-x.val().length),e=t.text.length):(r||"0"===r)&&(e=r),e}catch(t){}},setCaret:function(t){try{if(d.is(":focus")){var e,a=d.get(0);a.setSelectionRange?a.setSelectionRange(t,t):((e=a.createTextRange()).collapse(!0),e.moveEnd("character",t),e.moveStart("character",t),e.select())}}catch(t){}},events:function(){d.on("keydown.mask",function(t){d.data("mask-keycode",t.keyCode||t.which),d.data("mask-previus-value",d.val()),d.data("mask-previus-caret-pos",x.getCaret()),x.maskDigitPosMapOld=x.maskDigitPosMap}).on(l.jMaskGlobals.useInput?"input.mask":"keyup.mask",x.behaviour).on("paste.mask drop.mask",function(){setTimeout(function(){d.keydown().keyup()},100)}).on("change.mask",function(){d.data("changed",!0)}).on("blur.mask",function(){s===x.val()||d.data("changed")||d.trigger("change"),d.data("changed",!1)}).on("blur.mask",function(){s=x.val()}).on("focus.mask",function(t){!0===w.selectOnFocus&&l(t.target).select()}).on("focusout.mask",function(){w.clearIfNotMatch&&!i.test(x.val())&&x.val("")})},getRegexMask:function(){for(var t,e,a,n,r,i,s=[],l=0;l<b.length;l++)(t=$.translation[b.charAt(l)])?(e=t.pattern.toString().replace(/.{1}$|^.{1}/g,""),a=t.optional,(n=t.recursive)?(s.push(b.charAt(l)),r={digit:b.charAt(l),pattern:e}):s.push(a||n?e+"?":e)):s.push(b.charAt(l).replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&"));return i=s.join(""),r&&(i=i.replace(new RegExp("("+r.digit+"(.*"+r.digit+")?)"),"($1)?").replace(new RegExp(r.digit,"g"),r.pattern)),new RegExp(i)},destroyEvents:function(){d.off(["input","keydown","keyup","paste","drop","blur","focusout",""].join(".mask "))},val:function(t){var e,a=d.is("input")?"val":"text";return 0<arguments.length?(d[a]()!==t&&d[a](t),e=d):e=d[a](),e},calculateCaretPosition:function(){var t=d.data("mask-previus-value")||"",e=x.getMasked(),a=x.getCaret();if(t!==e){var n=d.data("mask-previus-caret-pos")||0,r=e.length,i=t.length,s=0,l=0,o=0,u=0,c=0;for(c=a;c<r&&x.maskDigitPosMap[c];c++)l++;for(c=a-1;0<=c&&x.maskDigitPosMap[c];c--)s++;for(c=a-1;0<=c;c--)x.maskDigitPosMap[c]&&o++;for(c=n-1;0<=c;c--)x.maskDigitPosMapOld[c]&&u++;if(i<a)a=10*r;else if(a<=n&&n!==i){if(!x.maskDigitPosMapOld[a]){var f=a;a-=u-o,a-=s,x.maskDigitPosMap[a]&&(a=f)}}else n<a&&(a+=o-u,a+=l)}return a},behaviour:function(t){t=t||window.event,x.invalid=[];var e=d.data("mask-keycode");if(-1===l.inArray(e,$.byPassKeys)){var a=x.getMasked(),n=x.getCaret();return setTimeout(function(){x.setCaret(x.calculateCaretPosition())},l.jMaskGlobals.keyStrokeCompensation),x.val(a),x.setCaret(n),x.callbacks(t)}},getMasked:function(t,e){var a,n,r,i=[],s=void 0===e?x.val():e+"",l=0,o=b.length,u=0,c=s.length,f=1,d="push",h=-1,v=0,p=[];for(w.reverse?(d="unshift",f=-1,a=0,l=o-1,u=c-1,n=function(){return-1<l&&-1<u}):(a=o-1,n=function(){return l<o&&u<c});n();){var m=b.charAt(l),k=s.charAt(u),g=$.translation[m];g?(k.match(g.pattern)?(i[d](k),g.recursive&&(-1===h?h=l:l===a&&l!==h&&(l=h-f),a===h&&(l-=f)),l+=f):k===r?(v--,r=void 0):g.optional?(l+=f,u-=f):g.fallback?(i[d](g.fallback),l+=f,u-=f):x.invalid.push({p:u,v:k,e:g.pattern}),u+=f):(t||i[d](m),k===m?(p.push(u),u+=f):(r=m,p.push(u+v),v++),l+=f)}var y=b.charAt(a);o!==c+1||$.translation[y]||i.push(y);var M=i.join("");return x.mapMaskdigitPositions(M,p,c),M},mapMaskdigitPositions:function(t,e,a){var n=w.reverse?t.length-a:0;x.maskDigitPosMap={};for(var r=0;r<e.length;r++)x.maskDigitPosMap[e[r]+n]=1},callbacks:function(t){var e=x.val(),a=e!==s,n=[e,t,d,w],r=function(t,e,a){"function"==typeof w[t]&&e&&w[t].apply(this,a)};r("onChange",!0===a,n),r("onKeyPress",!0===a,n),r("onComplete",e.length===b.length,n),r("onInvalid",0<x.invalid.length,[e,t,d,x.invalid,w])}};d=l(d);var i,$=this,s=x.val();b="function"==typeof b?b(x.val(),void 0,d,w):b,$.mask=b,$.options=w,$.remove=function(){var t=x.getCaret();return $.options.placeholder&&d.removeAttr("placeholder"),d.data("mask-maxlength")&&d.removeAttr("maxlength"),x.destroyEvents(),x.val($.getCleanVal()),x.setCaret(t),d},$.getCleanVal=function(){return x.getMasked(!0)},$.getMaskedVal=function(t){return x.getMasked(!1,t)},$.init=function(t){if(t=t||!1,w=w||{},$.clearIfNotMatch=l.jMaskGlobals.clearIfNotMatch,$.byPassKeys=l.jMaskGlobals.byPassKeys,$.translation=l.extend({},l.jMaskGlobals.translation,w.translation),$=l.extend(!0,{},$,w),i=x.getRegexMask(),t)x.events(),x.val(x.getMasked());else{w.placeholder&&d.attr("placeholder",w.placeholder),d.data("mask")&&d.attr("autocomplete","off");for(var e=0,a=!0;e<b.length;e++){var n=$.translation[b.charAt(e)];if(n&&n.recursive){a=!1;break}}a&&d.attr("maxlength",b.length).data("mask-maxlength",!0),x.destroyEvents(),x.events();var r=x.getCaret();x.val(x.getMasked()),x.setCaret(r)}},$.init(!d.is("input"))};l.maskWatchers={};var e=function(){var t=l(this),e={},a="data-mask-",n=t.attr("data-mask");if(t.attr(a+"reverse")&&(e.reverse=!0),t.attr(a+"clearifnotmatch")&&(e.clearIfNotMatch=!0),"true"===t.attr(a+"selectonfocus")&&(e.selectOnFocus=!0),u(t,n,e))return t.data("mask",new o(this,n,e))},u=function(t,e,a){a=a||{};var n=l(t).data("mask"),r=JSON.stringify,i=l(t).val()||l(t).text();try{return"function"==typeof e&&(e=e(i)),"object"!==(void 0===n?"undefined":_typeof(n))||r(n.options)!==r(a)||n.mask!==e}catch(t){}};l.fn.mask=function(t,e){e=e||{};var a=this.selector,n=l.jMaskGlobals,r=n.watchInterval,i=e.watchInputs||n.watchInputs,s=function(){if(u(this,t,e))return l(this).data("mask",new o(this,t,e))};return l(this).each(s),a&&""!==a&&i&&(clearInterval(l.maskWatchers[a]),l.maskWatchers[a]=setInterval(function(){l(document).find(a).each(s)},r)),this},l.fn.masked=function(t){return this.data("mask").getMaskedVal(t)},l.fn.unmask=function(){return clearInterval(l.maskWatchers[this.selector]),delete l.maskWatchers[this.selector],this.each(function(){var t=l(this).data("mask");t&&t.remove().removeData("mask")})},l.fn.cleanVal=function(){return this.data("mask").getCleanVal()},l.applyDataMask=function(t){((t=t||l.jMaskGlobals.maskElements)instanceof l?t:l(t)).filter(l.jMaskGlobals.dataMaskAttr).each(e)};var t,a,n,r={maskElements:"input,td,span,div",dataMaskAttr:"*[data-mask]",dataMask:!0,watchInterval:300,watchInputs:!0,keyStrokeCompensation:10,useInput:!/Chrome\/[2-4][0-9]|SamsungBrowser/.test(window.navigator.userAgent)&&(t="input",n=document.createElement("div"),(a=(t="on"+t)in n)||(n.setAttribute(t,"return;"),a="function"==typeof n[t]),n=null,a),watchDataMask:!1,byPassKeys:[9,16,17,18,36,37,38,39,40,91],translation:{0:{pattern:/\d/},9:{pattern:/\d/,optional:!0},"#":{pattern:/\d/,recursive:!0},A:{pattern:/[a-zA-Z0-9]/},S:{pattern:/[a-zA-Z]/}}};l.jMaskGlobals=l.jMaskGlobals||{},(r=l.jMaskGlobals=l.extend(!0,{},r,l.jMaskGlobals)).dataMask&&l.applyDataMask(),setInterval(function(){l.jMaskGlobals.watchDataMask&&l.applyDataMask()},r.watchInterval)},window.jQuery,window.Zepto),function(l){function n(t){return"$"+Math.ceil(t).format()}Number.prototype.format=function(t,e){var a="\\d(?=(\\d{"+(e||3)+"})+"+(0<t?"\\.":"$")+")";return this.toFixed(Math.max(0,~~t)).replace(new RegExp(a,"g"),"$&,")},l(".cience_roi_calculator-new__app").each(function(){var e="#cience_roi_calculator-new__app-"+l(this).data("num");new Vue({el:e,data:{fields:[]},created:function(){var a={};l(e).find("[data-id]").each(function(){var t,e=+l(this).data("id");a["f"+(e=e<10?"0"+e:e)]={},a["f"+e].value=(t=l(this)).is(".usd")||t.is(".percent")?+t.val().replace("$","").replace(",","").replace("%","").replace(" ","").replace(".",""):t.is("[data-value]")?+t.data("value"):+t.val()}),this.fields=a},computed:{f:function(){return{d5:this.fields.f03.value,l1:this.fields.f18.value,l3:this.fields.f23.value}},f02:function(){return n(this.f.d5+Math.ceil(this.fields.f06.value/12*3.2)+(this.fields.f07.value+this.fields.f08.value+Math.ceil(.25*this.fields.f06.value)))},f04:function(){return n(Math.ceil(this.fields.f06.value/12*3.2))},f05:function(){return n(this.fields.f03.value+Math.ceil(this.fields.f06.value/12*3.2))},f09:function(){return n(Math.ceil(.25*this.fields.f06.value))},f10:function(){return n(this.fields.f07.value+this.fields.f08.value+Math.ceil(.25*this.fields.f06.value))},f12:function(){var t=this.fields.f11.value;return n(Math.ceil(.25*t))},f13:function(){var t=this.fields.f11.value;return n(t+Math.ceil(.25*t))},f15:function(){var t=this.fields.f14.value/100,e=this.clearValue(this.f13);return n(Math.ceil(e*t))},f17:function(){var t=this.clearValue(this.f02),e=this.clearValue(this.f15),a=this.fields.f01.value;return n(Math.ceil((t+e)*a))},f16:function(){return n(this.clearValue(this.f17)/12)},f19:function(){return n(this.f.l3)},f20:function(){return"$0"},f21:function(){return"$0"},f22:function(){return"$0"},f24:function(){return"$0"},f25:function(){return"$0"},f26:function(){return"$0"},f27:function(){return n(this.f.l3)},f28:function(){return"$0"},f29:function(){return"$0"},f30:function(){return"$0"},f31:function(){return"$0"},f32:function(){return n(this.clearValue(this.f33)/12)},f33:function(){var t=this.f;return n(t.l1*t.l3)},f34:function(){return n(this.clearValue(this.f16)-this.clearValue(this.f32))},f35:function(){return n(this.clearValue(this.f17)-this.clearValue(this.f33))}},methods:{clearValue:function(t){return+t.replace(/[$]|[,]|[ ]|[%]|[.]/g,"")},usdFormat:function(t){return"$"+t.format()},updateUsdField:function(t){var e=this.clearValue(t.target.value);(!e||e.length<1)&&(e=0);var a=l(t.target).data("id");a="f"+(a=a<10?"0"+a:a),this.fields[a].value=e,this.$forceUpdate()},updateNumberField:function(t){var e=+this.clearValue(t.target.value);(!e||e.length<1)&&(e=0);var a=l(t.target).data("id");a="f"+(a=a<10?"0"+a:a),this.fields[a].value=e,this.$forceUpdate()},updatePercentField:function(t){var e=l(t.target),a=e.next(".slider").find('[type="range"]'),n=e.attr("min")?+e.attr("min"):0,r=e.attr("max")?+e.attr("max"):100,i=e.val().replace("%","");(i=+i)<n&&(e.val(n+"%"),i=n),r<i&&(e.val(r+"%"),i=r);var s=e.data("id");s="f"+(s=s<10?"0"+s:s),this.fields[s].value=i,a.val(i),this.$forceUpdate()},updateRangeSlider:function(t){this.$forceUpdate()},minus:function(t){var e=l(t.target).closest(".plus-minus").find("[type='number']"),a=e.attr("min")?+e.attr("min"):0,n=e.attr("step")?+e.attr("step"):1,r=+e.val();(a||0===a)&&a<r&&a<=r-n&&(r-=n,e.val(r),e[0].dispatchEvent(new Event("input",{bubbles:!0})))},plus:function(t){var e=l(t.target).closest(".plus-minus").find("[type='number']"),a=!!e.attr("max")&&+e.attr("max"),n=e.attr("step")?+e.attr("step"):1,r=+e.val();a?r<a&&r+n<=a&&(r+=n,e.val(r),e[0].dispatchEvent(new Event("input",{bubbles:!0}))):(r+=n,e.val(r),e[0].dispatchEvent(new Event("input",{bubbles:!0})))}}}),l(e).find(".percent-range [type='text']").mask("##0%",{reverse:!0}),l(e).find("[type='text'].usd").mask("$#"),l(e).find(".percent-range").each(function(){var a=l(this).find('[type="text"]'),n=l(this).find('[type="range"]'),t=a.val().replace("%","");n.val(+t),n.on("input",function(t){var e=+n.val();a.val(e+"%"),a.change(),a[0].dispatchEvent(new Event("input",{bubbles:!0}))}),setInterval(function(){a.attr("data-value",a.val().replace("%",""))},100)}),l(e).find(".toggle-holder").on("click",function(t){t.preventDefault(),l(e).find(".collapsed-item").find(".wrap").slideToggle()}),l(e).find("table").not(".inner-table").each(function(){var t=0;l(this).find("tr").each(function(){l(this).attr("data-index",t),t++})}),l(e).find("tr").each(function(){var t=l(this).data("index");l(this).hover(function(){l(e).find("tr[data-index='"+t+"']").addClass("hover")},function(){l(e).find("tr.hover").removeClass("hover")})})})}(jQuery);
//# sourceMappingURL=roi-calculator-new.min.js.map