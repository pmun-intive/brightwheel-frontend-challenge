import { render, screen } from "@testing-library/react";
import { PrimaryButton } from "@components/button/styled";
import Theme from "@styles/theme";

describe("Button", () => {
  it("should renders a button", () => {
    render(<PrimaryButton theme={Theme}>Testing Button</PrimaryButton>);

    const button = screen.getByRole("button", {
      name: /testing button/i,
    });

    expect(button).toBeInTheDocument();
  });

  it("should have disabled attribute", () => {
    render(
      <PrimaryButton disabled theme={Theme}>
        Testing Button
      </PrimaryButton>
    );

    const button = screen.getByRole("button", {
      name: /testing button/i,
    });

    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute("disabled");
  });
});
