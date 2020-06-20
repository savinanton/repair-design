/*
document.addEventListener("DOMContentLoaded", function (event) {
  const modal = document.querySelector(".modal"); //обратимся к окну
  const modalBtn = document.querySelectorAll("[data-toggle=modal]");
  const closeBtn = document.querySelector(".modal__close");
  const switchModal = () => {
    modal.classList.toggle("modal--visible");
  };
  modalBtn.forEach((element) => {
    element.addEventListener("click", switchModal);
  });
  closeBtn.addEventListener("click", switchModal);
});
*/

$(document).ready(function () {
  var modal = $(".modal"),
    modalBtn = $("[data-toggle=modal]"),
    closeBtn = $(".modal__close");

  modalBtn.on("click", function () {
    modal.toggleClass("modal--visible");
  });
  closeBtn.on("click", function () {
    modal.toggleClass("modal--visible");
  });

  //слайдер 1
  var mySwiper = new Swiper(".swiper-container", {
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  var next = $(".swiper-button-next");
  var prev = $(".swiper-button-prev");
  var bullets = $(".swiper-pagination");

  next.css("left", prev.width() + 20 + bullets.width() + 20);
  bullets.css("left", prev.width() + 20);

  new WOW().init();

  //валидация формы
  $(".modal__form").validate({
    errorClass: "invalid",
    rules: {
      // строчное правило
      userName: {
        required: true,
        minlength: 2,
      },
      userPhone: {
        required: true,
        minlength: 17,
        maxlength: 17,
      },

      userEmail: {
        required: true,
        email: true,
      },
    }, // сообщения
    messages: {
      userName: {
        required: "Имя обязательно",
        minlength: "Имя не короче двух букв",
      },
      userPhone: {
        required: "Телефон обязательно",
        minlength: "Минимум 11 цифр",
        maxlength: "Максимум 11 цифр",
      },
      userEmail: {
        required: "Обязательно укажите email",
        email: "Введите в формате name@domain.com",
      },
    },
    submitHandler: function (form) {
      $.ajax({
        type: "POST",
        url: "send.php",
        data: $(form).serialize(),
        success: function (response) {
          alert("Форма отправлена, мы свяжемся с Вами через 10 минит");
          $(form)[0].reset();
          modal.remove("modal--visible");
        },
      });
    },
  });

  //маска для номера телефона
  $("[type=tel]").mask("+7(000) 00-00-000", {
    placeholder: "+7 (___) __-__-__-___",
  });

  //создание яндекс карты
  ymaps.ready(function () {
    var myMap = new ymaps.Map(
        "map",
        {
          center: [47.244729, 39.723187],
          zoom: 9,
        },
        {
          searchControlProvider: "yandex#search",
        }
      ),
      // Создаём макет содержимого.
      MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
        '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
      ),
      myPlacemark = new ymaps.Placemark(
        myMap.getCenter(),
        {
          hintContent: "Наш офис",
          balloonContent: "Вход со двора",
        },
        {
          // Опции.
          // Необходимо указать данный тип макета.
          iconLayout: "default#image",
          // Своё изображение иконки метки.
          iconImageHref: "img/location.png",
          // Размеры метки.
          iconImageSize: [32, 32],
          // Смещение левого верхнего угла иконки относительно
          // её "ножки" (точки привязки).
          iconImageOffset: [-5, -38],
        }
      );

    myMap.geoObjects.add(myPlacemark);
  });
});

//валидация
$("footer__form").validate({
  errorClass: "invalid",
  rules: {
    // строчное правило
    userName: {
      required: true,
      minlength: 2,
      maxlength: 15,
    },
    // CheckboxFooter: {
    //   required: true,
    // },
    userPhone: {
      required: true,
      minlength: 17,
      maxlength: 17,
    },
    // правило объект
    userEmail: {
      required: true,
      email: true,
    },
  },
  messages: {
    userName: {
      required: "Имя обязательно",
      minlength: "Имя не короче 2 букв",
      maxlength: "Имя не длиньше 11 букв",
    },
    userPhone: {
      required: "Телефон обязательно",
      minlength: "Минимум 11 цифр",
      maxlength: "Максимум 11 цифр",
    },
    userEmail: {
      required: "Обязательно укажите Email",
      email: "Введите в формате: name@domain.com",
    },
  },
});

//валидация
$(".#form").validate({
  errorClass: "invalid",
  rules: {
    // строчное правило
    userName: {
      required: true,
      minlength: 2,
      maxlength: 15,
    },
    userPhone: {
      required: true,
      minlength: 17,
      maxlength: 17,
    },
    // правило объект
    userEmail: {
      required: true,
      email: true,
    },
    CheckboxFooter: {
      required: true,
    },
  },
  messages: {
    userName: {
      required: "Имя обязательно",
      minlength: "Имя не короче 2 букв",
      maxlength: "Имя не длиньше 15 букв",
    },
    userPhone: {
      required: "Телефон обязательно",
      minlength: "Минимум 11 цифр",
      maxlength: "Максимум 11 цифр",
    },
    userEmail: {
      required: "Обязательно укажите Email",
      email: "Введите в формате: name@domain.com",
    },
  },
});
