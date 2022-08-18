import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter as Router } from "react-router-dom";
import Topbar from "../components/page/Topbar";

describe("Topbar Component", () => {
  test("should check whether topbar has button", () => {
    render(
      <Router>
        <Topbar />
      </Router>
    );
    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toBeInTheDocument();
  });
  test("should check whether topbar has image", () => {
    render(
      <Router>
        <Topbar />
      </Router>
    );
    const outputElement = screen.getByRole("img");
    expect(outputElement).toBeInTheDocument();
  });
  test("should check whether topbar has text", () => {
    render(
      <Router>
        <Topbar />
      </Router>
    );
    const outputElement = screen.getByText("HOTEL TEAM");
    expect(outputElement).toBeInTheDocument();
  });
  test("should check whether button in the topbar is clicked", () => {
    render(
      <Router>
        <Topbar />
      </Router>
    );
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);
    const outputElement = screen.queryByText("Add customers +");
    expect(outputElement).toBeInTheDocument();
  });
});
