import { getStringInfo, toUpperCase } from "../app/Utils";

describe("Utils test suite", () => {
  it("Should return uppercase of valida string", () => {
    // arrange:
    const sut = toUpperCase;
    const expected = "ABC";

    // act:
    const actual = sut("abc");

    // assert
    expect(actual).toBe(expected);
  });

  it.only("Should return info for valid string", () => {
    const actual = getStringInfo("My-string");

    expect(actual.lowerCase).toBe("my-string");
    expect(actual.extraInfo).toEqual({});
    expect(actual.characters).toHaveLength(9);
    expect(actual.characters).toEqual(["M","y","-","s","t","r","i","n","g"]);
    expect(actual.characters).toContain<string>('M');
    expect(actual.characters).toEqual(
      expect.arrayContaining(["s","t","r","i","n","g","M","y","-"])
    );
    expect(actual.characters).not.toBe(undefined);
    expect(actual.characters).not.toBeUndefined();
    expect(actual.characters).toBeDefined();
    expect(actual.characters).toBeTruthy();

  });
});
