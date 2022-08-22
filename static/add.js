function add_data(new_data) {
    $.ajax({
        type: "POST",
        url: "/add_data",
        dataType : "json",
        contentType: "application/json; charset=utf-8",
        data : JSON.stringify(new_data),
        success: function(result){
            id = result["id"]
            $("#success").show();
            $("#sub").click(function(){
                location.href ='http://127.0.0.1:5000/view/'+id;
            })
        },
        error: function(request, status, error){
            console.log("Error");
            console.log(request)
            console.log(status)
            console.log(error)
        }
    });
}

$(document).ready(function(){

    $("#success").hide();

    $("#b1").click(function(){
        let str1 = $("#text1").val()
        let str2 = $("#text2").val()
        let str3 = $("#text3").val()
        let str4 = $("#text4").val()
        let str5 = $("#text5").val()
        let str6 = $("#text6").val()
        let str7 = $("#text7").val()
        let str8_1 = $("#text8_1").val()
        let str8_2 = $("#text8_2").val()
        let str8_3 = $("#text8_3").val()
        let str9 = $("#text9").val()
        let str10 = $("#text10").val()

        if (str1.trim() == '') {
            $("#error_message1").remove()
            $('#input1').after('<div id="error_message1" class="col-12 text3"> ' +
                'Name cannot be empty.</div>').html();
            $("#text1").val("").focus()
            return
        }
        if (str2.trim() == '') {
            $("#error_message1").remove()
            $('#input2').after('<div id="error_message1" class="col-12 text3"> ' +
                'Team cannot be empty.</div>').html();
            $("#text2").val("").focus()
            return
        }
        if (str3.trim() == '') {
            $("#error_message1").remove()
            $('#input3').after('<div id="error_message1" class="col-12 text3"> ' +
                'Image cannot be empty.</div>').html();
            $("#text3").val("").focus()
            return
        }
        if (str4.trim() == '') {
            $("#error_message1").remove()
            $('#input4').after('<div id="error_message1" class="col-12 text3"> ' +
                'Summary cannot be empty.</div>').html();
            $("#text4").val("").focus()
            return
        }
        if (str5.trim() == '') {
            $("#error_message1").remove()
            $('#input5').after('<div id="error_message1" class="col-12 text3"> ' +
                'Year of birth cannot be empty.</div>').html();
            $("#text5").val("").focus()
            return
        }
        else if ($.isNumeric(str5) != true) {
            $("#error_message1").remove()
            $('#input5').after('<div id="error_message1" class="col-12 text3"> ' +
                'Year of birth must be number.</div>').html();
            $("#text5").focus()
            return
        }
        if (str6.trim() == '') {
            $("#error_message1").remove()
            $('#input6').after('<div id="error_message1" class="col-12 text3"> ' +
                'Height: cannot be empty.</div>').html();
            $("#text6").val("").focus()
            return
        }
        else if ($.isNumeric(str6) != true) {
            $("#error_message1").remove()
            $('#input6').after('<div id="error_message1" class="col-12 text3"> ' +
                'Height must be number.</div>').html();
            $("#text6").focus()
            return
        }
        if (str7.trim() == '') {
            $("#error_message1").remove()
            $('#input7').after('<div id="error_message1" class="col-12 text3"> ' +
                'Weight: cannot be empty.</div>').html();
            $("#text7").val("").focus()
            return
        }
        else if ($.isNumeric(str7) != true) {
            $("#error_message1").remove()
            $('#input7').after('<div id="error_message1" class="col-12 text3"> ' +
                'Weight must be number.</div>').html();
            $("#text7").focus()
            return
        }
        if (str8_1.trim() == '' || str8_2.trim() == '' || str8_3.trim() == '') {
            $("#error_message1").remove()
            $('#input8').after('<div id="error_message1" class="col-12 text3"> ' +
                'Stats cannot be empty.</div>').html();
            if (str8_1.trim() == '') {
                $("#text8_1").val("").focus()
                return
            }
            if (str8_2.trim() == '') {
                $("#text8_2").val("").focus()
                return
            }
            if (str8_3.trim() == '') {
                $("#text8_3").val("").focus()
                return
            }
        }
        else if ($.isNumeric(str8_1) != true || $.isNumeric(str8_2) != true || $.isNumeric(str8_3) != true) {
            $("#error_message1").remove()
            $('#input8').after('<div id="error_message1" class="col-12 text3"> ' +
                'Stats must be number.</div>').html();

            if ($.isNumeric(str8_1) != true) {
                $("#text8_1").focus()
                return
            }
            if ($.isNumeric(str8_2) != true) {
                $("#text8_2").focus()
                return
            }
            if ($.isNumeric(str8_3) != true) {
                $("#text8_3").focus()
                return
            }
        }
        if (str9.trim() == '') {
            $("#error_message1").remove()
            $('#input9').after('<div id="error_message1" class="col-12 text3"> ' +
                'All-star team cannot be empty.</div>').html();
            $("#text9").val("").focus()
            return
        }
        if (str10.trim() == '') {
            $("#error_message1").remove()
            $('#input10').after('<div id="error_message1" class="col-12 text3"> ' +
                'Position cannot be empty.</div>').html();
            $("#text10").val("").focus()
            return
        }


        new_data = {
            "name": str1,
            "image": str3,
            "summary": str4,
            "YoB": str5,
            "height": str6,
            "weight": str7,
            "team": str2,
            "all_star_team": str9,
            "position": str10,
            "stats1": str8_1,
            "stats2": str8_2,
            "stats3": str8_3,
        }

        console.log(new_data)

        add_data(new_data)

        $("#text1").val("").focus()
        $("#text2").val("")
        $("#text3").val("")
        $("#text4").val("")
        $("#text5").val("")
        $("#text6").val("")
        $("#text7").val("")
        $("#text8_1").val("")
        $("#text8_2").val("")
        $("#text8_3").val("")
        $("#text9").val("")
        $("#text10").val("")

        $("#error_message1").remove()
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