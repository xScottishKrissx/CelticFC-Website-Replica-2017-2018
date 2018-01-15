$(document).ready(function() {
  //$(".flight_no, .price").css("height", $(".legs").height());
  
  //Using height of column 1 to set height of column 2
  //$("#column2").css("height", $("#column1").height());
  
	
  //$("#matchdayCrests").css("height", $("#matchdayText").height());
  
  $(".column1, .box1").hover(function(){
	  $(".box1").css("display","block")
	  $(".column1").css("border-bottom","7px solid #ffcc00")
	  }, function(){
	       $(".box1").css("display","none")
		   $(".column1").css("border-bottom","0px solid #ffcc00")
  });
  
  $(".column2, .box2").hover(function(){
	  $(".box2").css("display","block")
	  $(".column2").css("border-bottom","7px solid #ffcc00")
	  }, function(){
	       $(".box2").css("display","none")
		   $(".column2").css("border-bottom","0px solid #ffcc00")
  });
  
  $(".column3, .box3").hover(function(){
	  $(".box3").css("display","block")
	  $(".column3").css("border-bottom","7px solid #ffcc00")
	  }, function(){
	       $(".box3").css("display","none")
		   $(".column3").css("border-bottom","0px solid #ffcc00")
  });
  
  $(".column4, .box4").hover(function(){
	  $(".box4").css("display","block")
	  $(".column4").css("border-bottom","7px solid #ffcc00")
	  }, function(){
	       $(".box4").css("display","none")
		   $(".column4").css("border-bottom","0px solid #ffcc00")
  });
  
  $(".column5, .box5").hover(function(){
	  $(".box5").css("display","block")
	  $(".column5").css("border-bottom","7px solid #ffcc00")
	  }, function(){
	       $(".box5").css("display","none")
		   $(".column5").css("border-bottom","0px solid #ffcc00")
  });
  
  $(".column6, .box6").hover(function(){
	  $(".box6").css("display","block")
	  $(".column6").css("border-bottom","7px solid #ffcc00")
	  }, function(){
	       $(".box6").css("display","none")
		   $(".column6").css("border-bottom","0px solid #ffcc00")
  });
  
  $(".column7, .box7").hover(function(){
	  $(".box7").css("display","block")
	  $(".column7").css("border-bottom","7px solid #ffcc00")
	  }, function(){
	       $(".box7").css("display","none")
		   $(".column7").css("border-bottom","0px solid #ffcc00")
  });
  
/* Paging */
if($ (".pagingLinkDisabled") .length){
	$(".pagingLinkDisabled").css("color","#bbb");
}
  
  
console.log("Hello");


//News Search	
var startDate;
var endDate;
$('#datepicker').datepicker({autoclose: true,format:'dd-mm-yyyy',todayHighlight: true,}).on('changeDate', function(){
			//var test1 = $('#datepicker').datepicker('getStartDate');
			//$('#startDateOutput').html(test1);
			$('#startDateOutput').html(
				$('#dateFrom').datepicker('getFormattedDate')
			);
			$('#endDateOutput').html(
				$('#dateTo').datepicker('getFormattedDate')
			);
			startDate = $('#startDateOutput').html();
			endDate = $('#endDateOutput').html();
			console.log(startDate);
			console.log(endDate);

    });

//Mobile Nav
/*
$( ".showNav").click(function() {
  $(".mobileNavWrapper").toggle( "slow" );
});
*/

/*
  $(".showNav").click(function(){
	  //$(".mobileNavWrapper").css("margin-left","auto");
	  //$(".mobileNavWrapper").animate({ marginLeft:"0rem"}, 300);
	  $(".mobileHeader").animate({ marginLeft:"17rem"}, 300);	
	  
*/	
		
var handlers = [
    // on first click:
    function() {
        $('#wrapper').animate({marginLeft:"17rem"});
        //div2').animate({width: '50%'});
    },
    // on second click:
    function() {
        $('#wrapper').animate({marginLeft:"0rem"});
        //$('.div2').animate({width: '100%'});
    }
    // ...as many more as you want here
];

var counter = 0;
$(".showNav").click(function() {
    // call the appropriate function preserving this and any arguments
    handlers[counter++].apply(this, Array.prototype.slice.apply(arguments));
    // "wrap around" when all handlers have been called
    counter %= handlers.length;
	console.log(counter);
});		





/*
var teams = "";
var arrayLength, i, lastClicked, text;
teams = ["Players","Fixtures","League Table"];

$(".mobileNavContent").click(function(e){
		if(!$(e.target).is('input')){
        lastClicked = e.target.className;
		console.log("Active Class is " + lastClicked);		
		
    }	
	
		arrayLength = lastClicked.length;
		text = "<ul>";
		for (i = 0; i < arrayLength; i++) {
			text += "<li>" + teams[i] + "</li>";
		}	
		
		$( ".navDepth2" ).html(text);
});
var art = "Hello";
var stk =  ["Players","Fixtures","League Table"];
var elements ={ [art]: stk };
console.log(elements[art]);
*/
	
	var backToMainBtn = "<a href='#'><li class='backMainMenu'>Back to Main Menu</li></a>";
	var backNavBtn = "<a href='#'><li class='backNav'>Previous</li></a>";
	
	var ticketsArray = ["Home tickets","away tickets","ticket office","new access control","away ticket reg scheme","print @ home","matchday","2017/18 Season Tickets"];
	
	var matchdayArray = ["Next Match Details","Getting to Celtic Park","Stadium Plan","First Time Fans","Supporters w/ disabilities","Ground Regulations","Unacceptable Conduct","Big Screen Messages",];
	
	//Hospitality Section
	var hospitalityArray = ["Hospitality","Kerrydale Bar","Meetings and Events","Number 7 Restaurant","Upcoming Events","Offsite Catering","Terms and Conditions","Contact Us",];	
	var meetingsArray = ["Meetings and Events","Venue Hire","Dining in the Number 7","Upcoming Events","Weddings","Stadium Hire","Testimonials","Christmas"]

	//Club Section
	var clubArray = ["Contact Information","History","Jobs","Stadium Tours","Soccer Academy","Social Policies","Corporate","Other"];
	var soccerAcademyArray = ["Holiday Skills School","Weekly Skills School","Play on the Park","Team Training","Make a Booking","International","Coaches Convention"];
	var socialPoliciesArray = ["Social Mission Statement","Unnaceptable Conduct","Ground Regulations","Social Charter","Fans with Disabilities","Safeguarding"];
	var corportateArray = ["Board of Directors","Investor News","Boiler Room Scam Advice","Stock Exchange Notification","Share Price","Share Capital","Modern Slavery Statement","Ethical Trading Policy"];
	var clubOtherArray = ["Location","Club Fans"];
	
	//Shop Section
	var shopArray = ["Online Shop","Bricks and Paving Stones","Shop Locations","Celtic FC Prints","Publications","Celtic TV"];	
	
	var moreArray = ["Fans","Celtic FC Foundation","Celtic FC Travel","Celtic Pools","Sponsors","Publications"];
	var moreFansArray = ["Supporters with Disabilities","Young Hoops Club","Mobile","Supporters",];
	var youngHoopsClubArray = ["Home","Events","Mascot","Gallery","Competition","Q&A","What Our Members Think"];
	var mobileArray = ["Celtic View App"];
	var supportersArray = ["Supporters Liaison Officer","Supporters Charter","Fans Forum","Complaints","Supporters Club"];
	
	
	
	
	var matchdayOutput = ""; var hospitalityOutput = ""; var clubOutput = ""; 
	var clubSocialPoliciesOutput = ""; var clubCorporateOutput = ""; var clubOtherOutput = "";
	
var lastClicked;
function forwardNav(){
	$(".mobileNavContent").click(function(e){
		lastClicked = e.target.className;
		console.log("Active Class is " + lastClicked);		
		
		if(lastClicked == 'players'){
			
			$( ".navDepth3" ).html( "<a href='#'><li class='backNav'>Back to Teams</li></a><a href='#'><li>First Team</li></a><a href='#'><li>Under 20's</li></a><a href='#'><li>Academy</li></a><a href='#'><li>Women's First Team</li></a><a href='#'><li>Women and Girls</li></a>" );
			$( ".navDepth3" ).css("background-color","green");
			
		}else if(lastClicked == 'fixtures'){
			
			$( ".navDepth3" ).html( "<a href='#'><li class='backNav'>Back to Teams</li></a><a href='#'><li>First Team</li></a><a href='#'><li>Development Squad</li></a><a href='#'><li>Women's Team</li></a>" );	
		}
		else if(lastClicked == 'league-table'){
			$( ".navDepth3" ).html( "<a href='#'><li class='backNav'>Back to Teams</li></a><a href='#'><li>SPFL Premiership</li></a><a href='#'><li>Development Squad</li></a><a href='#'><li>Women's Team</li></a>" );	
			
		
		}else if(lastClicked == 'matchdayTickets'){			
		matchdayOutput = "";
		for(var i = 0; i < matchdayArray.length; i++){
			matchdayOutput += "<a href='#'><li>" + matchdayArray[i] + "</li></a>";
		}
			$( ".navDepth3" ).html(backNavBtn + matchdayOutput);		
			forwardNav();		
			backNav();
			
		}else if(lastClicked == 'meetingsAndEvents'){			
		meetingsOutput = "";
		for(var i = 0; i < meetingsArray.length; i++){
			meetingsOutput += "<a href='#'><li>" + meetingsArray[i] + "</li></a>";
		}
			$( ".navDepth3" ).html(backNavBtn + meetingsOutput);		
			forwardNav();		
			backNav();		
			
		}else if(lastClicked == 'clubSoccerAcademy'){			
		soccerAcademyOutput = "";
		for(var i = 0; i < soccerAcademyArray.length; i++){
			soccerAcademyOutput += "<a href='#'><li>" + soccerAcademyArray[i] + "</li></a>";
		}
			$( ".navDepth3" ).html(backNavBtn + soccerAcademyOutput);		
			forwardNav();		
			backNav();		
			
		}else if(lastClicked == 'clubSocialPolicies'){			
		clubSocialPoliciesOutput = "";
		for(var i = 0; i < socialPoliciesArray.length; i++){
			clubSocialPoliciesOutput += "<a href='#'><li>" + socialPoliciesArray[i] + "</li></a>";
		}
			$( ".navDepth3" ).html(backNavBtn + clubSocialPoliciesOutput);		
			forwardNav();		
			backNav();		
			
		}else if(lastClicked == 'clubCorporate'){			
		clubCorporateOutput = "";
		for(var i = 0; i < corportateArray.length; i++){
			clubCorporateOutput += "<a href='#'><li>" + corportateArray[i] + "</li></a>";
		}
			$( ".navDepth3" ).html(backNavBtn + clubCorporateOutput);		
			forwardNav();		
			backNav();		
			
		}else if(lastClicked == 'clubOther'){			
		clubOtherOutput = "";
		for(var i = 0; i < clubOtherArray.length; i++){
			clubOtherOutput += "<a href='#'><li>" + clubOtherArray[i] + "</li></a>";
		}
			$( ".navDepth3" ).html(backNavBtn + clubOtherOutput);		
			forwardNav();		
			backNav();		
			
		}


		
		else{
			//$(".navDepth1, .navDepth2, .navDepth3").empty();
		}
		
		//I have some class names I want to dynamically put into a var or something.
		// ie var whatever button you just pressed, hide that section
		
		backNav();
		lastClicked = "";
	});
};
//Go Back in the Menu
function backNav(){
	if(lastClicked == 'backNav'){
		//$(".navDepth3").empty();
		$("."+lastClicked).parent().closest('ul').empty();
	}else if(lastClicked == 'backMainMenu'){
		$(".navDepth2,.navDepth3,.navDepth4").empty();		
	}else{
		//Do Nothing
	}
};
//Level 1

	//The Dumb Way
	$(".teams").click(function(e){
		
		$( ".navDepth2" ).html( 
			"<a href='#' ><li class='backMainMenu'>Back to Main Menu</li></a><a href='#' ><li class='players'>Players</li></a><a href='#'><li class='fixtures'>Fixtures</li></a><a href='#' ><li class='league-table'>League Table</li></a>"
			);
		forwardNav();
		backNav();
	});	

	$(".news").click(function(){
		//This can definitley be cut down
		$( ".navDepth2" ).html("<a href='#'><li class='backMainMenu'>Back to Main Menu</li></a><a href='#'><li>Show All</li></a><a href='#'><li>First Team</li></a><a href='#'><li>Under 20's</li></a><a href='#'><li>Match Reports</li></a><a href='#'><li>Show All</li></a><a href='#'><li>Women's Team</li></a><a href='#'><li>Ticket's</li></a><a href='#'><li>Commercial</li></a><a href='#'><li class='newsOther'>Other<li></li></a>");
		
		
		$( ".navDepth3" ).html("<a href='#'><li class='backNav'>Back to Teams</li><a href='#'><li>Academy</li><a href='#'><li>Publications</li>");	
		
		forwardNav();
		backNav();
	});
	
	var ticketsOutput = "";	
	$(".tickets").click(function(){
		for(var i = 0; i < ticketsArray.length; i++){
			ticketsOutput += "<a href='#'><li>" + ticketsArray[i] + "</li></a>";
		}		
		$(".navDepth2").html(backToMainBtn + ticketsOutput);
		$(".navDepth2 a li").eq(7).addClass("matchdayTickets");		
		forwardNav();		
		backNav();		
		ticketsOutput = "";
	});
	
	
	$(".hospitality").click(function(){
		//Nav Depth 1
		for(var i = 0; i < hospitalityArray.length; i++){
			hospitalityOutput += "<a href='#'><li>" + hospitalityArray[i] + "</li></a>";
		}
		$(".navDepth2").html(backToMainBtn + hospitalityOutput);
		$(".navDepth2 a li").eq(3).addClass("meetingsAndEvents");
		
		//Nav Depth 2
		forwardNav();		
		backNav();
		hospitalityOutput = "";
	});	
	
	$(".club").click(function(){
		for(var i = 0; i < clubArray.length; i++){
			clubOutput += "<a href='#'><li>" + clubArray[i] + "</li></a>";
		}
		$(".navDepth2").html(backToMainBtn + clubOutput);
		$(".navDepth2 a li").eq(5).addClass("clubSoccerAcademy");
		$(".navDepth2 a li").eq(6).addClass("clubSocialPolicies");
		$(".navDepth2 a li").eq(7).addClass("clubCorporate");
		$(".navDepth2 a li").eq(8).addClass("clubOther");
		
		//Nav Depth 2
		forwardNav();		
		backNav();
		clubOutput = "";		
	});
	
	
	$(".shop").click(function(){
		//Nav Depth 1		
	});
	$(".more").click(function(){
		//Nav Depth 1	
		//Nav Depth 2
		//Nav Depth 3	
	});










});






$(window).resize(function(){
	//$("#column2").css("height", $("#column1").height());
	$("#footer").css("width", $(".content").width());
});

$(window).on('load', function(){
	//$("#column2").css("height", $("#column1").height());
	$("#footer").css("width", $(".content").width());
});

function fixdate($date) {
    return date('d-m-Y', strtotime($date));
}


