import { toNumericDate, toFullDate } from "../../util/DateUtil";

describe("DateUtil", () => {
  const date = "2022-10-02T21:23:51.421+00:00";
  let formattedDate;

  it("displays the formatted numerical date", () => {
    formattedDate = toNumericDate(date);
    expect(formattedDate).toBe("10/2/2022");
  });

  it("displays the fully formatted date", () => {
    formattedDate = toFullDate(date);
    expect(formattedDate).toBe("October 2, 2022");
  });
});
