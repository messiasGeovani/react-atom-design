import React from "react";

import { screen } from ".";
import { render } from "./render";

type TObject = { [key: string]: any };
type TGetStyles = (props: TObject) => TObject;

export function testRenderization(
  testId: string,
  Component: React.ReactElement | any,
  content?: string,
  match?: string | RegExp
) {
  if (content) {
    render(<Component data-testid={testId}>{content}</Component>);
  } else {
    render(<Component data-testid={testId} />);
  }

  const element = screen.getByTestId(testId);

  expect(element).toBeInTheDocument();

  if (!match) {
    return;
  }

  expect(element).toHaveTextContent(match);
}

export function testStyles(
  testId: string,
  Component: any,
  props: TObject,
  styleUtils: Array<TGetStyles>
) {
  render(<Component data-testid={testId} {...props} />);

  const element = screen.getByTestId(testId);

  styleUtils.map((getStyles) => expect(element).toHaveStyle(getStyles(props)));
}
