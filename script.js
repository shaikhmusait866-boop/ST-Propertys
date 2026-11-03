// ================= PROPERTY DATA =================

const properties = [
  {
    name: "Burj Residences",
    loc: "Dubai, UAE",
    price: "₹ 2.5 Cr",
    type: "Luxury",
    cat: "luxury",
    img: "photo-1486406146926-c627a92ad1ab"
  },
  {
    name: "Palm Villa",
    loc: "Palm Jumeirah",
    price: "₹ 1.8 Cr",
    type: "Villa",
    cat: "residential",
    img: "photo-1600607687939-ce8a6c25118c"
  },
  {
    name: "Skyline Apartments",
    loc: "Dubai Marina",
    price: "₹ 95 Lakh",
    type: "Apartment",
    cat: "residential",
    img: "photo-1545324418-cc1a3fa10c00"
  },
  {
    name: "Business Tower",
    loc: "Business Bay",
    price: "₹ 3.2 Cr",
    type: "Commercial",
    cat: "commercial",
    img: "photo-1486406146926-c627a92ad1ab"
  },
  {
    name: "Luxury Villa",
    loc: "Emirates Hills",
    price: "₹ 1.2 Cr",
    type: "Villa",
    cat: "luxury",
    img: "photo-1600607687920-4e2a09cf159d"
  },
  {
    name: "Metro Heights",
    loc: "Downtown Dubai",
    price: "₹ 72 Lakh",
    type: "Apartment",
    cat: "residential",
    img: "photo-1460472178825-e5240623afd5"
  },
  {
    name: "Central Plaza",
    loc: "Dubai, UAE",
    price: "₹ 2.1 Cr",
    type: "Commercial",
    cat: "commercial",
    img: "photo-1486406146926-c627a92ad1ab"
  },
  {
    name: "Skyline Penthouse",
    loc: "Dubai Marina",
    price: "₹ 4.5 Cr",
    type: "Penthouse",
    cat: "luxury",
    img: "photo-1600210492486-724fe5c67fb0"
  }
];


// ================= PROPERTY DISPLAY =================

const grid = document.getElementById("propertyGrid");

function render(filter = "all") {

  if (!grid) return;

  grid.innerHTML = properties
    .filter(property => filter === "all" || property.cat === filter)
    .map(property => `
      <article class="property-card">

        <div class="property-image">
          <img
            loading="lazy"
            src="https://images.unsplash.com/${property.img}?auto=format&fit=crop&w=800&q=85"
            alt="${property.name}"
          >

          <span class="tag">${property.type}</span>
        </div>

        <div class="property-info">

          <h3>${property.name}</h3>

          <div class="location">
            ⌖ ${property.loc}
          </div>

          <div class="price-row">

            <span class="price">${property.price}</span>

            <a
              class="enquire"
              href="#enquiry"
              onclick="selectProperty('${property.name}')"
            >
              Enquire ↗
            </a>

          </div>

        </div>

      </article>
    `).join("");
}

render();


// ================= PROPERTY FILTER =================

document.querySelectorAll(".filter").forEach(button => {

  button.addEventListener("click", () => {

    document.querySelector(".filter.active")
      ?.classList.remove("active");

    button.classList.add("active");

    render(button.dataset.filter);

  });

});


// ================= SELECT PROPERTY =================

function selectProperty(name) {

  const message = document.querySelector('[name="message"]');

  if (message) {
    message.value = "I am interested in " + name;
  }

}
// ================= WHATSAPP ENQUIRY =================

const enquiryForm = document.getElementById("enquiryForm");

if (enquiryForm) {

  enquiryForm.onsubmit = function(event) {

    event.preventDefault();

    const formData = new FormData(enquiryForm);

    let message = "🏡 ST PROPERTYs - NEW ENQUIRY\n\n";

    formData.forEach((value, key) => {

      message += key + ": " + value + "\n";

    });

    const phone = "918104129866";

    const whatsappURL =
      "https://wa.me/" + phone +
      "?text=" + encodeURIComponent(message);

    window.open(whatsappURL, "_blank");

  };

}


// ================= MOBILE MENU =================

const menuToggle = document.getElementById("menuToggle");

const navLinks = document.getElementById("navLinks");


if (menuToggle && navLinks) {

  menuToggle.onclick = () => {

    navLinks.classList.toggle("open");

  };

}


document.querySelectorAll("#navLinks a").forEach(link => {

  link.addEventListener("click", () => {

    navLinks?.classList.remove("open");

  });

});


// ================= FOOTER YEAR =================

const year = document.getElementById("year");

if (year) {

  year.textContent = new Date().getFullYear();

}


// ================= WEBSITE LOADER =================

window.addEventListener("load", () => {

  setTimeout(() => {

    document.getElementById("loader")
      ?.classList.add("hide");

  }, 900);

});