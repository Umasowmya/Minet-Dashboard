import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import CryptoCard from "./index";
import "@testing-library/jest-dom";
import explore from "../../../assets/explore.png";
import { Button } from "@mui/material";

const mockFunction = jest.fn();

describe("ButtonCard", () => {
  it("should render Bitcoin element", () => {
    render(
      <CryptoCard
        id={1}
        image={explore}
        title="Bitcoin"
        price="$3,406,069.54"
      />
    );
    const inputElement = screen.getByRole("cryptoCard");
    expect(inputElement).toBeInTheDocument();
  });

  it("should render Crypto element", () => {
    render(
      <CryptoCard
        id={1}
        image={explore}
        title="Bitcoin"
        price="$3,406,069.54"
      />
    );
    const buttonElement = screen.getByRole("cryptoCard");
    fireEvent.click(buttonElement);
    expect(buttonElement).toBeInTheDocument();
  });
});
