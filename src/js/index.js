import Utils from './libs/utils/index';
import ExamplePromise from './examples/example-promise';

let testUndf;
const testNull = null;
const testarr = [1, 2, 3, 4];
const testObj = {
  x: 22,
  y: '33',
  xyz: 'contenta',
};
const testFunc = function () {
  console.log('test function')
}
const testSting = 'lorem ipsum'
const testNum = 777
const testBool = false
const testBoolTrue = true
const testDate = new Date();
const symbol2 = Symbol(42);
const regexp1 = /ab+c/i;
const regexp2 = new RegExp('ab+c', 'i');
const regexp3 = new RegExp(/ab+c/, 'i');
const testError = new Error('Ой-ой!');
const utils = new Utils('new name');

utils.warn('hire');

utils.log(utils.name);
function sanitise(x) {
  if (isNaN(x)) {
    return NaN;
  }
  return x;
}
utils.log(testUndf);
utils.log(testNull);
utils.log(testarr);
utils.log(testObj);
utils.log(testFunc);
utils.log(testSting);
utils.log(testNum);
utils.log(sanitise('NotANumber'));
utils.log(testBool);
utils.log(testBoolTrue);
utils.log(testDate);
utils.log(symbol2);
utils.log(regexp1);
utils.log(regexp2);
utils.log(regexp3);
utils.log(testError);

utils.err(utils.name);

utils.ok(utils.name);



ExamplePromise()


//
// (function () {
//  let method;
//  const noop = function noop() {};
//  const methods = ['assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error', 'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log', 'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd', 'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'];
//  let { length } = methods;
//  const console = window.console = window.console || {};
//  while (length--) {
//    method = methods[length]; // Only stub undefined methods.
//    if (!console[method]) {
//      console[method] = noop;
//    }
//  }
// }());
//
//
//
// $('.custom-form').on('submit', (e) => {
//  e.preventDefault();
//  console.log('prevenr ');
// });
//
// $('.start-button').on('click', (e) => {
//  const data = {
//    action: 'my_action',
//    whatever: ajax_object.we_value, // We pass php values differently!
//
//  }; // We can also pass the url value separately from ajaxurl for front end AJAX implementations
//
//  jQuery.post(ajax_object.ajax_url, data, (response) => {
//    //    console.log(response)
//    const obj = JSON.parse(response); //      console.log(obj.count);
//
//    console.log(obj); //    alert('Got this from the server: ' + response);
//  });
// });
//
// $('.get-ids').on('click', (e) => {
//  const data = {
//    action: 'get_ids',
//    whatever: ajax_object.we_value, // We pass php values differently!
//
//  }; // We can also pass the url value separately from ajaxurl for front end AJAX implementations
//
//  jQuery.post(ajax_object.ajax_url, data, (response) => {
//    //    console.log(response)
//    const obj = JSON.parse(response); //      console.log(obj.count);
//
//    console.log(obj);
//    split_for_chunk_and_foreach(obj); //    alert('Got this from the server: ' + response);
//  });
// });
//
// $('.get-empty-authors').on('click', (e) => {
//  const data = {
//    action: 'get_empty_users',
//    whatever: ajax_object.we_value, // We pass php values differently!
//
//  }; // We can also pass the url value separately from ajaxurl for front end AJAX implementations
//
//  jQuery.post(ajax_object.ajax_url, data, (response) => {
//    //    console.log(response)
//    const obj = JSON.parse(response); //      console.log(obj.count);
//
//    console.log(obj);
//    split_authors_for_chunk_and_foreach_clean(obj); //    alert('Got this from the server: ' + response);
//  });
// });
// function split_authors_for_chunk_and_foreach_clean(ids) {
//  console.log(ids);
//  const chunks = ids.chunk(1);
//  console.log(chunks); //  chunks.forEach(function(chunkItem, index){
//
//  (async () => {
//    const data = [1, 2, 3, 4, 5];
//
//    for (const e of data) {
//      const i = await somePromiseFn(e);
//      console.log(i);
//    }
//
//    console.log('this will print delimiter ');
//
//    for (let n = 0; n < chunks.length; n++) {
//      const reslt = await someAjaxPromiseAuthors(chunks[n]);
//      console.log(`Finished ${n} of ${chunks.length}`);
//      console.log(reslt);
//    }
//    console.log('this will print last');
//  })();
// }
//
// function split_for_chunk_and_foreach(ids) {
//  console.log(ids);
//  const chunks = ids.chunk(50);
//  console.log(chunks);
//
//  (async () => {
//    const data = [1, 2, 3, 4, 5];
//
//    for (const e of data) {
//      const i = await somePromiseFn(e);
//      console.log(i);
//    }
//
//    console.log('this will print delimiter ');
//
//    for (let n = 0; n < chunks.length; n++) {
//      const reslt = await someAjaxPromise(chunks[n]);
//      console.log(`Finished ${n} of ${chunks.length}`);
//      console.log(reslt);
//    }
//
//    console.log('this will print last');
//  })();
//
// }
//
// function someAjaxPromise(chunker) {
//  return new Promise((res, rej) => {
//    setTimeout(() => {
//      $.ajax({
//        beforeSend() { /* console.log('beforesend') */ },
//        type: 'POST',
//        dataType: 'json',
//        url: ajax_object.ajax_url,
//        data: {
//          action: 'my_action_chanked',
//          whatever: chunker, // We pass php values differently!
//        },
//        success(result) {
//          //          console.log ( "success" );
//          //          console.log ( result );
//          res(result);
//        },
//        error(XMLHttpRequest, textStatus, errorThrown) {
//          console.log('XMLHttpRequest: ');
//          console.log(XMLHttpRequest);
//          console.log(`Status: ${textStatus}`);
//          console.log(`Error: ${errorThrown}`);
//        },
//      });
//
//      //      res(chunker)
//    }, 2000);
//  });
// }
// function someAjaxPromiseAuthors(chunker) {
//  return new Promise((res, rej) => {
//    setTimeout(() => {
//      $.ajax({
//        beforeSend() { /* console.log('beforesend') */ },
//        type: 'POST',
//        dataType: 'json',
//        url: ajax_object.ajax_url,
//        data: {
//          action: 'my_action_chanked_authors',
//          whatever: chunker, // We pass php values differently!
//        },
//        success(result) {
//          //          console.log ( "success" );
//          //          console.log ( result );
//          res(result);
//        },
//        error(XMLHttpRequest, textStatus, errorThrown) {
//          console.log('XMLHttpRequest: ');
//          console.log(XMLHttpRequest);
//          console.log(`Status: ${textStatus}`);
//          console.log(`Error: ${errorThrown}`);
//        },
//      });
//
//      //      res(chunker)
//    }, 2000);
//  });
// }
//
// function somePromiseFn(n) {
//  return new Promise((res, rej) => {
//    setTimeout(() => {
//      res(n);
//    }, 100);
//  });
// }
/// **
// * Define the chunk method in the prototype of an array
// * that returns an array with arrays of the given size.
// *
// * @param chunkSize {Integer} Size of every group
// */
//
// Object.defineProperty(Array.prototype, 'chunk', {
//  value: function value(chunkSize) {
//    const that = this;
//    return Array(Math.ceil(that.length / chunkSize)).fill().map((_, i) => that.slice(i * chunkSize, i * chunkSize + chunkSize));
//  },
// });
//
