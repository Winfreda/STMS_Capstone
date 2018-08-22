/*
@license
dhtmlxScheduler v.5.0.0 Professional Evaluation

This software is covered by DHTMLX Evaluation License. Contact sales@dhtmlx.com to get Commercial or Enterprise license. Usage without proper license is prohibited.

(c) Dinamenta, UAB.
*/
Scheduler.plugin(function(e){e.form_blocks.combo={render:function(e){e.cached_options||(e.cached_options={});var t="";return t+="<div class='"+e.type+"' style='height:"+(e.height||20)+"px;' ></div>"},set_value:function(t,i,a,n){!function(){function i(){if(t._combo&&t._combo.DOMParent){var e=t._combo;e.unload?e.unload():e.destructor&&e.destructor(),e.DOMParent=e.DOMelem=null}}i();var a=e.attachEvent("onAfterLightbox",function(){i(),e.detachEvent(a)})}(),window.dhx_globalImgPath=n.image_path||"/",t._combo=new dhtmlXCombo(t,n.name,t.offsetWidth-8),
n.onchange&&t._combo.attachEvent("onChange",n.onchange),n.options_height&&t._combo.setOptionHeight(n.options_height);var r=t._combo;if(r.enableFilteringMode(n.filtering,n.script_path||null,!!n.cache),n.script_path){var s=a[n.map_to];s?n.cached_options[s]?(r.addOption(s,n.cached_options[s]),r.disable(1),r.selectOption(0),r.disable(0)):e.$ajax.get(n.script_path+"?id="+s+"&uid="+e.uid(),function(t){var i,a=t.xmlDoc.responseText;try{var d=JSON.parse(a);i=d.options[0].text}catch(o){var l=e.$ajax.xpath("//option",t.xmlDoc)[0];
i=l.childNodes[0].nodeValue}n.cached_options[s]=i,r.addOption(s,i),r.disable(1),r.selectOption(0),r.disable(0)}):r.setComboValue("")}else{for(var d=[],o=0;o<n.options.length;o++){var l=n.options[o],_=[l.key,l.label,l.css];d.push(_)}if(r.addOption(d),a[n.map_to]){var h=r.getIndexByValue(a[n.map_to]);r.selectOption(h)}}},get_value:function(e,t,i){var a=e._combo.getSelectedValue();return i.script_path&&(i.cached_options[a]=e._combo.getSelectedText()),a},focus:function(e){}},e.form_blocks.radio={render:function(t){
var i="";i+="<div class='dhx_cal_ltext dhx_cal_radio' style='height:"+t.height+"px;' >";for(var a=0;a<t.options.length;a++){var n=e.uid();i+="<input id='"+n+"' type='radio' name='"+t.name+"' value='"+t.options[a].key+"'><label for='"+n+"'> "+t.options[a].label+"</label>",t.vertical&&(i+="<br/>")}return i+="</div>"},set_value:function(e,t,i,a){for(var n=e.getElementsByTagName("input"),r=0;r<n.length;r++){n[r].checked=!1;var s=i[a.map_to]||t;n[r].value==s&&(n[r].checked=!0)}},get_value:function(e,t,i){
for(var a=e.getElementsByTagName("input"),n=0;n<a.length;n++)if(a[n].checked)return a[n].value},focus:function(e){}},e.form_blocks.checkbox={render:function(t){return e.config.wide_form?'<div class="dhx_cal_wide_checkbox" '+(t.height?"style='height:"+t.height+"px;'":"")+"></div>":""},set_value:function(t,i,a,n){t=document.getElementById(n.id);var r=e.uid(),s="undefined"!=typeof n.checked_value?i==n.checked_value:!!i;t.className+=" dhx_cal_checkbox";var d="<input id='"+r+"' type='checkbox' value='true' name='"+n.name+"'"+(s?"checked='true'":"")+"'>",o="<label for='"+r+"'>"+(e.locale.labels["section_"+n.name]||n.name)+"</label>";
if(e.config.wide_form?(t.innerHTML=o,t.nextSibling.innerHTML=d):t.innerHTML=d+o,n.handler){var l=t.getElementsByTagName("input")[0];l.onclick=n.handler}},get_value:function(e,t,i){e=document.getElementById(i.id);var a=e.getElementsByTagName("input")[0];return a||(a=e.nextSibling.getElementsByTagName("input")[0]),a.checked?i.checked_value||!0:i.unchecked_value||!1},focus:function(e){}}});