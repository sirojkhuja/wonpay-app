export const priceFormatter = (number) => {
  let num = String(Number(number).toFixed(2));
  let arr = num.split(".");
  let arr1 = [];
  number = arr[0];

  while (number.length >= 3) {
    arr1.unshift(number.slice(-3));
    number = number.slice(0, number.length - 3);
  }
  number.length !== 0 && arr1.unshift(number);
  return arr1.join(" ") + "." + arr[1];
};
export const priceFormatter_2 = (number) => {
  let num = String(Number(number).toFixed(2));
  let arr = num.split(".");
  let arr1 = [];
  number = arr[0];

  while (number.length >= 3) {
    arr1.unshift(number.slice(-3));
    number = number.slice(0, number.length - 3);
  }
  number.length !== 0 && arr1.unshift(number);
  return arr1.join(" ");
};
