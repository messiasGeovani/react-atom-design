import { Typography } from "@/components/atoms";
import "@testing-library/jest-dom";
import { testRenderization } from "__tests__/config/testUtils";

describe("<Typography />", () => {
  const testId = "typography";

  it("loads and displays any text", async () => {
    const text = "Typography";
    const match = new RegExp(`^${text}$`);

    testRenderization(testId, Typography, text, match);
  });
});
