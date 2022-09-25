import styled from "styled-components";
import { css } from "styled-components";

import { BaseLabel, BaseText } from "@components/Base";

const sizeAttrs = ({ size = 14 }) => css`
  font-size: ${size}px;
`;

export const Typography = styled(BaseText)`
  ${sizeAttrs}
`;

export const Label = styled(BaseLabel)`
  cursor: pointer;
  ${sizeAttrs}
`;
