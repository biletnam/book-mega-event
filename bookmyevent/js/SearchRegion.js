$(document).ready(function () {

    var EventCategory = "M";
    $("#ddlCityFooter").empty();
    $("#ddlCityFooter").append($("<option></option>").val("0").html("Loading..."));

    $.ajax({
        type: "POST",
        contentType: "application/json; charset=utf-8",
        url: "FillDropdowns.asmx/BindDatatoDropdown",
        data: "{Category:'" + EventCategory + "'}",
        dataType: "json",
        success: function (data) {
            $.each(data.d, function (key, value) {

                $("#ddlCityFooter").append($("<option value=" + value.CountryId + "></option>").html(value.CountryName));
            });
            $("#ddlCityFooter option[value='0']").remove();
            $("#ddlCityFooter").prepend("<option value='0' selected='selected'>MY CITY</option>");
        },

        error: function (result) {
            // alert("ddlCityFooter");
        }
    });
    var CityId = window.location.href.split('&')[0].split('=')[1];//city
    GetDataOntheBasisOfCity(CityId);
    GetScheduleForAllCities(CityId, "0");   // on page load 

    $("#ddlDatesOfAllCinemas").change(function (e) {
        var did = $("#ddlDatesOfAllCinemas").val();
        GetScheduleForAllCities(CityId, did);
    });
    $("#ddlCityFooter").change(function (e) {
        var cid = $("#ddlCityFooter").val();
        var cityName = $("#ddlCityFooter  option:selected").text();
        window.location.assign('searchregions.aspx?cid=' + cid+'&cityName='+cityName);
    });
});

function GetDataOntheBasisOfCity(CityId) {
    
    if (CityId === undefined) {

    }
    else {
        var isNan = isNaN(CityId);
        if (isNan == false) {
            $.ajax({
                type: "POST",
                contentType: "application/json; charset=utf-8",
                url: "FillDropdowns.asmx/GetDateForAllCities",
                data: "{CityId:'" + CityId + "'}",
                dataType: "json",
                success: function (data) {
                    $.each(data.d, function (key, value) {
                        $("#ddlDatesOfAllCinemas").append($("<option value=" + value.dtShowTime + "></option>").html(value.MovieName));
                    });

                },
                error: function (result) {
                   // alert("ddlDatesOfAllCinemas");
                }
            });
        }
    }
}

function GetScheduleForAllCities(CityId, did) {
    if (CityId === undefined)
    { }
    else
    {
        var isNan = isNaN(CityId);
        if (isNan == false) {
            try
            {
                var CityName = window.location.href.split('&')[1].split('=')[1];//city
                $("#cityName").empty();
                $(".RegionWiseData").empty();
                $("#cityName").append(CityName);
                $.ajax({
                    type: "POST",
                    contentType: "application/json; charset=utf-8",
                    url: "FillDropdowns.asmx/GetScheduleForAllCities",
                    data: "{CityId:'" + CityId + "',did:'" + did + "'}",
                    dataType: "json",
                    success: function (data) {
                        $(".RegionWiseData").append(data.d);

                    },
                    error: function (result) {
                       // alert("ThumbnailHolder");
                    }
                });
            }
            catch (err)
            { }
        }
    }
}

