import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import MovieList from "./components/MovieList";

const App = () => {
  return (
    <>
      <Header />
      <MovieList />
    </>
  );
};

// Tell React that div is my root
const root = ReactDOM.createRoot(document.getElementById("root"));
// Putting heading inside root//passing a react element inside the root
root.render(<App />);
