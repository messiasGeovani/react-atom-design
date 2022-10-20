import "@testing-library/jest-dom";

import { render, screen, userEvent } from "__tests__/config";

import {
  BaseButton,
  BaseDiv,
  BaseForm,
  BaseInput,
  BaseLabel,
  BaseSpan,
  BaseText,
  TDefaultAttrsProps,
  TFlexAttrsProps,
  TTextAttrsProps,
} from "@components/Base";

import { defaultAttrs, flexAttrs, textAttrs } from "__tests__/config/baseProps";

import { colors, flexbox, fontConfig, resizer, spacer } from "@/utils";
import { testRenderization, testStyles } from "__tests__/config/testUtils";

describe("<BaseDiv />", () => {
  const testId = "base-div";

  it("loads and displays any content", () => {
    const divContent = "Base Div";
    const match = new RegExp(`^${divContent}$`);

    testRenderization(testId, BaseDiv, divContent, match);
  });

  it("check if element style props is working", () => {
    const props = flexAttrs as TFlexAttrsProps;
    const styleUtils = [resizer, spacer, flexbox];

    testStyles(testId, BaseDiv, props, styleUtils);
  });
});

describe("<BaseSpan />", () => {
  const testId = "base-span";

  it("loads and displays any content", () => {
    const spanContent = "Base Span";
    const match = new RegExp(`^${spanContent}$`);

    testRenderization(testId, BaseSpan, spanContent, match);
  });

  it("check if element style props is working", () => {
    const props = flexAttrs as TFlexAttrsProps;
    const styleUtils = [resizer, spacer, flexbox];

    testStyles(testId, BaseSpan, props, styleUtils);
  });
});

describe("<BaseInput />", () => {
  const testId = "base-input";

  it("loads and displays any content", () => {
    testRenderization(testId, BaseInput);
  });

  it("should change input value", () => {
    const inputTextValue = "Base{space}Input";
    const match = "Base Input";

    render(<BaseInput data-testid={testId} />);

    const input = screen.getByTestId(testId);
    userEvent.type(input, inputTextValue);

    expect(input).toHaveValue(match);
  });

  it("check if element style props is working", () => {
    const props = defaultAttrs as TDefaultAttrsProps;
    const styleUtils = [resizer];

    testStyles(testId, BaseInput, props, styleUtils);
  });
});

describe("<BaseText />", () => {
  const testId = "base-text";

  it("loads and displays any content", () => {
    const textContent = "Base Text";
    const match = new RegExp(`^${textContent}$`);

    testRenderization(testId, BaseText, textContent, match);
  });

  it("check if element style props is working", () => {
    const props = textAttrs as TTextAttrsProps;
    const styleUtils = [resizer, spacer, fontConfig, colors];

    testStyles(testId, BaseText, props, styleUtils);
  });
});

describe("<BaseLabel />", () => {
  const testId = "base-label";

  it("loads and displays any content", () => {
    const textContent = "Base Label";
    const match = new RegExp(`^${textContent}$`);

    testRenderization(testId, BaseLabel, textContent, match);
  });

  it("check if element style props is working", () => {
    const props = textAttrs as TTextAttrsProps;
    const styleUtils = [resizer, spacer, fontConfig, colors];

    testStyles(testId, BaseLabel, props, styleUtils);
  });
});

describe("<BaseButton />", () => {
  const testId = "base-button";

  it("loads and displays any content", () => {
    const buttonContent = "Base Button";
    const match = new RegExp(`^${buttonContent}$`);

    testRenderization(testId, BaseButton, buttonContent, match);
  });

  it("check if element style props is working", () => {
    const props = defaultAttrs as TDefaultAttrsProps;
    const styleUtils = [resizer];

    testStyles(testId, BaseButton, props, styleUtils);
  });
});

describe("<BaseForm />", () => {
  const testId = "base-form";

  it("loads and displays any content", () => {
    const formContent = "Base Form";
    const match = new RegExp(`^${formContent}$`);

    testRenderization(testId, BaseForm, formContent, match);
  });

  it("check if element style props is working", () => {
    const props = flexAttrs as TFlexAttrsProps;
    const styleUtils = [resizer, spacer, flexbox];

    testStyles(testId, BaseForm, props, styleUtils);
  });
});
