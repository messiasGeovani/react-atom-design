export interface ISpacerProps {
  margin?: number;
  mt?: number;
  mr?: number;
  mb?: number;
  ml?: number;
  padding?: number;
  pt?: number;
  pr?: number;
  pb?: number;
  pl?: number;
}

function spacing(size?: number) {
  if (!size) {
    return;
  }

  return `calc(${size}px + 1vw)`;
}

export const spacer = (props: ISpacerProps) => ({
  margin: spacing(props.margin),
  marginTop: spacing(props.mt),
  marginRight: spacing(props.mr),
  marginBottom: spacing(props.mb),
  marginLeft: spacing(props.ml),
  padding: spacing(props.padding),
  paddingTop: spacing(props.pt),
  paddingRight: spacing(props.pr),
  paddingBottom: spacing(props.pb),
  paddingLeft: spacing(props.pl),
});
