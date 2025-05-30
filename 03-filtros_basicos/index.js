$(function () {
  $("p:not('.p')").css("font-weight", "bold");

  $("p:first").css("color", "red");
  $("p:last").css("color", "red");

  $("p:even").css("background", "#eee");
  $("p:odd").css("background", "#ccc");

  $("p:eq(4)").text("Jquery Essentials");
  $("p:gt(4)").text("Seletores GT");
  $("p:lt(4)").text("Seletores LT");

  $(".list :header").css({
    "font-size": "1em",
    color: "#888",
  });

  $(".list :header span").css("color", "blue");

  function animar_el(elemento) {
    $(elemento).slideToggle(400, function () {
      animar_el(elemento);
    });
  }
  let num = 1;
  setInterval(function () {
    $(":animated").text(num++);
  }, 800);

  animar_el(".list span"); // chamada inicial

  $(":focus").css("background", "green");
});
