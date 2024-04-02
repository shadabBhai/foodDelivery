import { render, screen } from "@testing-library/react";
import Contact from "../Contact";

import "@testing-library/jest-dom";

test("test for about section", () => {
  render(<Contact />);

  const heading = screen.getByRole("heading");

  expect(heading).toBeInTheDocument();
});
