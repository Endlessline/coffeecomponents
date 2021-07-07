import { BeanCounter } from "../../src/components/BeanCounter.ts";

it("roasts beans", () => {
  const bc = new BeanCounter(4, true);
  expect(bc._hasRoasted).toBeTruthy();
});
it("cant roast beans", () => {
  const bc = new BeanCounter(4, false);
  expect(bc._hasRoasted).toBeFalsy();
});

it("fills the correct number of beans", () => {
  const bc = new BeanCounter(34, true);

  expect(bc._fillBean()).toBeCalledTimes(34);
});
