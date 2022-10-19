const PRIMARY_COLOR = "var(--primary)";

const flexbox = {
  flex: true,
  column: true,
  alignItems: "center",
  justifyContent: "center",
};

const resizer = {
  fullWidth: true,
  fullHeight: true,
};

const spacer = {
  margin: 1,
  mt: 1,
  mr: 1,
  mb: 1,
  ml: 1,
  padding: 1,
  pt: 1,
  pr: 1,
  pb: 1,
  pl: 1,
};

const fontConfig = {
  fontWeight: 500,
  cursor: "pointer",
  textAlign: "center",
};

const colors = {
  background: PRIMARY_COLOR,
  color: PRIMARY_COLOR,
  fill: PRIMARY_COLOR,
};

export const defaultAttrs = {
  ...resizer,
  ...spacer,
};

export const flexAttrs = {
  ...defaultAttrs,
  ...flexbox,
};

export const textAttrs = {
  ...defaultAttrs,
  ...fontConfig,
  ...colors,
};
