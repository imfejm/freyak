//navigace na klik a krizek z ham
const tlacitko = document.querySelector("#ham");
const rozbal = document.querySelector("#menu");
const odkazy = rozbal.querySelectorAll("a");

tlacitko.addEventListener("click", () => {
  rozbal.classList.toggle("hidden");

  document.querySelector("#cara1").classList.toggle("caraA");
  document.querySelector("#cara2").classList.toggle("caraB");
  document.querySelector("#cara3").classList.toggle("caraC");
});

// Zavření menu po kliknutí na jakýkoli odkaz
odkazy.forEach((link) => {
  link.addEventListener("click", () => {
    rozbal.classList.add("hidden"); // Skryje menu

    // Vrátí čáry do původní polohy (křížek zpět na hamburger)
    document.querySelector("#cara1").classList.remove("caraA");
    document.querySelector("#cara2").classList.remove("caraB");
    document.querySelector("#cara3").classList.remove("caraC");
  });
});

//navigace
document.addEventListener("DOMContentLoaded", function () {
  const navLink = document.getElementById("nav-link");
  const navText = document.getElementById("nav-text");

  // Text zobrazíme hned po načtení stránky
  navText.style.display = "inline";
});

//odkazy pri rolovani do listy
document.addEventListener("DOMContentLoaded", function () {
  const fullDiv = document.querySelector(".full");
  const threshold = window.innerHeight * 0.7; // 70vh v pixelech
  let added = false;

  window.addEventListener("scroll", function () {
    if (window.scrollY >= threshold && !added) {
      added = true;

      // Přidání všech odkazů najednou
      fullDiv.innerHTML = `
      
        <a class="phonefix">
          <img src="img/phone.png" alt="phone icon" width="30px" />
          <span id="nav-text">zavolat</span>
        </a>
        <a href="#order" class="ordertext">
          <img src="img/objednat.png" alt="form icon" width="50px" />
          <span>objednat se</span>
        </a>
          <a href="#contact" data-key="contact">
          <img src="img/kontakt.png" alt="form icon" width="30px" class="konup" />
          <span>kontakt</span>
        </a>
      `;

      fullDiv.classList.add("visible"); // Přidání třídy pro zobrazení
    } else if (window.scrollY < threshold && added) {
      added = false;

      // Odebrání všech odkazů
      fullDiv.innerHTML = "";
      fullDiv.classList.remove("visible");
    }
  });
});

//popup okno s tel. cislem
document.addEventListener("DOMContentLoaded", function () {
  const phoneModal = document.getElementById("phoneModal");
  const closeModal = document.getElementById("closeModal");
  const copyButton = document.getElementById("copyPhone");
  const phoneNumber = document.getElementById("phoneNumber").textContent;

  // Event delegation – zachytává kliknutí na `.phoneup` a `.phonefix`
  document.body.addEventListener("click", function (event) {
    if (event.target.closest(".phoneup, .phonefix")) {
      event.preventDefault(); // Zabrání výchozímu chování (pokud tam bylo href)
      phoneModal.style.display = "block"; // Otevře popup
    }
  });

  closeModal.addEventListener("click", function () {
    phoneModal.style.display = "none"; // Zavře popup
  });

  // Zavření při kliknutí mimo popup
  window.addEventListener("click", function (event) {
    if (event.target === phoneModal) {
      phoneModal.style.display = "none";
    }
  });

  // Kopírování telefonního čísla
  copyButton.addEventListener("click", function () {
    navigator.clipboard
      .writeText(phoneNumber)
      .then(() => {
        alert("Telefonní číslo zkopírováno!");
      })
      .catch((err) => {
        console.error("Chyba při kopírování: ", err);
      });
  });
});

//kontaktni formular:

document.addEventListener("DOMContentLoaded", function () {
  emailjs.init("SVmLKEhincDuKtRSg");

  document
    .getElementById("contact-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();

      const form = event.target;
      const honeypot = form.honeypot.value;

      if (honeypot) {
        console.warn("Spam bot detekován!");
        return;
      }

      emailjs
        .sendForm("service_4wdj45h", "template_ptyg4ol", form)
        .then(() => {
          showCustomAlert(
            "Zpráva byla úspěšně odeslána! Prosím vyčkejte na potvrzení termínu."
          );
          form.reset();
        })
        .catch((error) => {
          console.error("Chyba při odesílání:", error);
          showCustomAlert(
            "Omlouváme se, zprávu se nepodařilo odeslat. Zkuste to prosím znovu."
          );
        });
    });
});

// Funkce pro zobrazení vlastního alertu
function showCustomAlert(message) {
  const alertBox = document.createElement("div");
  alertBox.innerHTML = `<p>${message}</p><button onclick="this.parentElement.remove()">OK</button>`;
  alertBox.style.cssText = `
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background:rgb(206, 190, 189);
      padding: 20px;
      border-radius: 10px;
      box-shadow: 0px 4px 6px rgb(150, 179, 84);
      text-align: center;
      font-size: 24px;
      max-width: 80%;
      z-index: 1000;
  `;

  document.body.appendChild(alertBox);
}

//recaptcha
document.getElementById("contact-form").addEventListener("submit", function (event) {
  var recaptchaResponse = grecaptcha.getResponse();
  if (!recaptchaResponse) {
      event.preventDefault(); // Zastaví odeslání formuláře
      alert("Prosím potvrďte, že nejste robot.");
  }
});