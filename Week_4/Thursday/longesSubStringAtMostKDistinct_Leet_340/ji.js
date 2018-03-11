var lengthOfLongestSubstringKDistinct = function(s, k) {
    let chars = {};
    let count = 0;
    let max = 0;
    for(let i =0;i<s.length;i++) {
        const char = s[i];
        chars[char] = i;
        if(Object.keys(chars).length > k) {
            max = max > count ? max : count;
            const vals = Object.values(chars).sort((a,b)=>a-b);
            i = vals[0];
            chars = {};
            count = 0;
            continue;
        }
        count++;
    }
    return count > max ? count : max;
};