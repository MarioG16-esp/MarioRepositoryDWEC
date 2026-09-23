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