function printStarSeries(num, count) {

    for (let i = 0; i < count; i++) {
        for (let j = 0; j <= num * 2; j++) {
            if (j <= num) {
                console.log('*'.repeat(j));
            } else {
                console.log('*'.repeat(2 * num - j));
            }
        }
    }

}
printStarSeries(5, 3)