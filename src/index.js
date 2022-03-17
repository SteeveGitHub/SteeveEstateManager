import { render } from "react-dom";
import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import App from "./App";
import DisplayFlat from "./DisplayFlat";
import Moreabout from "./routes/MoreAbout";

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/list" element={<DisplayFlat />}>
        <Route path=":flatId" element={<Moreabout />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  rootElement
);