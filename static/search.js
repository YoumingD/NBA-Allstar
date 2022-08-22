$(document).ready(function(){
    if (Object.keys(ans).length == 0 && Object.keys(ans2).length == 0 && Object.keys(ans3).length == 0) {
        $("#result").append(
            "<div class='col-12 margin6' id='result1'></div>"
        )
        $("#result1").append(
            "<div class='text1 color5'>" + "Showing Results for \"" + n["name"] + "\"</div>" +
            "<div class='color5'>" + "No results found" + "</div>"
        )
    } else {
        $("#result").append(
            "<div class='col-12 margin6' id='result1'></div>"
        )
        $("#result1").append(
            "<br><div class='text1 color5'>" + "Showing Results for \"" + n["name"] + "\"</div>"
        )
        if (Object.keys(ans).length != 0) {
            $("#result").append(
                "<div class='col-12 margin6' id='result2'></div>"
            )
            $("#result2").append(

                "<hr class='color8'><br><div class='text1 color5'>found " + ans.length + " players</div>"
            )
            for (let i = 0; i < ans.length; i++) {
                $("#result2").append(
                    "<div class = 'margin2'>" + "<a href='/view/" + ans[i]["id"] + "'>" +
                    "<img src=" + data[ans[i]["id"]]["image"] + " alt='" + data[ans[i]["id"]]["name"]
                    + "' class='picture1'>" + "</a>" + "<span>&nbsp;&nbsp;</span>"
                    + "<a href = '/view/"+ ans[i]["id"] + "'>"
                    + "<span class='color5'>" + ans[i]["str1"] + "</span>" +
                    "<u>" + ans[i]["str2"] + "</u>" +
                    "<span class='color5'>" + ans[i]["str3"] + "</span>" + "</a></div>"
                )
            }
        }

        if (Object.keys(ans2).length != 0) {
            $("#result").append(
                "<div class='col-12 margin6' id='result3'></div>"
            )
            $("#result3").append(
                "<hr class='color8'><br><div class='text1 color5'>found " + ans2.length + " players in team </div>"
            )
            for (let i = 0; i < ans2.length; i++) {
                $("#result3").append(
                    "<div class = 'margin2'>" + "<a href='/view/" + ans2[i]["id"] + "'>" +
                    "<img src=" + data[ans2[i]["id"]]["image"] + " alt='" + data[ans2[i]["id"]]["name"]
                    + "' class='picture1'>" + "</a>" + "<span>&nbsp;&nbsp;</span>"
                    + "<a href = '/view/"+ ans2[i]["id"] + "'>"
                    + "<span class='color5'>" + ans2[i]["str1"] + "</span>" +
                    "<u>" + ans2[i]["str2"] + "</u>" +
                    "<span class='color5'>" + ans2[i]["str3"] + ", " + data[ans2[i]["id"]]["name"] + "</span>"
                    + "</a></div>"
                )
            }
        }


        if (Object.keys(ans3).length != 0) {
            $("#result").append(
                "<div class='col-12 margin6' id='result4'></div>"
            )
            $("#result4").append(
                "<hr class='color8'><br><div class='text1 color5'>found " + ans3.length + " players in position</div>"
            )
            for (let i = 0; i < ans3.length; i++) {
                $("#result4").append(
                    "<div class = 'margin2'>" + "<a href='/view/" + ans3[i]["id"] + "'>" +
                    "<img src=" + data[ans3[i]["id"]]["image"] + " alt='" + data[ans3[i]["id"]]["name"]
                    + "' class='picture1'>" + "</a>" + "<span>&nbsp;&nbsp;</span>"
                    + "<a href = '/view/"+ ans3[i]["id"] + "'>"
                    + "<span class='color5'>" + ans3[i]["str1"] + "</span>" +
                    "<u>" + ans3[i]["str2"] + "</u>" +
                    "<span class='color5'>" + ans3[i]["str3"] + ", " + data[ans3[i]["id"]]["name"] + "</span>"
                    + "</a></div>"
                )
            }
        }
    }
    $("#search_name").val("")

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