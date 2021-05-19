import React from "react";
import { getBitcoinArticles } from "./api";

function App() {
  getBitcoinArticles();

  return <div>console logged the JSON object</div>;
}

export default App;