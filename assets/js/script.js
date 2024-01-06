$(document).ready(function() {
  $('.carousel-pulse').slick({
      prevArrow: '<button type="button" class="slick-prev"><img src="assets/img/icon/icon-left.webp"></button>',
      nextArrow: '<button type="button" class="slick-next"><img src="assets/img/icon/icon-right.webp"></button>',
      responsive: [
          {
              breakpoint: 992,
              settings: {
                  dots: true,
                  arrows: false
              }
          }
      ]
  });

  $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab--active)', function() {
      $(this)
          .addClass('catalog__tab--active').siblings().removeClass('catalog__tab--active')
          .closest('div.container').find('div.catalog__content').removeClass('catalog__content-active').eq($(this).index()).addClass('catalog__content-active');
  });

  function toggleSlide(item) {
    $(item).each(function(i) {
      $(this).on('click', function(e) {
          e.preventDefault();
          $('.catalog__card-content').eq(i).toggleClass('catalog__card-content-active');
          $('.catalog__card-list').eq(i).toggleClass('catalog__card-list-active');
      });
  });
  };

  toggleSlide('.catalog__card-next');
  toggleSlide('.catalog__card-list-back');

  // Modal
  $('[data-modal="consultation"]').on('click', function() {
    $('.overlay, #consultation').fadeIn('slow')
  });
  $('.modal__exit').on('click', function() {
    $('.overlay, #consultation, #buy, #thanks').fadeOut('slow')
  });
  $('.button--catalog').each(function (i) {
    $(this).on('click', function() {
        $('#buy .modal__subheader').text($('.catalog__card-subheader').eq(i).text());
        $('.overlay, #buy').fadeIn('slow');
    });
  });

//Validation form // download and join validate.min.js
  function validateForms(form) {
    $(form).validate({
      rules: {
        name: 'required',
        phone: 'required',
        email: {
          required: true,
          email: true,
        }
  
      },
      messages: {
        name: "Пожалуйста введите свое имя",
        phone: 'Пожалуйста введите свой номер телефона',
        email: {
          required: "Пожалуйста введите свою почту",
          email: "Неправильно введен адрес почты пример: name@domain.com"
        }
      }
    }
    );
  }
  validateForms('.form__feed');
  validateForms('#consultation form');
  validateForms('#buy form');
//plugins.jquery.com/maskedinput/
  $('input[name=phone]').mask("+7 (999) 999-99-99");

// smooth scroll and pageup
  $(window).scroll(function() {
    if ($(this).scrollTop() > 500) {
      $('.scroll-up').fadeIn();
    } else {
      $('.scroll-up').fadeOut();
    }
  })

  $('.scroll-up').click(function() {
    $('html, body').animate({scrollTop: 0}, 0);
  });
// Animate.css wow.js library
  new WOW().init();
});