import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import BasicForm from "./BasicForm";

test("should render basic fields", () => {
  //arrange
  render(<BasicForm />);

  //act"
  const usernameInput = screen.getByRole("textbox", { name: "Username" });
  const passwordInput = screen.getByRole("textbox", { name: "Password" });
  const button = screen.getByRole("button", { name: "" });

  //assert
  expect(usernameInput).toBeInTheDocument();
  expect(passwordInput).toBeInTheDocument();
  expect(button).toBeInTheDocument();
});

test("should take three props", () => {
  render(
    <BasicForm
      inputOnePlaceholder="Enter Username"
      inputTwoPlaceholder="Enter Password"
      buttonText="Login"
    />
  );

  const placeHolderTextUsername = screen.getByPlaceholderText("Enter Username");
  const placeHolderTextPassword = screen.getByPlaceholderText("Enter Password");
  const button = screen.getByRole("button", { name: "Login" });

  expect(placeHolderTextUsername).toBeInTheDocument();
  expect(placeHolderTextPassword).toBeInTheDocument();
  expect(button).toBeInTheDocument();
});
