export function toNumericDate(dateString) {
  return new Date(dateString).toLocaleDateString();
}

export function toFullDate(dateString) {
  return new Date(dateString).toLocaleDateString("en-us", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default toFullDate;
