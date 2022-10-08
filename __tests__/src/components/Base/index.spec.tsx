import React from "react";
import "@testing-library/jest-dom";

import { render, screen } from "__tests__/config";

import { BaseDiv, BaseButton } from "@components/Base";
import { defaultAttrs } from "__tests__/config/baseProps";

function checkStyles(props: any) {
  
}

describe("<BaseDiv />", () => {
  it("loads and displays any content", () => {
    const divContent = "Base Div";

    render(<BaseDiv>{divContent}</BaseDiv>);

    expect(screen.getByText(divContent)).toBeInTheDocument();
  });

  it("should check if elements props is working", () => {
    const props = defaultAttrs;
    render(<BaseDiv {...props} />);

    expect(BaseDiv).toHaveBeenCalledWith(props);
  });
});

describe("<BaseButton />", () => {
  it("loads and displays any content", () => {
    const buttonTextContent = "Base Button";
    const match = new RegExp(`^${buttonTextContent}$`);

    render(<BaseButton>{buttonTextContent}</BaseButton>);

    expect(screen.getByRole("button")).toHaveTextContent(match);
  });
});
