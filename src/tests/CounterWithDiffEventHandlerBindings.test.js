import {render, screen} from "@testing-library/react";
import user from '@testing-library/user-event'
import CounterWithDiffEventHandlerBindings from "../components/CounterWithDiffEventHandlerBindings";

describe("CounterWithDiffEventHandlerBindings", () =>
{
    test("renders correctly", () =>
    {
        render(<CounterWithDiffEventHandlerBindings/>);
        const incrementButtonElement = screen.getByRole("button", {
            name: /^Increment$/i
        });
        expect(incrementButtonElement).toBeInTheDocument();

        const increment5ButtonElement = screen.getByRole("button", {
            name: /^IncrementByFive$/i
        });
        expect(increment5ButtonElement).toBeInTheDocument();

        const increment100ButtonElement = screen.getByRole("button", {
            name: /^IncrementBy100$/i
        });
        expect(increment100ButtonElement).toBeInTheDocument();

        const increment1000ButtonElement = screen.getByRole("button", {
            name: /^Incrementby1000$/i
        });
        expect(increment1000ButtonElement).toBeInTheDocument();
    })

    test("renders count = 1 after clicking on the Increment button", async () =>
    {
        render(<CounterWithDiffEventHandlerBindings/>);
        user.setup();
        const buttonElement = screen.getByRole("button", {
            name: /^Increment$/i
        });
        await user.click(buttonElement);
        const countHeader = screen.getByRole("heading", {
            name: /Count = 1/i
        });
        expect(countHeader).toBeInTheDocument();
    })

    test("renders count = 5 after clicking on the IncrementByFive button", async () =>
    {
        render(<CounterWithDiffEventHandlerBindings/>);
        user.setup();
        const buttonElement = screen.getByRole("button", {
            name: /^IncrementByFive$/i
        });
        await user.click(buttonElement);
        const countHeader = screen.getByRole("heading", {
            name: /Count = 5/i
        });
        expect(countHeader).toBeInTheDocument();
    })

    test("renders count = 100 after clicking on the IncrementBy100 button", async () =>
    {
        render(<CounterWithDiffEventHandlerBindings/>);
        user.setup();
        const buttonElement = screen.getByRole("button", {
            name: /^IncrementBy100$/i
        });
        await user.click(buttonElement);
        const countHeader = screen.getByRole("heading", {
            name: /^Count = 100$/i
        });
        expect(countHeader).toBeInTheDocument();
    })

    test("renders count = 1000 after clicking on the IncrementBy1000 button", async () =>
    {
        render(<CounterWithDiffEventHandlerBindings/>);
        user.setup();
        const buttonElement = screen.getByRole("button", {
            name: /^IncrementBy1000$/i
        });
        await user.click(buttonElement);
        const countHeader = screen.getByRole("heading", {
            name: /^Count = 1000$/i
        });
        expect(countHeader).toBeInTheDocument();
    })
})
