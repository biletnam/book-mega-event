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



function countCart()

{

    $.ajax({
        type: "POST",
        url: "AdlabsImagica.aspx/Countcart",
        data: '{}',
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: OnSuccess,
        failure: function (response) {
            alert(response.d);

        }
    });


    function OnSuccess(response) {
        var res = response.d.split('#');
       
        $('#ContentPlaceHolder1_cartsub').empty();
        document.getElementById("ContentPlaceHolder1_init").style.display = "none";
        document.getElementById("ContentPlaceHolder1_addons").style.display = "block";
        document.getElementById("ContentPlaceHolder1_cartsub").style.display = "block";
       $('#ContentPlaceHolder1_cartsub').append("<table style='width:100%;'><tr></tr></table>");
       $('#ContentPlaceHolder1_cartsub table tr').append('<td><span style="font-size:15px;"><b>Cart Subtotal : ' + res[1] + "  " + '</b></span></td>');
       $('#ContentPlaceHolder1_cartsub table tr').append('<td><span style="font-size:15px;"><b>Visit Date : ' + res[0] + '</b></span></td>');
       $('#ContentPlaceHolder1_cartsub table tr').append('<td style="text-align:right;"><span style="cursor:pointer;font-size: 18px;color: #f00;" class="glyphicon glyphicon-shopping-cart" onclick=divslide() >(' + res[2] + ') <span class="glyphicon glyphicon-menu-down"></span></td>');
     
       
        }

}
function NavigateToNextPage(category, variationCode) {


    $.ajax({
        type: "POST",
        url: "AdlabsImagica.aspx/Countcart",
        data: '{}',
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: OnSuccess,
        failure: function (response) {
            alert(response.d);

        }
    });


    function OnSuccess(response) {
        var res = response.d.split('#');
        //  var res = response.d;
        
        var url1 = "";
        if (res[2] > 0) {
            if (res[3] > 0) {
                url1 = 'OrderImagica.aspx';
            }
            else
            {
                if((res[3]) == 'C')
                {
                    alert("Child must be accompanied by either an adult or a senior citizen!");
                    url1 = 'AdlabsImagica.aspx';
                }
                else {

                    url1 = 'OrderImagica.aspx';
                }
            
            }
           

        }
        else {
            alert("your cart is empty!");
            url1 = 'AdlabsImagica.aspx';
        }
        if (res[4] > 0)
        {
            alert("Booking of addons are not allowed without ticket!");
            url1 = 'AdlabsImagica.aspx';
        }
        if (res[5]=='F')
        {
            alert("Number of addons should not be exceeded than number of person!");
            url1 = 'AdlabsImagica.aspx';

        }
       
        window.location.assign(url1);
    }

          
          
       }




