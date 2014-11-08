function toggleMode( event ) { 
  var target = $( event.target ); 
  if (target.is(".navbar")) { 
    $(".details").toggle(); 
    $(".quiz").toggle(); 
  } 
} 
$(document).on('click', function(event) { 
  if (!$(event.target).closest('.menu').length) { 
    $(".menu").find(".dropdown-menu").hide(); 
  } 
}); 
$(".navbar").click(toggleMode); 
$(".quiz").hide();
