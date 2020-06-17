const token = 'GITHUB_TOKEN';
const url = 'https://api.github.com/users';
const users = [
  'ArfatSalman',
  'octocat',
  'norvig',
];

const myHeaders = new Headers();
myHeaders.append('Content-Type', 'application/json');
myHeaders.append('Authorization', `Bearer ${token}`);

const requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow',
};

// Get count of user opened repos
async function fetchPublicReposCount(username) {
  const response = await fetch(`${url}/${username}`, requestOptions);
  const json = await response.json();
  return json.public_repos;
}

// example how to make all request in parallel mode
async function parallelFetchAllCounts(users) {
  const promises = users.map(async (username, index) => {
    const count = await fetchPublicReposCount(username);
    console.log(`P(${index}) ${username} > ${count}`);
    return count;
  });
  return Promise.all(promises);
}

// example how to make all request in one by one mode
async function serialFetchAllCounts(users) {
  const counts = [];
  for (let index = 0; index < users.length; index++) {
    const username = users[index];
    const count = await fetchPublicReposCount(username);
    console.log(`S(${index}) ${username} > ${count}`);
    counts.push(count);
  }
  return counts;
}

console.log(parallelFetchAllCounts(users));
console.log(serialFetchAllCounts(users));

// Another example
function somePromiseFn(n) {
  return new Promise((res, rej) => {
    setTimeout(() => res(n), 1000);
  });
}

(async () => {
  const data = [1, 2, 3, 4, 5];
  const p = await Promise.all(data.map(async (e) => await somePromiseFn(e)));
  console.log(...p);
})();

(async () => {
  const data = [1, 2, 3, 4, 5];
  for (const e of data) {
    const i = await somePromiseFn(e);
    console.log(i);
  }
  console.log('this will print last');
})();
