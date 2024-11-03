import { useState } from "react";

export const useGithubUser = () => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState(null);
  const [username, setUsername] = useState([]);

  async function handleFetch() {
    try {
      setLoading(true);

      const response = await fetch(`https://api.github.com/users/${username}`);
      const data = await response.json();

      console.log("data ", data);
      setUser(data);
    } catch (error) {
      setErrors(error);
    }
  }

  return {
    user,
    loading,
    errors,
    setUsername,
    handleFetch,
    username,
  };
};
