import React from "react";

import { IAnimationProps, setAnimation } from "@/utils/animate";
import { IObject } from "@/utils/objects";
import { SimpleInterpolation } from "styled-components";
import { screen } from ".";
import { render } from "./render";

type TGetStyles<T> = (props: T) => IObject | SimpleInterpolation;

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
  props: IObject,
  styleUtils: Array<TGetStyles<IObject>>
) {
  render(<Component data-testid={testId} {...props} />);

  const element = screen.getByTestId(testId);

  styleUtils.map((getStyles) =>
    expect(element).toHaveStyle(getStyles(props) as IObject)
  );
}

export function testAnimation(
  testId: string,
  Component: any,
  props: IAnimationProps
) {
  const animationStyles = {
    animationName: setAnimation(props.animation)?.name,
    animationDuration: props.duration + "s",
    animationFillMode: props.fillMode,
  };

  render(<Component data-testid={testId} {...props} />);

  const element = screen.getByTestId(testId);

  expect(element).toHaveStyle(animationStyles);
}
