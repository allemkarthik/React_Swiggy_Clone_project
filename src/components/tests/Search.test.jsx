import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "@testing-library/react";
import Body from "../Body";
import { HashRouter } from "react-router-dom";
import { expect } from "vitest";
import MOCK_DATA from "../mocks/mockResList.json";

global.fetch = vi.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("should render body component with search", async () => {
  //when we use state varibales and fetch we need to use act
  await act(async () =>
    render(
      <HashRouter>
        <Body />
      </HashRouter>
    )
  );
  const cardsallcards = screen.getAllByTestId("resCard");
  expect(cardsallcards.length).toBe(9);

  const searchBtn = screen.getByRole("button", { name: "search" });
  const searchInput = screen.getByTestId("searchInput");
  fireEvent.change(searchInput, { target: { value: "spice" } });
  fireEvent.click(searchBtn);
  const cards = screen.getAllByTestId("resCard");
  expect(cards.length).toBe(2);
});

it("should filter top rated restro", async()=>{
    //when we use state varibales and fetch we need to use act
  await act(async () =>
    render(
      <HashRouter>
        <Body />
      </HashRouter>
    )
  );
    const cardsBeforeFilter=screen.getAllByTestId("resCard")
    expect(cardsBeforeFilter.length).toBe(9)
    

    const topReatedbtn=screen.getByRole("button",{name:"Top rated resturants"})
    fireEvent.click(topReatedbtn)
    const cardAfterFilter=screen.getAllByTestId("resCard")
    expect(cardAfterFilter.length).toBe(3)

})