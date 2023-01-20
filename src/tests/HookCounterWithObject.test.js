import {render, screen} from "@testing-library/react";
import HookCounterWithObject from "../components/HookCounterWithObject";
import user from "@testing-library/user-event";

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

    test("updates header from text boxes", async () =>
    {
        user.setup();
        render(<HookCounterWithObject/>);
        const firstNameTextBox = screen.getByRole("textbox", {
            name: "firstName"
        });
        const lastNameTextBox = screen.getByRole("textbox", {
            name: "lastName"
        });

        await user.type(firstNameTextBox, "Horatio");
        await user.type(lastNameTextBox, "Adey");

        const firstHeading = screen.getByText("First Name: Horatio, and Last Name: Adey");
        expect(firstHeading).toBeInTheDocument();
        const secondHeading = screen.getByText('Object\'s JSON: {"firstName":"Horatio","lastName":"Adey"}');
        expect(secondHeading).toBeInTheDocument();
    })
})
