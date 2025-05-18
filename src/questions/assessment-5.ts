import { assert } from "./utils/assert";
// Implement methods: set, get and remove for the following function and adjust the type of the store.
// You can run this script with:
// ASSESSMENT=5 npm run assessment

class KeyValueStore<K extends string | number, V> {
  // Implement type for the store
  // Implement methods: set, get, remove
}

interface User {
  id: number;
  name: string;
}

const store = new KeyValueStore<string, User>();
store.set("user1", { id: 1, name: "Alice" });

assert(
  store.get("user1")?.name === "Alice",
  "Should be able to set and get a value"
);

assert(
  store.get("user2") === undefined,
  "Should return undefined for non-existing keys"
);

store.remove("user1");

assert(
  store.get("user1") === undefined,
  "Should return undefined for removed keys"
);
