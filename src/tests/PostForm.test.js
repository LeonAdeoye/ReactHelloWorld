import {render, screen} from "@testing-library/react";
import PostForm from "../components/PostForm";
import user from "@testing-library/user-event";
import renderer from "react-test-renderer";

describe("PostForm", () =>
{
    test("renders a list of post headings",  () =>
    {
        render(<PostForm/>);
        const userIdTextBox = screen.getByRole("textbox", {
            name: /UserId/i
        });
        expect(userIdTextBox).toBeInTheDocument();

        const titleTextBox = screen.getByRole("textbox", {
            name: /Title/i
        });
        expect(titleTextBox).toBeInTheDocument();

        const bodyTextBox = screen.getByRole("textbox", {
            name: /Body/i
        });
        expect(bodyTextBox).toBeInTheDocument();

        const submitButton = screen.getByRole("button", {
            name: /Submit/i
        });
        expect(submitButton).toBeInTheDocument();
    })

    test('call REST post', async () =>
    {
        user.setup();
        render(<PostForm/>);
        const userIdTextBox = screen.getByRole("textbox", {
            name: /UserId/i
        });
        await user.type(userIdTextBox, 'User Id of horatio');

        const titleTextBox = screen.getByRole("textbox", {
            name: /Title/i
        });
        await user.type(titleTextBox, 'Title of horatio');

        const bodyTextBox = screen.getByRole("textbox", {
            name: /Body/i
        });
        await user.type(bodyTextBox, 'Body of horatio');

        const submitButton = screen.getByRole("button", {
            name: /Submit/i
        });
        await user.click(submitButton);
    })

    test('sets initial state', async () =>
    {
        user.setup();
        let component = renderer.create(<PostForm/>).getInstance();

        expect(component.state.userId).toBe('')
        expect(component.state.title).toBe('')
        expect(component.state.body).toBe('')
    })

})

