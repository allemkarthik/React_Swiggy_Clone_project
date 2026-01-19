import { act, fireEvent } from "@testing-library/react";
import ResturantMenu from "../ResturantMenu";
import { render, screen } from "@testing-library/react";
import MOCK_DATA from "../mocks/mockResMenu.json";
import { HashRouter } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore"
import { expect } from "vitest";
import Header from "../Header"
import Cart from "../pages/Cart"
import "@testing-library/jest-dom"

// integration testing 


global.fetch = vi.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("should load restro menu component", async () => {
  await act(async () =>
    render(
      <Provider store={appStore}>
        <HashRouter>
          <Header/>
          <ResturantMenu />
          <Cart/>
        </HashRouter>
      </Provider>
    )
  );

  const accordionHeader = screen.getByText("Signature Burgers (3)");
  fireEvent.click(accordionHeader);
  const allItems= screen.getAllByTestId("foodItems")
  expect(allItems.length).toBe(3)


  const addBtns=screen.getAllByRole("button",{name:"ADD+"})
  fireEvent.click(addBtns[0]);
  const headerCart=screen.getByText(/Cart1/i);
  expect(headerCart).toBeInTheDocument();


  fireEvent.click(addBtns[1]);
  const headerCart1=screen.getByText(/Cart2/i);
  expect(headerCart1).toBeInTheDocument();

  const clearBtn=screen.getByRole("button",{name:"Clear Cart"})
  fireEvent.click(clearBtn)
  expect(screen.getByText("cart is empty please add items")).toBeInTheDocument();

});
