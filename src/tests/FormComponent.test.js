import {render, screen} from "@testing-library/react";
import FormComponent from "../components/FormComponent";

// Navigate here to see a list of HTML elements and the corresponding roles for the getByRole method: https://www.w3.org/TR/html-aria/#docconformance

describe("renders correctly", () =>
{
    test("Username textbox", () =>
    {
        render(<FormComponent/>);
        const userNameElement = screen.getByRole("textbox", {
            name: "Username"
        });
        expect(userNameElement).toBeInTheDocument();
    })

    test("Comment textbox", () =>
    {
        // Alternative to using getByRole
        render(<FormComponent/>);
        // Searches for the element (the input textbox) that is associated wih the label with text Comment
        const userName = screen.getByLabelText("Comment");
        expect(userName).toBeInTheDocument();
    })

    test("Topic Combobox", () =>
    {
        render(<FormComponent/>);
        const userName = screen.getByRole("combobox", {
            name: "Topic"
        });
        expect(userName).toBeInTheDocument();
    })

    test("React Option", () =>
    {
        render(<FormComponent/>);
        const userName = screen.getByRole("option", {
            name: "React"
        });
        expect(userName).toBeInTheDocument();
    })

    test("Angular Option", () =>
    {
        render(<FormComponent/>);
        const userName = screen.getByRole("option", {
            name: "Angular"
        });
        expect(userName).toBeInTheDocument();
    })

    test("Blazor Option", () =>
    {
        render(<FormComponent/>);
        const userName = screen.getByRole("option", {
            name: "Blazor"
        });
        expect(userName).toBeInTheDocument();
    })

    test("Span warning", () =>
    {
        render(<FormComponent/>);
        const spanElement = screen.getByText("All fields are mandatory.");
        expect(spanElement).toBeInTheDocument();
    })

    test("Submit Button", () =>
    {
        render(<FormComponent/>);
        const userName = screen.getByRole("button", {
            name: "Submit"
        });
        expect(userName).toBeInTheDocument();
    })
})
