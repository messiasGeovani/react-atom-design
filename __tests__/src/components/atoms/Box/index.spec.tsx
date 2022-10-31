import { Box } from "@/components/atoms";
import { render, screen } from "__tests__/config";

describe("<Box />", () => {
  const testId = "box";

  it("should render correctly", () => {
    render(<Box data-testid={testId} />);

    const element = screen.getByTestId(testId);

    expect(element).toHaveStyle({
      background: "white",
    });
  });

  it("should load with any element inside", () => {
    render(
      <Box data-testid={testId}>
        <button>button here</button>
      </Box>
    );

    const box = screen.getByTestId(testId);
    const button = screen.getByRole("button");

    expect(box).toContainElement(button);
  });
});
