//City bind on page load
$(document).ready(function () {
    $("#ddlallplays> option").remove();
    $("#ddlallplays").append($("<option></option>").val("0").html("Loading..."));
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "EventService.asmx/GetCityForEvent",
        data: "{}",
        dataType: "json",
        success: function (data) {
            $.each(data.d, function (key, value) {
                $("#ddlallplays").append($("<option></option>").val(value.cityId).html(value.CityName));
            });
            $("#ddlallplays option[value='0']").remove();
            $("#ddlallplays").prepend($("<option value='0' selected='selected'>My City</option>"));
            GetEvent(0, 0);

        },
        error: function (result) {
            //alert(result);
        }
    });

    $("#ddlallplays").change(function (e) {
        var cityId = $("#ddlallplays").val();
        if (cityId != "0") {
            CheckBoxFilledoncitybase(cityId);
            GetEvent(cityId, 0);
        }
        else {
            GetEvent(0, 0);


        }
    });
});


//event bind on city basis
function GetEvent(cityId, selectedDate) {
    var cityid = cityId;
    var fullDate = new Date();
    var twoDigitMonth = (fullDate.getMonth() + 1) + "";
    if (twoDigitMonth.length == 1)
        twoDigitMonth = "0" + twoDigitMonth;
    var twoDigitDate = fullDate.getDate() + "";
    if (twoDigitDate.length == 1)
        twoDigitDate = "0" + twoDigitDate;
    var did = fullDate.getFullYear() + twoDigitMonth + twoDigitDate;
    
    $.ajax({
        type: "POST",
        url: "EventService.asmx/GetDataForReapeter",
        data: "{cityId:'" + cityId + "',selectedDate:'" + selectedDate + "'}",

        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
            var events = data.d;
            $("#divReapeaterBind").empty();
            $.each(events, function (index, evn) {
                $("#divReapeaterBind")
                    .append('<div class="col-md-6"><div class="panel panel-default"><div class="panel-body"><div class="row"><div class="col-md-5">' +
                                '<img src="upload/' + evn.ImageMedium + '" alt="image"  />' +
                                     '</div><div class="col-md-7">' +
                                        '<p class="EventShortDetailsTxt" style="height:200px;overflow: auto;"> ' + evn.shortdesc + '</p></div></div>' +
                         '</div><div class="panel-footer"><div class="row"><div class="col-md-8">' +
                             ' <span><a style="color:#8b7816;" href=EventDetail.aspx?cid=' + evn.cityId + '&eid=' + evn.eventId + '&did=0&type=E>' + evn.eventName + '</a></span>' +
                             '<br /><span>' + evn.releaseDate + '</span></div><div class="col-md-4">' +
                             '<button class="btn btn-primary" style="background: #8b7816; border: none;"><a style="text-decoration:none;color:white;" href=EventDetail.aspx?cid=' + evn.cityId + '&eid=' + evn.eventId + '&did=0&type=E>' + evn.bookingtext + '</a></button>' + '</div>' +
                '</div>' +
        '</div></div></div></div>');

            });
        },
        failure: function (msg) {
            $("#divReapeaterBind").text(msg);
        }
    });
}

//Category bind on change of city id

function GetCategoryForEvents(eventId, cityid) {

    $('#' + eventId + '').empty();
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "EventService.asmx/GetCategory",
        data: "{eventId:'" + eventId + "',cityid:'" + cityid + "'}",
        dataType: "json",
        success: function (data) {
            $.each(data.d, function (key, value) {
                $('#' + eventId + '').append('<li class="subcategory" >' +
                    value.Categoryname +
                        '</li>');
            });

        },
        error: function (result) {
            //  alert(result);
        }
    });

}


$(document).ready(function () {
    // var cal = "0";
    // updateFields(cal)
    // getSelectionHandler(SELECTED_RANGE, 0);
    CheckBoxFilled(0);

});

//checkbox on pageload and 
function CheckBoxFilled(cityId) {
    var cityid = $("#ddlallplays").val();
    $('#dvCheckBoxListControl').empty();
    var eventId = 0;
    var cityid = cityId;
    $.ajax({
        type: "POST",
        url: "EventService.asmx/GetCategory",
        contentType: "application/json; charset=utf-8",
        data: "{eventId:'" + eventId + "',cityid:'" + cityid + "'}",
        dataType: "json",
        success: AjaxSucceeded,
        error: AjaxFailed
    });
}

