
function submitformMovies() {

    var TickettobeSelected = $("#NumofTickets").val();

    var refFrom = $("#refFromText").val();

    var settings = {
        seatGap: 'gap',
        seatCss: 'seat',
        selectedSeatCss: 'selectedSeat',
        selectingSeatCss: 'selectingSeat',
        otherSeatClass: 'otherSeats'
    };

   
    var str = [];
    var strHiddenSeats = [];
    if ($(this).hasClass(settings.selectedSeatCss)) {

    }
    else {

        $(this).toggleClass(settings.selectingSeatCss);
        var selectedCount = $('.' + settings.selectingSeatCss).length;

        if (selectedCount > TickettobeSelected) {

            $('.' + settings.selectingSeatCss).toggleClass(settings.selectingSeatCss);
        }
        else {
            $.each($('#place li.' + settings.selectingSeatCss + ' a'), function (index, value) {
                str.push($(this).attr('title'));
            });

            $.each($('#place li.' + settings.selectingSeatCss), function (index, value) {
                strHiddenSeats.push($(this).attr('id'));

            });

        }
    }

    $("#countofselectedseats").val(str.length.valueOf());
    $("#SelectedTickets").val(str.join(','));

    $("#SelectedTicHidden").val(strHiddenSeats.join(','));
    var TicketSelected = $("#countofselectedseats").val();


    if (TickettobeSelected != TicketSelected) {
        $("#alertdiv").show();
        $("#alertsms").text("Please select " + TickettobeSelected.toString() + "\n seats in order to complete booking !");

    }
    else {

        paymentprocess();
    }
}

function submitformSeatLayout() {

    document.myform.submit();
}

$(document).ready(function () {
    $("#countofselectedseats").val("");
    $("#SelectedTickets").val("");
    show_intro();
    $("#closealert").click(function () {
        $("#alertdiv").fadeOut();
    });
    $('#checkSelectedSeats').click(
		function () {
		    var TickettobeSelected = $("#NumofTickets").val();
		    var TicketSelected = $("#countofselectedseats").val();
		    if (TickettobeSelected != TicketSelected) {
		        alert("Select Total:" + TickettobeSelected.toString());
		        return false;
		    }
		});


    $(".hide_processing").click(function () {
        $(".processsing").fadeOut();
        $(".seatlayoutbk").fadeOut();
        $(".processsing").hide();
        $(".errortxt").empty();
        $("#holder").css({ display: 'none' });
        $("#screenintro").css({ display: 'none' });
        $(".seatsload").hide();
        $(".nyroModalCont").hide();
        $("#place").empty();
        $(".seatlayoutbk").hide();
        $("#dataloader").hide();
        $("#countofselectedseats").val("");
        $("#SelectedTickets").val("");
        $("#NumofTickets").val("Qty");
    });
    var settingMovies = {
        seatGap: 'gap',
        seatCss: 'seat',
        selectedSeatCss: 'selectedSeat',
        selectingSeatCss: 'selectingSeat',
        otherSeatClass: 'otherSeats'
    };

    $(document.body).on('click', '.' + settingMovies.seatCss, function () {
    //$('.' + settingMovies.seatCss).live('click', function () {

        var str = [];
        var strHiddenSeats = [];
        var strAreaCode = [];
        var TickettobeSelected = $("#NumofTickets").val();

        if ($(this).hasClass(settingMovies.selectedSeatCss)) {

        }
        else {

            $(this).toggleClass(settingMovies.selectingSeatCss);
            var selectedCount = $('.' + settingMovies.selectingSeatCss).length;

            if (selectedCount > TickettobeSelected) {

                $('.' + settingMovies.selectingSeatCss).toggleClass(settingMovies.selectingSeatCss);
            }
            else {
                $.each($('#place li.' + settingMovies.selectingSeatCss + ' a'), function (index, value) {
                    str.push($(this).attr('title'));
                });

                $.each($('#place li.' + settingMovies.selectingSeatCss), function (index, value) {
                    strHiddenSeats.push($(this).attr('id'));

                });
                $.each($('#place li.' + settingMovies.selectingSeatCss), function (index, value) {
                    strAreaCode.push($(this).children('#AreaCode').text());

                });
            }
        }
        $("#selectedAreaCode").val(strAreaCode.join(''));
        $("#countofselectedseats").val(str.length.valueOf());
        $("#SelectedTickets").val(str.join(','));
        $("#SelectedTicHidden").val(strHiddenSeats.join(','));
    });

    $(document.body).on('click', ".btnBuyTicket", function () {
        
        var tid = $(this).parents(".slot").find(".EventTicketSelect").attr('id');
       
        var screenId = $(this).parents(".slot").find("span").attr('id');
         
        var SelectedClass = $(this).parents(".slot").find(".EventTicketSelect").find("option:selected").attr('value');
        
        var Qty = $(this).parents(".slot").find(".EventTicketQTYSelect").find("option:selected").attr('value');
        
        var IsLayout = $(this).parents(".slot").find(".spanForLayout").attr('id');
        
        if (IsLayout == "False") {
            
            window.location.assign('ShoppingCart.aspx?tid=' + tid + '&qty=' + Qty + '&sid=' + SelectedClass + '&Bid=0');
        }
        else if (IsLayout == "True") {
            OpenSeatLayout(tid, screenId, 'BME')
        }
        else {
        }
        // window.location.assign('ShoppingCart.aspx?tid=' + tid + '&sid=' + SelectedClass + '&qty=' + Qty);
    })
});


