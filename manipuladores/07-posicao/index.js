$(function () {
  let el = $(".j");

  console.group("OFFSET");
  console.log("TOP:" + el.offset().top);
  console.log("LEFT: " + el.offset().left);
  console.groupEnd();

  let el_off = el.offset();
  el.after(
    "<p class='offset'> Cords: Top: " +
      el_off.top +
      " Left: " +
      el_off.left +
      "</p>"
  );

  $(".offset").offset({ top: el_off + 30, left: el_off + 10 });
});
