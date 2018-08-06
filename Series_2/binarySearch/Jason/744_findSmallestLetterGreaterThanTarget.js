/* 
Given a list of sorted characters 'letters' containing only lowercase 
letters, and given a target letter 'target', find the smallest element 
in the list that is larger than the given target.

Letters also wrap around. For example, if the target is target = 'z'
and letters = ['a', 'b'], the answer is 'a'.

Examples:

Input:
letters = ["c", "f", "j"]
target = "a"
Output: "c"

Input:
letters = ["c", "f", "j"]
target = "c"
Output: "f"

Input:
letters = ["c", "f", "j"]
target = "d"
Output: "f"

Input:
letters = ["c", "f", "j"]
target = "g"
Output: "j"

Input:
letters = ["c", "f", "j"]
target = "j"
Output: "c"

Input:
letters = ["c", "f", "j"]
target = "k"
Output: "c"


Note:
1. letters has a length in range [2, 10000].
2. letters consists of lowercase letters, and contains at least 2 unique letters.
3. target is a lowercase letter.
*/

/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function(letters, target) {
    let left = 0;
    let mid;
    let midCode;
    let right = letters.length - 1;
    let targetCode = target.charCodeAt(0);

    if(letters[right].charCodeAt(0) <= targetCode && letters[right + 1] === undefined) {
        return letters[0];
    }

    if(letters[left].charCodeAt(0) > targetCode && letters[left - 1] === undefined) {
        return letters[left];
    }

    while(left <= right) {
        mid = Math.floor((right-left) / 2 + left);
        midCode = letters[mid].charCodeAt(0);

        if(midCode > targetCode && letters[mid - 1].charCodeAt(0) <= targetCode) {
            return letters[mid];
        }

        midCode <= targetCode ? left = mid + 1 : right = mid;
    }
};

console.log(`Result: ${nextGreatestLetter(["c", "f", "j"], "a")}, Expected: c`);
console.log(`Result: ${nextGreatestLetter(["c", "f", "j"], "c")}, Expected: f`);
console.log(`Result: ${nextGreatestLetter(["c", "f", "j"], "d")}, Expected: f`);
console.log(`Result: ${nextGreatestLetter(["c", "f", "j"], "g")}, Expected: j`);
console.log(`Result: ${nextGreatestLetter(["c", "f", "j"], "j")}, Expected: c`);
console.log(`Result: ${nextGreatestLetter(["c", "f", "j"], "k")}, Expected: c`);
console.log(`Result: ${nextGreatestLetter(["e","e","e","e","e","e","n","n","n","n"], "e")}, Expected: n`);