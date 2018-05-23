import reducer, { INCREMENT, DECREMENT } from ".";
describe("module", () => {
  it("initial", () => {
    expect(reducer(undefined, {})).toEqual({
      count: 56
    });
  });
  it("increment", () => {
    expect(reducer({ count: 56 }, { type: INCREMENT })).toEqual({
      count: 57
    });
  });
  it("decrement", () => {
    expect(reducer({ count: 56 }, { type: DECREMENT })).toEqual({
      count: 55
    });
  });
});
