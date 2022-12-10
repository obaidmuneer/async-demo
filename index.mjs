console.log("Before Func Call");

getUser(1, (user) => {
  console.log("User", user);
  getRepo(user.user, (repo) => {
    console.log("Data", repo[0].repo);
    getCommit(repo[0].repo[0], (commits) => {
      console.log("Commits", commits);
    });
  });
});

console.log("After Func Call");

function getUser(id, callback) {
  setTimeout(() => {
    console.log("Getting User");
    callback({
      id,
      user: "obaid",
    });
  }, 2000);
}

function getRepo(user, callback) {
  setTimeout(() => {
    console.log("Getting Repos");
    callback([
      {
        user,
        repo: ["repo1", "repo2", "repo3"],
      },
    ]);
  }, 2000);
}

function getCommit(repo, callback) {
  setTimeout(() => {
    console.log("Getting Commits");
    callback([
      {
        repo,
        commit: ["commit1", "commit2", "commit3"],
      },
    ]);
  }, 2000);
}
