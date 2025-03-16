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

  // URL pro různé navigační aplikace
  const lat = "50.3759308";
  const lon = "15.5746725";
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${lat},${lon}`;
  const geoUrl = `geo:${lat},${lon}`;

  navLink.addEventListener("click", function (event) {
    if (!firstClick) {
      event.preventDefault(); // Zabrání okamžitému přesměrování
      navText.style.display = "inline"; // Zobrazí text
      firstClick = true;
      setTimeout(() => {
        // Nastavíme odkaz podle zařízení (Google Maps / ostatní navigace)
        if (
          navigator.userAgent.includes("Android") ||
          navigator.userAgent.includes("iPhone")
        ) {
          navLink.href = geoUrl; // Otevře nativní navigaci
        } else {
          navLink.href = googleMapsUrl; // Otevře Google Maps
        }
      }, 10);
    }
  });
});
