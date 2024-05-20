$(document).ready(function () {
    
    $("#btn-hide").on("click", function () {
        // $("#title-1").hide();
        // $(".paragraph-2").hide();
        // $("#title-2").css('color', 'red');
        $("#titre-2").css({ 'color': 'red', 'backgroundColor' : '#333' });
        $(".liste li:nth-child(2n)").css("color", "blue");
    })


})
document.getElementById("btn-show").addEventListener("click", function () {
    $("#titre-1").show();
})

