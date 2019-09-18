export const getRandomInt = (max) => Math.floor(Math.random() * (max - 1) + 1);

export const isEven = (int) => int % 2 === 0;

export const getNOD = (a, b) => {
  if (b > a) {
    return getNOD(b, a);
  }

  if (!b) return a;

  return getNOD(b, a % b);
};


export const getRandomProgressList = (length) => {
  const randomInt = getRandomInt(10);
  const step = getRandomInt(10);
  const list = [randomInt];

  for (let i = 1; i < length; i += 1) {
    list[i] = list[i - 1] + step;
  }

  return list;
};
