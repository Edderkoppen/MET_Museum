import { screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { render } from "@/test-utilities";

import Error from "../Error";

describe("Error 404", () => {
  it("renders the error 404 page", async () => {
    render(<Error />);

    expect(screen.getByText("Rien à voir ici ...")).toBeVisible();
  });
});
