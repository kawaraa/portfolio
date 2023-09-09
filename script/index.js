"use strict";

const pagesContainer = document.getElementById("pages-container");
const cube = document.getElementById("cube");
const intro = document.getElementById("intro");
const about = document.getElementById("about");
const portfolio = document.getElementById("portfolio");
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
portfolio.style.transform = " rotateY(180deg)" + transPlus;
contact.style.transform = " rotateY(-90deg)" + transPlus;
about.style.display = "block";
portfolio.style.display = "block";
contact.style.display = "block";

function hidePages(page1, page2, page3) {
  page1.style.display = "none";
  page2.style.display = "none";
  page3.style.display = "none";
}

function showPage() {
  if (location.hash === "#intro" || location.hash === "") {
    intro.style.display = "block";
    about.style.display = "block";
    portfolio.style.display = "block";
    contact.style.display = "block";
    cube.style.transform = transMin + "rotateY(0deg)";
    setTimeout(() => hidePages(about, portfolio, contact), 550);
  }
  switch (location.hash) {
    case "#about":
      intro.style.display = "block";
      about.style.display = "block";
      portfolio.style.display = "block";
      contact.style.display = "block";
      cube.style.transform = transMin + "rotateY(-90deg)";
      setTimeout(() => hidePages(intro, portfolio, contact), 550);
      break;
    case "#portfolio":
      intro.style.display = "block";
      about.style.display = "block";
      portfolio.style.display = "block";
      contact.style.display = "block";
      cube.style.transform = transMin + "rotateY(-180deg)";
      setTimeout(() => hidePages(intro, about, contact), 550);
      renderProjects("all");
      break;
    case "#contact":
      intro.style.display = "block";
      about.style.display = "block";
      portfolio.style.display = "block";
      contact.style.display = "block";
      cube.style.transform = transMin + "rotateY(90deg)";
      setTimeout(() => hidePages(intro, about, portfolio), 550);
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
function typeText(ele, str, time) {
  Array.from(str).forEach((char) => setTimeout(() => (ele.innerHTML += char), (time += 50)));
  return time;
}
function typeIntroduction() {
  const introduction = document.getElementById("introduction");
  introduction.innerHTML = "";
  introduction.style.zIndex = "1";
  const txt =
    "My name is Armando Kawara. I'm a full stack web developer, I do Front-end as well as Back-end development. ";
  let span = createAppend("span", introduction);
  let time = typeText(span, txt, 2000);
  let span1 = createAppend("span", introduction);
  let time1 = typeText(span1, "Feel free to take a look at my work on ", time);
  let a2 = createAppend("a", introduction, {
    href: "#portfolio",
    class: "link",
  });
  let time2 = typeText(a2, "Portfolio ", time1);
  let span3 = createAppend("span", introduction);
  let time3 = typeText(span3, "page. Enquires at ", time2);
  let a4 = createAppend("a", introduction, {
    href: "mailto:info@kawaraa.com?Subject=Hello%20again",
    class: "link",
  });
  typeText(a4, "info@kawaraa.com ", time3);
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
    dropList.style.top = "45px";
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
  let Klogo = document.getElementById("k-logo");
  let logoLetters = document.getElementById("logo-letters");
  Klogo.style.animation = "logo 1s ease";
  logoLetters.style.animation = "logo 1s ease";
  menuIcon.style.animation = "logo 1s ease";
  setTimeout(
    () =>
      navLinks.forEach((el) => {
        Klogo.style.animation = "none";
        logoLetters.style.animation = "none";
        menuIcon.style.animation = "none";
        el.style.animation = null;
      }),
    1400
  );
}

function showValue(e) {
  if (e.target.name === "budget") {
    document.getElementById("budget-holder").innerHTML = "€" + e.target.value;
  } else {
    document.getElementById("deadline-holder").innerHTML = e.target.value + " Days";
  }
}
document.getElementById("budget").addEventListener("input", showValue);
document.getElementById("deadline").addEventListener("input", showValue);

const submitResponse = document.getElementById("submit-response");
document.getElementById("contact-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const data = JSON.stringify({
    name: e.target.name.value,
    email: e.target.email.value,
    organization: e.target.organization.value,
    need: e.target.need.value,
    budget: e.target.budget.value,
    deadline: e.target.deadline.value,
    message: e.target.message.value,
  });
  // postJSON("/api/contact", data)
  //   .then((res) => {
  //     e.target.style.display = "none";
  //     submitResponse.style.display = "block";
  //     document.getElementById("response-h2").innerHTML =
  //       "Thanks for contacting me!<br />I will contact you back very soon.";
  //   })
  //   .catch((err) => {
  //     e.target.style.display = "none";
  //     submitResponse.style.display = "block";
  //     document.getElementById("response-h2").innerHTML = "Something wrong happened, Please try again!";
  //   });

  setTimeout(() => (location.hash = "#intro"), 4000);
  setTimeout(() => {
    e.target.style.display = "block";
    submitResponse.style.display = "none";
    e.target.reset();
  }, 6000);
});
