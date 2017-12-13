<?php	include ('header.php'); ?>

<div >
>

<?php 
    $player = $_GET["name"];
	/*
	echo "<pre>";
	foreach($db->query("SELECT * FROM stats where id == 6") as $k)
	{
		print_r($k);
	}
	print_r($id);
	*/
	
	/*
	$statement = $db->prepare("select * from stats where name = :name");
	$statement->execute(array(':name' => "craig gordon"));
	$row = $statement->fetch();
	print_r($row);
	*/
	
	
	/*
	$statement = $db->prepare("select * from stats where name = :name");
	$statement->bindParam(':name', $id);
	$statement->execute();
	$row = $statement->fetch();
	print_r($row);
	
	*/
	
	//print_r($id);
	
	/*
	$sql = "select name from stats where name LIKE :name";
	$statement = $db->prepare($sql);
	$playernametemp = $playername;
	$statement->bindValue(':name', $playernametemp);
	$statement->execute();
	$row = $statement->fetch(PDO::FETCH_ASSOC);
	if($row === false){
		echo $playernametemp . ' not found!';
	}else{
    print_r($playernametemp['name']);
	//echo 'Found: ' . $playernametemp['name'] . ' '. $playernametemp{'name'};
	}
	*/
	
	/*
	$sth = $db->prepare('select position from stats where name = :id');
	$playerID = "%".$player."%";
	$sth->bindParam(':id', $playerID);
	$sth->execute();
	print($playerID);
	*/
	
	//This Works
	
	$stmt = $db->prepare('select starts from stats where name LIKE :player' );
	$stmt->bindParam(':player', $_GET['name']);
	
	
	
	
	$stmt->execute();
	$row = $stmt->fetch(PDO::FETCH_ASSOC);
	print_r($row);
	
?>
</div>



<?php include ('column2.php') ?>
<?php	include ('footer.php'); ?>	