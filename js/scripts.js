



$(document).ready(function() {
  $("form#ranking").submit(function(event) {
    event.preventDefault();

    var animal = parseInt($("input:radio[name=animal]:checked").val());
    var color = parseInt($("input:radio[name=color]:checked").val());
    var fruit = parseInt($("input:radio[name=fruit]:checked").val());
    // var cute4 = $("input:radio[name=cute]:checked").val();

    if (animal + color + fruit <= 3) {
      $(".rubyinfo").show();
      $(".pythoninfo, .jsinfo, .goinfo").hide();
      // $("p#rubytext").click("#rubyButton")
    }
    else if (animal + color + fruit <= 6) {
    $(".pythoninfo").show();
      $(".rubyinfo, .jsinfo").hide();
    }
    else  {
    $(".jsinfo").show();
    $(".pythoninfo, .goinfo").hide();
    // } else if (cute4 === "cute4") {
    // $(".goinfo").show();
    // $(".pythoninfo, .rubyinfo, .jsinfo").hide();
  }


});
});
    function rubyButton() {
      $("p#rubyText").show();
    }
