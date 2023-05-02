import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

import Footer from "./components/Footer";
import HomePage from "./components/HomePage";
import NavBar from "./components/NavBar";
import ObjectCard from "./components/ObjectCard";
import ObjectDetailPage from "./components/ObjectDetailPage";

// import TestComponent from "./components/Test";
import "./globals.scss";
import styles from "./App.module.scss";

function Root() {
  return (
    <div>
      <NavBar />
      <Outlet />
      <Footer />
    </div>
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
        // element: <ObjectCard id={25521} />,
        element: <HomePage />,
      },
      {
        path: "recherche",
        element: <SearchMet />,
      },
      {
        path: "object/search/:objectId",
        element: <ObjectDetailPage />,
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
