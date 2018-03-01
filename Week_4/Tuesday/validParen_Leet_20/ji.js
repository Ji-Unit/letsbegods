const pairs = {
  "(": ")",
  "{": "}",
  "[": "]"
};
const closers = ["}", "]", ")"];

var isValid = function(s) {
  let openers = [];

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (pairs[char]) {
      openers.push(char);
    }
    if (closers.includes(char)) {
      if (char === pairs[openers[openers.length - 1]]) {
        openers.pop();
      } else return false;
    }
  }

  return openers.length ? false : true;
};
