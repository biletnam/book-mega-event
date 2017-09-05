<?php
include "config.php";
session_start();
$st = 0;
 if(isset($_REQUEST['reg']))
 {
	 $name = $_REQUEST['username'];
	 $email = $_REQUEST['email'];
	 $pwd = $_REQUEST['pwd'];
	 
	 $q = "insert into login_table (name , email , pass) values ('$name','$email','$pwd')";
	$ch =  mysqli_query($con , $q);
	if($ch)
	{
		$st = 1;
	}
	if($t = 1)
	{
		echo '<script>alert("U Are Registered");</script>';
		echo '<script>location.href="index.php";</script>';
	}
	else
	{
		echo '<script>alert("Registration failed");</script>';
	}
 }

 
if(isset($_REQUEST['login']))
 {
	 $name = $_REQUEST['username'];
	 $email = $_REQUEST['email'];
	 $pwd = $_REQUEST['pwd'];
	 
	 $q = "select * from login_table where email = '$email'";
	$ch =  mysqli_query($con , $q);
	if($row = mysqli_fetch_assoc($ch))
		{
			if( $pwd == $row['pass'] )
			{
				echo $_SESSION['username'] = $row['name'];
				
				echo '<script>alert("Login Successful");</script>';
				echo '<script>location.href="index.php"</script>';
					//header('location:dealer.php');
				
				
			}
			else
			{
				echo '<script>alert("Password does not match");</script>';
				echo '<script>location.href="index.php"</script>';
			}
		}
		else
		{
			echo '<script>alert("user does not exist");</script>';
			echo '<script>location.href="index.php"</script>';
		}
 }







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
        
         <li class="lnk"><a href="offer.php">Offers </a> </li>
         <li class="lnk"><a href="register.php">Register/login </a> </li>
		  <li class="lnk"><a href="logout.php"><?php if(isset($_SESSION['username']))
																{ echo $_SESSION['username']; }
															else
															{echo "Guest";}?></a> </li>
        
       
     </ul>
 </nav>
 <br>
 <br>
<form >
	<table  align="center" style="border:1px solid black;height:200px;width:300px" >
		
		
		<tr>
		<td colspan="2"><input type="text" name="username" placeholder="Your name" required  style="width:100%;"></td>
		</tr>
		<tr>
		<td  colspan="2"><input type="email" name="email" placeholder="Your email" required  style="width:100%;"></td>
		</tr>
		<tr>
		<td  colspan="2"><input type="password" name="pwd" placeholder="Your password" required  style="width:100%;"> </td>
		</tr>
		<tr>
		<td  ><input type="submit" name="reg" value="Register"></td>   <td align="right"><input type="submit" name="login" value="login"></td>
		</tr>




	</table>


</form>