// Optional JavaScript for interactive features
// This file is included in the development and build output

import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

console.log("Shopify Liquid Test - Ready!");

document.addEventListener("DOMContentLoaded", () => {
  const productSwipers = document.querySelectorAll(".product-swiper");

  // Custom Swiper pagination
  productSwipers.forEach((swiper) => {
    new Swiper(swiper, {
      modules: [Pagination],
      slidesPerView: 1,
      pagination: {
        el: swiper.querySelector(".swiper-pagination"),
        clickable: true,
      },
    });
  });

  // Quantity Selector
  const cards = document.querySelectorAll(".product-card");
  cards.forEach((card) => {
    const productId = card.dataset.productId;
    const minusBtn = document.getElementById(`minus_${productId}`);
    const plusBtn = document.getElementById(`plus_${productId}`);
    const quantitySpan = document.getElementById(`quantity_${productId}`);

    // Initialize minus button state
    const updateMinusBtnStatus = () => {
      const quantityValue = parseInt(quantitySpan.textContent);
      if (quantityValue <= 1) {
        minusBtn.disabled = true;
      } else {
        minusBtn.disabled = false;
      }
    };

    updateMinusBtnStatus();

    minusBtn.addEventListener("click", () => {
      const quantityValue = parseInt(quantitySpan.textContent);
      if (quantityValue > 1) {
        quantitySpan.textContent = quantityValue - 1;
        updateMinusBtnStatus();
      }
    });

    plusBtn.addEventListener("click", () => {
      const quantityValue = parseInt(quantitySpan.textContent);
      quantitySpan.textContent = quantityValue + 1;
      updateMinusBtnStatus();
    });
  });
});