//checkbox on city basis 
function CheckBoxFilledoncitybase(cityId) {
    $('#dvCheckBoxListControl').empty();
    var eventId = 0;
    var cityid = cityId;
    $.ajax({
        type: "POST",
        url: "EventService.asmx/GetCategoryOncitybasis",
        contentType: "application/json; charset=utf-8",
        data: "{cityid:'" + cityid + "'}",
        dataType: "json",
        success: AjaxSucceeded,
        error: AjaxFailed
    });
}


//
function AjaxSucceeded(result) {

    BindCheckBoxList(result);
}
function AjaxFailed(result) {
    alert('Failed to load checkbox list');
}
//Checklist bind
function BindCheckBoxList(result) {

    var table = $('<table></table>');
    var counter = 0;
    var data = result.d;
    $('#genreContainer').empty();
    $.each(data, function (key, value) {

        $("#genreContainer").append($('<input>').attr({
            type: 'checkbox', name: 'chklistitem', value: value.CategoryId, checked: 'checked', onclick: 'javascript:OnCheckCheckList()', Cssclass: 'form-control', id: 'chklistitem' + counter
        })).append(
        $('<span style="margin:0px 5px;"></span>').attr({
            for: 'chklistitem' + counter++
        }).text(value.Categoryname));
    });

    $('#dvCheckBoxListControl').append(table);
}


//event bind on checklist cheked
function OnCheckCheckList() {
    // var objArray = [];
    var cityId = $("#ddlallplays").val();
    //  alert(cityId);
    var strId = "";

    var fullDate = new Date();
    var twoDigitMonth = (fullDate.getMonth() + 1) + "";
    if (twoDigitMonth.length == 1)
        twoDigitMonth = "0" + twoDigitMonth;
    var twoDigitDate = fullDate.getDate() + "";
    if (twoDigitDate.length == 1)
        twoDigitDate = "0" + twoDigitDate;
    var did = fullDate.getFullYear() + twoDigitMonth + twoDigitDate;
    

    $("input[name=chklistitem]:checked").each(function (index, elem) {
        var id = $(this).attr('id');
        var val = $(this).val();
        var obj = { 'Id': id, 'Value': val };
        strId += val + ",";

    });
    $.ajax({
        type: "POST",
        url: "EventService.asmx/GetEventCatagoryOnBasis",
        contentType: "application/json; charset=utf-8",
        data: "{CategoryId:'" + strId + "'}",
        dataType: "json",
        success: function (data) {
            var events = data.d;
            $("#divReapeaterBind").empty();
            $.each(events, function (index, evn) {
                $("#divReapeaterBind").append('<div class="Event_Block">' +

                        '<div class="Event_Block_Image">' +
                                '<img src="upload/' + evn.ImageMedium + '"  class="MyClassForAllMediumImages"  ></img>' +
                         '</div>' +
                                     '<div  class="Event_Block_Details">' +
                                        '<div class="EventShortDetailsBox"><p class="EventShortDetailsTxt"> ' + evn.shortdesc + '</p></div>' +
                         '<div class="EventBlock_Info">' +
                             ' <span class="EventBlockTitle"><a href=EventDetail.aspx?cid=' + cityId + '&eid=' + evn.eventId + '&did=0&type=E>' + evn.eventName + '</a></span><br />' +
                             '<span class="EventBlockRelDate">' + evn.releaseDate + '</span><br />' +
                             '<div class="EventBlockBtn"><a style="text-decoration:none;color:white;" href=EventDetail.aspx?cid=' + cityId + '&eid=' + evn.eventId + '&did=0&type=E>' + evn.bookingtext + '</a>' + '</div>' +
                  '</div>' +
          '</div></div>');

            });
        },
        error: function (result) {
            //alert(result);
        }
    });



}


$(document).ready(function () {
    function updateFields(cal) {
        var cityId = "0";
        var date = cal.selection.get();

        if (date) {
            date = Calendar.intToDate(date);
            //   

            (date);
            var selectedDate = Calendar.printDate(date, "%Y%m%d");

            GetEvent(cityId, selectedDate);
        }

    };

    Calendar.setup({
        cont: "cont",
        showTime: 12,
        onSelect: updateFields,
        onTimeChange: updateFields
    });
});
//]]></script>