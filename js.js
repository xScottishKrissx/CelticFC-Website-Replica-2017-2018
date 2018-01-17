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

	var triangle = "<div class='triangle'>></div>"
	var backToMainBtn = "<a href='#'><li class='backMainMenu'>Back to Main Menu</li></a>";
	var backNavBtn = "<a href='#'><li class='backNav'>Previous</li></a>";
	
	
	var newsArray = ["Show All","First Team","Under 20's","Match Reports","Women's Team","Tickets","Commerical","Other",]
	var newsOtherArray = ["Academy","Publications"];
	
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
	
	var newsOutput = ""; var newsOtherOutput = ""; var ticketsOutput = "";
	var matchdayOutput = ""; var hospitalityOutput = ""; var clubOutput = ""; 
	var clubSocialPoliciesOutput = ""; var clubCorporateOutput = ""; var clubOtherOutput = "";
	var shopOutput=""; var moreOutput = ""; var youngHoopsClubOutput = ""; var mobileOutput = "";
	var supportersOutput = "";
	
	
	
	
var lastClicked;
function forwardNav(){
	$(".mobileNavContent").click(function(e){
		lastClicked = e.target.className;
		console.log("Active Class is " + lastClicked);		
		
		if(lastClicked == 'players'){
			
			$( ".navDepth3" ).html( "<a href='#'><li class='backNav'>Back to Teams</li></a><a href='team.php'><li>First Team</li></a><a href='#'><li>Under 20's</li></a><a href='#'><li>Academy</li></a><a href='#'><li>Women's First Team</li></a><a href='#'><li>Women and Girls</li></a>" );
			
			
			
			$(".nav2").stop().animate({marginLeft:"-33.97rem"});	
			$(".nav3").stop().animate({marginLeft:"-17rem"});	
			
			forwardNav();		
			backNav();			
			
		}else if(lastClicked == 'fixtures'){
			
			$( ".navDepth3" ).html( "<a href='#'><li class='backNav'>Back to Teams</li></a><a href='#'><li>First Team</li></a><a href='#'><li>Development Squad</li></a><a href='#'><li>Women's Team</li></a>" );		
			
			$(".nav2").stop().animate({marginLeft:"-33.97rem"});	
			$(".nav3").stop().animate({marginLeft:"-17rem"});
			
			forwardNav();		
			backNav();
		}
		else if(lastClicked == 'league-table'){
			$( ".navDepth3" ).html( "<a href='#'><li class='backNav'>Back to Teams</li></a><a href='#'><li>SPFL Premiership</li></a><a href='#'><li>Development Squad</li></a><a href='#'><li>Women's Team</li></a>" );		
			
			$(".nav2").stop().animate({marginLeft:"-33.97rem"});	
			$(".nav3").stop().animate({marginLeft:"-17rem"});
			
			forwardNav();		
			backNav();	
		
		}
		else if(lastClicked == 'newsOther'){			
			newsOtherOutput = "";
			for(var i = 0; i < newsOtherArray.length; i++){
				newsOtherOutput += "<a href='#'><li>" + newsOtherArray[i] + "</li></a>";
			}
			$( ".navDepth3" ).html(backNavBtn + newsOtherOutput);	
			
			$(".nav2").stop().animate({marginLeft:"-33.97rem"});	
			$(".nav3").stop().animate({marginLeft:"-17rem"});
			
			forwardNav();		
			backNav();		
		}
		
		else if(lastClicked == 'matchdayTickets'){			
		matchdayOutput = "";
		for(var i = 0; i < matchdayArray.length; i++){
			matchdayOutput += "<a href='#'><li>" + matchdayArray[i] + "</li></a>";
		}
			$( ".navDepth3" ).html(backNavBtn + matchdayOutput);	
			
			$(".nav2").stop().animate({marginLeft:"-33.97rem"});	
			$(".nav3").stop().animate({marginLeft:"-17rem"});		
			forwardNav();		
			backNav();
			
		}else if(lastClicked == 'meetingsAndEvents'){			
		meetingsOutput = "";
		for(var i = 0; i < meetingsArray.length; i++){
			meetingsOutput += "<a href='#'><li>" + meetingsArray[i] + "</li></a>";
		}
			$( ".navDepth3" ).html(backNavBtn + meetingsOutput);	
			
			$(".nav2").stop().animate({marginLeft:"-33.97rem"});	
			$(".nav3").stop().animate({marginLeft:"-17rem"});		
			forwardNav();		
			backNav();		
			
		}else if(lastClicked == 'clubSoccerAcademy'){			
		soccerAcademyOutput = "";
		for(var i = 0; i < soccerAcademyArray.length; i++){
			soccerAcademyOutput += "<a href='#'><li>" + soccerAcademyArray[i] + "</li></a>";
		}
			$( ".navDepth3" ).html(backNavBtn + soccerAcademyOutput);		
			
			$(".nav2").stop().animate({marginLeft:"-33.97rem"});	
			$(".nav3").stop().animate({marginLeft:"-17rem"});		
			forwardNav();		
			backNav();		
			
		}else if(lastClicked == 'clubSocialPolicies'){			
		clubSocialPoliciesOutput = "";
		for(var i = 0; i < socialPoliciesArray.length; i++){
			clubSocialPoliciesOutput += "<a href='#'><li>" + socialPoliciesArray[i] + "</li></a>";
		}
			$( ".navDepth3" ).html(backNavBtn + clubSocialPoliciesOutput);		
			
			$(".nav2").stop().animate({marginLeft:"-33.97rem"});	
			$(".nav3").stop().animate({marginLeft:"-17rem"});		
			forwardNav();		
			backNav();		
			
		}else if(lastClicked == 'clubCorporate'){			
		clubCorporateOutput = "";
		for(var i = 0; i < corportateArray.length; i++){
			clubCorporateOutput += "<a href='#'><li>" + corportateArray[i] + "</li></a>";
		}
			$( ".navDepth3" ).html(backNavBtn + clubCorporateOutput);		
			
			$(".nav2").stop().animate({marginLeft:"-33.97rem"});	
			$(".nav3").stop().animate({marginLeft:"-17rem"});		
			forwardNav();		
			backNav();		
			
		}else if(lastClicked == 'clubOther'){			
		clubOtherOutput = "";
		for(var i = 0; i < clubOtherArray.length; i++){
			clubOtherOutput += "<a href='#'><li>" + clubOtherArray[i] + "</li></a>";
		}
			$( ".navDepth3" ).html(backNavBtn + clubOtherOutput);		
			
			$(".nav2").stop().animate({marginLeft:"-33.97rem"});	
			$(".nav3").stop().animate({marginLeft:"-17rem"});		
			forwardNav();		
			backNav();		
			
		}else if(lastClicked == 'moreFans'){			
		moreFansOutput = "";
		for(var i = 0; i < moreFansArray.length; i++){
			moreFansOutput += "<a href='#'><li>" + moreFansArray[i] + "</li></a>";
		}
			$( ".navDepth3" ).html(backNavBtn + moreFansOutput);	
			$(".navDepth3 a li").eq(2).addClass("youngHoopsClub");		
			$(".navDepth3 a li").eq(3).addClass("mobile");	
			$(".navDepth3 a li").eq(4).addClass("supporters");			
			
			$(".nav2").stop().animate({marginLeft:"-33.97rem"});	
			$(".nav3").stop().animate({marginLeft:"-17rem"});	
			forwardNav();		
			backNav();		
			
		}else if(lastClicked == 'youngHoopsClub'){			
		youngHoopsClubOutput = "";
		for(var i = 0; i < youngHoopsClubArray.length; i++){
			youngHoopsClubOutput += "<a href='#'><li>" + youngHoopsClubArray[i] + "</li></a>";
		}
			$( ".navDepth4" ).html(backNavBtn + youngHoopsClubOutput);			
			
			$(".nav3").stop().animate({marginLeft:"-33.97rem"});	
			$(".nav4").stop().animate({marginLeft:"-17rem"});
			forwardNav();		
			backNav();		
			
		}else if(lastClicked == 'mobile'){			
		mobileOutput = "";
		for(var i = 0; i < mobileArray.length; i++){
			mobileOutput += "<a href='#'><li>" + mobileArray[i] + "</li></a>";
		}
			$( ".navDepth4" ).html(backNavBtn + mobileOutput);				
			
			$(".nav3").stop().animate({marginLeft:"-33.97rem"});	
			$(".nav4").stop().animate({marginLeft:"-17rem"});
			forwardNav();		
			backNav();		
			
		}else if(lastClicked == 'supporters'){			
		supportersOutput = "";
		for(var i = 0; i < supportersArray.length; i++){
			supportersOutput += "<a href='#'><li>" + supportersArray[i] + "</li></a>";
		}
			$( ".navDepth4" ).html(backNavBtn + supportersOutput);				
			
			$(".nav3").stop().animate({marginLeft:"-33.97rem"});	
			$(".nav4").stop().animate({marginLeft:"-17rem"});
			forwardNav();		
			backNav();			
		}		
		else{
			//$(".navDepth1, .navDepth2, .navDepth3").empty();
		}
		
		
		
		backNav();
		lastClicked = "";
	});
};
//Go Back in the Menu
function backNav(){
	if(lastClicked == 'backNav'){
		//$(".navDepth3").empty();
		$(".nav2").stop().animate({marginLeft:"-17rem"});
		$(".nav3").stop().animate({marginLeft:"0rem"});
		$(".nav4").stop().animate({marginLeft:"0rem"});
		
		$("."+lastClicked).parent().closest('ul').empty();
	}else if(lastClicked == 'backMainMenu'){
		$(".nav1").stop().animate({marginLeft:"0rem"});
		$(".nav2").stop().animate({marginLeft:"0rem"});		
		$(".nav3").stop().animate({marginLeft:"0rem"});
		$(".nav4").stop().animate({marginLeft:"0rem"});
		
		$(".navDepth2,.navDepth3,.navDepth4").empty();
	}else{
		//Do Nothing
	}
};
	
	$(".teams").click(function(e){
		
		$( ".navDepth2" ).html( 
			"<a href='#' ><li class='backMainMenu'>Back to Main Menu</li></a><a href='#' ><li class='players'>Players</li></a><a href='#'><li class='fixtures'>Fixtures</li></a><a href='#' ><li class='league-table'>League Table</li></a>"
			);
			
		
		$(".nav1").stop().animate({marginLeft:"-17rem"});
		$(".nav2").stop().animate({marginLeft:"-17rem"});
		forwardNav();
		backNav();
	});	

	$(".news").click(function(){
		for(var i = 0; i < newsArray.length; i++){
			newsOutput += "<a href='#'><li>" + newsArray[i] + "</li></a>";
		}		
		$(".navDepth2").html(backToMainBtn + newsOutput);
		
		$(".navDepth2 a:nth-child(2)").html("<a href='standardnews.php'><li>Show All</li></a>").addClass("visualDistinction");
		$(".navDepth2 a li").eq(2).css("display","none");
		
		
		$(".navDepth2 a li").eq(8).addClass("newsOther");	
		
		$(".nav1").stop().animate({marginLeft:"-17rem"});
		$(".nav2").stop().animate({marginLeft:"-17rem"});
		
		forwardNav();
		backNav();
		newsOutput = "";
	});
	
		
	$(".tickets").click(function(){
		for(var i = 0; i < ticketsArray.length; i++){
			ticketsOutput += "<a href='#'><li>" + ticketsArray[i] + "</li></a>";
		}		
		$(".navDepth2").html(backToMainBtn + ticketsOutput);		
		
		$(".navDepth2 a:nth-child(2)").html("<a href='tickets.php'><li>Home Tickets</li></a>").addClass("visualDistinction");
		
		
		
		$(".navDepth2 a li").eq(7).addClass("matchdayTickets");		
		
		$(".nav1").stop().animate({marginLeft:"-17rem"});
		$(".nav2").stop().animate({marginLeft:"-17rem"});

		
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
		
		$(".nav1").stop().animate({marginLeft:"-17rem"});
		$(".nav2").stop().animate({marginLeft:"-17rem"});
		
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
		
		$(".navDepth2 a:nth-child(2)").html("<a href='tickets.php'><li>Contact Information</li></a>").addClass("visualDistinction");
		//$(".navDepth2 a li").eq(1).css("display","none");
		
		
		
		
		$(".navDepth2 a li").eq(5).addClass("clubSoccerAcademy");
		$(".navDepth2 a li").eq(6).addClass("clubSocialPolicies");
		$(".navDepth2 a li").eq(7).addClass("clubCorporate");
		$(".navDepth2 a li").eq(8).addClass("clubOther");	
		
		$(".nav1").stop().animate({marginLeft:"-17rem"});
		$(".nav2").stop().animate({marginLeft:"-17rem"});
		
		//Nav Depth 2
		forwardNav();		
		backNav();
		clubOutput = "";		
	});
	
	
	$(".shop").click(function(){
		for(var i = 0; i < shopArray.length; i++){
			shopOutput += "<a href='#'><li>" + shopArray[i] + "</li></a>";
		}
		$(".navDepth2").html(backToMainBtn + shopOutput);	
		
		$(".nav1").stop().animate({marginLeft:"-17rem"});
		$(".nav2").stop().animate({marginLeft:"-17rem"});
		forwardNav();		
		backNav();		
		shopOutput = "";
				
	});
	$(".more").click(function(){
		for(var i = 0; i < moreArray.length; i++){
			moreOutput += "<a href='#'><li>" + moreArray[i] + "</li></a>";
		}
		$(".navDepth2").html(backToMainBtn + moreOutput);		
		$(".navDepth2 a li").eq(1).addClass("moreFans");	
		
		$(".nav1").stop().animate({marginLeft:"-17rem"});
		$(".nav2").stop().animate({marginLeft:"-17rem"});
		forwardNav();		
		backNav();		
		moreOutput = "";
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


