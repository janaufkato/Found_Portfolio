$('#input0').click(function() {
  if($("select#input0 :selected").val() == "eng") {
    $("select#input0").attr('style', ';');

 }
 if($("select#input0 :selected").val() == "rus") {
    $('#home').text('главная');
    $('#works').text('работы');
    $('#contact').text('контакты');
 }
    console.log('select color: '+$("select#input0 :selected").val());
});
