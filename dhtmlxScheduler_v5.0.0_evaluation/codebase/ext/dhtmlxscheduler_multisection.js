/*
@license
dhtmlxScheduler v.5.0.0 Professional Evaluation

This software is covered by DHTMLX Evaluation License. Contact sales@dhtmlx.com to get Commercial or Enterprise license. Usage without proper license is prohibited.

(c) Dinamenta, UAB.
*/
Scheduler.plugin(function(e){e.config.multisection=!0,e.config.multisection_shift_all=!0,e.config.section_delimiter=",",e.attachEvent("onSchedulerReady",function(){e._inited_multisection_copies||(e.attachEvent("onEventIdChange",function(e,t){var a=this._multisection_copies;if(a&&a[e]&&!a[t]){var i=a[e];delete a[e],a[t]=i}}),e._inited_multisection_copies=!0),e._register_copies_array=function(e){for(var t=0;t<e.length;t++)this._register_copy(e[t])},e._register_copy=function(e){this._multisection_copies[e.id]||(this._multisection_copies[e.id]={});
var t=e[this._get_section_property()],a=this._multisection_copies[e.id];a[t]||(a[t]=e)},e._get_copied_event=function(t,a){if(!this._multisection_copies[t])return null;if(this._multisection_copies[t][a])return this._multisection_copies[t][a];var i=this._multisection_copies[t];if(e._drag_event&&e._drag_event._orig_section&&i[e._drag_event._orig_section])return i[e._drag_event._orig_section];var n=1/0,r=null;for(var s in i)i[s]._sorder<n&&(r=i[s],n=i[s]._sorder);return r},e._clear_copied_events=function(){
this._multisection_copies={}},e._restore_render_flags=function(t){for(var a=this._get_section_property(),i=0;i<t.length;i++){var n=t[i],r=e._get_copied_event(n.id,n[a]);if(r)for(var s in r)0===s.indexOf("_")&&(n[s]=r[s])}};var t=e._update_unit_section;e._update_unit_section=function(a){return e._update_sections(a,t)};var a=e._update_timeline_section;e._update_timeline_section=function(t){return e._update_sections(t,a)},e.isMultisectionEvent=function(e){if(e&&this._get_multisection_view()){var t=this._get_event_sections(e);
return t.length>1}return!1},e._get_event_sections=function(e){var t=this._get_section_property(),a=e[t]||"";return this._parse_event_sections(a)},e._parse_event_sections=function(t){return t instanceof Array?t:t.toString().split(e.config.section_delimiter)},e._clear_copied_events(),e._split_events=function(t){var a=[],i=this._get_multisection_view(),n=this._get_section_property();if(i)for(var r=0;r<t.length;r++){var s=this._get_event_sections(t[r]);if(s.length>1){for(var d=0;d<s.length;d++)if("undefined"!=typeof i.order[s[d]]){
var o=e._copy_event(t[r]);o[n]=s[d],a.push(o)}}else a.push(t[r])}else a=t;return a},e._get_multisection_view=function(){return this.config.multisection?e._get_section_view():!1};var i=e.get_visible_events;e.get_visible_events=function(e){this._clear_copied_events();var t=i.apply(this,arguments);if(this._get_multisection_view()){t=this._split_events(t);for(var a=0;a<t.length;a++)this.is_visible_events(t[a])||(t.splice(a,1),a--);this._register_copies_array(t)}return t},e._rendered_events={};var n=e.render_view_data;
e.render_view_data=function(e,t){return this._get_multisection_view()&&e&&(e=this._split_events(e),this._restore_render_flags(e)),n.apply(this,[e,t])},e._update_sections=function(t,a){var i=t.view,n=t.event,r=t.pos;if(e.isMultisectionEvent(n)){if(e._drag_event._orig_section||(e._drag_event._orig_section=r.section),e._drag_event._orig_section!=r.section){var s=i.order[r.section]-i.order[e._drag_event._orig_section];if(s){var d=this._get_event_sections(n),o=[],l=!0;if(e.config.multisection_shift_all)for(var _=0;_<d.length;_++){
var c=e._shift_sections(i,d[_],s);if(null===c){o=d,l=!1;break}o[_]=c}else for(var _=0;_<d.length;_++){if(d[_]==r.section){o=d,l=!1;break}if(d[_]==e._drag_event._orig_section){var c=e._shift_sections(i,d[_],s);if(null===c){o=d,l=!1;break}o[_]=c}else o[_]=d[_]}l&&(e._drag_event._orig_section=r.section),n[e._get_section_property()]=o.join(e.config.section_delimiter)}}}else a.apply(e,[t])},e._shift_sections=function(e,t,a){for(var i=null,n=e.y_unit||e.options,r=0;r<n.length;r++)if(n[r].key==t){i=r;break;
}var s=n[i+a];return s?s.key:null};var r=e._get_blocked_zones;e._get_blocked_zones=function(e,t,a,i,n){if(t&&this.config.multisection){t=this._parse_event_sections(t);for(var s=[],d=0;d<t.length;d++)s=s.concat(r.apply(this,[e,t[d],a,i,n]));return s}return r.apply(this,arguments)};var s=e._check_sections_collision;e._check_sections_collision=function(e,t){if(this.config.multisection&&this._get_section_view()){e=this._split_events([e]),t=this._split_events([t]);for(var a=!1,i=0,n=e.length;n>i&&!a;i++)for(var r=0,d=t.length;d>r;r++)if(s.apply(this,[e[i],t[r]])){
a=!0;break}return a}return s.apply(this,arguments)}})});