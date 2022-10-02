const JSONDateConverter = (jsonDate) => {
  const date = new Date(jsonDate);
  // Month is zero-indexed, need to +1
  return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
};

export default JSONDateConverter;
