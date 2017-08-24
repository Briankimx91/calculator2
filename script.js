$(document).ready(clicker);

let function_key, number_key;
let count = 0;
let equation= [''];

function clicker(){
    $('.numbers').click(handleNumber);
    $('.operator').click(handleOperator);
    $('.equal').click(handleEqual);
    $('.pos_neg').click(posNeg);
    $('.percentage').click(handlePercentage);
    $('.decimal').click(handleDecimal);
    $('.allClear').click(clear);
}

function handleNumber(){
    $('.row:nth-child(2) > button:first-child').removeClass('allClear').addClass('clear').text('C');
    number_key = $(this).val();
    for(let i = 0; i < equation.length; i+=2){
        for(let k = 1; k <= equation.length; k+=2){
            if(!equation[k]){
                equation[i] += number_key;
            } else {
                equation[k+1] = number_key;
            }
        }
    }
    equation.join('');
    console.log(equation);
}

function handleOperator(){
    function_key = $(this).text();
    for(let i = 0; i < equation.length; i+=2){
        for(let k = 1; k <= equation.length; k+=2){
            if(!equation[i]){
                return;
            } else {
                equation[i+1] = function_key;
            }
        }
    }
    console.log(equation);
}
function handleEqual(){
    doMath();
    console.log(equation);
}
function doMath(){

}
function clear(){
    if($(this).text() === "AC"){
        equation = [''];
    } else {
        equation.pop();
    }
    $('.row:nth-child(2) > button:first-child').removeClass('clear').addClass('allClear').text('AC');
    console.log(equation);
}
function posNeg(){
    console.log(equation);
}
function handlePercentage(){
    console.log(equation);
}
function handleDecimal() {
    console.log(equation);
}
