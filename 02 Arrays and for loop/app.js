// Arrays and for loop

const names = ['Anna', 'Susy', 'Bob'];
const lastName = 'Shakeandbake';
let fullNames = [];

//for loop
for (let i = 0; i < names.length; i++) {
  //fullNames[i] = names[i] + ' ' + lastName;
  fullNames.push(`${names[i]} ${lastName}`);
  console.log(fullNames[i]);
}

//Functions, return, if, arrays, for loop

const gas = [20, 40, 100, 110];
const food = [10, 30, 50];

function calculateTotal(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  if (total > 100) {
    console.log(`Whoa! You are spending way too much!`);
    return total;
  } else {
    console.log(`You are good, total is less than 100.`);
    return total;
  }
}

const gasTotal = calculateTotal(gas);
const foodTotal = calculateTotal(food);

console.log({
  gas: gasTotal,
  food: foodTotal,
});
