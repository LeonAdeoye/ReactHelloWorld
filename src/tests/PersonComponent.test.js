import {render, screen} from "@testing-library/react";
import PersonComponent from "../components/PersonComponent";

describe("Renders correctly", () =>
{
    test("PersonComponent", () =>
    {
        const person = {
            id: 1,
            name: "Horatio",
            age: 9,
            skill: "Football",
            likes: "sweets"
        };
        render(<PersonComponent personDetails={person}/>);
        const header = screen.getByText(`I am ${person.name}, my age is ${person.age}, and my skill is ${person.skill}.`);
        expect(header).toBeInTheDocument();
    })
})
