import { render, screen } from "@testing-library/react";
import Star from "@components/icon/star";

describe("icon", () => {
  it("renders a star svg with accessible name", () => {
    render(<Star />);

    const spinIcon = screen.getByRole("icon");

    expect(spinIcon).toHaveAccessibleName();
    expect(spinIcon).toMatchSnapshot();
  });

  it("renders a star svg with props width and height", () => {
    render(<Star height="250px" width="250px" />);

    const spinIcon = screen.getByRole("icon");

    expect(spinIcon).toHaveAttribute("width", "250px");
    expect(spinIcon).toHaveAttribute("height", "250px");
  });
});
