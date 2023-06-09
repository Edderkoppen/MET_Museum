import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

import Error from "./components/Error";
import Footer from "./components/Footer";
import HomePage from "./components/HomePage";
import NavBar from "./components/NavBar";
import ObjectDetailPage from "./components/ObjectDetailPage";
import SearchPage from "./components/SearchPage";

import "./styles/advanced_search.scss";
import "./globals.scss";
import styles from "./App.module.scss";

function Root() {
  return (
    <div className="conteneur-page main-container">
      <NavBar />
      <Outlet />
      <Footer />
      <a
        href="#haut-de-page"
        className="bouton-haut-de-page"
        id="bouton-haut-de-page"
      >
        <img
          className="icon-size"
          src="https://cdn.onlinewebfonts.com/svg/img_109187.png"
          alt="arrow up"
        />
      </a>
    </div>
  );
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
        path: "search/:terme",
        element: <SearchPage />,
      },
      {
        path: "object/search/:objectId",
        element: <ObjectDetailPage />,
      },
      {
        path: "*",
        element: <Error />,
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
