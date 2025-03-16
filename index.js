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
  let firstClick = false;

  // GPS souřadnice pro adresu Holovousy 53
  const lat = "50.3759308";
  const lon = "15.5746725";

  // Odkazy na různé navigace
  const googleMapsMobile = `https://maps.app.goo.gl/?link=https://www.google.com/maps/dir/?api=1&destination=${lat},${lon}`;
  const googleMapsWeb = `https://www.google.com/maps/dir/?api=1&destination=${lat},${lon}`;
  const geoUrl = `geo:${lat},${lon}`;

  navLink.addEventListener("click", function (event) {
    if (!firstClick) {
      event.preventDefault(); // Zabrání okamžitému přesměrování
      navText.style.display = "inline"; // Zobrazí text
      firstClick = true;
      setTimeout(() => {
        // Pokud je mobilní zařízení, otevře Maps app (nebo geo:)
        if (/Android|iPhone/i.test(navigator.userAgent)) {
          navLink.href = googleMapsMobile;
        } else {
          navLink.href = googleMapsWeb;
        }
      }, 10);
    }
  });
});
