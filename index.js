const tlacitko = document.querySelector("#ham");

tlacitko.addEventListener("click", () => {
  const rozbal = document.querySelector("#menu");
  rozbal.classList.toggle("hidden");
  const cara2 = document.querySelector("#cara2");
  cara2.classList.toggle("caraB");

  const cara1 = document.querySelector("#cara1");
  cara1.classList.toggle("caraA");
  const cara3 = document.querySelector("#cara3");
  cara3.classList.toggle("caraC");
});

//navigace
document.addEventListener("DOMContentLoaded", function () {
  const navLink = document.getElementById("nav-link");
  const navText = document.getElementById("nav-text");

  // Text zobrazíme hned po načtení stránky
  navText.style.display = "inline";
});
