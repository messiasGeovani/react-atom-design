import styled from "styled-components";

import { colors, spacer } from "@/utils";
import { IColorProps } from "@/utils/colors";
import { ISpacerProps } from "@/utils/spacer";

type TSeparatorProps = ISpacerProps & IColorProps;

const separatorAttrs = (props: TSeparatorProps) => ({
  ...spacer(props as ISpacerProps),
  ...colors(props as IColorProps),
});

const BaseSeparator = styled.span<TSeparatorProps>(separatorAttrs);

export const Separator = styled(BaseSeparator)`
  width: 100%;
  height: 2px;
  display: block;
`;
