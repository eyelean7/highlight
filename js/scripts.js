$(function() {
  // recreates article below
  $("#article").keyup(function() {
    var value = $(this).val();
    $("#output").text(value);
  });

  var mark = function() {

    // Read the keyword
    var keyword = $("input[name='keyword']").val();

    // Determine selected options
    var options = {};
    $("input[name='opt[]']").each(function() {
      options[$(this).val()] = $(this).is(":checked");
    });

    // Remove previous marked elements and mark
    // the new keyword inside the context
    $(".context").unmark({
      done: function() {
        $(".context").mark(keyword, options);
      }
    });
  };

  $("input[name='keyword']").on("input", mark);
  $("input[type='checkbox']").on("change", mark);

});
