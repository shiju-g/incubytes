export function add(numbers: string): number {
  if (!numbers) return 0;

  const customDelimiterMatch = numbers.match(/^\/\/(.+)\n/);
  let delimiter = /[,\n]/;
  let numberString = numbers;

  if (customDelimiterMatch) {
    delimiter = new RegExp(customDelimiterMatch[1]);
    numberString = numbers.split("\n")[1];
  }

  const numArray = numberString
    .split(delimiter)
    .map((num) => parseInt(num.trim(), 10));

  const negatives = numArray.filter((num) => num < 0);
  if (negatives.length) {
    throw new Error(`Negative numbers not allowed: ${negatives.join(", ")}`);
  }

  return numArray.reduce((sum, num) => sum + (isNaN(num) ? 0 : num), 0);
}