function report(txt, type) {
          
        if (type == "Bus") {
            var cost = $(txt).closest('tr').find('.cost').find('span:first').text();
            var location = $(txt).closest('tr').find('.location').find('select option:selected').text();
            var locationv = $(txt).closest('tr').find('.location').find('select option:selected').val();
            var place = $(txt).closest('tr').find('.place').find('span:first').text();
            var qty = $(txt).closest('tr').find('.quantity').find('select option:selected').text();
                 
            var product = type + "(" + place + "," + locationv + ")";
            var subtotal = parseFloat(cost) * parseFloat(qty);
            var productid = locationv;
            //alert(locationv);
            if (location == "select location") {
                alert("please select location");
                return false;
            }
            if (qty == 0) {
                alert("please select quantity");
                return false;
            }
            // alert(cost + "," + location + "," + place + "," + qty + "," + locationv + "," + type + "," + product + "," + subtotal);
        }


    if (type == "Car") {
       
        var cost = $(txt).closest('tr').find('.cost').text();
        var title = $(txt).closest('tr').find('.title').text();
       
        var qty = $(txt).closest('tr').find('.quantity').find('select option:selected').text();
        var productid = $(txt).closest('tr').find('.quantity').find('select option:selected').val();
        //   var productid = txt.val();
        var product = title;
        var subtotal = parseFloat(cost) * parseFloat(qty);
        var productid = productid;
        //  alert(productid);
      
        if (qty == 0) {
            alert("please select quantity");
            return false;
        }
       // alert("entry hua");
        // alert(cost + "," + location + "," + place + "," + qty + "," + locationv + "," + type + "," + product + "," + subtotal);
    }
    $.ajax({
        type: "POST",
        url: "AdlabsImagica.aspx/viewcartAddon",
        data: '{product:"' + product + '",quantity:"' + qty + '",cost:"' + cost + '",subtotal: "' + subtotal + '",productid:"' + productid + '",type:"' + type + '"}',
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: OnSuccess,
        failure: function (response) {
            alert(response.d);
                    
        }
    });

    function OnSuccess(response) {
        var res = response.d.split('#');
        $('#ContentPlaceHolder1_cartsub').empty();
        document.getElementById("ContentPlaceHolder1_init").style.display = "none";
        document.getElementById("ContentPlaceHolder1_addons").style.display = "block";
        document.getElementById("ContentPlaceHolder1_cartsub").style.display = "block";
        $('#ContentPlaceHolder1_cartsub').append("<table style='width:100%;'><tr></tr></table>");
        $('#ContentPlaceHolder1_cartsub table tr').append('<td><span style="font-size:15px;"><b>Cart Subtotal : ' + res[1] + "  " + '</b></span></td>');
        $('#ContentPlaceHolder1_cartsub table tr').append('<td><span style="font-size:15px;"><b>Visit Date : ' + res[0] + '</b></span></td>');
        $('#ContentPlaceHolder1_cartsub table tr').append('<td style="text-align:right;"><span style="cursor:pointer;font-size: 18px;color: #f00;" class="glyphicon glyphicon-shopping-cart" onclick=divslide() ><span class="glyphicon glyphicon-menu-down"></span></td>');
        showcart();

    }
}


function showAddons(cartstr) {
    //   $("#addons").show()
    // $("#init").hide()
    //   var crtdata = cart;
   
    document.getElementById("ticketselect").style.display = "none";
    document.getElementById("parkselect").style.display = "none";
    var cartdata = cartstr;
    //   alert(cartdata);
    $.ajax({
        type: "POST",
        url: "AdlabsImagica.aspx/viewcart",
        //data: JSON.stringify(cartdata),
        data: '{ cart: "' + cartdata + '"}',
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: OnSuccess,
        failure: function (response) {
            alert(response.d);
            alert("failed");
        }
    });

    function OnSuccess(response) {
      
        var res= response.d.split('#');
        
        showcart();
        
    }
            
    
             
}


