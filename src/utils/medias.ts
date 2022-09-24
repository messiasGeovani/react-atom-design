import { css, SimpleInterpolation } from "styled-components";

export type TBreakpoints = keyof typeof breakpoints;

const breakpoints = {
  xs: "min-width: 480px",
  sm: "min-width: 768px",
  md: "max-width: 1600px",
  lg: "max-width: 1920px",
};

export const respondTo = (
  Object.keys(breakpoints) as Array<keyof typeof breakpoints>
).reduce((accumulator, label) => {
  // @ts-ignore
  accumulator[label] = (style: SimpleInterpolation) => css`
    @media (${breakpoints[label]}) {
      ${style}
    } ;
  `;
  return accumulator;
}, {} as { [index: string]: Function });
