<?php	include ('header.php'); ?>

<div id="column1">
	<div class="newsIndex">
		<div class="newsSearchBox">!!Form Section!!</div>

		<?php
		
			$result = $db->prepare("select * from indexitems LIMIT 10");
			$result->execute();

			while ($row = $result->fetch(PDO::FETCH_ASSOC)){
				echo "<div class='newsItem'>";
				echo "<div class='newsIndexImage'><img src='img/newsIndexImages/" .$row['image'] . "' /></div>";
				echo "<div class='newsIndexTitle'>" . $row['title'] . "</div>";
				echo "<div class='newsIndexDate'>" . $row['date'] . "</div>";
				echo "</div>";
			};

		?>

	</div>
</div>

<?php include ('column2.php'); ?>
<?php include ('footer.php'); ?>	