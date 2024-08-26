export function ramdom(min, max) {
  let random_Int = Math.floor(Math.random() * (max - min) + min);
  return random_Int;
}
