"use strict";!function(){for(var o,e=function(){},n=["assert","clear","count","debug","dir","dirxml","error","exception","group","groupCollapsed","groupEnd","info","log","markTimeline","profile","profileEnd","table","time","timeEnd","timeline","timelineEnd","timeStamp","trace","warn"],t=n.length,r=window.console=window.console||{};t--;)r[o=n[t]]||(r[o]=e)}(),"undefined"==typeof jQuery?console.warn("jQuery hasn't loaded"):console.log("jQuery "+jQuery.fn.jquery+" has loaded"),console.log("222");var $=jQuery;function split_for_chunk_and_foreach(o){console.log(o),o.chunk(100).forEach(function(o){console.log("chunkItem"),console.log(o);var e={action:"my_action_chanked",whatever:o};jQuery.post(ajax_object.ajax_url,e,function(o){console.log("chunk result"),console.log(o)})})}$(".custom-form").on("submit",function(o){o.preventDefault(),console.log("prevenr ")}),$(".start-button").on("click",function(o){var e={action:"my_action",whatever:ajax_object.we_value};jQuery.post(ajax_object.ajax_url,e,function(o){var e=JSON.parse(o);console.log(e)})}),$(".get-ids").on("click",function(o){var e={action:"get_ids",whatever:ajax_object.we_value};jQuery.post(ajax_object.ajax_url,e,function(o){var e=JSON.parse(o);console.log(e),split_for_chunk_and_foreach(e)})}),Object.defineProperty(Array.prototype,"chunk",{value:function(n){var t=this;return Array(Math.ceil(t.length/n)).fill().map(function(o,e){return t.slice(e*n,e*n+n)})}});