



$(document).ready(function() {
  $("form#ranking").submit(function(event) {
    event.preventDefault()
  //   $("button").click(function() {
  // $("p").toggle();
    var cute1 = $("input:radio[name=cute]:checked").val();
    var cute2 = $("input:radio[name=cute]:checked").val();
    var cute3 = $("input:radio[name=cute]:checked").val();
    var cute4 = $("input:radio[name=cute]:checked").val();

    if (cute1 === "cute1") {
      $(".rubyinfo").show();
      $(".pythoninfo, .jsinfo, .goinfo").hide();
    } else if (cute2 === "cute2") {
    $(".pythoninfo").show();
      $(".rubyinfo, .jsinfo").hide();
    } else  if (cute3 === "cute3") {
    $(".jsinfo").show();
    $(".pythoninfo, .goinfo").hide();
    } else if (cute4 === "cute4") {
    $(".goinfo").show();
    $(".pythoninfo, .rubyinfo, .jsinfo").hide();
  }


});
});
