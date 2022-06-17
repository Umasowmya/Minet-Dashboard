import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import "@testing-library/jest-dom";
import ReactDOM from "react-dom";

test("renders navigation bar", () => {
  render(<App />);
  const navbarElement = screen.getByRole("Navbar");
  expect(navbarElement).toBeInTheDocument();
});

test("renders sidebar bar", () => {
  render(<App />);
  const sidebarElement = screen.getByRole("Sidebar");
  expect(sidebarElement).toBeInTheDocument();
});

test("renders footer element", () => {
  render(<App />);
  const footerElement = screen.getByRole("Footer");
  expect(footerElement).toBeInTheDocument();
});
