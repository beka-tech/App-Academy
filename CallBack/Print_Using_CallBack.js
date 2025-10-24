function sayHello(name, formatter) {
  return formatter(name);
}

function upper(str) {
  return str.toUpperCase();
}

function lower(str) {
  return str.toLowerCase();
}

console.log(sayHello("Beka_Aman", upper));
console.log(sayHello("Beka_Aman", lower));
