import { render, screen } from "@testing-library/react";
import React from "react";
import App from "./App";
import ReactDOM from "react-dom/client";
import "./index.css";

import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";

test("should render home, Nav and theme button on first load", () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );

  const nav = screen.getByTestId("navBar");
  const home = screen.getByTestId("home");
  const themeButton = screen.getByTestId("themeButton");

  expect(nav).toBeInTheDocument;
  expect(home).toBeInTheDocument;
  expect(themeButton).toBeInTheDocument;
});

test("", () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
  

  });