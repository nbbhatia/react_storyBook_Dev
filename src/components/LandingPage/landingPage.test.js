import { render, screen } from "@testing-library/react";
import InputBox from "../Input/input";
import LandingPage from "./index";

// for landing page
test("landing page test", () => {
  const { container } = render(<LandingPage />);
  const Card_component = container.getElementsByClassName("Card_component");
  const Content_div = container.getElementsByClassName("content_Div");
  const CardComponentHeading = screen.getByText(/Find your Model/i);
  const loginForm = screen.getByTestId("login-form");
  expect(loginForm).toBeInTheDocument();
  expect(Card_component);
  expect(Content_div);
  expect(CardComponentHeading).toBeInTheDocument();
});

//this is for Input box
test("testing input box", async () => {
  render(<InputBox />);
  // check input box is exist or not
  let checkInputBox = screen.getByRole("textbox");

  expect(checkInputBox).toBeInTheDocument();
});
