import styled from "styled-components";
import { BaseText } from "../../Base";

export const Typography = styled(BaseText)`
  font-size: ${({ size = 14 }) => size}px;
`;

export const Label = styled(Typography).attrs({
  as: "label",
})`
  cursor: pointer;
`;
