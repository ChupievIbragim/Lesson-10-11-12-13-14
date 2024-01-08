window.addEventListener('DOMContentLoaded', function() {
    // swiper
    var swiper = new Swiper('.swiper', {
      spaceBetween: 30,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });

    // tabs
    document.querySelectorAll('.work-item').forEach(function(tabsBtn) {
      tabsBtn.addEventListener('click', function(e) {
        const path = e.currentTarget.dataset.path;

        document.querySelectorAll('.work__content-desable').forEach(function(tabContent) {
          tabContent.classList.remove('work__content-active');
        })
        document.querySelector(`[data-target="${path}"]`).classList.add('work__content-active');
        document.querySelectorAll('.work-item').forEach(function(tabContent) {
          tabContent.classList.remove('work-btn-active');
        })
        document.querySelector(`[data-path="${path}"]`).classList.add('work-btn-active');
      });
    });

    $( function() {
      $( "#accordion" ).accordion();
    } );

    // burger
    document.querySelector('.header__burger').addEventListener('click', function() {
      document.querySelector('.header-nav').classList.toggle('header-nav-active')
      })
      var headerBurger = document.querySelector('.header__burger');

      headerBurger.addEventListener('click', function() {
        headerBurger.classList.toggle('active');
      });
      document.querySelector('.header__burger').addEventListener('click', function() {
        document.querySelector('.header__burger-line').classList.toggle('active')
        })

        // document.getElementById('toggleButton').addEventListener('click', function() {
        //   var image1 = document.getElementById('image1');
        //   var image2 = document.getElementById('image2');
        
        //   // Переключаем свойство display для скрытия/отображения изображений
        //   if (image1.style.display === 'block') {
        //     image1.style.display = 'none';
        //     image2.style.display = 'block';
        //   } else {
        //     image1.style.display = 'block';
        //     image2.style.display = 'none';
        //   }
        // });
        // document.getElementById('toggleButton').addEventListener('click', function() {
        //   document.querySelector('.main-header').classList.toggle('search-input')
        // })

        // var toggleButton = document.getElementById("toggleButton");

        // // Привязываем обработчик события к кнопке
        // toggleButton.addEventListener("click", function() {
        //   var elements = document.getElementsByClassName("search-ticket-item");

        //   for (var i = 0; i < elements.length; i++) {
        //     var element = elements[i];
        //     if (element.style.display === "none" || element.style.display === "") {
        //       element.style.display = "block";
        //     } else {
        //       element.style.display = "none";
        //     }
        //   }
});