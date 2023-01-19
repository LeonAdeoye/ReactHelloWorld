import {render, screen} from "@testing-library/react";
import user from '@testing-library/user-event'
import HookCounterAdvanced from "../components/hookCounterAdvanced";

describe("HookCounterAdvanced", () =>
{
    test("renders correctly", () =>
    {
        render(<HookCounterAdvanced/>);
        const incrementButtonElement = screen.getByRole("button", {
            name: /increment/i
        });
        expect(incrementButtonElement).toBeInTheDocument();
        const decrementButtonElement = screen.getByRole("button", {
            name: /decrement/i
        });
        expect(decrementButtonElement).toBeInTheDocument();
        const resetButtonElement = screen.getByRole("button", {
            name: /reset/i
        });
        expect(resetButtonElement).toBeInTheDocument();
        const headerElement = screen.getByRole('heading', {
            name: /count: 0/i
        });
        expect(headerElement).toBeInTheDocument();
    })

    test("renders count:1 after clicking on the increment button", async () =>
    {
        render(<HookCounterAdvanced/>);
        user.setup();
        const incrementButtonElement = screen.getByRole("button", {
            name: /increment/i
        });
        await user.click(incrementButtonElement);
        const headerElement = screen.getByRole('heading', {
            name: /count: 1/i
        });
        expect(headerElement).toBeInTheDocument();
    })

    test("resets to count:0 after clicking on the reset button", async () =>
    {
        render(<HookCounterAdvanced/>);
        user.setup();
        const incrementButtonElement = screen.getByRole("button", {
            name: /increment/i
        });
        await user.click(incrementButtonElement);
        const headerElement = screen.getByRole('heading', {
            name: /count: 1/i
        });
        expect(headerElement).toBeInTheDocument();
        const resetButtonElement = screen.getByRole("button", {
            name: /reset/i
        });
        await user.click(resetButtonElement);
        const resetHeaderElement = screen.getByRole('heading', {
            name: /count: 0/i
        });
        expect(resetHeaderElement).toBeInTheDocument();
    })

    test("decrements to count:0 after clicking on the decrement button", async () =>
    {
        render(<HookCounterAdvanced/>);
        user.setup();
        const incrementButtonElement = screen.getByRole("button", {
            name: /increment/i
        });
        await user.click(incrementButtonElement);
        const headerElement = screen.getByRole('heading', {
            name: /count: 1/i
        });
        expect(headerElement).toBeInTheDocument();
        const decrementButtonElement = screen.getByRole("button", {
            name: /decrement/i
        });
        await user.click(decrementButtonElement);
        const resetHeaderElement = screen.getByRole('heading', {
            name: /count: 0/i
        });
        expect(resetHeaderElement).toBeInTheDocument();
    })
})
