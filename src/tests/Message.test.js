import {render, screen} from "@testing-library/react";
import Message from "../components/Message";

describe("Renders correctly", () =>
{
    test("Message", () =>
    {
        // queryBy class of queries return null if not found rather than throw an exception.
        // You can use them to assert if an element is not in the DOM.
        render(<Message/>);
        const thanksHeader = screen.queryByText("Thank you for subscribing!");
        expect(thanksHeader).not.toBeInTheDocument();

        const subscribingHeader = screen.queryByText("Welcome Visitor!");
        expect(subscribingHeader).toBeInTheDocument();
    })
})
