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

  // Univerzální odkaz pro mobilní Google Maps
  const googleMapsNav = `https://www.google.com/maps/dir/?api=1&destination=${lat},${lon}&travelmode=driving`;

  navLink.addEventListener("click", function (event) {
    if (!firstClick) {
      event.preventDefault(); // Zabrání okamžitému přesměrování
      navText.style.display = "inline"; // Zobrazí text
      firstClick = true;
      setTimeout(() => {
        window.location.href = googleMapsNav; // Otevře navigaci
      }, 10);
    }
  });
});
