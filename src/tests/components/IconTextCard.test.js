import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faHeart } from "@fortawesome/free-solid-svg-icons";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import IconTextCard from "../../components/card/iconTextCard/IconTextCard";

describe("IconTextCard", () => {
  let icons, text;

  beforeEach(() => {
    icons = [];
    icons.push(<FontAwesomeIcon icon={faHeart} />);
    text = "sample text";
  });

  it("returns a card element with an icon and text", () => {
    render(<IconTextCard icons={icons} text={text} />);

    const renderedIcons = screen.getAllByRole("img", { hidden: true });
    const renderedText = screen.queryByText("sample text");

    expect(renderedIcons.length).toBe(1);
    expect(renderedIcons[0]).toHaveClass("fa-heart");
    expect(renderedText).toHaveTextContent("sample text");
  });

  it("returns a card element with two icons and text", () => {
    icons.push(<FontAwesomeIcon icon={faCode} />);
    render(<IconTextCard icons={icons} text={text} />);

    const renderedIcons = screen.getAllByRole("img", { hidden: true });
    const renderedText = screen.queryByText("sample text");

    expect(renderedIcons.length).toBe(2);
    expect(renderedIcons[0]).toHaveClass("fa-heart");
    expect(renderedIcons[1]).toHaveClass("fa-code");
    expect(renderedText).toHaveTextContent("sample text");
  });
});
