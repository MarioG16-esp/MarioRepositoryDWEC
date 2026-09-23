function daysBetweenDates(date1, date2) {
    const firstDate = new Date(date1);
    const secondDate = new Date(date2);

    const difference = Math.abs(secondDate - firstDate);

    const days = difference / (1000 * 60 * 60 * 24);

    return days;
}

console.log(daysBetweenDates("2026-09-21", "2026-09-30"));