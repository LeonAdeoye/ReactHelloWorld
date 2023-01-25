import {render, screen} from "@testing-library/react";
import user from '@testing-library/user-event'
import DataFetchingOnDemandFunctionalComponent from "../components/DataFetchingOnDemandFunctionalComponent";
import { act } from 'react-dom/test-utils';

describe("DataFetchingOnDemandFunctionalComponent", () =>
{
    test("renders correctly", () =>
    {
        render(<DataFetchingOnDemandFunctionalComponent/>);

        const getPostButtonElement = screen.getByRole("button", {
            name: /^Get Post$/i
        });
        expect(getPostButtonElement).toBeInTheDocument();

        const postIdTextboxElement = screen.getByRole("textbox", {
            name: /^postId$/i
        });
        expect(postIdTextboxElement).toBeInTheDocument();

        const headingElementElement = screen.getByRole("heading");
        expect(headingElementElement).toBeInTheDocument();
    })

    test("makes post request", async () =>
    {
        user.setup();
        render(<DataFetchingOnDemandFunctionalComponent/>);
        const getPostButtonElement = screen.getByRole("button", {
            name: /^Get Post$/i
        });

        const postIdTextboxElement = screen.getByRole("textbox", {
            name: /^postId$/i
        });

        await user.type(postIdTextboxElement, "1");
        await user.click(getPostButtonElement)

        const headingElementElement = screen.getByText("Horatio is 10 years old.");
        expect(headingElementElement).toBeInTheDocument();
    })
})
