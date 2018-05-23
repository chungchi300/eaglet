import { getAuthorType, numberType } from ".";

describe("util", () => {
  it("author", () => {
    expect(getAuthorType("")).toBe("");
    expect(getAuthorType("jeff")).toBe("Ninja - ");
    expect(getAuthorType("daniel")).toBe("Normal - ");
  });
  it("number type", () => {
    expect(numberType(0)).toBe("even");
    expect(numberType(1)).toBe("odd");
    expect(numberType(2)).toBe("even");
  });
});
