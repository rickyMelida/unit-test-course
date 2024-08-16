import {
  calculateComplexity,
  toUpperCaseWithCb,
} from "../../app/doubles/OthersUtils";

describe("OthersUtils tests suite", () => {
  describe("Tracking callbacks with Jest mocks", () => {
    const callBackMock = jest.fn();

    afterEach(() =>{
        jest.clearAllMocks();
    })
    it("ToUpperCase - calls callback for invalid arguments - track calls", () => {
      const actual = toUpperCaseWithCb("", callBackMock);
      expect(actual).toBeUndefined();
      expect(callBackMock).toHaveBeenCalledWith("Invalid argument!");
      expect(callBackMock).toHaveBeenCalledTimes(1);
    });

    it("ToUpperCase - calls callback for valid arguments - track calls", () => {
      const actual = toUpperCaseWithCb("abc", callBackMock);
      expect(actual).toBe("ABC");
      expect(callBackMock).toHaveBeenCalledWith("Called function with abc");
      expect(callBackMock).toHaveBeenCalledTimes(1);
    });
  });
  describe("Tracking callbacks", () => {
    let cbArgs: string[] = [];
    let timeCalled = 0;
    function callBackMock(arg: string) {
      cbArgs.push(arg);
      timeCalled++;
    }

    afterEach(() => {
      cbArgs = [];
      timeCalled = 0;
    });

    it("ToUpperCase - calls callback for invalid arguments - track calls", () => {
      const actual = toUpperCaseWithCb("", callBackMock);
      expect(actual).toBeUndefined();
      expect(cbArgs).toContain("Invalid argument!");
      expect(timeCalled).toBe(1);
    });

    it("ToUpperCase - calls callback for valid arguments - track calls", () => {
      const actual = toUpperCaseWithCb("abc", callBackMock);
      expect(actual).toBe("ABC");
      expect(cbArgs).toContain("Called function with abc");
      expect(timeCalled).toBe(1);
    });
  });

  it("ToUpperCase - calls callback for invalid arguments", () => {
    const actual = toUpperCaseWithCb("", () => {});
    expect(actual).toBeUndefined();
  });

  it("ToUpperCase - calls callback for valid arguments", () => {
    const actual = toUpperCaseWithCb("abc", () => {});
    expect(actual).toBe("ABC");
  });

  it("Calcula complexity", () => {
    const someInfo = {
      length: 5,
      extraInfo: {
        field1: "some info",
        field2: "some other info",
      },
    };

    const actual = calculateComplexity(someInfo as any);

    expect(actual).toBe(10);
  });
});
