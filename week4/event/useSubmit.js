import {submitBtn} from "../data/dom.js";

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("submit");
})