import React from "react";
import "@testing-library/jest-dom";

import { render, screen, userEvent } from "../../index";

import { BaseButton } from "@components/Base";

const setup = () => render(<BaseButton>seila</BaseButton>);

describe("<BaseButton />", () => {
  it("loads and displays any value", async () => {
    setup();
    
    await screen.findByRole("button");

    expect(screen.getByRole("button")).toHaveTextContent("seila");
  });
});
