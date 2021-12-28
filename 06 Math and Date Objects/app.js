// Math
// Standard built-in objects, always available

console.log(`Math`);

const number = 4.5784933;
// floor - round number down
const result = Math.floor(number);

console.log(number);
console.log(result);
// ceil method - round number up
console.log(`Celi`);
console.log(Math.ceil(5.3212));
console.log(`Square Root`);
console.log(Math.sqrt(number));
console.log(`Pi`);
console.log(Math.PI);
console.log(`Min`);
console.log(Math.min(4, 5.3, 1.11, 0.234, 123));
console.log(`Max`);
console.log(Math.max(2, 213, 213.1, 3));
console.log(`Random`);
console.log(
  `Random, returns value from  0.0000000000000001 - 0.9999999999999999`
);
console.log(Math.random());
console.log(
  `Random *10, returns value from 0.0000000000000010 to 9.99999999999999999`
);
console.log(Math.random() * 10);
console.log(`Floor of Random * 10, returns values 0 - 9`);
console.log(Math.floor(Math.random() * 10));
console.log(
  `Ceil of Random * 10 or Floor of Random*10 + 1, returns values 1 - 10 `
);
console.log(Math.ceil(Math.random() * 10));
console.log(Math.floor(Math.random() * 10) + 1);

//Date
console.log(`Next chapter - Date objects`);

const months = [
  'Styczeń',
  'Luty',
  'Marzec',
  'Kwiecień',
  'Maj',
  'Czerwiec',
  'Lipiec',
  'Sierpień',
  'Wrzesień',
  'Październik',
  'Listopad',
  'Grudzień',
];
const days = [
  'Niedziela',
  'Poniedziałek',
  'Wtorek',
  'Środa',
  'Czwartek',
  'Piątunio',
  'Sobota',
];

const date = new Date();
console.log(date);
const month = date.getMonth();
// getDay start to count from Sunday
const day = date.getDay();
console.log(days[day]);
console.log(date.getDate());
console.log(months[month]);
console.log(date.getFullYear());

const sentence = `${days[day]}, ${date.getDate()} ${
  months[month]
} ${date.getFullYear()}`;
console.log(sentence);

document.body.innerHTML = sentence;
