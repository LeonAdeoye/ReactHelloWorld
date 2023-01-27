import {render, screen} from "@testing-library/react";
import PostList from "../components/PostList";
import {server} from '../mocks/server'
import {rest} from 'msw'

describe("PostList", () =>
{
    test("renders a list of post headings", async () =>
    {
        render(<PostList/>);
        const posts = await screen.findAllByRole("heading");
        expect(posts).toHaveLength(2);
    })

    test("handles error correctly", async () =>
    {
        server.use( rest.get('https://jsonplaceholder.typicode.com/posts', (req, res, ctx) =>
        {
            return res(ctx.status(500));
        }));
        render(<PostList/>);
        const errorHeading = await screen.findByText('Error retrieving data!');
        expect(errorHeading).toBeInTheDocument();
    })
})
