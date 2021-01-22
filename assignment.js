// https://github.com/SanjidaAnni/javascript-assignment/blob/main/assignment.js

// Problem-1: kilometer to meter
function kilometerToMeter(kilometer) {
    var meter = kilometer * 1000
    return meter;
}



// Problem-2: Budget Calculator
function budgetCalculator(watch = 0, phone = 0, laptop = 0) {
    var amount = watch * 50 + phone * 100 + laptop * 500;
    return amount;
}



// Problem-3: Hotel Cost
function hotelCost(totalDays) {
    var totalCost = 0;
    if (totalDays <= 10) {
        totalCost = totalDays * 100;
    }
    else if (totalDays <= 20) {
        var first10Days = 10 * 100;
        var remainingDays = totalDays - 10;
        second10Days = remainingDays * 80;
        totalCost = first10Days + second10Days;
    }
    else {
        var first10Days = 10 * 100;
        var second10Days = 10 * 80;
        var remainingDays = totalDays - 20;
        var nextDays = remainingDays * 50;
        totalCost = first10Days + second10Days + nextDays;
    }
    return totalCost;
}



// Problem-4: Mega Friend
function megaFriend(friends) {
    var largestName = "";
    for (var i = 0; i < friends.length; i++) {
        if (friends[i].length > largestName.length) {
            largestName = friends[i];
        }
        else {
            largestName = largestName;
        }
    }
    return largestName;
}