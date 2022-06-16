import { render, screen } from "@testing-library/react";
import React from "react";
import SpeedDelivery from "./index";
import "@testing-library/jest-dom";

describe("SpeedDelivery", () => {
  it("should render SpeedDelivery element", () => {
    render(<SpeedDelivery />);
    const inputElement = screen.getByRole("SpeedDelivery");
    expect(inputElement).toBeInTheDocument();
  });
});
