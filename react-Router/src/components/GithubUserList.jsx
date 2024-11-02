import { Link, Outlet } from "react-router-dom";
import useSWR from "swr";

const GithubUserList = () => {
  const fetcher = (url) => fetch(url).then((res) => res.json());
  const {
    data: list = [],
    isLoading,
    error,
    mutate: updateList,
  } = useSWR("https://api.github.com/users", fetcher);

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
