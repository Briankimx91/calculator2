$(document).ready(function(){
    domElements();
});

function domElements(){
    for (let i = 0; i < 6; i++) {
        $('<div>').addClass("row").appendTo('.calculator');
    }
    for(let i = 7; i < 10; i++){
        $('<button>').appendTo('.row:nth-child(3)').addClass("numbers").text(i).attr("value",i);
    }
    for(let i = 4; i < 7; i++){
        $('<button>').appendTo('.row:nth-child(4)').addClass("numbers").text(i).attr("value",i);
    }
    for(let i = 1; i < 4; i++){
        $('<button>').appendTo('.row:nth-child(5)').addClass("numbers").text(i).attr("value",i);
    }
    $('<div>').addClass("screen").text("0").appendTo('.row:first-child');
    $("<button>").addClass("allClear").text("AC").appendTo('.row:nth-child(2)');
    $("<button>").addClass("pos_neg").text("+/-").appendTo('.row:nth-child(2)');
    $("<button>").addClass("percentage").text("%").appendTo('.row:nth-child(2)');
    $('<button>').text("0").attr("value","0").addClass("zero numbers").appendTo('.row:nth-child(6)');
    $('<button>').text(".").attr('value','.').addClass("decimal").appendTo('.row:nth-child(6)');
    $('<button>').text("+").attr("value",'+').addClass("operator").appendTo('.row:nth-child(5)');
    $('<button>').text("-").attr("value",'-').addClass("operator").appendTo('.row:nth-child(4)');
    $('<button>').text("\u00d7").attr("value",'\u00d7').addClass("operator").appendTo('.row:nth-child(3)');
    $('<button>').text("\u00f7").attr("value",'\u00f7').addClass("operator").appendTo('.row:nth-child(2)');
    $('<button>').text("=").addClass("equal").appendTo('.row:nth-child(6)');
}