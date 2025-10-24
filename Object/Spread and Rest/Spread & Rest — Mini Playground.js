// ======================
// Tiny test harness
// ======================
const eq = (a, b) => JSON.stringify(a) === JSON.stringify(b);
const test = (name, got, expected) =>
  console.log(
    `${eq(got, expected) ? "✅" : "❌"} ${name}`,
    eq(got, expected)
      ? ""
      : `\n   got:      ${JSON.stringify(got)}\n   expected: ${JSON.stringify(
          expected
        )}`
  );

// ======================
// 0) Warm-up references (you can edit)
// ======================
const nums = [3, 1, 4];
const user = { id: 7, name: "Ava", role: "dev" };

// ======================
// 1) SPREAD: copy an array (not the same reference)
// Your turn: create 'numsCopy' using spread so it's equal in value
// but not the same reference as 'nums'.
// ======================
const numsCopy = /* TODO */ [...nums];
test("1) spread array copy value equality", numsCopy, [3, 1, 4]);
console.log("   same reference?", numsCopy === nums); // should be false

// ======================
// 2) SPREAD: append items to an array
// Create 'moreNums' that starts with 0, then all nums, then 9
// ======================
const moreNums = /* TODO */ [0, ...nums, 9];
test("2) append with spread", moreNums, [0, 3, 1, 4, 9]);

// ======================
// 3) SPREAD: clone + override object fields
// Make 'user2' same as 'user' but role='admin' and add active=true
// (Hint: order matters when overriding.)
// ======================
const user2 = /* TODO */ { ...user, role: "admin", active: true };
test("3) object spread override", user2, {
  id: 7,
  name: "Ava",
  role: "admin",
  active: true,
});

// ======================
// 4) REST (functions): sum any number of args
// Implement sum(...xs) to add all arguments
// ======================
function sum(/* TODO */ ...xs) {
  return xs.reduce((a, b) => a + b, 0);
}
test("4) sum variadic", sum(1, 2, 3, 4), 10);

// ======================
// 5) REST (destructuring arrays): first, second, rest
// Pull out a, b and the rest 'tail' from arr
// ======================
const arr = ["red", "green", "blue", "yellow"];
const [a, b, ...tail] = /* TODO */ arr;
test("5a) a", a, "red");
test("5b) b", b, "green");
test("5c) tail", tail, ["blue", "yellow"]);

// ======================
// 6) REST (destructuring objects): peel off a field
// From 'user2', take 'role' and put the rest into 'userSansRole'.
// ======================
const { role, ...userSansRole } = /* TODO */ user2;
test("6) remove prop via rest", userSansRole, {
  id: 7,
  name: "Ava",
  active: true,
});

// ======================
// 7) SPREAD: merge arrays immutably inside an object
// Given 'state', create 'state2' with todos extended by ["ship"]
// without mutating 'state'.
// ======================
const state = { todos: ["build", "test"], filter: "all" };
const state2 = /* TODO */ { ...state, todos: [...state.todos, "ship"] };
test("7a) state unchanged", state, { todos: ["build", "test"], filter: "all" });
test("7b) state2 merged", state2, {
  todos: ["build", "test", "ship"],
  filter: "all",
});

// ======================
// 8) REST params + SPREAD call: safeMin
// Implement safeMin(head, ...rest) that returns the minimum of all args,
// but throws if called with no args.
// ======================
function safeMin(/* TODO */ head, ...rest) {
  if (head === undefined) throw new Error("Need at least one number");
  return rest.reduce((m, x) => (x < m ? x : m), head);
}
test("8) safeMin", safeMin(8, 5, 9, 2, 6), 2);

// ======================
// 9) SPREAD with strings: explode
// Make chars from "hello" using spread.
// ======================
const chars = /* TODO */ [..."hello"];
test("9) string to array", chars, ["h", "e", "l", "l", "o"]);

// ======================
// 10) BONUS: removeKeys(obj, ...keys)
// Return a shallow copy of obj without any of the listed keys.
// Use object rest/spread.
// ======================
function removeKeys(obj, /* TODO */ ...keys) {
  const copy = { ...obj };
  for (const k of keys) delete copy[k];
  return copy;
}
test("10) removeKeys", removeKeys({ a: 1, b: 2, c: 3 }, "b", "c"), { a: 1 });

// ======================
// Extra experiments (uncomment to play)
// ======================
// // Shallow copy caveat:
// const deep = { me: { likes:["js"] } };
// const shallow = { ...deep };
// console.log("Same nested array?", shallow.me.likes === deep.me.likes); // true
//
// // Fix via structuredClone (modern) or JSON trick (data-safe types only):
// const fixed = structuredClone ? structuredClone(deep) : JSON.parse(JSON.stringify(deep));
