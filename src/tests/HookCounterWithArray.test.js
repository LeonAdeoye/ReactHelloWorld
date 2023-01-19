import {render, screen} from "@testing-library/react";
import user from '@testing-library/user-event'
import HookCounterWithArray from "../components/HookCounterWithArray";

describe("HookCounterWithArray", () =>
{
    test("renders correctly", () =>
    {
        render(<HookCounterWithArray/>);
        const addItemButtonElement = screen.getByRole("button", {
            name: /Add Item/i
        });
        expect(addItemButtonElement).toBeInTheDocument();

        const thanksHeader = screen.queryByRole("listItem");
        expect(thanksHeader).not.toBeInTheDocument();
    })

    test("adds two list items after clicking on the Add Item button twice", async () =>
    {
        render(<HookCounterWithArray/>);
        user.setup();
        const addItemButtonElement = screen.getByRole("button", {
            name: /Add Item/i
        });
        expect(addItemButtonElement).toBeInTheDocument();
        await user.click(addItemButtonElement);
        await user.click(addItemButtonElement);
        const lineItemsToCount = screen.getAllByRole("listitem");
        expect(lineItemsToCount).toHaveLength(2)
    })
})
