import './index.css';

import React, { useEffect, useState, lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/pages/Header.jsx";
import Body from "./components/Body.jsx";
import { createHashRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/pages/About.jsx";
import Contact from "./components/pages/Contact.jsx";
import Error from "./components/Error.jsx";
import RestaurantMenu from "./components/ResturantMenu.jsx";
import Shimmer from "./components/Shimmer.jsx";
import userContext from './utils/hooks/userContext.jsx';
import Cart from './components/pages/Cart.jsx';
import appStore from './utils/store/appStore.jsx';
import { Provider } from 'react-redux';

const Grocery = lazy(() => import("./components/pages/Grocery.jsx"));


const Applayout = () => {
  const [userName, setUserName] = useState();

  useEffect(() => {
    const data = { name: "karthik" };
    setUserName(data.name);
  }, []);

  return (
    <Provider store={appStore}>
      <userContext.Provider value={{ loggedInUser: userName }}>
        <div className="app">
          <Header />
          <Outlet />
        </div>
      </userContext.Provider>
    </Provider>
  );
};

const appRouter = createHashRouter([
  {
    path: "/",
    element: <Applayout />,
    children: [
      { path: "/", element: <Body /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
      { path: "/cart", element: <Cart/>},
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Grocery />
          </Suspense>
        ),
      },
      { path: "/resturants/:resid", element: <RestaurantMenu /> },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
export default Applayout;