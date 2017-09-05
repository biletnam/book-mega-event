$(document).ready(function () {
    var eid = window.location.href.split('&')[1].split('=')[1]; //eventId
   // var eid = window.location.href.split('=')[1];//eventId
    var SelectedDate = window.location.href.split('&')[2].split('=')[1];
    var CityId = 0;
   

    var CountCity = 0;
    var seatLayoutExist = null;
    $("#btnTicket").empty();

    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "EventService.asmx/EventDetail",
        data: "{eid:'" + eid + "',showdate:'" + SelectedDate + "',CityId:'" + CityId + "'}",
        dataType: "json",
        success: function (data) {
            var events = data.d;
            var count = 0;
            $.each(events, function (index, evn) {
              
                var showdate = converter(SelectedDate);
                $(".EventDetails").append('<table style="width: 100%;"><tr><td colspan="2" class="headertd"><span class="headerTxt">Event Details</span></td></tr><tr><td>Venue :</td><td>' + evn.EventPlace + '</td></tr><tr><td>Date :</td><td>' + showdate + '</td></tr><tr><td>City :</td><td>' + evn.CityName + '</td><tr><tr><td>Address:</td><td>' + evn.EventAddress + '</td><tr></table>')
                $("#Vdetails").append('<div style="border: 1px solid #ebebeb; float: left; width: 100%;"><span class="eventNameTxt">' + evn.EventPlace + '  ,   </span><br /> ' + evn.EventAddress + '</div>');
                //$("#EGallery").append('<div style="width: 100%;"><div style="border: 1px solid #ebebeb; float: left; width: 100%;">' + '<img src=' + 'upload/LargeImage/' + evn.ImageMedium + ' height="300px" width="220px"></img>' + '</div> </div>');

                $("#GalleryImageContainer").append('<img src=' + 'upload/LargeImage/' + evn.ImageMedium + ' class="galleryImage"></img>');
                $("#imgLarge").append('<img src=' + 'upload/LargeImage/' + evn.ImageMedium + ' height="300px" width="220px"></img>');
                $(".eventNameTxt").append(evn.EventName);

                $("#spnEventname").append(evn.EventName);
                $("#btnTicket").append(evn.BookingButton);

                $("#EventDetail").append(
                    '<center><p>' + evn.EventDescrption + '</p>' + '</center>');

                CountCity = evn.CityCount;
                if (evn.CityCount == 1) {

                    $(".locationUL").css("display", "none");

                    CountCity = evn.CityCount;
                    if (evn.BookingOption == "True") {


                        var showdetail = evn.showDetail;

                        $.each(showdetail, function (index, SDetail) {

                            $("#ticketSlot").append('<div class="slot"><div class="eventDateSection"><table><tr><td class="eventMonth">' + SDetail.Month + ' </td></tr><tr><td class="eventDay">' + SDetail.Day + '</td></tr></table>  </div>   <div class="ticketblock"><table><tr><td style="font-size: 14px;font-family: verdana; width:70px;">' + SDetail.showTime + '</td> <td><select class="EventTicketSelect" id=' + SDetail.TimingId + '></select><span id=' + SDetail.ScreenId + ' style="display:none;"></span></td><td><select class="EventTicketQTYSelect" id=qty' + count + ' ></select></td></tr></table></div><div class="ticketblock"> <div class="btnBuyTicket" style="margin-top: 5px;">' + evn.BookingButton + '<span class="spanForLayout" id=' + evn.IsLayout + '></span></div></div></div>');
                            var showPrice = SDetail.showPrice;
                            $.each(showPrice, function (index, SPrice) {
                                $("#" + SDetail.TimingId + "").append($("<option value=" + SPrice.SeatTypeId + "></option>").html(SPrice.SeatType));
                            });


                            for (var i = 1; i <= 10; i++) {
                                $("#qty" + count + "").append($("<option value=" + i + "></option>").html(i));
                            }


                            count++;
                        });


                    }

                    else {


                        $(".E_TC").hide();

                        $(".EGallery").hide();

                        $(".Vdetails").hide();

                        $(".EventDescTab").hide();
                        $(".EventDetails").hide();
                    }




                }
            });
            $(".DataLoader").hide();
        },
        failure: function (msg) {
            $("#divReapeaterBind").text(msg);
        }

    });

    AppendCityList();




    // $("#CityList li").click(function () {
    $("#CityList").on("click", "li", function () {
        var CityId = $(this).attr('value');
        //$(this).addClass('SelectedCityBtn');
        $(this).addClass('SelectedCityBtn').siblings().removeClass("SelectedCityBtn");
        //alert(CityId);
        $("#ticketSlot").empty();
        $("#Vdetails").empty();
        var seatLayoutExist = null;
        $.ajax({
            type: "POST",
            contentType: "application/json; charset=utf-8",
            url: "EventService.asmx/EventDetail",
            data: "{eid:'" + eid + "',showdate:'" + SelectedDate + "',CityId:'" + CityId + "'}",
            dataType: "json",
            success: function (data) {
                var events = data.d;
                var count = 0;
                $.each(events, function (index, evn) {

                    var showdate = converter(SelectedDate);
                    //$(".EventDetails").append('<table style="width: 100%;"><tr><td colspan="2" class="headertd"><span class="headerTxt">Event Details</span></td></tr><tr><td>Venue :</td><td>' + evn.EventPlace + '</td></tr><tr><td>Date :</td><td>' + showdate + '</td></tr><tr><td>City :</td><td>' + evn.CityName + '</td><tr><tr><td>Address:</td><td>' + evn.EventAddress + '</td><tr></table>')
                    $("#Vdetails").append('<div style="border: 1px solid #ebebeb; float: left; width: 100%;"><span class="eventNameTxt">' + evn.EventPlace + '</span><br /> ' + evn.EventAddress + '</div>');
                    //$("#EGallery").append('<div style="width: 100%;"><div style="border: 1px solid #ebebeb; float: left; width: 100%;">' + '<img src=' + 'upload/LargeImage/' + evn.ImageMedium + ' height="300px" width="220px"></img>' + '</div> </div>');


                    //$("#imgLarge").append('<img src=' + 'upload/LargeImage/' + evn.ImageMedium + ' height="300px" width="220px"></img>');
                    //$(".eventNameTxt").append(evn.EventName);

                    //$("#spnEventname").append(evn.EventName);
                    //$("#btnTicket").append(evn.BookingButton);

                    //$("#EventDetail").append(
                    //    '<center><p>' + evn.EventDescrption + '</p>' + '</center>');

                    if (evn.BookingOption == "True") {

                        var showdetail = evn.showDetail;

                        $.each(showdetail, function (index, SDetail) {

                            $("#ticketSlot").append('<div class="slot"><div class="eventDateSection"><table><tr><td class="eventMonth">' + SDetail.Month + ' </td></tr><tr><td class="eventDay">' + SDetail.Day + '</td></tr></table>  </div>   <div class="ticketblock"><table><tr><td style="font-size: 14px;font-family: verdana; width:70px;">' + SDetail.showTime + '</td> <td><select class="EventTicketSelect" id=' + SDetail.TimingId + '></select><span id=' + SDetail.ScreenId + ' style="display:none;"></span></td><td><select class="EventTicketQTYSelect" id=qty' + count + ' ></select></td></tr></table></div><div class="ticketblock"> <div class="btnBuyTicket" style="margin-top: 5px;">' + evn.BookingButton + '<span class="spanForLayout" id=' + evn.IsLayout + '></span></div></div></div>');
                            var showPrice = SDetail.showPrice;
                            $.each(showPrice, function (index, SPrice) {
                                $("#" + SDetail.TimingId + "").append($("<option value=" + SPrice.SeatTypeId + "></option>").html(SPrice.SeatType));
                            });


                            for (var i = 1; i <= 10; i++) {
                                $("#qty" + count + "").append($("<option value=" + i + "></option>").html(i));
                            }


                            count++;
                        });
                    }
                    else {


                        $(".E_TC").hide();

                        $(".EGallery").hide();

                        $(".Vdetails").hide();

                        $(".EventDescTab").hide();
                        $(".EventDetails").hide();
                    }
                });
                $(".DataLoader").hide();
            },
            failure: function (msg) {
                $("#divReapeaterBind").text(msg);
            }

        });



    })








    function converter(string) {

        if (string != "0") {


            var dateString = string;

            var date = dateString.substring(0, 4);
            var month = dateString.substring(4, 6);
            var day = dateString.substring(6, 8);
            var showdate = date + '-' + month + '-' + day
            var d = showdate.split(/[-:\s]/);
            var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'sep', 'Oct', 'Nov', 'Dec'];

            var hour = parseInt(d[3], 10);

            return d[2] + ' ' + months[parseInt(d[1], 10) - 1] + ' ' + d[0];
        }
        else {

            return "-";
        }
    }

    function AppendCityList() {
        //if (CountCity != 1) {
        $("#CityList").empty();
        //$("#ddlSelectDate").empty();
        var movieId = eid;
       // alert(movieId);
        $.ajax({
            type: "POST",
            contentType: "application/json; charset=utf-8",
            url: "FillDropdowns.asmx/fillMovieddl",
            data: "{movieId:'" + movieId + "'}",
            dataType: "json",
            success: function (data) {
                $.each(data.d, function (key, value) {

                    $("#CityList").append($("<li class='CityBtn' value=" + value.CountryId + ">" + value.CountryId + "</li>").html(value.CountryName));


                });
                $("#CityList").prepend("<span style='list-style:none; float:left; font-weight:bold; font-family:verdana; padding:5px 8px; text-align:left;' value='0'>Select City</span>")
                //  $("#ddlSelectCity").prepend($("<option value='0'></option>").html("Select City"));


                //  $("#popupcover").show();
                //  $("#MakeTicketSec").show();


                $("#CityList").show();
            },

            error: function (result) {
                alert("txtGetCity");
            }
        });
    }
    //}

});














