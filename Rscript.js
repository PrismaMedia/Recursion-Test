function factorial(n){
    if(n == 1){
        return 1;
    } else if (n < 1) {
        return "ERROR! Natural Numbers Only!";
    } else if(n > 1) {
        return Math.pow(n, n) + factorial(n - 1);
    }
}

function display(){
    var input = document.getElementById('number').value;
    var output = factorial(input);
    document.getElementById("display").innerHTML = "Output: " + output;
}
var one = document.getElementById('one');
var two = document.getElementById('two');
var two = document.getElementById('two');

function help(){
    one.classList.remove('hide');
    two.classList.remove('hide');
    three.classList.remove('hide');
}

function refresh(){
    location.reload();
}




