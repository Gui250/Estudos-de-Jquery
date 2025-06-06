$(function () {
  $(".article").children().css("font-family", "Open Sans, serif");
  $(".article").children(".article_content").css("margin-bottom", "30px");
  $(".article_content").children("p").css("font-size", "0.8em");

  $(".article_content p").siblings().css("color", "#777");
  $(".article_content p").siblings(".a").css("color", "#09f");

  $(".article_content b")
    .parent()
    .css({
      padding: "10px",
      background: "#fbfbfb",
    })
    .parent("div")
    .css({
      "padding-bottom": "10px",
      "border-bottom": "5px solid #eee",
    });
});
