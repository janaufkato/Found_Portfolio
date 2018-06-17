// scroll part Jquery
$('a[href*="#"]')
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
      &&
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
	  }, 500, function() {
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });
        // Navigator fixed position
$(window).on('scroll', function() {
		var scroll = $(window).scrollTop();

		if (scroll >= 100) {
			$('#navigation').addClass('fixed');
		} else {
			$('#navigation').removeClass('fixed');
		}
	});

    // language selected
$('#input0').click(function() {
  if($("select#input0 :selected").val() == "eng") {


 }
 if($("select#input0 :selected").val() == "rus") {
    $('#home').text('главная');
    $('#works').text('работы');
    $('#contact').text('контакты');
    $('#work1text').text('HDrezka Это онлайн кинотеатр без надоедливой рекламы, который имеет простой и лаконичный дизайн.');
    $('#work1text2').text('Si - это интернет-магазин, где вы легко подбираете мебель для любой комнаты. Сервис очень прост в использовании благодаря продуманному ux.');
	$('#work1text3').text('Это сервис быстро и удобно поможет вам найти того единственного друга благодоря интуетивному дизайну.');
 }
    console.log('select color: '+$("select#input0 :selected").val());
});
