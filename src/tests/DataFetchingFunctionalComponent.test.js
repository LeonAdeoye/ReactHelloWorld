import {render, screen, act} from "@testing-library/react";
import DataFetchingFunctionalComponent from "../components/DataFetchingFunctionalComponent";

describe("DataFetchingFunctionalComponent", () =>
{
    test("renders correctly", async () =>
    {
        act(() => {
            render(<DataFetchingFunctionalComponent/>);
        })
        const listItems = await screen.findAllByRole("listitem");
        expect(listItems).toHaveLength(2);
    })
})
