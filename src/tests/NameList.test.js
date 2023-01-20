import {render, screen} from "@testing-library/react";
import NameList from "../components/NameList";

describe("NameList", () =>
{
    test("renders correctly", () =>
    {
        render(<NameList/>);
        const listItems = screen.getAllByRole("listitem");
        expect(listItems).toHaveLength(3);
    })
})
