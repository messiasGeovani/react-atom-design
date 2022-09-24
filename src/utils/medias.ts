import { generateMedia } from "styled-media-query";

export type TBreakpoints = keyof typeof breakpoints;

const breakpoints = {
  xs: "480px",
  sm: "768px",
  md: "1600px",
  lg: "1920px",
};

export const media = generateMedia(breakpoints);
