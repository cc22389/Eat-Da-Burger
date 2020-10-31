// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function () {

  $(document).ready(function () {
    // On page load, fetch burgers and show them on the page.
  });

  $(".change-devoured").on("click", function (event) {
    var id = $(this).data("id");
    var newdevoured = $(this).data("newdevoured");

    var newdevouredState = {
      devoured: newdevoured
    };

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newdevouredState
    }).then(
      function () {
        console.log(newdevoured);
        document.location.reload();
      }
    );
  });

  $("#burger-form").on("submit", function (event) {

    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurger = {
      burger_name: $("#enter_text").val().trim()
      // devoured: false
    };
    console.log({ newBurger });

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function () {
        document.location.reload(); // not desired solution - come back if have time
      });
  });

});