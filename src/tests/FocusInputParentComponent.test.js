import {render, screen} from "@testing-library/react";
import user from "@testing-library/user-event";
import FocusInputParentComponent from "../components/FocusInputParentComponent";

describe("FocusInputParentComponent", () =>
{
    test("renders correctly", () =>
    {
        render(<FocusInputParentComponent/>);
        const textElement = screen.getByRole("textbox");
        expect(textElement).toBeInTheDocument();

        const buttonElement = screen.getByRole("button");
        expect(buttonElement).toBeInTheDocument();
    })

    test("gets focus on button click", async () =>
    {
        render(<FocusInputParentComponent/>);
        const textboxElement = screen.getByRole("textbox");
        user.setup();
        const buttonElement = screen.getByRole("button");
        await user.click(buttonElement);
        expect(textboxElement).toHaveFocus()
    })
})
