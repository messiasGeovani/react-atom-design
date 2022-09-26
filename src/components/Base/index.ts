import styled from "styled-components";

import { colors, flexbox, fontConfig, resizer, spacer } from "@utils/index";
import { IColorProps } from "@utils/colors";
import { IFlexboxProps } from "@utils/flexbox";
import { IFontProps } from "@utils/fonts";
import { IResizerProps } from "@utils/resizer";
import { ISpacerProps } from "@utils/spacer";
import Image from "next/image";

type TDefaultAttrsProps = ISpacerProps & IResizerProps;
type TFlexAttrsProps = TDefaultAttrsProps & IFlexboxProps;
type TTextAttrsProps = TDefaultAttrsProps & IFontProps & IColorProps;

const defaultAttrs = (props: TDefaultAttrsProps) => ({
  ...resizer(props as IResizerProps),
  ...spacer(props as ISpacerProps),
});

const flexAttrs = (props: TFlexAttrsProps) => ({
  ...defaultAttrs(props as TDefaultAttrsProps),
  ...flexbox(props as IFlexboxProps),
});

const textAttrs = (props: TTextAttrsProps) => ({
  ...defaultAttrs(props as TDefaultAttrsProps),
  ...fontConfig(props as IFontProps),
  ...colors(props as IColorProps),
});

export const BaseDiv = styled.div<TFlexAttrsProps>(flexAttrs);

export const BaseSpan = styled.span<TFlexAttrsProps>(flexAttrs);

export const BaseInput = styled.input<TDefaultAttrsProps>(defaultAttrs);

export const BaseText = styled.p<TTextAttrsProps>(textAttrs);

export const BaseLabel = styled.label<TTextAttrsProps>(textAttrs);

export const BaseButton = styled.button<TDefaultAttrsProps>(defaultAttrs);

export const BaseForm = styled.form<TFlexAttrsProps>(flexAttrs);

export const BaseImg = styled(Image)<ISpacerProps>(spacer);
