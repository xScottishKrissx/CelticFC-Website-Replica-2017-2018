<?php	include ('header.php'); ?>

<div id="column1">
	<div class="newsIndex">
		<div class="newsSearchBox">
		
		<form action="form.php" method="post" autocomplete="off" > 
			<input type="text" name="search" placeholder="Search News..."/><br /> 
			<input type="submit" value="Submit" /> 
		</form>
		
		</div>

		<?php
			try{
			
				if(!empty($_POST['search'])){
					$searchq = $_POST['search'];
					
					$startDate = $_POST['start'];
					//$endDate = $_POST['end'];
					//$startDate = "01-01-18";
					//$endDate = "12-01-18";
					//$searchq = preg_replace("#[^0-9a-z]#i","",$searchq);				
					
					//$query = $db->prepare('SELECT * FROM newsindexitems WHERE title LIKE :userquery);
					
					//This Works
					//$query = $db->prepare('SELECT * FROM newsindexitems WHERE date = "2018-01-01"'); 
					
					//$string = "2018-01-01";
					

					
					$string = $startDate;
					$timestamp = strtotime($string);
					$properString = date ("Y-m-d", $timestamp);
					
					$higherString = "2018-01-09";
					$higherTimestamp = strtotime($higherString);
					$higherProperString = date ("Y-m-d", $higherTimestamp);
					
					
					//$query = $db->prepare('SELECT * FROM newsindexitems WHERE date = :string');
					$query = $db->prepare('SELECT * FROM newsindexitems WHERE date BETWEEN :lowerString AND :higherString');
					
					
					//$searchquery = '%' . $searchq  . '%';
					//$startDatequery = strtotime($startDate);
					//$endDatequery = strtotime($endDate);
					
					
					
					//$query->bindParam(':userquery', $searchquery);
					$query->bindParam(':lowerString', $properString);
					$query->bindParam(':higherString', $higherProperString);
					//$query->bindParam(':startDate', $startDatequery);
					//$query->bindParam(':endDate', $endDatequery);
					
					$query->execute();
					
					if($query->rowCount() > 0){
						// Define how we want to fetch the results
						$query->setFetchMode(PDO::FETCH_ASSOC);
						$iterator = new IteratorIterator($query);
						echo '<p>Found something</p>';
						

						
						foreach($iterator as $row){
							$originalDate = $row['date'];
							$newDate = date("d M, Y", strtotime($originalDate));
							
							echo "<a class='newsIndexItemLink' href='standardnewsPage.php?title=" . $row['title'] . " '> ";
							echo "<div class='newsItem'>";
							echo "<div class='newsIndexImage'><img src='img/news/" .$row['image'] . "' /></div>";
							echo "<div class='newsIndexTitle'>" . $row['title'] . "</div>";
							echo "<div class='newsIndexDate'>" . $newDate . "</div>";
							echo "</div>";
							echo "</a>";
						}
					}else{
						echo '<p>No Results could be displayed.</p>';
					}								
				}else{					
					echo "Please enter something into the search box.";
					
				}
			 
			} catch (Exception $e) {
				echo '<p>', $e->getMessage(), '</p>';
			}
			
			
		?>
		
		
		
	</div>
</div>

<?php include ('column2.php'); ?>
<?php include ('footer.php'); ?>	