var mathHelpers = {
  toPercentage: num => {
    return (num * 100).toFixed(2);
  },
  toDecimal: num => {
    return (num / 100).toFixed(2);
  }
};

export default mathHelpers;
