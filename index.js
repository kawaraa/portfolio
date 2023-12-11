"use strict";

const pagesContainer = document.getElementById("pages-container");
const cube = document.getElementById("cube");
const intro = document.getElementById("intro");
const about = document.getElementById("about");
const projects = document.getElementById("projects");
const contact = document.getElementById("contact");
const width = pagesContainer.offsetWidth;
const height = pagesContainer.offsetHeight;
const transPlus = `translateZ(${width / 2}px)`;
const transMin = `translateZ(-${width / 2}px)`;

pagesContainer.style.perspective = width + "px";
cube.style.width = width + "px";
cube.style.transform = transMin;
document.querySelectorAll(".pages").forEach((el) => {
  el.style.width = width + "px";
});
intro.style.transform = "rotateY(0deg)" + transPlus;
about.style.transform = " rotateY(90deg)" + transPlus;
projects.style.transform = " rotateY(180deg)" + transPlus;
contact.style.transform = " rotateY(-90deg)" + transPlus;
about.style.display = "block";
projects.style.display = "block";
contact.style.display = "block";

function hidePages(page1, page2, page3) {
  page1.style.display = "none";
  page2.style.display = "none";
  page3.style.display = "none";
}

function showPage() {
  intro.style.display = "block";
  about.style.display = "block";
  projects.style.display = "block";
  contact.style.display = "block";

  if (location.hash === "#intro" || location.hash === "") {
    cube.style.transform = transMin + "rotateY(0deg)";
    setTimeout(() => hidePages(about, projects, contact), 550);
  }
  switch (location.hash) {
    case "#about":
      cube.style.transform = transMin + "rotateY(-90deg)";
      setTimeout(() => hidePages(intro, projects, contact), 550);
      break;
    case "#projects":
      cube.style.transform = transMin + "rotateY(-180deg)";
      setTimeout(() => hidePages(intro, about, contact), 550);
      break;
    case "#contact":
      cube.style.transform = transMin + "rotateY(90deg)";
      setTimeout(() => hidePages(intro, about, projects), 550);
      break;
  }
  animateLinks();
}
window.onhashchange = () => setTimeout(showPage, 600);

function createAppend(name, parent, options = {}) {
  const elem = document.createElement(name);
  parent.appendChild(elem);
  for (let key in options) {
    if (key === "txt") {
      elem.innerText = options.txt;
    } else {
      elem.setAttribute(key, options[key]);
    }
  }
  return elem;
}
function typeText(el, str, time) {
  Array.from(str).forEach((char) => setTimeout(() => (el.innerHTML += char), (time += 50)));
  return time;
}
function typeIntroduction() {
  const introductionParts = document.getElementById("introduction").children;
  let time = 1500;
  for (const el of introductionParts) {
    const text = el.innerHTML.trim();
    el.innerHTML = "";
    el.style.opacity = "1";
    time = typeText(el, text, time);
  }
}
typeIntroduction();

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

function animateLinks() {
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
  setTimeout(
    () =>
      navLinks.forEach((el) => {
        logo.style.animation = "none";
        logoLetters.style.animation = "none";
        menuIcon.style.animation = "none";
        el.style.animation = null;
      }),
    1400
  );
}

function showValue(e) {
  if (e.target.name === "budget") {
    document.getElementById("budget-result-holder").innerHTML = "€" + e.target.value;
  } else {
    document.getElementById("deadline-result-holder").innerHTML = e.target.value + " Days";
  }
}
document.getElementById("budget").addEventListener("input", showValue);
document.getElementById("deadline").addEventListener("input", showValue);

const submitResponse = document.getElementById("submit-response");
document.getElementById("contact-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const body = JSON.stringify({
    name: e.target.name.value,
    email: e.target.email.value,
    organization: e.target.organization.value,
    subject: e.target.subject.value,
    budget: e.target.budget.value,
    deadline: e.target.deadline.value,
    message: e.target.message.value,
  });

  const responseHolder = document.getElementById("response");
  fetch(
    `https://script.google.com/macros/s/AKfycbwKNqvz7Xx-rSFwCSsvW-N9egWL__dSDiOPFdjabc4ee-_itCwXOrhaXc4iN9bDHGl0/exec`,
    { method: "POST", body }
  )
    .then((res) => {
      if (!res.ok) responseHolder.innerHTML = "Something wrong happened, Please try again!";
      else responseHolder.innerHTML = "Thanks for contacting me!<br />I will contact you back very soon.";
    })
    .catch((err) => {
      responseHolder.innerHTML = "Something wrong happened, Please try again!";
    });

  setTimeout(() => {
    e.target.reset();
    location.hash = "#intro";
    responseHolder.innerHTML = "";
  }, 6000);
});
