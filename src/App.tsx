import {
  createBrowserRouter,
  Link,
  Outlet,
  RouterProvider,
} from "react-router-dom";

import Article from "./components/Article";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import ObjectDetailPage from "./components/ObjectDetailPage";
import TestComponent from "./components/Test";

import "./globals.scss";
import styles from "./App.module.scss";
import SearchBar from "./components/SearchBar";
import { func } from "prop-types";
import Error from "./components/Error";

function Root() {
  return (
    <div>
      <NavBar />
      <SearchBar />
      <Link to="/">Root</Link>
      <Outlet />
      <Footer />
    </div>
  );
}

function HomePage() {
  return (
    <>
      <Article />
    </>
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
      {
        path: "object/search/:objectId",
        element: <ObjectDetailPage />,
      },
      {
        path: "*",
        element: <Error />
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
