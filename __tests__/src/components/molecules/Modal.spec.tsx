import React from "react";

import { PrimaryButton } from "@/components/atoms";
import { Modal } from "@/components/molecules";
import { render, screen } from "__tests__/config";

describe("<Modal />", () => {
  const testId = "modal";
  const props = {
    opened: true,
  };

  it("should not render", () => {
    render(<Modal data-testid={testId} />);

    const element = screen.queryByTestId(testId);

    expect(element).not.toBeInTheDocument();
  });

  it("should render", () => {
    render(<Modal data-testid={testId} {...props} />);

    const element = screen.queryByTestId(testId);

    expect(element).toBeInTheDocument();
  });

  it("should render with children element", () => {
    const buttonText = "Hello There";
    const buttonTextMatch = new RegExp(`^${buttonText}$`);

    render(
      <Modal data-testid={testId} {...props}>
        <PrimaryButton>{buttonText}</PrimaryButton>
      </Modal>
    );

    const element = screen.getByRole("button");

    expect(element).toHaveTextContent(buttonTextMatch);
  });
});
