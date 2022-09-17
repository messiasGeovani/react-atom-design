import styled from "styled-components";
import { respondTo } from "../../../utils/medias";
import { BaseText } from "../../Base";

export const Title = styled(BaseText).attrs({
  as: "h1",
})`
  font-weight: 700;

  ${respondTo.md`
    font-size: 27px;
  `}
`;
