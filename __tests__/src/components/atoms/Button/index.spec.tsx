import { OutlinedButton, PrimaryButton, SuccessButton } from "@/components/atoms";
import { IResizerProps } from "@/utils/resizer";
import { ISpacerProps } from "@/utils/spacer";
import { StyledComponent } from "styled-components";
import { render, screen, userEvent } from "__tests__/config";

type TButton = StyledComponent<
  "button",
  any,
  ISpacerProps &
    IResizerProps & {
      disabled?: boolean | undefined;
    },
  never
>;

function renderButton(testId: string, Button: TButton, onClick: () => any) {
  const buttonText = "Click Here";

  render(
    <Button data-testid={testId} onClick={onClick}>
      {buttonText}
    </Button>
  );

  const element = screen.getByText(buttonText);
  userEvent.click(element);

  expect(onClick).toHaveBeenCalled();
}

describe("<Button />", () => {
  const testId = "button";
  let onClick: jest.Mock<any, any>;

  beforeEach(() => {
    onClick = jest.fn();
  });

  it("should render primary button correctly", () => {
    renderButton(testId, PrimaryButton, onClick);
  });

  it("should render outlined button correctly", () => {
    renderButton(testId, OutlinedButton, onClick);
  });

  it("should render success button correctly", () => {
    renderButton(testId, SuccessButton, onClick);
  });
});
