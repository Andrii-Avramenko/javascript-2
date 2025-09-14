const options = {
  threshold: 0.5,
  // Відсоток картинки який має бути видно щоб завантажилась картинка
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const img = entry.target;
      const src = img.getAttribute("data-src"); // Посилання на картинку
      img.classList.add("loaded"); // Додаваня класу для анімації
      img.setAttribute("src", src); // Заміна посилання картинки
      observer.unobserve(img); // Кінець перегляду картинки
    }
  });
}, options);

const images = document.querySelectorAll(".image"); // Обрати всі картинки

images.forEach((img) => {
  observer.observe(img); // Початок перегляду картинки
});
