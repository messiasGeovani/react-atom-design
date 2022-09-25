import styled from "styled-components";

import { AnimatedDiv } from "@components/Animated";

export const Background = styled(AnimatedDiv)`
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.8);
  z-index: 9;
  position: absolute;
  top: 0;
  left: 0;
`;