function showcart() {
   // document.getElementById("ContentPlaceHolder1_cartdiv").style.display = "block";
 
    $("#orderSummary").empty();
    $.ajax({
        type: "POST",
        url: "AdlabsImagica.aspx/showcart",
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
        // alert(data.d);
        // alert(countCart());
        countCart();
        $('#ContentPlaceHolder1_cartsub').empty();
        var dataArray = jQuery.parseJSON(data.d);
    
        $("#orderSummary").append("<tr><td class='OrderSummaryHeaderTd'><span>Product</span></td> <td class='OrderSummaryHeaderTd'><span>Cost</span></td><td class='OrderSummaryHeaderTd'><span>Quantity</span></td><td class='OrderSummaryHeaderTd'><span>Subtotal</span></td><td class='OrderSummaryHeaderTd'>Remove</td></tr>");
        $.each(dataArray, function (index, element) {
            if (element.quantity>0) {
                $("#orderSummary").append("<tr  class='datarow'><td class='TableBodyCol'><span>" + element.Products + "</span></td>   <td style='text-align:right;'><span>" + element.Cost_per_Item + "</span></td>  <td class='TableBodyCol' style='text-align:center;'><span>" + element.quantity + "</span></td>  <td style='text-align:right;' class='TableBodyCol'><span>" + element.Subtotal + "</span></td> <td style='text-align:center;'><span title='Remove' style='color:red; cursor:pointer' onclick=cartDelete('" + element.ProductId + "')><span class='glyphicon glyphicon-trash'></span></span></td></tr>");
            }
            });
    
        }
        
}

function cartDelete(proId) {

    
    var retVal = confirm("Are you sure you want to delete this item ?");
  
    if (retVal == true) {
        $.ajax({
            type: "POST",
            url: "AdlabsImagica.aspx/cartDelete",

            data: '{ productId: "' + proId + '"}',
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: OnSuccess,
            failure: function (data) {
                alert(data);
                alert("failed");
            }
        });

        function OnSuccess(data) {
            var res = data.d.split('#');
            $('#ContentPlaceHolder1_cartsub').empty();
            document.getElementById("ContentPlaceHolder1_init").style.display = "none";
            document.getElementById("ContentPlaceHolder1_addons").style.display = "block";
            document.getElementById("ContentPlaceHolder1_cartsub").style.display = "block";
            $('#ContentPlaceHolder1_cartsub').append("<table style='width:100%;'><tr></tr></table>");
            $('#ContentPlaceHolder1_cartsub table tr').append('<td><span style="font-size:15px;"><b>Cart Subtotal : ' + res[1] + "  " + '</b></span></td>');
            $('#ContentPlaceHolder1_cartsub table tr').append('<td><span style="font-size:15px;"><b>Visit Date : ' + res[0] + '</b></span></td>');
            $('#ContentPlaceHolder1_cartsub table tr').append('<td style="text-align:right;"><span style="cursor:pointer;font-size: 18px;color: #f00;" class="glyphicon glyphicon-shopping-cart" onclick=divslide() ><span class="glyphicon glyphicon-menu-down"></span></td>');


            showcart();

        }
    }

}
function divslide()
{
    $("#orderSummary").slideToggle();

}

function checkcustomer(data) {

    var chkStatus1 = document.getElementById("ContentPlaceHolder1_addcheck");
   

    if (chkStatus1.checked) {
      
        document.getElementById("detailForAddons").style.display = "none";
    }
  
    else {
        document.getElementById("detailForAddons").style.display = "block";
        
    }
}

function validation() {

    var chkStatus1 = document.getElementById("ContentPlaceHolder1_addcheck");
    // var chkStatus2 = document.getElementById("chkbutton2");


   

    if (chkStatus1.checked) {

       

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
        else {
            if (isNaN(document.getElementById("ContentPlaceHolder1_txtZip").value)) {
                alert(" Zipcode is not valid");
                return false;
            }

           
            var pinReg = /(^\d{6}$)/;
            var pinaddressVal = document.getElementById("ContentPlaceHolder1_txtZip").value;
            if (pinaddressVal == '') {
                alert(" Zipcode is not valid");
                return false;

            }
            else if (!pinReg.test(pinaddressVal)) {
                alert(" Zipcode is not valid");
                return false;
            }

        }
      


        return true;

    }

    else {



        if (document.getElementById("ContentPlaceHolder1_txtFirstnameaddon").value == '') {
            alert("Fill first name");
            return false;
        }
        if (document.getElementById("ContentPlaceHolder1_txtlastnameaddon").value == '') {
            alert("Fill last name");
            return false;
        }
        if (document.getElementById("ContentPlaceHolder1_txtmobileaddon").value == '') {
            alert("Fill mobile number");
            return false;
        }
        if (document.getElementById("ContentPlaceHolder1_txtemailaddon").value == '') {
            alert("Fill Email");
            return false;
        }
        if (document.getElementById("ContentPlaceHolder1_txtdobaddon").value == '') {
            alert("Fill DOB");
            return false;
        }
        if (document.getElementById("ContentPlaceHolder1_txtadd1addon").value == '') {
            alert("Fill Address1");
            return false;
        }
        if (document.getElementById("ContentPlaceHolder1_txtadd2addon").value == '') {
            alert("Fill Address2");
            return false;
        }
        if (document.getElementById("ContentPlaceHolder1_txtstateaddon").value == '') {
            alert("Fill state");
            return false;
        }
        if (document.getElementById("ContentPlaceHolder1_txtcityaddon").value == '') {
            alert("Fill city");
            return false;
        }
        if (document.getElementById("ContentPlaceHolder1_txtcountryaddon").value == '') {
            alert("Fill country");
            return false;
        }
        if (document.getElementById("ContentPlaceHolder1_txtzipaddon").value == '') {
            alert("Fill Zipcode");
            return false;
        }
        var pinReg = /(^\d{6}$)/;
        var pinaddressVal = document.getElementById("ContentPlaceHolder1_txtzipaddon").value;
        if (pinaddressVal == '') {
            alert(" Zipcode is not valid");
            return false;

        }
        else if (!pinReg.test(pinaddressVal)) {
            alert(" Zipcode is not valid");
            return false;
        }

        return true;
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
    //function disableCouponSection() {
    // $("#ContentPlaceHolder1_BtnCoupon").css('color', '#868383');
    // $("#ContentPlaceHolder1_BtnCoupon").css('background-color', 'rgb(185, 185, 185)');
    // $("#ContentPlaceHolder1_txtcoupon").attr('disabled', 'disabled');
    // $("#ContentPlaceHolder1_txtcoupon").attr('read-only', 'true');
    // }

    $("#ContentPlaceHolder1_BtnCoupon").click(function () {
       return showloader()
    });

    $("#ContentPlaceHolder1_txtzipaddon").keydown(function (e) {
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

    function forAddonDetails() {

        $.ajax({
            type: "POST",
            url: "OrderImagica.aspx/cartcheck",
            
            data: '{ }',
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: OnSuccess,
            failure: function (data) {
                alert(data);
                alert("failed");
            }
        });

        function OnSuccess(data) {
            var res = data.d.split('#');
           // alert(data.d)
            if (res[1] == "Car")
                $('#ContentPlaceHolder1_txtpickupdate').val(res[0]);
            else {
                $('#divpickup').hide();

                $('#detailForAddons').hide();
                $('#fieldPickup').hide();
                
            }


        }
    }
  

    function isFutureDate() {
        var idate = document.getElementById("ContentPlaceHolder1_txtDate").value;
        //  $('.loader').hide();
       
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
    function show() {

        var idate = document.getElementById("ContentPlaceHolder1_txtDate").value;


        if (idate == '') {

            alert("please fill visit date");
            return false;
        }
        else {
            var myDiv = document.getElementById("loader");
            var myinit = document.getElementById("init");
            myDiv.style.display = "block";
            myinit.style.display = "none";
            return true;
        }
     
       
    }

    function showloader() {
        var couponcd = document.getElementById("ContentPlaceHolder1_txtcoupon").value;
        if (couponcd == '') {
            alert("please enter coupon code");
            return false;
        }
        else {
            var myDiv = document.getElementById("loader");
            myDiv.style.display = "block";
            return true;
        }
       
        //  setTimeout(hide, 3500); // 5 seconds

    }
    function hideLoader() {
        var myDiv = document.getElementById("loader");
        var couponcd = document.getElementById("ContentPlaceHolder1_lblexp");
        couponcd.style.display = "none";
        myDiv.style.display = "none";
      //  myinit.style.display = "block";
    }
    function hide()
    {
        var myDiv = document.getElementById("loader");
       
      
        myDiv.style.display = "none";
        myinit.style.display = "block";
      
       
    }

    function couponOnFocus()
    {
       
       
        var couponcd = document.getElementById("ContentPlaceHolder1_lblexp");
        couponcd.style.display = "none";

    }

   