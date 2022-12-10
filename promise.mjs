//Promise
//Hold the eventual result of an asynchronus operation when its complete
// it can either result in a value or error
///promise basicaly promises you that it will give you the result of an asynchrous operation

// let random = Math.random().toFixed();
// let p = new Promise((resolve, reject) => {
//   //kickoff some async work
//   setTimeout(() => {
//     if (random > 0) {
//       resolve(1);
//     } else {
//       reject(new Error("message"));
//     }
//   }, 2000);
// });

// p.then((res) => console.log(res));
// p.catch((err) => console.log(err.message));

// converting callback hell to promises
console.log("Before Func Call");

// getUser(1)
//   .then((res) => getRepo(res.githubUser))
//   .then((res) => getCommit(res[0].repo[0]))
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err.message));

// converting promises to async-await
const data = async () => {
  const user = await getUser(1);
  const repo = await getRepo(user.githubUser);
  const commits = await getCommits(repo[0].repo[0]);
  console.log(commits);
};
data();

console.log("After Func Call");

function getUser(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Getting User");
      resolve({
        id,
        githubUser: "obaid",
      });
    }, 2000);
  });
}

function getRepo(user) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Getting Repos");
      resolve([
        {
          githubUser: user,
          repo: ["repo1", "repo2", "repo3"],
        },
      ]);
    }, 2000);
  });
}

function getCommits(repo) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Getting Commits");
      resolve([
        {
          repo,
          commit: ["commit1", "commit2", "commit3"],
        },
      ]);
    }, 2000);
  });
}

export { getUser, getRepo, getCommits };
