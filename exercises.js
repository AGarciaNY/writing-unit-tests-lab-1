// Question 1
const isUpperCase = (word) => word === word.toUpperCase()
// Question 2
const removeVowels = (words) => words.map(word => word.replace(/[aeiou]/gi, ""));

// Question 3
const wordCap = (s) => s.split(" ").map(word => (/[a-z]/g).test(word[0]) ? word[0].toUpperCase() + word.slice(1,word.length).toLowerCase() :word).join(" ")

// Question 4
const swapCase = (word) => [...word].map(letter => letter === letter.toUpperCase() ? letter.toLowerCase() : letter.toUpperCase()).join("")

// Question 5
const staggeredCase = (string) => [...string].reduce((a, b) => (a.word += /[a-z]/gi.test(b) ? (a.cap ? (a.cap = false, b.toUpperCase()) : (a.cap = true, b.toLowerCase())): b , a),{word:"",cap:true}).word;

// Question 6
const wordLengths = (string) => string ? string.split(" ").map(word => `${word} ${word.length}`):[]

// Question 7
const searchWord = (word, string) => string.replace(/[.!?,]/ig, "").split(" ").filter(w => w.toLowerCase() === word.toLowerCase()).length


// The code below ensures that this file can talk to our test file.
module.exports = {
  isUpperCase,
  removeVowels,
  wordCap,
  swapCase,
  staggeredCase,
  wordLengths,
  searchWord,
};
