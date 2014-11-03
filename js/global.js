function toggleDropdown( event ) {
  var target = $( event.target );
  if (target.is(".menu>div")) {
    target.parent().find(".dropdown-menu").toggle();
    target.parent().siblings().find(".dropdown-menu").toggle(false);
  }
}
$(document).on('click', function(event) {
  if (!$(event.target).closest('.menu').length) {
    $(".menu").find(".dropdown-menu").hide();
  }
});
$(".menu").click(toggleDropdown).find(".dropdown-menu").hide();

