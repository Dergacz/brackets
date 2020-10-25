module.exports = function check(str = [], bracketsConfig) {
  const stack = [];
  const open = ['(', '[', '{'];
  const close = [')', ']', '}'];
console.log(str);
console.log(bracketsConfig);
  for (let i = 0 ; i < str.length; i++){
    if (open.includes(str[i])){
      stack.push(str[i]);
    }
    else{
      if (close.indexOf(str[i]) === open.indexOf(stack[stack.length - 1])){
        stack.pop();
      }
     
    }
  }
  console.log(stack.length === 0);
  return stack.length === 0;

  // your solution
}
