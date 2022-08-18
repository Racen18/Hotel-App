import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import FormikValidationForm from "../components/page/FormikValidationForm";
import store from "../store";

describe("FormikValidationForm Component", () => {
  test("should check whether formikvalidationform has title", () => {
    render(
      <Provider store={store}>
        <Router>
          <FormikValidationForm />
        </Router>
      </Provider>
    );
    const outputElement = screen.getByText("Master rate card form");
    expect(outputElement).toBeInTheDocument();
  });
});
