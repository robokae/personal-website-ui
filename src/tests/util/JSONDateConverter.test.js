import JSONDateConverter from "../../util/JSONDateConverter";

describe("JSONDateConverter", () => {
  const date = "2022-10-02T21:23:51.421+00:00";
  let jsonDateConverter = new JSONDateConverter(date);
  let formattedDate;

  it("displays the formatted numerical date", () => {
    formattedDate = jsonDateConverter.toNumericDate();
    expect(formattedDate).toBe("10/2/2022");
  });

  it("displays the fully formatted date", () => {
    formattedDate = jsonDateConverter.toFullDate();
    expect(formattedDate).toBe("October 2, 2022");
  });
});
