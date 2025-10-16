function gcdOfStrings(str1: string, str2: string): string {
    if (str1 + str2 !== str2 + str1) return '';

    const gcd = (a: number, b: number) => b === 0 ? a : gcd(b, a % b);

    const gcdLength = gcd(str1.length, str2.length);

    return str1.slice(0, gcdLength);
};