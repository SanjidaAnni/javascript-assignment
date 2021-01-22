

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
function hotelCost(days) {
    var totalCost = 0;
    if (days > 20) {
        totalCost = 10 * 100 + 10 * 80 + (days - 20) * 50;
    }
    else if (10 < days <= 20) {
        totalCost = 10 * 100 + (days - 10) * 80;
    }
    else {
        totalCost = 10 * 100
    }
    return totalCost;
}
var result = hotelCost(2);
console.log(result);



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