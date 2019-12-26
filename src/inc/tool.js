
export const fixArrayLength = (arr, length, fillItem) => {
  let newArr;
  if(arr.length >= length) {
    newArr = arr.slice(0, length);
  } else {
    newArr = [...arr]
    for (let i = 0; i < length - newArr.length; i++) {
      newArr.push(fillItem instanceof Function
        ? fillItem(i + newArr.length)
        : fillItem
      )
    }
  }
  return newArr
}

export const fixNumberRange = (n, min, max) => {
  let num = n;
  if( n > max) {
    num = max;
  } else if(n < min) {
    num = min;
  }
  return num;
}
