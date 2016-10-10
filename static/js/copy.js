/**
 * Created by maker on 2016/9/22.
 */
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
    var name = document.getElementById("name");
    var sex = document.getElementById("sex");
    var email = document.getElementById("email");
    var phoneNumber = document.getElementById("phone");
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
    }
    var check = true;
    $("#school").blur(function () {
        //var obj = document.getElementById("mobile");
        if (school.value == "") {
            $(".school").html("毕业院校不能为空!")
            check = false;
        } else {
            $(".school").html('<img class="pic" src="../static/images/ph-11.png" />')
        }
    });
    $("#phone").blur(function () {
        //if (!/^\d{11}$/.test(phoneNumber.value)) {
        //    if (phoneNumber.value == "") {
        //        $(".pass").html("请输入您的手机号!")
        //    } else
        //        $(".pass").html("请输入11位数字!")
        //}
        //else {
        //    $(".pass").html('<img class="pic" src="../static/images/ph-11.png" />')
        //}
        if($(".four[name=mobile]").val().length==0){
            $(".pass").html("请输入您的手机号!")
            check = false;
        }else{
            if(!validate($(".four[name=mobile]").val(),'phone')){
                $(".pass").html("请输入11位数字!")
                check = false;
            }else{
                $(".pass").html('<img class="pic" src="../static/images/ph-11.png" />')
            }
        }
    });
    $("#major").blur(function () {
        if (major.value == "") {
            $(".direction").html("请选择您的专业!")
            check = false;
        } else {
            $(".direction").html('<img class="pic" src="../static/images/ph-11.png" />')
        }
    });
    $("#email").blur(function () {
        //if (!/^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/.test(email.value)) {
        //    if (email.value == "") {
        //        $(".email").html("请输入您的邮箱!")
        //    } else
        //        $(".email").html("您输入的邮箱有误!")
        //}
        //else {
        //    $(".email").html('<img class="pic" src="../static/images/ph-11.png" />')
        //}
        if($(".fire[name=email]").val().length==0){
            $(".email").html("请输入您的邮箱!")
            check = false;
        }else{
            if(!validate($(".fire[name=email]").val(),'email')){
                $(".email").html("您输入的邮箱有误!")
                check = false;
            }else{
                $(".email").html('<img class="pic" src="../static/images/ph-11.png" />')
            }
        }
    });
    $("#education").blur(function () {
        if (level.value == "") {
            $(".level").html("请选择您的学历!")
            check = false;
        } else {
            $(".level").html('<img class="pic" src="../static/images/ph-11.png" />')
        }
    });

    $("#sex").blur(function () {
        if (sex.value == "") {
            $(".judge").html("请选择您的性别!")
            check = false;
        } else {
            $(".judge").html('<img class="pic" src="../static/images/ph-11.png" />')
        }
    });

    $("#name").blur(function () {

        //if (!/^[\u4e00-\u9fa5]{2,4}$/.test(name.value)) {
        //    if (name.value == "") {
        //        $(".name").html("请输入您的姓名!")
        //    } else {
        //        $(".name").html("只能输入中文!")
        //    }
        //} else {
        //    $(".name").html('<img class="pic" src="../static/images/ph-11.png" />')
        //}
        if($(".one[name=uname]").val().length==0){
            $(".name").html("请输入您的姓名!")
            check = false;
        }else{
            if(!validate($(".one[name=uname]").val(),'nfff')){
                $(".name").html("只能输入中文!")
                check = false;
            }else{
                $(".name").html('<img class="pic" src="../static/images/ph-11.png" />')
            }
        }
    });
    $("#birYear").blur(function () {
        if (birYear.value == "" || birMonth.value == "" || birDay.value == "") {
            $(".birth").html("请选择您出生日期!")
            check = false;
        } else {
            $(".birth").html('<img src="../static/images/ph-11.png" />')
        }
    });
    $("#birMonth").blur(function () {
        if (birYear.value == "" || birMonth.value == "" || birDay.value == "") {
            $(".birth").html("请选择您出生日期!")
            check = false;
        } else {
            $(".birth").html('<img src="../static/images/ph-11.png" />')
        }
    });
    $("#birDay").blur(function () {
        if (birYear.value == "" || birMonth.value == "" || birDay.value == "") {
            $(".birth").html("请选择您出生日期!")
            check = false;
        } else {
            $(".birth").html('<img src="../static/images/ph-11.png" />')
        }
    });
    $("#endYear").blur(function () {
        if (endYear.value == "" || endMonth.value == "" || endDay.value == "") {
            $(".endTime").html("请选择您出生日期!")
            check = false;
        } else {
            $(".endTime").html('<img src="../static/images/ph-11.png" />')
        }
    });
    $("#endMonth").blur(function () {
        if (endYear.value == "" || endMonth.value == "" || endDay.value == "") {
            $(".endTime").html("请选择您出生日期!")
            check = false;
        } else {
            $(".endTime").html('<img src="../static/images/ph-11.png" />')
        }
    });
    $("#endDay").blur(function () {
        if (endYear.value == "" || endMonth.value == "" || endDay.value == "") {
            $(".endTime").html("请选择您出生日期!")
            check = false;
        } else {
            $(".endTime").html('<img src="../static/images/ph-11.png" />')
        }
    });


    $(document).on("click", ".textN", function () {

        if (birYear.value == "" || birMonth.value == "" || birDay.value == "") {
            $(".birth").html("请选择您出生日期!")
            check = false;
        } else {
            $(".birth").html('<img src="../static/images/ph-11.png" />')
        }
        if (endYear.value == "" || endMonth.value == "" || endDay.value == "") {
            $(".endTime").html("请选择您的毕业时间!")
            check = false;
        } else {
            $(".endTime").html('<img src="../static/images/ph-11.png" />')
        }

        if($(".four[name=mobile]").val().length==0){
            $(".pass").html("请输入您的手机号!")
            check = false;
        }else{
            if(!validate($(".four[name=mobile]").val(),'phone')){
                $(".pass").html("请输入11位数字!")
                check = false;
            }else{
                $(".pass").html('<img class="pic" src="../static/images/ph-11.png" />')
            }
        }
        if($(".fire[name=email]").val().length==0){
            $(".email").html("请输入您的邮箱!")
            check = false;
        }else{
            if(!validate($(".fire[name=email]").val(),'email')){
                $(".email").html("您输入的邮箱有误!")
                check = false;
            }else{
                $(".email").html('<img class="pic" src="../static/images/ph-11.png" />')
            }
        }
        if (major.value == "") {
            $(".direction").html("请选择您的专业!")
            check = false;
        } else {
            $(".direction").html('<img class="pic" src="../static/images/ph-11.png" />')
        }
        if (sex.value == "") {
            $(".judge").html("请选择您的性别!")
            check = false;
        } else {
            $(".judge").html('<img class="pic" src="../static/images/ph-11.png" />')
        }
        if($(".one[name=uname]").val().length==0){
            $(".name").html("请输入您的姓名!")
            check = false;
        }else{
            if(!validate($(".one[name=uname]").val(),'nfff')){
                $(".name").html("只能输入中文!")
                check = false;
            }else{
                $(".name").html('<img class="pic" src="../static/images/ph-11.png" />')
            }
        }
        if (school.value == "") {
            $(".school").html("毕业院校不能为空!")
            check = false;
        } else {
            $(".school").html('<img class="pic" src="../static/images/ph-11.png" />')
        }
        if (level.value == "") {
            $(".level").html("请选择您的学历!")
            check = false;
        } else {
            $(".level").html('<img class="pic" src="../static/images/ph-11.png" />')
        }
        //if (/^\d{11}$/.test(phoneNumber.value) && /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/.test(email.value) && major.value != "" && sex.value != "" && /^[\u4e00-\u9fa5]{2,4}$/.test(name.value) && school.value != "" && level.value != "" && birYear.value != "" && birMonth.value != "" && birDay.value != "" && endYear.value != "" && endMonth.value != "" && endDay.value != "") {
        if(check)
        {
            //$(".judge,.level,.pass,.email,.school,.name,.direction,.birth,.endTime").html("")
            console.log("sssss")
            //loading();
            $.ajax({
                type: $this.closest("form").attr("method"),
                url: $this.closest("form").attr("action"),
                data: $this.closest("form").serialize(),
                dataType: "json",
                //beforeSend:loading,
                success: function () {
                    alert("hello")
                }
            })
        }
    });
});