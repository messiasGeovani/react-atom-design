import React from "react";
import "@testing-library/jest-dom";

import { render, screen, userEvent } from "__tests__/config";

import {
  BaseDiv,
  BaseSpan,
  BaseInput,
  BaseButton,
  TFlexAttrsProps,
  TDefaultAttrsProps,
} from "@components/Base";

import { defaultAttrs, flexAttrs } from "__tests__/config/baseProps";

import { flexbox, resizer, spacer } from "@/utils";

describe("<BaseDiv />", () => {
  const testId = "base-div";

  it("loads and displays any content", () => {
    const divContent = "Base Div";
    const match = new RegExp(`^${divContent}$`);

    render(<BaseDiv data-testid={testId}>{divContent}</BaseDiv>);

    expect(screen.getByTestId(testId)).toBeInTheDocument();
    expect(screen.getByTestId(testId)).toHaveTextContent(match);
  });

  it("check if element style props is working", () => {
    const props = flexAttrs as TFlexAttrsProps;

    render(<BaseDiv data-testid={testId} {...props} />);

    expect(screen.getByTestId(testId)).toHaveStyle(resizer(props));
    expect(screen.getByTestId(testId)).toHaveStyle(spacer(props));
    expect(screen.getByTestId(testId)).toHaveStyle(flexbox(props));
  });
});

describe("<BaseSpan />", () => {
  const testId = "base-span";

  it("loads and displays any content", () => {
    const divContent = "Base Span";
    const match = new RegExp(`^${divContent}$`);

    render(<BaseSpan data-testid={testId}>{divContent}</BaseSpan>);

    expect(screen.getByTestId(testId)).toBeInTheDocument();
    expect(screen.getByTestId(testId)).toHaveTextContent(match);
  });

  it("check if element style props is working", () => {
    const props = flexAttrs as TFlexAttrsProps;

    render(<BaseSpan data-testid={testId} {...props} />);

    expect(screen.getByTestId(testId)).toHaveStyle(resizer(props));
    expect(screen.getByTestId(testId)).toHaveStyle(spacer(props));
    expect(screen.getByTestId(testId)).toHaveStyle(flexbox(props));
  });
});

describe("<BaseInput />", () => {
  const testId = "base-input";

  it("loads and displays any content", () => {
    render(<BaseInput data-testid={testId} />);

    expect(screen.getByTestId(testId)).toBeInTheDocument();
  });

  it("should change input value", () => {
    const inputTextValue = "Base{space}Input";
    const match = "Base Input";

    render(<BaseInput data-testid={testId} />);

    const input = screen.getByTestId(testId);
    userEvent.type(input, inputTextValue);

    expect(input).toHaveValue(match);
  });

  it("check if element style props is working", () => {
    const props = defaultAttrs as TDefaultAttrsProps;

    render(<BaseInput data-testid={testId} {...props} />);

    expect(screen.getByTestId(testId)).toHaveStyle(resizer(props));
  });
});

describe("<BaseButton />", () => {
  const testId = "base-button";

  it("loads and displays any content", () => {
    const buttonTextContent = "Base Button";
    const match = new RegExp(`^${buttonTextContent}$`);

    render(<BaseButton data-testid={testId}>{buttonTextContent}</BaseButton>);

    expect(screen.getByTestId(testId)).toBeInTheDocument();
    expect(screen.getByTestId(testId)).toHaveTextContent(match);
  });

  it("check if element style props is working", () => {
    const props = defaultAttrs as TDefaultAttrsProps;

    render(<BaseButton data-testid={testId} {...props} />);

    expect(screen.getByTestId(testId)).toHaveStyle(resizer(props));
  });
});
