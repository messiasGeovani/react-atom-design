import styled from "styled-components";
import { colors, spacer } from "../../../utils";

const separatorAttrs = (props) => ({
  ...spacer(props),
  ...colors(props),
});

const BaseSeparator = styled.span(separatorAttrs);

export const Separator = styled(BaseSeparator)`
  width: 100%;
  height: 2px;
  display: block;
`;
