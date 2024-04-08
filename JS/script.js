
let bird = { color: "black", species: "blackbird" }
console.log(bird.species);

let myName = 'Default';
myName = 'Chris';

let myAge = 42;


const section = document.querySelector('section');

section.innerHTML = ' ';
const para1 = document.createElement('p');
const para2 = document.createElement('p');
para1.textContent = `I'm ${myName}`;
para2.textContent = `In 20 years, I will be ${myAge + 20}`;
section.appendChild(para1);
section.appendChild(para2);

const myString = "123";
const myNum = Number(myString);
console.log(typeof myNum);
// number

const myNum2 = 123;
const myString2 = String(myNum2);
console.log(typeof myString2);
// string

// Arrays
const shopping = ["bread", "milk", "cheese", "hummus", "noodles"];
shopping[0] = "tahini";
console.log(shopping);

const birds = ["Parrot", "Falcon", "Owl", "Pigeon", "Crow", "Sparrow"];
console.log(birds.indexOf("Owl")); //  2
console.log(birds.indexOf("Rabbit")); // -1

// For each
for (const bird of birds) {
    console.log(bird);
}

//Map
function toUpper(string) {
    return string.toUpperCase();
}
const upperBirds = birds.map(toUpper);
console.log(upperBirds);

// Filter
const filtered = birds.filter((bird) => bird.startsWith("P"));
console.log(filtered);

const cities = ["Manchester", "Liverpool"];
cities.push("Cardiff");
cities.push("Brighton")
// Removes the first item of the Array
cities.shift();
// Removes the last item of the Array
cities.pop();

const index = cities.indexOf("Liverpool");
cities.splice(index, 1);

const data = "Manchester,London,Liverpool,Birmingham,Leeds,Carlisle";
const separated = data.split(",");
console.log(separated);