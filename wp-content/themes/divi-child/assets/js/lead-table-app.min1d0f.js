"use strict";var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};!function(p){function t(a){p(a).find(".grade").each(function(){var e=p(this),t=e.data("company"),n=p(a).find("select[data-company='"+t+"'] option:selected, [type='checkbox'][data-company='"+t+"']:checked, [type='radio'][data-company='"+t+"']:checked"),i=0;n.each(function(){var e=p(this).attr("data-value");"undefined"!==(void 0===e?"undefined":_typeof(e))&&!1!==e?i+=parseInt(e):i+=parseInt(p(this).val())}),e.attr("data-grade",i),e.html(i)})}p(".cience_lead_table__sections_app").each(function(){var d="#cience_lead_table__sections_app-"+p(this).data("num"),f=p(this).find("[type='hidden'][name='_wpcf7']").val();f=!!f&&+f,new Vue({el:d,created:function(){p(d).find(".json").remove()},mounted:function(){t(d)},updated:function(){t(d)},data:{sections:JSON.parse(p(d).find(".json").html()),services:4,companies:2},methods:{addCompany:function(e){e.preventDefault(),this.companies<5&&(this.companies++,t(d))},removeCompany:function(e){e.preventDefault(),1<this.companies&&(this.companies--,t(d))},addService:function(e){e.preventDefault(),this.services++},removeService:function(e){e.preventDefault(),0<this.services&&(this.services--,t(d))},changeGrade:function(e){t(d)}}}),p(d).closest(".cience_lead_table").find(".cience_lead_table__print-wrap form [type='submit']").click(function(e){e.preventDefault();var c=p(this).closest(".cience_lead_table").find(".cience_lead_table__sections_app table"),t=p(this).closest("form"),o=[],a={},n=[];if(c.find("thead .services [type='text']").each(function(){n.push(p(this).val().replace(/'/g,"%%quot%%"))}),c.find("tbody tr[data-section]").each(function(){var e=p(this).data("section");"section-"+p(this).data("section")in a||(a["section-"+p(this).data("section")]={},a["section-"+p(this).data("section")].index=e,a["section-"+p(this).data("section")].fields={}),p(this).hasClass("section-title")?a["section-"+p(this).data("section")].title=p(this).find("th").text():c.find("tbody tr[data-section='"+e+"'].section-title").length||(a["section-"+e].title="")}),c.find("tbody tr.field").each(function(){var e=p(this).data("section"),t=p(this).data("field"),n=p(this).find("th").text(),i=p(this).find("td").eq(0).attr("class").replace("type-","");a["section-"+e].fields["field-"+t]={},a["section-"+e].fields["field-"+t].index=t,a["section-"+e].fields["field-"+t].title=n,a["section-"+e].fields["field-"+t].type=i}),c.find("tr.companies input.company-name").each(function(e){var t=p(this).data("company"),n=p(this).val().replace(/'/g,"%%quot%%"),i=c.find(".grade[data-company='"+t+"']").text(),a=[];c.find("tr input.service-name[data-company='"+t+"']").each(function(){var e=!!p(this).is(":checked");a.push(e)});var s={};c.find("tbody tr.field td[data-company="+t+"]").each(function(){var e=p(this).parent("tr").data("section"),t=p(this).parent("tr").data("field"),n="";if(p(this).hasClass("type-select"))n=p(this).find("option:selected").text();else if(p(this).hasClass("type-checkboxes")){var i=p(this).find("[type='checkbox']:checked"),a=0;i.each(function(){a++,n+=p(this).next("span").text(),a<i.length&&(n+=", ")})}else p(this).hasClass("type-text")?n=p(this).find("[type='text']").val().replace(/'/g,"%%quot%%"):p(this).hasClass("type-radio")?n=p(this).find("[type='radio']:checked").val():p(this).hasClass("type-checkbox")&&(n=p(this).find("[type='checkbox']:checked").val());s["section-"+e+"field-"+t]=n}),o.push({companyIndex:t,companyName:n,companyGrade:i,companyServices:a,fields:s})}),o=encodeURIComponent(JSON.stringify(o)),a=encodeURIComponent(JSON.stringify(a)),n=encodeURIComponent(JSON.stringify(n)),t.append("<input type='hidden' name='data' value='"+o+"'>"),t.append("<input type='hidden' name='sections' value='"+a+"'>"),t.append("<input type='hidden' name='services' value='"+n+"'>"),f){var i=p(d).find(".download-form"),s=!1;document.addEventListener("wpcf7mailsent",function(e){f==+e.detail.contactFormId&&(s=!0,i.find(".wpcf7-response-output").fadeOut(),i.find(".prompt").fadeOut(400,function(){i.find(".download").fadeIn()}))},!1),i.find(".download-pdf").click(function(e){e.preventDefault(),s&&(t.submit(),p.fancybox.close(),i.find(".wpcf7-response-output").hide(),i.find(".prompt").show(),i.find(".download").hide(),i.find("[type='text']").not("[name='from-page']").val("").attr("value",""))}),p.fancybox.open([{src:i,type:"inline"}])}else t.submit()})})}(jQuery);
//# sourceMappingURL=lead-table-app.min.js.map