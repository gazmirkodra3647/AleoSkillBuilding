// Filename: complexCode.js
// Description: An elaborate and sophisticated JavaScript code

// Class representing a person
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  getName() {
    return this.name;
  }

  getAge() {
    return this.age;
  }
}

// Function to calculate the factorial of a number
function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }

  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }

  return result;
}

// Object representing a car
const car = {
  brand: 'Honda',
  model: 'Civic',
  year: 2021,
  getPrice() {
    return 30000;
  }
}

// Function to validate an email address
function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Generate a random ID
function generateRandomId() {
  return Math.floor(Math.random() * 100000);
}

// Generate a random password
function generateRandomPassword() {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';
  let password = '';
  for (let i = 0; i < 12; i++) {
    password += characters[Math.floor(Math.random() * characters.length)];
  }

  return password;
}

// Array of colors
const colors = ['red', 'blue', 'green', 'yellow'];

// Function to reverse a string
function reverseString(str) {
  return str.split('').reverse().join('');
}

// Class representing a book
class Book {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }

  getTitle() {
    return this.title;
  }

  getAuthor() {
    return this.author;
  }

  getYear() {
    return this.year;
  }
}

// Calculate the sum of an array of numbers
function calculateSum(numbers) {
  return numbers.reduce((acc, curr) => acc + curr, 0);
}

// Function to convert a string into title case
function toTitleCase(str) {
  return str.toLowerCase().replace(/(^|\s)\w/g, (match) => match.toUpperCase());
}

// Helper function to check if a number is prime
function isPrime(number) {
  if (number <= 1) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
}

// Main execution
const person = new Person('John Doe', 25);
console.log(person.getName()); // Output: John Doe
console.log(person.getAge()); // Output: 25

console.log(factorial(5)); // Output: 120

console.log(car.brand); // Output: Honda
console.log(car.getPrice()); // Output: 30000

console.log(validateEmail('test@example.com')); // Output: true

console.log(generateRandomId()); // Output: Random number between 0 and 99999
console.log(generateRandomPassword()); // Output: Random password with 12 characters

console.log(colors); // Output: ['red', 'blue', 'green', 'yellow']

console.log(reverseString('Hello World!')); // Output: '!dlroW olleH'

const book = new Book('JavaScript: The Good Parts', 'Douglas Crockford', 2008);
console.log(book.getTitle()); // Output: JavaScript: The Good Parts
console.log(book.getAuthor()); // Output: Douglas Crockford
console.log(book.getYear()); // Output: 2008

console.log(calculateSum([1, 2, 3, 4, 5])); // Output: 15

console.log(toTitleCase('hello world')); // Output: Hello World

console.log(isPrime(17)); // Output: true