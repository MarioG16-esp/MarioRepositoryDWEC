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