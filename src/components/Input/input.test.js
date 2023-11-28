import { screen, render } from "@testing-library/react";
import InputBox from "./input";

test("testing input box", async () => {
  render(<InputBox />);
  // check input box is exist or not
  let checkInputBox = screen.getByRole("textbox");

  expect(checkInputBox).toBeInTheDocument();
});

