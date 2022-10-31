import { ThunderIcon } from "@/components/atoms";
import { spacer } from "@/utils";
import { screen } from "__tests__/config";
import { spacerObj } from "__tests__/config/baseProps";
import { testRenderization, testStyles } from "__tests__/config/testUtils";

describe("<ThunderIcon />", () => {
  const testId = "google-icon";

  it("should render correctly", () => {
    testRenderization(testId, ThunderIcon);
  });

  it("should change size and space props", () => {
    const props = {
      size: 100,
      ...spacerObj,
    };

    const styleUtils = [spacer];

    testStyles(testId, ThunderIcon, props, styleUtils);

    const element = screen.getByTestId(testId);

    expect(element).toHaveStyle({
      height: props.size,
      width: props.size,
    });
  });
});
