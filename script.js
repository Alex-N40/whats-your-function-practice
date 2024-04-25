// Function with no parameters
var startMyDay = function () {
  return `Time for coffee and a shower!`;
};
console.log(startMyDay());
// In console: Time for coffee and a shower!


// Function with one parameter
var favoriteCookie = function (cookie) {
  return `My favorite cookie is ${cookie}.`;
};
console.log(favoriteCookie("chocolate chip"));
// In console: My favorite cookie is chocolate chip.


// Function with two parameters
var introduce = function (name, occupation) {
  return `Hello, my name is ${name}, I'm a ${occupation}.`;
};
console.log(introduce("Alex", "developer"));
console.log(introduce("Nick", "doctor"));
/* In console: Hello, my name is Alex, I'm a developer.
Hello, my name is Nick, I'm a doctor. */


// Function with prompt and conditional
var hydrationFeedback = function () {
  var numGlasses = Number(
    prompt("How many glasses of water did you have today? ")
  );
  if (numGlasses >= 8) {
    console.log("Congrats!");
  } else {
    console.log("Not bad, not bad. Let's try for a bit more tomorrow!");
  }
};
hydrationFeedback();
/* A prompt pops up asking "How many glasses of water did you have today?"
If the input is 9, the message in console is "Congrats!"
If the input is 4, the message in console is "Not bad, not bad. Let's try for a bit more tomorrow!"*/
