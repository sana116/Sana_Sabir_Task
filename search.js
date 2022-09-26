$(document).ready(function(){
    $("#search-user").on("keyup", function() {
      var value = $(this).val().toLowerCase();
      $("#employees tr:not(:first)").filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
      });
    });
  });