$(function () {
  $("p:parent").css("background", "red");
  $("p:empty").html("<b>Sem conteúdo</b>");
  $("p:contains('Essentials')").css("color", "white");
  $("p:has('b')").text("É este aqui");
});
