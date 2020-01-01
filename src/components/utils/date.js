import moment from 'moment-jalaali';

moment.loadPersian({ usePersianDigits: true });

export const isDateObject = (date) => typeof date.getMonth === 'function';

export const convertToJalaali = (date, format) => moment(date).format(format);
