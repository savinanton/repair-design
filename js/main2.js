// Отправка заявки
$(document).ready(function () {
  $("#form").submit(function () {
    $.ajax({
      type: "POST",
      url: "send.php",
      data: $(this).serialize(),
    }).done(function () {
      $(".js-overlay-thank-you").fadeIn();
      $(this).find("input").val("");
      $("#form").trigger("reset");
    });
    return false;
  });
});

// Закрыть попап «спасибо»
$(".js-close-thank-you").click(function () {
  // по клику на крестик
  $(".js-overlay-thank-you").fadeOut();
});

$(document).mouseup(function (e) {
  // по клику вне попапа
  var popup = $(".popup");
  if (e.target != popup[0] && popup.has(e.target).length === 0) {
    $(".js-overlay-thank-you").fadeOut();
  }
});

// Маска ввода номера телефона (плагин maskedinput)
$(function ($) {
  $('[name="phone"]').mask("+7(999) 999-9999");
});