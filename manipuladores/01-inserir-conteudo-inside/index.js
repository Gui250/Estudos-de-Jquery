$(function () {
  let text = $(".j").text();
  let html = $(".j").html();

  $(".a").appendTo($(".e"));

  $(".e").append("<p>" + text + "</p>");
  $(".e").append("<p>" + html + "</p>");
  $("<p><b>#BoraProgramar</b></p>").appendTo($(".e"));
  $(".e").prepend("<h2>Resultados</h2>");
  $("<p>Exemplos:</p>").prependTo($(".e p:first"));
});
