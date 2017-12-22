<?php	include ('header.php'); ?>

<?php 
	try{
				$clickedLink = $_GET["title"];
				$result = $db->prepare("select * from newsindexitems WHERE title = :article");
				//$article = "%" . $article . "%";
				$result->bindParam(':article', $clickedLink);	
				$result->execute();

				while ($row = $result->fetch(PDO::FETCH_ASSOC)){
					$title = $row["title"];
					$author = $row["author"];
					$content = $row["content"];
					$image = $row["image"];
					$date = $row["date"];
					//$content = $row["content"];
					
				};
	}catch(Exception $e) {
		echo '<p>', $e->getMessage(), '</p>';
				echo '<p>', $e->getMessage(), '</p>';
			}
?>


<div id="column1">
	
	<div class="standardNewsLayout">	
		<img src='img/news/newsStoryImages/<?php echo $image; ?>' />
		<h1><?php echo $_GET["title"]; ?></h1>	
		<div class="articleAuthorInfoBar"><span>By: <?php echo $author; ?> on <?php echo $date; ?> </span></div>
		
		<div class="newsArticleContent">
			<p><?php echo $content; ?></p>
			<a href="#"><img src="img/news/celticViewBanner.jpg" /></a>
		</div>
		<?php include ('mostReadColumn.php'); ?>
	</div>
	

</div>



<?php include ('column2.php'); ?>
<?php include ('footer.php'); ?>