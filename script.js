function myFunction() {
    var number = document.getElementById("number").value;
    if (number >= 0) {
        number = "The number is positive."
    }
    else if (number < 0) {
        number = "The number is not positive."
    }
    else {
        number = "Invalid number.";
    }
    document.getElementById("demo").innerHTML = number;
}
