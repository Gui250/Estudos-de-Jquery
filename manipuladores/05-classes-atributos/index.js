$(function () {
  $("p").css("color", "#006699");
  $("p").css({
    color: "#555",
    //"border-bottom": "1px solid #ccc",
  });
  $(".segunda").attr("id", "segundo");
  console.log($(".segunda").attr("id", "segundo"));

  console.warn($(".segunda").prop("id"));
  console.warn($("input").prop("checked"));
  console.warn($("input").val("nome"));

  let ex = $(".segunda").clone().appendTo("body").html("<b>#BoraProgramar</b>");

  $("div").on("click", function () {
    if ($(this).hasClass("add")) {
      $(this).removeClass("add");
      $(this).find("p").slideDown();
      $("input").removeAttr("checked");
    } else {
      $(this).addClass("add");
      $(this).find("p").slideUp();
      $("input").attr("checked", "checked");
    }
  });
});
