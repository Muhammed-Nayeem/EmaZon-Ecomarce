//All the import materials: Imported;
import React from "react";
import "./App.css";
import Header from './components/Header/Header';
import Shop from "./components/Shop/Shop";

//Main Component: All the components included in it;
function App() {
  return (
    <div>
      <Header></Header>
      <Shop></Shop>
    </div>
  );
}

export default App;
