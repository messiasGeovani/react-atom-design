import { keyframes } from "styled-components";

export const fadeInRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(-35%);
  } to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const fadeInZoomIn = keyframes`
  from {
    opacity: 0;
    transform: scale(0.7);
  } to {
    opacity: 1;
    transform: scale(1);
  }
`;
