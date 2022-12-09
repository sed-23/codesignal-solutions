
/* Q: Caring for a plant can be hard work, but since you tend to it regularly, you have a plant that grows 
    consistently. Each day, its height increases by a fixed amount represented by the integer upSpeed. 
    But due to lack of sunlight, the plant decreases in height every night, by an amount represented by downSpeed.

    Since you grew the plant from a seed, it started at height 0 initially. Given an integer desiredHeight, 
    your task is to find how many days it'll take for the plant to reach this height. */

// URL : https://app.codesignal.com/arcade/intro/level-9/xHvruDnQCx7mYom3T

function growingPlant(upSpeed, downSpeed, desiredHeight) {
    let heightGrown = 0, days = 0;
    while (heightGrown != desiredHeight) {
        days += 1;
        heightGrown += upSpeed; 
        if (heightGrown >= desiredHeight) break;
        heightGrown -= downSpeed;
    }
    return days;
}

exports.growingPlant = growingPlant;