// todo Add reject example

// https://stackoverflow.com/questions/38884522/why-is-my-asynchronous-function-returning-promise-pending-instead-of-a-val
// 1. The return of the .then function will be the resolved value of the promise.
function initPromise() {
  return new Promise(((resolve, reject) => {
    resolve('initResolve');
  }));
}

initPromise()
  .then((result) => {
    console.log(result); // "initResolve"
    return 'normalReturn';
  })
  .then((result) => {
    console.log(result); // "normalReturn"
  });

// 2. If the .then function returns a Promise,
// then the resolved value of that chained promise is passed to the following .then.
function initChainedPromise() {
  return new Promise(((res, rej) => {
    res('initChainedResolve');
  }));
}

initChainedPromise()
  .then((result) => {
    console.log(result); // "initChainedResolve"
    return new Promise(((resolve, reject) => {
      setTimeout(() => {
        resolve('secondPromise');
      }, 1000);
    }));
  })
  .then((result) => {
    console.log(result); // "secondPromise"
  });




export default function ExamplePromise() {
  const URLs = [
    'https://jsonplaceholder.typicode.com/posts',
    'https://reqres.in/api/users?page=2',
    'https://jsonplaceholder.typicode.com/albums',
    'https://jsonplaceholder.typicode.com/photos',
  ];

  const requests = URLs.map((url) => fetching(url));

    const responses = Promise.all(requests);
  console.log(responses);
  console.log(requests);
}

function fetching(url = '', data = {}) {
  const currentdate = new Date();
  console.log(`${currentdate.getHours()}:${currentdate.getMinutes()}:${currentdate.getSeconds()} start ${url}`);
  fetch(url, {
    method: 'GET', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // cors, no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json',
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *client
    // body: JSON.stringify(data), // body data type must match "Content-Type" header
  })
    .then(status)
    .then(json)
    .then((result) => {
      const currentdate2 = new Date();
      console.log(`${currentdate2.getHours()}:${currentdate2.getMinutes()}:${currentdate2.getSeconds()} stop ${url}`)
      console.log('Request succeeded with JSON response', result);
    })
    .catch((error) => {
      console.log('Request failed', error);
    });
}


function status(response) {
  if (response.status >= 200 && response.status < 300) {
    console.log(`Looks like all good here. Status Code: ${response.status}`);

    return Promise.resolve(response);
  }
  console.log('Fetch Error :-S', response.statusText);
  return Promise.reject(new Error(response.statusText));
}

function json(response) {
  return response.json();
}
