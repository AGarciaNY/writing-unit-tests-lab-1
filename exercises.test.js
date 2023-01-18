const { TestScheduler } = require('jest');
const exercises = require('./exercises');

//write tests in this file

/* Example Test 
test('Question 0: add', () => {
  expect(exercises.add(1, 2)).toEqual(3);
  expect(exercises.add(1, -1)).toEqual(0);
});
*/


test("Question 1: isUpperCase", () => {
  expect(isUpperCase('t')).toEqual(false);
  expect(isUpperCase('T')).toEqual(true);
  expect(isUpperCase('Four Score')).toEqual(false);
  expect(isUpperCase('FOUR SCORE')).toEqual(true);
  expect(isUpperCase('4SCORE!')).toEqual(true);
  expect(isUpperCase('')).toEqual(true);
});

test("Question 2: removeVowels", () => {
  expect(removeVowels(['abcdefghijklmnopqrstuvwxyz'])).toEqual(["bcdfghjklmnpqrstvwxyz"]);
  expect(removeVowels(['green', 'YELLOW', 'black', 'white'])).toEqual(["grn", "YLLW", "blck", "wht"]);
  expect(removeVowels(['ABC', 'AEIOU', 'XYZ'])).toEqual(["BC", "", "XYZ"]);
})

test("Question 3: wordCap", () => {
  expect(wordCap('four score and seven')).toEqual("Four Score And Seven");
  expect(wordCap('the javaScript language')).toEqual("The Javascript Language");
  expect(wordCap('this is a "quoted" word')).toEqual('This Is A "quoted" Word');
})

test("Question 4: swapCase", () => {
  expect(swapCase('CamelCase')).toEqual("cAMELcASE");
  expect(swapCase('Tonight on XYZ-TV')).toEqual("tONIGHT ON xyz-tv");
})

test("Question 5: staggeredCase", () => {
  expect(staggeredCase('I Love Launch School!')).toEqual("I lOvE lAuNcH sChOoL!");
  expect(staggeredCase('ALL CAPS')).toEqual("AlL cApS");
  expect(staggeredCase('ignore 77 the 444 numbers')).toEqual("IgNoRe 77 ThE 444 nUmBeRs");
})

test("Question 6: isUpperCase", () => {
  expect(wordLengths('cow sheep chicken')).toEqual(["cow 3", "sheep 5", "chicken 7"])
  expect(wordLengths('baseball hot dogs and apple pie')).toEqual(["baseball 8", "hot 3", "dogs 4", "and 3", "apple 5", "pie 3"])
  expect(wordLengths("It ain't easy, is it?")).toEqual(["It 2", "ain't 5", "easy, 5", "is 2", "it? 3"])
  expect(wordLengths('Supercalifragilisticexpialidocious')).toEqual(["Supercalifragilisticexpialidocious 34"])
  expect(wordLengths('')).toEqual([])
  expect(wordLengths()).toEqual([])
})

test("Question 7: isUpperCase", () => {
  let text = 'D Smoke is humble. The Inglewood native exudes an aura of maturation, needed for his quick ascension into popular culture as the first winner of Rhythm + Flow, Netflix’s hip-hop reality competition centered on the discovery of hip-hop’s next star. His signature authenticity shone throughout the 10-episode series and international audiences were drawn to his charisma as he proudly rapped about his lived experiences as a young black man in Inglewood.';

  expect(searchWord('his', text)).toEqual(4)
  expect(searchWord('hip-hop', text)).toEqual(1) // (because "hip-hop's" !== "hip-hop")
  expect(searchWord('flow', text)).toEqual(1)
  expect(searchWord('is', text)).toEqual(1)
})