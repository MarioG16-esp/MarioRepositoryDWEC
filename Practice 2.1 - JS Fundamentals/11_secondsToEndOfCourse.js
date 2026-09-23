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