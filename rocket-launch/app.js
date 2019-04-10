$(document).ready(function(){


    $("#heading").html("Next 5 Launches!");
    $.getJSON("https://launchlibrary.net/1.4/launch/next/5",function(rocket){
        document.getElementById('launches').innerHTML = "";
        $("#launches").html("");
        for (i=0;i<rocket.launches.length;i++){
            document.getElementById('launches').innerHTML += rocket.launches[i].name + "<br>" + rocket.launches[i].windowstart + "<br><br>";
        }
    })

    $("button#falcon").on ({
        click: function(){
            $("#heading").html("Falcon Launches!");
            $.getJSON("https://launchlibrary.net/1.4/launch?name=falcon&next=5",function(rocket){
                $("#launches").html("");
                for (i=0;i<rocket.launches.length;i++){
                    $("#launches").append(rocket.launches[i].name + "<br>" + rocket.launches[i].windowstart + "<br><br>");
                }
            })
        }
    })

    $("button#launcherone").on ({
        click: function(){
            $("#heading").html("Launcherone Launches!");
            $.getJSON("https://launchlibrary.net/1.4/launch?name=launcherone&next=5",function(rocket){
                $("#launches").html("");
                for (i=0;i<rocket.launches.length;i++){
                    $("#launches").append(rocket.launches[i].name + "<br>" + rocket.launches[i].windowstart + "<br><br>");
                }
            })
        }
    })

    $("button#ariane").on ({
        click: function(){
            $("#heading").html("Ariane Launches!");
            $.getJSON("https://launchlibrary.net/1.4/launch?name=ariane&next=5",function(rocket){
                $("#launches").html("");
                for (i=0;i<rocket.launches.length;i++){
                    $("#launches").append(rocket.launches[i].name + "<br>" + rocket.launches[i].windowstart + "<br><br>");
                }
            })
        }
    })
    
    $("button#upcoming").on ({
        click: function(){
            $("#heading").html("Next 5 Launches!");
            $.getJSON("https://launchlibrary.net/1.4/launch/next/5",function(rocket){
                $("#launches").html("");
                for (i=0;i<rocket.launches.length;i++){
                    $("#launches").append(rocket.launches[i].name + "<br>" + rocket.launches[i].windowstart + "<br><br>");
                }
            })
        }
    })
})
