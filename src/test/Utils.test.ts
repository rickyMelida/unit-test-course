import { getStringInfo, StringUtils, toUpperCase } from "../app/Utils";

describe("Utils test suite", () => {

  describe.only('StringUtils tests', () => {
    let sut: StringUtils;

    beforeEach(() => {
      sut = new StringUtils();
    });
                       
    it.only('Should return correct uppercase', () => {
      const actual = sut.toUpperCase('abc');
      expect(actual).toBe('ABC'); 
    });

    it('Should throw error on invalid argument - function', () => {
      function expectError() {
        const actual = sut.toUpperCase('');
      }
      expect(expectError).toThrow();
    });

    it('Should throw error on invalid argument - arrow function', () => {
      expect(() => {
        sut.toUpperCase('');
      }).toThrow();
    });

    it('Should throw error on invalid argument - try catch block', (done) => {
      try {
        sut.toUpperCase('');
        //done('GetStringInfo should throw error for invalid arg!')
      } catch (error) {
        expect(error).toBeInstanceOf(Error);
        expect(error).toHaveProperty('message', 'Invalid argument!');
        done();
      }
    });

  })


  it("Should return uppercase of valida string", () => {
    // arrange:
    const sut = toUpperCase;
    const expected = "ABC";

    // act:
    const actual = sut("abc");

    // assert
    expect(actual).toBe(expected);
  });

  describe('toUpperCase examples', ()=>{
    it.each([
      {input:'abc', expected:'ABC'},
      {input:'my-string', expected:'MY-STRING'},
      {input:'def', expected:'DEF'}
    ])('$input toUpperCase should be $expected', ({input, expected})=>{
      const actual = toUpperCase(input);
      expect(actual).toBe(expected);
    })
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
