function show_most() {
    $("#update1").empty()
    $("#update1").append(
        "<div class = 'col-12 margin2 position1'> <a href = '/view/1' class='color5'>" + name1 + "</a></div>" +
        "<div class = 'col-12 margin5'> <a href = '/view/1'>" +
        "<img src=" +p1 + " alt='" + name1 + "' class='picture2'>"
        + "</a></div>"
    )

    $("#update2").empty()
    $("#update2").append(
        "<div class = 'col-12 margin2 position1'> <a href = '/view/2' class='color5'>" + name2 + "</a></div>" +
        "<div class = 'col-12 margin5'> <a href = '/view/2'>" +
        "<img src=" +p2 + " alt='" + name2 + "' class='picture2'>"
        + "</a></div>"
    )

    $("#update3").empty()
    $("#update3").append(
        "<div class = 'col-12 margin2 position1'> <a href = '/view/3' class='color5'>" + name3 + "</a></div>" +
        "<div class = 'col-12 margin5'> <a href = '/view/3'>" +
        "<img src=" +p3 + " alt='" + name3 + "' class='picture2'>"
        + "</a></div>"
    )
}



$(document).ready(function(){
    show_most()

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
