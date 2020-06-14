//import jQuery from 'jquery';
const $ = jQuery;
window.$ = jQuery;
window.jQuery = jQuery;

if (typeof jQuery === 'undefined') {
  console.warn("jQuery hasn't loaded");
} else {
  console.log(`jQuery ${jQuery.fn.jquery} has loaded`);
}

//export { jQuery, $ };


//import {$, jQuery} from './libs/load-jquery';
