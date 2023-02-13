


$(document).ready(function() {
    $("#donker").click(function() {
        $(".main").css(
            "background-color", "grey"
            );
        $(".child").css(
            "background-color", "white"
        )
    });
    $("#licht").click(function() {
        $(".main").css(
            "background-color", "white"
            );
        $(".child").css(
            "background-color", "grey"
        )
    });
    $("#berekening").click(function(){
        var a = $("#a").val();
        var b = $("#b").val();
        var c = a*b;
        $("#antwoord").text(
           c
        )
    })
});
