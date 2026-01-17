function myPow(x: number, n: number): number {
    if (n < 0) {
        x = 1/x;
        n = -n;
    }
    if (n === 0) return 1;
    
    const half = myPow(x, Math.floor(n / 2));
    return n % 2 === 0 ? half * half : half * half * x;
};