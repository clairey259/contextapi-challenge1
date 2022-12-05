
import Login from "./Login";
import { fireEvent, getByTestId, render, screen } from "@testing-library/react";
import { ThemeContext } from "../../context/ThemeProvider/ThemeProvider"

test("should render basic fields", () => {
  //arrange

  render(
      <Login />
  );
  //act
  const usernameInput = screen.getByRole("textbox", { name: "Username" });
  const passwordInput = screen.getByRole("textbox", { name: "Password" });
  const button = screen.getByRole("button", { name: "Login" });

  //assert
  expect(usernameInput).toBeInTheDocument();
  expect(passwordInput).toBeInTheDocument();
  expect(button).toBeInTheDocument();
});

test("should display light theme", () => {
  render(
    <ThemeContext.Provider value={{isDarkTheme: false}}>
      <Login />
    </ThemeContext.Provider>
  );
  const containerElement = screen.getByTestId("themeContainer");

  expect(containerElement).toHaveClass("light");
});

test("should display dark theme", () => {
  render(
    <ThemeContext.Provider value={{isDarkTheme: true}}>
      <Login/>
    </ThemeContext.Provider>
  );
  const containerElement = screen.getByTestId("themeContainer");

  expect(containerElement).toHaveClass("dark");
});

