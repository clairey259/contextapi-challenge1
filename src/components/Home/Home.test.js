import { render, screen, fireEvent } from "@testing-library/react";
import Home from "./Home";
import userEvent from "@testing-library/user-event";

test("should render basic fields", () => {
    //arrange
    render(<Home />);

    //act
    const headding = screen.getByText("Welcome Home")

    //assert
    expect(headding).toBeInTheDocument();
})