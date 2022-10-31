import { PrimaryCheckBox } from "@/components/atoms";
import { render, screen, userEvent } from "__tests__/config";

describe("<Checkbox />", () => {
  const testId = "input";

  it("should check input", () => {
    render(<PrimaryCheckBox data-testid={testId} />);

    const element = screen.getByTestId(testId);
    userEvent.click(element);

    expect(element).toBeChecked();
  });

  it("should check input by label", () => {
    const labelText = "Check Here";
    render(
      <>
        <label htmlFor={testId}>{labelText}</label>
        <PrimaryCheckBox data-testid={testId} id={testId} />
      </>
    );

    const checkboxLabel = screen.getByText(labelText);
    userEvent.click(checkboxLabel);

    const checkboxElement = screen.getByTestId(testId);
    expect(checkboxElement).toBeChecked();
  });
});
