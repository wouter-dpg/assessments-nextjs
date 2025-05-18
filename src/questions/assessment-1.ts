import { assert } from "./utils/assert";
// Transform the following object into an array of names and filter out the ones with no age property.
// You can run this script with:
// ASSESSMENT=1 npm run assessment

const data = {
  John: { age: 30 },
  Jane: { age: 25 },
  Bob: { age: 35 },
  Alice: { age: 28 },
  Charlie: {},
  David: { age: 40 },
  Eve: { age: 29 },
  Frank: { age: 33 },
  Grace: { age: 27 },
  Hannah: { age: 31 },
  Isaac: {},
  Jack: { age: 32 },
  Kelly: { age: 24 },
};

const result: string[] = [];

assert(
  Array.isArray(result) && result.every((name) => typeof name === "string"),
  "Result should be an array of strings"
);
assert(result.length === 11, "Name count should be 11");
assert(result.includes("John"), "John should be included");
assert(!result.includes("Charlie"), "Charlie should be excluded");
assert(!result.includes("Isaac"), "Isaac should be excluded");