function show_intro() {
    $(".nyrointro").fadeIn();
    $("#itro_txt").text("Please Select Class");
    function beeLeft() {
        $(".nyrointro").animate({ left: "390px" }, 200, beeRight);

    }
    function beeRight() {
        $(".nyrointro").animate({ left: "400px" }, 200, beeLeft);
    }

    beeRight();
    $("#ddlClass").change(function () {
        var classId = $("#ddlClass").val();
        if (classId == "0") {
            $("#itro_txt").text("Please Select Class");
            $("#NumofTickets").attr('disabled', 'disabled');
        }
        else {
            $("#itro_txt").text("Now Select Quantity");
            $("#NumofTickets").removeAttr('disabled');
            $("#NumofTickets").css("cursor", "pointer");
            $("#NumofTickets").css("color", "#B30000");
        }

        $(".nyrointro").fadeIn();
        $("#NumofTickets option[value='0']").remove();
        $("#NumofTickets").prepend("<option value='0' selected='selected'>Qty</option>");
    });
    $("#NumofTickets").change(function () {
        var qty = $("#NumofTickets").val();
        if (qty == "0") {
            $(".nyrointro").fadeIn();
            $(".seatsload").hide();
            $("#itro_txt").text("Please Select Quantity");
            $("#gobtnClass").attr('disabled', 'disabled');
        }
        else {
            $(".nyrointro").fadeOut();
            $("#gobtnClass").removeAttr("disabled");

        }
    });
}

function CloseSeatLayout() {
    $("#countofselectedseats").val("");
    $("#SelectedTickets").val("");
    $("#holder").css({ display: 'none' });
    $("#screenintro").css({ display: 'none' });
    $(".seatsload").hide();
    $("#NumofTickets").val("Quantity");
    $(".nyroModalCont").hide();
    $("#place").empty();
    $(".seatlayoutbk").hide();
    $("#dataloader").hide();
    $("#screenintro").hide();
    $("#alertdiv").fadeOut();
}


function OpenSeatLayout(timingId, screenId, refFrom) {
    
    // 
    $("#screenlayout_loader").show();
    $(".seatlayoutbk").show();
    $("#screenintro").hide();
    $("#dataloader").show();
    $(".nyroModalCont").append();
    $("#refFromText").val(refFrom);
    filldropdown(timingId, refFrom);
    // ShowMovieDetail(timingId, refFrom);
    $("#place").fadeIn();
    $('#dataloader').hide();

    $("#screenId").val(screenId);
    $("#timingId").val(timingId);
}


