function SubmitRequest() {
    var strTID = $("#timingId_td").text();
    var screenId = $("#screenId").text();
    var selectedoption = $("#ddlClass1 option:selected").val();
    var selectedClass = $("#ddlClass1 option:selected").text();
    var splitedSelection = selectedoption.split("$");
    var strID = splitedSelection[0];
    var totalCost = splitedSelection[1];

    if (selectedoption != 0) {
        //var url1 = 'clueHunt_Layout.aspx?scrid=' + screenId + '&amount=' + totalCost + '&tid=' + strTID + '&qty=1&sid=2&class=' + selectedClass + '&intSeatTypeId=' + strID + '&ref=BME';

        var url1 = 'shoppingCart.aspx?scrid=' + screenId + '&tid=' + strTID + '&qty=1&sid=' + strID + '&RefFrom=BME&Bid=0';
        window.location.assign(url1);
    }
    else {
        alert("Please select Category to proceed !");
    }

}

$(document).ready(function () {

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

    var pageId = 0;
    LoadDataGetDatafor_Mumbhaikar(pageId);
   
    $("#buy").addClass('menuitems_selected');
    $("#tab_chamber").addClass('cluehunt_tab_selected');
    $(".menuitems").click(function () {
        $(this).addClass('menuitems_selected').siblings('.menuitems_selected').removeClass('menuitems_selected');
    });

    // for scroll calendar

    $(".prev_btn").click(function () {
        //event.preventDefault();
        slidePrev();
    });
    $(".next_btn").click(function () {
        //event.preventDefault();
        slideNext();
    });
    function slideNext(event) {
        $(".tableContent").stop().animate({ 'scrollLeft': '+=452' }, 'slow');
    };
    function slidePrev(event) {
        $(".tableContent").stop().animate({ 'scrollLeft': '-=452' }, 'slow');
    };

    // for scroll calendar

    $(".cluehunt_tab").click(function () {
        $(this).addClass('cluehunt_tab_selected').siblings('.cluehunt_tab_selected').removeClass('cluehunt_tab_selected');
    });
    $("#details").click(function () {
        $("#Details_content").show();
        $("#TheGame_content").hide();
        $("#Ticketing_Option").hide();
        $("#Gallery_content").hide();
        $(".cluehunt").css('height', '2500px');
    });
    $("#game").click(function () {
        $("#Details_content").hide();
        $("#TheGame_content").show();
        $("#Ticketing_Option").hide();
        $("#Gallery_content").hide();
        $(".cluehunt").css('height', '1100px');
    });
    $("#buy").click(function () {
        $("#Details_content").hide();
        $("#TheGame_content").hide();
        $("#Ticketing_Option").show();
        $("#Gallery_content").hide();
        $(".cluehunt").css('height', '780px');

    });
    $("#gallery").click(function () {
        $("#Details_content").hide();
        $("#TheGame_content").hide();
        $("#Ticketing_Option").hide();
        $("#Gallery_content").show();
        $(".cluehunt").css('height', '650px');
    });
    $("#tab_chamber").click(function () {
        $("#chamber").fadeIn(1000);
        $("#kaboom").fadeOut(1000);
        $("#kaboom1").fadeOut(1000)
        $("#kaboom2").fadeOut(1000)
        $("#kaboom3").fadeOut(1000)
        $("#voucher").fadeOut(1000);
        LoadDataGetDatafor_Mumbhaikar(pageId);

    });
    $("#tab_kaboom").click(function () {
        $("#chamber").fadeOut(1000);
        $("#kaboom").fadeIn(1000);
        $("#kaboom1").fadeOut(1000)
        $("#kaboom2").fadeOut(1000)
        $("#kaboom3").fadeOut(1000)
        $("#voucher").fadeOut(1000);
         LoadDatafor_LondonCalling(pageId);
    });
    $("#tab_kaboom1").click(function () {
        $("#chamber").fadeOut(1000);
        $("#kaboom").fadeOut(1000);
        $("#kaboom1").fadeIn(1000)
        $("#kaboom2").fadeOut(1000)
        $("#kaboom3").fadeOut(1000)
        $("#voucher").fadeOut(1000);
        LoadDatafor_HarbourEscape(pageId);
    });
    $("#tab_kaboom2").click(function () {
        $("#chamber").fadeOut(1000);
        $("#kaboom").fadeOut(1000);
        $("#kaboom1").fadeOut(1000)
        $("#kaboom2").fadeIn(1000)
        $("#kaboom3").fadeOut(1000)
        $("#voucher").fadeOut(1000);
        LoadDatafor_Ward(pageId);
    });
    $("#tab_kaboom3").click(function () {
        $("#chamber").fadeOut(1000);
        $("#kaboom").fadeOut(1000);
        $("#kaboom1").fadeOut(1000)
        $("#kaboom2").fadeOut(1000)
        $("#kaboom3").fadeIn(1000)
        $("#voucher").fadeOut(1000);
        LoadDatafor_Area51(pageId);
    });
   
    $('#Bandra').click(function () {
        $('#BandraGamesTab').show();
       
        $('#BandraCalendar').show();
        $('#kaboom').hide();
        $('#kaboom1').hide();
        $('#kaboom2').hide();

        $('#tab_kaboom3').hide();
        $('#kaboom3').hide();
        $('#EventPlaceAddress').text('R City Mall, Store Number - T34, Lal Bahadur Shastri Marg, Ghatkoper West, Mumbai');
    });
   
    $(".LocationTab").click(function () {
        $(this).addClass('LocationTab_selected').siblings('.LocationTab_selected').removeClass('LocationTab_selected');
    });

    $("#ddlClass1").change(function () {
        $("#spanPrice").text();
        var selectedClassID = $("#ddlClass1 option:selected").attr('value').split('$');
        var selectedClass = selectedClassID[1];
        if (selectedClassID != 0) {
            $("#spanPrice").text('Rs.' + selectedClass + '/-');
        }
        else {
            $("#spanPrice").text('Rs.' + '0.00/-');
        }
    });


    $('#mytable tr').find('.weekend').each(function () {
        var wekend_column = $(this).index();

        $('#mytable tr').each(function () {
            var trId = $(this).index();
            if (trId == 0) {
            }
            else {
                $(this).find('td').eq(wekend_column).addClass('weekendcell');
            }

        });
    });

    $(".prev_btn").click(function () {
        slidePrev();
    });

    $(".next_btn").click(function () {
        slideNext();
    });
    function slideNext(event) {

        $(".tableContent").stop().animate({ 'scrollLeft': '+=452' }, 'slow');
    };
    function slidePrev(event) {

        $(".tableContent").stop().animate({ 'scrollLeft': '-=452' }, 'slow');
    };

    $(document.body).on('click', '.available', function () {
        var showdatetxt = $(this).children("#dateValue").text();
        var showtimetxt = $(this).children("#timeValue").text();
        var timingId = $(this).children("#timingId").text();
        var screenId = $(this).children("#screenId").text();
        placeModelpopup()
        showModelPopup();
        $(".selectorder_div").empty();
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

                $(".selectorder_div").append($("<div id='ModelPopupcloseBtn'>X</div><div class='adminFormBox' style='border: 0px;'><table style='border-spacing: 0px;'><tr><td>"
                        + "<ul id='tblCategoryDetails'></ul></td><td><table style='border-spacing: 0px;'><tr><td class='subheader'><span><b>Show Date</b></span>" +
                        "</td><td class='subheader'><span><b>Show Time</b></span></td></tr><tr><td class='txtcolumn'><span id='showDate_td'></span></td>" +
                        "<td class='txtcolumn' style='text-align: center;'><span id='showTime_td'></span></td></tr><tr><td class='subheader'><span><b>Category</b></span></td>" +
                        "<td class='subheader'><span><b>Quantity</b></span></td></tr><tr><td class='txtcolumn'><select id='ddlClass1'></select></td><td class='txtcolumn'>" +
                        "<select id='qty'><option selected='selected'>1</option></select></td></tr><tr><td class='txtcolumn'>" + "<div id='spanPrice'></div>" +
           "</td><td class='txtcolumn'><input class='admin_btn' type='button' value='Proceed' onclick='javascript: SubmitRequest()' /></td></tr><tr>" +
           "<td colspan='2' class='popup_header'><span id='timingId_td' style='font-size: 9px; display: none;'></span>" +
           "<span id='DivScrId' style='font-size: 9px; display: none;'></span><asp:HiddenField ID='hdntimingid' runat='server' /></td></tr></table></td></tr></table></div>"));
                $.each(data.d, function (key, value) {
                    var pricewithId = value.Id.split('$');
                    var price = pricewithId[1];

                    $("#ddlClass1").append($("<option></option>").val(value.Id).html(value.Values));
                    $("<li></li>").val(value.Id).html("<div>" + value.Values + "</div><span>" + 'Rs.<i>' + price + '/-</i>' + "</span>").appendTo(mytable);
                });
                $("#ddlClass1 option[value='0']").remove();
                $("#ddlClass1").prepend($("<option value='0' selected='selected'>---Select Category---</option>"));
                $("#tblCategoryDetails").append(strcategorytext);
                $(".selectorder_div").find("#showDate_td").text(showdatetxt);
                $(".selectorder_div").find("#showTime_td").text(showtimetxt);
                $(".selectorder_div").find("#timingId_td").text(timingId);
                $(".selectorder_div").find("#DivScrId").text(screenId);
                //$("<li class='txtcolumn'></li>").val(value.Id).html("<div class='txtcolumn'><b>Address:</b> 101, Roha Orion, 16th Road, Near Mini Punjab Restaurant, Bandra West, Mumbai</div>").appendTo(mytable);
                mytable.appendTo("#tblCategoryDetails");
            },
            error: function (result) {
            }
        });
    });


    $(document.body).on('click', '#ModelPopupcloseBtn', function () {
        hideModelPopup()
        $("#showDate_td").text("");
        $("#showTime_td").text("");
        $(".selectorder_div").empty;
    });


    function LoadDataGetDatafor_Mumbhaikar() {

        $('#init').empty();
        $(".DataLoader").show();
        $.ajax({
            type: "POST",
            url: "CluehuntwebService.asmx/GetDatafor_Mumbhaikar",
            data: "{pageId:'" + pageId + "'}",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (data) {
                $('#init').append(data.d);
                $(".DataLoader").hide();

            },
            error: function (result) {

            }
        });

    }
    function LoadDatafor_LondonCalling() {

        $('#init1').empty();
        $(".DataLoader").show();
        $.ajax({
            type: "POST",
            url: "CluehuntwebService.asmx/GetDatafor_LondonCalling",
            data: "{pageId:'" + pageId + "'}",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (data) {
                $('#init1').append(data.d);
                $(".DataLoader").hide();

            },
            error: function (result) {

            }
        });

    }

    function LoadDatafor_HarbourEscape() {

        $('#init2').empty();
        $(".DataLoader").show();
        $.ajax({
            type: "POST",
            url: "CluehuntwebService.asmx/GetDatafor_HarbourEscape",
            data: "{pageId:'" + pageId + "'}",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (data) {
                $('#init2').append(data.d);
                $(".DataLoader").hide();

            },
            error: function (result) {

            }
        });

    }

    function LoadDatafor_Ward() {
        $('#init3').empty();
        $(".DataLoader").show();
        $.ajax({
            type: "POST",
            url: "CluehuntwebService.asmx/GetDatafor_Ward",
            data: "{pageId:'" + pageId + "'}",
            contentType: "application/json; charset=utf-8",
            dataType: "",
            success: function (data) {
                $('#init3').append(data.d);
                $(".DataLoader").hide();
            },
            error: function (result) { }

        });
    }
    function LoadDatafor_Area51() {
        $('#init4').empty();
        $(".DataLoader").show();
        $.ajax({
            type: "POST",
            url: "CluehuntwebService.asmx/GetDatafor_Area51",
            data: "{pageId:'" + pageId + "'}",
            contentType: "application/json; charset=utf-8",
            dataType: "",
            success: function (data) {
                $('#init4').append(data.d);
                $(".DataLoader").hide();
            },
            error: function (result) { }

        });
    }
});
