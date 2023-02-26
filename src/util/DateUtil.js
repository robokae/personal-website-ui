export const toNumericDate = (dateString) => {
  return new Date(dateString).toLocaleDateString();
};

export const toFullDate = (dateString) => {
  return new Date(dateString).toLocaleDateString("en-us", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

export const getYear = () => {
  return new Date().getFullYear();
};
