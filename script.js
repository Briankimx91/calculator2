$(document).ready(clicker);

let function_key, number_key;
let count = 0;
let equation= [''];
let result;

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
    if(equation[0] === "Error!"){
        equation = [''];
    }
    number_key = $(this).val();
    if(!equation[1]){
        if(equation[0].length > 6){
            return;
        }
        equation[0]+=number_key;
    } else {
        if(equation[2].length > 6){
            return;
        }
        equation[2]+=number_key;
    }

    console.log(equation);
    if(equation[2] === undefined){
        $('.screen').text(equation[0]);
    } else {
        $('.screen').text(equation[2]);
    }
}

function handleOperator(){
    if(equation[0] === "Error!"){
        return;
    }
    function_key = $(this).val();
    if(!equation[0]){
        return;
    } else {
        doMath();
        if(equation[2] === undefined){
            equation[1] = function_key;
            equation[2] = '';
        } else {
            equation[1] = function_key;
        }
        equation[2] ='';
    }
    console.log(equation);
}
function handleEqual(){
    for(let i = 1; i < equation.length ;i+=2){
        if(equation[i+1].length > 0){
            doMath();
        } else {
            if(equation[i] === '\u00d7'){
                result = Number(equation[i - 1]) * Number(equation[i - 1]);
                equation[i - 1] = Math.round(result * 100) / 100;
            } else if(equation[i] === '\u00f7'){
                result = Number(equation[i - 1]) / Number(equation[i - 1]);
                equation[i - 1] = Math.round(result * 100) / 100;
            } else if(equation[i] === '+'){
                result = Number(equation[i - 1]) + Number(equation[i - 1]);
                equation[i - 1] = Math.round(result * 100) / 100;
            } else {
                result = Number(equation[i - 1]) - Number(equation[i - 1]);
                equation[i - 1] = Math.round(result * 100) / 100;
            }
        }
    }
    console.log(equation);

    $('.screen').text(equation[0]);
}

function doMath(){
    for(let i = 1; i < equation.length; i+=2){
        if(equation[i] === '\u00d7'){
            result = Number(equation[i - 1]) * Number(equation[i + 1]);
            equation[i - 1] = Math.round(result * 100) / 100;
        } else if(equation[i] === '\u00f7'){
            if(equation[i+1] === "0"){
                equation = ['Error!'];
            } else {
                result = Number(equation[i - 1]) / Number(equation[i + 1]);
                equation[i - 1] = Math.round(result * 100) / 100;
            }
        } else if(equation[i] === '+') {
            result = Number(equation[i - 1]) + Number(equation[i + 1]);
            equation[i - 1] = Math.round(result * 100) / 100;
        } else if(equation[i] === '-') {
            result = Number(equation[i - 1]) - Number(equation[i + 1]);
            equation[i - 1] = Math.round(result * 100) / 100;
        }
    }
    console.log(equation);
}
function clear(){
    if($(this).text() === "AC"){
        equation = [''];
    } else {
        if(equation[2] !== undefined){
            if(equation[2].length === 0){
                equation = ['']
            } else {
                equation[2] = '';
            }
        } else {
            equation = [''];
        }
    }
    $('.row:nth-child(2) > button:first-child').removeClass('clear').addClass('allClear').text('AC');
    console.log(equation);
    $('.screen').text("0");
}
function posNeg(){
    if(equation[2] === undefined || equation[2].length === 0){
        if(Number(equation[0]) > 0){
            equation[0] = `-${equation[0]}`;
        } else {
            equation[0] = equation[0].substr(1);
        }
    } else {
        if(Number(equation[2]) > 0){
            equation[2] = `-${equation[2]}`;
        } else {
            equation[2] = equation[2].substr(1);
        }
    }
    console.log(equation);
    if(equation[2] === undefined){
        $('.screen').text(equation[0]);
    } else {
        $('.screen').text(equation[2]);
    }
}
function handlePercentage(){
    if(equation[0].length === 0){
        return;
    } else if(equation[0].length > 0 && equation[2] === undefined || equation[2].length === 0){
        equation[0] = Number(equation[0]) / 100;
    } else {
        equation[2] = Number(equation[2]) / 100;
    }
    console.log(equation);
    if(equation[2] === undefined){
        $('.screen').text(equation[0]);
    } else {
        $('.screen').text(equation[2]);
    }}
function handleDecimal() {
    const decimal = $(this).val();
    if(equation[2] === undefined){
        if(equation[0].indexOf('.') !== -1){
            return;
        } else {
            if(equation[0].length === 0){
                equation[0] += `0${decimal}`;
            } else {
                equation[0] += decimal
            }
        }
    } else {
        if(equation[2].indexOf('.') !== -1){
            return;
        } else {
            if(equation[2].length === 0){
                equation[2] += `0${decimal}`;
            } else {
                equation[2] += decimal
            }
        }
    }
    console.log(equation);
    if(equation[2] === undefined){
        $('.screen').text(equation[0]);
    } else {
        $('.screen').text(equation[2]);
    }
}
