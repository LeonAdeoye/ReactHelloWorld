import {render, screen, act} from "@testing-library/react";
import user from '@testing-library/user-event'
import DataFetchingOnDemandFunctionalComponent from "../components/DataFetchingOnDemandFunctionalComponent";

describe("DataFetchingOnDemandFunctionalComponent", () =>
{
    test("renders correctly", async () =>
    {
        await act(() => render(<DataFetchingOnDemandFunctionalComponent/>));

        const getPostButtonElement = await screen.findByRole("button", {
            name: /^Get Post$/i
        });

        const postIdTextboxElement = await screen.findByRole("textbox", {
            name: /^postId$/i
        });
        const headingElementElement = await screen.findByRole("heading");

        expect(getPostButtonElement).toBeInTheDocument();
        expect(postIdTextboxElement).toBeInTheDocument();
        expect(headingElementElement).toBeInTheDocument();
    })

    test("makes post request", async () =>
    {
        user.setup();
        await act(() => render(<DataFetchingOnDemandFunctionalComponent/>));

        const getPostButtonElement = screen.getByRole("button", {
            name: /^Get Post$/i
        });

        const postIdTextboxElement = screen.getByRole("textbox", {
            name: /^postId$/i
        });

        await user.clear(postIdTextboxElement)
        await user.type(postIdTextboxElement, "1")
        await user.click(getPostButtonElement)

        const headingElementElement = screen.getByText("Horatio is 10 years old.");
        expect(headingElementElement).toBeInTheDocument();
    })
})
