export const getImageUrl = (path) => {
  return new URL(`/assects/${path}`, import.meta.url).href;
};
