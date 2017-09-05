
$(document).click(function (e) {
    if (!$(e.target).is('.search-form *')) {
        $(".searchresultcontain").hide();
        $(".master2searchresultcontain").hide();
    }
});


function getDataFromServerForSearchBox() {
    var txtSearch = $("#txtSearch").val();
    var rbnSearch = $('input[name=rbnSearch]:checked').val();
    $("#ddlMoviesSearch> option").remove();
    $('#ddlMoviesSearch').empty();
    $("#divHeader").empty();
    $("#divLoadData").show();

    var moviesHeader = 0;
    var EventHeader = 0;
    var theaterHeader = 0;
    var cinemaHeader = 0;
    var adventure = 0;
    var artist = 0;
    var venue = 0;
    $("#ddlMoviesSearch> option").remove();
    $('#divPostsLoader').html('<img src="images/ajax-loader1.gif" style="height:15px;width:15px;">');
   
    $.ajax({
        type: "POST",
        url: "FillDropdowns.asmx/BindDatatoDropdownSearch",
        data: "{txtSearch:'" + txtSearch + "'}",
        contentType: "application/json; charset=utf-8",
        dataType: "json",

        success: function (data) {
            $.each(data.d, function (key, value) {


                if (value.Category == "M") {
                    if (moviesHeader == 0) {
                       // $("#ddlMoviesSearch").append($("<li class='M'></li>").val("0").html("Movies"));
                    }
                   // $("#ddlMoviesSearch").append($("<li></li>").append($("<a class='anavigateUrl' href='movie.aspx?eid=" + value.CountryId + " ' id=" + value.CountryId + " ></a>").val(value.CountryId).html(value.CountryName)));
                    moviesHeader++;
                }
                if (value.Category == "A") {
                    if (adventure == 0) {
                        $("#ddlMoviesSearch").append($("<li class='M'></li>").val("0").html("Adventure and Games"));
                    }
                    $("#ddlMoviesSearch").append($("<li></li>").append($("<a class='anavigateUrl' href='EventDetail.aspx?cid=0&eid=" + value.CountryId + "&did=0&type=E ' id=" + value.CountryId + " ></a>").val(value.CountryId).html(value.CountryName)));
                    adventure++;
                }
                if (value.Category == "C") {
                    if (cinemaHeader == 0) {
                       // $("#ddlMoviesSearch").append($("<li class='M'></li>").val("0").html("Cinemas"));
                    }
                  //  $("#ddlMoviesSearch").append($("<li ></li>").append($("<a class='anavigateUrl' href='SearchCinemas.aspx?id=" + value.CountryId + " ' id=" + value.CountryId + " ></a>").val(value.CountryId).html(value.CountryName)));
                    
                    cinemaHeader++;
                }
                if (value.Category == "T") {
                    if (theaterHeader == 0) {
                        $("#ddlMoviesSearch").append($("<li class='M'></li>").val("0").html("Theaters"));
                    }
                    $("#ddlMoviesSearch").append($("<li></li>").append($("<a class='anavigateUrl' href='searchTheatres.aspx?id=" + value.CountryId + " ' id=" + value.CountryId + " ></a>").val(value.CountryId).html(value.CountryName)));
                   
                    theaterHeader++;
                }
                if (value.Category == "E") {
                    if (EventHeader == 0) {
                        $("#ddlMoviesSearch").append($("<li  class='M'></li>").val("0").html("Events"));
                    }
                    //$("#ddlMoviesSearch").append($("<li></li>").append($("<a class='anavigateUrl' href='EventDetail.aspx?eid=" + value.CountryId + " ' id=" + value.CountryId + " ></a>").val(value.CountryId).html(value.CountryName)));
                    $("#ddlMoviesSearch").append($("<li></li>").append($("<a class='anavigateUrl' href='EventDetail.aspx?cid=0&eid=" + value.CountryId + "&did=0&type=E ' id=" + value.CountryId + " ></a>").val(value.CountryId).html(value.CountryName)));
                    EventHeader++;
                }

                if (value.Category == "ART") {
                    if (artist == 0) {
                        $("#ddlMoviesSearch").append($("<li class='M'></li>").val("0").html("Celebrities"));
                    }
                    $("#ddlMoviesSearch").append($("<li></li>").append($("<a class='anavigateUrl' href='artistdetails.aspx?artistid=" + value.CountryId + " ' id=" + value.CountryId + " ></a>").val(value.CountryId).html(value.CountryName)));

                    artist++;
                }

                if (value.Category == "V") {
                    if (venue == 0) {
                        $("#ddlMoviesSearch").append($("<li class='M'></li>").val("0").html("Party Venues"));
                    }
                    $("#ddlMoviesSearch").append($("<li></li>").append($("<a class='anavigateUrl' href='VenueBooking.aspx?TheaterId=" + value.CountryId + " ' id=" + value.CountryId + " ></a>").val(value.CountryId).html(value.CountryName)));

                    venue++;
                }


            });
            $('#divPostsLoader').empty();
        }
    });
};
$(document.body).on("click", ".anavigateUrl", function () {
    var id = this.id;

    var intId = id;
    var txtSearch = $("#txtSearch").val();
    if (intId == undefined) {
        alert("What do you want to search ?");
    }
});

function navigateButton() {
    var txtSearch = $("#txtSearch").val();
    if (txtSearch == "") {
        alert("What do you want to search ?");
    }
    else {
        window.location.assign('search.aspx?q=' + txtSearch);
    }
}

//$(document.body).on("click",function()
//{//alert("HELLO");
//});
$(".thumbnailButton").click(function () {
    alert("HELLO");
    var data = $(this).html();
    if (data == thumbnailButton) {

        window.location.assign('Movie.aspx');
    }
});

//$(".view-more").click(function() {
//    alert();
//    var data = $(this).html();
//    if(data==View More) {
//        window.location.href = "http://bookmyevent.com/default.aspx";
//    } 
//});
//function GotoRedirect()
//{
//   // alert("Hi");


//}
function ClearFields() {
    // $(".ddlChoice option[value='0']").remove();
    //$(".ddlChoice").prepend("<option value='0' selected='selected'>MY CHOICE</option>");
    $(".ddlCity").prepend("<option value='0' selected='selected'>MY CITY</option>");
    $(".ddlMovie").prepend("<option value='0' selected='selected'>MY PROGRAM</option>");
    $(".ddlDate").prepend("<option value='0' selected='selected'>MY DATE</option>");

    $(".ddlCity").prop('disabled', 'disabled');
    $(".ddlMovie").prop('disabled', 'disabled');
    $(".ddlDate").prop('disabled', 'disabled');

}


