import styled from "styled-components";

import { BaseDiv } from "../../components/Base";
import { AnimatedDiv } from '../../components/Animated'

export const Background = styled(BaseDiv)`
  height: 100%;
  width: 100%;
  background: var(--tertiary);
`;

export const Box = styled(AnimatedDiv)`
  background: white;
`;