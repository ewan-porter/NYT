import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Navbar from "../Navbar";
import React from "react";

// A few basic unit tests

test("displays business name", async () => {
  render(<Navbar />);
  await screen.findByRole("heading");
  expect(screen.getByRole("heading")).toHaveTextContent("RADICAL");
});

test("displays user icon", async () => {
  render(<Navbar />);
  await screen.findByRole("img");
  expect(screen.getByRole("img")).toHaveAttribute("src");
});
