<?php 
	function addHits($db, $pageID){
		$test1 = $db->prepare("UPDATE newsindexitems SET pageviews=pageviews + 1 WHERE id='$pageID'");
		$test1->execute();
	}				
	addHits($db, $pageID);
?>