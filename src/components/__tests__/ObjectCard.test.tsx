import { screen, waitFor } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import * as api from "@/api-queries";
import { render } from "@/test-utilities";

import ObjectCard from "../ObjectCard";

jest.mock("@/api-queries");

describe("ObjectCard", () => {
  it("renders the object card", async () => {
    // api.useDetailQuery("485308").mockResolvedValue({
    //   data: { id: "485308" },
    // });
    render(<ObjectCard id="485308" />);
    await waitFor(() => {
      screen.getByText("Sunflower");
    });

    expect(fetch).toHaveBeenCalledTimes(1);
    expect(screen.getByText("Sunflower")).toBeVisible();
  });
});
