$(function () {
  $("[class]").css("background", "#ccc"); // Pegando todos os elementos com class

  $('[data-upinside="true"]').css("background", "#006699");
  $("[title='Upinside']").css("background", "red");

  $("[class^='jquery']").css("background", "#0099ff"); // pegando atributos que começam com jquery
  $("[class$='upinside']").css("background", "#0099ff"); // pegando atributos que terminam com upinside
  $("[class*='r']").css("font-weight", "bold"); // pegando atributos que contem r

  $('[class~="jquery"]').css("text-transform", "uppercase"); // pegando atributos que contem jquery
});
