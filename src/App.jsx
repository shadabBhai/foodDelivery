import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDom from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import Header from "./components/Header";
import Body from "./components/Body";
// import About from "./components/About";
import Contact from "./components/Contact";
import ErrorPage from "./components/ErrorPage";
import RestaurantMenuPage from "./components/RestaurantMenuPage";
import Cart from "./components/Cart";
import UserContext from "./utils/userContext";
import { lazy } from "react";

// to make other bundel
const About = lazy(() => import("./components/About"));

const AppLayout = () => {
  const [username, setUserName] = useState();
  const [cartItem, setCartItem] = useState([]);
  useEffect(() => {
    //make api  call  and send  username  and password
    const data = {
      name: "shadab khan",
    };
    setUserName(data?.name);
  }, []);
  // console.log(cartItem);
  return (
    <UserContext.Provider
      value={{
        loggedInUser: username,
        setUserName,
        cart: cartItem,
        setCartItem,
      }}
    >
      <div className="app">
        <Header />

        <Outlet />
      </div>
    </UserContext.Provider>
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
