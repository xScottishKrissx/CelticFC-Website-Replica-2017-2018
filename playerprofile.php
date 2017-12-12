<?php	include ('header.php'); ?>

<div >
>

<?php 
	echo "<pre>";
	foreach($db->query("select * from stats") as $k)
	{
		print_r($k);
	}
?>
</div>



<?php include ('column2.php') ?>
<?php	include ('footer.php'); ?>	