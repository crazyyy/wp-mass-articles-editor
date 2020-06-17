// todo example fetch https://googlechrome.github.io/samples/fetch-api/fetch-post.html
// https://developer.github.com/v3/
// https://cran.r-project.org/web/packages/jsonlite/vignettes/json-apis.html
// https://developer.mozilla.org/ru/docs/Web/API/Fetch_API/Using_Fetch

async function ExampleFetchGet(url = '') {
  try {
    const response = await fetch(url, {
      method: 'GET', // или 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const json = await response.json();
    console.log('Fetch done:');
    console.log(json);
    // console.log(JSON.stringify(json));
  } catch (error) {
    console.error('Fetch Error:');
    console.error(error);
  }
}

async function ExampleFetchPost(url = '', data = {}) {
  try {
    const response = await fetch(url, {
      method: 'POST', // or 'PUT'
      body: JSON.stringify(data), // data can be 'String' or {Object}!
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const json = await response.json();
    console.log('Fetch done:');
    console.log(json);
    // console.log(JSON.stringify(json));
  } catch (error) {
    console.error('Fetch Error:');
    console.error(error);
  }
}

export { ExampleFetchGet, ExampleFetchPost };
