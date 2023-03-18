import createElement from "../helpers/elementMaker";
import icon from "../icons/delete.svg";
import { clearLocalStorage } from "../helpers/localStorage";

const myIcon = new Image();
myIcon.src = icon;

export const footerTag = createElement("p", "© 2023, by JustWaveThings", {
  class: "footer-tag",
});

export const footer = createElement("div", "", {
  class: "footer",
});

export const clearLocalStorageBtn = createElement("button", "", {
  class: "clear-local-storage",
  type: "button",
});

export const clearBtnIcon = createElement("img", "", {
  class: "clearBtnIcon",
  src: icon,
});

clearLocalStorageBtn.addEventListener("click", () => {
  clearLocalStorage();
  window.location.reload();
});
