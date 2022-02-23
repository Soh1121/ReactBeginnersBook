import React, { lazy, Suspense } from "react";
import "./styles.css";

const delay = (time) => (result) =>
  new Promise((resolve) => {
    setTimeout(() => resolve(result), time);
  });

const Other = lazy(() => import("./Other").then(delay(500)));

const App = () => (
  <div className="App">
    <h1>Hello Suspense</h1>
    <Suspense fallback={<div>Loading...</div>}>
      <Other />
    </Suspense>
  </div>
);

export default App;
