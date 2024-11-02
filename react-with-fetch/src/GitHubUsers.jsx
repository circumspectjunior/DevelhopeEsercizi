import { useState } from "react";
import GitHub from "./GitHub";

const GitHubUsers = () => {
  const [username, setUsername] = useState("");
  const [users, setUsers] = useState([]);

  const handleChange = (event) => {
    setUsername(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setUsers([...users, username]);
    //setUsername("")
  };

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Username"
          onChange={handleChange}
        />
        <button type="submit"></button>
      </form>

      <ul>
        {users.map((list, i) => (
          <li key={i}>
            <GitHub username={list} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GitHubUsers;
