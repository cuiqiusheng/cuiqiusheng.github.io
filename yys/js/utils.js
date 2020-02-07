/**
 * 生成一个大于等于m且小于n的正整数（m，n都需要是正整数）
 * @param {number} m
 * @param {number} n
 */
function genRandom(m = 1, n = 10) {
  return Math.trunc(Math.random() * (n - m) + m);
}