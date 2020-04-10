import {
  pipe,
  map,
  find,
  filter,
  findIndex,
  join
} from "../../src/operators";

test("Operators - number = appendCurrency ", () => {
  expect(pipe(map(el => el * 2))([10])).toEqual([20]);
  expect(pipe(map(el => el + "a"))(["test"])).toEqual(["testa"]);

  expect(pipe(filter(el => el === "test"))(["test"])).toEqual(["test"]);

  expect(pipe(find(el => el === "test"))(["test"])).toEqual("test");

  expect(pipe(findIndex(el => el === "test"))(["test"])).toEqual(0);

  expect(pipe(join(""))(["test", "a"])).toBe("testa");
});

// export const flat = (depth?) => (value: Array<any>) => {
//   return value.flat(depth);
// };

// export const flatMap = <T>(callbackfn) => (value: any[]) => {
//   return value.flatMap<T>(callbackfn);
// };

// expect(pipe(flat([[["test"]]]))).toEqual(["test"]);
