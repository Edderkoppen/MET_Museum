import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";

import { render } from "@/test-utilities";

import HomePage from "./HomePage";
import ObjectCard from "./ObjectCard";

describe("ObjectCard", () => {
  it("renders object title, department and object name", () => {
    render(<HomePage />);

    expect(screen.getByText("Sunflower")).toBeVisible();
    expect(screen.getByText("Modern and Contemporary Art")).toBeVisible();
    expect(screen.getByText("Painting")).toBeVisible();
  });

//   it("goes to the object detail page", async () => {
//     const user = userEvent.setup();

//     render(<ObjectCard id={"485308"} />);

//     await user.click(screen.getByText("More details"));

//     expect(screen.getByText("Painting")).toBeVisible();
//     expect(screen.getByText("1969")).toBeVisible();
//     expect(
//       screen.getByText("102 1/4 in. × 70 3/4 in. (259.7 × 179.7 cm)")
//     ).toBeVisible();
//     expect(screen.getByText("Modern and Contemporary Art")).toBeVisible();
//   });
});
