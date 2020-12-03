let burger = function (button, nav) {
  let burgerBtn = document.querySelector(button);
  let inner = document.querySelector(nav);

  if (burgerBtn) {
    burgerBtn.addEventListener("click", function () {
      burgerBtn.classList.add("burger__anim");
      burgerBtn.classList.toggle("burger__anim--open");

      if (!inner.classList.contains("nav--anim")) {
        inner.classList.add("header__inner--anim");
      }
      inner.classList.toggle("header__inner--open");
    });
  }
};

export default burger;
