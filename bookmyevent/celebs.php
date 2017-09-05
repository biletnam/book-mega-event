<?php
include "config.php";
session_start();
$query = "select * from celeb_slider";
$all = mysqli_query($con,$query);

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

     <script type="text/javascript">
        $(document).ready(function () {
            setTimeout(function () {
                displayWindow()
            }, 2000);
        });
    </script>


   

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
         </li><li class="lnk"><a href="register.php">Register/login </a> </li>
		   <li class="lnk"><a href="logout.php"><?php if(isset($_SESSION['username']))
																{ echo $_SESSION['username']; }
															else
															{echo "Guest";}?></a> </li>
       
     </ul>
 </nav>
 <div class="searchIcon" style="text-align:center; width:30px;">
     <span>▼ </span>
 </div>
 
 <div class="wraper">   
<?php  ?>
     <div class="contet">
    
     <link href="CSS/bootstrap.css" rel="stylesheet" />
     
    
     <div class="panel panel-default" >
         <div class="panel-body" >
             <div class="row">
         
                 <div class="col-md-12"  >
                         <div class="sliderItems">
                            <?php 
								while($row = mysqli_fetch_assoc($all))
								{
									?>
                                     
                                         <img src=<?php echo $row['image'] ?> alt='ICT Green Marathon 2017' title="Book Your Ticket @ bookmyevent.com" style="width:98%;" />
								<?php }?>
                  </div>
             </div>
         </div>
     </div>
               
 </div>
 
 
</div>    
<h1> Celebrity </h1>
<!-- PAGE -->
<div class="panel-body">


<div class="row" style="width: 90%; margin: 0 20px;"></div>
<?php
 $query = "select * from celebrity_image";
$all = mysqli_query($con,$query);
?>
<?php
while($row = mysqli_fetch_assoc($all))
{
	?>
<div id="imageHolder" class="col-md-2 td_col"><img src="<?php echo $row['image']; ?>" alt="Artist Image" class="thumbnail" style="width:100%; border-radius:50%; max-width:100px;"></div>
<div class="col-md-10 td_col"><p></p>
<table style="width: 100%;">
<tbody><tr><td><h4><?php echo $row['nameofevent']; ?></h4></td></tr><tr><td>
<p><?php echo $row['description'] ?></p>
</td></tr>
</tbody></table>
</div><div class="col-md-12 td_col" style="text-align: right;"><a href="showcelebrity.php?name=<?php echo $row['nameofevent'];  ?>" class="btn btn-primary">View More</a></div>
<?php
}

?>
 
 </div>       

 <link href="../CSS/bootstrap.css" rel="stylesheet" />
 <style type="text/css">
    .childLnk {
        color: white;
        text-decoration: none;
        font-family: Verdana;
        font-size: 13px;
    }

        .childLnk:hover {
            color: black;
            text-decoration: none;
        }

    .HBlock {
        margin: 15px auto;
    }
</style>


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
 