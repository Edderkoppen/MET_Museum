import {
  createBrowserRouter,
  Link,
  Outlet,
  RouterProvider,
} from "react-router-dom";

import Article from "./components/Article";
import DetailText from "./components/DetailText";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import TestComponent from "./components/Test";

import "./globals.scss";
import styles from "./App.module.scss";

function Root() {
  return (
    <div>
      <NavBar />
      <Link to="/">Root</Link>
      <Link to="/detail">Detail</Link>
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

function ObjectDetail() {
  return (
    <>
      <DetailText />
      <TestComponent />
    </>
  );
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
        path: "detail",
        element: <ObjectDetail />,
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
