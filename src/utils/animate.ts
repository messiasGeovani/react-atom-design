import { css, Keyframes, SimpleInterpolation } from "styled-components";

import * as Animations from "@/styles/Animations";

interface IKeyframe extends Keyframes {
  inject: () => any;
  toString: () => string;
  name: string;
  id: string;
  rules: string;
}

type TAnimation = keyof typeof Animations;

export interface IAnimationProps {
  duration: number;
  animation: TAnimation;
  fillMode: "none" | "forwards" | "backwards" | "both";
  delay?: number;
}

export function setAnimation(animation: TAnimation): IKeyframe | void {
  const animations = Object.keys(Animations);

  if (!animations.includes(animation)) {
    return;
  }

  return Animations[animation] as IKeyframe;
}

export const animate = ({
  duration,
  animation,
  fillMode,
  delay,
}: IAnimationProps) => css`
  animation-name: ${setAnimation(animation) as SimpleInterpolation};
  animation-duration: ${duration}s;
  animation-fill-mode: ${fillMode};
  animation-delay: ${delay}s;
`;
