import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getIcon } from "../../util/IconUtil";

describe("IconUtil", () => {
  let name, type;

  beforeEach(() => {
    name = "CODE_ICON";
    type = "fontawesome";
  });

  it("returns the correct icon object given the name and type", () => {
    let expectedIcon = <FontAwesomeIcon icon={["fas", "code"]} />;
    let actualIcon = getIcon(name, type);
    expect(actualIcon).toStrictEqual(expectedIcon);

    name = "GITHUB_ICON";
    expectedIcon = <FontAwesomeIcon icon={["fab", "github"]} />;
    actualIcon = getIcon(name, type);
    expect(actualIcon).toStrictEqual(expectedIcon);
  });

  it("returns the icon object with the default type when no type is specified", () => {
    const expectedIcon = <FontAwesomeIcon icon={["fas", "code"]} />;
    const actualIcon = getIcon(name);
    expect(actualIcon).toStrictEqual(expectedIcon);
  });

  it("throws an error given an incorrect icon type", () => {
    type = "abc";
    expect(() => getIcon(name, type)).toThrowError(
      "Icon type is not supported"
    );
  });

  it("throws an error given an incorrect icon name", () => {
    name = "abc";
    expect(() => getIcon(name, type)).toThrowError(/Icon not found/);
  });
});
