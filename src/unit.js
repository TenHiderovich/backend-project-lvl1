export const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min) + min);

export const isEven = (int) => int % 2 === 0;

export const getNOD = (a, b) => {
  if (b > a) {
    return getNOD(b, a);
  }

  if (!b) return a;

  return getNOD(b, a % b);
};


export const getRandomProgressList = (length) => {
  const randomInt = getRandomInt(1, 10);
  const step = getRandomInt(1, 10);
  const list = [randomInt];

  for (let i = 1; i < length; i += 1) {
    list[i] = list[i - 1] + step;
  }

  return list;
};


export const isPrime = (num) => {
  if (num === 2) {
    return true;
  }

  let i = 2;
  const limit = Math.sqrt(num);
  while (i <= limit) {
    if (num % i === 0) {
      return false;
    }
    i += 1;
  }

  return true;
};
