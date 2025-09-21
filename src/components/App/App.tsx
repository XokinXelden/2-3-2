// import { useState } from "react";
import "@mantine/core/styles.css";
import { Button } from "@mantine/core";
import "./App.scss";
import logo from "../shared/pictures/logo.png";

function App() {
  return (
    <>
      <header>
        <img src={logo}></img>
        <Button variant="filled" color="#54B46A">
          Cart
          <img />
        </Button>
      </header>
      <main>
        <h2 className="head-catalog">Catalog</h2>
        <div>
          <p>more cards</p>
        </div>
      </main>
    </>
  );
}

export default App;
