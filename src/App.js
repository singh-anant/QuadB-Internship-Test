import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import MovieList from "./components/MovieList";
import { Outlet, RouterProvider } from "react-router";
import About from "./components/About";
import Contact from "./components/Contact";
import MovieDecription from "./components/MovieDecription";
import { createBrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <MovieList /> },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "movie/:id",
        element: <MovieDecription />,
      },
    ],
  },
]);

// Tell React that div is my root
const root = ReactDOM.createRoot(document.getElementById("root"));
// Putting heading inside root//passing a react element inside the root
root.render(<RouterProvider router={appRouter} />);
