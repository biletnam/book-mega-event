$(document).ready(function () {
    $(".dellaNav ul li").click(function () {
        var tabfor = $(this).attr("id");
        $(".tabcontentsection").hide();
        $("#" + tabfor + "Content").show();
        $(this).addClass('dellaselected_li').siblings('.dellaselected_li').removeClass('dellaselected_li');
        $(".dellaNav ul li").css('color', 'black');
        $(this).css('color', 'white');
    });

    function showModelPopup() {
        $(".selectorder_div").show();
        $(".popupBack").show();
    }
    function hideModelPopup() {
        $(".selectorder_div").hide();
        $(".popupBack").hide();
    }
    function placeModelpopup() {
        var Popup_width = $(".selectorder_div").width();
        var width_margin = "-" + Popup_width / 2 + "px";
        $(".popupDiv").css({ "margin-left": width_margin });
    }

    $("#ModelPopupcloseBtn").click(function () {
        hideModelPopup()
    });

    $(".dellaNavMenu").click(function () {
        $(".dellaNav").slideToggle();
    });

    $(".dellaNav ul li").click(function () {
        var workspaceWidth = innerWidth;
        var width = innerWidth;
        var selectedmenuTxt = $(this).text();
        if (width <= '750') {
            $(".dellaNav").hide();
            $(".dellaNavMenu span").text(selectedmenuTxt);
        }
        else {
            $(".dellaNavMenu span").text(selectedmenuTxt);
        }
    });

    $("#DellaCalnext").click(function () {
        GoNextDate();
    });

    $("#DellaCal_prev").click(function () {
        GoPrevDate();
    });

    function GoNextDate(e) {
        $("#dellaCalendarCover").stop().animate({ 'scrollLeft': '+=230px' }, 'slow');
    };

    function GoPrevDate(e) {
        $("#dellaCalendarCover").stop().animate({ 'scrollLeft': '-=230px' }, 'slow');
    };

    $('.available').on('click', function () {
        var showdatetxt = $(this).children("#dateValue").text();

        var showtimetxt = $(this).children("#timeValue").text();
        var timingId = $(this).children("#timingId").text();
        // alert(timingId);
        var screenId = $(this).children("#screenId").text();
        placeModelpopup()
        showModelPopup()
        $(".selectorder_div").find("#showDate_td").text(showdatetxt);
        $(".selectorder_div").find("#showTime_td").text(showtimetxt);
        $(".selectorder_div").find("#timingId_td").text(timingId);
        $(".selectorder_div").find("#DivScrId").text(screenId);

        $("#spanPrice").empty();
        $("#ddlClass1").empty();
        $("#tblCategoryDetails").empty();
        mytable = $('<li></li>').attr({ id: "" });
        var strcategorytext = "";
        $.ajax({
            type: "POST",
            contentType: "application/json; charset=utf-8",
            url: "CluehuntwebService.asmx/FillDropdown",
            data: "{timingId: '" + timingId + "'}",
            dataType: "json",

            success: function (data) {
                $.each(data.d, function (key, value) {
                    var pricewithId = value.Id.split('$');
                    var price = pricewithId[1];
                    $("#ddlClass1").append($("<option></option>").val(value.Id).html(value.Values));
                    $("<li class='txtcolumn'></li>").val(value.Id).html("<div>" + value.Values + "</div><span>" + 'Rs.<i>' + price + '/-</i>' + "</span>").appendTo(mytable);
                });
                $("#ddlClass1 option[value='0']").remove();
                $("#ddlClass1").prepend($("<option value='0'>---Select Category---</option>"));
                $("#tblCategoryDetails").append(strcategorytext);
                //$("<li class='txtcolumn'></li>").val(value.Id).html("<div class='txtcolumn'><b>Address:</b> 101, Roha Orion, 16th Road, Near Mini Punjab Restaurant, Bandra West, Mumbai</div>").appendTo(mytable);
                mytable.appendTo("#tblCategoryDetails");
            },
            error: function (result) {
            }
        });
    });


    $("#ddlClass1").change(function () {
        $("#spanPrice").text();
        var selectedClassID = $("#ddlClass1 option:selected").attr('value').split('$');
        var selectedClass = selectedClassID[1];
        if (selectedClassID != 0) {
            $("#spanPrice").text('Total Paid : Rs.' + selectedClass);
        }
        else {
            $("#spanPrice").text('Rs.' + '0.00/-');
        }
    });
});

function SubmitDellaRequest() {
    var strTID = $("#timingId_td").text();
    var screenId = $("#DivScrId").text();
    var selectedClass = $("#ddlClass1 option:selected").text();
    var selectedoption = $("#ddlClass1 option:selected").val();
    var splitedSelection = selectedoption.split("$");
    var strID = splitedSelection[0]
    var splitedPrice = $("#spanPrice").text().split(":");
    var selectedCost = splitedPrice[1].split(".");
    var totalCost = selectedCost[1]
    var selectedqty = $("#qty option:selected").text();

    if (selectedoption != 0) {
        var url1 = 'shoppingcart.aspx?scrid=' + screenId + '&tid=' + strTID + '&qty=' + selectedqty + '&sid=' + strID + '&ref=BME&Bid=0';
        window.location.assign(url1);
    }
    else {
        alert("Please select Category to proceed !");
    }
}


$(window).resize(function () {
    showHideDellaMenu();
});
function showHideDellaMenu() {
    var width = innerWidth;
    if (width >= '750') {
        $(".dellaNav").show();
    }
    else {
        $(".dellaNav").hide();
    }
}