<?php	include ('header.php'); ?>

<?php 
try{
			$result = $db->prepare("select * from indexitems");
			$result->execute();

			while ($row = $result->fetch(PDO::FETCH_ASSOC)){
				
			};
		

	
}  catch (Exception $e) {
			echo '<p>', $e->getMessage(), '</p>';
		}
?>


<div id="column1">
	<h1><?php echo $_GET["title"]; ?></h1>
	
	<p>
	<?php echo $row["content"]; ?>
	
	</p>

</div>



<?php include ('column2.php'); ?>
<?php include ('footer.php'); ?>