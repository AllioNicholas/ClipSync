// @flow strict

export const formatElapsedTime = (elapsedTime: number): string => {
  return new Date(elapsedTime * 1000).toISOString().substr(11, 8);
};

export default formatElapsedTime;
