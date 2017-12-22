<?php	include ('header.php'); ?>


<?php 
try{
    $player = $_GET["id"];
	
	$result = $db->prepare("select * from playerstats where id LIKE :player");
	$player = "%" . $player . "%";
	$result->bindParam(':player', $player);	
	$result->execute();


	
	while ($row = $result->fetch(PDO::FETCH_ASSOC)){
		$pagetitle = $row['name'];
		
		$squad_num = $row['squad_num'];
		$name = $row['name'];
		$position = $row['position'];
		
		$born = $row['born'];
		$signed  = $row['signed'];
		$starts  = $row['starts'];
		$sub_appearances  = $row['sub_appearances'];
		$total_appearances  = $row['total_appearances'];
		$nationality  = $row['nationality'];
		$caps  = $row['caps'];
		$imagepath  = $row['imagepath'];
	}

	
}Catch(Exception $e) {
	die("Oops something went wrong");
};
	
?>

<div class="playerProfilePageContent">
	<img src="img/playerProfileImages/<?php echo $imagepath;  ?>" />
	
	<div class="playerPositionInfo">
		
		<div class="squadNumContainer">
			<p id="squadNum"><?php echo $squad_num; ?></p>
		</div>
		
		<div class="nameandposition">
			<p id="name"><?php echo $name;?></p>
			<p id="position"><?php echo $position;?></p>
		</div>
	</div>
	
	<div class="playerStats">
		<div class="leftTableColumn">
			<p>Born</p>
			<p>Signed</p>
			<p>Starts</p>
			<p>Sub Appearances</p>
			<p>Total Appearances</p>
			<p>Nationality</p>
			<p>Caps</p>
		</div>
		<div class="rightTableColumn">
			<p><?php echo $born; ?> </p>
			<p><?php echo $signed; ?> </p>
			<p><?php echo $starts; ?> </p>
			<p><?php echo $sub_appearances; ?> </p>
			<p><?php echo $total_appearances; ?> </p>
			<p><?php echo $nationality; ?> </p>
			<p><?php echo $caps; ?> </p>
		</div>
	</div>
</div>




<?php include ('column2.php') ?>
<?php	include ('footer.php'); ?>	