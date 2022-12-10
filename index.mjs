console.log("Before Func Call");

getUser(1, displayUser);

console.log("After Func Call");

function displayCommits(commits) {
  console.log("Commits", commits);
}

function displayRepo(repo) {
  console.log("Data", repo[0].repo);
  getCommit(repo[0].repo[0], displayCommits);
}

function displayUser(user) {
  console.log("User", user);
  getRepo(user.user, displayRepo);
}

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
