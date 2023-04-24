import {
  createBrowserRouter,
  Link,
  Outlet,
  RouterProvider,
} from "react-router-dom";

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

function HomePage() {
  return (
    <div>
      <TestComponent id={45734} />
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
