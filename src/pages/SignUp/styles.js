import styled from "styled-components";
import peopleBannerImg from "../../assets/banners/people.png";

import { BaseDiv } from "../../components/Base";
import { respondTo } from "../../utils/medias";

export const Background = styled.div`
  height: 100vh;
  width: 100%;
  background: var(--tertiary);
  padding: 50px 70px;

  ${respondTo.md`
    padding: 0;
  `}
`;

export const WhiteBox = styled(BaseDiv)`
  background: white;
`;

export const LoginBanner = styled.img.attrs({
  src: peopleBannerImg,
})`
  max-height: 60%;
`;
