import { AnimatedDiv, AnimatedSpan, AnimatedBox } from "@/components/Animated";
import { IAnimationProps } from "@/utils/animate";
import { testAnimation } from "__tests__/config/testUtils";
import * as Animations from "@/styles/Animations";

const animationProps = {
  duration: 1,
  fillMode: "both",
};

describe("<AnimatedDiv />", () => {
  const testId = "animated-div";

  it("should render with animations correctly", () => {
    const animationKeys = Object.keys(Animations);

    animationKeys.forEach((key: string) => {
      const elementId = `${testId}__${key}`;
      const props = { ...animationProps, animation: key };
      testAnimation(elementId, AnimatedDiv, props as IAnimationProps);
    });
  });
});

describe("<AnimatedSpan />", () => {
  const testId = "animated-span";

  it("should render with animations correctly", () => {
    const animationKeys = Object.keys(Animations);

    animationKeys.forEach((key: string) => {
      const elementId = `${testId}__${key}`;
      const props = { ...animationProps, animation: key };
      testAnimation(elementId, AnimatedSpan, props as IAnimationProps);
    });
  });
});

describe("<AnimatedBox />", () => {
  const testId = "animated-box";

  it("should render with animations correctly", () => {
    const animationKeys = Object.keys(Animations);

    animationKeys.forEach((key: string) => {
      const elementId = `${testId}__${key}`;
      const props = { ...animationProps, animation: key };
      testAnimation(elementId, AnimatedBox, props as IAnimationProps);
    });
  });
});