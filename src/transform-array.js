const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (arr.length == 0) {
    return [] }
  if (!Array.isArray(arr)) {
    throw new Error (`'arr' parameter must be an instance of the Array!`)
    }
  if (Array.isArray(arr)) {
    let newArr = Object.assign([], arr);
    for(let i = 0; i < arr.length; i++ ) {
    switch(arr[i]) {
      case '--discard-next':
        if (!arr[arr.length - 1]) {
        newArr.splice(i, 2);
        return newArr;}
      case '--discard-prev':
        if (!arr[0]) {
        newArr.splice(i-1, 2);
        return newArr;}
      case '--double-next':
        if (!arr[arr.length - 1]) {
        newArr.splice(i, 1, newArr[i+1]);
        return newArr;}
      case '--double-prev':  
      if (!arr[0]) {
      newArr.splice(i, 1, newArr[i-1]);
      return newArr;}
    }
} 
} return arr;
}

module.exports = {
  transform
};
