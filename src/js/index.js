import burger from "../components/burger/burger";
import pureTabs from "../blocks/tabs/tabs";

burger(".burger", ".header__inner");

const tabsSwitcher = document.querySelectorAll('.tabs__header-item');
const tabsContent = document.querySelectorAll('.tabs__body');
const switcherActive = 'tabs__header-item--active';
const tabActive = 'tabs__body--active';

pureTabs(tabsSwitcher, switcherActive, tabsContent, tabActive);
