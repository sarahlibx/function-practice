var startMyDay = function () {
  return "Time for coffee and a shower!";
};

startMyDay();

// console.log(startMyDay());

var favoriteCookie = function (cookie) {
  return `My favorite cookie is ${cookie}.`;
};

favoriteCookie();

// console.log(favoriteCookie("chocolate chip"));

var introduce = function (name, occupation) {
  return `My name is ${name} and I work as a ${occupation}.`;
};

// console.log(introduce("sarah", "software developer"));
// console.log(introduce("Eric", "inventory manager"));

var hydrationFeedback = function () {
  var numGlasses = Number(
    prompt("How many glasses of water have you had today?")
  );
  if (numGlasses > 8) {
    console.log("Great work staying hydrated!");
  } else if (numGlasses < 8) {
    console.log("Let's try and drink more water tomorrow!");
  }
};

hydrationFeedback();
