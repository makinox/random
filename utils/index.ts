export const deepCopy = <T>(value: T): T => JSON.parse(JSON.stringify(value));

export const getRandomValue = (num: number) => Math.floor(Math.random() * (num + 1));

export const serializeValue = <T>(value: T): string => {
  if (!value) return '';
  return JSON.stringify(value);
};

export const unSerializeValue = (value: string | null) => {
  if (!value) return '';
  return JSON.parse(value);
};
