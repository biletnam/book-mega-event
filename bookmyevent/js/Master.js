//jquery supported version 1.11.1
//written js by Vivek Kumar Sharma
//Copyright Â© 2014 Book My Event Pvt Ltd

function findActiveMenu() {
    var windowUrl = window.location.pathname;
    var activePageUrl = windowUrl.split("/");
    //var activeMenu = activePageUrl[2]  For Test
    var activeMenu = activePageUrl[1] ///For Live
    $("nav ul ").find('li').each(function () {
        var menuLink = $(this).find('a').attr('href');
        if (activeMenu == menuLink) {
            $(this).addClass('selected');
        } else {
            $(this).removeClass('selected');
        }
    });
}


$(document).ready(function () {
    findActiveMenu()
    
    var selectedlitext = $("nav ul").find('.selected a').text();
    $(".mobileMenuLabel").text('â‰¡' + selectedlitext);

    try {


        $("#adventurePrev").click(function () {
            $(".adventuresSlider").stop().animate({ 'scrollLeft': '-=305' }, 'slow');
        });
        $("#adventureNext").click(function () {
            $(".adventuresSlider").stop().animate({ 'scrollLeft': '+=305' }, 'slow');
        });


        var cityId = window.location.href.split('&')[0].split('=')[1];//city
        var eventId = window.location.href.split('&')[1].split('=')[1];//eventId
        var SelectedDate = window.location.href.split('&')[2].split('=')[1];//date value
        var type = window.location.href.split('&')[3].split('=')[1].split('#')[0];//type
        if (SelectedDate == "0") {
            var fullDate = new Date();
            var twoDigitMonth = (fullDate.getMonth() + 1) + "";
            if (twoDigitMonth.length == 1)
                twoDigitMonth = "0" + twoDigitMonth;
            var twoDigitDate = fullDate.getDate() + "";
            if (twoDigitDate.length == 1)
                twoDigitDate = "0" + twoDigitDate;
            SelectedDate = fullDate.getFullYear() + twoDigitMonth + twoDigitDate;

        }

        if (type == "M") {
            GetMovieAndCinemaDetailsOnTheBasisOfMovies(eventId, cityId, SelectedDate);
        }
        else {
            //var refFrom = window.location.href.split('&')[4].split('=')[1].split('#')[0];//type
            GetMovieAndCinemaDetailsOnTheBasisOfCinemas(eventId, cityId, SelectedDate);
        }
        GetCity(type);
        // GetProgram(CityId, inputValue)
    }
    catch (err) { }

    $(".welcomeTxt").click(function () {
        $(".loginOption ul").slideToggle();
    });

    $(window).resize(function () {
        showHideNavigation();
        placepopup();
    });
    $(".btnClosePopup").click(function () {
        hidepopup();
    });
    function hidepopup() {
        $(".popupDiv").hide();
        $(".popupBack").hide();
        $(".popupDiv .popupContent").empty();
    }

    function showpopup() {
        $(".popupDiv").show();
        $(".popupBack").show();
    }

    function placepopup() {
        var Popup_width = $(".popupDiv").width();
        var Popup_height = $(".popupDiv").height();
        var width_margin = "-" + Popup_width / 2 + "px";
        var height_margin = "-" + Popup_height / 2 + "px";
        $(".popupDiv").css({ "margin-top": height_margin, "margin-left": width_margin });

    }
    $("#SupportAccess").click(function () {
        $(".popupDiv .popupContent").append('<div class="popupHeaderTxt">Call Support</div><br/><table><tr><td> <span class="popupnormalTxtLbl">Toll Free:</span></td><td><span class="popupnormalTxt"> 1800-11-8590 -( 10:00 AM to 06:30 PM )</span></td></tr><tr><td><span class="popupnormalTxtLbl">Mobile:</span></td><td><span class="popupnormalTxt"> 9810893803 -( 09:00 AM to 09:30 PM )</span></td></tr></table>');
        placepopup();
        showpopup();
    });
    $("#MailAccess").click(function () {
        $(".popupDiv .popupContent").append('<div class="popupHeaderTxt">Write Us</div><br/> <table><tr><td><span class="popupnormalTxtLbl">For Marketing :</span></td><td><span class="popupnormalTxt"> marketing@bookmyevent.com</span></td></tr><tr><td> <span class="popupnormalTxtLbl">For Other Query:</span></td><td><span class="popupnormalTxt"> info@bookmyevent.com</span></td></tr></table>');
        placepopup();
        showpopup();
    });
    $("#ConfirmationAccess").click(function () {
        $(".popupDiv .popupContent").append('<div class="popupHeaderTxt">Resend Confirmation</div><br/><table><tr><td> <span class="popupnormalTxtLbl">Email Id :</span></td><td><input id="popuptxtfieldemail" type="text" class="popupInputTxt" placeholder="Enter Email Id"></td></tr><tr><td><span class="popupnormalTxtLbl">Mobile :</span></td><td><input type="text" id="popuptxtfieldmob" class="popupInputTxt" placeholder="Enter Mobile Number"</td></tr><tr><td colspan="2" align="center"><input type="button" class="popupButton" onclick="MailConfirmation();" value="Send" /><br /><label class="lbltext"></label> </td><table>');
        placepopup();
        showpopup();
    });
    $("#LoginAccess").click(function () {
        window.location.assign('login.aspx');
    });

    $(".EventDescTab_Item").click(function () {
        $(this).addClass("EventDescTab_Item_selected").siblings(".EventDescTab_Item_selected").removeClass("EventDescTab_Item_selected");
    });
    function resetSlider() {
        $(".EventSection").stop().animate({ 'scrollLeft': '0px' }, 'slow');
    };
    $("#EventTab #TheatreTabBtn").click(function () {
        BindBindtheatreList();
        $("#eventList").fadeOut();
        $("#theatreList").fadeIn();
        resetSlider();
    });
    $("#EventTab #EventTabBtn").click(function () {

        $("#eventList").fadeIn();
        $("#theatreList").fadeOut();
        resetSlider();
    });

    $("#MovieTab #NSMoviesBtn").click(function () {
        $("#comingSoonList").fadeOut();
        $("#nowshowingList").fadeIn();
        resetSlider();
    });
    $("#MovieTab #CSMoviesBtn").click(function () {

        BindcomingSoonList();
        $("#comingSoonList").fadeIn();
        $("#nowshowingList").fadeOut();
        resetSlider();
    });
    var scrWidth = innerWidth;
    $(".SliderParentDiv .eventSlideControler .slidePrevBtn").click(function () {
        var SliderCover = $(this).parents(".SliderParentDiv").find(".EventSection").attr("id");
        if (scrWidth >= '730') {
            $("#" + SliderCover).stop().animate({ 'scrollLeft': '-=618' }, 'slow');
        }
        if (scrWidth <= '729') {
            $("#" + SliderCover).stop().animate({ 'scrollLeft': "-=206" }, 'slow');
        }
    });
    $(".SliderParentDiv .eventSlideControler .slideNextBtn").click(function () {
        var SliderCover = $(this).parents(".SliderParentDiv").find(".EventSection").attr("id");
        if (scrWidth >= '730') {
            $("#" + SliderCover).stop().animate({ 'scrollLeft': '+=618' }, 'slow');
        }
        if (scrWidth <= '729') {
            $("#" + SliderCover).stop().animate({ 'scrollLeft': "+=206" }, 'slow');
        }
    });

    function BindcomingSoonList() {
        var Count = 20;
        if ($('#comingSoonList').html().trim() == "") {
            $.ajax({
                type: "POST",
                contentType: "application/json; charset=utf-8",
                url: "FillDropdowns.asmx/BindcomingSoonList",
                data: "{Count:'" + Count + "'}",
                dataType: "json",
                success: function (data) {
                    $("#comingSoonList").append(data.d);
                },

                error: function (result) {

                }
            });
        }
    }


    function BindBindtheatreList() {
        var Count = 20;
        if ($('#theatreList').html().trim() == "") {
            $.ajax({
                type: "POST",
                contentType: "application/json; charset=utf-8",
                url: "FillDropdowns.asmx/BindtheatreList",
                data: "{Count:'" + Count + "'}",
                dataType: "json",
                success: function (data) {
                    $("#theatreList").append(data.d);
                },

                error: function (result) {

                }
            });
        }
    }

    try {
        $(document.body).on('click', '#ddlShowtimeFilters .optionBox >ul li', function () {
            var filterchoicevalue = $(this).attr('id');
            var SelectedDate = $('.DateCalendar table').find('.selectedTd').attr('id');
            var cityId = $("#ddlCity .modernSelectInput .txtSelect").attr('name');
            var choice = $("#rbnChoice").find("input[type=radio]:checked").val();
            if (choice == "M") {
                GetMovieAndCinemaDetailsOnTheBasisOfMovies(filterchoicevalue, cityId, SelectedDate);
            }
            else {

                GetMovieAndCinemaDetailsOnTheBasisOfCinemas(filterchoicevalue, cityId, SelectedDate);
            }

            setTimeout(function () {
                var dateval = $(".DateCalendar table tr").find(".selectedTd").text();
                var selectedProgram = $("#ddlShowtimeFilters").children(".modernSelectInput").find(".txtSelect").val();
                var selectedCity = $("#ddlCity").children(".modernSelectInput").find(".txtSelect").val();
                $("#Selection_Details").text("Currently you are making booking for " + selectedProgram + " in " + selectedCity + " on " + dateval);
            }, 1000);
        });
    }
    catch (err)
    { }
    //Script for change date item on movie page
    try {
        $(document.body).on('click', '.dateItem', function () {
            var dateID = $(this).attr('id');
            var dateTxt = $(this).text();
            var selectedProgram = $("#ddlMovie").children(".modernSelectInput").find(".txtSelect").val();
            var selectedCity = $("#ddlCity").children(".modernSelectInput").find(".txtSelect").val();
            //$(".popupDiv .popupContent").append('<div class="popupHeaderTxt">Call Support</div><br/><table><tr><td> Currently you are making booking for ' + selectedProgram + ' in ' + selectedCity + ' on ' + dateTxt +' </td></tr></table>');
            //placepopup();
            //showpopup();
            $("#Selection_Details").text("Currently you are making booking for " + selectedProgram + " in " + selectedCity + " on " + dateTxt);
            $(this).addClass('selectedTd').siblings('.selectedTd').removeClass('selectedTd');
            var choice = $("#rbnChoice").find("input[type=radio]:checked").val();
            //var choice = $("#ddlChoice .modernSelectInput .txtSelect").attr('name');
            var cityId = $("#ddlCity .modernSelectInput .txtSelect").attr('name');
            var selectedValueInTextBox = $("#ddlShowtimeFilters .modernSelectInput .txtSelect").attr('name');
            if (choice == "M") {
                GetMovieAndCinemaDetailsOnTheBasisOfMovies(selectedValueInTextBox, cityId, dateID);
            }
            else {
                //var refFrom = $("#ddlShowtimeFilters .modernSelectInput .txtSelect").attr('value');
                GetMovieAndCinemaDetailsOnTheBasisOfCinemas(selectedValueInTextBox, cityId, dateID);
            }
        });

        $(document.body).on('click', '#filteroptionbox > ul li', function () {
            var filterLiId = $(this).attr('id');
            var changedChoice = $("#rbnChoice").find("input[type=radio]:checked").val();
            var cityId = $("#ddlCity .modernSelectInput .txtSelect").attr('name');
            var refFrom = $(this).attr('value');
            $(this).parents('#ddlShowtimeFilters').find('.modernSelectInput .txtSelect').attr('value', refFrom);

            GetDate(cityId, changedChoice, filterLiId)

        });
        //Script for custom stylish dropdown
        $(".modernSelectInput").click(function () {
            $(this).find(".txtSelect").focus();
            $(".optionBox").hide();
            $(this).parent(".MordernSelect").find(".optionBox").show();
        });
        $(document.body).on('click', '.MordernSelect .optionBox li', function () {
            var selectedoption = $(this).text();
            var inputValue = $(this).attr('id');
            var refFrom = $(this).attr('value');
            var selecteddivId = $(this).parents(".MordernSelect").attr('id');
            $("#" + selecteddivId + " .modernSelectInput .txtSelect").attr("name", inputValue);


            if (selecteddivId == "ddlChoice") {
                GetCity(inputValue);
            }
            else if (selecteddivId == "ddlCity") {
                var choice = $("#ddlChoice .modernSelectInput .txtSelect").attr('name');
                GetProgram(inputValue, choice);
            }
            else if (selecteddivId == "ddlMovie") {
                var choice = $("#ddlChoice .modernSelectInput .txtSelect").attr('name');
                var cityId = $("#ddlCity .modernSelectInput .txtSelect").attr('name');
                $("#ddlMovie .modernSelectInput .txtSelect").attr("value", refFrom);
                GetDate(cityId, choice, inputValue);
            }
            if (selecteddivId == "ddlDate") {
                var choice = $("#ddlChoice .modernSelectInput .txtSelect").attr('name');
                var cityId = $("#ddlCity .modernSelectInput .txtSelect").attr('name');
                var eventId = $("#ddlMovie .modernSelectInput .txtSelect").attr('name');
                var refFrom = $("#ddlMovie .modernSelectInput .txtSelect").attr('value');
                var did = $("#ddlDate .modernSelectInput .txtSelect").attr('name');
                // var ref = $("#ddlMovie .modernSelectInput .txtSelect").attr("value");
                RedirectTonext(cityId, choice, eventId, did);
            }
            $(this).parents(".MordernSelect").find(".optionBox").hide();
            $(this).parents(".MordernSelect").find(".txtSelect").val(selectedoption);
            $(this).parents(".MordernSelect").next(".MordernSelect").find(".optionBox").show();
            $(this).parents(".MordernSelect").next(".MordernSelect").find(".txtSelect").focus();
        });

    }
    catch (err) {
    }

    function GetCity(EventCategory) {
        $("#ddlCity").find(".optionBox >ul").empty();
        $("#ddlCity").find(".optionBox >ul").append($("<li id='0'></li>").html("Loading..."));
        var Count = 0;
        if (EventCategory != "0") {
            $.ajax({
                type: "POST",
                contentType: "application/json; charset=utf-8",
                url: "FillDropdowns.asmx/BindDatatoDropdown",
                data: "{Category:'" + EventCategory + "'}",
                dataType: "json",
                success: function (data) {
                    $.each(data.d, function (key, value) {

                        $("#ddlCity").find(".optionBox >ul").append($("<li id=" + value.CountryId + "></li>").html(value.CountryName));
                        Count++;
                        if (value.CountryId == cityId) {

                            $("#ddlCity .modernSelectInput .txtSelect").val(value.CountryName);
                            $("#ddlCity .modernSelectInput .txtSelect").attr("name", cityId);
                        }
                    });
                    if (Count == 0) {
                        $("#ddlCity").find(".optionBox >ul").append($("<li></li>").html("Opps..There is no such avilable"));
                    }
                    //$('ul li:contains(hari)').first().remove();


                    $("#ddlCity").find(".optionBox >ul li:contains(Loading)").first().remove();

                    $(this).parents(".MordernSelect").find(".optionBox").hide();
                    $(this).parents(".MordernSelect").find(".txtSelect").val(EventCategory);
                    $(this).parents(".MordernSelect").next(".MordernSelect").find(".optionBox").show();
                    $(this).parents(".MordernSelect").next(".MordernSelect").find(".txtSelect").focus();

                },

                error: function (result) {
                    alert("GetCity");
                }
            });
        }
        else {
            //$(".ddlCity").prop('disabled', 'disabled');
            //$(".ddlCity option[value='0']").remove();
            //$(".ddlCity").prepend("<option value='0' selected='selected'>MY CITY</option>");

        }
    }
    function GetProgram(CityId, inputValue) {
        var Count = 0;
        $("#ddlMovie").find(".optionBox >ul").empty();
        $("#ddlShowtimeFilters .optionBox >ul").empty();
        $("#ddlMovie").find(".optionBox >ul").append($("<li id='0'></li>").html("Loading..."));
        if (inputValue != "0") {
            if (CityId != "0") {

                $.ajax({
                    type: "POST",
                    contentType: "application/json; charset=utf-8",
                    url: "FillDropdowns.asmx/BindDatatoMovies",
                    data: "{cityId: '" + CityId + "',EventCategory:'" + inputValue + "'}",
                    dataType: "json",
                    success: function (data) {

                        $.each(data.d, function (key, value) {
                            $("#ddlShowtimeFilters .optionBox >ul").append($("<li id=" + value.MovieId + " value=" + value.RefFrom + "></li>").html(value.MovieName));
                            $("#ddlMovie").find(".optionBox >ul").append($("<li id=" + value.MovieId + " value=" + value.RefFrom + "></li>").html(value.MovieName));
                            Count++;

                            if (eventId1 == value.MovieId) {

                                $("#ddlMovie .modernSelectInput .txtSelect").val(value.MovieName);
                                $("#ddlMovie .modernSelectInput .txtSelect").attr("name", eventId1);
                                //$("#ddlMovie .modernSelectInput .txtSelect").attr("value", refFrom);
                                $("#ddlShowtimeFilters .modernSelectInput .txtSelect").attr("name", eventId1);
                                $("#ddlShowtimeFilters .modernSelectInput .txtSelect").val(value.MovieName);
                                //$("#ddlShowtimeFilters .modernSelectInput .txtSelect").attr('value', refFrom);

                            }

                        });
                        if (Count == 0) {
                            $("#ddlMovie").find(".optionBox >ul").append($("<li></li>").html("Opps...Thers is no such available."));
                        }
                        $("#ddlMovie").find(".optionBox >ul li:contains(Loading)").first().remove();
                        // $("#ddlMovie .modernSelectInput .txtSelect").attr("value", refFrom);
                        $('#ddlMovie .optionBox ul li').click(function () {
                            //var Movieid = $(this).val();
                            //GetDate(CityId, EventCategory, Movieid);
                            //var selectedoption = $(this).text();
                            $(this).parents(".MordernSelect").find(".optionBox").hide();
                            $(this).parents(".MordernSelect").find(".txtSelect").val(inputValue);
                            $(this).parents(".MordernSelect").next(".MordernSelect").find(".optionBox").show();
                            $(this).parents(".MordernSelect").next(".MordernSelect").find(".txtSelect").focus();
                        });
                    },
                    error: function (result) {
                        alert("GetProgram");
                    }
                });
            }
            else {
                $(".ddlMovie").prop('disabled', 'disabled');
                $(".ddlMovie option[value='0']").remove();
                $(".ddlMovie").prepend("<option value='0' selected='selected'>MY PROGRAM</option>");
            }
        }

    }
    function GetDate(cityId, EventCategory, eventId) {
        $("#ddlDate").find(".optionBox >ul").empty();
        $("#ddlDate").find(".optionBox >ul").append($("<li id='0'></li>").html("Loading..."));
        if (eventId != "0") {
            // $(".ddlDate").append($("<option></option>").val("0").html("Loading..."));

            $.ajax({
                type: "POST",
                contentType: "application/json; charset=utf-8",
                url: "FillDropdowns.asmx/BindDatetoDropdown",
                data: "{eventId: " + eventId + ",cityId:" + cityId + ",EventCategory:'" + EventCategory + "'}",
                dataType: "json",
                success: function (data) {

                    $.each(data.d, function (key, value) {
                        //  $(".ddlDate").append($("<option></option>").val(value.dtShowTime).html(value.MovieName));
                        $("#ddlDate").find(".optionBox >ul").append($("<li id=" + value.dtShowTime + "></li>").html(value.MovieName));
                    });

                    $("#ddlDate").find(".optionBox >ul li:contains(Loading)").first().remove();

                    $('#ddlDate .optionBox ul li').click(function () {
                        var did = $(this).attr('id');

                        var selectedoption = $(this).text();
                        $(this).parents(".MordernSelect").find(".optionBox").hide();
                        $(this).parents(".MordernSelect").find(".txtSelect").val(did);
                        $(this).parents(".MordernSelect").next(".MordernSelect").find(".optionBox").show();
                        $(this).parents(".MordernSelect").next(".MordernSelect").find(".txtSelect").focus();
                        //  RedirectTonext(cityId, EventCategory, eventId, did);
                    });

                },
                error: function (result) {
                    alert("GetDate");
                }
            });
        }
        else {
            $(".ddlDate").prop('disabled', 'disabled');
            $(".ddlDate option[value='0']").remove();
            $(".ddlDate").prepend("<option value='0' selected='selected'>MY DATE</option>");
        }

    }

    function RedirectTonext(cityId, EventCategory, eventId, did) {
        if (EventCategory == 'M' || EventCategory == 'C') {
            //DateId = $('#ddlDate .optionBox ul li').val();

            window.location.assign('schedule.aspx?cid=' + cityId + '&eid=' + eventId + '&did=' + did + '&type=' + EventCategory);
        }
        else if (EventCategory == 'E') {

            window.location.assign('EventDetail.aspx?cid=' + cityId + '&eid=' + eventId + '&did=' + did + '&type=' + EventCategory);
        }
        else if (EventCategory == 'P') {

            window.location.assign('PlayDetails.aspx?cid=' + cityId + '&eid=' + eventId + '&did=' + did + '&type=' + EventCategory);
        }
        else if (EventCategory == 'T') {

            //window.location.assign('TheatrePlaceDetails.aspx?cid=' + cityId + "&eid=" + eventId + "&did=" + did + '&type=' + EventCategory);
            window.location.assign('TheatrePlaceDetails.aspx?eid=' + eventId);
        }
        //}
        //else {
        //    alert("Movie Page");
        //}
    };

    fillprogram(type);
    function fillprogram(type) {
        try {
            var type = window.location.href.split('&')[3].split('=')[1].split('#')[0];//type
            $("#rbnChoice").find("input[type=radio]").each(function () {
                var rbnchoicevalue = $(this).val();
                if (rbnchoicevalue == type) {
                    $(this).attr('checked', 'checked');
                }
            });
        }
        catch (err)
        { }
    }

    $("#rbnChoice").find("input[type=radio]").change(function () {
        var userchoiceid = $(this).val();
        var userchoiceTxt = $(this).next('label').text();
        // var choice = $("#ddlChoice .modernSelectInput .txtSelect").attr('name');
        var cityId = $("#ddlCity .modernSelectInput .txtSelect").attr('name');
        GetProgram(cityId, userchoiceid);

        // $("#ddlShowtimeFilters #filteroptionbox").css('display', 'block');

        //if ($('#filteroptionbox').css('display') == 'none') {
        //    $("#filteroptionbox").css("visible", "true");
        //}

        $('#ddlShowtimeFilters .modernSelectInput .txtSelect').focus();
        $('#ddlShowtimeFilters .modernSelectInput .txtSelect').val('');

        setTimeout(function () {
            $("#filteroptionbox").css("display", "block");
        }, 100);

    });

    $(".MordernSelect > .modernSelectInput > .txtSelect").keyup(function () {
        filterChoiceOption(this);
    });
    function filterChoiceOption(element) {
        var filterSubject = $(element).parents('.MordernSelect').attr('id');
        var value = $(element).val().toLowerCase();
        $("#" + filterSubject + " li").each(function () {
            if ($(this).text().toLowerCase().indexOf(value) > -1) {
                $(this).show();
            } else {
                $(this).hide();
            }
        });
    }




    //Js for Banner Image Slider
    var CurrentSlider = 1;
    var nextSlider = 2;
    var staticImageId = 1;
    $(".sliderItems").find('img').each(function () {
        $(this).attr('id', staticImageId++)
    });
    var strBuild = "";
    for (var i = 1; i <= $(".sliderItems img").length; i++) {

        strBuild += "<li><a href='#' id='bullet" + i + "' title='" + i + "' class='bullet'>" + i + "</a></li>";
    }
    $(".thumbBullet ul").append(strBuild);



    $(".sliderItems img#1").fadeIn();
    $(".thumbBullet a:first").addClass('active');
    playSlider();

    $(".thumbBullet ul .bullet").click(function () {
        stopSlider()
        $(this).addClass("active").siblings(".active").removeClass("active");
        var dataslide = $(this).attr('title');
        var CurrentEvent = $(".sliderItems img#" + dataslide).attr('alt');
        $(".sliderItems img#" + dataslide).addClass('ActiveSlide');
        $(".sliderItems img#" + dataslide).fadeIn();
        $("#EventTitle").text(CurrentEvent);

    });
    function stopSlider() {
        $(".sliderItems img").removeClass('ActiveSlide');
        $("#EventTitle").text("");
        $(".sliderItems img").fadeOut(2000);
        $(".thumbBullet ul .bullet").removeClass('active');
    }

    function playSlider() {
        totalImage = $(".sliderItems img").size();
        loop = setInterval(function () {
            if (nextSlider > totalImage) {
                nextSlider = 1;
                CurrentSlider = 1;
            }
            $(".thumbBullet a").removeClass('active');
            $(".thumbBullet a#bullet" + nextSlider).addClass('active');
            $(".sliderItems img").fadeOut(2000);
            $(".sliderItems img#" + nextSlider).fadeIn(2000);
            $(".sliderItems img").removeClass('ActiveSlide');
            $(".sliderItems img#" + nextSlider).addClass('ActiveSlide');
            TitleSlide = $(".sliderItems .ActiveSlide").attr('alt');
            $("#EventTitle").text(TitleSlide);
            CurrentSlider = nextSlider;
            nextSlider = CurrentSlider + 1;
        }, 4000);
    }
    //js for banner Image Slider

    $(".icons").hover(function () {
        $(this).find('span').stop().show();
    },
    function () {
        $(this).find('span').stop().hide();
    });

    $(".RightQuickLnk").click(function () {
        var lnk = $(".RightQuickLnk span");
        $(".RightQuickLnkOption").slideToggle('slow', function () {
            if ($(this).is(':visible')) {
                lnk.text('Close Social Hub');
            } else {
                lnk.text('Open Social Hub');
            }
        });
    });

    $(".block").hover(function () {
        $(this).css("border-left", "2px solid rgba(209, 21, 14, 1)");
        $(this).find(".window").show();
    },
     function () {
         $(this).css("border-left", "2px solid white");
         $(this).find(".window").hide();
     });

    $("#MobileMenu").click(function () {
        showMobileMenu();
    });
    $(" .searchIcon").click(function () {
        showSearchBox();
    });

    $("#EventTab .tab").click(function () {
        $(this).addClass("tabselected").siblings(".tabselected").removeClass("tabselected");
    });
    $("#MovieTab .tab").click(function () {
        $(this).addClass("tabselected").siblings(".tabselected").removeClass("tabselected");
    });

    $("nav ul .lnk").click(function () {
        $(this).addClass('selected').siblings('.selected').removeClass('selected');
    });

    $(function () {
        try {
            var stickyHeaderTop = $('nav').offset().top;
            var stickyMenuTop = $('.myselectionDiv').offset().top;
            var pagewidth = innerWidth;
            $(window).scroll(function () {
                if (pagewidth >= '750') {
                    if ($(window).scrollTop() > stickyHeaderTop) {
                        $('nav').addClass('navSticky');
                    } else {
                        $('nav').removeClass('navSticky');
                    }

                    if ($(window).scrollTop() > stickyMenuTop) {
                        $('.myselectionDiv').addClass('myselectionDivSticky');
                    } else {
                        $('.myselectionDiv').removeClass('myselectionDivSticky');
                    }
                }
            });
        }
        catch (err)
        { }
    });




    var d = new Date();
    var n = d.getDate();

    $(".DateCalendar").empty();


    var prechoice = $("#ddlChoice .optionBox #" + type + "").text();
    $("#ddlChoice .modernSelectInput .txtSelect").val(prechoice);
    $("#ddlChoice .modernSelectInput .txtSelect").attr("name", type);

    try {
        var cityId = window.location.href.split('&')[0].split('=')[1];//city
        // var SelectedDate = window.location.href.split('&')[2].split('=')[1];//date value
        var Category = window.location.href.split('&')[3].split('=')[1].split('#')[0];//type
       

        $("#ddlMovie").find(".optionBox >ul").empty();
        var eventId1 = window.location.href.split('&')[1].split('=')[1];//eventId

        $.ajax({
            type: "POST",
            contentType: "application/json; charset=utf-8",
            url: "FillDropdowns.asmx/BindDatatoMovies",
            data: "{cityId:'" + cityId + "',EventCategory:'" + Category + "'}",
            dataType: "json",
            success: function (data) {
                $.each(data.d, function (key, value) {
                    if (eventId1 == value.MovieId) {

                        $("#ddlMovie .modernSelectInput .txtSelect").val(value.MovieName);
                        $("#ddlMovie .modernSelectInput .txtSelect").attr("name", eventId1);
                        //$("#ddlMovie .modernSelectInput .txtSelect").attr("value", refFrom);
                        $("#ddlShowtimeFilters .modernSelectInput .txtSelect").attr("name", eventId1);
                        $("#ddlShowtimeFilters .modernSelectInput .txtSelect").val(value.MovieName);
                        //$("#ddlShowtimeFilters .modernSelectInput .txtSelect").attr('value', refFrom);

                    }

                    $("#ddlShowtimeFilters .optionBox >ul").append($("<li id=" + value.MovieId + "></li>").html(value.MovieName));
                    $("#ddlMovie").find(".optionBox >ul").append($("<li id=" + value.MovieId + "></li>").html(value.MovieName));
                });
            },
            error: function (result) {
                alert("BindProgramFromCookie");
            }
        });
    }
    catch (err)
    { }

    try {
        // var SelectedDate = window.location.href.split('&')[2].split('=')[1];//date value
        
         if (eventId != undefined)
        {
        $("#ddlDate").find(".optionBox >ul").empty();
        $(".DateCalendar").empty();
        $.ajax({
            type: "POST",
            contentType: "application/json; charset=utf-8",
            url: "FillDropdowns.asmx/BindDatetoDropdown",
            data: "{eventId: " + eventId + ",cityId:" + cityId + ",EventCategory:'" + type + "'}",
            dataType: "json",
            success: function (data) {

                $(".DateCalendar").empty();
                mytable = $('<table></table>');

                var row = $('<tr>').appendTo(mytable);
                $.each(data.d, function (key, value) {

                    if (value.dtShowTime == SelectedDate) {
                        $('<td   class="dateItem selectedTd" ></td>').text(value.MovieName).attr('id', value.dtShowTime).appendTo(row);
                        $("#ddlDate .modernSelectInput .txtSelect").val(value.MovieName);
                        $("#ddlDate .modernSelectInput .txtSelect").attr("name", value.dtShowTime);
                    }
                    else {

                        $('<td  class="dateItem" ></td>').text(value.MovieName).attr('id', value.dtShowTime).appendTo(row);
                    }
                    $("#ddlDate").find(".optionBox >ul").append($("<li id=" + value.dtShowTime + "></li>").html(value.MovieName));

                });
                row.append('</tr>').appendTo(mytable);
                mytable.appendTo(".DateCalendar");
            },
            error: function (result) {
                //alert("FillDatesFromCookie");
        }
    });
}



        setTimeout(function () {
            var selectedProgram = $("#ddlMovie").children(".modernSelectInput").find(".txtSelect").val();
            var selectedCity = $("#ddlCity").children(".modernSelectInput").find(".txtSelect").val();
            var selectedDate = $("#ddlDate").children(".modernSelectInput").find(".txtSelect").val();
            $("#Selection_Details").text("Currently you are making booking for "+ selectedProgram + " in " + selectedCity + " on " + selectedDate);
            $(".arrow").fadeIn();
            $("#Selection_Details").fadeIn();
        }, 2000);


        $(document.body).on('click', '.ParentBlock', function () {
            var id = $(this).attr('id');
            var Category = $("#rbnChoice").find("input[type=radio]:checked").val();


            $.ajax({
                type: "POST",
                contentType: "application/json; charset=utf-8",
                url: "FillDropdowns.asmx/ShowMovieOrCinemaDetail",
                data: "{ID:'" + id + "',Category:'" + Category + "'}",
                dataType: "json",
                success: function (data) {
                    $(".popupDiv .popupContent").append(data.d);
                    placepopup();
                    showpopup();

                },
                error: function (result) {
                    alert("FillDatesFromCookie");
                }
            });

            //$(".popupDiv .popupContent").append('<div class="popupHeaderTxt">Call Support</div><br/><table><tr><td> <span class="popupnormalTxtLbl">Toll Free:</span></td><td><span class="popupnormalTxt"> 1800-11-8590 -( 10:00 AM to 06:30 PM )</span></td></tr><tr><td><span class="popupnormalTxtLbl">Mobile:</span></td><td><span class="popupnormalTxt"> 9810893803 -( 09:00 AM to 09:30 PM )</span></td></tr></table>');



        })
    }
    catch (err)
    { }


    $(".EventDescTab_Item").click(function () {
        $(this).addClass("EventDescTab_Item_selected").siblings(".EventDescTab_Item_selected").removeClass("EventDescTab_Item_selected");
    });

    $("#btnTicket").click(function () {
        $("#bookingOption").show();
        $("#Vdetails").hide();
        $("#EGallery").hide();
        $("#E_TC").hide();
        $("#Synopsis_Content").hide();
    });
    $("#btnVdetails").click(function () {
        $("#bookingOption").hide();
        $("#Vdetails").show();
        $("#EGallery").hide();
        $("#E_TC").hide();
        $("#Synopsis_Content").hide();
    });
    $("#btnEgallery").click(function () {
        $("#bookingOption").hide();
        $("#Vdetails").hide();
        $("#EGallery").show();
        $("#E_TC").hide();
        $("#Synopsis_Content").hide();
    });
    $("#btnTC").click(function () {
        $("#bookingOption").hide();
        $("#Vdetails").hide();
        $("#EGallery").hide();
        $("#E_TC").show();
        $("#Synopsis_Content").hide();
    });
    $("#btnSynopsis").click(function() {
        $("#bookingOption").hide();
        $("#Vdetails").hide();
        $("#EGallery").hide();
        $("#E_TC").hide();
        $("#Synopsis_Content").show();
    });




});

