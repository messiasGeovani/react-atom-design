import styled from "styled-components";

import { colors, flexbox, fontConfig, resizer, spacer } from "../../utils";

const defaultAttrs = (props) => ({
  ...resizer(props),
  ...spacer(props),
});

const flexAttrs = (props) => ({
  ...defaultAttrs(props),
  ...flexbox(props),
});

const textAttrs = (props) => ({
  ...defaultAttrs(props),
  ...fontConfig(props),
  ...colors(props),
});

export const BaseDiv = styled.div(flexAttrs);

export const BaseSpan = styled.span(flexAttrs);

export const BaseInput = styled.input(defaultAttrs);

export const BaseText = styled.p(textAttrs);

export const BaseButton = styled.button(defaultAttrs);

export const BaseForm = styled.form.attrs(flexAttrs)``;

export const BaseImg = styled.img(defaultAttrs);
