import styled from "styled-components";

import { Box } from "@components/atoms";
import { BaseDiv, BaseSpan } from "@components/Base";
import { animate } from "@/utils/animate";

export const AnimatedDiv = styled(BaseDiv)`
  ${animate}
`;

export const AnimatedSpan = styled(BaseSpan)`
  ${animate}
`;

export const AnimatedBox = styled(Box)`
  ${animate}
`;
