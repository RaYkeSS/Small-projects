const lookup = require("./lookup");

describe("Lookup", () => {
  test("1", () => {
    const actual = lookup("norvig", "likes");
    const expected = ["AI", "Search", "NASA", "Mars"];

    expect(actual).toEqual(expected);
  });

  test("2", () => {
    const actual = lookup("knuth", "lastName");
    const expected = "Knuth";

    expect(actual).toEqual(expected);
  });

  test("3 with error", () => {
    expect(() => lookup("nobody", "likes")).toThrow(/Could not find user/);
  });

  test("4 with error", () => {
    expect(() => lookup("mfowler", "noprop")).toThrow(
      /Could not find property/
    );
  });
});
