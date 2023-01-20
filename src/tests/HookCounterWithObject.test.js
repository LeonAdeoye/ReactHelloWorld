import {render, screen} from "@testing-library/react";
import HookCounterWithObject from "../components/HookCounterWithObject";

describe("HookCounterWithObject", () =>
{
    test("renders correctly", () =>
    {
        render(<HookCounterWithObject/>);
        const firstNameTextBox = screen.getByRole("textbox", {
            name: "firstName"
        });
        expect(firstNameTextBox).toBeInTheDocument();

        const lastNameTextBox = screen.getByRole("textbox", {
            name: "lastName"
        });
        expect(lastNameTextBox).toBeInTheDocument();

        const firstHeading = screen.getByText("First Name: , and Last Name:");
        expect(firstHeading).toBeInTheDocument();

        const secondHeading = screen.getByText('Object\'s JSON: {"firstName":"","lastName":""}');
        expect(secondHeading).toBeInTheDocument();
    })
})
