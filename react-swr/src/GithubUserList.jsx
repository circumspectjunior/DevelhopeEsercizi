import { Link, Outlet } from "react-router-dom";
import { useGithubUser } from "./useGithubUser";

const GithubUserList = () => {
  const fetcher = (url) => fetch(url).then((res) => res.json());
  const {
    user,
      isLoading,
      error,
      setUsername,
      refetch,
      username,
  } = useGithubUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading users</div>;

  return (
    <div>
      <ul>
        {list.slice(0, 10).map((user) => {
          return (
            <li key={user.id}>
              <Link to={`/users/${user.login}`}>{user.login}</Link>
            </li>
          );
        })}
      </ul>
      <Outlet />
    </div>
  );
};

export default GithubUserList;
