import { expect } from "vitest"
import Restaurantcards from "../Restaurantcards"
import { discountComponent } from "../Restaurantcards"
import MOCK_DATA from "../mocks/resCardsMock.json"
import { render , screen} from "@testing-library/react"

it("should render Restaurant Card component with porps data",()=>{
    render(<Restaurantcards props={MOCK_DATA}/>)

    const name=screen.getByText("Pizza Paradise"); 
    expect(name).toBeInTheDocument();
})


it("should render the discount label on resturant card",()=>{
    const Discount=discountComponent(Restaurantcards)
    render(<Discount props={MOCK_DATA}/>)

    const discount=screen.getByText(/50% OFF/i); 
    expect(discount).toBeInTheDocument();
})