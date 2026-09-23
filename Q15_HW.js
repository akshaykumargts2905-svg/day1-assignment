const frinds = ["Akshay", "Amit", "priya", "Rahul", "Neha"];

console.log("origignal array", frinds);

frinds.push("Rinki");
console.log("after adding", frinds);

frinds.pop();
console.log("after popping", frinds);

frinds.shift();
console.log("after shifting", frinds);

frinds.unshift("Rinki");
console.log("after unshifting", frinds);

console.log("index of priya", frinds.indexOf("priya"));

console.log("slice", frinds.slice(0, 4));

frinds.splice(1, 1);
console.log("after splice", frinds);

frinds.forEach(function (name) {
  console.log(name);
});

const capitalNames = frinds.map(function (name) {
  return name.toUpperCase();
});
console.log("capital names", capitalNames);

const names = frinds.filter(function (name) {
  return name.length > 4;
});
console.log("names", names);
