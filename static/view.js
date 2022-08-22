function show_stats() {
    for (i = 0; i < stats.length-1; i++) {
        $("#st").append(
            "<span class='color5'>"+ stats[i] + ",&nbsp;&nbsp;&nbsp;</span>"
        )
    }
    $("#st").append(
        "<span class='color5'>"+ stats[stats.length-1] + "</span>"
    )
}

$(document).ready(function(){
    show_stats()

    $("#b1").click(function(){
        location.href ='http://127.0.0.1:5000/search/'+team;
    })

    $("#b2").click(function(){
        location.href ='http://127.0.0.1:5000/search/'+pos;
    })

    $("#b3").click(function(){
        location.href ='http://127.0.0.1:5000/edit/'+id;
    })

    $("#search_name").keyup(function(event) {
        if (event.keyCode === 13) {
            $("#submit").click()
        }
    })

    $("#submit").click(function(){
        var str = $( "#search_name" ).val()
        if (str.trim().length == 0) {
            $( "#search_name" ).val("").focus()
            return
        }

        location.href ='http://127.0.0.1:5000/search/'+str;
    })

    $("#add_btn").click(function(){
        location.href ='http://127.0.0.1:5000/add';
    })
})