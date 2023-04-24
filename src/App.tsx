import {
  createBrowserRouter,
  Link,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import useSWR from "swr";

import TestComponent from "./components/Test";

import "./globals.scss";
import styles from "./App.module.scss";

function Root() {
  return (
    <div>
      <p> Root </p>
      <Outlet />
    </div>
  );
}

function fetcher(...args: Parameters<typeof fetch>) {
  return fetch(...args).then((res) => res.json());
}

function HomePage() {
  return (
    <div>
      <TestComponent />
    </div>
  );
}

function Team() {
  return <p>Team</p>;
}

function SearchMet() {
  return <p>🚧 Recherche 🚧</p>;
}

export const routes = [
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "recherche",
        element: <SearchMet />,
      },
      {
        path: "team",
        element: <Team />,
      },
    ],
  },
];

const router = createBrowserRouter(routes);

export default function App() {
  return (
    <div className={styles.app}>
      <RouterProvider router={router} />
    </div>
  );
}
