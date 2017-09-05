$(document).ready(function () {
    $(".packageItem").click(function () {
        $(this).addClass('packageItem_Selected').siblings('.packageItem_Selected').removeClass('packageItem_Selected');
    });


    $("#charactersLnk").click(function () {
        $("#characters").show();
        $("#Streets").hide();
        $("#Events").hide();
    });
    $("#streetsLnk").click(function () {
        $("#characters").hide();
        $("#Streets").show();
        $("#Events").hide();
    });
    $("#eventsLnk").click(function () {
        $("#characters").hide();
        $("#Streets").hide();
        $("#Events").show();
    });

    $(".itemKey").click(function () {
        var labelText = $(this).text();
        $(this).parent(".mainItem").find(".subItem").slideToggle();
        $(this).toggleClass("ItemKeyOpened");
        if (labelText == "Show Rides") {
            $(this).text("Hide Rides");
        }
        else {
            $(this).text("Show Rides");
        }

    });

    $(".imagicaNavigation ul li").click(function () {
        var workspaceWidth = innerWidth;
        var width = innerWidth;
        var selectedmenuTxt = $(this).text();
        if (width <= '750') {
            $(".imagicaNavigation").hide();
            $(".imagicaNavMenu span").text(selectedmenuTxt);
        }
        else {
            $(".imagicaNavMenu span").text(selectedmenuTxt);
        }
    });

    $(".imagicaNavMenu").click(function () {
        $(".imagicaNavigation").slideToggle();
    });
});

$(window).resize(function () {
    showHideDellaMenu();
});
function showHideDellaMenu() {
    var width = innerWidth;
    if (width >= '750') {
        $(".imagicaNavigation").show();
    }
    else {
        $(".imagicaNavigation").hide();
    }
}
function AddAddons(category, variationCode, excategorydata,thisval) {

   // alert(category + excategorydata + thisval.value);
    var catName = $(thisval).closest('tr').find('.CatTd').text();
    var cost = $(thisval).closest('tr').find('.priceTd').text();
    var Qty = $(thisval).closest('tr').find('#Mytable tr').find(".QtySelect option:selected").text();
    var City = $(thisval).closest('tr').find('#Mytable tr').find(".CitySelectMum option:selected").text();
    var Cityfirst = $(thisval).closest('tr').find('#Mytable tr').find(".CitySelectPune option:selected").text()
  
  
    if (City!="Mumbai")
        var cityLocation = "Mumbai|||" + City;
    if (Cityfirst != "Pune")
        var cityLocation = "Pune|||" + Cityfirst;

    $.ajax({
        type: "POST",
        url: "DellaAddons.aspx/viewcartAddon",
        data: '{cart:"' + excategorydata + '",product:"' + catName + '",cost:"' + cost + '",Quantity:"' + Qty + '",cityLocation:"' + cityLocation + '"}',
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: OnSuccess,
        failure: function (response) {
            alert(response.d);

        }
    });


    function OnSuccess(response) {
      

        alert(" Addon added successfully");
        fillcart();
        
    }





}

function NavigateToOrder()
{
    var url1 = 'OrderDella.aspx';

    window.location.assign(url1);

}
    

function NavigateToNextPage(category, variationCode, excategorydata, thisval,packageprod,visitdate,total) {
 
    var catName = $(thisval).closest('.row').find('.catname').text();
    var cost = $(thisval).closest('.row').find('.unitprice').text();
 
    var str = packageprod;
    var strpackage = str.split('/');
    var packagedata = "";
    var post = '';
    
      for (var i = 0; i < strpackage.length - 1;i++) {
          post+= strpackage[i].split('#')[0] + "-" + strpackage[i].split('#')[1]+" ,";
         
      }
    $.ajax({
        type: "POST",
        url: "DellaAddons.aspx/viewcart",
        data: '{cart:"' + excategorydata + '",ProductName:"' + catName + '",total:"' + total + '",visitDate:"' + visitdate + '",persons:"' + post+ '"}',
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: OnSuccess,
        failure: function (response) {
            alert(response.d);

        }
    });


    function OnSuccess(response) {
       // alert("success me ayya");
        var res = response.d;
      //  alert(res);
        var url1 = "";
        fillcart();


      
        //------------------------------------------------------------------------------------------------------------------------------------------------
        var url1 = 'DellaAddons.aspx?S_Ref_Id=' + category + "&VC=" + variationCode;
       
        window.location.assign(url1);
    }





}
function busaddonAppend(ele)
{

    alert(ele.value);
}

