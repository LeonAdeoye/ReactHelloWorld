import {render, screen} from "@testing-library/react";
import FormComponent from "../components/FormComponent";

// Navigate here to see a list of HTML elements and the corresponding roles for the getByRole method: https://www.w3.org/TR/html-aria/#docconformance

describe("renders correctly", () =>
{
    test("Username", () =>
    {
        render(<FormComponent/>);
        const userNameElement = screen.getByRole("textbox", {
            name: "Username"
        });
        expect(userNameElement).toBeInTheDocument();
    })

    test("Comment", () =>
    {
        render(<FormComponent/>);
        const userName = screen.getByRole("textbox", {
            name: "Comment"
        });
        expect(userName).toBeInTheDocument();
    })

    test("Topic", () =>
    {
        render(<FormComponent/>);
        const userName = screen.getByRole("combobox", {
            name: "Topic"
        });
        expect(userName).toBeInTheDocument();
    })

    test("Submit", () =>
    {
        render(<FormComponent/>);
        const userName = screen.getByRole("button", {
            name: "Submit"
        });
        expect(userName).toBeInTheDocument();
    })
})
