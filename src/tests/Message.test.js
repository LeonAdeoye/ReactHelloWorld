import {render, screen} from "@testing-library/react";
import Message from "../components/Message";
import user from "@testing-library/user-event";

describe("Message", () =>
{
    test("renders correctly", () =>
    {
        // queryBy class of queries return null if not found rather than throw an exception.
        // You can use them to assert if an element is not in the DOM.
        render(<Message/>);
        const thanksHeader = screen.queryByText("Thank you for subscribing!");
        expect(thanksHeader).not.toBeInTheDocument();

        const subscribingHeader = screen.queryByText("Welcome Visitor!");
        expect(subscribingHeader).toBeInTheDocument();
    })

    test("reacts to button click with a thank you", async() =>
    {
        user.setup();
        render(<Message/>);

        const buttonElement = screen.getByRole("button", {
            name: /subscribe/i
        })
        await user.click(buttonElement);

        const thanksHeader = screen.queryByText("Thank you for subscribing!");
        expect(thanksHeader).toBeInTheDocument();

        const subscribingHeader = screen.queryByText("Welcome Visitor!");
        expect(subscribingHeader).not.toBeInTheDocument();
    })
})
