$(function () {
  $("p").on("click", function () {
    console.clear();

    if ($(this).is(".j")) {
      console.log("TRUE");
    } else {
      console.log("FALSE");
    }

    if ($(this).is(":first-of-type")) {
      console.log("FIRST");
    }
  });

  // HAS
  $("p").has("span").append("<sup> Has SPAN </sup>");

  // NOT
  $("p").not(":contains('jQuery')").css("color", "red");
  $("p").not(":eq(2)").css("border", "1px solid red");

  // FILTER
  $("p").filter(":contains('jQuery')").css({
    color: "red",
    border: "1px solid red",
  });

  $("p")
    .css({
      padding: "10px",
      background: "#eee",
    })
    .filter(function (index) {
      return index % 2 === 1;
    })
    .css("background", "#ccc");

  let mapa = $("p")
    .map(function (index, el) {
      console.log($(el));
      return "<p>" + index + " - " + $(el).text() + "</p>";
    })
    .get()
    .join("");

  $("<div>" + mapa + "</div>").appendTo("body");
});
