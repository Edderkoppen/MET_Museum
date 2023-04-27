import {
  createBrowserRouter,
  Link,
  Outlet,
  RouterProvider,
} from "react-router-dom";

import TestComponent from "./components/Test";

import "./globals.scss";
import styles from "./App.module.scss";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Article from "./components/Article";

function Root() {
  return (
    <div>
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
}

function HomePage() {
  return (
    <>
      <Article id={45734}/>
      <Article id={457134}/>
      <Article id={45713}/>
      <Article id={45714}/>
      <Article id={4134}/>
    </>
  )
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
