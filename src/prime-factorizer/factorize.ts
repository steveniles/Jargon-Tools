export function factorize(target: number) {
  if (!Number.isInteger(target) || target < 2)
    throw new Error("Target must be an integer");
  if (target < 2) throw new Error("Target must be greater than 1");
  if (target > 999999999999999)
    throw new Error("Target must be an integer less than 1000000000000000");

  let currentFactor = 1;
  let currentTarget = target;
  const factors: { [factor: number]: number } = {};

  do {
    currentFactor++;
    while (currentTarget % currentFactor == 0) {
      factors[currentFactor] = (factors[currentFactor] ?? 0) + 1;
      currentTarget = currentTarget / currentFactor;
    }
  } while (currentFactor * currentFactor <= currentTarget);

  if (currentTarget > 1)
    factors[currentTarget] = factors[currentTarget] ?? 0 + 1;

  return factors;
}
