// https://github.com/shohagcsediu/Assignment

// Start of ১. kilometerToMeter
function kilometerToMeter(kiloMeter){
    var meter = kiloMeter*1000;
    return meter;
}
//console.log(kilometerToMeter(5));
// End of ১. kilometerToMeter


// Start of ২. budgetCalculator
function budgetCalculator(priceWatch, pricePhone, priceLaptop){
    var fixPriceWatch = priceWatch * 50;
    var fixPricePhone = pricePhone * 100;
    var fixPriceLaptop = priceLaptop * 500;
    myAmount = parseInt(fixPriceWatch + fixPricePhone + fixPriceLaptop);
    return myAmount;
 }
 //console.log(budgetCalculator(1,2,1));
// End of ২. budgetCalculator


// Start of ৩. hotelCost
function hotelCost(){
    var cost = 0;
    if(day <=10){
        cost = day * 100;
    }else if(day<=20){
        var days_10 = 10*100;
        var remaining = day -10;
        var days_20 = remaining *80;
        cost = days_10 + days_20;
    }else{
        var days_10 = 10*100;
        var days_20 = 20*80;
        var remaining = day -20;
        var days_most = remaining * 50;
        cost = days_10+days_20+days_most;
    }
    return cost;
}

// console.log(hoteCost(11));
 // End of ৩. hotelCost

 // Start of ৪. megaFriend
var friendsNames = ['Jhankar', 'Zulkar', 'Jahid', 'Shohag'];
var maxWords = friendsNames[0];
function megaFriend(){
    for(var i=0; i<friendsNames.length; i++){
        var element = friendsNames[i];
        if(element.length > maxWords.length){
            maxWords = element;
        }
    }
    return maxWords;
}
//console.log(megaFriend(friendsNames));
 // End of ৪. megaFriend