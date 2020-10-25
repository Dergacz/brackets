module.exports = function check(str, bracketsConfig) {
    const stack = [];
    bracketsConfig = [].concat(...bracketsConfig)
    for (let i = 0; i < str.length; i++) {
      str[i] === stack[stack.length - 1] ? stack.pop() : stack.push(bracketsConfig[bracketsConfig.indexOf(str[i])+1])
    }
    console.log(stack.length === 0);
    return stack.length === 0;

    // your solution
};
