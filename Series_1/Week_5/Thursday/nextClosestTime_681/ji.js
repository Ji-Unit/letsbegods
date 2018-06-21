/**
 * @param {string} time
 * @return {string}
 */
var nextClosestTime = function(time) {
    const nums = [time[0],time[1],time[3],time[4]];
    let nextClose;
    let changedIndex;
    for(let i=time.length;i>=0;i--) {
        if(time[i]===":") continue;
        let greaters = nums.map(num => Number(num)).filter(num => num > Number(time[i]));
        greaters.sort((a,b) => a-b);
        switch(i) {
            case 4:
                if(greaters.length) {
                    //replace last with least greater
                    const closest = time.split("");
                    closest.pop();
                    closest.push(greaters[0]);
                    nextClose = closest;
                    changedIndex = i;
                }
                break;
            case 3:
                greaters = greaters.filter(num => num < 6);
                if(greaters.length) {
                    const closest = time.split("");
                    closest[3] = greaters[0];
                    nextClose = closest;
                    changedIndex = i;
                }
                break;
            case 1:
                if(time[0] === "2")  greaters = greaters.filter(num => num < 4);
                 if(greaters.length) {
                    const closest = time.split("");
                    closest[1] = greaters[0];
                    nextClose = closest;
                    changedIndex = i;
                }
                break;
            case 0:
                greaters = greaters.filter(num => num < 3);
                 if(greaters.length) {
                    const closest = time.split("");
                    closest[0] = greaters[0];
                    nextClose = closest;
                    changedIndex = i;
                }
                break;
            default:
                break;
        }
        if(nextClose) break;
    }
    nums.sort((a,b)=> a-b);

    if(nextClose) {
        return nextClose.map((num,i) => {
            if(num ===":") return ":";
            if(i>changedIndex) return nums[0];
            return num;
        }).join("");
    }
    //return next day lowest then
    return time.split("").map(num => {
        if(num===":") return ":";
        else return nums[0];
    }).join("");
};