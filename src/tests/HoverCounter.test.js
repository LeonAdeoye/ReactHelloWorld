import {fireEvent, render, screen} from "@testing-library/react";
import HoverCounter from "../components/HoverCounter";
import user from "@testing-library/user-event";

describe("HoverCounter", () =>
{
    test("renders correctly", () =>
    {
        render(<HoverCounter name="Harper"/>);
        const buttonElement = screen.getByRole("button", {
            name: /^Harper hovered 0 times$/i
        });
    })

    test("increments when mouse hover", async () =>
    {
        user.setup();
        render(<HoverCounter name="Harper"/>);
        const buttonElement = screen.getByRole("button", {
            name: /^Harper hovered 0 times$/i
        });
        await user.hover(buttonElement);
        const buttonElement2 = screen.getByRole("button", {
            name: /^Harper hovered 10 times$/i
        });
        expect(buttonElement2).toBeInTheDocument();
    })
})
