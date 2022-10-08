import React from "react";
import "@testing-library/jest-dom";

import { render, screen } from "../../../../config";

import { Typography } from "@components/atoms";

const setup = ({ text }: any) => render(<Typography>{text}</Typography>);

describe("<Typography />", () => {
  it("loads and displays any text", async () => {
    const text = "Typography";
    const match = new RegExp(`^${text}$`);

    setup({ text });

    expect(screen.getByText(match)).toBeInTheDocument();
  });
});
