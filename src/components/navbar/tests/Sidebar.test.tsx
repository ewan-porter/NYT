import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Sidebar from "../Sidebar";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";

const mockedUsedNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...(jest.requireActual("react-router-dom") as any),
  useNavigate: () => mockedUsedNavigate,
}));

test("displays home link", async () => {
  render(
    <BrowserRouter>
      <Sidebar />
    </BrowserRouter>
  );
  await screen.getAllByRole("link");
  expect(screen.getAllByRole("link")[0]).toHaveAttribute("href", "/");
});

test("arrow button displays sidebar link labels", async () => {
  render(
    <BrowserRouter>
      <Sidebar />
    </BrowserRouter>
  );
  await userEvent.click(screen.getByRole("button"));

  await screen.getByText("Home");
  expect(screen.getByText("Home")).toBeInTheDocument();
});
