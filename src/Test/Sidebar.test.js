import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Sidebar from "../components/page/Sidebar";

describe("Sidebar Component", () => {
  test("should check sidebar has daily indents button", () => {
    render(
      <Router>
        <Sidebar />
      </Router>
    );
    const outputElement = screen.getByText(/daily indents/i, { exact: false });
    expect(outputElement).toBeInTheDocument();
  });
});
