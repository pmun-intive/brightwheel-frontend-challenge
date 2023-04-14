import { render, screen } from "@testing-library/react";
import Spinner from "@components/icon/spinner";

describe("Spinners", () => {
  it("renders a spinner svg with accessible name", () => {
    render(<Spinner />);

    const spinIcon = screen.getByRole("icon");

    expect(spinIcon).toHaveAccessibleName();
    expect(spinIcon).toMatchSnapshot();
  });

  it("renders a spinner svg with props width and height", () => {
    render(<Spinner height="250px" width="250px" />);

    const spinIcon = screen.getByRole("icon");

    expect(spinIcon).toHaveAttribute("width", "250px");
    expect(spinIcon).toHaveAttribute("height", "250px");
  });
});
