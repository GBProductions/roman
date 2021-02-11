//Business Logic


//Will check if number is within range to be converted into Roman Numerals.
function isNumber(number) {
    if ((number < 0) || (number > 3999)) {
        return "This number cannot be converted! Pick a different one.";
    }   else {
        return true
    }
}

function romanNumerals(numberString) {
    const array = numberString.split("");

    console.log(array);
}


//User Logic

$(document).ready(function() {
    $("form#number-submit").submit(function(event) {
    event.preventDefault();
    const numberString = $("input#number").val();
    const number = parseInt(numberString);

    const pass = isNumber(number)
    console.log(pass);

    const value = romanNumerals(numberString);



    });
});