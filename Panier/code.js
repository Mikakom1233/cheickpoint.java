document.addEventListener("DOMContentLoaded", function() {
  const quantityBtns = document.querySelectorAll(".quantity-btn");
  const deleteBtns = document.querySelectorAll(".delete-btn");
  const likeBtns = document.querySelectorAll(".like-btn");
  let totalPrice = 0;

  // Gestion des clics sur les boutons de quantité
  quantityBtns.forEach(btn => {
    btn.addEventListener("click", function() {
      const article = this.closest(".article");
      const quantity = article.querySelector(".quantity");
      const price = parseInt(article.querySelector(".article-price").textContent.replace('XOF', '').trim());
      if (this.classList.contains("plus")) {
        quantity.textContent = parseInt(quantity.textContent) + 1;
        totalPrice += price;
      } else if (parseInt(quantity.textContent) > 1) {
        quantity.textContent = parseInt(quantity.textContent) - 1;
        totalPrice -= price;
      }
      document.getElementById("total-price").textContent = totalPrice.toLocaleString('fr-FR') + " XOF";
    });
  });

  // Gestion des clics sur les boutons de suppression
  deleteBtns.forEach(btn => {
    btn.addEventListener("click", function() {
      const article = this.closest(".article");
      const price = parseInt(article.querySelector(".article-price").textContent.replace('XOF', '').trim());
      const quantity = parseInt(article.querySelector(".quantity").textContent);
      totalPrice -= price * quantity;
      article.remove();
      document.getElementById("total-price").textContent = totalPrice.toLocaleString('fr-FR') + " XOF";
    });
  });

  // Gestion des clics sur les boutons de like
  likeBtns.forEach(btn => {
    btn.addEventListener("click", function() {
      if (this.classList.contains("liked")) {
        this.classList.remove("liked");
      } else {
        this.classList.add("liked");
      }
    });
  });
});

