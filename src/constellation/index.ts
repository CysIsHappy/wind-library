/**
 * 通过生日计算星座。
 *
 * @since 0.1.24
 * @param {birthday} string 生日.
 * @returns {string} 星座.
 * @example
 *
 * const birthday = '2000-01-03'
 *
 * constellation(birthday)
 * // => '摩羯'
 */

const constellation = (birthday: string): string => {
  if (birthday.indexOf('-') === -1 || birthday.length !== 10) {
    throw new Error('birthday params must like 1990-01-01');
  }
  const s = '魔羯水瓶双鱼牡羊金牛双子巨蟹狮子处女天秤天蝎射手魔羯';
  const month = Number.parseInt(birthday.slice(5, 7));
  const day = Number.parseInt(birthday.slice(-2));
  const arr2 = [20, 19, 21, 21, 21, 22, 23, 23, 23, 23, 22, 22];
  const constellation = s.substr(
    month * 2 - (day < arr2[month - 1] ? 2 : 0),
    2
  );
  return constellation;
};

export default constellation;
