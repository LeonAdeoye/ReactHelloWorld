import {render, screen} from "@testing-library/react";
import PostList from "../components/PostList";

describe("PostList", () =>
{
    test("renders a list of post headings", async () =>
    {
        render(<PostList/>);
        const posts = await screen.findAllByRole("heading");
        expect(posts).toHaveLength(2);
    })
})
