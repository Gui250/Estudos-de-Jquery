$(function () {
  $("p").wrapAll("<div></div>");

  $("p").wrapInner("<span></span>");

  $("p").unwrap("p");

  $("span").wrap("<h2></h2>");
});
