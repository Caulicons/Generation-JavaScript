console.log("index script");

const user_avatar = document.getElementById("user_avatar");
const followers = document.getElementById("followers");
const repos = document.getElementById("repos");

async function fetchData() {
  const res = await fetch("https://api.github.com/users/caulicons");
  const data = await res.json();

  user_avatar.src = data.avatar_url;
  followers.innerText = `${data.followers} Followers`;
  repos.innerText = `${data.public_repos} Repos`;
  console.log(data);
}

fetchData()