function GetDataOnTheBasisofShowIdandScreenId() {

    var refFrom = $("#refFromText").val();

    var transactionId = $("#transactionId").val();
    $(".seatsload").show();
    var classId = $("#ddlClass").val();
    var quantity = $("#NumofTickets").val();
    var e = document.getElementById("ddlClass");
    var classType = e.options[e.selectedIndex].text;
    var timingId = $("#timingId").val();
    var screenId = $("#screenId").val();
    if (quantity != "0") {
        if (classId != "0") {
            $("#place").empty();
            $.ajax({
                type: "POST",
                url: "SeatLayoutCreate.asmx/GetSeatsonthebasisofClass",
                data: "{timingId:'" + timingId + "',screenId:'" + screenId + "',classType:'" + classType + "',classId:'" + classId + "',quantity:'" + quantity + "',refFrom:'" + refFrom + "',transactionId:'" + transactionId + "'}",
                contentType: "application/json; charset=utf-8",
                dataType: "json", success: function (data) {
                    $("#place").append(data.d);
                    $("#place").fadeIn();
                    $(".nyroModalCont").fadeIn(900);
                    $('#dataloader').hide();
                    $("#holder").show();
                    $("#screenintro").show();
                    $(".seatsload").hide();

                },
                error: function (result) { alert(result); }
            });
        }

    }
    else {

    }
};

function showforprocess() {
    $("#txtinintro").text("Now Proceed Here");
    $("#reqforclass").css("left", "740px");
    $("#reqforclass").css("top", "7px");
    $(".arrowbottom").hide();
    $(".arrowleft").hide();
    $("#screenintro").show();
    $(".arrowright").show();
    $("#gobtnClass").prop("disabled", false);
    for (var i = 0; i < 3; i++) {
        $("#reqforclass").fadeOut(1500);
        $("#reqforclass").fadeIn(1000);
    }
};

function paymentprocess() {
    var type;
    try {
        type = window.location.href.split('&')[3].split('=')[1].split('#')[0]; //type
    }
    catch (err)
    { }
    var url = 'BlockSeatsforAllExhibitors';
    if (type == 'E')
    {
        url = 'EventBlockSeatsforAllExhibitors';
    }
    $(".processsing").show(); $("#processimage").show(); $("#processingtxt").show(); $(".hide_processing").hide(); $(".errortxt").hide();
    $(".loaderplacement").css("display", "block"); $("#reqforclass").fadeOut(); $(".nyroModalCont").hide();

    var refFrom = $("#refFromText").val();

    var classId = $("#ddlClass").val(); var timingId = $("#timingId").val();
    //var SelectedTickets = $("#NumofTickets").val();
    var e = document.getElementById("ddlClass");
    var classType = e.options[e.selectedIndex].text;
    var ticketsquantity = $("#countofselectedseats").val();
    var blockedId = $("#transactionId").val();
    var SelectedTickets = $("#SelectedTickets").val();

    if (refFrom == "SPLEX") {
        SelectedTickets = $("#SelectedTicHidden").val();
    }
    if (refFrom == "VISTA")
    {
        SelectedTickets = $("#SelectedTickets").val() +":"+ $("#selectedAreaCode").val();
    }

    $.ajax({
        type: "POST",
        url: "SeatLayoutCreate.asmx/" + url + "",
        data: "{blockedId:'" + blockedId + "',timingId:'" + timingId + "',selectedClass:'" + classType + "',classId:'" + classId + "',quantity:'" + ticketsquantity + "',tickets:'" + SelectedTickets + "',refFrom:'" + refFrom + "'}",
        contentType: "application/json; charset=utf-8",
        dataType: "json", success: function (data) {
            var returned = data.d;

            var wholestring = returned.split("&");
            var connectionStatus = wholestring[0];
            var BookingId = wholestring[1];
            $(".processsing").append(data.d);
            $("#processimage").hide();
            $("#processingtxt").hide();
            $(".hide_processing").show();
           
            if (refFrom == "UFO") {

                if (connectionStatus == "11") {
                    window.location.assign('shopingCartMovies.aspx?BID=' + BookingId);
                }
                else {
                }

            }
            else if (refFrom == "BME") {

                var strurl = 'shopingCartMovies.aspx?BID=' + BookingId;

               
                if (connectionStatus == "11") {
                    if (type == 'E') {
                      
                        strurl = 'ShoppingCart.aspx?tid=' + timingId + '&qty=' + ticketsquantity + '&sid=' + classId + '&Bid=' + BookingId;
                    }
                    window.location.assign(strurl);
                }

            }
            else if (refFrom == "VISTA") {

                if (connectionStatus == "11") {
                    window.location.assign('shopingCartMovies.aspx?BID=' + BookingId);
                }

            }

            else if (refFrom == "CNPL") {

                if (connectionStatus == "11") {
                    window.location.assign('shopingCartMovies.aspx?BID=' + BookingId);
                }

            }

            else {
                if (refFrom == "SPLEX") {
                    if (connectionStatus == "11") {
                        window.location.assign('shopingCartMovies.aspx?BID=' + BookingId);
                    }
                    else {
                        //there is some problem;
                    }
                }
            }




        },
        error: function (result) {
            // $(".processsing").hide(2000);
        }


    });

}



