import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

import AdvancedSearchPage from "./components/AdvancedSearchPage";
import Error from "./components/Error";
import Footer from "./components/Footer";
import HomePage from "./components/HomePage";
import NavBar from "./components/NavBar";
import ObjectDetailPage from "./components/ObjectDetailPage";
import SearchPage from "./components/SearchPage";

import "./styles/AdvancedSearchPage.scss";
import "./globals.scss";
import styles from "./App.module.scss";

function Root() {
  return (
    <div className="conteneur-page">
      <NavBar />
      <Outlet />
      <a
        href="#haut-de-page"
        className="bouton-haut-de-page"
        id="bouton-haut-de-page"
      >
        <img
          className="icon-size"
          src="https://img2.freepng.fr/20180419/pwq/kisspng-computer-icons-up-arrow-clip-art-straight-arrow-5ad925dadf5102.8619577815241804429147.jpg"
          alt=""
        />
      </a>
      <Footer />
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
        // element: <ObjectCard id={670903} />,
        element: <HomePage />,
      },
      {
        path: "search",
        element: <AdvancedSearchPage />,
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
