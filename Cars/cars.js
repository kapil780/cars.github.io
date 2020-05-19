$(document).ready(function () {
    $("#one").click(function () {
        $("#one_text").toggle(500);
    }); 
	$("#two").click(function () {
        $("#two_text").fadeToggle(500);
    });
     $("#three").click(function () {
        $("#three_text").toggle(500);
    });

});