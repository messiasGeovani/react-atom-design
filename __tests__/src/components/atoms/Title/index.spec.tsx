import { Title } from "@/components/atoms";
import { screen } from "__tests__/config";
import { testRenderization } from "__tests__/config/testUtils";

describe("<Title />", () => {
  const testId = "title";

  it("loads and displays any text", async () => {
    const text = "Title";
    const match = new RegExp(`^${text}$`);

    testRenderization(testId, Title, text, match);

    const element = screen.getByRole("heading");

    expect(element).toBeInTheDocument();
  });
});
