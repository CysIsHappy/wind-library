const a = (number: number) => {
  return new Promise((resolve) => {
    resolve(number);
  });
};

a(1);
console.log(a(1).then((res) => console.log(res)));

export default a;
