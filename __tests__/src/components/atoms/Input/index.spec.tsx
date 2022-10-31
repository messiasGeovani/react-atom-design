import { Input } from "@/components/atoms";
import { render, screen, userEvent } from "__tests__/config";

describe("<Input />", () => {
  const testId = "input";

  it("should change input value", () => {
    const inputTextValue = "Base{space}Input";
    const match = "Base Input";

    render(<Input data-testid={testId} />);

    const input = screen.getByTestId(testId);
    userEvent.type(input, inputTextValue);

    expect(input).toHaveValue(match);
  });
});