function  divcartShow()
{

    var id = document.getElementById("dvcart");
    if (id.style.display == 'block')
        id.style.display = 'none';
       else
        id.style.display = 'block';

    
}
function fillcart() {

 
    $('#dvcart').empty();
    $("#spanvisitdate").empty();
  $.ajax({
      type: "POST",
      url: "DellaAddons.aspx/fillcart",
      //data: JSON.stringify(cartdata),
     data: '{}',
        contentType: "application/json; charset=utf-8",
       dataType: "json",
       success: OnSuccess,
       failure: function (data) {
           alert(data);
            alert("failed");
        }
   });

  function OnSuccess(data) {
    
     
     var dataArray = jQuery.parseJSON(data.d);
     var itemcount = 1;
    
   
     $("#dvcart").append("<div class='panel panel-primary'><div id='packageDetails' class='panel-heading'></div><div id='CartContainer' class='panel-body'></div></div>");
        $.each(dataArray, function (index, element) {
            $("#itemcount").empty();
        
            if(element.Type=="Package")
            {
                $("#spanvisitdate").append("Visit Date: " + element.Visit_Date);
                $("#dvcart #packageDetails").append("<div class='row'><div class='col-md-5'><span>" + element.Products + "</span></div><div class='col-md-5'><span style='font-size:11px;'>" + element.Persons + "</div><div class='col-md-2'><span style='font-size:11px;'><b>" + element.Subtotal + "/-</b></span></div></div>");
                //if(index>1)
               // $("#dvcart table").append("<tr><td style='background-color:#f5f5f5;'><span><b>Addons</b></span></td><td style='background-color:#f5f5f5;'><span><b>Qty</b></span></td><td style='background-color:#f5f5f5;'><span><b>Price</b></span></td><td style='background-color:#f5f5f5;'></td></tr>");
            }
            else {
               

                if (index== "1")
                    $("#dvcart #CartContainer").append("<div class='row thumbnail'><div class='col-md-6'><span><b>Addons</b></span></div><div class='col-md-2'><span><b>Qty</b></span></div><div class='col-md-2'><span><b>Price</b></span></div><div class='col-md-2'><span>Remove</span></div></div>");

                $("#dvcart #CartContainer").append("<div class='row'><div id='productName' class='col-md-6'>" + element.Products + "</div><div class='col-md-2'><span>" + element.quantity + "</span></div><div class='col-md-2'><span>" + element.Subtotal + "/-</span></div><div class='col-md-2' style='text-align:center;'><a href='#' style='color:#f00;'><span  onclick=cartDelete(this) class='glyphicon glyphicon-trash'></span></a></div></div>");
                itemcount = parseInt(itemcount) + parseInt(element.quantity)
            }
            $("#itemcount").append(itemcount);
           
        });
  }
 
}


function isFutureDate() {
    var idate = document.getElementById("ContentPlaceHolder1_txtDate").value;

    if (idate == '') {

        alert("please fill visit date");
        return false;
    }
    else {


        var d = new Date();
        var day = d.getDate();
        var year = d.getFullYear();
        var month = d.getMonth() + 1;
        var today35 = (d.getMonth() + 1) + "-" + d.getDate() + "-" + d.getFullYear();

        if (new Date(idate) < new Date(today35)) {

            alert("please select valid date");
            document.getElementById("ContentPlaceHolder1_txtDate").value = "";
            return false;
        }



        else {

            return true;
        }


    }
}



function cartDelete(proId) {

   
    var retVal = confirm("Are you sure you want to delete this item ?");
  
    if (retVal == true) {
        var catName = $(proId).closest('.row').find('#productName').text();
      
        // $('#ContentPlaceHolder1_cartsub').empty();
        $.ajax({
            type: "POST",
            url: "DellaAddons.aspx/cartDelete",

            data: '{ productId: "' + catName + '"}',
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: OnSuccess,
            failure: function (data) {
                alert(data);
                alert("failed");
            }
        });

        function OnSuccess(data) {
            fillcart();
           
        }

    } else {
        return false;

    }
}
          
$(document).ready(function () {
    $("#ContentPlaceHolder1_txtZip").keydown(function (e) {
        // Allow: backspace, delete, tab, escape, enter and .
        if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 110, 190]) !== -1 ||
            // Allow: Ctrl+A, Command+A
            (e.keyCode === 65 && (e.ctrlKey === true || e.metaKey === true)) ||
            // Allow: home, end, left, right, down, up
            (e.keyCode >= 35 && e.keyCode <= 40)) {
            // let it happen, don't do anything
            return;
        }
        // Ensure that it is a number and stop the keypress
        if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
            e.preventDefault();
        }
    });
});


$(document).ready(function () {
    $("#ContentPlaceHolder1_txtMobile").keydown(function (e) {
        // Allow: backspace, delete, tab, escape, enter and .
        if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 110, 190]) !== -1 ||
            // Allow: Ctrl+A, Command+A
            (e.keyCode === 65 && (e.ctrlKey === true || e.metaKey === true)) ||
            // Allow: home, end, left, right, down, up
            (e.keyCode >= 35 && e.keyCode <= 40)) {
            // let it happen, don't do anything
            return;
        }
        // Ensure that it is a number and stop the keypress
        if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
            e.preventDefault();
        }
    });
});








function validation() {


        if (document.getElementById("ContentPlaceHolder1_txtFirstName").value == '') {
            alert("Fill first name");
            return false;
        }
        if (document.getElementById("ContentPlaceHolder1_txtLastName").value == '') {
            alert("Fill last name");
            return false;
        }
        if (document.getElementById("ContentPlaceHolder1_txtMobile").value == '') {
            alert("Fill mobile number");
            return false;
        }
        if (document.getElementById("ContentPlaceHolder1_txtEmail").value == '') {
            alert("Fill Email");
            return false;
        }
        if (document.getElementById("ContentPlaceHolder1_txtDateOfBirth").value == '') {
            alert("Fill DOB");
            return false;
        }
        if (document.getElementById("ContentPlaceHolder1_txtAddress1").value == '') {
            alert("Fill Address1");
            return false;
        }
        if (document.getElementById("ContentPlaceHolder1_txtAddress2").value == '') {
            alert("Fill Address2");
            return false;
        }
        if (document.getElementById("ContentPlaceHolder1_txtState").value == '') {
            alert("Fill state");
            return false;
        }
        if (document.getElementById("ContentPlaceHolder1_txtCity").value == '') {
            alert("Fill city");
            return false;
        }
        if (document.getElementById("ContentPlaceHolder1_txtCountry").value == '') {
            alert("Fill country");
            return false;
        }
        if (document.getElementById("ContentPlaceHolder1_txtZip").value == '') {
            alert("Fill Zipcode");
            return false;
        }


        return true;

    }





