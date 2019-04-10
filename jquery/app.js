// basic syntax
//$("selector").action()

$(document).ready(function(){
    $("#heading").html("Mahalos!");

    // $("p").click(function(){
    //     alert("I got clicked");
    // });

    // $("p").mouseenter(function(){
    //     $(this).css("background-color", "yellow");
    // });

    // $("p").mouseleave(function(){
    //     $(this).css("background-color", "initial");
    // });

    $("p").on ({
        click: function(){
            alert("I got clicked");
        },
        mouseenter: function(){
            $(this).css("background-color", "yellow");
        },
        mouseleave: function(){
            $(this).css("background-color", "green");
        }
    });
    $("button.hide").click(function(){
        // alert("button hidden");
        $("p").hide(1000);
    })
    $("button.show").click(function(){
        // alert("button shown");
        $("p").slideDown(1000);
    })
    $("button.toggle").click(function(){
        $("p").slideToggle(1000, function(){
            $("#heading").html("I slid!");
        });
        
    })




})
// $("h1").html("Mahalo!");
