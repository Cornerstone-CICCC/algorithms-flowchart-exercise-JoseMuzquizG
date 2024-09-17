let a = 4
let b = 2
let c = 10

if (a > b) {
    if (a > c) {
        if ((b+c) > a) {
            console.log("Triangle is POSSIBLE")
        }
        else {
            console.log("Triangle is NOT POSSIBLE")
        }
    }
    else {
        if ((a+b) > c) {
            console.log("Triangle is POSSIBLE")
        }
        else {
            console.log("Triangle is NOT POSSIBLE")
        }
    }
}
else {
    if (b > c) {
        if ((a+c) > b) {
            console.log("Triangle is POSSIBLE")
        }
        else {
            console.log("Triangle is NOT POSSIBLE")
        }
    }
    else {
        if ((a+b) > c) {
            console.log("Triangle is POSSIBLE")
        }
        else {
            console.log("Triangle is NOT POSSIBLE")
        }
    }
}
