import { Provider } from "react-redux";
import Header from "../Header";
import { fireEvent, render ,screen} from "@testing-library/react";
import appStore from "../../utils/appStore";
import {HashRouter} from "react-router-dom";
import { expect } from "vitest";

it("should load Header compnent with a login button", () => {
  render(
    <HashRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </HashRouter>
  );

  const logginButton=screen.getByRole("button")
  expect(logginButton).toBeInTheDocument();
});
it("should load Header compnent with a cartItems", () => {
  render(
    <HashRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </HashRouter>
  );

  const cartItem=screen.getByText(/Cart/)
  expect(cartItem).toBeInTheDocument();
});

it("should change login to logout on click", () => {
  render(
    <HashRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </HashRouter>
  );

  const logginButton=screen.getByRole("button", {name:"login"})
  fireEvent.click(logginButton);
  const logoutButton=screen.getByRole("button",{namr:"logout"})
  expect(logoutButton).toBeInTheDocument();

});