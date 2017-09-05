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
$(document.body).on('click', '#ddlClass1', function(e) {

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

$(document).ready(function () {
    var pageId = 0;
    var url = window.location.href.slice(window.location.href.lastIndexOf('?') + 1);
    if (url != null) {
        var lastVal = url.split("=")[1];

        if (lastVal == "105") {

            showSpecificTab(lastVal);
            LoadDataBindDataPirate(pageId);
        }
        else if (lastVal == '106') {
            showSpecificTab(lastVal);
            LoadDataBindDataBankJob(pageId);
        }

        else if (lastVal == '107') {
            showSpecificTab(lastVal);
            LoadDataBindMysterykurla(pageId);

        }

        else if (lastVal == '108') {
            showSpecificTab(lastVal);
            LoadDataBindHideout(pageId);
        }
        else if (lastVal == '109') {
            showSpecificTab(lastVal);
            LoadDataBindGallery(pageId);
        }

        else if (lastVal == '110') {
            showSpecificTab(lastVal);
            LoadDataScientist(pageId);
        }

        else if (lastVal == '102') {
            showSpecificTab(lastVal);
            LoadDataBindDataLockMystery(pageId);
        }
        else if (lastVal == '103') {
            showSpecificTab(lastVal);
            LoadDataBindDataDiamondMaze(pageId);
        }
        else if (lastVal == '104') {
            showSpecificTab(lastVal);
            LoadDataBindDataStolenPainting(pageId);
        }

        else if (lastVal == '101') {
            showSpecificTab(lastVal);
            LoadDataBindDataKaboom(pageId);
        }
        else if (lastVal == '100') {
            showSpecificTab(lastVal);
            LoadDataGetDataforSpykarChamber(pageId);
        }
        else if (lastVal == '111') {
            showSpecificTab(lastVal);
            LoadDataHouseRaid(pageId);
        }

        else if (lastVal == '112') {
            showSpecificTab(lastVal);
            LoadDataTravelEscape(pageId);
        }


    }
        //By Durgesh
    function showSpecificTab(val) {
        // $('#Andheri').addClass('LocationTab_selected');
        //  $('#Bandra').removeClass('LocationTab_selected');

        if (val == "105") {
            $('#Curla').removeClass('LocationTab_selected');
            $('#Bandra').removeClass('LocationTab_selected');
            $('#LowerParel').removeClass('LocationTab_selected');
            $('#Andheri').addClass('LocationTab_selected');
            $('#Fort').removeClass('LocationTab_selected');
            $('#FortTab').hide();
            $('#FortCalender').hide();

            $('#AndheriTab').show();
            $('#AndheriCalendar').show();
            $('#BandraGamesTab').hide();
            $('#CurlaTab').hide();
            $('#LowerParelTab').hide();
            $('#CurlaCalender').hide();
            $('#BandraCalendar').hide();
            $('#LowerParelCalendar').hide();

            $('#PirateTrapTab').addClass('cluehunt_tab cluehunt_tab_selected');
            $('#BankJobTab').removeClass('cluehunt_tab_selected');

            $('#BankJobCalendar').hide();
            $('#PirateTrapCalendar').show();
            $('#EventPlaceAddress').text('207, 2nd Floor, Crystal Point Mall, Above Star Bazaar, Link Road, Andheri West,Mumbai');
        }
        else if (val == "106") {


            $('#Curla').removeClass('LocationTab_selected');
            $('#Bandra').removeClass('LocationTab_selected');
            $('#LowerParel').removeClass('LocationTab_selected');
            $('#Andheri').addClass('LocationTab_selected');
            $('#Fort').removeClass('LocationTab_selected');
            $('#FortTab').hide();
            $('#FortCalender').hide();

            $('#AndheriTab').show();
            $('#AndheriCalendar').show();
            $('#BandraGamesTab').hide();
            $('#CurlaTab').hide();
            $('#LowerParelTab').hide();
            $('#CurlaCalender').hide();
            $('#BandraCalendar').hide();
            $('#LowerParelCalendar').hide();


            $('#PirateTrapTab').removeClass('cluehunt_tab_selected');
            $('#BankJobTab').addClass('cluehunt_tab_selected');


            $('#BankJobCalendar').show();
            $('#PirateTrapCalendar').hide();
            $('#EventPlaceAddress').text('207, 2nd Floor, Crystal Point Mall, Above Star Bazaar, Link Road, Andheri West,Mumbai');
        }

        else if (val == "107") {
            $('#Andheri').removeClass('LocationTab_selected');
            $('#Bandra').removeClass('LocationTab_selected');
            $('#LowerParel').removeClass('LocationTab_selected');
            $('#Curla').addClass('LocationTab_selected');
            $('#Fort').removeClass('LocationTab_selected');
            $('#FortTab').hide();
            $('#FortCalender').hide();

            $('#CurlaTab').show();
            $('#CurlaCalender').show();
            $('#BandraGamesTab').hide();
            $('#AndheriTab').hide();
            $('#LowerParelTab').hide();
            $('#AndheriCalendar').hide();
            $('#BandraCalendar').hide();
            $('#LowerParelCalendar').hide();


            $('#LockUpMysterycurla').addClass('cluehunt_tab cluehunt_tab_selected');
            $('#TerroristHideout').removeClass('cluehunt_tab_selected');
            $('#ArtGallery').removeClass('cluehunt_tab_selected');
            $('#MissingScientist').removeClass('cluehunt_tab_selected');


            $('#LockUpMysterycurlaCalender').show();
            $('#TerroristHideoutCalender').hide();
            $('#ArtGalleryCalender').hide();
            $('#MissingScientistCalender').hide();

            $('#EventPlaceAddress').text('Phoenix Marketcity, Unit S-28A, 2nd Floor, LBS Marg, Kurla West, Mumbai');

        }

        else if (val == "108") {

            $('#Andheri').removeClass('LocationTab_selected');
            $('#Bandra').removeClass('LocationTab_selected');
            $('#LowerParel').removeClass('LocationTab_selected');
            $('#Curla').addClass('LocationTab_selected');
            $('#Fort').removeClass('LocationTab_selected');
            $('#FortTab').hide();
            $('#FortCalender').hide();

            $('#CurlaTab').show();
            $('#CurlaCalender').show();
            $('#BandraGamesTab').hide();
            $('#AndheriTab').hide();
            $('#LowerParelTab').hide();
            $('#AndheriCalendar').hide();
            $('#BandraCalendar').hide();
            $('#LowerParelCalendar').hide();




            $('#TerroristHideout').addClass('cluehunt_tab cluehunt_tab_selected');
            $('#LockUpMysterycurla').removeClass('cluehunt_tab_selected');
            $('#ArtGallery').removeClass('cluehunt_tab_selected');
            $('#MissingScientist').removeClass('cluehunt_tab_selected');

            $('#TerroristHideoutCalender').show();
            $('#LockUpMysterycurlaCalender').hide();
            $('#ArtGalleryCalender').hide();
            $('#MissingScientistCalender').hide();

            $('#EventPlaceAddress').text('Phoenix Marketcity, Unit S-28A, 2nd Floor, LBS Marg, Kurla West, Mumbai');

        }

        else if (val == "109") {

            $('#Andheri').removeClass('LocationTab_selected');
            $('#Bandra').removeClass('LocationTab_selected');
            $('#LowerParel').removeClass('LocationTab_selected');
            $('#Curla').addClass('LocationTab_selected');
            $('#Fort').removeClass('LocationTab_selected');
            $('#FortTab').hide();
            $('#FortCalender').hide();

            $('#CurlaTab').show();
            $('#CurlaCalender').show();
            $('#BandraGamesTab').hide();
            $('#AndheriTab').hide();
            $('#LowerParelTab').hide();
            $('#AndheriCalendar').hide();
            $('#BandraCalendar').hide();
            $('#LowerParelCalendar').hide();




            $('#ArtGallery').addClass('cluehunt_tab cluehunt_tab_selected');
            $('#LockUpMysterycurla').removeClass('cluehunt_tab_selected');
            $('#TerroristHideout').removeClass('cluehunt_tab_selected');
            $('#MissingScientist').removeClass('cluehunt_tab_selected');

            $('#TerroristHideoutCalender').hide();
            $('#LockUpMysterycurlaCalender').hide();
            $('#ArtGalleryCalender').show();
            $('#MissingScientistCalender').hide();



            $('#EventPlaceAddress').text('Phoenix Marketcity, Unit S-28A, 2nd Floor, LBS Marg, Kurla West, Mumbai');

        }
        else if (val == "110") {

            $('#Andheri').removeClass('LocationTab_selected');
            $('#Bandra').removeClass('LocationTab_selected');
            $('#LowerParel').removeClass('LocationTab_selected');
            $('#Curla').addClass('LocationTab_selected');
            $('#Fort').removeClass('LocationTab_selected');
            $('#FortTab').hide();
            $('#FortCalender').hide();

            $('#CurlaTab').show();
            $('#CurlaCalender').show();
            $('#BandraGamesTab').hide();
            $('#AndheriTab').hide();
            $('#LowerParelTab').hide();
            $('#AndheriCalendar').hide();
            $('#BandraCalendar').hide();
            $('#LowerParelCalendar').hide();


            $('#MissingScientist').addClass('cluehunt_tab cluehunt_tab_selected');
            $('#LockUpMysterycurla').removeClass('cluehunt_tab_selected');
            $('#TerroristHideout').removeClass('cluehunt_tab_selected');
            $('#ArtGallery').removeClass('cluehunt_tab_selected');

            $('#TerroristHideoutCalender').hide();
            $('#LockUpMysterycurlaCalender').hide();
            $('#ArtGalleryCalender').hide();
            $('#MissingScientistCalender').show();





            $('#EventPlaceAddress').text('Phoenix Marketcity, Unit S-28A, 2nd Floor, LBS Marg, Kurla West, Mumbai');

        }

        else if (val == "102") {

            $('#Andheri').removeClass('LocationTab_selected');
            $('#Bandra').removeClass('LocationTab_selected');
            $('#Curla').removeClass('LocationTab_selected');
            $('#LowerParel').addClass('LocationTab_selected');
            $('#Fort').removeClass('LocationTab_selected');
            $('#FortTab').hide();
            $('#FortCalender').hide();

            $('#LowerParelTab').show();
            $('#LowerParelCalendar').show();
            $('#BandraGamesTab').hide();
            $('#AndheriTab').hide();
            $('#CurlaTab').hide();
            $('#CurlaCalender').hide();
            $('#AndheriCalendar').hide();
            $('#BandraCalendar').hide();
            $('#CurlaCalendar').hide();


            $('#LockUpMysteryTab').addClass('cluehunt_tab cluehunt_tab_selected');
            $('#DiamondMazeTab').removeClass('cluehunt_tab_selected');
            $('#StolenPaintingTab').removeClass('cluehunt_tab_selected');



            $('#MysteryCalendar').show();
            $('#StolenPaintingCalendar').hide();
            $('#DiamondMazeCalendar').hide();

            $('#EventPlaceAddress').text('C.D House,Ground Floor,Mathuradas Mill Compound,Behind Cafe Zoe,Near Funky Monkey Play Center,Lower Parel West Mumbai');

        }

        else if (val == "103") {

            $('#Andheri').removeClass('LocationTab_selected');
            $('#Bandra').removeClass('LocationTab_selected');
            $('#Curla').removeClass('LocationTab_selected');
            $('#LowerParel').addClass('LocationTab_selected');
            $('#Fort').removeClass('LocationTab_selected');
            $('#FortTab').hide();
            $('#FortCalender').hide();

            $('#LowerParelTab').show();
            $('#LowerParelCalendar').show();
            $('#BandraGamesTab').hide();
            $('#AndheriTab').hide();
            $('#CurlaTab').hide();
            $('#CurlaCalender').hide();
            $('#AndheriCalendar').hide();
            $('#BandraCalendar').hide();
            $('#CurlaCalendar').hide();


            $('#DiamondMazeTab').addClass('cluehunt_tab cluehunt_tab_selected');
            $('#LockUpMysteryTab').removeClass('cluehunt_tab_selected');
            $('#StolenPaintingTab').removeClass('cluehunt_tab_selected');


            $('#DiamondMazeCalendar').show();
            $('#MysteryCalendar').hide();
            $('#StolenPaintingCalendar').hide();



            $('#EventPlaceAddress').text('C.D House,Ground Floor,Mathuradas Mill Compound,Behind Cafe Zoe,Near Funky Monkey Play Center,Lower Parel West Mumbai');

        }

        else if (val == "104") {

            $('#Andheri').removeClass('LocationTab_selected');
            $('#Bandra').removeClass('LocationTab_selected');
            $('#Curla').removeClass('LocationTab_selected');
            $('#LowerParel').addClass('LocationTab_selected');
            $('#Fort').removeClass('LocationTab_selected');
            $('#FortTab').hide();
            $('#FortCalender').hide();

            $('#LowerParelTab').show();
            $('#LowerParelCalendar').show();
            $('#BandraGamesTab').hide();
            $('#AndheriTab').hide();
            $('#CurlaTab').hide();
            $('#CurlaCalender').hide();
            $('#AndheriCalendar').hide();
            $('#BandraCalendar').hide();
            $('#CurlaCalendar').hide();


            $('#StolenPaintingTab').addClass('cluehunt_tab cluehunt_tab_selected');
            $('#LockUpMysteryTab').removeClass('cluehunt_tab_selected');
            $('#DiamondMazeTab').removeClass('cluehunt_tab_selected');


            $('#StolenPaintingCalendar').show();
            $('#MysteryCalendar').hide();
            $('#DiamondMazeCalendar').hide();

            $('#EventPlaceAddress').text('C.D House,Ground Floor,Mathuradas Mill Compound,Behind Cafe Zoe,Near Funky Monkey Play Center,Lower Parel West Mumbai');

        }


        else if (val == "100") {

            $('#Andheri').removeClass('LocationTab_selected');
            $('#LowerParel').removeClass('LocationTab_selected');
            $('#Curla').removeClass('LocationTab_selected');
            $('#Bandra').addClass('LocationTab_selected');
            $('#Fort').removeClass('LocationTab_selected');
            $('#FortTab').hide();
            $('#FortCalender').hide();

            $('#BandraGamesTab').show();
            $('#BandraCalendar').show();
            $('#LowerParelTab').hide();
            $('#AndheriTab').hide();
            $('#CurlaTab').hide();
            $('#CurlaCalender').hide();
            $('#AndheriCalendar').hide();
            $('#LowerParelCalendar').hide();





            $('#tab_chamber').addClass('cluehunt_tab cluehunt_tab_selected');
            $('#tab_kaboom').removeClass('cluehunt_tab_selected');



            $('#chamber').show();
            $('#kaboom').hide();



            $('#EventPlaceAddress').text('301, Roha Orion, 16th Road, Near Mini Punjab Restaurant, Bandra West, Mumbai');

        }

        else if (val == "101") {

            $('#Andheri').removeClass('LocationTab_selected');
            $('#LowerParel').removeClass('LocationTab_selected');
            $('#Curla').removeClass('LocationTab_selected');
            $('#Bandra').addClass('LocationTab_selected');
            $('#Fort').removeClass('LocationTab_selected');
            $('#FortTab').hide();
            $('#FortCalender').hide();

            $('#BandraGamesTab').show();
            $('#BandraCalendar').show();
            $('#LowerParelTab').hide();
            $('#AndheriTab').hide();
            $('#CurlaTab').hide();
            $('#CurlaCalender').hide();
            $('#AndheriCalendar').hide();
            $('#LowerParelCalendar').hide();
            $('#CurlaCalendar').hide();


            $('#tab_kaboom').addClass('cluehunt_tab cluehunt_tab_selected');
            $('#tab_chamber').removeClass('cluehunt_tab_selected');



            $('#chamber').hide();
            $('#kaboom').show();



            $('#EventPlaceAddress').text('301, Roha Orion, 16th Road, Near Mini Punjab Restaurant, Bandra West, Mumbai');

        }
        else if (val == "111") {

            $('#Andheri').removeClass('LocationTab_selected');
            $('#LowerParel').removeClass('LocationTab_selected');
            $('#Curla').removeClass('LocationTab_selected');
            $('#Bandra').removeClass('LocationTab_selected');
            $('#Fort').addClass('LocationTab_selected');
            $('#FortTab').show();
            $('#FortCalender').show();
            $('#BandraGamesTab').hide();
            $('#BandraCalendar').hide();
            $('#LowerParelTab').hide();
            $('#AndheriTab').hide();
            $('#CurlaTab').hide();
            $('#CurlaCalender').hide();
            $('#AndheriCalendar').hide();
            $('#LowerParelCalendar').hide();
            $('#CurlaCalendar').hide();


            $('#HouseRaidTab').addClass('cluehunt_tab cluehunt_tab_selected');
            $('#EscapeTab').removeClass('cluehunt_tab_selected');



            $('#EscapeCalender').hide();
            $('#HouseRaidCalender').show();



            $('#EventPlaceAddress').text('Varma Chambers, Ground Floor, Homji Street, Near Christian Louboutin, Horniman Circle, Fort, Mumbai');

        }
        else if (val == "112") {

            $('#Andheri').removeClass('LocationTab_selected');
            $('#LowerParel').removeClass('LocationTab_selected');
            $('#Curla').removeClass('LocationTab_selected');
            $('#Bandra').removeClass('LocationTab_selected');
            $('#Fort').addClass('LocationTab_selected');
            $('#FortTab').show();
            $('#FortCalender').show();
            $('#BandraGamesTab').hide();
            $('#BandraCalendar').hide();
            $('#LowerParelTab').hide();
            $('#AndheriTab').hide();
            $('#CurlaTab').hide();
            $('#CurlaCalender').hide();
            $('#AndheriCalendar').hide();
            $('#LowerParelCalendar').hide();
            $('#CurlaCalendar').hide();



            $('#HouseRaidTab').removeClass('cluehunt_tab_selected');
            $('#EscapeTab').addClass('cluehunt_tab cluehunt_tab_selected');

            $('#HouseRaidCalender').hide();
            $('#EscapeCalender').show();




            $('#EventPlaceAddress').text('Varma Chambers, Ground Floor, Homji Street, Near Christian Louboutin, Horniman Circle, Fort, Mumbai');

        }
      
    }
    //Ended by Vijay

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
    LoadDataGetDataforSpykarChamber(pageId);

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
        $("#voucher").fadeOut(1000);
    });
    $("#tab_kaboom").click(function () {
        $("#chamber").fadeOut(1000);
        $("#kaboom").fadeIn(1000);
        $("#voucher").fadeOut(1000);
        LoadDataBindDataKaboom(pageId);
    });
    $("#tab_Voucher").click(function () {
        $("#chamber").fadeOut(1000);
        $("#kaboom").fadeOut(1000);
        $("#voucher").fadeIn(1000);
    });
    $('#Bandra').click(function () {
        $('#BandraGamesTab').show();
        $('#LowerParelTab').hide();
        $('#AndheriTab').hide();
        $('#BandraCalendar').show();
        $('#LowerParelCalendar').hide();
        $('#AndheriCalendar').hide();
        $('#CurlaTab').hide();
        $('#FortTab').hide();
        $('#CurlaCalender').hide();
        $('#FortCalender').hide();
        $('#EventPlaceAddress').text('301, Roha Orion, 16th Road, Near Mini Punjab Restaurant, Bandra West, Mumbai');
    });
    $('#LowerParel').click(function () {
       
        $('#BandraGamesTab').hide();
        $('#LowerParelTab').show();
        $('#AndheriTab').hide();
        $('#BandraCalendar').hide();
        $('#LowerParelCalendar').show();
        $('#AndheriCalendar').hide();
        $('#CurlaTab').hide();
        $('#FortTab').hide();
        $('#CurlaCalender').hide();
        $('#FortCalender').hide();
        $('#EventPlaceAddress').text('C.D House,Ground Floor,Mathuradas Mill Compound,Behind Cafe Zoe,Near Funky Monkey Play Center,Lower Parel West Mumbai');
        LoadDataBindDataLockMystery(pageId);
    });

    $('#Andheri').click(function () {
        
        $('#AndheriTab').show();
        $('#AndheriCalendar').show();
       // $('#PirateTrapCalendar').show();
        $('#BandraGamesTab').hide();
        $('#LowerParelTab').hide();
        $('#BandraCalendar').hide();
        $('#LowerParelCalendar').hide();
        $('#CurlaTab').hide();
        $('#FortTab').hide();
        $('#CurlaCalender').hide();
        $('#FortCalender').hide();
        $('#EventPlaceAddress').text('207, 2nd Floor, Crystal Point Mall, Above Star Bazaar, Link Road, Andheri West,Mumbai');
         LoadDataBindDataPirate(pageId);

    });

    $('#Curla').click(function () {
        $('#CurlaTab').show();
        $('#BandraGamesTab').hide();
        $('#AndheriTab').hide();
        $('#LowerParelTab').hide();
        $('#CurlaCalender').show();
        $('#AndheriCalendar').hide();
        $('#BandraCalendar').hide();
        $('#LowerParelCalendar').hide();
        $('#FortCalender').hide();
        $('#FortTab').hide()
     //   $("#LockUpMysterycurlaCalender").show();
        $('#EventPlaceAddress').text('Phoenix Marketcity, Unit S-28A, 2nd Floor, LBS Marg, Kurla West, Mumbai');
        LoadDataBindMysterykurla(pageId);

    });
    $('#Fort').click(function () {
        $('#FortTab').show();
        $('#FortCalender').show();
        $('#LowerParelTab').hide();
        $('#CurlaCalender').hide();
        $('#AndheriCalendar').hide();
        $('#BandraCalendar').hide();
        $('#LowerParelCalendar').hide();
        $('#BandraGamesTab').hide();
        $('#AndheriTab').hide();
        $('#LowerParelTab').hide();
        $('#CurlaTab').hide();
        //   $("#LockUpMysterycurlaCalender").show();
        $('#EventPlaceAddress').text('Varma Chambers, Ground Floor, Homji Street, Near Christian Louboutin, Horniman Circle, Fort, Mumbai');
        LoadDataHouseRaid(pageId);

    });
    $("#GiftTicket").click(function () {
        var url = "http://bookmyevent.com/GiftVoucher.aspx";
        window.open(url, '_blank');
    });
    $('#LockUpMysteryTab').click(function () {
        $('#MysteryCalendar').show();
        $('#StolenPaintingCalendar').hide();
        $('#DiamondMazeCalendar').hide();
    });
    $('#StolenPaintingTab').click(function () {
        $('#MysteryCalendar').hide();
        $('#StolenPaintingCalendar').show();
        $('#DiamondMazeCalendar').hide();
        LoadDataBindDataStolenPainting(pageId);

    });
    $('#DiamondMazeTab').click(function () {
        $('#MysteryCalendar').hide();
        $('#StolenPaintingCalendar').hide();
        $('#DiamondMazeCalendar').show();
        LoadDataBindDataDiamondMaze(pageId);
    });
    $('#PirateTrapTab').click(function () {
        
        $('#BankJobCalendar').hide();
        $('#PirateTrapCalendar').show();
      
        LoadDataBindDataPirate(pageId);
    });
    $('#BankJobTab').click(function () {
       // alert("hello");
        $('#PirateTrapCalendar').hide();
        $('#BankJobCalendar').show();
        LoadDataBindDataBankJob(pageId);
    });

    $('#LockUpMysterycurla').click(function ()
    {
        $('#LockUpMysterycurlaCalender').show();
        $('#TerroristHideoutCalender').hide();
        $('#ArtGalleryCalender').hide();
        $('#MissingScientistCalender').hide();
        LoadDataBindMysterykurla(pageId);
    });

    $('#TerroristHideout').click(function () {
        $('#LockUpMysterycurlaCalender').hide();
        $('#TerroristHideoutCalender').show();
        $('#ArtGalleryCalender').hide();
        $('#MissingScientistCalender').hide();
        LoadDataBindHideout(pageId);
    });

    $('#ArtGallery').click(function () {
        $('#LockUpMysterycurlaCalender').hide();
        $('#TerroristHideoutCalender').hide();
        $('#ArtGalleryCalender').show();
        $('#MissingScientistCalender').hide();
        LoadDataBindGallery(pageId);
    });

    $('#MissingScientist').click(function () {
        $('#LockUpMysterycurlaCalender').hide();
        $('#TerroristHideoutCalender').hide();
        $('#ArtGalleryCalender').hide();
        $('#MissingScientistCalender').show();
        LoadDataScientist(pageId);
    });
    $('#HouseRaidTab').click(function () {

        $('#HouseRaidCalender').show();
        $('#EscapeCalender').hide();
        LoadDataHouseRaid(pageId);
    });
    $('#EscapeTab').click(function () {

        $('#EscapeCalender').show();
        $('#HouseRaidCalender').hide();
        LoadDataTravelEscape(pageId);
    });

    $(".LocationTab").click(function () {
        $(this).addClass('LocationTab_selected').siblings('.LocationTab_selected').removeClass('LocationTab_selected');
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

    function LoadDataGetDataforSpykarChamber() {
        $(".DataLoader").show();
        // $(".DataLoader").html('<img src="images/ajax-loader.gif"  style="height:20px;" />');
        $('#init').empty();
        $.ajax({
            type: "POST",
            url: "CluehuntwebService.asmx/GetDataforSpykarChamber",
            data: "{pageId:'" + pageId + "'}",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (data) {

                $('#init').append(data.d);
                $('.DataLoader').hide();
            },
            error: function (result) {

            }
        });

    }

    function LoadDataBindDataKaboom() {

        // $(".DataLoader").html('<img src="images/ajax-loader.gif"  style="height:20px;" />');
        if ($('#init1').html().trim() == "") {
            $(".DataLoader").show();
            $.ajax({
                type: "POST",
                url: "CluehuntwebService.asmx/BindDataKaboom",
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
    }
    function LoadDataBindDataLockMystery() {

        // $(".DataLoader").html('<img src="images/ajax-loader.gif"  style="height:20px;" />');
        if ($('#initMystery').html().trim() == "") {
            $(".DataLoader").show();
            $.ajax({
                type: "POST",
                url: "CluehuntwebService.asmx/BindDataLockMystery",
                data: "{pageId:'" + pageId + "'}",
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                success: function (data) {
                    $('#initMystery').append(data.d);
                    $(".DataLoader").hide();

                },
                error: function (result) {

                }
            });
        }

    }
    function LoadDataBindDataStolenPainting() {

        // $(".DataLoader").html('<img src="images/ajax-loader.gif"  style="height:20px;" />');
        if ($('#initPainting').html().trim() == "") {
            $(".DataLoader").show();
            $.ajax({
                type: "POST",
                url: "CluehuntwebService.asmx/BindDataStolenPainting",
                data: "{pageId:'" + pageId + "'}",
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                success: function (data) {
                    $('#initPainting').append(data.d);
                    $(".DataLoader").hide();

                },
                error: function (result) {

                }
            });
        }
    }
    function LoadDataBindDataDiamondMaze() {

        //  $(".DataLoader").html('<img src="images/ajax-loader.gif"  style="height:20px;" />');
        if ($('#initDiamondMaze').html().trim() == "") {
            $(".DataLoader").show();
            $.ajax({
                type: "POST",
                url: "CluehuntwebService.asmx/BindDataDiamondMaze",
                data: "{pageId:'" + pageId + "'}",
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                success: function (data) {
                    $('#initDiamondMaze').append(data.d);
                    $(".DataLoader").hide();
                },
                error: function (result) {

                }
            });
        }
    }

    function LoadDataBindDataPirate() {
     
        //  $(".DataLoader").html('<img src="images/ajax-loader.gif"  style="height:20px;" />');
        if ($('#initPirate').html().trim() == "") {
            $(".DataLoader").show();
            $.ajax({
                type: "POST",
                url: "CluehuntwebService.asmx/BindDataPiratreTrap",
                data: "{pageId:'" + pageId + "'}",
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                success: function (data) {
                    $('#initPirate').append(data.d);
                    $(".DataLoader").hide();
                },
                error: function (result) {

                }
            });
        }
    }
    function LoadDataBindDataBankJob() {

        //  $(".DataLoader").html('<img src="images/ajax-loader.gif"  style="height:20px;" />');
        if ($('#initBank').html().trim() == "") {
            $(".DataLoader").show();
            $.ajax({
                type: "POST",
                url: "CluehuntwebService.asmx/BindDataBankJob",
                data: "{pageId:'" + pageId + "'}",
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                success: function (data) {
                    $('#initBank').append(data.d);
                    $(".DataLoader").hide();
                },
                error: function (result) {

                }
            });
        }
    }
    function LoadDataBindMysterykurla() {

        //  $(".DataLoader").html('<img src="images/ajax-loader.gif"  style="height:20px;" />');
        if ($('#initLockUpMysterycurla').html().trim() == "") {
            $(".DataLoader").show();
            $.ajax({
                type: "POST",
                url: "CluehuntwebService.asmx/BindDataMysteryKurla",
                data: "{pageId:'" + pageId + "'}",
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                success: function (data) {
                    $('#initLockUpMysterycurla').append(data.d);
                    $(".DataLoader").hide();
                },
                error: function (result) {

                }
            });
        }
    }
    function LoadDataBindHideout() {

        //  $(".DataLoader").html('<img src="images/ajax-loader.gif"  style="height:20px;" />');
        if ($('#initTerroristHideout').html().trim() == "") {
            $(".DataLoader").show();
            $.ajax({
                type: "POST",
                url: "CluehuntwebService.asmx/BindDataHideout",
                data: "{pageId:'" + pageId + "'}",
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                success: function (data) {
                    $('#initTerroristHideout').append(data.d);
                    $(".DataLoader").hide();
                },
                error: function (result) {

                }
            });
        }
    }
    function LoadDataBindGallery() {

        //  $(".DataLoader").html('<img src="images/ajax-loader.gif"  style="height:20px;" />');
        if ($('#initArtGallery').html().trim() == "") {
            $(".DataLoader").show();
            $.ajax({
                type: "POST",
                url: "CluehuntwebService.asmx/BindDataGallery",
                data: "{pageId:'" + pageId + "'}",
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                success: function (data) {
                    $('#initArtGallery').append(data.d);
                    $(".DataLoader").hide();
                },
                error: function (result) {

                }
            });
        }
    }
    function LoadDataScientist() {

        //  $(".DataLoader").html('<img src="images/ajax-loader.gif"  style="height:20px;" />');
        if ($('#initMissingScientist').html().trim() == "") {
            $(".DataLoader").show();
            $.ajax({
                type: "POST",
                url: "CluehuntwebService.asmx/BindDataScientist",
                data: "{pageId:'" + pageId + "'}",
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                success: function (data) {
                    $('#initMissingScientist').append(data.d);
                    $(".DataLoader").hide();
                },
                error: function (result) {

                }
            });
        }
    }
    function LoadDataHouseRaid() {


        if ($('#initHouseRaid').html().trim() == "") {
            $(".DataLoader").show();
            $.ajax({
                type: "POST",
                url: "CluehuntwebService.asmx/BindDataHouseRaid",
                data: "{pageId:'" + pageId + "'}",
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                success: function (data) {
                    $('#initHouseRaid').append(data.d);
                    $(".DataLoader").hide();
                },
                error: function (result) {

                }
            });
        }
    }
    function LoadDataTravelEscape() {


        if ($('#initEscape').html().trim() == "") {
            $(".DataLoader").show();
            $.ajax({
                type: "POST",
                url: "CluehuntwebService.asmx/BindDataTravelEscape",
                data: "{pageId:'" + pageId + "'}",
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                success: function (data) {
                    $('#initEscape').append(data.d);
                    $(".DataLoader").hide();
                },
                error: function (result) {

                }
            });
        }
    }
});
