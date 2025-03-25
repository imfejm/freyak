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

      // Přidání odkazů
      fullDiv.innerHTML += `
              <a class="phonefix">
            <img src="img/phone.png" alt="phone icon" width="30px" />
            <span id="nav-text">zavolat</span>
        </a>
              <a href="#order" class="ordertext">
                  <img src="img/objednat.png" alt="form icon" width="50px" />
                  <span>objednat se</span>
              </a>
             
              
          `;

      fullDiv.classList.add("visible"); // Přidání třídy pro zobrazení
    } else if (window.scrollY < threshold && added) {
      added = false;

      // Odebrání přidaných odkazů
      fullDiv.innerHTML = `<a href="#contact" data-key="contact">
      <img src="img/kontakt.png" alt="form icon" width="30px" class="konup" />
            <span>kontakt</span></a>`;
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
  emailjs.init("SVmLKEhincDuKtRSg"); // Inicializace EmailJS

  document
    .getElementById("contact-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();

      const phoneInput = document.getElementById("phoneNumber");

      if (!phoneInput) {
        console.error("❌ Element #phoneNumber neexistuje v HTML!");
        return;
      }

      const phoneNumber = phoneInput.value.trim();
      console.log("Telefonní číslo:", phoneNumber);

      // Pokračování v odesílání EmailJS...
    });
});

document.addEventListener("DOMContentLoaded", function () {
  emailjs.init("SVmLKEhincDuKtRSg"); // Inicializace EmailJS
});

document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const form = event.target;
    const serviceID = "service_4wdj45h"; // Nahraď vlastním service_id
    const templateID = "template_ptyg4ol"; // Nahraď vlastním template_id

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const date = document.getElementById("date").value.trim();
    const phoneNumber = document.getElementById("phoneNumber").value.trim();
    const honeypot = document.getElementById("honeypot").value; // Honeypot ochrana
    const submitTime = new Date().getTime();

    if (!form.dataset.startTime) {
      form.dataset.startTime = submitTime;
    }

    const elapsedTime = submitTime - form.dataset.startTime;

    // ✅ 1. Kontrola honeypot inputu (musí být prázdný)
    if (honeypot !== "") {
      alert("Spam detekován!");
      return;
    }

    // ✅ 2. Kontrola příliš rychlého odeslání (méně než 2 sekundy)
    if (elapsedTime < 2000) {
      alert("Formulář byl odeslán příliš rychle. Zkuste to znovu.");
      return;
    }

    // ✅ 3. Ověření obsahu zprávy (blokace spammových vzorů)
    const spamPatterns = [
      /http(s)?:\/\//i,
      /viagra/i,
      /free money/i,
      /crypto/i,
    ];
    if (spamPatterns.some((pattern) => pattern.test(message))) {
      alert("Zpráva obsahuje podezřelé prvky. Zkuste jiný text.");
      return;
    }

    const templateParams = {
      name: name,
      reply_to: email,
      message: message,
      date: date,
      phoneNumber: phoneNumber,
    };

    emailjs
      .send(serviceID, templateID, templateParams)
      .then((response) => {
        alert("Zpráva byla úspěšně odeslána!");
        form.reset();
        form.dataset.startTime = ""; // Reset časovače
      })
      .catch((error) => {
        alert("Chyba při odesílání: " + error.text);
      });
  });

const phoneInput = document.getElementById("phoneNumber");

if (phoneInput) {
  const phoneNumber = phoneInput.value.trim();
} else {
  console.error("❌ Prvek #phoneNumber nebyl nalezen v HTML!");
}
