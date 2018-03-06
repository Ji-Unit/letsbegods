/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = (s) => {
    const stack = [];
    
    const brackets = {
        '{': '}',
        '[': ']',
        '(': ')',
    };
    
    const openers = new Set(['{', '(', '['])
    const closers = new Set(['}', ')', ']']);
    
    for (const char of s) {
        if (openers.has(char)) {
            stack.push(char);    
        } else if (closers.has(char)) {
            if (brackets[stack.pop()] !== char) {
                return false;
            }
        }
    }
    if (stack.length) {
        return false;
    }
    return true;
};