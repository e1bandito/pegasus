let pureTabs = function (buttons, activeButton, tabs, activeTab) {

  buttons.forEach(function (item, i) {

    item.addEventListener("click", function () {

      buttons.forEach(function (item) {
        item.classList.remove(activeButton);
      });

      item.classList.add(activeButton);

      tabs.forEach(function (item) {
        item.classList.remove(activeTab);
      });

      tabs[i].classList.add(activeTab);
    });
  });
};

export default pureTabs;
