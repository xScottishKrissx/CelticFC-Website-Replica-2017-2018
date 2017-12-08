$(document).ready(function() {
  //$(".flight_no, .price").css("height", $(".legs").height());
  
  //Using height of column 1 to set height of column 2
  $("#column2").css("height", $("#column1").height());
  
  
  //$("#matchdayCrests").css("height", $("#matchdayText").height());
  
  $(".column1, .box1").hover(function(){
	  $(".box1").css("display","block")
	  }, function(){
	       $(".box1").css("display","none")
  });
  
  $(".column2, .box2").hover(function(){
	  $(".box2").css("display","block")
	  }, function(){
	       $(".box2").css("display","none")
  });
  
  $(".column3, .box3").hover(function(){
	  $(".box3").css("display","block")
	  }, function(){
	       $(".box3").css("display","none")
  });
  
  $(".column4, .box4").hover(function(){
	  $(".box4").css("display","block")
	  }, function(){
	       $(".box4").css("display","none")
  });
  
  $(".column5, .box5").hover(function(){
	  $(".box5").css("display","block")
	  }, function(){
	       $(".box5").css("display","none")
  });
  
  $(".column6, .box6").hover(function(){
	  $(".box6").css("display","block")
	  }, function(){
	       $(".box6").css("display","none")
  });
  
  $(".column7, .box7").hover(function(){
	  $(".box7").css("display","block")
	  }, function(){
	       $(".box7").css("display","none")
  });
  

  
  
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