"use strict";function asyncGeneratorStep(e,o,n,t,r,a,c){try{var i=e[a](c),u=i.value}catch(e){return void n(e)}i.done?o(u):Promise.resolve(u).then(t,r)}function _asyncToGenerator(i){return function(){var e=this,c=arguments;return new Promise(function(o,n){var t=i.apply(e,c);function r(e){asyncGeneratorStep(t,o,n,r,a,"next",e)}function a(e){asyncGeneratorStep(t,o,n,r,a,"throw",e)}r(void 0)})}}!function(){for(var e,o=function(){},n=["assert","clear","count","debug","dir","dirxml","error","exception","group","groupCollapsed","groupEnd","info","log","markTimeline","profile","profileEnd","table","time","timeEnd","timeline","timelineEnd","timeStamp","trace","warn"],t=n.length,r=window.console=window.console||{};t--;)r[e=n[t]]||(r[e]=o)}(),"undefined"==typeof jQuery?console.warn("jQuery hasn't loaded"):console.log("jQuery "+jQuery.fn.jquery+" has loaded"),console.log("222");var $=jQuery;function split_for_chunk_and_foreach(e){console.log(e);var o=e.chunk(100);o.forEach(function(e,o){console.log("chunkItem "+o);var n={action:"my_action_chanked",whatever:e};$.ajax({type:"POST",dataType:"json",url:ajax_object.ajax_url,data:n,beforeSend:function(){console.log("before")},success:function(e){console.log("chunk result "+o),console.log(e)}})})}$(".custom-form").on("submit",function(e){e.preventDefault(),console.log("prevenr ")}),$(".start-button").on("click",function(e){var o={action:"my_action",whatever:ajax_object.we_value};jQuery.post(ajax_object.ajax_url,o,function(e){var o=JSON.parse(e);console.log(o)})}),$(".get-ids").on("click",function(e){var o={action:"get_ids",whatever:ajax_object.we_value};jQuery.post(ajax_object.ajax_url,o,function(e){var o=JSON.parse(e);console.log(o),split_for_chunk_and_foreach(o)})}),Object.defineProperty(Array.prototype,"chunk",{value:function(n){var t=this;return Array(Math.ceil(t.length/n)).fill().map(function(e,o){return t.slice(o*n,o*n+n)})}});