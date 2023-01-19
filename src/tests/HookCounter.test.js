import {render, screen} from "@testing-library/react";
import HookCounter from "../components/HookCounter";
import user from '@testing-library/user-event'

describe("Renders correctly", () =>
{
    test("HookCounter", () =>
    {
        render(<HookCounter/>);
        const buttonElement = screen.getByRole("button", {
            name: /Count:0/i
        });
        expect(buttonElement).toBeInTheDocument();
    })
})

describe("Renders count:1 after clicking the button",  () =>
{
    test("HookCounter", async () =>
    {
        render(<HookCounter/>);
        user.setup();
        const buttonElement = screen.getByRole("button", {
            name: /Count:0/i
        });
        await user.click(buttonElement);
        const incrementedButtonElement = screen.getByRole("button", {
            name: /Count:1/i
        });
        expect(incrementedButtonElement).toBeInTheDocument();
    })
})
