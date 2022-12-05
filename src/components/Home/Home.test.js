import { render, screen } from "@testing-library/react";
import Home from "./Home";
import { UserContext } from "../../context/UserProvider/UserProvider";
import { ThemeContext } from "../../context/ThemeProvider/ThemeProvider"

test("should render basic fields", () => {
  //arrange

  render(
    <UserContext.Provider value={{ name: "test" }}>
      <Home />
    </UserContext.Provider>
  );
  //act
  const heading = screen.getByText("Welcome Home");

  //assert
  expect(heading).toBeInTheDocument();
});

test("should render user's name", () => {
  render(
    <UserContext.Provider value={{ name: "test" }}>
      <Home />
    </UserContext.Provider>
  );
  const userName = screen.getByText("test");
  expect(userName).toBeInTheDocument();
});

test("should display light theme", () => {
  render(
    <ThemeContext.Provider value={{isDarkTheme: false}}>
      <Home />
    </ThemeContext.Provider>
  );
  const containerElement = screen.getByTestId("themeContainer");

  expect(containerElement).toHaveClass("homeLight");
});

test("should display dark theme", () => {
  render(
    <ThemeContext.Provider value={{isDarkTheme: true}}>
      <Home />
    </ThemeContext.Provider>
  );
  const containerElement = screen.getByTestId("themeContainer");

  expect(containerElement).toHaveClass("homeDark");
});
