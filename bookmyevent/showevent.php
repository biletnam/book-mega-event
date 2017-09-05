<?php
include "config.php";
session_start();

if(isset($_REQUEST['id']))
{
	$id = $_REQUEST['id'];
	
	$q = "select * from event_image where id = $id";
	$all = mysqli_query($con,$q);
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
         <li class="lnk"><a href="logout.php"><?php if(isset($_SESSION['username']))
																{ echo $_SESSION['username']; }
															else
															{echo "Guest";}?></a> </li>
     </ul>
 </nav>
 <br>
 <br>
 
 <div>
 <?php  if($row = mysqli_fetch_assoc($all))
 {
	 ?>
 <div class="EventContainer">
                        <div id="imgLarge" class="EventDescImage">
                        <img src="<?php echo $row['image'] ?>" height="300px" width="220px"></div>
                        <div id="EventDetail" class="EventDescription">

                            <br>
                        <center><p></p><p style="text-align: center;"><span style="font-size: medium;"><span style="font-family: Verdana;"><font color="#ff0000"><b><?php echo $row['nameofevent']?></b></font></span></span></p>
<p style="text-align: center;">&nbsp;</p>
<p style="text-align: justify;"><span style="font-size: small;"><span style="font-family: Verdana;"></span></span><span style="font-family: Verdana; font-size: small;">
<h1> PUT COMPLETE DETAIL HERE </h1>
</span></p>
<p style="text-align: justify;">&nbsp;<span style="font-family: Verdana; font-size: small;">
<?php echo $row['description']?>
</span></p>

<p style="text-align: justify;">&nbsp;</p>
<p style="text-align: justify;"><strong><span style="color: rgb(255, 0, 0);">
<span style="font-size: small;">
<span style="font-family: Verdana;">Rs. <?php echo $row['price'];?>/-</span></span></span></strong></p>
<h1 ><?php $_SESSION['event']= $row['nameofevent'];?></h1>
<p style="text-align: justify;">&nbsp;</p>
</div>
					<?php
		 }
		 ?>
 
 </div>
 
 
		 <form action="event-payment.php">		
		<table  align="center">
			<h3 align="center"> PUT your detail</h3>
			<tr><td><input type="text" name="price" value=" <?php echo $row['price']; ?>" readonly></td></tr>
			<tr><td><input type="text" name="noofperson" placeholder="Number of person" required></td></tr>
			<!-- <tr><td><input type="date" name="dt"  ></td></tr> -->
			<tr><td><input type="submit" name="Pay" value="Pay Now" ></td></tr>			
			</table>
		 
		 </form>
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 

