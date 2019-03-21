const uniqueInOrder = arr => {
  const arrFinal = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i + 1] !== arr[i]) {
      arrFinal.push(arr[i]);
    }
  }
  return arrFinal;
};
