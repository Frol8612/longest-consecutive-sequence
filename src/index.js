module.exports = function longestConsecutiveLength(array) {
  // your solution here
  if (array.length == 0) {
    return 0;
  }

  if (array.length == 1) {
    return 1;
  }
  let s = array.sort((a, b) => {return a - b});
      stack = [],
      l ={},
      n = [];


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
