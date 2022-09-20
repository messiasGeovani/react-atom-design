import styled, { css } from "styled-components";

import * as Animations from "../../styles/Animations";
import { BaseDiv, BaseSpan } from "../Base";

function setAnimation(animation) {
  const animations = Object.keys(Animations);

  if (!animations.includes(animation)) {
    return;
  }

  return Animations[animation];
}

const animationAttrs = ({ duration, animation, fillMode, delay }) => css`
  animation-name: ${setAnimation(animation)};
  animation-duration: ${duration}s;
  animation-fill-mode: ${fillMode};
  animation-delay: ${delay}s;
`;

export const AnimatedDiv = styled(BaseDiv)`
  ${animationAttrs}
`;

export const AnimatedSpan = styled(BaseSpan)`
  ${animationAttrs}
`;