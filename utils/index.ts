export const deepCopy = <T>(value: T): T => JSON.parse(JSON.stringify(value));

export const getRandomValue = (num: number) => Math.floor(Math.random() * (num + 1));
