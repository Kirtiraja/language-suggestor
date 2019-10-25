



$(document).ready(function() {
  $("form#ranking").submit(function(event) {
    event.preventDefault()
  //   $("button").click(function() {
  // $("#rubytext").toggle();
    var animal = $("input:radio[name=animal]:checked").val();
    var color = $("input:radio[name=cute]:checked").val();
    var cute3 = $("input:radio[name=cute]:checked").val();
    var cute4 = $("input:radio[name=cute]:checked").val();

    if (animal > "1") {
      $(".rubyinfo").show();
      $(".pythoninfo, .jsinfo, .goinfo").hide();
    } else if (color = "cute2") {
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
// });
