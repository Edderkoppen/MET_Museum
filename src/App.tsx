import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

import AdvancedSearchPage from "./components/AdvancedSearchPage";
import Footer from "./components/Footer";
import HomePage from "./components/HomePage";
import NavBar from "./components/NavBar";
import ObjectDetailPage from "./components/ObjectDetailPage";
import QuickSearchPage from "./components/QuickSearchPage";

import "./globals.scss";
import styles from "./App.module.scss";
import SearchBar from "./components/SearchBar";
import { func } from "prop-types";
import Error from "./components/Error";

function Root() {
  return (
    <div>
      <NavBar />
      <Outlet />
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
        element: <QuickSearchPage />,
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
