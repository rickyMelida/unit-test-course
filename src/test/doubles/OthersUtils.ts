import { calculateComplexity, toUpperCaseWithCb } from "../../app/doubles/OthersUtils";

describe("OthersUtils tests suite", () => {
    it('ToUpperCase - calls callback for invalid arguments', () => {
        const actual = toUpperCaseWithCb('', () => {});
        expect(actual).toBeUndefined();
    });

    it('ToUpperCase - calls callback for valid arguments', () => {
        const actual = toUpperCaseWithCb('abc', () => {});
        expect(actual).toBe('ABC');
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
