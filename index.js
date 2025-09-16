cardholder = document.querySelector(".cards");

cards = [
  {
    title: "Дз 2",
    link: "hw-2",
    image: `./cards-preview/hw2img.png`
  }, 
  {
    title: "Дз 3",
    link: "hw-3",
    image: `./cards-preview/hw3img.png`
  }
];

cardholder.innerHTML = cards.map(card => `
    <li class="card">
        <img src="" data-src="${card.image}" class="card-image"></img>
        <div class="card-content">
            <h2 class="card-title">${card.title}</h2>
            <a href="./${card.link}" class="card-link">Перейти на ${card.title}</a>
        </div>
    </li>
`).join("");

const options = {
  threshold: 0.5,
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const img = entry.target;
      const src = img.getAttribute("data-src");
      img.classList.add("loaded"); 
      img.setAttribute("src", src);
      observer.unobserve(img); 
    }
  });
}, options);

const images = document.querySelectorAll(".card-image"); 

images.forEach((img) => {
  observer.observe(img); 
});
