

$("#submit").on("click", function(event) {
  event.preventDefault();

  // Form validation
  function validateForm() {
    var isValid = true;
    $(".form-control").each(function() {
      if ($(this).val() === "") {
        isValid = false;
      }
    });

    $(".chosen-select").each(function() {

      if ($(this).val() === "") {
        isValid = false;
      }
    });
    return isValid;
  }

  
});