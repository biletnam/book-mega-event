 <?php
 include "config.php";
 session_start();
 $query = "select * from celebrity_page_image";
 $all = mysqli_query($con ,$query );
 
 if(!empty($_REQUEST['name']) || !empty($_REQUEST['location']))
				{	
					$nameofevent = $_REQUEST['name'];
					$_SESSION['nameofevent'] = $_REQUEST['name'];
					//echo $_SESSION['loc'] = $_REQUEST['location'];
					//echo  "<h2> Event ".$nameofevent."</h2>";
				}
else
{
	//header('location:index.php');
}

if(isset($_REQUEST['sub']))
{
$username= 	$_REQUEST['username'];
$budget= 	$_REQUEST['budget'];
$contact= 	$_REQUEST['contact'];
$date= 	$_REQUEST['date'];
$event = $_SESSION['nameofevent'];


mysqli_query($con , "insert into booking_table(username , budget , contact , date , event) values ('$username','$budget','$contact','$date','$event')");
}
 ?>
 
 <html>
 <head id="Head1">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" /><link rel="icon" href="images/Title_Icon.png" type="image/gif" sizes="16x16" /><meta name="viewport" content="width=device-width" /><title>
	Book My Event.com
 </title>
     <script src="js/jquery_1.11.1.min.js"></script>
     <link href="CSS/Master.css" rel="stylesheet" /><link href="CSS/font-awesome.min.css" rel="stylesheet" /><link href="CSS/default.css" rel="stylesheet" /><link href="CSS/ModelPopup.css" rel="stylesheet" /><link href="CSS/PageStyles.css" rel="stylesheet" />
     
     <link href="CSS/Site.css" rel="stylesheet" /><link rel="manifest" href="manifest.json" />
	 
	 <style>
	 .tbackground{border-radius:10px;background: rgba(0, 0, 0, 0.55);margin:auto;}
	 td{padding:20px;}
	</style>
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
         </li>
       
     </ul>
 </nav>
 
 
        <div class="wraper">
        <div class="content">
		<div style="width:100%;height:auto;margin:auto;border:2px solid red">
			<?php
				echo  "<h2> Event ".$_SESSION['nameofevent']."</h2>";
				//echo  "<h2> Event ".$_SESSION['location']."</h2>";
					?>
				
					<form>
				<table width="80%" style="margin:auto;" class="tbackground">
					<tr>
						<td style="width:39%;padding:20px;color:white">Enter Name :</td>
						<td  style="padding:20px;width:39%;"><input style="background:#F1F1F1;width:100%"type="text" name="username" required></td>
					</tr>
					<tr>
						<td   style="width:39%;padding:20px;color:white">Enter budget :</td>
						<td style="padding:20px;width:39%;"><input style="background:#F1F1F1;width:100%" type="text" name="budget" required></td>
					</tr>
					<tr>
						<td  style="width:39%;padding:20px;color:white">Enter Your Contact :</td>
						<td style="padding:20px;width:39%;"><input style="background:#F1F1F1;width:100%"type="text" name="contact" required></td>
					</tr>
					
					<tr>
						<td   style="width:39%;padding:20px;color:white">Choose Date :</td>
						<td style="padding:20px;width:39%;"><input style="background:#F1F1F1;width:100%" type="date" name="date" required ></td>
					</tr>
					
					<tr>
			<td colspan="2" style="width:100%;padding:20px;color:black;"><input style="background:#F1F1F1;width:100%" type="submit" name="sub" value="Send Your Request"></td>
						
					</tr>
					
				</table>
				</form>
			
		</div>
		
     <link href="CSS/bootstrap.css" rel="stylesheet" />
   </div>
  
 
<div class="footerOption">
    
         
            
             <div style="margin-left:400px;"class="col-md-3">
                
                 <br />
                 <span style="color: orange;">Follow Us: </span><br />
                 <div class="socialspan">
                     <a href="" target="_blank" title="Connect Us with Facebook" style="color: #3a5795;">
                         <span>
                             <img src="images/facebook.png" /></span>
                     </a>
                     <a href="" target="_blank" title="Follow Us with Twitter" style="color: #55acee;">
                         <span>
                             <img src="images/twitter.png" />
                         </span>
                     </a>
                     <a href="" target="_blank" title="join Us with Goole+" style="color: #d73d32!important;">
                         <span>
                             <img src="images/googleplus.png" />
                         </span>
                     </a>
                     <a href="" target="_blank" title="Subscribe our youtube channel" style="color: #E12A27;">
                         <span>
                             <img src="images/UTube.png" />
                         </span>
                     </a>
                 </div>
                
			<h3>copy right 2017 </h3>
        
         
         </div>
     </div>
 </div>


         </div>
     </form>
 </body>
 <script src="js/SearchRegion.js"></script>
 </html>
 