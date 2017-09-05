<?php
include "config.php";
session_start();
if(isset($_REQUEST['name']))
{
	$id = $_REQUEST['name'];
	
	$q = "select * from venue_big_image where nameofevent = '$id'";
	$all = mysqli_query($con,$q);
	
$pr = "select price from venue_image where nameofevent = '$id'";
	$price = mysqli_query($con,$pr);
}


?>
<html>
 <head id="Head1">

<meta http-equiv="Content-Type" content="text/html; charset=utf-8" /><link rel="icon" href="images/Title_Icon.png" type="image/gif" sizes="16x16" /><meta name="viewport" content="width=device-width" /><title>
	Book My Event.com
 </title>
     <script src="js/jquery_1.11.1.min.js"></script>
     <link href="CSS/Master.css" rel="stylesheet" /><link href="CSS/font-awesome.min.css" rel="stylesheet" /><link href="CSS/default.css" rel="stylesheet" /><link href="CSS/ModelPopup.css" rel="stylesheet" /><link href="CSS/PageStyles.css" rel="stylesheet" />
     <script src="js/Search.js"></script>
     <script src="js/Master.js"></script>
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
 
 <nav>
     <ul>
         <li class="lnk selected">
             <a href="index.php">Home </a>

         </li>
       
         <li class="lnk">
             <a href="Events.php">Events </a>
         </li>
         <li class="lnk">
             <a href="adventures.php">Adventures </a>
         </li>

           <li class="lnk NewTag">
             <a href="celebs.php" style="padding: 0px 5px;">Celebrities </a>
         </li>
        <li class="lnk NewTag">
             <a href="venuelist.php" style="padding: 0px 5px;">Party Venues </a>
         </li>
        
         <li class="lnk">
             <a href="offer.php">Offers </a>
         </li><li class="lnk"><a href="register.php">Register/login </a> </li>
		 <li class="lnk"><a href="logout.php">
								<?php if(isset($_SESSION['username']))
																{ echo $_SESSION['username']; }
															else
															{
																echo "Guest";
																}?></a> </li>
       
     </ul>
 </nav>
 <br>
 <br>
 
 
 <div class="col-md-12 td_col" style="position:relative;">
 <center>
 <?php 
 if($row = mysqli_fetch_assoc($all))
	  {
		 ?>
	<img src="<?php echo $row['image'];?>" alt="banner" style="width:80%;">
	 <div class="container-fluid" style="position:absolute; width:80%; bottom:0px;">
	 
		 <div class="row"><div class="col-md-12 td_col">
			 
			 </div>
		 </div>
	 </div>
	 <div  >
	 <h1 style="width:60%;text-align:left;"><?php echo $row['nameofevent'];?></h1>
	 <h1 style="width:60%;text-align:left;"><?php $_SESSION['event']= $row['nameofevent'];?></h1>
	 <h3 style="width:60%;text-align:left;"><?php echo $row['description'];?></h3>
	 <h3 style="width:60%;text-align:left;">For 1 week / per person : <?php 
									if($pl = mysqli_fetch_array($price))
									{
									echo $pl['price']; }
									?></h3> 
	 </div>
	 <?php 
	 }
	 ?>
	 </center>
 </div>
 
		 <form action="venu-payment.php">		
		<table  align="center">
			<h3 align="center"> PUT your detail</h3>
			<tr><td><input type="text" name="price" value=" <?php echo $pl['price']; ?>" readonly></td></tr>
			<tr><td><input type="text" name="noofperson" placeholder="Number of person"></td></tr>
			<!-- <tr><td><input type="date" name="dt"  ></td></tr> -->
			<tr><td><input type="submit" name="Pay" value="Pay Now" ></td></tr>			
			</table>
		 
		 </form>
 <br>
 <br>
 <br>
 </body>
 
 </html>
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 