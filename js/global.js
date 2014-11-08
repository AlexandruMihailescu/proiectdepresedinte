function toggleMode( event ) { 
  var target = $( event.target ); 
  if (target.is(".toggleButton")||target.is(".navbar")) { 
    $(".details").toggle(); 
    $(".quiz").toggle(); 
    if ($(".quiz").is(":visible"))
      $(".toggleButton").text("Pauză");
    else
      $(".toggleButton").text("Înapoi");
  } 
} 
$(".toggleButton").click(toggleMode); 
$(".quiz").hide();