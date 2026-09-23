# Practice 2.1 - JS Fundamentals

### 2DAW - DWEC Bilingual. 

> **Student Name**:  

#### Files included in this repository:

Ennumerate and explain each one of the files included in this repo.

![alt text](image-1.png)

    
#### Instructions: 

- You have to create one `js` or `html` file per each proposed exercise. 

- Some exercises can be solved in a `js` file ready to be executed with `node.js`. We won’t need the browser in that case, just to be focused in JS without any interaction with the user. 

- In case we need interaction with the user we will create an `html` file with the internal JavaScript code. 


**Exercises**

1. `01_fizzBuzz.js` Write a function that prints numbers from 1 to 100. But for multiples of three, print "Fizz" instead of the number, and for multiples of five, print "Buzz". For numbers that are multiples of both three and five, print "FizzBuzz".
```js
function fizzBuzz() {
  for (let i = 1; i <= 100; i++) {
    if (i % 15 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}
```

2. `02_untilAdult.html` Write a program that repeatedly ask the user for their age until they enter a valid adult age (18 or older). The program should continue asking if the age entered is below 18. Control also if the user input a `NaN` value. 

      Once the user has entered you can display a message in the document just modifying the `innerHTML` property of a simple div container
      
      * html:
      ```html
      <div id="container"></div>
      ```

      * JavaScript:
      ```js
      const container = document.getElementById("container");
      container.innerHTML = "<h1>Welcome to my awesome website for adult people</h1>";
      ```

      ````html
      <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>External JavaScript Example</title>
</head>
<body>
    <div id="container">
        <h1>External JavaScript Example</h1>
    <p>hola mundo</p>
    </div>
    

    <script>
        const container = document.getElementById("container");

let age;

while (isNaN(age) || age < 18) {
  age = Number(prompt("How old are you?"));

  if (isNaN(age)) {
    alert("Please enter a valid number.");
  } else if (age < 18) {
    alert("You must be 18 or older.");
  }
}

container.innerHTML =
  "<h1>Welcome to my awesome website for adult people</h1>";
    </script>
</body>
</html>
      ```

   
3. `03_random.js` Create one arrow function that generates a random number between a minimum and a maximum given number. Use it to calculate 10 random numbers between:

    - 0 and 99999
    - 10 and 40
    - 18 and 90
    - 1980 and 2020

```js
    const randomNumber = (min, max) => {
    return Math.round(Math.random() * (max - min) + min);
};

for (let i = 0; i < 10; i++) {
    console.log(randomNumber(0, 99999));
}

console.log("----------");

for (let i = 0; i < 10; i++) {
    console.log(randomNumber(10, 40));
}

console.log("----------");

for (let i = 0; i < 10; i++) {
    console.log(randomNumber(18, 90));
}

console.log("----------");

for (let i = 0; i < 10; i++) {
    console.log(randomNumber(1980, 2020));
}
```
  
4. `04_lottery.js` Use the previous function to calculate 10 different lottery numbers of 5 cyphers each. 
```js
const randomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

const lotteryNumbers = new Set();

while (lotteryNumbers.size < 10) {
    lotteryNumbers.add(randomNumber(10000, 99999));
}

lotteryNumbers.forEach(number => {
    console.log(number);
});
```
   
5. `05_getDate.js` Write an arrow function that returns the current date and time in the format `YYYY-MM-DD HH:MM:SS`.
   
6. `06_daysBetweenDates.js` Write a normal function that calculates the number of days between two given dates.
  
 ```js
   function daysBetweenDates(date1, date2) {
    const firstDate = new Date(date1);
    const secondDate = new Date(date2);

    const difference = Math.abs(secondDate - firstDate);

    const days = difference / (1000 * 60 * 60 * 24);

    return days;
}

console.log(daysBetweenDates("2026-09-21", "2026-09-30"));
```
7. `07_leapYear.js` Write an arrow function that checks if a given year is a leap year.
```js
   const isLeapYear = (year) => {
    return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
};

console.log(isLeapYear(2024)); // true
console.log(isLeapYear(2023)); // false
console.log(isLeapYear(1900)); // false
console.log(isLeapYear(2000)); // true
```

8. `08_calculateAge.js`: Write a function that calculates the age of a person based on their birthdate.
```js
function calculateAge(birthdate) {
    const today = new Date();
    const birthDate = new Date(birthdate);

    let age = today.getFullYear() - birthDate.getFullYear();

    const month = today.getMonth() - birthDate.getMonth();

    if (
        month < 0 ||
        (month === 0 && today.getDate() < birthDate.getDate())
    ) {
        age--;
    }

    return age;
}

console.log(calculateAge("2000-09-21"));
```
9.  `09_message.js` Write a function that takes a name and a favorite color as arguments and returns a sentence like:
    
        `"Hello [name], your favorite color is [color]!"`

    Use template literals to solve this exercise. 

```js
function message(name, color) {
    return `Hello ${name}, your favorite color is ${color}!`;
}

console.log(message("John", "blue"));
```

10. `10_multiplicationTable.js` Write a function that prints the multiplication table of a given number. For example, for the number 5:

    ```
    5 x 1 = 5
    5 x 2 = 10
    5 x 3 = 15
    ...
    5 x 10 = 50
    ```

    Use the created function to print the multiplication table of several numbers. If you want to print the multiplication table for numbers from 1 through 10. 

```js
function multiplicationTable(number) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${number} x ${i} = ${number * i}`);
    }
}

for (let number = 1; number <= 10; number++) {
    multiplicationTable(number);
    console.log("----------");
}
```

#### Extra exercise

11. `11_secondsToEndOfCourse.js` Create an script that shows a message in the console every second like this:

    ```
    Seconds remaining to the end of the course: 198221312
    Seconds remaining to the end of the course: 198221311
    ...
    ```
```js
const endOfCourse = new Date("2027-06-01T00:00:00");

const interval = setInterval(() => {
    const now = new Date();

    const difference = endOfCourse - now;

    const secondsRemaining = Math.floor(difference / 1000);

    if (secondsRemaining <= 0) {
        console.log("The course has ended!");
        clearInterval(interval);
    } else {
        console.log(
            `Seconds remaining to the end of the course: ${secondsRemaining}`
        );
    }
}, 1000);
```