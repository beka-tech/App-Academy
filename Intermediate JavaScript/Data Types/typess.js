let arr = (1, 2, 3);

if (typeof arr == "object") {
  console.log("It is Array");
} else if (typeof arr !== "object") {
  throw new Error("It IS Not Array");
}
