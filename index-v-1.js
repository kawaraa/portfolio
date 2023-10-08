"use strict";
const pages = ["home", "projects", "about", "contact"];

const listLinks = document.querySelectorAll(".list-links");
listLinks.forEach((el) => el.addEventListener("click", showHidList));
document.getElementById("menu-icon").addEventListener("click", showHidList);
const menuIcon = document.getElementById("menu-icon");

function showHidList() {
  let dropList = document.getElementById("drop-list");
  if (menuIcon.className === "m-icon") {
    menuIcon.className = "x-icon";
    dropList.style.top = "60px";
    listLinks.forEach((el) => (el.style.animation = "margin-max 1s ease 0.5 forwards"));
  } else {
    menuIcon.className = "m-icon";
    dropList.style.top = "-200px";
    listLinks.forEach((el) => (el.style.animation = "margin-min 0.3s ease forwards"));
  }
}

window.addEventListener("click", async (e) => {
  if (e.target.tagName !== "A") return;
  const current = pages.findIndex((p) => window.location.href.includes(p));
  const next = pages.findIndex((p) => e.target.href.includes(p));
  localStorage.setItem("next", current <= next);

  let navLinks = document.querySelectorAll(".nav-links");
  navLinks[0].style.animation = "nav-links-anim 1s ease 0.2s";
  navLinks[1].style.animation = "nav-links-anim 1s ease 0.1s";
  navLinks[2].style.animation = "nav-links-anim 1s ease ";
  navLinks[3].style.animation = "nav-links-anim 1s ease";
  let logo = document.getElementById("logo");
  let logoLetters = document.getElementById("logo-letters");
  logo.style.animation = "logo 1s ease";
  logoLetters.style.animation = "logo 1s ease";
  menuIcon.style.animation = "logo 1s ease";
});

const flipCube = (front, side) => {
  setTimeout(() => {
    front.classList.add("front");
    side.classList.add("leave");
  }, 100);
};
function moveNext(el) {
  el.nextElementSibling.remove();
  el.previousElementSibling.classList.add("left");
  el.classList.add("front-on-right");
  flipCube(el, el.previousElementSibling);
}
function movePrevious(el) {
  el.previousElementSibling.remove();
  el.nextElementSibling.classList.add("right");
  el.classList.add("front-on-left");
  flipCube(el, el.nextElementSibling);
}

const next = localStorage.getItem("next") === "true";
const current = pages.findIndex((p) => window.location.href.includes(p));

window.onload = () => {
  document.getElementById("loading-container").style.display = "none";
  if (current < 1) return;
  if (localStorage.getItem("next") == "true") moveNext(document.getElementsByClassName("page")[1]);
  else movePrevious(document.getElementsByClassName("page")[1]);
};
