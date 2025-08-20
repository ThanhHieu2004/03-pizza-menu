import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";

function App() {
  return <div>Hello world!</div>;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
