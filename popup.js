const button = "<button>Click Me</button>"

$(document).ready(function() {
    $(".App").css( "display", "flex" );
    $(".App").css( "flex-flow", "column wrap" );
    $(".App").css( "justify-content", "center" );
    $(".App").css( "align-items", "center" );
    $(".App").css( "width", "300px" );
    $(".App").css( "height", "300px" );

    $(".validate-button").click(function () {
        alert("Hello World!");
    })
});