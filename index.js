function uniteUnique() {
 let newArr = []
 let arr;
  for(let i = 0; i < arguments.length; i++) {
   newArr.push(arguments[i])
  arr = newArr.flat()
  }
  return [...new Set(arr)]
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
