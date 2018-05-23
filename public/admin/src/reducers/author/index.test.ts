import reducer, { SET_NAME } from ".";
describe("module", () => {
  it("initial", () => {
    expect(reducer(undefined, {})).toEqual({ name: "" });
  });
  it("set name", () => {
    expect(
      reducer({ name: "" }, { type: SET_NAME, payload: "jeff chung" })
    ).toEqual({ name: "jeff chung" });
  });
});
