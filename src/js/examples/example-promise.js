// todo example fetch https://googlechrome.github.io/samples/fetch-api/fetch-post.html
// https://developer.github.com/v3/
// https://cran.r-project.org/web/packages/jsonlite/vignettes/json-apis.html
// https://developer.mozilla.org/ru/docs/Web/API/Fetch_API/Using_Fetch

export default function ExamplePromise() {
  const URLs = [
    'https://api.github.com/users/crazyyy/repos',
    'https://api.github.com/repos/vmg/redcarpet/issues?state=open',
    'https://api.github.com/repos/vmg/redcarpet/issues?state=closed',
  ]

  const requests = URLs.map((url) => fetch(url))

  const responses = Promise.all(requests)
  console.log(responses)
}


