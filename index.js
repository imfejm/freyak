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

  // GPS souřadnice pro adresu Holovousy 53
  const lat = "50.3759308";
  const lon = "15.5746725";

  // Univerzální odkaz pro mobilní Google Maps
  const googleMapsNav = `https://www.google.com/maps/dir/?api=1&destination=${lat},${lon}&travelmode=driving`;

  navLink.addEventListener("click", function (event) {
    event.preventDefault(); // Zabrání okamžitému přesměrování

    // Pokud je text zobrazený => uživatel už klikl dříve, rovnou přesměruj
    if (navText.style.display === "inline") {
      window.location.href = googleMapsNav;
    } else {
      navText.style.display = "inline"; // Zobrazí text
      setTimeout(() => {
        navLink.href = googleMapsNav; // Nastaví odkaz
      }, 10);
    }
  });
});


