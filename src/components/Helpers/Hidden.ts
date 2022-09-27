import styled, { css } from "styled-components";

import { media } from "@/utils";
import { TBreakpoints } from "@/utils/medias";

import { BaseSpan } from "@components/Base";

type TConfigHideBreakPointProps = {
  [key in TBreakpoints]?: boolean;
};

const hideDisplayCss = css`
  display: none;
`;

function configHideBreakpoint({ xs, sm, md, lg }: TConfigHideBreakPointProps) {
  if (xs) {
    return media.lessThan('xs')`${hideDisplayCss}`;
  }

  if (sm) {
    return media.lessThan('sm')`${hideDisplayCss}`;
  }

  if (md) {
    return media.lessThan('md')`${hideDisplayCss}`;
  }

  if (lg) {
    return media.lessThan('lg')`${hideDisplayCss}`;
  }

  return media.lessThan('md')`${hideDisplayCss}`;
}

export const Hidden = styled(BaseSpan)`
  ${configHideBreakpoint};
`;
