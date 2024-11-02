import "./App.css";

import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Counter from "./components/Counter";
import GithubUserList from "./components/GithubUserList";
import ShowGithubUsers from "./components/ShowGitHubUsers";
import Welcome from "./components/Welcome";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<h1>React Router.</h1>} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/welcome" element={<Welcome />} />
          <Route path="users" element={<GithubUserList />}>
            <Route index element={<div>Add a user and select it</div>} />
            <Route path=":username" element={<ShowGithubUsers />} />
          </Route>
          <Route path="/users/:username" element={<ShowGithubUsers />} />
          <Route path="*" element={<h2>Page not found</h2>} />
        </Routes>

        <div className="links">
          <Link to="/counter">Go to Counter Page</Link>
          <Link to="/welcome">Go to Welcome Page</Link>
          <Link to="/:username">Go to Username Page</Link>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
