import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ShowGithubUsers = () => {
  const { username } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}`)
      .then((response) => response.json())
      .then((data) => setUser(data));
  }, [username]);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{user.login}</h2>
      <p>{user.bio}</p>
      <img src={user.avatar_url} alt={`${user.login}'s avatar`} width="100" />
    </div>
  );
};

export default ShowGithubUsers;
