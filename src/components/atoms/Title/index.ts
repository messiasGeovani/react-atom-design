import styled from "styled-components";

import { media } from "@/utils/medias";

import { BaseText } from "@components/Base";

export const Title = styled(BaseText).attrs({
  as: "h1",
})`
  font-weight: 700;

  ${media.lessThan('md')`
    font-size: 27px;
  `}
`;
