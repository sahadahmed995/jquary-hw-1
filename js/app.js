$(function () {
  $("nav button").click(function () {
    $("aside").addClass("active");
  });

  $(".sideBarCtn button").click(function () {
    $("aside").removeClass("active");
  });
});
