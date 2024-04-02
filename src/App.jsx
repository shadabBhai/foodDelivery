import React, { lazy, Suspense } from "react";
import ReactDom from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import Header from "./components/Header";
import Body from "./components/Body";

import Contact from "./components/Contact";
import ErrorPage from "./components/ErrorPage";
import RestaurantMenuPage from "./components/RestaurantMenuPage";
import Cart from "./components/Cart";

import { Provider } from "react-redux";
import AppStore from "./utils/AppStore";

// to make other bundel
const About = lazy(() => import("./components/About"));

const AppLayout = () => {
  return (
    <Provider store={AppStore}>
      <div className="app">
        <Header />

        <Outlet />
      </div>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<h1>Loading....</h1>}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenuPage />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
    errorElement: <ErrorPage />,
  },
]);
const root = ReactDom.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
