import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import Nav from "./Nav";
import { BrowserRouter } from "react-router-dom";
test("should display logo, message and menu on render", () => {
  render(
    <BrowserRouter>
      <Nav />
    </BrowserRouter>
  );
  const logo = screen.getByRole("heading", { level: 1 });
  const greeting = screen.getByRole("heading", { level: 3 });
  const menu = screen.getByRole("heading", { level: 4 });

  expect(logo).toBeInTheDocument();
  expect(logo.textContent).toContain("MazinApp");
  expect(greeting).toBeInTheDocument();
  expect(greeting.textContent).toContain("Hello");
  expect(menu).toBeInTheDocument();
  expect(menu.textContent).toContain("MENU");
});

test("links show when menu is clicked", () => {
  render(
    <BrowserRouter>
      <Nav />
    </BrowserRouter>
  );
  const menu = screen.getByRole("heading", { level: 4 });
  expect(menu).toBeInTheDocument()

  fireEvent.mouseEnter(menu);
  const navMenu = screen.getByTestId("navMenuStyles");

  expect(menu).not.toBeInTheDocument()
  expect(navMenu).toBeInTheDocument()
});
