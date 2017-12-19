<?php	include ('header.php'); ?>

<div id="column1">
	<div class="newsIndex">
		<div class="newsSearchBox">!!Form Section!!</div>

		<?php

		try{
			$row=array(); 		
			$stmt = null;
		
		$row = null;
		$iterator = null;
		// Find out how many items are in the table
		$total = $db->query('SELECT  COUNT(*) FROM indexitems') -> fetchColumn();
		
		// How many items to list per page
		$limit = 10;
		
		// How many pages will there be
		$pages = ceil($total / $limit);
		
		// What page are we currently on?
		$page = min($pages, filter_input(INPUT_GET, 'page', FILTER_VALIDATE_INT, array(
			'options' => array(
				'default' => 1,
				'min-range' => 1,
			),
		)));
		
		// Calculate the offset for the query
		$offset = ($page - 1) * $limit;
		
		// Some information to display to the user
		$start = $offset + 1;
		$end = min(($offset + $limit), $total);		
		
		// Prepare the paged query
		$stmt = $db->prepare('SELECT * FROM indexitems ORDER BY id DESC LIMIT :limit OFFSET :offset');
		 // Bind the query params
		$stmt->bindParam(':limit', $limit, PDO::PARAM_INT);
		$stmt->bindParam(':offset', $offset, PDO::PARAM_INT);
		$stmt->execute();
		
		 // Do we have any results?
		if($stmt->rowCount() > 0){
			// Define how we want to fetch the results
			$stmt->setFetchMode(PDO::FETCH_ASSOC);
			$iterator = new IteratorIterator($stmt);
			
			foreach($iterator as $row){
				echo "<a class='newsIndexItemLink' href='standardnewsPage.php?title=" . $row['title'] . " '> ";
				echo "<div class='newsItem'>";
				echo "<div class='newsIndexImage'><img src='img/newsIndexImages/" .$row['image'] . "' /></div>";
				echo "<div class='newsIndexTitle'>" . $row['title'] . "</div>";
				echo "<div class='newsIndexDate'>" . $row['date'] . "</div>";
				echo "</div>";
				echo "</a>";
			}
		}else{
			echo '<p>No Results could be displayed.</p>';
		}


		
		
		// The "back" link
		$prevlink = ($page > 1) ? '<a href="?page=' . ($page - 1) . '" title="Previous page">Prev</a>' : '<span class="pagingLinkDisabled">Prev</span>';
		
		// The "forward" link
		$nextlink = ($page < $pages) ? '<a href="?page=' . ($page + 1) . '" title="Next page">Next</a>' : '<span class="pagingLinkDisabled">Next</span>';
		
		// Display the paging information
		echo '<div id="paging"><p>', $prevlink, ' Page ', $page, ' of ', $pages, ' ' , $nextlink, ' </p></div>';
		
				
		} catch (Exception $e) {
			echo '<p>', $e->getMessage(), '</p>';
		}
		?>

	</div>
</div>

<?php include ('column2.php'); ?>
<?php include ('footer.php'); ?>	