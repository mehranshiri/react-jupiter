// @flow

// doc of Intl: https://mzl.la/2TJQm88
export const toPersianNumber = (number: number, option = {}) => (
  new Intl.NumberFormat('fa-IR', option).format(number)
);

export const englishNumberToPersianInString = (input: string) => {
  const persianNumbers = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
  return input.replace(/[0-9]/g, (index) => persianNumbers[+index]);
};
