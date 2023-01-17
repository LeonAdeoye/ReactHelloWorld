import {render, screen} from "@testing-library/react";
import FormComponent from "../components/FormComponent";


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
})
