<?php	include ('header.php'); ?>
<div id="column1">

	<div class="ticketsHeader">
		<img src="img/tickets/ticketsHeader.jpg" />
		<h1>Ticket office opens between christmas and new year</h1>
	</div>


	<!-- Buy tickets for... --> 
	<div class="ticketsContent">
	
		<?php 
			try{
						
						//How many rows are in the table?
						$total = $db->query('SELECT  COUNT(*) FROM tickets') -> fetchColumn();						
						
						$result = $db->prepare("select * from tickets");			
						$result->execute();

						/*while ($row = $result->fetch(PDO::FETCH_ASSOC)){
							$title = $row["title"];
							$matchInformation = $row["match_information"];
							$mainContent = $row["main_content"];
							$buyTicketsLink = $row["buy_tickets_link"];
							
						};*/
						
						if($result->rowCount() > 0){
							$result->setFetchMode(PDO::FETCH_ASSOC);
							$iterator = new IteratorIterator($result);
							
							foreach ($iterator as $row){
								echo "<h1>" . $row["title"] . "</h1>";
								echo "<div class='matchInformation'>" . $row["match_information"] . "</div>";
								echo "<div class='ticketsTeamLogos'><img src='img/tickets/logos/celtic.png' />";
								echo "<img src=img/tickets/logos/" . $row["opposing_team"] . ".png /></div>";
								echo "<br/>" . $row["buy_tickets_link"] . "<br/><br/>";
								echo $row["main_content"];				
							}
							
						}else{
							echo "<p>No Tickets found</p>";
						}
						
						
			}catch(Exception $e) {
				echo '<p>', $e->getMessage(), '</p>';
						echo '<p>', $e->getMessage(), '</p>';
					}
		?>	
	</div>
</div>

<?php include ('column2.php'); ?>
<?php include ('footer.php'); ?>