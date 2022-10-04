class JSONDateConverter {
  constructor(jsonDate) {
    this.jsonDate = jsonDate;
  }

  toNumericDate = () => {
    return new Date(this.jsonDate).toLocaleDateString();
  };

  toFullDate = () => {
    return new Date(this.jsonDate).toLocaleDateString("en-us", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };
}

export default JSONDateConverter;
