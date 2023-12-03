import React, { useState } from "react";

function Home() {
  const [leetName, setleetName] = useState();
  const [gitName, setgitName] = useState();
  async function handleSubmit(e) {
    e.preventDefault();
    const leetCodes = await fetch(
      `https:leetcode-stats-api.herokuapp.com/${leetName}`
    );
    const leetData = await leetCodes.json();
    console.log(leetData.totalSolved);
    const gitRepos = await fetch(`https://api.github.com/users/${gitName}`);
    const gitData = await gitRepos.json();
    console.log(gitData.public_repos);
  }

  return (
    <div>
      <div>
        <h1>this is the Home Page</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter your Leetcode Username"
            onChange={(e) => {
              setleetName(e.target.value);
            }}
          ></input>
          <input
            type="text"
            placeholder="Enter your Github Username"
            onChange={(e) => {
              setgitName(e.target.value);
            }}
          ></input>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Home;
