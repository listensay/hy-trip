export const getAsstesUrl = (images) => {
  return new URL(`../assets/img/${images}`, import.meta.url).href
}
