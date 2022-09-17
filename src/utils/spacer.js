function spacing(size) {
  if (!size) {
    return;
  }

  return `calc(${size}px + 1vw)`;
}

export const spacer = (props) => ({
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
