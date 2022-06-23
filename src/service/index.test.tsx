import { render, screen } from "@testing-library/react";
import React from "react";
import {
  GetCryptoItems,
  PostSoldItems,
  GetSoldtems,
  GetPurchasedItems,
  PostPurchasedItems,
} from "./index";
import "@testing-library/jest-dom";

describe("Service", () => {
  it("should test crypto items data", () => {
    const inputElement = GetCryptoItems().then((res) => {
      return res.data;
    });
    expect(inputElement).size == 16;
  });

  it("should test sold items data", () => {
    const inputElement = GetSoldtems().then((res) => {
      return res.data;
    });

    const testElement = PostSoldItems("sold").then((res) => {
      return res.data.length;
    });

    expect(inputElement).size + 1 == testElement;
  });

  it("should test purchased items data", () => {
    const inputElement = GetPurchasedItems().then((res) => {
      return res.data;
    });

    const testElement = PostPurchasedItems("sold").then((res) => {
      return res.data.length;
    });

    expect(inputElement).size + 1 == testElement;
  });
});
