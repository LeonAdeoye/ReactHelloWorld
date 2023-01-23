import {render, screen} from "@testing-library/react";
import ClickCounter from "../components/ClickCounter";
import user from "@testing-library/user-event";

describe("ClickCounter", () =>
{
    test("renders correctly", () =>
    {
        render(<ClickCounter name="Horatio"/>);
        const buttonElement = screen.getByRole("button", {
            name: /^Horatio clicked 0 times$/i
        });
        expect(buttonElement).toBeInTheDocument();
    })

    test("increments by five when button is clicked", async () =>
    {
        user.setup();
        render(<ClickCounter name="Horatio"/>);
        const buttonElement = screen.getByRole("button", {
            name: /^Horatio clicked 0 times$/i
        });
        await user.click(buttonElement);
        const buttonElement2 = screen.getByRole("button", {
            name: /^Horatio clicked 5 times$/i
        });
        expect(buttonElement2).toBeInTheDocument();
    })
})
