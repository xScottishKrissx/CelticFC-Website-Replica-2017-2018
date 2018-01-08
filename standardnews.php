<?php	include ('header.php'); ?>

<div id="column1">
	<div class="newsIndex">
		<div class="newsSearchBox">
		
		<!-- code for the news search box -->
		<?php include ("newsSearchForm.php"); ?>
		
		</div>
		<!-- File that controls getting news index from database -->
		<?php include ("getNews.php"); ?>
		
	</div>
</div>

<?php include ('column2.php'); ?>
<?php include ('footer.php'); ?>	