/**
 * Created by maker on 2016/9/26.
 */
$(function () {
    function data(){
        var y = new Date().getFullYear();
        var part_html = '<option value=""></option>';
        var partHtml = '<option value=""></option>';
        //var n = $("[name='birthday']").attr('data');
        //var q = $("[name='overdate']").attr('data');
        var overdataHtml = '<option value=""></option>';
        for (var k = 1; k < 13; k++) {
            part_html += "<option value=" + k + ">" + k + " 月" + "</option>";

        }
        $(".month").append(part_html);
        for (var i = y; i > (y - 50); i--) {
            //var selected = n == i ? 'selected' : '';
            partHtml += "<option value=" + i + " >" + i + " 年" + "</option>";
        }
        $(".year").append(partHtml);
        for (var j = 1; j <= 31; j++) {
            //var select = q == j ? 'selected' : '';
            overdataHtml += "<option value=" + j + " >" + j + " 日" + "</option>";
        }
        $(".day").append(overdataHtml);
    }
    function data_(){
        var y = new Date().getFullYear();
        var part_html = '<option value=""></option>';
        var partHtml = '<option value=""></option>';
        //var n = $("[name='birthday']").attr('data');
        //var q = $("[name='overdate']").attr('data');
        var overdataHtml = '<option value=""></option>';
        for (var k = 1; k < 13; k++) {
            part_html += "<option value=" + k + ">" + k + " 月" + "</option>";

        }
        $(".month").html(part_html);
        for (var i = y; i > (y - 50); i--) {
            //var selected = n == i ? 'selected' : '';
            partHtml += "<option value=" + i + " >" + i + " 年" + "</option>";
        }
        $(".year").html(partHtml);
        for (var j = 1; j <= 31; j++) {
            //var select = q == j ? 'selected' : '';
            overdataHtml += "<option value=" + j + " >" + j + " 日" + "</option>";
        }
        $(".day").html(overdataHtml);
    }
    data();
    $(".edEdit").click(function () {
        data_()
        if ($(".edMess").hasClass("displayNone")) {
            $(".edMess").removeClass("displayNone");
            $(".edList ul li").removeClass("displayNone");
        }
    })
    $(".jobEdit").click(function () {
        data_()
        if ($(".jobMess").hasClass("displayNone")) {
            $(".jobMess").removeClass("displayNone")
            $(".jobDetail ul li").removeClass("displayNone");
        }
    });
    $(document).on('click', '.save', function () {
        var beginY = $("select[name=beginY]").find("option:selected").text();
        var beginM = $("select[name=beginM]").find("option:selected").text();
        var beginD = $("select[name=beginD]").find("option:selected").text();
        var aq = beginD.split("日");
        var wa = aq[0];
        var wq = beginM.split("月");
        var we = wq[0]
        var wx = beginY.split("年");
        var ww = wx[0]
        var endY = $("select[name=endYear]").find("option:selected").text();
        var endM = $("select[name=endMonth]").find("option:selected").text();
        var endD = $("select[name=endDay]").find("option:selected").text();
        var d = endD.split("日");
        var a = d[0];
        var q = endM.split("月");
        var e = q[0]
        var x = endY.split("年");
        var w = x[0]

        var school = $(".inputM").val();
        var record = $("select[name=education]").find("option:selected").text();
        var major = $(".inputMajor").val();
        var check = true;
        if($(".inputM").val().length==0){
            $(".schoolName").html("不能为空");
            check = false;
        }else{
            $(".schoolName").html("");
        }
        if($(".inputMajor").val().length==0){
            $(".majorName").html("不能为空");
            check = false;
        }else{
            $(".majorName").html("");
        }
        if(record.length==0){
            $(".recordName").html("不能为空");
            check = false;
        }else{
            $(".recordName").html("");
        }
        if(endY.length==0||endM.length==0||endD.length==0){
            $(".leaveTime").html("不能为空");
            check = false;
        }else{
            $(".leaveTime").html("");
        }
        if(beginY.length==0||beginM.length==0||beginD.length==0){
            $(".comeTime").html("不能为空");
            check = false;
        }else{
            $(".comeTime").html("");
        }
        if(check){
            $(".edList ul li.hide").addClass("displayNone");
            $(".edMess").addClass("displayNone");
            $(".edList").append('<div class="tubiwan" data-id=' + school + '><ul class="f-cb">' +
            '<li class="widest"><nobr><p><span>毕业院校</span><span class="margin_le sc">' + school + '</span></p></nobr></li>' +
            '<li class="wide"><nobr><p><span>最高学历</span><span class="margin_le rec">' + record + '</span></p></nobr></li>' +
            '<li class="wider"><nobr><p><span>所学专业</span><span class="margin_le ma">' + major + '</span></p></nobr></li>' +
            '<li class="wider_join"><nobr><p><span>入学时间</span><span class="margin_le jo">'+ww+'-'+we+'-'+wa+'</span></p></nobr></li>'+
            '<li class="wider_Join"><nobr><p><span>毕业时间</span><span class="margin_le ti">'+w+'-'+e+'-'+a+'</span></p></nobr></li>' +
            '<li class="displayNone hide obj" style="line-height: 44px;font-size: 8px"><span class="change">修改</span><span class="del">删除</span></li></ul></div>');
            $(".inputM")[0].value = "";
            $(".inputMajor")[0].value = "";
            data();
        }


    });

    $(document).on('click', '.del', function () {
        $(this).closest("ul").remove()
    });
    $(document).on('click', '.delate', function () {
        $(this).closest(".listDetail").remove()
    });
    $(document).on('click', '.change', function () {

        var id = $(this).closest(".tubiwan").attr("data-id");
        var school = $(".tubiwan[data-id='" + id + "'] ul li span.sc").text();
        var record = $(".tubiwan[data-id='" + id + "'] ul li span.rec").text();
        var major = $(".tubiwan[data-id='" + id + "'] ul li span.ma").text();
        var time = $(".tubiwan[data-id='" + id + "'] ul li span.ti").text();
        var times = $(".tubiwan[data-id='" + id + "'] ul li span.jo").text();
        var less = time.split("-");
        var ss = times.split("-");
        //var endY = $(".endYear").val();
        //var endM = $(".endMonth").val();
        //var endD = $(".endDay").val();
        $(".tubiwan[data-id='" + id + "'] ul").addClass("displayNone")
        $(".tubiwan[data-id='" + id + "']").append('<div class="EdMess">' +
        '<form style="margin: 0">' +
        '<div class="widths">' +
        '<p>学校名称</p>' +
        '<input type="text" name="" class="inputM change_inputM" value='+school+'><span class="error schoolName"></span>' +
        '</div>' +
        '<div class="widths f-cb">' +
        '<div class="content">' +
        '<p>学历</p>' +
        '<select name="education_" class="inputE change_inputE">' +
        '<option value="2">'+record+'</option>' +
        '<option value=""></option>' +
        '<option value="1">大学</option>' +
        '<option value="0">初中</option>' +
        '</select><span class="errorChoose recordName"></span>' +
        '</div>' +
        '<div class="content_">' +
        '<p class="f-cb" style="width: 100%"><span style="float: left">毕业时间</span><span style="float: right;margin-right: 87px ">未毕业</span><input type="checkbox" style="float: right ;margin-top: 4px"></p>' +
        '<select id="endYear" class="year endYear" name="endYear"><option value="" selected>'+less[0]+'年'+'</option></select>' +
        '<select id="endMonth" class="terd month endMonth" name="endMonth"><option value="" selected>'+less[1]+'月'+'</option></select>' +
        '<select id="endDay" class="terd day endDay" name="endDay"><option value="" selected>'+less[2]+'日'+'</option></select><span class="errorChoose leaveTime"></span>' +
        '</div>' +
        '<div class="content_ maRight">' +
        '<p>入学时间</p>' +
        '<select id="endYear" class="year" name="beginY"><option value="" selected>'+ss[0]+'年'+'</option></select>' +
        '<select id="endMonth" class="terd month" name="beginM"><option value="" selected>'+ss[1]+'月'+'</option></select>' +
        '<select id="endDay" class="terd day" name="beginD"><option value="" selected>'+ss[2]+'日'+'</option></select><span class="errorChoose comeTime"></span>' +
        '</div>' +
        '</div>' +
        '<div class="widths">' +
        '<p>所学专业</p>' +
        '<input type="text" name="" class="inputMajor change_inputMajor" value='+major+'><span class="error majorName"></span>' +
        '</div>' +
        '<div class="widths" style="text-align: center;">' +
        '<a class="saved" href="javascript:;">保存</a>' +
        '</div>' +
        '</form>' +
        '</div>');
        data()
    });
    $(document).on('click', '.saved', function () {

        var id = $(this).closest(".tubiwan").attr("data-id");
        var endY = $("select[name=endYear]").find("option:selected").text();
        var endM = $("select[name=endMonth]").find("option:selected").text();
        var endD = $("select[name=endDay]").find("option:selected").text();
        var d = endD.split("日");
        var a = d[0];
        var q = endM.split("月");
        var e = q[0]
        var x = endY.split("年");
        var w = x[0]
        var beginY = $("select[name=beginY]").find("option:selected").text();
        var beginM = $("select[name=beginM]").find("option:selected").text();
        var beginD = $("select[name=beginD]").find("option:selected").text();
        var aq = beginD.split("日");
        var wa = aq[0];
        var wq = beginM.split("月");
        var we = wq[0]
        var wx = beginY.split("年");
        var ww = wx[0]


        var schoo = $(".change_inputM").val();
        var record = $("select[name=education_]").find("option:selected").text();
        var major = $(".change_inputMajor").val();
        var check = true;
        if($(".change_inputM").val().length==0){
            $(".schoolName").html("不能为空");
            check = false;
        }else{
            $(".schoolName").html("");
        }
        if($(".change_inputMajor").val().length==0){
            $(".majorName").html("不能为空");
            check = false;
        }else{
            $(".majorName").html("");
        }
        if(record.length==0){
            $(".recordName").html("不能为空");
            check = false;
        }else{
            $(".recordName").html("");
        }
        if(endY.length==0||endM.length==0||endD.length==0){
            $(".leaveTime").html("不能为空");
            check = false;
        }else{
            $(".leaveTime").html("");
        }
        if(beginY.length==0||beginM.length==0||beginD.length==0){
            $(".comeTime").html("不能为空");
            check = false;
        }else{
            $(".comeTime").html("");
        }
    if(check){
        $(".tubiwan[data-id='" + id + "'] ul li .sc").html( schoo );
        $(".tubiwan[data-id='" + id + "'] ul li .rec").html( record );
        $(".tubiwan[data-id='" + id + "'] ul li .ma").html( major );
        $(".tubiwan[data-id='" + id + "'] ul li .jo").html( ww+'-'+we+'-'+wa);
        $(".tubiwan[data-id='" + id + "'] ul li .ti").html( w+'-'+e+'-'+a);
        $(".tubiwan[data-id='" + id + "'] ul").removeClass("displayNone");
        //$(".tubiwan[data-id='" + id + "']").remove()
        $(".EdMess").remove()
    }



        //$(".edList").append('<div class="tubiwan" data-id=' + school + '><ul class="f-cb">' +
        //'<li class="widest"><nobr><p><span>毕业院校</span><span class="margin_le sc">' + school + '</span></p></nobr></li>' +
        //'<li class="wide"><nobr><p><span>最高学历</span><span class="margin_le rec">' + record + '</span></p></nobr></li>' +
        //'<li class="wider"><nobr><p><span>所学专业</span><span class="margin_le ma">' + major + '</span></p></nobr></li>' +
        //'<li class="wider_join"><nobr><p><span>入学时间</span><span class="margin_le jo">'+ww+'-'+we+'-'+wa+'</span></p></nobr></li>'+
        //'<li class="wider_Join"><nobr><p><span>毕业时间</span><span class="margin_le ti">'+w+'-'+e+'-'+a+'</span></p></nobr></li>' +
        //'<li class="hide obj" style="line-height: 44px;font-size: 8px"><span class="change">修改</span><span class="del">删除</span></li></ul></div>')
    });

    $(document).on('click', '.save_job', function () {
        var endY = $("select[name=leaveY]").find("option:selected").text();
        var endM = $("select[name=leaveM]").find("option:selected").text();
        var endD = $("select[name=leaveD]").find("option:selected").text();
        var d = endD.split("日");
        var a = d[0];
        var q = endM.split("月");
        var e = q[0]
        var x = endY.split("年");
        var w = x[0]
        var joinY = $("select[name=joinY]").find("option:selected").text();
        var joinM = $("select[name=joinM]").find("option:selected").text();
        var joinD = $("select[name=joinD]").find("option:selected").text();
        var aq = joinD.split("日");
        var wa = aq[0];
        var wq = joinM.split("月");
        var we = wq[0]
        var wx = joinY.split("年");
        var ww = wx[0]
        var id = $(this).closest(".listDetail").attr("data-id");
        //$(".EdMess").addClass("displayNone");
        //$("ul").removeClass("displayNone");

        var company = $(".inputC").val();

        var station = $(".inputO").val();
        var matter = $(".aa").val();

        var check = true;
        if(company.length==0){
            $(".companyName").html("不能为空");
            check = false;
        }else{
            $(".companyName").html("");
        }
        if(station.length==0){
            $(".yourJobName").html("不能为空");
            check = false;
        }else{
            $(".yourJobName").html("");
        }
        if(matter.length==0){
            $(".mainWork").html("不能为空");
            check = false;
        }else{
            $(".mainWork").html("");
        }
        if(endY.length==0||endM.length==0||endD.length==0){
            $(".leaveJobTime").html("不能为空");
            check = false;
        }else{
            $(".leaveJobTime").html("");
        }
        if(joinY.length==0||joinM.length==0||joinD.length==0){
            $(".joinJobTime").html("不能为空");
            check = false;
        }else{
            $(".joinJobTime").html("");
        }
        if(check){
            $(".listDetail ul li.hide").addClass("displayNone");
            $(".jobMess").addClass("displayNone");
            $(".listDetail[data-id='" + id + "']").remove()
            $(".jobDetail").append('<div class="listDetail" data-id=' + company + '><ul class="f-cb">' +
            '<li class="widest_co"><nobr><p><span>公司名称</span><span class="margin_le company">' + company + '</span></p></nobr></li>' +
            '<li class="wideLine"><nobr><p><span>职位名称</span><span class="margin_le station">' + station + '</span></p></nobr></li>' +
            '<li class="wider_job"><nobr><p><span>入职时间</span><span class="margin_le join">'+ww+'-'+we+'-'+wa+'</span></p></nobr></li>' +
            '<li class="wider_job"><nobr><p><span>离职时间</span><span class="margin_le leave">'+w+'-'+e+'-'+a+'</span></p></nobr></li>' +
            '<li class="hide obj displayNone" style="line-height: 44px;font-size: 8px"><span class="changeObj">修改</span><span class="delate">删除</span></li></ul>'+
            '<div class="widths needHide" style="padding-left: 6px">'+
            '<p class="haveBorder"><span class="span">工作内容</span><span class="matter jobMatter">' + matter + '</span></p>'+
            '</div></div>')
            $(".inputC")[0].value = "";
            $(".inputO")[0].value = "";
            $(".fg")[0].value = "";
        }

    })

    $(document).on('click', '.changeObj', function () {
        var id = $(this).closest(".listDetail").attr("data-id");
        var time = $(".listDetail[data-id='" + id + "'] ul li span.leave").text();
        var times = $(".listDetail[data-id='" + id + "'] ul li span.join").text();
        var less = time.split("-");
        var ss = times.split("-");
        console.log(ss)
        var company = $(".listDetail[data-id='" + id + "'] ul li span.company").text();
        var station = $(".listDetail[data-id='" + id + "'] ul li span.station").text();
        var matter = $(".listDetail[data-id='" + id + "'] span.jobMatter").text();
        $(".listDetail[data-id='" + id + "'] ul").addClass("displayNone")
        $(".listDetail[data-id='" + id + "'] .needHide").addClass("displayNone")
        $(".listDetail[data-id='" + id + "']").append('<div class="EdMess">' +
        '<form style="margin: 0">' +
        '<div class="widths">' +
        '<p>公司名称</p>' +
        '<input type="text" name="" class="inputC comName" value='+company+'><span class="error companyName"></span>' +
        '<p>职位名称</p>' +
        '<input type="text" name="" class="inputO jobName" value='+station+'><span class="error-bot yourJobName"></span>' +
        '</div>' +
        '<div class="experience f-cb">' +
        '<div class="jobBegin">' +
        '<p>开始任职时间</p>' +
        '<select id="" class="year" name="joinY"><option value="" selected>'+ss[0]+'年'+'</option></select>' +
        '<select id="" class="terd month" name="joinM"><option value="" selected>'+ss[1]+'月'+'</option></select>' +
        '<select id="" class="terd day" name="joinD"><option value="" selected>'+ss[2]+'日'+'</option></select><span class="errorChoose joinJobTime"></span>' +
        '</div>' +
        '<div class="endBegin marginLeft">' +
        '<p class="f-cb" style="width: 100%"><span class="floatL">离职时间</span><span class="float tillLeave">未离职</span><input type="checkbox" class="float" style="margin-top: 4px"></p>' +
        '<select id="" class="year" name="leaveY"><option value="" selected>'+less[0]+'年'+'</option></select>' +
        '<select id="" class="terd month" name="leaveM"><option value="" selected>'+less[1]+'月'+'</option></select>' +
        '<select id="" class="terd day" name="leaveD"><option value="" selected>'+less[2]+'日'+'</option></select><span class="errorChoose leaveJobTime"></span>' +
        '</div>' +
        '</div>' +
        '<div class="widths">' +
        '<p>工作内容</p>' +
        '<textarea rows="6" class="matter ff fg">'+matter+'</textarea><span class="error mainWork"></span>' +
        '</div>' +
        '<div class="widths" style="text-align: center">' +
        '<a href="javascript:;" class="save_jobC">保存</a>' +
        '</div>' +
        '</form>' +
        '</div>');
        data()
    });
    $(document).on('click', '.save_jobC', function () {
        var id = $(this).closest(".listDetail").attr("data-id");
        //$(".EdMess").addClass("displayNone");
        var matter = $(".ff").val();

        var company = $(".comName").val();
        var station = $(".jobName").val();
        var joinY = $("select[name=joinY]").find("option:selected").text();
        var joinM = $("select[name=joinM]").find("option:selected").text();
        var joinD = $("select[name=joinD]").find("option:selected").text();
        var o = joinD.split("日");
        var p = o[0];
        var i = joinM.split("月");
        var u = i[0]
        var y = joinY.split("年");
        var t = y[0]
        var endY = $("select[name=leaveY]").find("option:selected").text();
        var endM = $("select[name=leaveM]").find("option:selected").text();
        var endD = $("select[name=leaveD]").find("option:selected").text();
        var d = endD.split("日");
        var a = d[0];
        var q = endM.split("月");
        var e = q[0]
        var x = endY.split("年");
        var w = x[0]
        var check = true;
        if(company.length==0){
            $(".companyName").html("不能为空");
            check = false;
        }else{
            $(".companyName").html("");
        }
        if(station.length==0){
            $(".yourJobName").html("不能为空");
            check = false;
        }else{
            $(".yourJobName").html("");
        }
        if(matter.length==0){
            $(".mainWork").html("不能为空");
            check = false;
        }else{
            $(".mainWork").html("");
        }
        if(endY.length==0||endM.length==0||endD.length==0){
            $(".leaveJobTime").html("不能为空");
            check = false;
        }else{
            $(".leaveJobTime").html("");
        }
        if(joinY.length==0||joinM.length==0||joinD.length==0){
            $(".joinJobTime").html("不能为空");
            check = false;
        }else{
            $(".joinJobTime").html("");
        }
        if(check){
            $("ul").removeClass("displayNone");
            $(".listDetail[data-id='" + id + "'] ul li .company").html( company );
            $(".listDetail[data-id='" + id + "'] ul li .station").html(station );
            $(".listDetail[data-id='" + id + "'] ul li .join").html( t+'-'+u+'-'+p );
            $(".listDetail[data-id='" + id + "'] ul li .leave").html( w+'-'+e+'-'+a );
            $(".listDetail[data-id='" + id + "'] .needHide .jobMatter").html( matter );
            //$(".listDetail[data-id='" + id + "']").removeClass("displayNone");
            $(".listDetail[data-id='" + id + "'] ul").removeClass("displayNone")
            $(".listDetail[data-id='" + id + "'] .needHide").removeClass("displayNone")
            $(".EdMess").remove()
        }




        //$(".jobDetail").append('<div class="listDetail" data-id=' + company + '><ul class="f-cb">'+
        //'<li class="widest_co"><nobr><p><span>公司名称</span><span class="margin_le company">' + company + '</span></p></nobr></li>'+
        //'<li class="wideLine"><nobr><p><span>职位名称</span><span class="margin_le station">' + station + '</span></p></nobr></li>'+
        //'<li class="wider_job"><nobr><p><span>入职时间</span><span class="margin_le join">'+t+'-'+u+'-'+p+'</span></p></nobr></li>'+
        //'<li class="wider_job"><nobr><p><span>离职时间</span><span class="margin_le leave">'+w+'-'+e+'-'+a+'</span></p></nobr></li>'+
        //'<li class="hide obj"><span class="changeObj">修改</span><span class="delate">删除</span></li>'+
        //'</ul>'+
        //'<div class="widths needHide" style="padding-left: 6px">'+
        //'<p class="haveBorder"><span class="span">工作内容</span><span class="job_detail master jobMatter">' + matter + '</span></p>'+
        //'</div></div>')
        //$(".listDetail[data-id='" + id + "'].needHide").addClass("displayNone");
    });
});
