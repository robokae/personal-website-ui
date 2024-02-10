import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Typography from "../../components/typography/Typography";

describe("Typography", () => {
  const testText = "test";

  it("returns an H1 element with the text centered", () => {
    render(
      <Typography tag="h1" textAlign="center">
        {testText}
      </Typography>
    );
    const renderedElement = screen.getByRole("heading", { level: 1 });
    expect(renderedElement).toBeInTheDocument();
    expect(renderedElement).toHaveTextContent("test");
    expect(renderedElement).toHaveStyle("text-align: center");
  });

  it("returns an H2 element with the text left aligned", () => {
    render(
      <Typography tag="h2" textAlign="left">
        {testText}
      </Typography>
    );
    const renderedElement = screen.getByRole("heading", { level: 2 });
    expect(renderedElement).toBeInTheDocument();
    expect(renderedElement).toHaveTextContent("test");
    expect(renderedElement).toHaveStyle("text-align: left");
  });

  it("returns an H3 element with the text right aligned", () => {
    render(
      <Typography tag="h3" textAlign="right">
        {testText}
      </Typography>
    );
    const renderedElement = screen.getByRole("heading", { level: 3 });
    expect(renderedElement).toBeInTheDocument();
    expect(renderedElement).toHaveTextContent("test");
    expect(renderedElement).toHaveStyle("text-align: right");
  });

  it("throws an error when the tag prop is invalid", () => {
    expect(() => render(<Typography tag="123">{testText}</Typography>)).toThrow(
      DOMException
    );
  });
});
