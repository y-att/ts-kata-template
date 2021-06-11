import returnClosestMultiple10 from "./returnclosestmultiple";

test("returns closest multiple of 10", () => {
  expect(returnClosestMultiple10(19)).toBe(20);
  expect(returnClosestMultiple10(4)).toBe(0);
  expect(returnClosestMultiple10(453)).toBe(450);
});
