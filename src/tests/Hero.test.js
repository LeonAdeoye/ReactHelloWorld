import {render, screen} from "@testing-library/react";
import Hero from "../components/Hero";

describe("Hero", () =>
{
    test("renders correctly", () =>
    {
        render(<Hero heroName="Superman"/>);
        const buttonElement = screen.getByRole("heading", {
            name: /No Hero Error: Superman/i
        });
        expect(buttonElement).toBeInTheDocument();
    })

    test("throws error if not a hero", () =>
    {
        // You have to mock the console.error function otherwise the error will go uncaught.
        const consoleErrorFn = jest.spyOn(console, 'error').mockImplementation(() => jest.fn());

        expect(() => render(<Hero heroName="Joker"/>)).toThrow("Not a hero");

        // Once done, you have to reverse the mocking of the console.error method.
        consoleErrorFn.mockRestore()
    })

    test("does not throw error if a hero", () =>
    {
        expect(() => render(<Hero heroName="Superman"/>)).not.toThrow("Not a hero");
    })
})
