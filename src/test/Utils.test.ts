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

  describe('getStringInfo for My-string should', () => {
    test('return right length', () => {
      const actual = getStringInfo("My-string");
      expect(actual.characters).toHaveLength(9);
    });
    test('return right lower case', () => {
      const actual = getStringInfo("My-string");
      expect(actual.lowerCase).toBe("my-string");
    });
    test('return right upper case', () => {
      const actual = getStringInfo("My-string");
      expect(actual.upperCase).toBe("MY-STRING");
    });
    test('return right characters', () => {
      const actual = getStringInfo("My-string");
      expect(actual.characters).toEqual(["M","y","-","s","t","r","i","n","g"]);
      expect(actual.characters).toContain<string>('M');
      expect(actual.characters).toEqual(
        expect.arrayContaining(["s","t","r","i","n","g","M","y","-"])
      );
    });
    test('return defined extra info', () => {
      const actual = getStringInfo("My-string");
      expect(actual.characters).toBeDefined();
    });
    test('return right extra info', () => {
      const actual = getStringInfo("My-string");
      expect(actual.extraInfo).toEqual({});
    });

  });
});
