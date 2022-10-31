import { Separator } from "@/components/atoms";
import { colors, spacer } from "@/utils";
import { colorsObj, spacerObj } from "__tests__/config/baseProps";
import { testRenderization, testStyles } from "__tests__/config/testUtils";

describe("<Separator />", () => {
  const testId = "separator";

  it("loads and displays any text", async () => {
    testRenderization(testId, Separator);
  });

  it("check if element style props is working", () => {
    const props = { ...spacerObj, ...colorsObj };
    const styleUtils = [spacer, colors];

    testStyles(testId, Separator, props, styleUtils);
  });
});
