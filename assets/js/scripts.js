'use strict'; // Avoid `console` errors in browsers that lack a console.

(function () {
  var method;

  var noop = function noop() {};

  var methods = ["assert", "clear", "count", "debug", "dir", "dirxml", "error", "exception", "group", "groupCollapsed", "groupEnd", "info", "log", "markTimeline", "profile", "profileEnd", "table", "time", "timeEnd", "timeline", "timelineEnd", "timeStamp", "trace", "warn"];
  var length = methods.length;
  var console = window.console = window.console || {};

  while (length--) {
    method = methods[length]; // Only stub undefined methods.

    if (!console[method]) {
      console[method] = noop;
    }
  }
})();

if (typeof jQuery === "undefined") {
  console.warn("jQuery hasn't loaded");
} else {
  console.log("jQuery " + jQuery.fn.jquery + " has loaded");
} // Place any jQuery/helper plugins in here.


console.log("222");
var $ = jQuery;



$(".custom-form").on("submit", function (e) {
  e.preventDefault();
  console.log("prevenr ");
});


$(".start-button").on("click", function (e) {
  var data = {
    "action": "my_action",
    "whatever": ajax_object.we_value // We pass php values differently!

  }; // We can also pass the url value separately from ajaxurl for front end AJAX implementations

  jQuery.post(ajax_object.ajax_url, data, function (response) {
    //    console.log(response)
    const obj = JSON.parse(response); //      console.log(obj.count);

    console.log(obj); //    alert('Got this from the server: ' + response);
  });
});


$(".get-ids").on("click", function (e) {
  var data = {
    "action": "get_ids",
    "whatever": ajax_object.we_value // We pass php values differently!

  }; // We can also pass the url value separately from ajaxurl for front end AJAX implementations

  jQuery.post(ajax_object.ajax_url, data, function (response) {
    //    console.log(response)
    const obj = JSON.parse(response); //      console.log(obj.count);

    console.log(obj);
    split_for_chunk_and_foreach(obj); //    alert('Got this from the server: ' + response);
  });
});



$(".get-empty-authors").on("click", function (e) {
  var data = {
    "action": "get_empty_users",
    "whatever": ajax_object.we_value // We pass php values differently!

  }; // We can also pass the url value separately from ajaxurl for front end AJAX implementations

  jQuery.post(ajax_object.ajax_url, data, function (response) {
    //    console.log(response)
    const obj = JSON.parse(response); //      console.log(obj.count);

    console.log(obj);
    split_authors_for_chunk_and_foreach_clean(obj); //    alert('Got this from the server: ' + response);
  });
});
function split_authors_for_chunk_and_foreach_clean(ids) {
  console.log(ids);
  var chunks = ids.chunk(1);
  console.log(chunks); //  chunks.forEach(function(chunkItem, index){

  (async () => {
    var data = [1, 2, 3, 4, 5];

    for (let e of data) {
      const i = await somePromiseFn(e);
      console.log(i);
    }

    console.log('this will print delimiter ');

    for ( var n = 0; n < chunks.length; n++ ) {
      const reslt = await someAjaxPromiseAuthors(chunks[n]);
      console.log('Finished ' + n + ' of ' + chunks.length)
      console.log(reslt)

    }
    console.log('this will print last');
  })();



}






function split_for_chunk_and_foreach(ids) {
  console.log(ids);
  var chunks = ids.chunk(50);
  console.log(chunks); //  chunks.forEach(function(chunkItem, index){
  //    console.log('chunkItem ' + index)
  //      var data = {
  //        'action': 'my_action_chanked',
  //        'whatever': chunkItem      // We pass php values differently!
  //      };
  //
  //    $.ajax({
  //      type: "POST",
  //      dataType: "json",
  //      url: ajax_object.ajax_url,
  //      data: data,
  //      beforeSend: function( xhr ) {
  //        console.log('before')
  //    },
  //    success: function( response ) {
  //      console.log('chunk result ' + index);
  //      //    console.log(response)
  //      //        console.log(response);
  //      //        console.log(Array.isArray(response) );
  ////      const obj = JSON.parse(response);
  //              console.log(response);
  ////      console.log(obj);
  //    }
  //  });
  //
  //  })

  (async () => {
    var data = [1, 2, 3, 4, 5];

    for (let e of data) {
      const i = await somePromiseFn(e);
      console.log(i);
    }

    console.log('this will print delimiter ');

    for ( var n = 0; n < chunks.length; n++ ) {
      const reslt = await someAjaxPromise(chunks[n]);
      console.log('Finished ' + n + ' of ' + chunks.length)
      console.log(reslt)

    }

    console.log('this will print last');
  })();

  //  for ( var i = 0; i < chunks.length; ++i ) {
  //    var sendData = {
  //      type: "POST", dataType: "json", url: ajax_object.ajax_url, data: {
  //        "action": "my_action_chanked", "whatever": chunks[ i ], // We pass php values differently!
  //      },
  //    };
  //
  //  $.ajax ( sendData, {
  //      success: function ( result ) {
  //        // 2. Store the results in an array
  //        console.log ( "success" );
  //        console.log ( result );
  //        results.push ( result );
  //      }, error: function ( XMLHttpRequest, textStatus, errorThrown ) {
  //        console.log ( "Status: " + textStatus );
  //        console.log ( "Error: " + errorThrown );
  //      },
  //    } );
  //
  //
  //  }

}

function someAjaxPromise(chunker) {
  return new Promise((res, rej) => {

    setTimeout(function() {

      $.ajax({
        beforeSend: function() { /* console.log('beforesend') */ },
        type: "POST",
        dataType: "json",
        url: ajax_object.ajax_url,
        data: {
          "action": "my_action_chanked",
          "whatever": chunker, // We pass php values differently!
        },
        success: function(result){
          //          console.log ( "success" );
          //          console.log ( result );
          res(result);
        },
        error: function(XMLHttpRequest, textStatus, errorThrown) {
          console.log ("XMLHttpRequest: ");
          console.log (XMLHttpRequest);
          console.log ("Status: " + textStatus);
          console.log ("Error: " + errorThrown);
        }
      });


      //      res(chunker)
    }, 2000);

  });
}
function someAjaxPromiseAuthors(chunker) {
  return new Promise((res, rej) => {

    setTimeout(function() {

      $.ajax({
        beforeSend: function() { /* console.log('beforesend') */ },
        type: "POST",
        dataType: "json",
        url: ajax_object.ajax_url,
        data: {
          "action": "my_action_chanked_authors",
          "whatever": chunker, // We pass php values differently!
        },
        success: function(result){
          //          console.log ( "success" );
          //          console.log ( result );
          res(result);
        },
        error: function(XMLHttpRequest, textStatus, errorThrown) {
          console.log ("XMLHttpRequest: ");
          console.log (XMLHttpRequest);
          console.log ("Status: " + textStatus);
          console.log ("Error: " + errorThrown);
        }
      });


      //      res(chunker)
    }, 2000);

  });
}

function somePromiseFn(n) {
  return new Promise((res, rej) => {

    setTimeout(function() {
      res(n)
    }, 100);

  });
}
/**
 * Define the chunk method in the prototype of an array
 * that returns an array with arrays of the given size.
 *
 * @param chunkSize {Integer} Size of every group
 */


Object.defineProperty(Array.prototype, "chunk", {
  value: function value(chunkSize) {
    var that = this;
    return Array(Math.ceil(that.length / chunkSize)).fill().map(function (_, i) {
      return that.slice(i * chunkSize, i * chunkSize + chunkSize);
    });
  }
});
