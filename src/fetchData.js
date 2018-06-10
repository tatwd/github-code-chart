async function getUserPublicRepoNames(username) {
  return fetch(
    `https://api.github.com/search/repositories?q=user:${username}+fork:false`
  )
    .then(res => res.json())
    .then(data => {
      return data.items.map(({ name }) => name);
    })
    .catch(err => err);
}

async function getUserRepoLanguages(username, repoNames) {
  return (
    repoNames.length &&
    Promise.all(
      repoNames.map(name => {
        return fetch(
          `https://api.github.com/repos/${username}/${name}/languages`
        ).then(res => res.json());
      })
    )
  );
}

async function getCodeLanguagesVote(username) {
  var repoNames = await getUserPublicRepoNames(username);
  var languages = await getUserRepoLanguages(username, repoNames);
  return languages
    ? languages.reduce((vote, current) => {
        Object.keys(current).forEach(language => {
          vote[language] = vote[language]
            ? vote[language] + current[language]
            : current[language];
        });
        return vote;
      }, {})
    : null;
}

export default getCodeLanguagesVote;
