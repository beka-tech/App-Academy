// Your code here

let snakeToCamel = function (Sentence) {
  let Words = Sentence.split("_");
  let newWords = [];

  for (let i = 0; i < Words.length; i++) {
    let word = Words[i];
    let l = word.length;
    newWords.push(word[0].toUpperCase() + word.slice(1, l).toLowerCase());
  }
  return newWords.join("");
};

console.log(snakeToCamel("snakes_go_hiss")); // 'SnakesGoHiss'
console.log(snakeToCamel("say_hello_world")); // 'SayHelloWorld'
console.log(snakeToCamel("app_academy_is_cool")); // 'AppAcademyIsCool'
console.log(snakeToCamel("APp_ACADEMY_iS_cOol")); // 'AppAcademyIsCool'
