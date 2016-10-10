// JavaScript Document
$(function () {
    var y = new Date().getFullYear();
    var part_html = '<option value="">月</option>';
    var partHtml = '<option value="">年</option>';
    var n = $("[name='birthday']").attr('data');
    var q = $("[name='overdate']").attr('data');
    var overdataHtml = '<option value="" selected>日</option>';
    for (var k = 1; k < 13; k++) {
        part_html += "<option value=" + k + ">" + k + " 月" + "</option>";

    }
    $(".month").append(part_html);
    for (var i = y; i > (y - 50); i--) {
        var selected = n == i ? 'selected' : '';
        partHtml += "<option value=" + i + " " + selected + " >" + i + " 年" + "</option>";
    }
    $(".year").append(partHtml);
    for (var j = 1; j <= 31; j++) {
        var select = q == j ? 'selected' : '';
        overdataHtml += "<option value=" + j + " " + select + " >" + j + " 日" + "</option>";
    }
    $(".day").html(overdataHtml);
    var school = document.getElementById("school");
    var level = document.getElementById("education");
    var sex = document.getElementById("sex");
    var major = document.getElementById("major");
    var $this = $(this);
    var birYear = document.getElementById("birYear");
    var birMonth = document.getElementById("birMonth");
    var birDay = document.getElementById("birDay");
    var endYear = document.getElementById("endYear");
    var endMonth = document.getElementById("endMonth");
    var endDay = document.getElementById("endDay");
    var validate = function (data, r) {
        var rule = {
            number: function (data) {
                return /^[a-zA-Z0-9_-]{3,12}$/.test(data)
            },
            num: function (data) {
                return /^(?!(?:\d+|[a-zA-Z]+)$)[\da-zA-Z]{3,12}$/.test(data)
            },
            phone: function (data) {
                return /^\d{11}$/.test(data);
            },
            email: function (data) {
                return /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/.test(data);
            },
            passWord: function (data) {
                return /^[a-zA-Z0-9_-]{6,18}$/.test(data);
            },
            nfff: function (data) {
                return /^[\u4e00-\u9fa5]{2,4}$/.test(data)
            }
        };
        return rule[r](data);
    };
    var check=true;

    //$("#mobile").blur(function () {
    //    if($(".d[name=mobile]").val().length==0){
    //        $(".phonenumber").html("请输入您的手机号!");
    //        check = false;
    //    }else{
    //        if(!validate($(".d[name=mobile]").val(),'phone')){
    //            $(".phonenumber").html("请输入11位数字!");
    //            check = false;
    //        }else{
    //            $(".phonenumber").html('<img class="pic" src="../static/images/ph-11.png" />')
    //        }
    //    }
    //});

    $("#userNumber").blur(function () {
        if($(".a[name=userName]").val().length==0){
            $(".usernumber").html(" 用户名不能为空!");
            check = false;
        }else{
            if(!validate($(".a[name=userName]").val(),'number')){
                $(".usernumber").html(" 请输入字母或下划线，长度在6-18之间!");
                check = false;
            }else{
                $(".usernumber").html('<img class="pic" src="../static/images/ph-11.png" />')
            }
        }
    });
    $(".b").blur(function () {
        if($(".b[name=passWords]").val().length==0){
            $(".password").html(" 密码不能为空!");
            check = false;
        }else{
            if(!validate($(".b[name=passWords]").val(),'passWord')){
                $(".password").html(" 长度在6-18之间，只能包含字母、数字和下划线!");
                check = false;
            }else{
                $(".password").html('<img class="pic" src="../static/images/ph-11.png" />')
            }
        }
    });
    //$("#repassword").blur(function () {
    //    if($(".c[name=repassWord]").val().length==0){
    //        $(".repassword").html(" 密码不能为空!");
    //        check = false;
    //    }else{
    //        if(!validate($(".c[name=repassWord]").val(),'passWord')){
    //            $(".repassword").html(" 长度在6-18之间，只能包含字母、数字和下划线!");
    //            check = false;
    //        }else{
    //            $(".repassword").html('<img class="pic" src="../static/images/ph-11.png" />')
    //        }
    //    }
    //});


    //$(document).on("click", ".check", function () {
    //    var check = true;
    //    if($(".d[name=mobile]").val().length==0){
    //        $(".phonenumber").html("请输入您的手机号!");
    //        check = false;
    //    }else{
    //        if(!validate($(".d[name=mobile]").val(),'phone')){
    //            $(".phonenumber").html("请输入11位数字!");
    //            check = false;
    //        }else{
    //            $(".phonenumber").html('<img class="pic" src="../static/images/ph-11.png" />')
    //        }
    //    }
    //    if($(".b[name=passWord]").val().length==0){
    //        $(".password").html(" 密码不能为空!");
    //        check = false;
    //    }else{
    //        if(!validate($(".b[name=passWord]").val(),'passWord')){
    //            $(".password").html(" 长度在6-18之间，只能包含字母、数字和下划线!");
    //            check = false;
    //        }else{
    //            $(".password").html('<img class="pic" src="../static/images/ph-11.png" />')
    //        }
    //    }
    //    if($(".a[name=userName]").val().length==0){
    //        $(".usernumber").html(" 用户名不能为空!");
    //        check = false;
    //    }else{
    //        if(!validate($(".a[name=userName]").val(),'number')){
    //            $(".usernumber").html(" 请输入字母或下划线，长度在6-18之间!");
    //            check = false;
    //        }else{
    //            $(".usernumber").html('<img class="pic" src="../static/images/ph-11.png" />')
    //        }
    //    }
    //    if($(".c[name=repassWord]").val().length==0){
    //        $(".repassword").html(" 密码不能为空!");
    //        check = false;
    //    }else{
    //        if(!validate($(".c[name=repassWord]").val(),'passWord')){
    //            $(".repassword").html(" 长度在6-18之间，只能包含字母、数字和下划线!");
    //            check = false;
    //        }else{
    //            $(".repassword").html('<img class="pic" src="../static/images/ph-11.png" />')
    //        }
    //    }
    //
    //    if (check) {
    //        console.log("认证成功")
    //    }
    //})
});
