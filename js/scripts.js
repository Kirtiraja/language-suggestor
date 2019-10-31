



$(document).ready(function() {
  $("form#ranking").submit(function(event) {
    event.preventDefault();

    var animal = parseInt($("input:radio[name=animal]:checked").val());
    var color = parseInt($("input:radio[name=color]:checked").val());
    var fruit = parseInt($("input:radio[name=fruit]:checked").val());
    // var cute4 = $("input:radio[name=cute]:checked").val();

    if (animal + color + fruit <= 3) {
      $(".rubyinfo").show();
      $(".pythoninfo, .jsinfo, .rustinfo, .swiftinfo,.goinfo, #pythonText, #jsText, #rustText, #swiftText, #goText").hide();

    }
    else if (animal + color + fruit <= 6) {
    $(".pythoninfo").show();
      $(".rubyinfo, .jsinfo,  .rustinfo, .swiftinfo, .goinfo, #rubyText,  #jsText, #rustText, #swiftText, #goText").hide();
    }
    else  {
    $(".jsinfo").show();
    $(".pythoninfo, .goinfo").hide();

  }


});
});
    function rubyButton() {
      $("p#rubyText").toggle();
    }
    function pythonButton() {
      $("p#pythonText").toggle();
    }
    function jsButton() {
      $("p#jsText").toggle();
    }
