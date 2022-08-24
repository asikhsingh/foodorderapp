import Header from "./components/Layout/Header.js";

import React, { Fragment } from "react";

import Meals from "./components/Meals/Meals.js";

function App() {
  return (
    <Fragment>
      <Header />
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
