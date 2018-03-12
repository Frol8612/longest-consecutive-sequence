module.exports = function longestConsecutiveLength(array) {
  // your solution here
  if (array.length == 0) return 0;

  if (array.length == 1) return 1;

  array = array.sort((a, b) => {return a - b});
  let stack = [],
      l ={},
      n = [],
      s = doubleDel(array);

  function doubleDel(arr) {
      let obj = {},
          one = [],
          j = 0;
      for (let i = 0; i < arr.length; i++) {
           let item = arr[i];
           if( obj[item] !== 1) {
                 obj[item] = 1;
                 one[j++] = item;
           }
      }
      return one;
  }
  for (let i = 0; i < s.length; i++) {
      
      if (s[i] + 1 == s[i+1] || s[i] - 1 == s[i-1]) {
              stack.push(s[i]);
              if (s[i] + 1 != s[i+1]) {
                  if (l[stack.length] == undefined) {
                      l[stack.length] = 1;
                  } else {
                      l[stack.length]++;
                  }      
                  stack = [];
              }
         
      }   
      
  } 

  let mid = [];
  for (const key in l) {
          mid.push(Number(key));
  }
  if (mid.length == 0) {
    return 1;
  }
  
  return Math.max.apply(null, mid);
}
