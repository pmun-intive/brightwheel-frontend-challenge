import { fireEvent, render, screen } from "@testing-library/react";
import { PrimaryButton } from "@components/button/styled";
import Theme from "@styles/theme";
import Input from "@components/input";
import React from "react";
import { ThemeProvider } from "styled-components";

describe("Input", () => {
  let value = "";
  const setValueMock = jest.fn((stateValue) => (value = stateValue));

  it("should renders a input", () => {
    render(
      <ThemeProvider theme={Theme}>
        <Input
          id="test"
          label="search test"
          setValue={setValueMock}
          value={value}
        />
      </ThemeProvider>
    );

    const input = screen.getByRole("textbox", {
      name: /search test/i,
    });

    expect(input).toBeInTheDocument();
  });

  it("should renders a input with value", () => {
    render(
      <ThemeProvider theme={Theme}>
        <Input
          id="test"
          label="search test"
          setValue={setValueMock}
          value={value}
        />
      </ThemeProvider>
    );

    const input = screen.getByRole("textbox", {
      name: /search test/i,
    });

    fireEvent.change(input, { target: { value: "company1" } });

    expect(setValueMock).toBeCalled();
    expect(value).toBe("company1");
    expect(input).toBeInTheDocument();
  });
});
