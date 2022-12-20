import { countWords } from "../index";

describe("The countWords function", function () {
  test("it should return []", function () {
    expect(countWords("", 3)).toStrictEqual([]);
  });
  test("it should return []", function () {
    expect(countWords("", -10)).toStrictEqual([]);
  });
  test("it should return [ [ 'hello', 1 ] ]", function () {
    expect(countWords("hello", 3)).toStrictEqual([["hello", 1]]);
  });
  test("it should return [ [ 'zblah', 3 ], [ 'bar', 2 ], [ 'baz', 2 ] ]", function () {
    expect(
      countWords("baz bar foo foo zblah zblah zblah baz toto bar", 3)
    ).toStrictEqual([
      ["zblah", 3],
      ["bar", 2],
      ["baz", 2],
    ]);
  });
});
