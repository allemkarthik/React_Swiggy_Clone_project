import { render , screen} from "@testing-library/react"
import Contact from "../Contact"
import { describe, expect } from "vitest";

describe("contact us page test cases",()=>{

    it("should load contact us page",()=>{
        render(<Contact/>);
    
        const heading =screen.getByRole("heading");
        expect(heading).toBeInTheDocument();
    })
    test("should load button inside contact us page",()=>{
        render(<Contact/>);
    
        const button =screen.getByRole("button");
        expect(button).toBeInTheDocument();
    })
    
    test("should load placeHolder inside contact us page",()=>{
        render(<Contact/>);
    
        const inputName =screen.getByPlaceholderText("name")
        expect(inputName).toBeInTheDocument();
    })
    
    test("should load 2 input boxes inside contact us page",()=>{
        render(<Contact/>);
    
        const inputboxes =screen.getAllByRole("textbox");
        expect(inputboxes.length).toBe(2);
    })
})