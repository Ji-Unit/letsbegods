const isPalindrome = s => s === s.split('').reverse().join('');

const longestPalindrome = s => {
    let longestPal = '';
    let substringHolder = '';
    for (let i = 0; i < s.length; i++) {
        for (let j = s.length - 1; j >= i; j--) {
            if (s[i] === s[j]) {
                substringHolder = s.substr(i , j + 1);
                if (isPalindrome(substringHolder) && (substringHolder.length > longestPal.length)) {
                    longestPal = substringHolder;
                }
            }
        }
    }
    return longestPal;
};

// this don't work but better than me just doing nothing LOL
