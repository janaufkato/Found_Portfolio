$('#input0').click(function() {
  if($("select#input0 :selected").val() == "eng") {
    $("select#input0").attr('style', 'background-image:url(..);');
 }
 if($("select#input0 :selected").val() == "rus") {
    $("select#input0").attr('style', 'background-image:url(..);');
 }
    console.log('select color: '+$("select#input0 :selected").val());
});
