<?php
include "config.php";
	/*slider */
if(isset($_REQUEST['slider']))
{
$tab = $_REQUEST['category'];
$name =$_REQUEST['name'];
$location =$_REQUEST['location'];
$description =$_REQUEST['description'];
$date =$_REQUEST['date'];
$price =$_REQUEST['price'];

$filename = $_FILES['filetoupload']['name'];
$filetmp = $_FILES['filetoupload']['tmp_name'];
$filesize = $_FILES['filetoupload']['size'];
$file_basename = basename($_FILES['filetoupload']['name']);

$path = "all_image/";
$dir = "$path"."$tab/";
echo $final_dir = $dir.$file_basename;

move_uploaded_file($filetmp,$final_dir);

$query = mysqli_query($con , "insert into $tab(image,nameofevent,location,description,date,price) values ('$final_dir','$name','$location','$description','$date','$price')");
}

/**** All CUSTOMER */

$query = "select * from venue_booking_table ";
$table = mysqli_query($con,$query);
	

?>

<html>
	<body>
		<form method = "POST" enctype="multipart/form-data">
				Upload Image : <input type="file" name="filetoupload"><br><br>
				Choose Category<select name="category">
									<option value="">Select category</option>	
								  <option value="slider_image">First & Second page slider_image</option>
								  <option value="offer_image">offer_image</option>
								  <option value="adventure_image">adventure_page</option>
								  <option value="celebrity_image">celebrity</option>
								  <option value="event_image">events page</option>
								  <option value="venue_image">venue page</option>
								</select>
								<br><br>
				name : <input type="text" name="name"><br><br>
				Location : <input type="text" name="location"><br><br>
				description of event <input type="text" name="description"><br><br>
				DATE <input type="date" name="date"><br><br>
				Price<input type="text" name="price"><br><br>
				
			<!--link :<input type="text" name="link">-->
								
			<input type="submit" name="slider" value="submit">
		</form>
		<br>
		
		<!-- SLIDER PART -->
	<?php
	if(isset($_REQUEST['sldr']))
{
$tab = $_REQUEST['category'];

$filename = $_FILES['filetoupload']['name'];
$filetmp = $_FILES['filetoupload']['tmp_name'];
$filesize = $_FILES['filetoupload']['size'];
$file_basename = basename($_FILES['filetoupload']['name']);

$path = "all_image/";
$dir = "$path"."$tab/";
echo $final_dir = $dir.$file_basename;

move_uploaded_file($filetmp,$final_dir);

$query = mysqli_query($con , "insert into $tab(image) values ('$final_dir')");
}

		?>
		<h1 > for slider adventure / celebrity / party venuepage </h1>
		<form  method = "POST" enctype="multipart/form-data">
		Choose Slider Category<select name="category">
									<option value="">Select category</option>	
								  <option value="adv_slider">Adventure Page</option>
								  <option value="celeb_slider">Celebrity page</option>
								  <option value="party_slider">party venue</option>							  
								</select>
								<br><br>
			Upload Image : <input type="file" name="filetoupload"><br><br>
			<input type="submit" name="sldr" value="submit">					
								
		</form>
	
	
	
	
	
	<?php
	if(isset($_REQUEST['bgimg']))
{
$des = $_REQUEST['des'];
$name = $_REQUEST['sname'];
$tab = $_REQUEST['category'];



$filename = $_FILES['filetoupload']['name'];
$filetmp = $_FILES['filetoupload']['tmp_name'];
$filesize = $_FILES['filetoupload']['size'];
$file_basename = basename($_FILES['filetoupload']['name']);

$path = "all_image/";
$dir = "$path"."$tab/";
$final_dir = $dir.$file_basename;

move_uploaded_file($filetmp,$final_dir);
$q =  "insert into $tab(nameofevent,image,description) values ('$name','$final_dir','$des')";
$query = mysqli_query($con ,$q);
if($query )
{echo "<br>done";
}
else
{echo "<br> not done helll";}
}
?>
	
	
	<h1 > For Celebrity Description page Big images </h1>
		<form  method = "POST" enctype="multipart/form-data">
		
								<br><br>
								CELEBRITY / VENUE BIG IMAGE<select name="category">
									<option value="">Select category</option>	
								  <option value="celebrity_big_image">celebrity big image</option>
								  <option value="venue_big_image">venue big image</option>
								  						  
								</select><br><br>
			Upload Image : <input type="file" name="filetoupload"><br><br>
			Full Description : <input type="text" name="des"><br><br>
			Name Singer : <input type="text" name="sname"><br><br>
			<input type="submit" name="bgimg" value="submit">					
								
		</form>
	
	<!-- SHOWING VENUE BOOKING RECORD -->	
	<br><br>
		<h1>Venue Booking Table</h1>
		<table  style="width:100%;">
			<tr><td ><b>username</b></td>
				<td ><b>Amount</b></td>
				<td ><b>date</b></td>
				<td><b>Booked</b></td>	
				<td><b>Number of person</b></td>	
					
			</tr>
			<?php
				while($row = mysqli_fetch_assoc($table))
				{
					echo "<tr>";
						echo "<td>";echo $row['customer'];echo "</td>";						
						echo "<td>";echo $row['total'];echo "</td>";
						echo "<td style='width:250px'>";echo $row['date'];echo "</td>";
						echo "<td style='width:250px'>";echo $row['nameofevent'];echo "</td>";
						echo "<td style='width:250px'>";echo $row['numberofperson'];echo "</td>";						
					echo "</tr>";			
				}
			?>
		</table>
		
		<!-- SHOWING Singer BOOKING RECORD -->	
		<?php $query = "select * from celeb_booking_table ";
			$table = mysqli_query($con,$query); ?>
	<br><br>
		<h1>Singer Booking Table</h1>
		<table  style="width:100%;">
			<tr><td ><b>useename</b></td>
				<td ><b>Amount/budget</b></td>
				<td ><b>date</b></td>
				<td><b>Requested For</b></td>	
				
			</tr>
			<?php
				while($row = mysqli_fetch_assoc($table))
				{
					echo "<tr>";
						echo "<td>";echo $row['customer'];echo "</td>";						
						echo "<td>";echo $row['price'];echo "</td>";
						echo "<td style='width:250px'>";echo $row['date'];echo "</td>";
						echo "<td style='width:250px'>";echo $row['singer'];echo "</td>";
											
					echo "</tr>";			
				}
			?>
		</table>
		
		
		<!-- SHOWING Adventure BOOKING RECORD -->

			<?php $query = "select * from adv_booking_table ";
			$table = mysqli_query($con,$query); ?>
	<br><br>
		<h1>Adventure Booking Table</h1>
		<table  style="width:100%;">
			<tr><td ><b>username</b></td>
				<td ><b>Amount</b></td>
				
				<td><b>Booked</b></td>	
				<td><b>Number of person</b></td>	
					
			</tr>
			<?php
				while($row = mysqli_fetch_assoc($table))
				{
					echo "<tr>";
						echo "<td>";echo $row['customer'];echo "</td>";						
						echo "<td>";echo $row['total'];echo "</td>";
						
						echo "<td style='width:250px'>";echo $row['nameofevent'];echo "</td>";
						echo "<td style='width:250px'>";echo $row['numberofperson'];echo "</td>";						
					echo "</tr>";			
				}
			?>
		</table>
		
		<!-- SHOWING Adventure BOOKING RECORD -->

			<?php $query = "select * from event_booking_table ";
			$table = mysqli_query($con,$query); ?>
	<br><br>
		<h1>Event Booking Table</h1>
		<table  style="width:100%;">
			<tr><td ><b>username</b></td>
				<td ><b>Amount</b></td>
				
				<td><b>Booked</b></td>	
				<td><b>Number of person</b></td>	
					
			</tr>
			<?php
				while($row = mysqli_fetch_assoc($table))
				{
					echo "<tr>";
						echo "<td>";echo $row['customer'];echo "</td>";						
						echo "<td>";echo $row['total'];echo "</td>";
						
						echo "<td style='width:250px'>";echo $row['nameofevent'];echo "</td>";
						echo "<td style='width:250px'>";echo $row['numberofperson'];echo "</td>";						
					echo "</tr>";			
				}
			?>
		</table>
		<br><br>
	</body></html>







