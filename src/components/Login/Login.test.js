import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Login from "./Login";

test("should render basic fields", () => {
    //arrange
    render(<Login />);

    //act
    const usernameInput = screen.getByRole("textbox", { name: /name/i });
    const passwordInput = screen.getByRole("textbox", { name: /email/i });

    //assert
    expect(usernameInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
})