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


//Level 1

	//The Dumb Way
	$(".teams").click(function(e){
		
		$( ".navDepth2" ).html( 
			"<a href='' class='players'><li>Players</li></a><a href=''><li>Fixtures</li></a><a href=''><li>League Table</li></a>"
			);
		$( ".navDepth3" ).html( "<a href=''><li>Teams</li></a>" );	
	});

	$(".news").click(function(){
		$( ".navDepth2" ).html( "<a href='#' class='news2'><li>News 2</li></a>" );
		$( ".navDepth3" ).html( "<a href='#' class='news3'><li>News 3</li></a>" );	
	});

	$(".tickets").click(function(){
		//Nav Depth 1
		//Nav Depth 2	
	});
	$(".hospitality").click(function(){
		//Nav Depth 1
		
		//Nav Depth 2
	});
	$(".club").click(function(){
		//Nav Depth 1
		
		//Nav Depth 2
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


