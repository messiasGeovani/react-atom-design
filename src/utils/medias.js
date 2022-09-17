import { css } from "styled-components";

const breakpoints = {
  xs: "min-width: 480px",
  sm: "min-width: 768px",
  md: "max-width: 1600px",
  lg: "max-width: 1920px",
};

export const respondTo = Object.keys(breakpoints).reduce(
  (accumulator, label) => {
    accumulator[label] = (...args) => css`
      @media (${breakpoints[label]}) {
        ${css(...args)};
      }
    `;
    return accumulator;
  },
  {}
);