//$(document).click(function (e) {
//    if (!$(e.target).is('.wraper * , ul , #OptionMenu, .searchBox *,.wraper_cp *, .searchIcon')) {
//        window.location.href = '/EventDetail.aspx?cid=0&eid=10172&did=0&type=E'
//    }
//});

//for Event click go to event detail page directly

$(document).click(function (e) {
    if (!$(e.target).is('.MordernSelect *')) {
        $(".optionBox").hide();
    }
    if (!$(e.target).is('.loginOption *')) {
        $("#UserLnk").hide();
    }
});

function showSearchBox() {
    $(".searchBox").slideToggle();
}

function showMobileMenu() {
    $("nav").slideToggle();
}


function showHideNavigation() {
    var width = innerWidth;
    if (width >= '750') {
        $("nav").show();
        $(".searchBox").show();
    }
    else {
        $("nav").hide();
        $(".searchBox").hide();
    }
}


function GetMovieAndCinemaDetailsOnTheBasisOfMovies(eventId, CityId, did) {

    $("#BmeMovieDetail").empty();
    $('.DataLoader').html('<img src="images/ajax-loader.gif">');
    $(".DataLoader").css("display", "block");
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "FillDropdowns.asmx/ShowMoviesList",
        data: "{CityId:'" + CityId + "',did:'" + did + "',eventId:'" + eventId + "'}",
        dataType: "json",
        success: function (data) {
            $(".DataLoader").css("display", "none");
            $(".DataLoader").empty();
            $("#BmeMovieDetail").append(data.d);

        },
        error: function (result) {
            alert("ShowMoviesList");
        }
    });
}

