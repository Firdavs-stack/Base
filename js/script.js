window.onload = function () {
   const factItems = document.querySelectorAll('.review__facts-item');
   const burgerMenu = document.querySelector('.burger'),
      menuList = document.querySelector('.menu__list'),
      menuLogin = document.querySelector('.header__button')

   function openFact(e) {
      if (!(this.classList.contains('--active'))) {
         for (let i = 0; i < factItems.length; i++) {
            factItems[i].classList.remove('--active')
         }
      }
      this.classList.toggle('--active');
   };


   factItems.forEach(element => {
      element.addEventListener('click', openFact);
   })

   const openBurger = () => {
      burgerMenu.classList.toggle('--active');
      menuList.classList.toggle('--active');
      document.body.classList.toggle('--lock');
      menuLogin.classList.toggle('--active');
   };

   burgerMenu.addEventListener('click', openBurger);
};