$(document).ready(function () {


    var eid = window.location.href.split('=')[1];//eventId

    //var eid = window.location.href.split('&')[1].split('=')[1];//eventId
    var SelectedDate = 0;
    var CityId = 0;
    var BookingButton = 0;
    var ScrCount = 0;
    var CountCity = 0;
    var layout = 0;
    
    var seatLayoutExist = null;
    $("#btnTicket").empty();
   
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "Adventure.asmx/GetAdventureDetail",
        data: "{eid:'" + eid + "'}",
        dataType: "json",
        success: function (data) {
            var events = data.d;
           
            var count = 0;
            $.each(events, function (index, evn) {
                //alert(evn.EventDescrption);
                var showdate = converter(SelectedDate);
                $("#Synopsis_Content").append('<div style="width:100%;">'+evn.EventDescrption+'</div>')
                $("#Vdetails").append('<div style="border: 1px solid #ebebeb; float: left; width: 100%;"><span class="eventNameTxt">' + evn.EventPlace + '  ,   </span><br /> ' + evn.EventAddress + '</div>');
                //$("#EGallery").append('<div style="width: 100%;"><div style="border: 1px solid #ebebeb; float: left; width: 100%;">' + '<img src=' + 'upload/LargeImage/' + evn.ImageMedium + ' height="300px" width="220px"></img>' + '</div> </div>');

                $("#GalleryImageContainer").append('<img src=' + 'upload/LargeImage/' + evn.ImageMedium + ' class="galleryImage"></img>');
                $("#imgLarge").append('<img src=' + 'upload/LargeImage/' + evn.ImageMedium + ' height="300px" width="220px"></img>');
                $(".eventNameTxt").append(evn.EventName);

                $("#spnEventname").append(evn.EventName);
                $("#btnTicket").append(evn.BookingButton);

                $("#EventDetail").append(
                    '<center><p>' + evn.EventDescrption + '</p>' + '</center>');
                layout = evn.IsLayout;
                
                CountCity = evn.CityCount;
                BookingButton = evn.BookingButton;
              
                
                ScrCount = evn.ScrCount;
               
                if (evn.ScrCount == 1) {
                  
                   
                
                    $(".locationUL").css("display", "none");

                    CountCity = evn.CityCount;
                    if (evn.BookingOption == "True") {

                        
                        var scrid = "";
                        var showdetail = evn.showDetail;
                        $.each(showdetail, function (index, dtl) {
                          
                            scrid = dtl.ScreenId;
                            if (scrid != "") {
                               
                                return false;
                            }
                           
                        });
                       
                    
                        $.ajax({
                            type: "POST",
                            contentType: "application/json; charset=utf-8",
                            url: "Adventure.asmx/GetAdventureSchdule",
                            data: "{eid:'" + eid + "',scrid:'" + scrid + "'}",
                            dataType: "json",
                            cache: "false",
                            success: function (data) {
                                var showdetail = data.d;
                                var count = 0;

                                $.each(showdetail, function (index, SDetail) {
                                    // alert(SDetail.TimingId);
                                    $("#ticketSlot").append('<div class="slot container-fluid"><div class="row"><div class="col-md-2 td_col"><table style="margin:0 auto; width:45px;"><tr><td class="eventMonth">' + SDetail.Month + ' </td></tr><tr><td class="eventDay">' + SDetail.Day + '</td></tr></table></div> <div class="col-md-2 td_col spaceBox"><span>' + SDetail.showTime + '</span></div><div class="col-md-2 td_col spaceBox"><select class="EventTicketSelect" style="padding:1%; max-width:95%;" id=' + SDetail.TimingId + '></select><span id=' + SDetail.ScreenId + ' style="display:none;"></span></div><div class="col-md-2 td_col spaceBox"><select class="EventTicketQTYSelect" style="padding:3px;" id=qty' + count + ' ></select></div><div class="col-md-2 td_col spaceBox"> <div id="' + SDetail.TimingId + '" class="btn btn-primary btnBuyTicket">' + BookingButton + '<span class="spanForLayout" id=' + layout + '></span></div></div></div></div>');
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
                               
                        });
                        //------007 end


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
            // $(".DataLoader").hide();
        },
        failure: function (msg) {
            $("#divReapeaterBind").text(msg);
        }

    });
    

        AppendCityList();
    


    // $("#CityList li").click(function () {
    $("#ScreeenList").on("click", "li", function () {
        $(this).addClass("selectedItemTab").siblings('.selectedItemTab').removeClass('selectedItemTab');
        var scrid = $(this).attr('value');
        //$(this).addClass('SelectedCityBtn');
        $(this).addClass('SelectedCityBtn').siblings().removeClass("SelectedCityBtn");
        //alert(CityId);
        $("#ticketSlot").empty();
        var seatLayoutExist = null;
        $.ajax({
            type: "POST",
            contentType: "application/json; charset=utf-8",
            url: "Adventure.asmx/GetAdventureSchdule",
            data: "{eid:'" + eid + "',scrid:'" + scrid + "'}",
            dataType: "json",
            success: function (data) {
                var showdetail = data.d;
                var count = 0;

                $.each(showdetail, function (index, SDetail) {
                   // alert(SDetail.TimingId);
                    $("#ticketSlot").append('<div class="slot container-fluid"><div class="row"><div class="col-md-2 td_col"><table style="margin:0 auto; width:45px;"><tr><td class="eventMonth">' + SDetail.Month + ' </td></tr><tr><td class="eventDay">' + SDetail.Day + '</td></tr></table></div> <div class="col-md-2 td_col spaceBox"><span>' + SDetail.showTime + '</span></div><div class="col-md-2 td_col spaceBox"><select class="EventTicketSelect" style="padding:1%; max-width:95%;" id=' + SDetail.TimingId + '></select><span id=' + SDetail.ScreenId + ' style="display:none;"></span></div><div class="col-md-2 td_col spaceBox"><select class="EventTicketQTYSelect" style="padding:3px;" id=qty' + count + ' ></select></div><div class="col-md-2 td_col spaceBox"> <div id="' + SDetail.TimingId + '" class="btn btn-primary btnBuyTicket">' + BookingButton + '<span class="spanForLayout" id=' + layout + '></span></div></div></div></div>');
                    var showPrice = SDetail.showPrice;
                    $.each(showPrice, function (index, SPrice) {
                        $("#" + SDetail.TimingId + "").append($("<option value=" + SPrice.SeatTypeId + "></option>").html(SPrice.SeatType));
                    });


                    for (var i = 1; i <= 10; i++) {
                        $("#qty" + count + "").append($("<option value=" + i + "></option>").html(i));
                    }


                    count++;
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

                        //alert(value.CountryId);
                        $("#CityList").append($("<li class='CityBtn' value=" + value.CountryId + ">" + value.CountryId + "</li>").html(value.CountryName));

                        //$(".EventDetails").append('<table style="width: 100%;"><tr><td colspan="2" class="headertd"><span class="headerTxt">Event Details</span></td></tr><tr><td>Venue :</td><td>' + evn.EventPlace + '</td></tr><tr><td>Date :</td><td>' + showdate + '</td></tr><tr><td>City :</td><td>' + evn.CityName + '</td><tr><tr><td>Address:</td><td>' + evn.EventAddress + '</td><tr></table>')

                    });
                    // $("#CityList").prepend("<span style='list-style:none; float:left; font-weight:bold; font-family:verdana; padding:5px 8px; text-align:left;' value='0'>Select City</span>")
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
    


   

    //function AppendScreen() {

    $("#CityList").on("click", "li", function () {

        var cityid = $(this).attr("value");
        $("#ticketSlot").empty();
        $("#Vdetails").empty();
        if (ScrCount != 1) {
            $("#ScreeenList").empty();
            //$("#ddlSelectDate").empty();
            var EventId = eid;
            // alert(movieId);
            $.ajax({
                type: "POST",
                contentType: "application/json; charset=utf-8",
                url: "Adventure.asmx/GetCityScreen",
                data: "{EventId:'" + EventId + "',cityid:'" + cityid + "'}",
                dataType: "json",
                success: function (data) {
                    //$.each(data.d, function (key, value) {
                    //    var Screen = value.Screens;
                    //    $("#ScreeenList").append($("<li id=" + value.ScreenId + " class='CityBtn ScreenItem' value=" + value.ScreenId + ">" + value.ScreenId + "</li>").html(value.ScreenName));

                    //});

                    $.each(data.d, function (key, value) {


                        $("#Vdetails").append('<div style="border: 1px solid #ebebeb; float: left; width: 100%;"><span class="eventNameTxt">' + value.EventPlace + '  ,   </span><br /> ' + value.Adress + '</div>');


                        var showdetail = value.Screens;
                       // alert(showdetail);
                        $.each(showdetail, function (key, screens) {
                           // alert(screens.ScreenId);
                            $("#ScreeenList").append($("<li id=" + screens.ScreenId + " class='CityBtn ScreenItem' value=" + screens.ScreenId + ">" + screens.ScreenId + "</li>").html(screens.ScreenName));


                        });
                    });



                    //$("#ScreeenList").prepend("<span style='list-style:none; float:left; font-weight:bold; font-family:verdana; padding:5px 8px; text-align:left;' value='0'>Select Game</span>")
                    //  $("#ddlSelectCity").prepend($("<option value='0'></option>").html("Select City"));
                    // $("#ScreeenList").find("li").eq('0').addClass("selectedItemTab");

                    //  $("#popupcover").show();
                    //  $("#MakeTicketSec").show();


                    $("#ScreeenList").show();
                },

                error: function (result) {
                    alert("txtGetCity");
                }
            });
        }
        $(this).addClass("selectedItemTab").siblings('.selectedItemTab').removeClass('selectedItemTab');
    });

});