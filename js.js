$(document).ready(function() {
  //$(".flight_no, .price").css("height", $(".legs").height());
  
  //Using height of column 1 to set height of column 2
  $("#column2").css("height", $("#column1").height());
  
  
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
});




$(window).resize(function(){
	$("#column2").css("height", $("#column1").height());
	$("#footer").css("width", $(".content").width());
});

$(window).on('load', function(){
	$("#column2").css("height", $("#column1").height());
	$("#footer").css("width", $(".content").width());
});