<div class="mostReadColumn">
			<h2>Most Read</h2>		
<?php 

	try{
		//Limit the articles we want to 5
		$articleLimit = 5;
		//Select the news index database, order by the most page views and pull them into an array
		$getMostRead = $db->prepare("select * from newsindexitems ORDER BY pageviews DESC LIMIT :articlelimit");
		$getMostRead->bindParam(':articlelimit', $articleLimit , PDO::PARAM_INT);
		$getMostRead->execute();	

		$getMostRead->setFetchMode(PDO::FETCH_ASSOC);
		$iterator = new IteratorIterator($getMostRead);
		
		//Formatting the results
		foreach($iterator as $row){
			$title = $row["title"];
			$image = $row["image"];			
			
			echo "<img src='img/news/".$image."' /> ";
			echo "<p>" .$title. "</p>";
		}		
	}
	catch(Exception $e) {
		echo '<p>', $e->getMessage(), '</p>';
				echo '<p>', $e->getMessage(), '</p>';
			}
?>
			
			
			<!--<img src="img/news/mostRead/1.jpg" />
			<p>Celtic's record-breaking unbeaten run comes to an end at Hearts</p>
			
			<img src="img/news/mostRead/2.jpg" />
			<p>Europa League tickets on sale now to season ticket holders</p>
			
			<img src="img/news/mostRead/3.jpg" />
			<p>Armstrong's Christmas cracker fires Celts five points clear</p>
			
			<img src="img/news/mostRead/4.jpg" />
			<p>One Night In Donegal With Brendan Rodgers</p>
			
			<img src="img/news/mostRead/5.jpg" />
			<p>James McClean: Celtic, Celtic, that's the team for me</p>
-->
</div>