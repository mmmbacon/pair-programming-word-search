const transposeArray = function(matrix) {
  const result = [];
  for (let y = 0; y < matrix[0].length; y++) {
    const tempArr = [];
    for (let x = 0; x < matrix.length; x++) {
      tempArr.push(matrix[x][y]);
    }
    result.push(tempArr);
  }
  return result;
};

const wordSearch = (letters, word) => {
  let result = false;

  //Horizontal Case
  //Collapses array into a single value array containing a string
  const horizontalJoin = letters.map(ls => ls.join(''));
  //Iterate through array values in horizontalJoin and check for letter
  for (let l of horizontalJoin) {
    //Find exact match in string
    if (l.includes(word)) {
      result = true;
    } else {
      let transposed = transposeArray(letters);
      const verticalJoin = transposed.map(ls => ls.join(''));
      //Iterate through array values in horizontalJoin and check for letter
      for (let l of verticalJoin) {
        //Find exact match in string
        if (l.includes(word)) {
          result = true;
        } else {
          let transposed = transposeArray(letters);
          
        }
      }
    }
  }
  return result;
};

module.exports = wordSearch;