import styled, { CSSObject } from "styled-components";

import { colors, flexbox, fontConfig, resizer, spacer } from "../../utils";
import { IColorProps } from "../../utils/colors";
import { IFlexboxProps } from "../../utils/flexbox";
import { IFontProps } from "../../utils/fonts";
import { IResizerProps } from "../../utils/resizer";
import { ISpacerProps } from "../../utils/spacer";

type TDefaultAttrsProps = {} & ISpacerProps & IResizerProps;

const defaultAttrs = (props: TDefaultAttrsProps) => ({
  ...resizer(props as IResizerProps),
  ...spacer(props as ISpacerProps),
});

const flexAttrs = (props: TDefaultAttrsProps & IFlexboxProps) => ({
  ...defaultAttrs(props as TDefaultAttrsProps),
  ...flexbox(props as IFlexboxProps),
});

const textAttrs = (props: TDefaultAttrsProps & IFontProps & IColorProps) => ({
  ...defaultAttrs(props as TDefaultAttrsProps),
  ...fontConfig(props as IFontProps),
  ...colors(props as IColorProps),
});

export const BaseDiv = styled.div(flexAttrs as unknown as CSSObject);

export const BaseSpan = styled.span(flexAttrs as unknown as CSSObject);

export const BaseInput = styled.input(defaultAttrs as unknown as CSSObject);

export const BaseText = styled.p(textAttrs as unknown as CSSObject);

export const BaseButton = styled.button(defaultAttrs as unknown as CSSObject);

export const BaseForm = styled.form.attrs(flexAttrs)``;

export const BaseImg = styled.img(defaultAttrs as unknown as CSSObject);
