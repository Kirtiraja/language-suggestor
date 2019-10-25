



$(document).ready(function() {
  $("form#ranking").submit(function(event) {
    event.preventDefault();
    var cute1 = $("input:radio[name=cute]:checked").val();
    var cute2 = $("input:radio[name=cute]:checked").val();
    var cute3 = $("input:radio[name=cute]:checked").val();


    if (cute1 === "cute1") {
      $(".rubyinfo").show();
      $(".pythoninfo, .jsinfo").hide();
    } else if (cute2 === "cute2") {
    $(".pythoninfo").show();
      $(".rubyinfo, .jsinfo").hide();
    } else  {
    $(".goinfo").show();
    $(".pythoninfo, .jsinfo").hide();
    }

});
});
