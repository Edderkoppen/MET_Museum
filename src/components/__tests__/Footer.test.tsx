import { screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { render } from "@/test-utilities";

import Footer from "../Footer";

describe("Footer", () => {
  it("renders the footer", async () => {
    render(<Footer />);

    const primaryButtonDisabled = screen.getByRole('button')

    expect(screen.getByText("Subscribe to our newsletter")).toBeVisible();
    expect(screen.getByText("Send")).toBeVisible();
    expect(primaryButtonDisabled).toHaveClass('btn');
  });
});