function GetMovieAndCinemaDetailsOnTheBasisOfCinemas(eventId, CityId, did) {

    $("#BmeMovieDetail").empty();
    $('.DataLoader').html('<img src="images/ajax-loader.gif">'); $(".DataLoader").css("display", "block");
    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "FillDropdowns.asmx/ShowCinemasList",
        data: "{CityId:'" + CityId + "',did:'" + did + "',eventId:'" + eventId + "'}",
        dataType: "json",
        success: function (data) {
            $(".DataLoader").css("display", "none");
            $(".DataLoader").empty();
            $("#BmeMovieDetail").append(data.d);

        },
        error: function (result) {
            alert("ShowCinemasList");
        }
    });

}
function MailConfirmation() {
    var e = $(".popupInputTxt").val();
    var t = $("#popuptxtfieldmob").val();
    $(".lbltext").empty(); if (e != "" && t != "") {
        $("#confirmationLoader").html('<img src="images/ajax-loader1.gif" style="height:15px;width:18px;">');
        $.ajax({
            type: "POST", contentType: "application/json; charset=utf-8",
            url: "FillDropdowns.asmx/GetDataForReapeter",
            data: "{email: '" + e + "',mobile:'" + t + "'}",
            dataType: "json", success: function (e) {
                if (e != "") {
                    $.each(e.d, function (e, t) {
                        var n = t.smssent; if (n == 1) {
                            $(".lbltext").text("Sms Sent Successfully.")
                        } else if (n == 35) {
                            $(".lbltext").text("You have no recent booking on provided email")
                        } else { $(".lbltext").text("Message not sent.Please try again.") }
                    }); $("#popuptxtfieldemail").val(""); $("#popuptxtfieldmob").val("");
                    $("#confirmationLoader").empty()
                } else { alert(e) }
            }, error: function (e) { alert(e) }
        })
    }
    else {
        $(".lbltext").text("Fill Valid Email and Mobile!")
    }
}
