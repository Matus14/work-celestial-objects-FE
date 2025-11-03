import React from "react";
import Header from "./components/Header.jsx";
import Router from "./routes/Router.jsx";

const App = () => {
  return (
    <div>
      <Header />
      <main className="container mt-4">
        <Router />
      </main>
    </div>
  );
};

export default App;