import styled, { css } from "styled-components";

import { respondTo } from "../../utils";
import { TBreakpoints } from "../../utils/medias";
import { BaseSpan } from "../Base";

type TConfigHideBreakPointProps = {
  [key in TBreakpoints]: boolean;
};

const hideDisplayCss = css`
  display: none;
`;

function configHideBreakpoint({ xs, sm, md, lg }: TConfigHideBreakPointProps) {
  if (xs) {
    return respondTo.xs`${hideDisplayCss}`;
  }

  if (sm) {
    return respondTo.sm`${hideDisplayCss}`;
  }

  if (md) {
    return respondTo.md`${hideDisplayCss}`;
  }

  if (lg) {
    return respondTo.lg`${hideDisplayCss}`;
  }

  return respondTo.md`${hideDisplayCss}`;
}

export const Hidden = styled(BaseSpan)`
  ${configHideBreakpoint};
`;
