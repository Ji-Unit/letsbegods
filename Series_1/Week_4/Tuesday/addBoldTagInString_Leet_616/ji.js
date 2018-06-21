var addBoldTag = function(s, dict) {
    let bold = [];
    let seqEnd = 0;
    let final = "";
    for(let i=0;i<s.length;i++) {
        dict.forEach(word => {
            if(s.startsWith(word,i)) {
                seqEnd = Math.max(seqEnd, word.length + i);
            }
        });
        bold[i] = seqEnd > i;
    }
 let bolding = false;
    for(let i =0;i<s.length; i++) {
        if(!bold[i]) {
            if(bolding) {
                final +="</b>";
                bolding = false;
            }
            final += s[i];
        }else {
            if(!bolding) {
                bolding = true;
                final += "<b>";
            }
            final += s[i];

        }
    }
    if(bolding) final += "</b>";
    return final;
};