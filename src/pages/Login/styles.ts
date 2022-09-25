import styled from "styled-components";

import { media } from "@utils/medias";

import peopleBannerImg from "@assets/banners/people.png";

export const Background = styled.div`
  height: 100vh;
  width: 100%;
  background: var(--tertiary);
  padding: 50px 70px;

  ${media.lessThan("md")`
    padding: 0;
  `}
`;

export const LoginBanner = styled.img.attrs({
  src: peopleBannerImg,
})`
  max-height: 60%;
`;
