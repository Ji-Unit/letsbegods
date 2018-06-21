var isOneEditDistance = function(s, t) {
    if(!s && !t) return false;
    const loops = s.length > t.length ? t.length : s.length;
    for(let i = 0;i<loops;i++) {
        const sChar = s[i];
        const tChar = t[i];
        if(sChar !== tChar) {
          if(s.length === t.length) return s.substring(i+1) === t.substring(i+1);
            else if(s.length < t.length) return s.substring(i) === t.substring(i+1);
            else if(t.length<s.length) return t.substring(i) === s.substring(i+1);
        }
    }
    return Math.abs(s.length - t.length) === 1;
};