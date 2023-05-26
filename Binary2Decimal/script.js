// var binary = "1101000" // code for 104
// var digit = binary.toString(10); // Convert String or Digit (But it does not work !)
// console.log(digit);

function convert() {
    event.preventDefault();
    let binary = document.getElementById("binary").value;
    let decimal = 0;
    let counter = 0;
    while(binary > 0){
        let lastDigit = Math.round(binary % 10);
        decimal += Math.pow(2, counter) * lastDigit;
        counter++;
        binary /= 10;
    }
    let result = document.getElementById("result");
    result.innerHTML = `Decimal : ${decimal}`
    console.log(decimal);
}