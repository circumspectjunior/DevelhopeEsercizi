import { useState } from "react";
import useSWR from "swr";

export const useGithubUser = () => {
  const [username, setUsername] = useState([]);

  if (username !== null) {
    const {
      data: user = {},
      isLoading,
      error,
      mutate: refetch,
    } = useSWR(`https://api.github.com/users/${username}`);

    console.log("data ", data);

    return {
      user,
      isLoading,
      error,
      setUsername,
      refetch,
      username,
    };
  } else {
    console.log("Insert username");
  }
};
