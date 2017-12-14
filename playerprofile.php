<?php	include ('header.php'); ?>

<div >
>

<?php 
    $player = $_GET["name"];

	/*OMFG this works.... Thank god I cant believe it */
	$result = $db->prepare("select * from stats where name LIKE :player");
	$result->bindParam(':player', $_GET['name']);	
	$result->execute();
	
	while ($row = $result->fetch(PDO::FETCH_ASSOC)){
		
		$name = $row['name'];
		$position = $row['position'];
	}
	
	
	?>

<div>
	
	<?php echo $name; echo $position; ?>
</div>
</div>



<?php include ('column2.php') ?>
<?php	include ('footer.php'); ?>	