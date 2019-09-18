export const getRandomInt = (max) => Math.floor(Math.random() * (max - 1) + 1);

export const isEven = (int) => int % 2 === 0;

export const getNOD = (a, b) => {
  if (b > a) {
    return getNOD(b, a);
  }

  if (!b) return a;

  return getNOD(b, a % b);
};
