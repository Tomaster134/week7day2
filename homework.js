//========== Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
  pizza: ["Deep Dish", "South Side Thin Crust"],
  tacos: "Anything not from Taco bell",
  burgers: "Portillos Burgers",
  ice_cream: ["Chocolate", "Vanilla", "Oreo"],
  shakes: [
    {
      oberwise: "Chocolate",
      dunkin: "Vanilla",
      culvers: "All of them",
      mcDonalds: "Sham-rock-shake",
      cupids_candies: "Chocolate Malt",
    },
  ],
};

const favorites = (lst) => {
    let working = {...lst}
    console.log(working)
    let output = []
    let holder = []
    let temp1 = ``
    for (idx in working) {
        let temp2 = ``;
        if (working[idx].length == 1 && Array.isArray(working[idx])) {
            working[idx] = working[idx][0];
        }
        if (Array.isArray(working[idx])) {
            temp2 += `I have ${working[idx].length} favorite kinds of ${idx}. They are ${working[idx].join(', ')}`;
            output.push(temp2);
            delete working[idx];
        }
        else if (typeof(working[idx]) === 'string') {
            temp2 += `My favorite kind of ${idx} is ${working[idx]}`
            output.push(temp2);
            delete working[idx];
        }
    }
    for (idx in working) {
        holder.push(idx);
    }
    for (idx in working[holder[0]]) {
        temp1 += `My favorite ${holder[0]} from ${idx} is ${working[holder[0]][idx]}. `;
    }
    output.push(temp1);
    return output.join('. ')
}

console.log(favorites(person3))
console.log(person3)
//MAN this was annoying to make have O(n).

//======= Exercise #2=========//
/*
Write an Javascript Class for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods.
*/

// Create our Person Class
class Person

// Use an arrow to create the printInfo method

// Create another arrow function for the addAge method that takes a single parameter
// Adding to the age

// ============= Exercise #3 ============//
/*
    Using the Ergast API, fetch to 'http://ergast.com/api/f1/2008/5/driverStandings.json'
    handle the promise with callbacks (.then(), .catch()) or async/await, and log the data.
*/

// ============= Codewars ============//

// 1. Who likes it?
function likes(names) {
    if (names.length == 0) {
        return `no one likes this`;
    } else if (names.length == 1) {
        return `${names[0]} likes this`;
    } else if (names.length == 2) {
        return `${names[0]} and ${names[1]} like this`;
    } else if (names.length == 3) {
        return `${names[0]}, ${names[1]} and ${names[2]} like this`;
    } else if (names.length > 3) {
        return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
      }
    }

//2. 