function filldropdown(timingId, refFrom) {

    $('#ScreenLayout').css('display', 'none');
    $('.nyrointro').hide();
    $('#screenlayout_loader').fadeIn();
    $('#screenlayout_loader').html('<div align="center"><img src="images/myloaderimage.gif" style="height: 50px; width: 50px;" /><br><br><br><span style="font-color:gray; font-size:14px; font-weight:bold;">Please Wait ...</span></div>');
    $(".nyroModalCont").hide();

    $("#ddlClass").append($("<option></option>").val("0").html("Loading..."));
    $("#ddlClass> option").remove();
    var strClass = "";
    $.ajax({
        type: "POST",
        url: "SeatLayoutCreate.asmx/ScreenPlexMethodForClassAndCategory",
        data: "{sessionId:'" + timingId + "',refFrom:'" + refFrom + "'}",
        contentType: "application/json; charset=utf-8",
        dataType: "json", success: function (data) {


            $.each(data.d, function (key, value) {
                $("#ddlClass").append($("<option></option>").val(value.Price).html(value.TicketTypeID));
            });

            $("#moviename").append(data.d);
            $("#ddlClass option[value='0']").remove();
            $("#ddlClass").prepend("<option value='0' selected='selected'>Select Class</option>");
            ShowMovieDetail(timingId, refFrom);
        }
    });
}




function ShowMovieDetail(TimingId, refFrom) {
    $('#movieName').empty();
    $('#cinemaName').empty(); //cinema name
    $('#movieTime').empty();  // show time of the movie
    $('#movieDate').empty();  // show date of the movie
    $('#cinemaAddress').empty();

    //$('#ScreenLayout').css('display', 'none');
    //$('.nyrointro').hide();
    //$('#screenlayout_loader').fadeIn();
    //$('#screenlayout_loader').html('<div align="center"><img src="images/myloaderimage.gif" style="height: 50px; width: 50px;" /><br><br><br><span style="font-color:gray; font-size:14px; font-weight:bold;">Please Wait ...</span></div>');
    //$(".nyroModalCont").hide();

    var strClass = "";
    $.ajax({
        type: "POST",
        url: "SeatLayoutCreate.asmx/ScreenPlexForMovieDetail",
        data: "{sessionId:'" + TimingId + "',refFrom:'" + refFrom + "'}",
        contentType: "application/json; charset=utf-8",
        dataType: "json", success: function (data) {

            $('#movieName').append(data.d[0]);  //film or movie name
            $('#cinemaName').append(data.d[1]); //cinema name
            $('#movieTime').append(data.d[2]);  // show time of the movie
            $('#movieDate').append(data.d[3]);  // show date of the movie
            $('#cinemaAddress').append(data.d[4]);// cinema address of the venue


            $('#ScreenLayout').css('display', 'block');
            $('.nyrointro').show();
            $('#screenlayout_loader').hide();
            $(".nyroModalCont").fadeIn();
        }
    });

}


function ShowToolTip(TimingId, refFrom) {
    var e;
    var t;
    $(document).mousemove(function (n) {
        e = n.pageX; t = n.pageY
    });
    $("#class_details").empty();
    if (refFrom == "SPLEX") {

        var ddlClass = $("#ddlClass").val();
        var strClass = "";

        $.ajax({
            type: "POST",
            url: "SeatLayoutCreate.asmx/ScreenPlexMethodForClassAndCategory",
            data: "{sessionId:'" + TimingId + "',refFrom:'" + refFrom + "'}",
            contentType: "application/json; charset=utf-8",
            dataType: "json", success: function (data) {

                $.each(data.d, function (key, value) {
                    strClass += ("<span class='seat1'>");
                    strClass += value.DisplayText + ("</br>");
                    strClass += ("</span>");

                });

                $(".new_tooltipbox").css("visibility", "visible");
                $(".new_tooltipbox").offset({ top: t + 15, left: e - 5 });
                $("#class_details").stop().append(strClass);
            }


        });
    }
};
function hidetooltip() {
    $(".new_tooltipbox").css("visibility", "hidden");
    $("#class_details").empty();
};

