function isPowerOfThree(n: number): boolean {
  // 32비트 int 범위 내에서 가장 큰 3의 거듭제곱수: 3^19
  return n > 0 && 1162261467 % n === 0;
}
