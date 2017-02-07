$(document).ready(function()  {
  $("p").click(function() {
    $(".initially-showing").toggle();
    $(".initially-hidden").toggle();
  });
  $("button#original").click(function() {
    $("body").removeClass();
  });
  $("button#alternate").click(function() {
    $("body").addClass("alternate-theme");
  });
});
