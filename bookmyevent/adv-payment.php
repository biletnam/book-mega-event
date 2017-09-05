<?php
include "config.php";
session_start();

if(isset($_REQUEST['Pay']))
{
	if(isset($_SESSION['username']))
	{
		$event  = $_SESSION['event'];
		 $user  =$_SESSION['username'];
	 $price = $_REQUEST['price'];
	 $person = $_REQUEST['noofperson'];
	//$da = $_REQUEST['dt'];
	$total = $price  *  $person;
	
	
	$q = "insert into adv_booking_table(nameofevent,numberofperson,total,customer) values ('$event','$person','$total','$user')";
	mysqli_query($con , $q);
	?>
	<html>
 <head id="Head1">

<meta http-equiv="Content-Type" content="text/html; charset=utf-8" /><link rel="icon" href="images/Title_Icon.png" type="image/gif" sizes="16x16" /><meta name="viewport" content="width=device-width" /><title>
	Book My Event.com
 </title>     
     <link href="CSS/Master.css" rel="stylesheet" /><link href="CSS/font-awesome.min.css" rel="stylesheet" /><link href="CSS/default.css" rel="stylesheet" /><link href="CSS/ModelPopup.css" rel="stylesheet" /><link href="CSS/PageStyles.css" rel="stylesheet" />
     <link href="CSS/Site.css" rel="stylesheet" /><link rel="manifest" href="manifest.json" />
</head>

  <body style="background: url(upload/bannerimage/bkground.jpg) 50% 0% no-repeat fixed;">
 <style type="text/css">
    .NewTag {
        position: relative;
    }

        .NewTag:after {
            content: 'New';
            color: red;
            font-weight: bold;
            font-family: verdana;
            font-size: 10px;
            position: absolute;
            top: 1px;
            right: 8px;
            -webkit-animation-name: newFlag;
            -webkit-animation-duration: 1s;
            -webkit-animation-timing-function: linear;
            -webkit-animation-iteration-count: infinite;
            -moz-animation-name: newFlag;
            -moz-animation-duration: 1s;
            -moz-animation-timing-function: linear;
            -moz-animation-iteration-count: infinite;
            animation-name: newFlag;
            animation-duration: 1s;
            animation-timing-function: linear;
            animation-iteration-count: infinite;
        }

    @-moz-keyframes newFlag {
        0% {
            color: red;
        }

        50% {
            color: yellow;
        }

        100% {
            color: red;
        }
    }

    @-webkit-keyframes newFlag {
        0% {
            color: red;
        }

        50% {
            color: yellow;
        }

        100% {
            color: red;
        }
    }

    @keyframes newFlag {
        0% {
            color: red;
        }

        50% {
            color: yellow;
        }

        100% {
            color: red;
        }
    }
</style>
 <div id="OptionMenu">
     <a href="#" id="MobileMenu" style="text-decoration:none; color:white;">
    <span class="mobileMenuLabel">&nbsp ≡ &nbsp Menu </span></a>

 </div>
 <nav>
     <ul>
         <li class="lnk selected"><a href="index.php">Home </a></li>       
         <li class="lnk"><a href="Events.php">Events </a></li>
         <li class="lnk"><a href="adventures.php">Adventures </a></li>
         <li class="lnk NewTag"><a href="celebs.php" style="padding: 0px 5px;">Celebrities </a></li>
        <li class="lnk NewTag"><a href="venuelist.php" style="padding: 0px 5px;">Party Venues </a></li>
         <li class="lnk"><a href="offer.php">Offers </a></li>
		 <li class="lnk"><a href="register.php">Register/login </a> </li>
		 <li class="lnk"><a href="logout.php"><?php if(isset($_SESSION['username']))
																{ echo $_SESSION['username']; }
															else
															{echo "Guest";}?></a> </li>
       
     </ul>
 </nav>
	<table align="center" cellpadding = 10px;>
	<tr><td>Thanks <?php echo $user ;?> </td></tr>
	<tr><td>For Booking : <?php echo $event ;?> for 1 week for <?php echo $person; ?> Person</td></tr>
	<tr><td>On <?php //echo $da ;?> </td></tr>
	<tr><td> we received: <?php echo $total ;?> Rs /-</td>
	</tr>
	
	</table>
	<?php
	
	
	//echo '<script>alert ("we got it");location.href="index.php";</script>';
	
}

else
{
	echo '<script> alert("U have to login first");
			location.href="register.php";
			</script>';
		
}
}
?>