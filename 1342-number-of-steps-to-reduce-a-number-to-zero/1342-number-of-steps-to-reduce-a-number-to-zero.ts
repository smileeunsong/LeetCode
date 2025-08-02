function numberOfSteps(num: number): number {
    let step = 0

    while (num > 0) {
        step += 1
        if (num % 2 === 0) {
            num = num / 2
        } else {
            num -= 1
        }
    }

    return step
};